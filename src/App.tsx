import { useEffect, useMemo, useRef, useState } from 'react'
import { Compass, Crosshair, Database, Info, LocateFixed, Map as MapIcon, Play, RotateCcw, Search, SkipForward, X } from 'lucide-react'
import gsap from 'gsap'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import './App.css'
import {
  galaxyRadiusLy,
  learningObjects,
  sources,
  sunGalactocentricDistanceLy,
  tourStops,
  type LearningObject,
} from './data/galaxyData'
import { localStars, type LocalStar } from './data/localStars'
import { exoplanetArchiveSnapshot, exoplanets, type Exoplanet } from './data/exoplanets'
import { solarSystemObjects, type SolarSystemObject } from './data/solarSystem'

type PanelItem = {
  id: string
  name: string
  kind: string
  distance: string
  summary: string
  fact: string
  sourceLabels: string[]
}

type SceneApi = {
  flyTo: (camera: [number, number, number], target: [number, number, number]) => void
  selectObject: (id: string) => void
  setZoom: (value: number) => void
  reset: () => void
}

const UNIT_PER_LY = 1 / 1000
const LOCAL_UNIT_PER_LY = 1 / 80
const SOLAR_UNIT_PER_AU = 0.045
const sunPosition = new THREE.Vector3(sunGalactocentricDistanceLy * UNIT_PER_LY, 0, 0)

function toScenePosition(positionLy: [number, number, number]) {
  return new THREE.Vector3(positionLy[0] * UNIT_PER_LY, positionLy[1] * UNIT_PER_LY, positionLy[2] * UNIT_PER_LY)
}

function localStarPosition(star: LocalStar) {
  return new THREE.Vector3(
    sunPosition.x + star.positionLy[0] * LOCAL_UNIT_PER_LY,
    star.positionLy[1] * LOCAL_UNIT_PER_LY,
    star.positionLy[2] * LOCAL_UNIT_PER_LY,
  )
}

function panelFromObject(object: LearningObject): PanelItem {
  return {
    id: object.id,
    name: object.name,
    kind: object.kind,
    distance: object.distance,
    summary: object.summary,
    fact: object.fact,
    sourceLabels: object.sourceIds.map((sourceId) => sources[sourceId].label),
  }
}

function panelFromStar(star: LocalStar): PanelItem {
  return {
    id: star.id,
    name: star.name,
    kind: 'catalog star',
    distance: `${star.distanceLy.toLocaleString()} light-years from the Sun`,
    summary: `A real star from the HYG catalog. Spectral class: ${star.spectralClass}; apparent magnitude: ${star.apparentMagnitude}.`,
    fact: star.fact,
    sourceLabels: [sources.hyg.label],
  }
}

function panelFromExoplanet(planet: Exoplanet): PanelItem {
  const stats = [
    planet.discoveryYear ? `discovered ${planet.discoveryYear}` : null,
    planet.discoveryMethod,
    planet.orbitalPeriodDays ? `${planet.orbitalPeriodDays.toLocaleString()} day orbit` : null,
    planet.radiusEarth ? `${planet.radiusEarth.toLocaleString()} Earth radii` : null,
  ].filter(Boolean)

  return {
    id: planet.id,
    name: planet.name,
    kind: 'confirmed exoplanet',
    distance: `${planet.distanceLy.toLocaleString()} light-years from the Sun, around ${planet.host}`,
    summary: `A confirmed planet in NASA's Exoplanet Archive. ${stats.join(' · ')}.`,
    fact: planet.fact,
    sourceLabels: [sources.nasaExoplanetArchive.label],
  }
}

function panelFromSolarObject(object: SolarSystemObject): PanelItem {
  return {
    id: object.id,
    name: object.name,
    kind: object.kind,
    distance: `${object.distanceAu.toLocaleString()} AU from the Sun in the magnified Solar System inset`,
    summary: object.summary,
    fact: object.fact,
    sourceLabels: [sources.nasaSolarSystem.label, sources.nasaSolarSystemScale.label],
  }
}

function makeStarTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 96
  canvas.height = 96
  const context = canvas.getContext('2d')
  if (!context) return new THREE.CanvasTexture(canvas)
  const gradient = context.createRadialGradient(48, 48, 1, 48, 48, 46)
  gradient.addColorStop(0, 'rgba(255,255,255,1)')
  gradient.addColorStop(0.22, 'rgba(255,255,255,.85)')
  gradient.addColorStop(0.55, 'rgba(135,188,255,.26)')
  gradient.addColorStop(1, 'rgba(255,255,255,0)')
  context.fillStyle = gradient
  context.fillRect(0, 0, 96, 96)
  return new THREE.CanvasTexture(canvas)
}

function createGalaxyPoints() {
  const particleCount = 82000
  const positions = new Float32Array(particleCount * 3)
  const colors = new Float32Array(particleCount * 3)
  const color = new THREE.Color()
  const armCount = 4

  for (let i = 0; i < particleCount; i += 1) {
    const radius = Math.pow(Math.random(), 0.62) * galaxyRadiusLy * UNIT_PER_LY
    const arm = i % armCount
    const base = (arm / armCount) * Math.PI * 2
    const theta = base + radius * 0.22 + (Math.random() - 0.5) * (0.62 + radius * 0.015)
    const laneJitter = (Math.random() - 0.5) * (1.4 + radius * 0.035)
    const corePull = Math.random() < 0.18 ? Math.random() * 7 : 0
    const x = Math.cos(theta) * Math.max(0, radius - corePull) + Math.cos(theta + Math.PI / 2) * laneJitter
    const z = Math.sin(theta) * Math.max(0, radius - corePull) + Math.sin(theta + Math.PI / 2) * laneJitter
    const y = (Math.random() - 0.5) * (0.25 + Math.pow(radius / 50, 1.7) * 2.1)

    positions[i * 3] = x
    positions[i * 3 + 1] = y
    positions[i * 3 + 2] = z

    const hotCore = radius < 8
    const palette = hotCore ? ['#fff4c2', '#ffc27e', '#ff8f70'] : ['#b9d8ff', '#fff0c8', '#ffc0a3', '#8fd7ff']
    color.set(palette[Math.floor(Math.random() * palette.length)])
    const fade = THREE.MathUtils.clamp(1.08 - radius / 58, 0.18, 1)
    colors[i * 3] = color.r * fade
    colors[i * 3 + 1] = color.g * fade
    colors[i * 3 + 2] = color.b * fade
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  return geometry
}

function createDustLanes() {
  const count = 18000
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const color = new THREE.Color('#3b241d')

  for (let i = 0; i < count; i += 1) {
    const radius = 6 + Math.random() * 39
    const theta = radius * 0.2 + (i % 4) * (Math.PI / 2) + (Math.random() - 0.5) * 0.28
    const x = Math.cos(theta) * radius + (Math.random() - 0.5) * 1.8
    const z = Math.sin(theta) * radius + (Math.random() - 0.5) * 1.8
    positions[i * 3] = x
    positions[i * 3 + 1] = (Math.random() - 0.5) * 0.18
    positions[i * 3 + 2] = z
    colors[i * 3] = color.r
    colors[i * 3 + 1] = color.g
    colors[i * 3 + 2] = color.b
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  return geometry
}

function objectSize(object: LearningObject) {
  return Math.max(0.18, object.size * UNIT_PER_LY * 0.55)
}

function createScene(
  container: HTMLDivElement,
  onSelect: (item: PanelItem) => void,
  onScale: (scaleLabel: string) => void,
): SceneApi {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(container.clientWidth, container.clientHeight)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.05
  container.appendChild(renderer.domElement)

  const scene = new THREE.Scene()
  scene.background = new THREE.Color('#050811')
  scene.fog = new THREE.FogExp2('#050811', 0.008)

  const camera = new THREE.PerspectiveCamera(52, container.clientWidth / container.clientHeight, 0.05, 220)
  camera.position.set(0, 62, 62)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.06
  controls.minDistance = 1.6
  controls.maxDistance = 118
  controls.target.set(12, 0, 0)

  scene.add(new THREE.AmbientLight('#9db8ff', 0.42))
  const coreLight = new THREE.PointLight('#ffc891', 55, 42, 1.8)
  scene.add(coreLight)

  const starTexture = makeStarTexture()
  const galaxyMaterial = new THREE.PointsMaterial({
    size: 0.105,
    map: starTexture,
    vertexColors: true,
    transparent: true,
    opacity: 0.86,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  })
  const galaxy = new THREE.Points(createGalaxyPoints(), galaxyMaterial)
  scene.add(galaxy)

  const dust = new THREE.Points(
    createDustLanes(),
    new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      transparent: true,
      opacity: 0.23,
      depthWrite: false,
    }),
  )
  scene.add(dust)

  const coreSpriteMaterial = new THREE.SpriteMaterial({
    map: starTexture,
    color: '#ffd59b',
    transparent: true,
    opacity: 0.95,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })
  const coreGlow = new THREE.Sprite(coreSpriteMaterial)
  coreGlow.scale.set(12, 12, 1)
  scene.add(coreGlow)

  const clickableObjects: THREE.Object3D[] = []
  const objectMeshes = new Map<string, THREE.Mesh>()
  const objectBaseSizes = new Map<string, number>()
  const sharedSphere = new THREE.SphereGeometry(1, 32, 16)

  for (const object of learningObjects) {
    const material = new THREE.MeshBasicMaterial({
      color: object.color,
      transparent: true,
      opacity: object.kind === 'arm' ? 0.38 : 0.72,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const marker = new THREE.Mesh(sharedSphere, material)
    marker.position.copy(toScenePosition(object.position))
    const markerSize = objectSize(object)
    marker.scale.setScalar(markerSize)
    marker.userData = { item: panelFromObject(object), objectId: object.id }
    clickableObjects.push(marker)
    objectMeshes.set(object.id, marker)
    objectBaseSizes.set(object.id, markerSize)
    scene.add(marker)

    const ring = new THREE.Mesh(
      new THREE.RingGeometry(markerSize * 1.45, markerSize * 1.55, 48),
      new THREE.MeshBasicMaterial({ color: object.color, transparent: true, opacity: 0.22, side: THREE.DoubleSide }),
    )
    ring.rotation.x = Math.PI / 2
    ring.position.copy(marker.position)
    scene.add(ring)
  }

  const sunMarker = objectMeshes.get('sun')
  if (sunMarker) {
    const lineMaterial = new THREE.LineBasicMaterial({ color: '#fff1a8', transparent: true, opacity: 0.38 })
    const lineGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), sunMarker.position])
    scene.add(new THREE.Line(lineGeometry, lineMaterial))
  }

  const localPositions = new Float32Array(localStars.length * 3)
  const localColors = new Float32Array(localStars.length * 3)
  const color = new THREE.Color()

  localStars.forEach((star, index) => {
    const position = localStarPosition(star)
    localPositions[index * 3] = position.x
    localPositions[index * 3 + 1] = position.y
    localPositions[index * 3 + 2] = position.z
    color.set(star.color)
    localColors[index * 3] = color.r
    localColors[index * 3 + 1] = color.g
    localColors[index * 3 + 2] = color.b
  })

  const localGeometry = new THREE.BufferGeometry()
  localGeometry.setAttribute('position', new THREE.BufferAttribute(localPositions, 3))
  localGeometry.setAttribute('color', new THREE.BufferAttribute(localColors, 3))
  const localCloud = new THREE.Points(
    localGeometry,
    new THREE.PointsMaterial({
      size: 0.075,
      map: starTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  )
  localCloud.userData = { localStars: true }
  scene.add(localCloud)

  const exoplanetPositions = new Float32Array(exoplanets.length * 3)
  const exoplanetColors = new Float32Array(exoplanets.length * 3)
  exoplanets.forEach((planet, index) => {
    const position = toScenePosition(planet.positionLy)
    exoplanetPositions[index * 3] = position.x
    exoplanetPositions[index * 3 + 1] = position.y
    exoplanetPositions[index * 3 + 2] = position.z
    const planetColor = planet.radiusEarth && planet.radiusEarth > 8 ? '#ffc37b' : planet.radiusEarth && planet.radiusEarth < 1.6 ? '#75d5ff' : '#d6a4ff'
    color.set(planetColor)
    exoplanetColors[index * 3] = color.r
    exoplanetColors[index * 3 + 1] = color.g
    exoplanetColors[index * 3 + 2] = color.b
  })

  const exoplanetGeometry = new THREE.BufferGeometry()
  exoplanetGeometry.setAttribute('position', new THREE.BufferAttribute(exoplanetPositions, 3))
  exoplanetGeometry.setAttribute('color', new THREE.BufferAttribute(exoplanetColors, 3))
  const exoplanetCloud = new THREE.Points(
    exoplanetGeometry,
    new THREE.PointsMaterial({
      size: 0.13,
      map: starTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.72,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  )
  exoplanetCloud.userData = { exoplanets: true }
  scene.add(exoplanetCloud)

  const solarGroup = new THREE.Group()
  solarGroup.position.copy(sunPosition)
  solarGroup.rotation.x = -0.18
  scene.add(solarGroup)

  const solarMeshes = new Map<string, THREE.Mesh>()
  for (const object of solarSystemObjects) {
    const orbitRadius = object.distanceAu * SOLAR_UNIT_PER_AU
    const orbit = new THREE.LineLoop(
      new THREE.BufferGeometry().setFromPoints(
        Array.from({ length: 160 }, (_, index) => {
          const theta = (index / 160) * Math.PI * 2
          return new THREE.Vector3(Math.cos(theta) * orbitRadius, 0, Math.sin(theta) * orbitRadius)
        }),
      ),
      new THREE.LineBasicMaterial({
        color: object.color,
        transparent: true,
        opacity: object.kind === 'planet' ? 0.32 : 0.16,
      }),
    )
    solarGroup.add(orbit)

    const angle = object.distanceAu * 1.73
    const marker = new THREE.Mesh(
      sharedSphere,
      new THREE.MeshBasicMaterial({
        color: object.color,
        transparent: true,
        opacity: 0.86,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    )
    marker.position.set(Math.cos(angle) * orbitRadius, object.kind === 'planet' ? 0.08 : -0.08, Math.sin(angle) * orbitRadius)
    const markerSize = Math.max(0.08, Math.log10(object.radiusEarth + 1) * 0.28)
    marker.scale.setScalar(markerSize)
    marker.userData = { item: panelFromSolarObject(object), objectId: object.id, solarSystem: true }
    clickableObjects.push(marker)
    solarMeshes.set(object.id, marker)
    objectBaseSizes.set(object.id, markerSize)
    solarGroup.add(marker)
  }

  const composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))
  const bloom = new UnrealBloomPass(new THREE.Vector2(container.clientWidth, container.clientHeight), 0.82, 0.45, 0.18)
  composer.addPass(bloom)

  const raycaster = new THREE.Raycaster()
  raycaster.params.Points = { threshold: 0.16 }
  const pointer = new THREE.Vector2()
  let raf = 0

  const updateScale = () => {
    const distanceUnits = camera.position.distanceTo(controls.target)
    const viewLy = Math.round(distanceUnits / UNIT_PER_LY)
    const label = viewLy > 10000 ? `${Math.round(viewLy / 1000).toLocaleString()} thousand light-years` : `${viewLy.toLocaleString()} light-years`
    onScale(label)
  }

  const animate = () => {
    raf = window.requestAnimationFrame(animate)
    galaxy.rotation.y += 0.00008
    dust.rotation.y += 0.000055
    coreGlow.material.rotation += 0.002
    clickableObjects.forEach((object, index) => {
      const pulse = 1 + Math.sin(performance.now() * 0.0018 + index) * 0.04
      object.scale.setScalar((objectBaseSizes.get(object.userData.objectId) ?? 0.2) * pulse)
    })
    controls.update()
    updateScale()
    composer.render()
  }

  const flyTo = (cameraTarget: [number, number, number], lookTarget: [number, number, number]) => {
    const cameraScene = new THREE.Vector3(cameraTarget[0], cameraTarget[1], cameraTarget[2]).multiplyScalar(UNIT_PER_LY)
    const targetScene = new THREE.Vector3(lookTarget[0], lookTarget[1], lookTarget[2]).multiplyScalar(UNIT_PER_LY)
    gsap.to(camera.position, { x: cameraScene.x, y: cameraScene.y, z: cameraScene.z, duration: 2.2, ease: 'power3.inOut' })
    gsap.to(controls.target, { x: targetScene.x, y: targetScene.y, z: targetScene.z, duration: 2.2, ease: 'power3.inOut' })
  }

  const setZoom = (value: number) => {
    const t = value / 100
    const overview = new THREE.Vector3(0, 62, 62)
    const local = new THREE.Vector3(28.8, 2.2, 2.8)
    const targetOverview = new THREE.Vector3(12, 0, 0)
    const targetLocal = sunPosition.clone()
    const cameraNext = overview.lerp(local, t)
    const targetNext = targetOverview.lerp(targetLocal, t)
    gsap.to(camera.position, { x: cameraNext.x, y: cameraNext.y, z: cameraNext.z, duration: 0.9, ease: 'power2.out' })
    gsap.to(controls.target, { x: targetNext.x, y: targetNext.y, z: targetNext.z, duration: 0.9, ease: 'power2.out' })
  }

  const selectObject = (id: string) => {
    const object = learningObjects.find((entry) => entry.id === id)
    if (object) {
      const position = toScenePosition(object.position)
      const cameraOffset = object.scale === 'local' ? new THREE.Vector3(1.8, 1.2, 1.8) : new THREE.Vector3(6, 5, 6)
      const cameraScene = position.clone().add(cameraOffset)
      onSelect(panelFromObject(object))
      gsap.to(camera.position, { x: cameraScene.x, y: cameraScene.y, z: cameraScene.z, duration: 1.25, ease: 'power2.inOut' })
      gsap.to(controls.target, { x: position.x, y: position.y, z: position.z, duration: 1.25, ease: 'power2.inOut' })
      return
    }

    const solarObject = solarSystemObjects.find((entry) => entry.id === id)
    const solarMesh = solarObject ? solarMeshes.get(solarObject.id) : null
    if (solarObject && solarMesh) {
      const position = solarMesh.getWorldPosition(new THREE.Vector3())
      onSelect(panelFromSolarObject(solarObject))
      gsap.to(camera.position, { x: position.x + 1.6, y: position.y + 1.1, z: position.z + 1.6, duration: 1.25, ease: 'power2.inOut' })
      gsap.to(controls.target, { x: position.x, y: position.y, z: position.z, duration: 1.25, ease: 'power2.inOut' })
      return
    }

    const planet = exoplanets.find((entry) => entry.id === id)
    if (planet) {
      const position = toScenePosition(planet.positionLy)
      onSelect(panelFromExoplanet(planet))
      gsap.to(camera.position, { x: position.x + 1.5, y: position.y + 1.1, z: position.z + 1.5, duration: 1.25, ease: 'power2.inOut' })
      gsap.to(controls.target, { x: position.x, y: position.y, z: position.z, duration: 1.25, ease: 'power2.inOut' })
    }
  }

  const onPointerMove = (event: PointerEvent) => {
    const rect = renderer.domElement.getBoundingClientRect()
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
    raycaster.setFromCamera(pointer, camera)
    const hits = raycaster.intersectObjects([...clickableObjects, localCloud, exoplanetCloud], false)
    renderer.domElement.style.cursor = hits.length ? 'pointer' : 'grab'
  }

  const onClick = (event: PointerEvent) => {
    const rect = renderer.domElement.getBoundingClientRect()
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
    raycaster.setFromCamera(pointer, camera)
    const hits = raycaster.intersectObjects([...clickableObjects, localCloud, exoplanetCloud], false)
    const hit = hits[0]
    if (!hit) return

    if (hit.object.userData.localStars && typeof hit.index === 'number') {
      const star = localStars[hit.index]
      if (star) onSelect(panelFromStar(star))
      return
    }

    if (hit.object.userData.exoplanets && typeof hit.index === 'number') {
      const planet = exoplanets[hit.index]
      if (planet) onSelect(panelFromExoplanet(planet))
      return
    }

    const item = hit.object.userData.item as PanelItem | undefined
    if (item) onSelect(item)
  }

  const onResize = () => {
    camera.aspect = container.clientWidth / container.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(container.clientWidth, container.clientHeight)
    composer.setSize(container.clientWidth, container.clientHeight)
  }

  renderer.domElement.addEventListener('pointermove', onPointerMove)
  renderer.domElement.addEventListener('click', onClick)
  window.addEventListener('resize', onResize)
  animate()

  return {
    flyTo,
    selectObject,
    setZoom,
    reset: () => {
      window.cancelAnimationFrame(raf)
      renderer.domElement.removeEventListener('pointermove', onPointerMove)
      renderer.domElement.removeEventListener('click', onClick)
      window.removeEventListener('resize', onResize)
      controls.dispose()
      composer.dispose()
      renderer.dispose()
      container.innerHTML = ''
    },
  }
}

function App() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const sceneRef = useRef<SceneApi | null>(null)
  const [selected, setSelected] = useState<PanelItem>(() => panelFromObject(learningObjects[1]))
  const [scaleLabel, setScaleLabel] = useState('whole galaxy')
  const [zoom, setZoom] = useState(0)
  const [tourIndex, setTourIndex] = useState(0)
  const [tourActive, setTourActive] = useState(false)
  const [query, setQuery] = useState('')

  const searchResults = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return []

    const candidates = [
      ...learningObjects.map((object) => ({ id: object.id, name: object.name, kind: object.kind })),
      ...solarSystemObjects.map((object) => ({ id: object.id, name: object.name, kind: object.kind })),
      ...exoplanets.map((planet) => ({ id: planet.id, name: planet.name, kind: 'exoplanet' })),
    ]

    return candidates
      .filter((candidate) => candidate.name.toLowerCase().includes(normalized))
      .sort((a, b) => {
        const aStarts = a.name.toLowerCase().startsWith(normalized) ? 0 : 1
        const bStarts = b.name.toLowerCase().startsWith(normalized) ? 0 : 1
        return aStarts - bStarts || a.name.localeCompare(b.name)
      })
      .slice(0, 12)
  }, [query])

  useEffect(() => {
    if (!containerRef.current) return undefined
    sceneRef.current = createScene(containerRef.current, setSelected, setScaleLabel)
    return () => {
      sceneRef.current?.reset()
      sceneRef.current = null
    }
  }, [])

  const goToTourStop = (index: number) => {
    const nextIndex = (index + tourStops.length) % tourStops.length
    const stop = tourStops[nextIndex]
    setTourIndex(nextIndex)
    sceneRef.current?.flyTo(stop.camera, stop.target)
    sceneRef.current?.selectObject(stop.objectId)
  }

  const selectedStop = tourStops[tourIndex]

  return (
    <main className="app-shell">
      <div ref={containerRef} className="galaxy-canvas" aria-label="Interactive 3D map of the Milky Way" />

      <header className="topbar">
        <div className="brand">
          <MapIcon size={20} aria-hidden="true" />
          <div>
            <h1>Milky Way Learning Map</h1>
            <p>Real nearby stars, named galactic landmarks, and a guided scale flight.</p>
          </div>
        </div>
        <div className="scale-pill">
          <Crosshair size={16} aria-hidden="true" />
          <span>View radius: {scaleLabel}</span>
        </div>
      </header>

      <aside className="tool-panel" aria-label="Exploration controls">
        <div className="data-stats" aria-label="Loaded data layers">
          <div>
            <Database size={15} aria-hidden="true" />
            <strong>{exoplanetArchiveSnapshot.planetsWith3dPlacement.toLocaleString()}</strong>
            <span>exo-planets placed</span>
          </div>
          <div>
            <strong>{solarSystemObjects.length}</strong>
            <span>solar bodies</span>
          </div>
          <div>
            <strong>{learningObjects.length}</strong>
            <span>landmarks</span>
          </div>
        </div>
        <div className="control-row">
          <button type="button" onClick={() => sceneRef.current?.selectObject('sun')} aria-label="Go to the Sun">
            <LocateFixed size={18} aria-hidden="true" />
          </button>
          <button type="button" onClick={() => sceneRef.current?.selectObject('sagittarius-a')} aria-label="Go to Sagittarius A star">
            <Compass size={18} aria-hidden="true" />
          </button>
          <button type="button" onClick={() => sceneRef.current?.flyTo([0, 62000, 62000], [12000, 0, 0])} aria-label="Reset galaxy view">
            <RotateCcw size={18} aria-hidden="true" />
          </button>
        </div>
        <label className="zoom-control">
          <span>Galaxy to neighborhood</span>
          <input
            aria-label="Zoom from galaxy scale to solar neighborhood"
            type="range"
            min="0"
            max="100"
            value={zoom}
            onChange={(event) => {
              const value = Number(event.target.value)
              setZoom(value)
              sceneRef.current?.setZoom(value)
            }}
          />
        </label>
        <div className="ruler" aria-hidden="true">
          <span />
          <strong>{zoom < 45 ? '10,000 ly' : zoom < 82 ? '1,000 ly' : '100 ly'}</strong>
        </div>
        <div className="search-panel">
          <label>
            <Search size={15} aria-hidden="true" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Find Earth, Proxima Cen b, Crab..."
              aria-label="Search planets, exoplanets, nebulae, and discoveries"
            />
          </label>
          {searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map((result) => (
                <button
                  key={result.id}
                  type="button"
                  onClick={() => {
                    sceneRef.current?.selectObject(result.id)
                    setQuery(result.name)
                  }}
                >
                  <span>{result.name}</span>
                  <small>{result.kind}</small>
                </button>
              ))}
            </div>
          )}
        </div>
      </aside>

      <section className="tour-panel" aria-label="Guided tour">
        <div>
          <span>Tour stop {tourIndex + 1} of {tourStops.length}</span>
          <strong>{selectedStop.title}</strong>
        </div>
        <button
          type="button"
          onClick={() => {
            setTourActive(true)
            goToTourStop(tourActive ? tourIndex + 1 : tourIndex)
          }}
        >
          {tourActive ? <SkipForward size={17} aria-hidden="true" /> : <Play size={17} aria-hidden="true" />}
          {tourActive ? 'Next' : 'Start'}
        </button>
      </section>

      <aside className="learning-panel" aria-live="polite">
        <div className="panel-heading">
          <div>
            <span>{selected.kind}</span>
            <h2>{selected.name}</h2>
          </div>
          <button type="button" onClick={() => setSelected(panelFromObject(learningObjects[1]))} aria-label="Clear selected object">
            <X size={18} aria-hidden="true" />
          </button>
        </div>
        <p className="distance">{selected.distance}</p>
        <p>{selected.summary}</p>
        <div className="fact-box">
          <Info size={18} aria-hidden="true" />
          <p>{selected.fact}</p>
        </div>
        <div className="sources-list">
          <Search size={16} aria-hidden="true" />
          <span>{selected.sourceLabels.join(' + ')}</span>
        </div>
      </aside>

      <nav className="object-strip" aria-label="Clickable landmarks">
        {learningObjects.map((object) => (
          <button key={object.id} type="button" onClick={() => sceneRef.current?.selectObject(object.id)}>
            <span style={{ background: object.color }} />
            {object.name}
          </button>
        ))}
      </nav>

      <footer className="source-footer">
        Data: HYG Database v4.1 for nearby stars; NASA Exoplanet Archive snapshot ({exoplanetArchiveSnapshot.retrieved}) for {exoplanetArchiveSnapshot.planetsWith3dPlacement.toLocaleString()} confirmed exoplanets with 3D placement; NASA/JPL pages for Solar System scale, Milky Way structure, and major landmarks. {exoplanetArchiveSnapshot.missingPlacement} confirmed exoplanets lacked enough location data for placement.
        {' '}
        {Object.values(sources).map((source, index) => (
          <a key={source.url} href={source.url} target="_blank" rel="noreferrer">
            {index + 1}
          </a>
        ))}
      </footer>
    </main>
  )
}

export default App
