# 🚀 START HERE

## Welcome to the Milky Way Learning Map

This guide is the fastest way to understand what the project is, how to run it, and where the important code lives.

---

## 🌌 What This Project Is

Milky Way Learning Map is an interactive astronomy visualization built with:

- React
- TypeScript
- Three.js
- GSAP
- Vite
- HYG star-catalog data
- NASA exoplanet and Solar System information

The project combines multiple scales into one explorable learning environment:

```text
MILKY WAY
  ↓
SUN'S GALACTIC NEIGHBORHOOD
  ↓
NEARBY STARS
  ↓
CONFIRMED EXOPLANETS
  ↓
SOLAR SYSTEM
  ↓
INDIVIDUAL OBJECT FOCUS
```

---

## 🕹️ Run the Project

From the repository folder:

```bash
npm install
npm run dev
```

Vite will print a local address. Open that address in a browser.

For a production build:

```bash
npm run build
npm run preview
```

---

## 🧭 First Code Path

Read these files in this order:

1. [src/main.tsx](../src/main.tsx) — mounts the React application.
2. [src/App.tsx](../src/App.tsx) — contains the main scene, navigation, simulation, search, panels, and rendering logic.
3. [src/data/galaxyData.ts](../src/data/galaxyData.ts) — defines major learning objects, sources, and tour stops.
4. [src/data/localStars.ts](../src/data/localStars.ts) — contains nearby-star positions and motion data.
5. [src/data/exoplanets.ts](../src/data/exoplanets.ts) — contains the confirmed exoplanet layer.
6. [src/data/solarSystem.ts](../src/data/solarSystem.ts) — contains the magnified Solar System layer.
7. [src/App.css](../src/App.css) — controls the interface, panels, HUD, responsive layout, and focus visualizations.

For a directory-style explanation, open the [Main File Map](FILE_MAP.md).

---

## 🔭 What to Try in the App

- Rotate and zoom through the galaxy.
- Use search to find a star, exoplanet, Solar System object, or learning object.
- Select an object and read its source-backed information panel.
- Use cinematic navigation to fly toward selected objects.
- Open focus view for a planet-style visualization.
- Change simulation speed to observe modeled motion.
- Use the guided tour stops to move through important locations.
- Return to a previous camera position after a flight.

---

## 🧠 How the Scale Works

The map does not force every layer into one literal visual scale.

That would make planets invisible and local-star spacing difficult to navigate.

Instead, the app uses several linked visual scales:

- **Galactic scale** for the Milky Way and major structures
- **Local scale** for stars near the Sun
- **Magnified planetary scale** for the Solar System
- **Focus scale** for individual object inspection

This keeps distance meaningful without making the interface unusable.

---

## 🛰️ Data Versus Visualization

The app mixes catalog-backed facts with procedural graphics.

### Data-backed

- Object names
- Catalog positions
- Distances
- Orbital values
- Planet mass and radius where available
- Discovery information
- Source references
- Stellar motion where available

### Procedural or interpretive

- Milky Way particle placement
- Dust-lane appearance
- Bloom and lighting
- Planet surface appearance
- Relative visibility and exaggerated display scale

The procedural visuals teach structure. They are not intended as literal photographs.

---

## 🗺️ Navigation Loop

```text
START_HERE
  ↓
FILE_MAP
  ↓
APP.TSX
  ↓
DATA LAYERS
  ↓
RUN THE APP
  ↓
ASK A NEW QUESTION
  ↓
CHANGE THE MAP
```

---

## 🪞 Obsidian Path

When the repository is opened as an Obsidian vault, begin with:

- [[README]]
- [[OBSIDIAN_INDEX]]
- [[docs/FILE_MAP]]
- [[src/App]]
- [[src/data/galaxyData]]

The repository uses normal Markdown links for GitHub and wiki links inside the Obsidian index for vault navigation.

---

## 🌠 Next Doorway

Open the [Main File Map](FILE_MAP.md) to see where each major feature lives.
