export type SourceId =
  | 'hyg'
  | 'nasaMilkyWay'
  | 'jplArms'
  | 'nasaCore'
  | 'nasaM42'
  | 'nasaM45'
  | 'nasaM8'
  | 'nasaM17'
  | 'nasaM16'
  | 'nasaM20'
  | 'nasaExoplanetArchive'
  | 'nasaSolarSystem'
  | 'nasaSolarSystemScale'
  | 'simbad'
  | 'nasaNebulae'
  | 'nasaDiscoveries'

export type LearningObject = {
  id: string
  name: string
  kind: 'core' | 'sun' | 'arm' | 'nebula' | 'cluster' | 'region'
  distance: string
  position: [number, number, number]
  color: string
  size: number
  summary: string
  fact: string
  scale: 'galaxy' | 'local'
  sourceIds: SourceId[]
}

export type TourStop = {
  id: string
  title: string
  objectId: string
  camera: [number, number, number]
  target: [number, number, number]
}

export const galaxyRadiusLy = 50000
export const sunGalactocentricDistanceLy = 26000

export const sources: Record<SourceId, { label: string; url: string }> = {
  hyg: {
    label: 'HYG Database v4.1, Astronexus',
    url: 'https://github.com/astronexus/HYG-Database/blob/main/hyg/CURRENT/hygdata_v41.csv',
  },
  nasaMilkyWay: {
    label: 'NASA Imagine the Universe: Milky Way distance and size',
    url: 'https://imagine.gsfc.nasa.gov/features/cosmic/milkyway_info.html',
  },
  jplArms: {
    label: 'NASA/JPL: Milky Way spiral arms and Orion Spur',
    url: 'https://www.jpl.nasa.gov/news/two-of-the-milky-ways-spiral-arms-go-missing/',
  },
  nasaCore: {
    label: 'NASA Science: Galactic center and Sagittarius A*',
    url: 'https://science.nasa.gov/mission/webb/science-overview/science-explainers/what-is-the-center-of-our-galaxy-like/',
  },
  nasaM42: {
    label: 'NASA Hubble Messier Catalog: M42 Orion Nebula',
    url: 'https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-42/',
  },
  nasaM45: {
    label: 'NASA Hubble Messier Catalog: M45 Pleiades',
    url: 'https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-45/',
  },
  nasaM8: {
    label: 'NASA Hubble Messier Catalog: M8 Lagoon Nebula',
    url: 'https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-8/',
  },
  nasaM17: {
    label: 'NASA Hubble Messier Catalog: M17 Omega Nebula',
    url: 'https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-17/',
  },
  nasaM16: {
    label: 'NASA Hubble Messier Catalog: M16 Eagle Nebula',
    url: 'https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-16/',
  },
  nasaM20: {
    label: 'NASA Hubble: M20 Trifid Nebula',
    url: 'https://science.nasa.gov/asset/hubble/the-heart-of-the-trifid-nebula-messier-20ngc-6514/',
  },
  nasaExoplanetArchive: {
    label: 'NASA Exoplanet Archive: Planetary Systems Composite Parameters',
    url: 'https://exoplanetarchive.ipac.caltech.edu/docs/API_PS_columns.html',
  },
  nasaSolarSystem: {
    label: 'NASA Science: planets and dwarf planets',
    url: 'https://science.nasa.gov/solar-system/planets/',
  },
  nasaSolarSystemScale: {
    label: 'NASA/JPL: Solar System sizes and distances',
    url: 'https://www.jpl.nasa.gov/edu/resources/video/solar-system-size-and-distance/',
  },
  simbad: {
    label: 'SIMBAD astronomical database: object coordinates',
    url: 'https://simbad.u-strasbg.fr/simbad/',
  },
  nasaNebulae: {
    label: 'NASA/Hubble nebula object pages and image releases',
    url: 'https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/',
  },
  nasaDiscoveries: {
    label: 'NASA science releases for major Milky Way discoveries',
    url: 'https://science.nasa.gov/',
  },
}

function galacticObject(longitudeDeg: number, distanceLy: number, y = 0): [number, number, number] {
  const longitude = (longitudeDeg * Math.PI) / 180
  const x = sunGalactocentricDistanceLy - distanceLy * Math.cos(longitude)
  const z = distanceLy * Math.sin(longitude)
  return [Math.round(x), y, Math.round(z)]
}

