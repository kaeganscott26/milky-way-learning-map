import fs from 'node:fs';
import path from 'node:path';

const inputPath = path.resolve('data/raw/hygdata_v41.csv');
const outputPath = path.resolve('src/data/localStars.ts');
const LY_PER_PC = 3.26156;

function parseCsvLine(line) {
  const result = [];
  let value = '';
  let quoted = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];

    if (char === '"' && quoted && next === '"') {
      value += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === ',' && !quoted) {
      result.push(value);
      value = '';
    } else {
      value += char;
    }
  }

  result.push(value);
  return result;
}

function starName(row) {
  if (row.proper) return row.proper;
  if (row.bayer && row.con) return `${row.bayer} ${row.con}`;
  if (row.flam && row.con) return `${row.flam} ${row.con}`;
  if (row.gl) return `Gliese ${row.gl.replace(/^Gl\s*/i, '')}`;
  if (row.hip) return `HIP ${row.hip}`;
  return `HYG ${row.id}`;
}

function colorFromCi(ciValue) {
  const ci = Number(ciValue);
  if (!Number.isFinite(ci)) return '#dfe9ff';
  if (ci < -0.1) return '#9fc7ff';
  if (ci < 0.25) return '#c7ddff';
  if (ci < 0.6) return '#fff2d2';
  if (ci < 1) return '#ffd7a3';
  return '#ffb17b';
}

const text = fs.readFileSync(inputPath, 'utf8');
const [headerLine, ...lines] = text.trim().split(/\r?\n/);
const headers = parseCsvLine(headerLine).map((header) => header.replaceAll('"', ''));

const stars = lines
  .map((line) => {
    const values = parseCsvLine(line);
    const row = Object.fromEntries(headers.map((header, index) => [header, values[index] ?? '']));
    const distPc = Number(row.dist);
    const mag = Number(row.mag);
    const xPc = Number(row.x);
    const yPc = Number(row.y);
    const zPc = Number(row.z);

    if (![distPc, mag, xPc, yPc, zPc].every(Number.isFinite)) return null;
    if (distPc <= 0 || distPc > 90) return null;
    if (mag > 8.2 && distPc > 8 && !row.proper) return null;

    return {
      id: `hyg-${row.id}`,
      name: starName(row),
      distanceLy: Number((distPc * LY_PER_PC).toFixed(2)),
      apparentMagnitude: Number(mag.toFixed(2)),
      spectralClass: row.spect || 'unknown',
      colorIndex: row.ci ? Number(Number(row.ci).toFixed(3)) : null,
      color: colorFromCi(row.ci),
      positionLy: [
        Number((xPc * LY_PER_PC).toFixed(3)),
        Number((zPc * LY_PER_PC).toFixed(3)),
        Number((yPc * LY_PER_PC).toFixed(3)),
      ],
      fact:
        row.proper === 'Proxima Centauri'
          ? 'This small red dwarf is the closest known star to the Sun.'
          : row.proper === 'Sirius'
            ? 'Sirius looks so bright mostly because it is close and intrinsically luminous.'
            : row.proper === 'Barnard\'s Star'
              ? 'Barnard\'s Star has one of the fastest apparent motions across our sky.'
              : 'Its catalog distance and 3D position come from the HYG star database.',
    };
  })
  .filter(Boolean)
  .sort((a, b) => {
    const namedScore = Number(Boolean(b.name.match(/^[A-Z][a-z]/))) - Number(Boolean(a.name.match(/^[A-Z][a-z]/)));
    return namedScore || a.distanceLy - b.distanceLy;
  })
  .slice(0, 1600);

const source = `export type LocalStar = {
  id: string
  name: string
  distanceLy: number
  apparentMagnitude: number
  spectralClass: string
  colorIndex: number | null
  color: string
  positionLy: [number, number, number]
  fact: string
}

export const localStars: LocalStar[] = ${JSON.stringify(stars, null, 2)}
`;

fs.writeFileSync(outputPath, source);
console.log(`Wrote ${stars.length} stars to ${outputPath}`);
