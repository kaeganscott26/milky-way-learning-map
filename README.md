# 🌌 Milky Way Learning Map

## An interactive galaxy you can explore, question, and learn from.

#MilkyWayLearningMap  
#ThreeJS  
#AstronomyVisualization

Milky Way Learning Map is an interactive educational space visualization built with React, TypeScript, Three.js, and real astronomical datasets.

It is not a static diagram.

It is a navigable learning environment containing the Milky Way, nearby stars, Solar System objects, confirmed exoplanets, guided tour stops, cinematic camera movement, and accelerated simulation time.

The goal is simple:

**Make the scale and structure of our cosmic neighborhood easier to see.**

---

## 🚀 START HERE

Recommended first path:

1. [Open the Project Guide](docs/START_HERE.md)
2. [Browse the Main File Map](docs/FILE_MAP.md)
3. [Open the application entry point](src/App.tsx)
4. [Explore the Milky Way learning data](src/data/galaxyData.ts)
5. [Explore the local-star catalog](src/data/localStars.ts)
6. [Explore the exoplanet layer](src/data/exoplanets.ts)
7. [Explore the Solar System layer](src/data/solarSystem.ts)
8. [Use the Obsidian Index](OBSIDIAN_INDEX.md)

To run the map locally:

```bash
npm install
npm run dev
```

Then open the local address printed by Vite.

---

## 🧭 Main Doorways

- [Project Guide](docs/START_HERE.md)
- [Main File Map](docs/FILE_MAP.md)
- [Obsidian Index](OBSIDIAN_INDEX.md)
- [Core Application](src/App.tsx)
- [Visual Styling](src/App.css)
- [Galaxy Learning Objects](src/data/galaxyData.ts)
- [Nearby Star Catalog](src/data/localStars.ts)
- [Confirmed Exoplanets](src/data/exoplanets.ts)
- [Solar System Objects](src/data/solarSystem.ts)
- [Build Configuration](vite.config.ts)
- [Project Commands and Dependencies](package.json)

---

## ✨ What You Can Explore

- A procedural Milky Way built from tens of thousands of rendered particles
- Spiral arms, a luminous galactic core, dust lanes, and large-scale galactic structure
- The Sun's location inside the Milky Way
- Nearby real stars derived from HYG catalog data
- Confirmed exoplanets derived from NASA's Exoplanet Archive
- A magnified Solar System layer with orbit and scale information
- Searchable astronomical objects and educational information panels
- Guided tour stops and cinematic fly-to navigation
- Object focus views with procedural planet visualizations
- Accelerated time controls for stellar and galactic motion
- Responsive controls for desktop and smaller screens

---

## 🛰️ Exploration Path

```text
README
  ↓
START_HERE
  ↓
APP INTERFACE
  ↓
GALAXY LAYER
  ↓
LOCAL STAR LAYER
  ↓
EXOPLANET LAYER
  ↓
SOLAR SYSTEM LAYER
  ↓
SOURCE DATA
  ↓
NEW QUESTIONS
  ↓
README
```

The map is the interface.

The data is the structure underneath it.

The questions are where the learning begins.

---

## 🧩 Main Project Layers

### 🌌 Galaxy Layer

The main scene procedurally renders the broad structure of the Milky Way, including spiral-arm distribution, dust lanes, object placement, camera navigation, bloom, and simulation controls.

- [Core scene and interaction logic](src/App.tsx)
- [Galaxy objects, sources, and tour stops](src/data/galaxyData.ts)
- [Scene and interface styling](src/App.css)

### ⭐ Local Star Layer

Nearby stars are positioned around the Sun using catalog coordinates. Where measured motion is available, velocity components can be applied during simulation time.

- [Local-star dataset](src/data/localStars.ts)

### 🪐 Exoplanet Layer

Confirmed exoplanets include discovery information, orbital properties, mass, radius, temperature, host-star information, and procedural visual classes such as rocky worlds, super-Earths, mini-Neptunes, gas giants, lava worlds, and hot Jupiters.

- [Exoplanet dataset](src/data/exoplanets.ts)

### ☀️ Solar System Layer

The Solar System is represented as a magnified educational inset so planets and dwarf planets remain visible despite the enormous scale difference between planetary and galactic distances.

- [Solar System dataset](src/data/solarSystem.ts)

---

## 🧠 Design Principle

Real astronomical scale is hostile to visual learning.

If the planets were rendered at the same literal scale as the galaxy, they would effectively disappear. If every object were equally exaggerated, the map would stop communicating distance.

The project therefore uses **layered scale**:

```text
GALACTIC SCALE
  +
LOCAL STAR SCALE
  +
MAGNIFIED SOLAR SYSTEM SCALE
  +
FOCUS VISUALIZATION SCALE
  =
A NAVIGABLE LEARNING MODEL
```

The visual system is interpretive.

The astronomical labels and catalog values remain tied to their cited data sources.

---

## 🗂️ Repository Map

```text
milky-way-learning-map/
├── README.md                 ← public front door
├── OBSIDIAN_INDEX.md         ← vault-style navigation
├── docs/
│   ├── START_HERE.md         ← project orientation
│   └── FILE_MAP.md           ← highlighted code directory
├── src/
│   ├── App.tsx               ← main scene, UI, simulation, navigation
│   ├── App.css               ← interface and focus-view styling
│   ├── main.tsx              ← React entry point
│   └── data/
│       ├── galaxyData.ts     ← learning objects, sources, tour stops
│       ├── localStars.ts     ← nearby-star catalog layer
│       ├── exoplanets.ts     ← confirmed exoplanet layer
│       └── solarSystem.ts    ← Solar System layer
├── scripts/                  ← dataset and deployment build tools
├── public/                   ← static public assets
├── package.json              ← commands and dependencies
└── vite.config.ts            ← Vite configuration
```

For a more detailed guide, open the [Main File Map](docs/FILE_MAP.md).

---

## 🛠️ Development

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Run the linter

```bash
npm run lint
```

### Run end-to-end tests

```bash
npm run test:e2e
```

---

## 🔭 Data and Scientific Context

This project combines procedural visualization with structured astronomy data. Major data references are represented inside the application and connected to the learning objects they support.

The map should be understood as an educational visualization rather than a literal photorealistic reconstruction.

- Positions and measurements are data-informed.
- Planet appearances are procedural interpretations.
- Galactic particles communicate structure rather than representing individual cataloged stars.
- Scale is layered intentionally so users can move between cosmic levels.

---

## 🪞 Obsidian Use

This repository can also be opened as an Obsidian vault.

Start with:

- [[README]]
- [[OBSIDIAN_INDEX]]
- [[docs/START_HERE]]
- [[docs/FILE_MAP]]

GitHub users should use the clickable Markdown links throughout this README. Obsidian users can follow the wiki-link path inside [OBSIDIAN_INDEX.md](OBSIDIAN_INDEX.md).

---

## 🌠 Project Status

The map currently includes a working interactive galaxy scene, educational object panels, local-star data, exoplanet and Solar System layers, cinematic navigation, focus visualizations, deployment output, and simulation-time controls.

This is a learning project and an evolving portfolio build.

The current repo documents both the finished experience and the code underneath it.

---

## 📜 License and Attribution

Before redistributing or commercially packaging the project, review the usage terms of every included dataset and add an explicit project license.

Astronomical data providers retain ownership of their respective source datasets.

---

The galaxy is not a backdrop.

It is the map.

And the map is still being written.