export const learningObjects: LearningObject[] = [
  {
    id: 'sagittarius-a',
    name: 'Sagittarius A*',
    kind: 'core',
    distance: '26,000 light-years from Earth',
    position: [0, 0, 0],
    color: '#ffd29b',
    size: 1100,
    summary: 'The compact radio source at the center of the Milky Way, powered by a supermassive black hole.',
    fact: 'NASA describes Sagittarius A* as about 4 million times the mass of the Sun, but it is unusually calm compared with many galaxy-center black holes.',
    scale: 'galaxy',
    sourceIds: ['nasaCore', 'nasaMilkyWay'],
  },
  {
    id: 'sun',
    name: 'The Sun',
    kind: 'sun',
    distance: 'You are here: about 26,000 light-years from the center',
    position: [sunGalactocentricDistanceLy, 0, 0],
    color: '#fff1a8',
    size: 640,
    summary: 'Our star sits in the Orion Spur, a small partial arm between the Sagittarius and Perseus arms.',
    fact: 'The whole solar system orbits the galaxy about once every 250 million years.',
    scale: 'local',
    sourceIds: ['nasaMilkyWay', 'jplArms'],
  },
  {
    id: 'orion-spur',
    name: 'Orion Spur',
    kind: 'arm',
    distance: 'Local partial arm',
    position: [28000, 0, -2600],
    color: '#71d4ff',
    size: 900,
    summary: 'The small partial arm that contains the Sun and many familiar naked-eye stars.',
    fact: 'It lies between the larger Sagittarius and Perseus arms, which is why our night sky shows nearby stars from a quieter neighborhood rather than the crowded core.',
    scale: 'galaxy',
    sourceIds: ['jplArms'],
  },
  {
    id: 'perseus-arm',
    name: 'Perseus Arm',
    kind: 'arm',
    distance: 'Major outer spiral arm',
    position: [37000, 0, 14200],
    color: '#8fa8ff',
    size: 1100,
    summary: 'A major spiral arm wrapping around the outer part of the Milky Way disk.',
    fact: 'NASA/JPL notes Perseus as one of the Milky Way arms with strong stellar density in modern infrared maps.',
    scale: 'galaxy',
    sourceIds: ['jplArms'],
  },
  {
    id: 'scutum-centaurus',
    name: 'Scutum-Centaurus Arm',
    kind: 'arm',
    distance: 'Major inner spiral arm',
    position: [15000, 0, -15600],
    color: '#ffc17f',
    size: 1100,
    summary: 'One of the Milky Way’s large star-rich spiral arms, connected with the central bar.',
    fact: 'Infrared star counts found this arm clearly, even through the dusty plane of the galaxy.',
    scale: 'galaxy',
    sourceIds: ['jplArms'],
  },
  {
    id: 'sagittarius-arm',
    name: 'Sagittarius Arm',
    kind: 'arm',
    distance: 'Inner arm near many bright nebulae',
    position: [20600, 0, 3600],
    color: '#f58bff',
    size: 900,
    summary: 'A gas-rich arm between the Sun and the galactic center.',
    fact: 'Several famous star-forming nebulae toward Sagittarius and Serpens sit in this direction from Earth.',
    scale: 'galaxy',
    sourceIds: ['jplArms'],
  },
  {
    id: 'm42',
    name: 'Orion Nebula (M42)',
    kind: 'nebula',
    distance: '1,500 light-years from Earth',
    position: galacticObject(209, 1500, 70),
    color: '#8ed9ff',
    size: 480,
    summary: 'The nearest large star-forming region to Earth, visible to the naked eye from dark skies.',
    fact: 'Inside it, newborn stars are bright enough to carve and light up the gas around them.',
    scale: 'local',
    sourceIds: ['nasaM42'],
  },
  {
    id: 'm45',
    name: 'Pleiades (M45)',
    kind: 'cluster',
    distance: 'About 445 light-years from Earth',
    position: galacticObject(166.6, 445, 120),
    color: '#b8ccff',
    size: 360,
    summary: 'A young open star cluster often called the Seven Sisters.',
    fact: 'Its blue reflection haze is dust catching starlight, not the leftover cloud that made the cluster.',
    scale: 'local',
    sourceIds: ['nasaM45'],
  },
  {
    id: 'm8',
    name: 'Lagoon Nebula (M8)',
    kind: 'nebula',
    distance: '5,200 light-years from Earth',
    position: galacticObject(6, 5200, -90),
    color: '#ff7c94',
    size: 560,
    summary: 'A bright star-forming cloud in Sagittarius, with its own young cluster inside.',
    fact: 'Massive young stars flood the gas with ultraviolet light, making the nebula glow.',
    scale: 'galaxy',
    sourceIds: ['nasaM8'],
  },
  {
    id: 'm17',
    name: 'Omega Nebula (M17)',
    kind: 'nebula',
    distance: '5,500 light-years from Earth',
    position: galacticObject(15, 5500, 160),
    color: '#ffbd7f',
    size: 520,
    summary: 'One of the Milky Way’s large star-forming regions, also called the Swan Nebula.',
    fact: 'Its young star cluster is only about 1 million years old, which is baby-young for stars.',
    scale: 'galaxy',
    sourceIds: ['nasaM17'],
  },
  {
    id: 'm16',
    name: 'Eagle Nebula (M16)',
    kind: 'nebula',
    distance: '7,000 light-years from Earth',
    position: galacticObject(17, 7000, 220),
    color: '#91f5c1',
    size: 620,
    summary: 'A star-forming nebula famous for the Pillars of Creation.',
    fact: 'The Pillars are only about 4 to 5 light-years tall, while the full nebula spans about 70 by 55 light-years.',
    scale: 'galaxy',
    sourceIds: ['nasaM16'],
  },
  {
    id: 'm20',
    name: 'Trifid Nebula (M20)',
    kind: 'nebula',
    distance: 'About 9,000 light-years from Earth',
    position: galacticObject(7, 9000, -180),
    color: '#d39bff',
    size: 540,
    summary: 'A star-forming region split by dark dust bands into three visible lobes.',
    fact: 'Its name means three-part, because dust lanes divide the glowing cloud as seen in small telescopes.',
    scale: 'galaxy',
    sourceIds: ['nasaM20'],
  },
  {
    id: 'carina-nebula',
    name: 'Carina Nebula',
    kind: 'nebula',
    distance: 'About 7,500 light-years from Earth',
    position: galacticObject(287.6, 7500, -70),
    color: '#ff8f73',
    size: 760,
    summary: 'A huge star-forming complex in the Carina arm, rich with massive young stars.',
    fact: 'Eta Carinae inside this region is one of the most massive and unstable star systems known in our galaxy.',
    scale: 'galaxy',
    sourceIds: ['nasaNebulae', 'simbad'],
  },
  {
    id: 'crab-nebula',
    name: 'Crab Nebula (M1)',
    kind: 'nebula',
    distance: 'About 6,500 light-years from Earth',
    position: galacticObject(184.6, 6500, -620),
    color: '#ffb278',
    size: 480,
    summary: 'The expanding remains of a star seen exploding by skywatchers in 1054.',
    fact: 'A spinning neutron star in the middle powers much of the Crab Nebula’s glow.',
    scale: 'galaxy',
    sourceIds: ['nasaNebulae', 'simbad'],
  },
  {
    id: 'rosette-nebula',
    name: 'Rosette Nebula',
    kind: 'nebula',
    distance: 'About 5,000 light-years from Earth',
    position: galacticObject(206.3, 5000, -190),
    color: '#ff7fa6',
    size: 620,
    summary: 'A flower-shaped cloud where a central cluster of hot stars has cleared a cavity.',
    fact: 'The dark lanes are cooler dust and gas silhouetted against glowing hydrogen.',
    scale: 'galaxy',
    sourceIds: ['nasaNebulae', 'simbad'],
  },
  {
    id: 'north-america-nebula',
    name: 'North America Nebula',
    kind: 'nebula',
    distance: 'About 2,600 light-years from Earth',
    position: galacticObject(85.6, 2600, 120),
    color: '#f08763',
    size: 520,
    summary: 'A glowing hydrogen cloud in Cygnus whose outline resembles North America.',
    fact: 'The Gulf of Mexico shape is made by foreground dust blocking light from the nebula.',
    scale: 'local',
    sourceIds: ['nasaNebulae', 'simbad'],
  },
  {
    id: 'veil-nebula',
    name: 'Veil Nebula',
    kind: 'nebula',
    distance: 'About 2,100 light-years from Earth',
    position: galacticObject(74, 2100, -260),
    color: '#78e6ff',
    size: 560,
    summary: 'A lace-like supernova remnant spread across the constellation Cygnus.',
    fact: 'Its filaments are shock waves from an exploded star plowing through interstellar gas.',
    scale: 'local',
    sourceIds: ['nasaNebulae', 'simbad'],
  },
  {
    id: 'helix-nebula',
    name: 'Helix Nebula',
    kind: 'nebula',
    distance: 'About 650 light-years from Earth',
    position: galacticObject(36.2, 650, -470),
    color: '#73f2cf',
    size: 420,
    summary: 'A nearby planetary nebula: the glowing outer layers shed by a dying Sun-like star.',
    fact: 'Planetary nebulae have nothing to do with planets; the name comes from their round look in early telescopes.',
    scale: 'local',
    sourceIds: ['nasaNebulae', 'simbad'],
  },
  {
    id: 'horsehead-nebula',
    name: 'Horsehead Nebula',
    kind: 'nebula',
    distance: 'About 1,375 light-years from Earth',
    position: galacticObject(206.9, 1375, -150),
    color: '#8b5b48',
    size: 400,
    summary: 'A dark cloud of dust in Orion seen because it blocks light behind it.',
    fact: 'The famous horse-head shape is being slowly sculpted by radiation from nearby young stars.',
    scale: 'local',
    sourceIds: ['nasaNebulae', 'simbad'],
  },
  {
    id: 'california-nebula',
    name: 'California Nebula',
    kind: 'nebula',
    distance: 'About 1,000 light-years from Earth',
    position: galacticObject(160.1, 1000, -120),
    color: '#ff6f88',
    size: 440,
    summary: 'A long emission nebula in Perseus lit by a very hot nearby star.',
    fact: 'It is much easier to photograph than to see by eye because its light is spread over a large area.',
    scale: 'local',
    sourceIds: ['nasaNebulae', 'simbad'],
  },
  {
    id: 'cygnus-x1',
    name: 'Cygnus X-1',
    kind: 'region',
    distance: 'About 7,200 light-years from Earth',
    position: galacticObject(71.3, 7200, 420),
    color: '#b58cff',
    size: 420,
    summary: 'One of the first strong black-hole candidates ever identified.',
    fact: 'It shines in X-rays because gas from a companion star is heated as it falls toward the black hole.',
    scale: 'galaxy',
    sourceIds: ['nasaDiscoveries', 'simbad'],
  },
  {
    id: 'vela-pulsar',
    name: 'Vela Pulsar',
    kind: 'region',
    distance: 'About 960 light-years from Earth',
    position: galacticObject(263.6, 960, -45),
    color: '#7bb6ff',
    size: 360,
    summary: 'A rapidly spinning neutron star left by a supernova in the Vela constellation.',
    fact: 'The Vela Pulsar sometimes glitches: its spin suddenly speeds up by a tiny amount.',
    scale: 'local',
    sourceIds: ['nasaDiscoveries', 'simbad'],
  },
  {
    id: 'fermi-bubbles-north',
    name: 'Fermi Bubble North',
    kind: 'region',
    distance: 'Rises tens of thousands of light-years above the galactic center',
    position: [0, 24000, 0],
    color: '#c081ff',
    size: 1400,
    summary: 'One of two enormous gamma-ray lobes extending above and below the Milky Way’s center.',
    fact: 'The bubbles may record a past burst of activity from the galactic center.',
    scale: 'galaxy',
    sourceIds: ['nasaDiscoveries'],
  },
  {
    id: 'fermi-bubbles-south',
    name: 'Fermi Bubble South',
    kind: 'region',
    distance: 'Rises tens of thousands of light-years below the galactic center',
    position: [0, -24000, 0],
    color: '#a66cff',
    size: 1400,
    summary: 'The southern lobe of a giant high-energy structure around the Milky Way’s core.',
    fact: 'Together the two bubbles span a distance comparable to a large fraction of the galaxy’s visible disk.',
    scale: 'galaxy',
    sourceIds: ['nasaDiscoveries'],
  },
  {
    id: 'local-bubble',
    name: 'Local Bubble',
    kind: 'region',
    distance: 'The Sun sits inside it',
    position: [sunGalactocentricDistanceLy, 0, 0],
    color: '#9ee7ff',
    size: 900,
    summary: 'A low-density cavity in interstellar gas surrounding the Sun.',
    fact: 'Astronomers think a chain of ancient supernovae helped carve this bubble around our neighborhood.',
    scale: 'local',
    sourceIds: ['nasaDiscoveries'],
  },
]

