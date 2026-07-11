import fs from 'node:fs'
import path from 'node:path'

const inputPath = path.resolve('data/raw/exoplanets_pscomppars.csv')
const outputPath = path.resolve('src/data/exoplanets.ts')
const LY_PER_PC = 3.26156
const SUN_GALACTOCENTRIC_DISTANCE_LY = 26000

const equatorialToGalactic = [
  [-0.0548755604, -0.8734370902, -0.4838350155],
  [0.4941094279, -0.44482963, 0.7469822445],
  [-0.867666149, -0.1980763734, 0.4559837762],
]

function parseCsvLine(line) {
  const result = []
  let value = ''
  let quoted = false

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index]
    const next = line[index + 1]
    if (char === '"' && quoted && next === '"') {
      value += '"'
      index += 1
    } else if (char === '"') {
      quoted = !quoted
    } else if (char === ',' && !quoted) {
      result.push(value)
      value = ''
    } else {
      value += char
    }
  }

  result.push(value)
  return result
}

function toNumber(value) {
  const number = Number(value)
  return Number.isFinite(number) ? number : null
}

function round(value, digits = 3) {
  return Number(value.toFixed(digits))
}

function positionFromRaDec(raDeg, decDeg, distancePc) {
  const ra = (raDeg * Math.PI) / 180
  const dec = (decDeg * Math.PI) / 180
  const distanceLy = distancePc * LY_PER_PC

  const eq = [
    Math.cos(dec) * Math.cos(ra),
    Math.cos(dec) * Math.sin(ra),
    Math.sin(dec),
  ]

  const gal = equatorialToGalactic.map((row) => row[0] * eq[0] + row[1] * eq[1] + row[2] * eq[2])
  const l = Math.atan2(gal[1], gal[0])
  const b = Math.asin(gal[2])
  const planar = distanceLy * Math.cos(b)

  return [
    round(SUN_GALACTOCENTRIC_DISTANCE_LY - planar * Math.cos(l), 3),
    round(distanceLy * Math.sin(b), 3),
    round(planar * Math.sin(l), 3),
  ]
}

function factForPlanet(row) {
  const method = row.discoverymethod || 'a telescope survey'
  const year = row.disc_year || 'an unknown year'
  const radius = toNumber(row.pl_rade)
  const mass = toNumber(row.pl_bmasse)
  const orbit = toNumber(row.pl_orbper)

  if (radius && radius < 1.3) return `It is roughly Earth-sized and was found by ${method} in ${year}.`
  if (radius && radius > 10) return `It is Jupiter-sized or larger, a giant world found by ${method} in ${year}.`
  if (mass && mass > 300) return `Its listed mass is in giant-planet territory, more than 300 Earth masses.`
  if (orbit && orbit < 5) return `It races around its star in under five Earth days.`
  return `It was confirmed by ${method} and is part of NASA's catalog of known exoplanets.`
}

function visualClass(row) {
  const radius = toNumber(row.pl_rade)
  const mass = toNumber(row.pl_bmasse)
  const eqt = toNumber(row.pl_eqt)
  const semiMajorAxis = toNumber(row.pl_orbsmax)

  if (eqt && eqt > 1200 && (radius ?? 0) > 6) return 'hot-jupiter'
  if (eqt && eqt > 900 && (radius ?? 0) < 2) return 'lava-world'
  if (radius && radius < 1.6) return 'rocky-world'
  if (radius && radius < 2.6) return 'super-earth'
  if (radius && radius < 6) return 'mini-neptune'
  if (radius && radius >= 8) return 'gas-giant'
  if (mass && mass > 100) return 'gas-giant'
  if (semiMajorAxis && semiMajorAxis > 5 && radius && radius > 3) return 'ice-giant'
  return 'unknown'
}

const text = fs.readFileSync(inputPath, 'utf8')
const [headerLine, ...lines] = text.trim().split(/\r?\n/)
const headers = parseCsvLine(headerLine)

const planets = lines
  .map((line) => {
    const values = parseCsvLine(line)
    const row = Object.fromEntries(headers.map((header, index) => [header, values[index] ?? '']))
    const ra = toNumber(row.ra)
    const dec = toNumber(row.dec)
    const distancePc = toNumber(row.sy_dist)
    if (ra === null || dec === null || distancePc === null) return null

    const distanceLy = distancePc * LY_PER_PC
    return {
      id: `exo-${row.pl_name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      name: row.pl_name,
      host: row.hostname,
      distanceLy: round(distanceLy, 2),
      positionLy: positionFromRaDec(ra, dec, distancePc),
      discoveryYear: toNumber(row.disc_year),
      discoveryMethod: row.discoverymethod || 'unknown',
      orbitalPeriodDays: toNumber(row.pl_orbper),
      semiMajorAxisAu: toNumber(row.pl_orbsmax),
      radiusEarth: toNumber(row.pl_rade),
      massEarth: toNumber(row.pl_bmasse),
      equilibriumTemperatureK: toNumber(row.pl_eqt),
      stellarSpectralType: row.st_spectype || null,
      stellarTemperatureK: toNumber(row.st_teff),
      visualClass: visualClass(row),
      fact: factForPlanet(row),
    }
  })
  .filter(Boolean)
  .sort((a, b) => a.distanceLy - b.distanceLy)

const source = `export type Exoplanet = {
  id: string
  name: string
  host: string
  distanceLy: number
  positionLy: [number, number, number]
  discoveryYear: number | null
  discoveryMethod: string
  orbitalPeriodDays: number | null
  semiMajorAxisAu: number | null
  radiusEarth: number | null
  massEarth: number | null
  equilibriumTemperatureK: number | null
  stellarSpectralType: string | null
  stellarTemperatureK: number | null
  visualClass: string
  fact: string
}

export const exoplanetArchiveSnapshot = {
  totalConfirmedPlanets: 6319,
  planetsWith3dPlacement: ${planets.length},
  missingPlacement: ${6319 - planets.length},
  retrieved: '2026-07-11',
}

export const exoplanets: Exoplanet[] = ${JSON.stringify(planets, null, 2)}
`

fs.writeFileSync(outputPath, source)
console.log(`Wrote ${planets.length} exoplanets to ${outputPath}`)
