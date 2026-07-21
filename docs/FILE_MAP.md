# 🗂️ MAIN FILE MAP

## The shortest route to the important code

This page highlights the files that explain the project fastest.

---

## ⭐ Essential Files

| File | Why It Matters |
|---|---|
| [README.md](../README.md) | Public front door, project overview, feature summary, commands, and navigation. |
| [src/App.tsx](../src/App.tsx) | Main application: Three.js scene, React state, search, camera flights, simulation time, focus views, and object panels. |
| [src/App.css](../src/App.css) | Complete visual system for the HUD, panels, controls, responsive layout, and procedural focus objects. |
| [src/data/galaxyData.ts](../src/data/galaxyData.ts) | Milky Way learning objects, source definitions, constants, and guided tour stops. |
| [src/data/localStars.ts](../src/data/localStars.ts) | Nearby stars, positions, colors, catalog properties, and velocity information. |
| [src/data/exoplanets.ts](../src/data/exoplanets.ts) | Confirmed exoplanets and their discovery, orbital, physical, stellar, and visual-class fields. |
| [src/data/solarSystem.ts](../src/data/solarSystem.ts) | Solar System planets and dwarf planets used by the magnified local layer. |
| [package.json](../package.json) | Available commands, production build pipeline, tests, and dependencies. |
| [vite.config.ts](../vite.config.ts) | Vite application configuration. |

---

## 🌌 Core Application

### [src/App.tsx](../src/App.tsx)

This is the main engine room.

Look here for:

- Three.js scene creation
- Milky Way particle geometry
- Dust lanes and galactic structures
- Orbit controls
- Bloom post-processing
- Camera flights and return navigation
- Search and object selection
- Guided tours
- Simulation time
- Stellar motion
- Solar System rendering
- Exoplanet and object focus views
- Educational information panels
- React interface state

Because the project currently keeps many systems together in one file, this is the best place to understand the entire runtime flow.

### [src/App.css](../src/App.css)

Look here for:

- Top navigation
- Flight HUD
- Tool panels
- Search results
- Object information cards
- Focus-view planets
- Responsive layouts
- Mobile behavior
- Animation and visual polish

---

## 🧬 Data Layers

### [src/data/galaxyData.ts](../src/data/galaxyData.ts)

Contains the broad educational structure of the map:

- Galactic constants
- Major Milky Way objects
- Learning descriptions
- Facts
- Source IDs
- Tour stops
- Named locations

### [src/data/localStars.ts](../src/data/localStars.ts)

Contains the nearby-star layer:

- Catalog identifiers
- Distance from the Sun
- Spectral class
- Apparent magnitude
- Color data
- Cartesian position
- Velocity vectors where measured
- Educational facts

### [src/data/exoplanets.ts](../src/data/exoplanets.ts)

Contains the exoplanet layer:

- Planet and host-star names
- Distance
- Discovery year and method
- Orbital period
- Semi-major axis
- Radius and mass
- Equilibrium temperature
- Host-star spectral and temperature values
- Procedural visual class

### [src/data/solarSystem.ts](../src/data/solarSystem.ts)

Contains the local planetary layer:

- Planet or dwarf-planet identity
- Distance from the Sun
- Orbital period
- Radius
- Summary and fact text
- Display cues for the magnified Solar System

---

## ⚙️ Build and Runtime Files

### [src/main.tsx](../src/main.tsx)

The React entry point. It mounts the application into the page.

### [package.json](../package.json)

Important commands:

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run test:e2e
```

The production build also runs the project’s Sites-output script.

### [vite.config.ts](../vite.config.ts)

Connects Vite to the React plugin.

### [scripts/](../scripts/)

Contains data-generation and deployment helpers. This folder is important when updating catalog snapshots or changing generated output.

### [public/](../public/)

Contains static assets copied into the finished application.

---

## 🔍 Find a Feature

| Feature | Start Here |
|---|---|
| Galaxy particle shape | [src/App.tsx](../src/App.tsx) |
| Dust lanes | [src/App.tsx](../src/App.tsx) |
| Camera flights | [src/App.tsx](../src/App.tsx) |
| Simulation time | [src/App.tsx](../src/App.tsx) |
| Search | [src/App.tsx](../src/App.tsx) |
| Object info panels | [src/App.tsx](../src/App.tsx) |
| Planet focus graphics | [src/App.tsx](../src/App.tsx) and [src/App.css](../src/App.css) |
| Major Milky Way locations | [src/data/galaxyData.ts](../src/data/galaxyData.ts) |
| Nearby stars | [src/data/localStars.ts](../src/data/localStars.ts) |
| Exoplanets | [src/data/exoplanets.ts](../src/data/exoplanets.ts) |
| Solar System objects | [src/data/solarSystem.ts](../src/data/solarSystem.ts) |
| Dependency versions | [package.json](../package.json) |
| Responsive interface | [src/App.css](../src/App.css) |

---

## 🧭 Suggested Reading Order

```text
README.md
  ↓
docs/START_HERE.md
  ↓
src/main.tsx
  ↓
src/App.tsx
  ↓
src/data/galaxyData.ts
  ↓
src/data/localStars.ts
  ↓
src/data/exoplanets.ts
  ↓
src/data/solarSystem.ts
  ↓
src/App.css
```

---

## 🪞 Obsidian Links

- [[README]]
- [[OBSIDIAN_INDEX]]
- [[docs/START_HERE]]
- [[src/main]]
- [[src/App]]
- [[src/data/galaxyData]]
- [[src/data/localStars]]
- [[src/data/exoplanets]]
- [[src/data/solarSystem]]

---

## 🌠 Return

- [Back to README](../README.md)
- [Back to START HERE](START_HERE.md)