export const tourStops: TourStop[] = [
  {
    id: 'tour-overview',
    title: 'The Whole Disk',
    objectId: 'sun',
    camera: [0, 62000, 62000],
    target: [12000, 0, 0],
  },
  {
    id: 'tour-core',
    title: 'The Core',
    objectId: 'sagittarius-a',
    camera: [9000, 11000, 10500],
    target: [0, 0, 0],
  },
  {
    id: 'tour-arm',
    title: 'A Major Arm',
    objectId: 'scutum-centaurus',
    camera: [25000, 17000, -31000],
    target: [15000, 0, -15600],
  },
  {
    id: 'tour-sun',
    title: 'You Are Here',
    objectId: 'sun',
    camera: [32500, 7800, 7600],
    target: [sunGalactocentricDistanceLy, 0, 0],
  },
  {
    id: 'tour-neighborhood',
    title: 'Nearby Stars',
    objectId: 'm45',
    camera: [27000, 1200, 1800],
    target: [sunGalactocentricDistanceLy, 0, 0],
  },
  {
    id: 'tour-orion',
    title: 'Stellar Nursery',
    objectId: 'm42',
    camera: [29200, 1200, -1800],
    target: galacticObject(209, 1500, 70),
  },
  {
    id: 'tour-eagle',
    title: 'Pillars of Creation',
    objectId: 'm16',
    camera: [23000, 3700, 6500],
    target: galacticObject(17, 7000, 220),
  },
]
