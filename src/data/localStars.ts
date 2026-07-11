export type LocalStar = {
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

export const localStars: LocalStar[] = [
  {
    "id": "hyg-70666",
    "name": "Proxima Centauri",
    "distanceLy": 4.23,
    "apparentMagnitude": 11.01,
    "spectralClass": "M5Ve",
    "colorIndex": 1.807,
    "color": "#ffb17b",
    "positionLy": [
      -1.54,
      -3.755,
      -1.179
    ],
    "fact": "This small red dwarf is the closest known star to the Sun."
  },
  {
    "id": "hyg-71453",
    "name": "Toliman",
    "distanceLy": 4.32,
    "apparentMagnitude": 1.35,
    "spectralClass": "K1V",
    "colorIndex": 0.9,
    "color": "#ffd7a3",
    "positionLy": [
      -1.615,
      -3.773,
      -1.35
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-71456",
    "name": "Rigil Kentaurus",
    "distanceLy": 4.32,
    "apparentMagnitude": -0.01,
    "spectralClass": "G2V",
    "colorIndex": 0.71,
    "color": "#ffd7a3",
    "positionLy": [
      -1.615,
      -3.772,
      -1.351
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-87665",
    "name": "Barnard's Star",
    "distanceLy": 5.95,
    "apparentMagnitude": 9.54,
    "spectralClass": "sdM4",
    "colorIndex": 1.57,
    "color": "#ffb17b",
    "positionLy": [
      -0.057,
      0.486,
      -5.925
    ],
    "fact": "Barnard's Star has one of the fastest apparent motions across our sky."
  },
  {
    "id": "hyg-118720",
    "name": "Wolf 359",
    "distanceLy": 7.8,
    "apparentMagnitude": 13.45,
    "spectralClass": "M6",
    "colorIndex": 2,
    "color": "#ffb17b",
    "positionLy": [
      -7.446,
      0.953,
      2.118
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-53879",
    "name": "Lalande 21185",
    "distanceLy": 8.31,
    "apparentMagnitude": 7.49,
    "spectralClass": "M2V",
    "colorIndex": 1.502,
    "color": "#ffb17b",
    "positionLy": [
      -6.517,
      4.878,
      1.645
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118079",
    "name": "Gliese 65A",
    "distanceLy": 8.57,
    "apparentMagnitude": 12.57,
    "spectralClass": "dM5.5e",
    "colorIndex": 1.85,
    "color": "#ffb17b",
    "positionLy": [
      7.405,
      -2.642,
      3.415
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118080",
    "name": "Gliese 65B",
    "distanceLy": 8.57,
    "apparentMagnitude": 12.7,
    "spectralClass": "dM5.5e",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      7.406,
      -2.642,
      3.415
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-32263",
    "name": "Sirius",
    "distanceLy": 8.6,
    "apparentMagnitude": -1.44,
    "spectralClass": "A0m...",
    "colorIndex": 0.009,
    "color": "#c7ddff",
    "positionLy": [
      -1.612,
      -2.474,
      8.078
    ],
    "fact": "Sirius looks so bright mostly because it is close and intrinsically luminous."
  },
  {
    "id": "hyg-118441",
    "name": "Gliese 244B",
    "distanceLy": 8.6,
    "apparentMagnitude": 8.44,
    "spectralClass": "DA2",
    "colorIndex": -0.03,
    "color": "#c7ddff",
    "positionLy": [
      -1.612,
      -2.474,
      8.078
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-92115",
    "name": "Ross 154",
    "distanceLy": 9.69,
    "apparentMagnitude": 10.37,
    "spectralClass": "M3.5Ve",
    "colorIndex": 1.51,
    "color": "#ffb17b",
    "positionLy": [
      1.911,
      -3.914,
      -8.651
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119585",
    "name": "Ross 248",
    "distanceLy": 10.33,
    "apparentMagnitude": 12.29,
    "spectralClass": "dM6  e",
    "colorIndex": 1.9,
    "color": "#ffb17b",
    "positionLy": [
      7.38,
      7.193,
      -0.584
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-16496",
    "name": "Ran",
    "distanceLy": 10.49,
    "apparentMagnitude": 3.72,
    "spectralClass": "K2V",
    "colorIndex": 0.881,
    "color": "#ffd7a3",
    "positionLy": [
      6.194,
      -1.724,
      8.289
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-113687",
    "name": "Lacaille 9352",
    "distanceLy": 10.68,
    "apparentMagnitude": 7.35,
    "spectralClass": "M2/M3V",
    "colorIndex": 1.483,
    "color": "#ffb17b",
    "positionLy": [
      8.42,
      -6.258,
      -2.027
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-57375",
    "name": "Ross 128",
    "distanceLy": 10.94,
    "apparentMagnitude": 11.12,
    "spectralClass": "M4.5V",
    "colorIndex": 1.746,
    "color": "#ffb17b",
    "positionLy": [
      -10.926,
      0.154,
      0.585
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-91487",
    "name": "Struve 2398 B",
    "distanceLy": 11.27,
    "apparentMagnitude": 9.7,
    "spectralClass": "K5",
    "colorIndex": 1.561,
    "color": "#ffb17b",
    "positionLy": [
      1.057,
      9.721,
      -5.598
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118493",
    "name": "Gliese 280B",
    "distanceLy": 11.41,
    "apparentMagnitude": 10.7,
    "spectralClass": "DA",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -4.769,
      1.039,
      10.31
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-37173",
    "name": "Procyon",
    "distanceLy": 11.46,
    "apparentMagnitude": 0.4,
    "spectralClass": "F5IV-V",
    "colorIndex": 0.432,
    "color": "#fff2d2",
    "positionLy": [
      -4.792,
      1.044,
      10.359
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-91484",
    "name": "Struve 2398 A",
    "distanceLy": 11.64,
    "apparentMagnitude": 8.94,
    "spectralClass": "K5",
    "colorIndex": 1.504,
    "color": "#ffb17b",
    "positionLy": [
      1.092,
      10.043,
      -5.783
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-117979",
    "name": "Gliese 15B",
    "distanceLy": 11.64,
    "apparentMagnitude": 11.06,
    "spectralClass": "M6 Ve",
    "colorIndex": 1.79,
    "color": "#ffb17b",
    "positionLy": [
      8.342,
      8.089,
      0.67
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-1472",
    "name": "Groombridge 34",
    "distanceLy": 11.7,
    "apparentMagnitude": 8.09,
    "spectralClass": "M1V",
    "colorIndex": 1.56,
    "color": "#ffb17b",
    "positionLy": [
      8.386,
      8.131,
      0.674
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-108526",
    "name": "Eps Ind",
    "distanceLy": 11.81,
    "apparentMagnitude": 4.69,
    "spectralClass": "K5V",
    "colorIndex": 1.056,
    "color": "#ffb17b",
    "positionLy": [
      5.651,
      -9.884,
      -3.153
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118541",
    "name": "Gliese GJ 1111",
    "distanceLy": 11.83,
    "apparentMagnitude": 14.81,
    "spectralClass": "M6.5",
    "colorIndex": 2.06,
    "color": "#ffb17b",
    "positionLy": [
      -6.42,
      5.328,
      8.38
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-8087",
    "name": "Tau Cet",
    "distanceLy": 11.91,
    "apparentMagnitude": 3.49,
    "spectralClass": "G8V",
    "colorIndex": 0.727,
    "color": "#ffd7a3",
    "positionLy": [
      10.287,
      -3.269,
      5.021
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-5632",
    "name": "Gliese 54.1",
    "distanceLy": 12.03,
    "apparentMagnitude": 12.1,
    "spectralClass": "M5.5Ve",
    "colorIndex": 1.85,
    "color": "#ffb17b",
    "positionLy": [
      10.939,
      -3.519,
      3.581
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-36107",
    "name": "Luyten's Star",
    "distanceLy": 12.4,
    "apparentMagnitude": 9.84,
    "spectralClass": "M5",
    "colorIndex": 1.573,
    "color": "#ffb17b",
    "positionLy": [
      -4.597,
      1.13,
      11.464
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-24129",
    "name": "Kapteyn's Star",
    "distanceLy": 12.76,
    "apparentMagnitude": 8.86,
    "spectralClass": "M0V",
    "colorIndex": 1.543,
    "color": "#ffb17b",
    "positionLy": [
      1.888,
      -9.029,
      8.823
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-104751",
    "name": "Lacaille 8760",
    "distanceLy": 12.87,
    "apparentMagnitude": 6.69,
    "spectralClass": "M1/M2V",
    "colorIndex": 1.397,
    "color": "#ffb17b",
    "positionLy": [
      7.599,
      -8.077,
      -6.533
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-110547",
    "name": "Kruger 60",
    "distanceLy": 13.05,
    "apparentMagnitude": 9.59,
    "spectralClass": "M2V",
    "colorIndex": 1.613,
    "color": "#ffb17b",
    "positionLy": [
      6.419,
      11.029,
      -2.725
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119505",
    "name": "Gliese 860B",
    "distanceLy": 13.07,
    "apparentMagnitude": 11.3,
    "spectralClass": "M6 V",
    "colorIndex": 1.8,
    "color": "#ffb17b",
    "positionLy": [
      6.427,
      11.044,
      -2.728
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118428",
    "name": "Gliese 234B",
    "distanceLy": 13.43,
    "apparentMagnitude": 14.6,
    "spectralClass": "unknown",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -1.716,
      -0.659,
      13.302
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-30847",
    "name": "Ross 614",
    "distanceLy": 13.46,
    "apparentMagnitude": 11.12,
    "spectralClass": "M4.5Ve",
    "colorIndex": 1.69,
    "color": "#ffb17b",
    "positionLy": [
      -1.719,
      -0.661,
      13.334
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-3820",
    "name": "Van Maanen's Star",
    "distanceLy": 13.9,
    "apparentMagnitude": 12.37,
    "spectralClass": "DG",
    "colorIndex": 0.554,
    "color": "#fff2d2",
    "positionLy": [
      13.526,
      1.306,
      2.947
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-80579",
    "name": "Wolf 1061",
    "distanceLy": 14,
    "apparentMagnitude": 10.1,
    "spectralClass": "M4",
    "colorIndex": 1.604,
    "color": "#ffb17b",
    "positionLy": [
      -5.21,
      -3.069,
      -12.626
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118236",
    "name": "Gliese GJ 1061",
    "distanceLy": 14,
    "apparentMagnitude": 13.03,
    "spectralClass": "M4.5",
    "colorIndex": 1.9,
    "color": "#ffb17b",
    "positionLy": [
      5.866,
      -9.811,
      8.074
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118830",
    "name": "Gliese 473A",
    "distanceLy": 14.05,
    "apparentMagnitude": 13.04,
    "spectralClass": "dM5.5eJ",
    "colorIndex": 1.83,
    "color": "#ffb17b",
    "positionLy": [
      -13.726,
      2.202,
      -2.008
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118831",
    "name": "Gliese 473B",
    "distanceLy": 14.05,
    "apparentMagnitude": 13.3,
    "spectralClass": "M7",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -13.726,
      2.202,
      -2.008
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-442",
    "name": "Gliese 1",
    "distanceLy": 14.15,
    "apparentMagnitude": 8.56,
    "spectralClass": "M2V",
    "colorIndex": 1.462,
    "color": "#ffb17b",
    "positionLy": [
      11.249,
      -8.589,
      0.265
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118583",
    "name": "Gliese GJ 3522",
    "distanceLy": 14.56,
    "apparentMagnitude": 10.89,
    "spectralClass": "k",
    "colorIndex": 1.67,
    "color": "#ffb17b",
    "positionLy": [
      -10.136,
      2.146,
      10.231
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118100",
    "name": "Gliese 83.1",
    "distanceLy": 14.57,
    "apparentMagnitude": 12.28,
    "spectralClass": "dM8  e",
    "colorIndex": 1.8,
    "color": "#ffb17b",
    "positionLy": [
      12.284,
      3.29,
      7.108
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118704",
    "name": "Gliese GJ 3618",
    "distanceLy": 14.64,
    "apparentMagnitude": 13.92,
    "spectralClass": "m",
    "colorIndex": 1.82,
    "color": "#ffb17b",
    "positionLy": [
      -6.675,
      -12.827,
      2.281
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118707",
    "name": "Gliese GJ 3622",
    "distanceLy": 14.76,
    "apparentMagnitude": 15.6,
    "spectralClass": "M6.5",
    "colorIndex": 2.1,
    "color": "#ffb17b",
    "positionLy": [
      -13.765,
      -2.901,
      4.459
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-85899",
    "name": "Gliese 687",
    "distanceLy": 14.77,
    "apparentMagnitude": 9.15,
    "spectralClass": "M3.5Vvar",
    "colorIndex": 1.505,
    "color": "#ffb17b",
    "positionLy": [
      -0.56,
      13.725,
      -5.422
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-85264",
    "name": "Gliese 674",
    "distanceLy": 14.81,
    "apparentMagnitude": 9.38,
    "spectralClass": "K5",
    "colorIndex": 1.553,
    "color": "#ffb17b",
    "positionLy": [
      -1.379,
      -10.812,
      -10.025
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-57194",
    "name": "Gliese 440",
    "distanceLy": 15.03,
    "apparentMagnitude": 11.5,
    "spectralClass": "DC:",
    "colorIndex": 0.196,
    "color": "#c7ddff",
    "positionLy": [
      -6.377,
      -13.604,
      0.398
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-112660",
    "name": "Gliese 876",
    "distanceLy": 15.29,
    "apparentMagnitude": 10.16,
    "spectralClass": "M5",
    "colorIndex": 1.597,
    "color": "#ffb17b",
    "positionLy": [
      14.197,
      -3.768,
      -4.254
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-117960",
    "name": "Gliese GJ 1002",
    "distanceLy": 15.33,
    "apparentMagnitude": 13.75,
    "spectralClass": "M5-5.5",
    "colorIndex": 1.98,
    "color": "#ffb17b",
    "positionLy": [
      15.181,
      -2.01,
      0.446
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119312",
    "name": "Gliese GJ 1245A",
    "distanceLy": 15.38,
    "apparentMagnitude": 13.41,
    "spectralClass": "M5.5 V e",
    "colorIndex": 1.9,
    "color": "#ffb17b",
    "positionLy": [
      5.24,
      10.767,
      -9.66
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119313",
    "name": "Gliese GJ 1245B",
    "distanceLy": 15.38,
    "apparentMagnitude": 14.01,
    "spectralClass": "m",
    "colorIndex": 1.98,
    "color": "#ffb17b",
    "positionLy": [
      5.24,
      10.767,
      -9.659
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118727",
    "name": "Gliese 412B",
    "distanceLy": 15.76,
    "apparentMagnitude": 14.4,
    "spectralClass": "M6  e",
    "colorIndex": 2.09,
    "color": "#ffb17b",
    "positionLy": [
      -11.107,
      10.853,
      2.691
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-54052",
    "name": "Gliese 412A",
    "distanceLy": 15.81,
    "apparentMagnitude": 8.82,
    "spectralClass": "M2Vvar",
    "colorIndex": 1.491,
    "color": "#ffb17b",
    "positionLy": [
      -11.143,
      10.891,
      2.702
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-49767",
    "name": "Gliese 380",
    "distanceLy": 15.89,
    "apparentMagnitude": 6.6,
    "spectralClass": "K8V",
    "colorIndex": 1.326,
    "color": "#ffb17b",
    "positionLy": [
      -9.192,
      12.077,
      4.716
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118676",
    "name": "Gliese 388",
    "distanceLy": 16,
    "apparentMagnitude": 9.4,
    "spectralClass": "M4.5Ve",
    "colorIndex": 1.54,
    "color": "#ffb17b",
    "positionLy": [
      -13.625,
      5.438,
      6.382
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-106098",
    "name": "Gliese 832",
    "distanceLy": 16.16,
    "apparentMagnitude": 8.66,
    "spectralClass": "M1V",
    "colorIndex": 1.521,
    "color": "#ffb17b",
    "positionLy": [
      8.507,
      -12.195,
      -6.32
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-1240",
    "name": "Gliese GJ 1005A",
    "distanceLy": 16.26,
    "apparentMagnitude": 11.49,
    "spectralClass": "M:",
    "colorIndex": 1.75,
    "color": "#ffb17b",
    "positionLy": [
      15.588,
      -4.519,
      1.054
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-19799",
    "name": "Keid",
    "distanceLy": 16.26,
    "apparentMagnitude": 4.43,
    "spectralClass": "K1V",
    "colorIndex": 0.82,
    "color": "#ffd7a3",
    "positionLy": [
      7.109,
      -2.165,
      14.458
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118281",
    "name": "Gliese 166B",
    "distanceLy": 16.45,
    "apparentMagnitude": 9.52,
    "spectralClass": "DA4",
    "colorIndex": 0.03,
    "color": "#c7ddff",
    "positionLy": [
      7.187,
      -2.192,
      14.633
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118282",
    "name": "Gliese 166C",
    "distanceLy": 16.45,
    "apparentMagnitude": 11.17,
    "spectralClass": "dM4.5e",
    "colorIndex": 1.67,
    "color": "#ffb17b",
    "positionLy": [
      7.185,
      -2.191,
      14.629
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-85951",
    "name": "Gliese 682",
    "distanceLy": 16.56,
    "apparentMagnitude": 10.94,
    "spectralClass": "M5",
    "colorIndex": 1.655,
    "color": "#ffb17b",
    "positionLy": [
      -1.184,
      -11.572,
      -11.791
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119198",
    "name": "Gliese 702B",
    "distanceLy": 16.59,
    "apparentMagnitude": 6,
    "spectralClass": "K5 Ve",
    "colorIndex": 1.15,
    "color": "#ffb17b",
    "positionLy": [
      0.395,
      0.723,
      -16.566
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-112106",
    "name": "Gliese 873",
    "distanceLy": 16.71,
    "apparentMagnitude": 10.29,
    "spectralClass": "M4.5Ve",
    "colorIndex": 1.54,
    "color": "#ffb17b",
    "positionLy": [
      11.346,
      11.676,
      -3.751
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-97338",
    "name": "Altair",
    "distanceLy": 16.73,
    "apparentMagnitude": 0.76,
    "spectralClass": "A7IV-V",
    "colorIndex": 0.221,
    "color": "#c7ddff",
    "positionLy": [
      7.683,
      2.579,
      -14.636
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118578",
    "name": "Gliese GJ 1116A",
    "distanceLy": 17.05,
    "apparentMagnitude": 14.06,
    "spectralClass": "m",
    "colorIndex": 1.84,
    "color": "#ffb17b",
    "positionLy": [
      -11.255,
      5.763,
      11.428
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118579",
    "name": "Gliese GJ 1116B",
    "distanceLy": 17.05,
    "apparentMagnitude": 14.92,
    "spectralClass": "m",
    "colorIndex": 1.93,
    "color": "#ffb17b",
    "positionLy": [
      -11.259,
      5.765,
      11.432
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-57371",
    "name": "Gliese 445",
    "distanceLy": 17.45,
    "apparentMagnitude": 10.8,
    "spectralClass": "M4",
    "colorIndex": 1.572,
    "color": "#ffb17b",
    "positionLy": [
      -3.417,
      17.112,
      0.184
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118406",
    "name": "Gliese GJ 3379",
    "distanceLy": 17.51,
    "apparentMagnitude": 11.33,
    "spectralClass": "M4",
    "colorIndex": 1.68,
    "color": "#ffb17b",
    "positionLy": [
      -0.005,
      0.827,
      17.488
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-66943",
    "name": "Gliese 526",
    "distanceLy": 17.58,
    "apparentMagnitude": 8.46,
    "spectralClass": "M3V",
    "colorIndex": 1.435,
    "color": "#ffb17b",
    "positionLy": [
      -15.217,
      4.519,
      -7.564
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118311",
    "name": "Gliese 169.1B",
    "distanceLy": 17.98,
    "apparentMagnitude": 12.44,
    "spectralClass": "DC5",
    "colorIndex": 0.31,
    "color": "#fff2d2",
    "positionLy": [
      3.502,
      15.412,
      8.58
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-21036",
    "name": "Gliese 169.1A",
    "distanceLy": 18.19,
    "apparentMagnitude": 10.82,
    "spectralClass": "unknown",
    "colorIndex": 1.17,
    "color": "#ffb17b",
    "positionLy": [
      3.543,
      15.592,
      8.682
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-25813",
    "name": "Gliese 205",
    "distanceLy": 18.45,
    "apparentMagnitude": 7.97,
    "spectralClass": "M1V",
    "colorIndex": 1.474,
    "color": "#ffb17b",
    "positionLy": [
      2.287,
      -1.183,
      18.271
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119276",
    "name": "Gliese 754",
    "distanceLy": 18.56,
    "apparentMagnitude": 12.23,
    "spectralClass": "M4.5",
    "colorIndex": 1.68,
    "color": "#ffb17b",
    "positionLy": [
      4.489,
      -13.256,
      -12.2
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119112",
    "name": "Gliese 644B",
    "distanceLy": 18.72,
    "apparentMagnitude": 9.9,
    "spectralClass": "unknown",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -5.146,
      -2.714,
      -17.793
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119113",
    "name": "Gliese 644C",
    "distanceLy": 18.72,
    "apparentMagnitude": 16.78,
    "spectralClass": "M7",
    "colorIndex": 1.99,
    "color": "#ffb17b",
    "positionLy": [
      -5.137,
      -2.734,
      -17.796
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-29222",
    "name": "Gliese 229",
    "distanceLy": 18.77,
    "apparentMagnitude": 8.15,
    "spectralClass": "M1/M2V",
    "colorIndex": 1.487,
    "color": "#ffb17b",
    "positionLy": [
      -0.803,
      -6.988,
      17.397
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-95799",
    "name": "Alsafi",
    "distanceLy": 18.77,
    "apparentMagnitude": 4.67,
    "spectralClass": "K0V",
    "colorIndex": 0.786,
    "color": "#ffd7a3",
    "positionLy": [
      2.559,
      17.6,
      -6.001
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118447",
    "name": "Gliese 251",
    "distanceLy": 18.79,
    "apparentMagnitude": 10.01,
    "spectralClass": "dM4",
    "colorIndex": 1.57,
    "color": "#ffb17b",
    "positionLy": [
      -3.722,
      10.309,
      15.264
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-45211",
    "name": "Gliese 338A",
    "distanceLy": 18.95,
    "apparentMagnitude": 7.64,
    "spectralClass": "M0V",
    "colorIndex": 1.41,
    "color": "#ffb17b",
    "positionLy": [
      -8.618,
      15.075,
      7.599
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-26792",
    "name": "Gliese 213",
    "distanceLy": 19.01,
    "apparentMagnitude": 11.56,
    "spectralClass": "M5",
    "colorIndex": 1.675,
    "color": "#ffb17b",
    "positionLy": [
      1.444,
      4.112,
      18.509
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-86722",
    "name": "Gliese 693",
    "distanceLy": 19.02,
    "apparentMagnitude": 10.75,
    "spectralClass": "M5",
    "colorIndex": 1.66,
    "color": "#ffb17b",
    "positionLy": [
      -0.601,
      -16.006,
      -10.251
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-72957",
    "name": "Gliese 570A",
    "distanceLy": 19.05,
    "apparentMagnitude": 5.72,
    "spectralClass": "K4V",
    "colorIndex": 1.024,
    "color": "#ffb17b",
    "positionLy": [
      -12.678,
      -6.956,
      -12.401
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-94466",
    "name": "Gliese 752A",
    "distanceLy": 19.15,
    "apparentMagnitude": 9.12,
    "spectralClass": "M3.5V",
    "colorIndex": 1.464,
    "color": "#ffb17b",
    "positionLy": [
      6.28,
      1.725,
      -18.004
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119275",
    "name": "Gliese 752B",
    "distanceLy": 19.16,
    "apparentMagnitude": 17.52,
    "spectralClass": "dM5  e",
    "colorIndex": 2.2,
    "color": "#ffb17b",
    "positionLy": [
      6.288,
      1.719,
      -18.013
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118532",
    "name": "Gliese 300",
    "distanceLy": 19.19,
    "apparentMagnitude": 12.1,
    "spectralClass": "M4",
    "colorIndex": 1.6,
    "color": "#ffb17b",
    "positionLy": [
      -9.763,
      -7.048,
      14.937
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-72955",
    "name": "Gliese 570B",
    "distanceLy": 19.33,
    "apparentMagnitude": 8.01,
    "spectralClass": "K5V",
    "colorIndex": 1.519,
    "color": "#ffb17b",
    "positionLy": [
      -12.864,
      -7.055,
      -12.58
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-75841",
    "name": "Gliese 588",
    "distanceLy": 19.34,
    "apparentMagnitude": 9.31,
    "spectralClass": "M0",
    "colorIndex": 1.524,
    "color": "#ffb17b",
    "positionLy": [
      -8.736,
      -12.757,
      -11.615
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-84147",
    "name": "Guniibuu",
    "distanceLy": 19.35,
    "apparentMagnitude": 4.33,
    "spectralClass": "K2:III:",
    "colorIndex": 0.855,
    "color": "#ffd7a3",
    "positionLy": [
      -3.35,
      -8.666,
      -16.976
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-3814",
    "name": "Achird",
    "distanceLy": 19.42,
    "apparentMagnitude": 3.46,
    "spectralClass": "G0V SB",
    "colorIndex": 0.587,
    "color": "#fff2d2",
    "positionLy": [
      10.106,
      16.433,
      2.199
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118021",
    "name": "Gliese 34B",
    "distanceLy": 19.42,
    "apparentMagnitude": 7.51,
    "spectralClass": "K7 V",
    "colorIndex": 1.39,
    "color": "#ffb17b",
    "positionLy": [
      10.106,
      16.434,
      2.198
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-37659",
    "name": "Gliese 285",
    "distanceLy": 19.43,
    "apparentMagnitude": 11.19,
    "spectralClass": "M4.5Ve",
    "colorIndex": 1.6,
    "color": "#ffb17b",
    "positionLy": [
      -8.551,
      1.204,
      17.404
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-84220",
    "name": "Gliese 664",
    "distanceLy": 19.47,
    "apparentMagnitude": 6.33,
    "spectralClass": "K5V",
    "colorIndex": 1.144,
    "color": "#ffb17b",
    "positionLy": [
      -3.307,
      -8.703,
      -17.103
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-83882",
    "name": "Gliese 661A",
    "distanceLy": 19.5,
    "apparentMagnitude": 9.31,
    "spectralClass": "K5",
    "colorIndex": 1.485,
    "color": "#ffb17b",
    "positionLy": [
      -2.825,
      13.945,
      -13.328
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-117106",
    "name": "Gliese 908",
    "distanceLy": 19.5,
    "apparentMagnitude": 8.98,
    "spectralClass": "M2V",
    "colorIndex": 1.46,
    "color": "#ffb17b",
    "positionLy": [
      19.456,
      0.817,
      -0.917
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119135",
    "name": "Guniibuu B",
    "distanceLy": 19.52,
    "apparentMagnitude": 5.07,
    "spectralClass": "K1 Ve",
    "colorIndex": 0.85,
    "color": "#ffd7a3",
    "positionLy": [
      -3.38,
      -8.742,
      -17.124
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-99143",
    "name": "Gliese 783A",
    "distanceLy": 19.62,
    "apparentMagnitude": 5.32,
    "spectralClass": "K2V",
    "colorIndex": 0.868,
    "color": "#ffd7a3",
    "positionLy": [
      8.585,
      -11.557,
      -13.321
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119334",
    "name": "Gliese 783B",
    "distanceLy": 19.74,
    "apparentMagnitude": 11.5,
    "spectralClass": "M3.5",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      8.639,
      -11.63,
      -13.405
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-71027",
    "name": "Gliese 555",
    "distanceLy": 19.77,
    "apparentMagnitude": 11.32,
    "spectralClass": "M4",
    "colorIndex": 1.633,
    "color": "#ffb17b",
    "positionLy": [
      -15.088,
      -4.285,
      -12.032
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-98924",
    "name": "Del Pav",
    "distanceLy": 19.92,
    "apparentMagnitude": 3.55,
    "spectralClass": "G5IV-Vvar",
    "colorIndex": 0.751,
    "color": "#ffd7a3",
    "positionLy": [
      4.285,
      -18.226,
      -6.809
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118344",
    "name": "Gliese GJ 3323",
    "distanceLy": 20.01,
    "apparentMagnitude": 12.1,
    "spectralClass": "m",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      4.978,
      -2.42,
      19.229
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119184",
    "name": "Gliese GJ 1221",
    "distanceLy": 20.03,
    "apparentMagnitude": 14.15,
    "spectralClass": "DXP9",
    "colorIndex": 0.4,
    "color": "#fff2d2",
    "positionLy": [
      -0.34,
      18.928,
      -6.555
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118488",
    "name": "Gliese GJ 3454",
    "distanceLy": 20.13,
    "apparentMagnitude": 13.22,
    "spectralClass": "m",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -8.16,
      2.482,
      18.237
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-115766",
    "name": "Gliese 896A",
    "distanceLy": 20.16,
    "apparentMagnitude": 10.05,
    "spectralClass": "M6Ve",
    "colorIndex": 1.19,
    "color": "#ffb17b",
    "positionLy": [
      18.812,
      6.875,
      -2.321
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-82565",
    "name": "Gliese 644A",
    "distanceLy": 20.21,
    "apparentMagnitude": 9.02,
    "spectralClass": "M3Ve",
    "colorIndex": 1.553,
    "color": "#ffb17b",
    "positionLy": [
      -5.555,
      -2.93,
      -19.206
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-99382",
    "name": "Gliese 784",
    "distanceLy": 20.22,
    "apparentMagnitude": 7.97,
    "spectralClass": "M0V",
    "colorIndex": 1.431,
    "color": "#ffb17b",
    "positionLy": [
      7.861,
      -14.335,
      -11.889
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118644",
    "name": "Gliese GJ 1128",
    "distanceLy": 20.26,
    "apparentMagnitude": 12.78,
    "spectralClass": "m",
    "colorIndex": 1.73,
    "color": "#ffb17b",
    "positionLy": [
      -6.029,
      -18.895,
      4.109
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118995",
    "name": "Gliese GJ 3877",
    "distanceLy": 20.26,
    "apparentMagnitude": 17.05,
    "spectralClass": "dM8",
    "colorIndex": 1.34,
    "color": "#ffb17b",
    "positionLy": [
      -12.812,
      -9.562,
      -12.442
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-74766",
    "name": "Gliese 581",
    "distanceLy": 20.27,
    "apparentMagnitude": 10.57,
    "spectralClass": "M5",
    "colorIndex": 1.6,
    "color": "#ffb17b",
    "positionLy": [
      -12.948,
      -2.724,
      -15.355
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119568",
    "name": "Gliese 896B",
    "distanceLy": 20.38,
    "apparentMagnitude": 12.4,
    "spectralClass": "dM6  e",
    "colorIndex": 1.65,
    "color": "#ffb17b",
    "positionLy": [
      19.012,
      6.948,
      -2.345
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-34511",
    "name": "Gliese 268",
    "distanceLy": 20.53,
    "apparentMagnitude": 11.65,
    "spectralClass": "M5Ve",
    "colorIndex": 1.7,
    "color": "#ffb17b",
    "positionLy": [
      -4.832,
      12.789,
      15.317
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119134",
    "name": "Gliese 661B",
    "distanceLy": 20.62,
    "apparentMagnitude": 10.4,
    "spectralClass": "M3.5",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -2.988,
      14.749,
      -14.097
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-45214",
    "name": "Gliese 338B",
    "distanceLy": 20.85,
    "apparentMagnitude": 7.7,
    "spectralClass": "K2",
    "colorIndex": 1.42,
    "color": "#ffb17b",
    "positionLy": [
      -9.48,
      16.581,
      8.357
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118865",
    "name": "Gliese GJ 2097",
    "distanceLy": 20.91,
    "apparentMagnitude": 12.58,
    "spectralClass": "m",
    "colorIndex": 1.62,
    "color": "#ffb17b",
    "positionLy": [
      -18.712,
      7.429,
      -5.635
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118399",
    "name": "Gliese 223.2",
    "distanceLy": 21.07,
    "apparentMagnitude": 14.45,
    "spectralClass": "DZ9",
    "colorIndex": 1.05,
    "color": "#ffb17b",
    "positionLy": [
      0.444,
      -1.532,
      21.009
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-80218",
    "name": "Gliese 625",
    "distanceLy": 21.25,
    "apparentMagnitude": 10.13,
    "spectralClass": "M2",
    "colorIndex": 1.591,
    "color": "#ffb17b",
    "positionLy": [
      -4.974,
      17.26,
      -11.36
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118812",
    "name": "Gliese GJ 1156",
    "distanceLy": 21.33,
    "apparentMagnitude": 13.81,
    "spectralClass": "dM   e",
    "colorIndex": 1.88,
    "color": "#ffb17b",
    "positionLy": [
      -20.858,
      4.116,
      -1.734
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-114260",
    "name": "Gliese 892",
    "distanceLy": 21.35,
    "apparentMagnitude": 5.57,
    "spectralClass": "K3Vvar",
    "colorIndex": 1,
    "color": "#ffb17b",
    "positionLy": [
      11.336,
      17.94,
      -2.343
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-53612",
    "name": "Gliese 408",
    "distanceLy": 21.73,
    "apparentMagnitude": 10.03,
    "spectralClass": "M3",
    "colorIndex": 1.525,
    "color": "#ffb17b",
    "positionLy": [
      -19.346,
      8.432,
      5.177
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118988",
    "name": "Gliese 566B",
    "distanceLy": 21.85,
    "apparentMagnitude": 6.97,
    "spectralClass": "K4 Ve",
    "colorIndex": 1.16,
    "color": "#ffb17b",
    "positionLy": [
      -15.139,
      7.15,
      -14.042
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-105765",
    "name": "Gliese 829",
    "distanceLy": 21.87,
    "apparentMagnitude": 10.33,
    "spectralClass": "M4",
    "colorIndex": 1.62,
    "color": "#ffb17b",
    "positionLy": [
      16.511,
      6.628,
      -12.714
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-72432",
    "name": "Xi Boo",
    "distanceLy": 21.89,
    "apparentMagnitude": 4.54,
    "spectralClass": "G8V + K4V",
    "colorIndex": 0.72,
    "color": "#ffd7a3",
    "positionLy": [
      -15.167,
      7.164,
      -14.068
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-82557",
    "name": "Gliese 643",
    "distanceLy": 21.9,
    "apparentMagnitude": 11.73,
    "spectralClass": "M4",
    "colorIndex": 1.7,
    "color": "#ffb17b",
    "positionLy": [
      -6.026,
      -3.17,
      -20.816
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118530",
    "name": "Gliese 299",
    "distanceLy": 22.04,
    "apparentMagnitude": 12.83,
    "spectralClass": "dM5",
    "colorIndex": 1.77,
    "color": "#ffb17b",
    "positionLy": [
      -11.856,
      3.361,
      18.263
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-52866",
    "name": "Gliese 402",
    "distanceLy": 22.05,
    "apparentMagnitude": 11.64,
    "spectralClass": "M4:",
    "colorIndex": 1.679,
    "color": "#ffb17b",
    "positionLy": [
      -20.905,
      2.614,
      6.505
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119513",
    "name": "Gliese GJ 4285",
    "distanceLy": 22.19,
    "apparentMagnitude": 11.45,
    "spectralClass": "m",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      8.512,
      -20.241,
      -3.182
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-84451",
    "name": "Gliese 667A",
    "distanceLy": 22.3,
    "apparentMagnitude": 5.91,
    "spectralClass": "K4V",
    "colorIndex": 1.082,
    "color": "#ffb17b",
    "positionLy": [
      -3.254,
      -12.785,
      -17.973
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-112936",
    "name": "Gliese 880",
    "distanceLy": 22.33,
    "apparentMagnitude": 8.68,
    "spectralClass": "M2:",
    "colorIndex": 1.507,
    "color": "#ffb17b",
    "positionLy": [
      20.585,
      6.361,
      -5.846
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118510",
    "name": "Gliese 293",
    "distanceLy": 22.54,
    "apparentMagnitude": 14.08,
    "spectralClass": "DQ9",
    "colorIndex": 0.66,
    "color": "#ffd7a3",
    "positionLy": [
      -4.041,
      -20.868,
      7.5
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119143",
    "name": "Gliese 667B",
    "distanceLy": 22.74,
    "apparentMagnitude": 7.2,
    "spectralClass": "K5 V",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -3.318,
      -13.039,
      -18.329
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119144",
    "name": "Gliese 667C",
    "distanceLy": 22.74,
    "apparentMagnitude": 10.24,
    "spectralClass": "M2.5",
    "colorIndex": 1.57,
    "color": "#ffb17b",
    "positionLy": [
      -3.317,
      -13.041,
      -18.328
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-102765",
    "name": "Gliese 809",
    "distanceLy": 22.99,
    "apparentMagnitude": 8.55,
    "spectralClass": "M2V",
    "colorIndex": 1.483,
    "color": "#ffb17b",
    "positionLy": [
      7.369,
      20.327,
      -7.811
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-51172",
    "name": "Gliese 393",
    "distanceLy": 23.05,
    "apparentMagnitude": 9.65,
    "spectralClass": "M2",
    "colorIndex": 1.507,
    "color": "#ffb17b",
    "positionLy": [
      -21.252,
      0.338,
      8.92
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118835",
    "name": "Gliese GJ 3737",
    "distanceLy": 23.46,
    "apparentMagnitude": 12.74,
    "spectralClass": "M4",
    "colorIndex": 1.69,
    "color": "#ffb17b",
    "positionLy": [
      -18.132,
      -14.567,
      -3.101
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118157",
    "name": "Gliese 105B",
    "distanceLy": 23.51,
    "apparentMagnitude": 11.66,
    "spectralClass": "dM4.5",
    "colorIndex": 1.6,
    "color": "#ffb17b",
    "positionLy": [
      18.128,
      2.814,
      14.713
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119571",
    "name": "Gliese GJ 1286",
    "distanceLy": 23.53,
    "apparentMagnitude": 14.69,
    "spectralClass": "M5",
    "colorIndex": 1.96,
    "color": "#ffb17b",
    "positionLy": [
      23.374,
      -0.981,
      -2.542
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119212",
    "name": "Gliese GJ 4053",
    "distanceLy": 23.75,
    "apparentMagnitude": 13.48,
    "spectralClass": "m",
    "colorIndex": 1.83,
    "color": "#ffb17b",
    "positionLy": [
      0.792,
      21.733,
      -9.556
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119229",
    "name": "Gliese GJ 1230A",
    "distanceLy": 23.98,
    "apparentMagnitude": 12.4,
    "spectralClass": "k-m",
    "colorIndex": 1.71,
    "color": "#ffb17b",
    "positionLy": [
      3.889,
      10.053,
      -21.423
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119230",
    "name": "Gliese GJ 1230B",
    "distanceLy": 23.98,
    "apparentMagnitude": 14,
    "spectralClass": "m",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      3.889,
      10.054,
      -21.423
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-83688",
    "name": "Gliese GJ 3991",
    "distanceLy": 24.28,
    "apparentMagnitude": 11.77,
    "spectralClass": "M3",
    "colorIndex": 1.696,
    "color": "#ffb17b",
    "positionLy": [
      -3.837,
      16.772,
      -17.138
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119492",
    "name": "Gliese GJ 4274",
    "distanceLy": 24.32,
    "apparentMagnitude": 13.25,
    "spectralClass": "M4",
    "colorIndex": 1.84,
    "color": "#ffb17b",
    "positionLy": [
      21.141,
      -7.357,
      -9.511
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-2016",
    "name": "Bet Hyi",
    "distanceLy": 24.33,
    "apparentMagnitude": 2.82,
    "spectralClass": "G2IV",
    "colorIndex": 0.618,
    "color": "#ffd7a3",
    "positionLy": [
      5.334,
      -23.729,
      0.602
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-12748",
    "name": "Gliese 109",
    "distanceLy": 24.49,
    "apparentMagnitude": 10.55,
    "spectralClass": "M3.5Ve",
    "colorIndex": 1.53,
    "color": "#ffb17b",
    "positionLy": [
      16.666,
      10.554,
      14.52
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-117987",
    "name": "Gliese GJ 2005",
    "distanceLy": 24.56,
    "apparentMagnitude": 15.42,
    "spectralClass": "M5.5",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      21.695,
      -11.19,
      2.347
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119199",
    "name": "Gliese GJ 1224",
    "distanceLy": 24.58,
    "apparentMagnitude": 13.63,
    "spectralClass": "m",
    "colorIndex": 1.79,
    "color": "#ffb17b",
    "positionLy": [
      0.778,
      -6.761,
      -23.618
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118043",
    "name": "Gliese 53B",
    "distanceLy": 24.63,
    "apparentMagnitude": 11,
    "spectralClass": "unknown",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      13.534,
      20.16,
      4.155
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-5325",
    "name": "Mu Cas",
    "distanceLy": 24.64,
    "apparentMagnitude": 5.17,
    "spectralClass": "G5Vp",
    "colorIndex": 0.704,
    "color": "#ffd7a3",
    "positionLy": [
      13.534,
      20.16,
      4.156
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118405",
    "name": "Gliese GJ 3378",
    "distanceLy": 24.67,
    "apparentMagnitude": 11.71,
    "spectralClass": "m",
    "colorIndex": 1.6,
    "color": "#ffb17b",
    "positionLy": [
      -0.063,
      21.28,
      12.484
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-112923",
    "name": "Gliese 879",
    "distanceLy": 24.82,
    "apparentMagnitude": 6.48,
    "spectralClass": "K4Vp",
    "colorIndex": 1.094,
    "color": "#ffb17b",
    "positionLy": [
      20.337,
      -12.992,
      -5.793
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118187",
    "name": "Gliese GJ 3193B",
    "distanceLy": 24.9,
    "apparentMagnitude": 11.8,
    "spectralClass": "M3",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      16.736,
      -7.109,
      17.007
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119616",
    "name": "Gliese GJ 3192",
    "distanceLy": 24.9,
    "apparentMagnitude": 10.96,
    "spectralClass": "M3",
    "colorIndex": 1.69,
    "color": "#ffb17b",
    "positionLy": [
      16.736,
      -7.109,
      17.007
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-65653",
    "name": "Gliese 514",
    "distanceLy": 24.97,
    "apparentMagnitude": 9.05,
    "spectralClass": "M1V",
    "colorIndex": 1.493,
    "color": "#ffb17b",
    "positionLy": [
      -22.692,
      4.498,
      -9.399
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-90979",
    "name": "Vega",
    "distanceLy": 25.04,
    "apparentMagnitude": 0.03,
    "spectralClass": "A0Vvar",
    "colorIndex": -0.001,
    "color": "#c7ddff",
    "positionLy": [
      3.133,
      15.687,
      -19.269
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-85036",
    "name": "Gliese 673",
    "distanceLy": 25.12,
    "apparentMagnitude": 7.54,
    "spectralClass": "K7V",
    "colorIndex": 1.359,
    "color": "#ffb17b",
    "positionLy": [
      -3.736,
      0.925,
      -24.819
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-113008",
    "name": "Fomalhaut",
    "distanceLy": 25.13,
    "apparentMagnitude": 1.17,
    "spectralClass": "A3V",
    "colorIndex": 0.145,
    "color": "#c7ddff",
    "positionLy": [
      21.039,
      -12.419,
      -5.869
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118451",
    "name": "Gliese GJ 3417",
    "distanceLy": 25.28,
    "apparentMagnitude": 13.65,
    "spectralClass": "m",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -2.938,
      22.391,
      11.369
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118455",
    "name": "Gliese GJ 1093",
    "distanceLy": 25.3,
    "apparentMagnitude": 14.83,
    "spectralClass": "m",
    "colorIndex": 1.93,
    "color": "#ffb17b",
    "positionLy": [
      -6.126,
      8.384,
      23.075
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-88300",
    "name": "Gliese 701",
    "distanceLy": 25.31,
    "apparentMagnitude": 9.37,
    "spectralClass": "M2V",
    "colorIndex": 1.508,
    "color": "#ffb17b",
    "positionLy": [
      0.565,
      -1.338,
      -25.264
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-61681",
    "name": "Gliese 480.1",
    "distanceLy": 25.38,
    "apparentMagnitude": 12.24,
    "spectralClass": "M4",
    "colorIndex": 1.75,
    "color": "#ffb17b",
    "positionLy": [
      -18.097,
      -17.489,
      -3.254
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119615",
    "name": "Gliese 915",
    "distanceLy": 25.44,
    "apparentMagnitude": 13.05,
    "spectralClass": "DA5",
    "colorIndex": 0.07,
    "color": "#c7ddff",
    "positionLy": [
      18.555,
      -17.405,
      0.176
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-49845",
    "name": "Gliese 382",
    "distanceLy": 25.67,
    "apparentMagnitude": 9.26,
    "spectralClass": "M3",
    "colorIndex": 1.487,
    "color": "#ffb17b",
    "positionLy": [
      -22.834,
      -1.677,
      11.598
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118894",
    "name": "Gliese GJ 3789",
    "distanceLy": 25.89,
    "apparentMagnitude": 11.95,
    "spectralClass": "M4  e",
    "colorIndex": 1.57,
    "color": "#ffb17b",
    "positionLy": [
      -20.793,
      12.658,
      -8.802
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118400",
    "name": "Gliese GJ 1087",
    "distanceLy": 26.07,
    "apparentMagnitude": 14.1,
    "spectralClass": "DAP9",
    "colorIndex": 0.6,
    "color": "#ffd7a3",
    "positionLy": [
      0.405,
      2.437,
      25.954
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-100854",
    "name": "Gliese 793",
    "distanceLy": 26.08,
    "apparentMagnitude": 10.54,
    "spectralClass": "M3",
    "colorIndex": 1.542,
    "color": "#ffb17b",
    "positionLy": [
      6.616,
      23.721,
      -8.581
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-89660",
    "name": "Chi Dra",
    "distanceLy": 26.28,
    "apparentMagnitude": 3.55,
    "spectralClass": "F7Vvar",
    "colorIndex": 0.489,
    "color": "#fff2d2",
    "positionLy": [
      0.716,
      25.096,
      -7.768
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-22396",
    "name": "Tabit",
    "distanceLy": 26.32,
    "apparentMagnitude": 3.19,
    "spectralClass": "F6V",
    "colorIndex": 0.484,
    "color": "#fff2d2",
    "positionLy": [
      7.872,
      3.189,
      24.908
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-113216",
    "name": "Gliese 884",
    "distanceLy": 26.8,
    "apparentMagnitude": 7.88,
    "spectralClass": "K5/M0V",
    "colorIndex": 1.379,
    "color": "#ffb17b",
    "positionLy": [
      23.922,
      -10.267,
      -6.38
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-86705",
    "name": "Mu Her",
    "distanceLy": 27.11,
    "apparentMagnitude": 3.42,
    "spectralClass": "G5IV",
    "colorIndex": 0.75,
    "color": "#ffd7a3",
    "positionLy": [
      -1.417,
      12.608,
      -23.952
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-62257",
    "name": "Gar",
    "distanceLy": 27.3,
    "apparentMagnitude": 11.39,
    "spectralClass": "M4",
    "colorIndex": 1.563,
    "color": "#ffb17b",
    "positionLy": [
      -26.32,
      4.624,
      -5.588
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-61124",
    "name": "Chara",
    "distanceLy": 27.53,
    "apparentMagnitude": 4.24,
    "spectralClass": "G0V",
    "colorIndex": 0.588,
    "color": "#fff2d2",
    "positionLy": [
      -20.438,
      18.188,
      -3.031
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-1595",
    "name": "Zet Tuc",
    "distanceLy": 28.01,
    "apparentMagnitude": 4.23,
    "spectralClass": "F9V",
    "colorIndex": 0.576,
    "color": "#fff2d2",
    "positionLy": [
      11.846,
      -25.356,
      1.04
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-27844",
    "name": "Chi-1 Ori",
    "distanceLy": 28.26,
    "apparentMagnitude": 4.39,
    "spectralClass": "G0V",
    "colorIndex": 0.594,
    "color": "#fff2d2",
    "positionLy": [
      0.65,
      9.792,
      26.497
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-23256",
    "name": "Gliese 183",
    "distanceLy": 28.4,
    "apparentMagnitude": 6.22,
    "spectralClass": "K3V",
    "colorIndex": 1.049,
    "color": "#ffb17b",
    "positionLy": [
      7.217,
      -2.847,
      27.322
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-32897",
    "name": "Gliese 250A",
    "distanceLy": 28.41,
    "apparentMagnitude": 6.58,
    "spectralClass": "K3V",
    "colorIndex": 1.071,
    "color": "#ffb17b",
    "positionLy": [
      -6.401,
      -2.562,
      27.559
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-84462",
    "name": "Gliese 666A",
    "distanceLy": 28.71,
    "apparentMagnitude": 5.47,
    "spectralClass": "M0V",
    "colorIndex": 0.764,
    "color": "#ffd7a3",
    "positionLy": [
      -3.502,
      -20.872,
      -19.399
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-99507",
    "name": "Gliese 785",
    "distanceLy": 29.06,
    "apparentMagnitude": 5.73,
    "spectralClass": "K3V",
    "colorIndex": 0.878,
    "color": "#ffd7a3",
    "positionLy": [
      14.409,
      -13.209,
      -21.506
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-27006",
    "name": "Gam Lep",
    "distanceLy": 29.12,
    "apparentMagnitude": 3.59,
    "spectralClass": "F7V",
    "colorIndex": 0.481,
    "color": "#fff2d2",
    "positionLy": [
      1.823,
      -11.118,
      26.848
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118392",
    "name": "Gliese 216B",
    "distanceLy": 29.25,
    "apparentMagnitude": 6.13,
    "spectralClass": "K2 V",
    "colorIndex": 0.94,
    "color": "#ffd7a3",
    "positionLy": [
      1.835,
      -11.157,
      26.979
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-17336",
    "name": "Rana",
    "distanceLy": 29.49,
    "apparentMagnitude": 3.52,
    "spectralClass": "K0IV",
    "colorIndex": 0.915,
    "color": "#ffd7a3",
    "positionLy": [
      16.329,
      -5,
      24.038
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-57767",
    "name": "Groombridge 1830",
    "distanceLy": 29.65,
    "apparentMagnitude": 6.42,
    "spectralClass": "G8Vp",
    "colorIndex": 0.754,
    "color": "#ffd7a3",
    "positionLy": [
      -23.443,
      18.14,
      0.718
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-64189",
    "name": "Bet Com",
    "distanceLy": 29.78,
    "apparentMagnitude": 4.23,
    "spectralClass": "G0V",
    "colorIndex": 0.572,
    "color": "#fff2d2",
    "positionLy": [
      -25.036,
      13.923,
      -8.119
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-15419",
    "name": "Kap-1 Cet",
    "distanceLy": 29.81,
    "apparentMagnitude": 4.84,
    "spectralClass": "G5Vvar",
    "colorIndex": 0.681,
    "color": "#ffd7a3",
    "positionLy": [
      19.192,
      1.752,
      22.744
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-57270",
    "name": "Gliese 442A",
    "distanceLy": 30.07,
    "apparentMagnitude": 4.89,
    "spectralClass": "G3/G5V",
    "colorIndex": 0.664,
    "color": "#ffd7a3",
    "positionLy": [
      -22.829,
      -19.532,
      1.345
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-105519",
    "name": "Gam Pav",
    "distanceLy": 30.21,
    "apparentMagnitude": 4.21,
    "spectralClass": "F6V",
    "colorIndex": 0.494,
    "color": "#fff2d2",
    "positionLy": [
      9.869,
      -27.458,
      -7.819
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-56283",
    "name": "Gliese 432A",
    "distanceLy": 31.18,
    "apparentMagnitude": 5.96,
    "spectralClass": "K0V",
    "colorIndex": 0.811,
    "color": "#ffd7a3",
    "positionLy": [
      -26.035,
      -16.903,
      2.91
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-81753",
    "name": "Gliese 638",
    "distanceLy": 31.99,
    "apparentMagnitude": 8.1,
    "spectralClass": "K7V",
    "colorIndex": 1.31,
    "color": "#ffb17b",
    "positionLy": [
      -8.562,
      17.66,
      -25.26
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-8347",
    "name": "Gliese 75",
    "distanceLy": 32.84,
    "apparentMagnitude": 5.63,
    "spectralClass": "K0V",
    "colorIndex": 0.804,
    "color": "#ffd7a3",
    "positionLy": [
      12.9,
      29.476,
      6.555
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-56916",
    "name": "Noquisi",
    "distanceLy": 33.08,
    "apparentMagnitude": 10.67,
    "spectralClass": "M3",
    "colorIndex": 1.493,
    "color": "#ffb17b",
    "positionLy": [
      -29.458,
      14.865,
      2.294
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-58170",
    "name": "Gliese 453",
    "distanceLy": 33.13,
    "apparentMagnitude": 6.99,
    "spectralClass": "K4V",
    "colorIndex": 1.128,
    "color": "#ffb17b",
    "positionLy": [
      -29.33,
      -15.404,
      0.264
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-29198",
    "name": "Alp Men",
    "distanceLy": 33.26,
    "apparentMagnitude": 5.08,
    "spectralClass": "G5V",
    "colorIndex": 0.714,
    "color": "#ffd7a3",
    "positionLy": [
      -0.391,
      -32.091,
      8.738
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-13368",
    "name": "Gliese 117",
    "distanceLy": 33.76,
    "apparentMagnitude": 6.05,
    "spectralClass": "K1V",
    "colorIndex": 0.862,
    "color": "#ffd7a3",
    "positionLy": [
      24.03,
      -7.463,
      22.514
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-37718",
    "name": "Pollux",
    "distanceLy": 33.78,
    "apparentMagnitude": 1.16,
    "spectralClass": "K0IIIvar",
    "colorIndex": 0.991,
    "color": "#ffd7a3",
    "positionLy": [
      -13.227,
      15.875,
      26.729
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118742",
    "name": "Alula Australis",
    "distanceLy": 33.97,
    "apparentMagnitude": 4.33,
    "spectralClass": "G0 Ve",
    "colorIndex": 0.59,
    "color": "#fff2d2",
    "positionLy": [
      -28.476,
      17.765,
      5.254
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118743",
    "name": "Alula Australis B",
    "distanceLy": 33.97,
    "apparentMagnitude": 4.8,
    "spectralClass": "G0 Ve",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -28.477,
      17.765,
      5.254
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-14596",
    "name": "Iot Per",
    "distanceLy": 34.38,
    "apparentMagnitude": 4.05,
    "spectralClass": "G0V",
    "colorIndex": 0.595,
    "color": "#fff2d2",
    "positionLy": [
      15.117,
      26.187,
      16.363
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-83334",
    "name": "Gliese 653",
    "distanceLy": 34.92,
    "apparentMagnitude": 7.7,
    "spectralClass": "K5V",
    "colorIndex": 1.1,
    "color": "#ffb17b",
    "positionLy": [
      -8.26,
      -3.084,
      -33.79
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-81444",
    "name": "Zet Her",
    "distanceLy": 34.95,
    "apparentMagnitude": 2.81,
    "spectralClass": "F9IV",
    "colorIndex": 0.65,
    "color": "#ffd7a3",
    "positionLy": [
      -10.023,
      18.314,
      -28.027
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-10116",
    "name": "Gliese 86",
    "distanceLy": 35.17,
    "apparentMagnitude": 6.12,
    "spectralClass": "K0V",
    "colorIndex": 0.812,
    "color": "#ffd7a3",
    "positionLy": [
      18.715,
      -27.264,
      11.973
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-10620",
    "name": "Del Tri",
    "distanceLy": 35.17,
    "apparentMagnitude": 4.84,
    "spectralClass": "G0V",
    "colorIndex": 0.607,
    "color": "#ffd7a3",
    "positionLy": [
      24.035,
      19.782,
      16.373
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119106",
    "name": "Gliese 635B",
    "distanceLy": 35.21,
    "apparentMagnitude": 5.4,
    "spectralClass": "K0 V",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -10.099,
      18.45,
      -28.238
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-117345",
    "name": "Gliese 909A",
    "distanceLy": 35.52,
    "apparentMagnitude": 6.36,
    "spectralClass": "K3V",
    "colorIndex": 0.977,
    "color": "#ffd7a3",
    "positionLy": [
      8.862,
      34.397,
      -0.293
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-57584",
    "name": "Zavijava",
    "distanceLy": 35.65,
    "apparentMagnitude": 3.59,
    "spectralClass": "F8V",
    "colorIndex": 0.518,
    "color": "#fff2d2",
    "positionLy": [
      -35.599,
      1.098,
      1.446
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-57459",
    "name": "Denebola",
    "distanceLy": 35.88,
    "apparentMagnitude": 2.14,
    "spectralClass": "A3Vvar",
    "colorIndex": 0.09,
    "color": "#c7ddff",
    "positionLy": [
      -34.683,
      9.027,
      1.657
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-86134",
    "name": "Gliese 688",
    "distanceLy": 35.88,
    "apparentMagnitude": 6.53,
    "spectralClass": "K3V",
    "colorIndex": 0.959,
    "color": "#ffd7a3",
    "positionLy": [
      -3.233,
      2.225,
      -35.662
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-88694",
    "name": "Gliese 706",
    "distanceLy": 35.96,
    "apparentMagnitude": 6.38,
    "spectralClass": "K2V",
    "colorIndex": 0.876,
    "color": "#ffd7a3",
    "positionLy": [
      1.182,
      22.362,
      -28.131
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-64592",
    "name": "Gliese 505A",
    "distanceLy": 36.11,
    "apparentMagnitude": 6.49,
    "spectralClass": "K2V",
    "colorIndex": 0.926,
    "color": "#ffd7a3",
    "positionLy": [
      -32.607,
      10.568,
      -11.363
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-12744",
    "name": "The Per",
    "distanceLy": 36.29,
    "apparentMagnitude": 4.1,
    "spectralClass": "F7V",
    "colorIndex": 0.514,
    "color": "#fff2d2",
    "positionLy": [
      17.874,
      27.485,
      15.565
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-42688",
    "name": "Gliese 320",
    "distanceLy": 36.34,
    "apparentMagnitude": 6.58,
    "spectralClass": "K2V",
    "colorIndex": 0.917,
    "color": "#ffd7a3",
    "positionLy": [
      -18.492,
      -22.809,
      21.404
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-48194",
    "name": "Gliese 370",
    "distanceLy": 36.39,
    "apparentMagnitude": 7.67,
    "spectralClass": "K5V",
    "colorIndex": 1.156,
    "color": "#ffb17b",
    "positionLy": [
      -22.332,
      -25.052,
      14.074
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-77836",
    "name": "Gam Ser",
    "distanceLy": 36.7,
    "apparentMagnitude": 3.85,
    "spectralClass": "F6V",
    "colorIndex": 0.478,
    "color": "#fff2d2",
    "positionLy": [
      -18.143,
      9.909,
      -30.33
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-69451",
    "name": "Arcturus",
    "distanceLy": 36.72,
    "apparentMagnitude": -0.05,
    "spectralClass": "K2IIIp",
    "colorIndex": 1.239,
    "color": "#ffb17b",
    "positionLy": [
      -28.778,
      12.064,
      -19.349
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-472",
    "name": "Gliese 4A",
    "distanceLy": 36.88,
    "apparentMagnitude": 8.2,
    "spectralClass": "K2",
    "colorIndex": 1.41,
    "color": "#ffb17b",
    "positionLy": [
      25.697,
      26.444,
      0.637
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-67711",
    "name": "Muphrid",
    "distanceLy": 37.17,
    "apparentMagnitude": 2.68,
    "spectralClass": "G0IV",
    "colorIndex": 0.58,
    "color": "#fff2d2",
    "positionLy": [
      -30.945,
      11.731,
      -16.921
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-116379",
    "name": "Gliese 902",
    "distanceLy": 37.25,
    "apparentMagnitude": 7.09,
    "spectralClass": "K3V",
    "colorIndex": 0.989,
    "color": "#ffd7a3",
    "positionLy": [
      11.02,
      -35.57,
      -0.982
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-72622",
    "name": "Gliese 567",
    "distanceLy": 37.54,
    "apparentMagnitude": 6,
    "spectralClass": "K2V",
    "colorIndex": 0.841,
    "color": "#ffd7a3",
    "positionLy": [
      -25.787,
      12.316,
      -24.343
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-23638",
    "name": "Zet Dor",
    "distanceLy": 37.98,
    "apparentMagnitude": 4.71,
    "spectralClass": "F7V",
    "colorIndex": 0.526,
    "color": "#fff2d2",
    "positionLy": [
      4.81,
      -32.024,
      19.849
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-61748",
    "name": "Porrima",
    "distanceLy": 38.11,
    "apparentMagnitude": 2.74,
    "spectralClass": "F0V+...",
    "colorIndex": 0.368,
    "color": "#fff2d2",
    "positionLy": [
      -37.471,
      -0.964,
      -6.887
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-108830",
    "name": "Iot Peg",
    "distanceLy": 38.25,
    "apparentMagnitude": 3.77,
    "spectralClass": "F5V",
    "colorIndex": 0.435,
    "color": "#fff2d2",
    "positionLy": [
      30.448,
      16.372,
      -16.358
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-69749",
    "name": "Gliese 542",
    "distanceLy": 38.48,
    "apparentMagnitude": 6.66,
    "spectralClass": "K3V",
    "colorIndex": 1.017,
    "color": "#ffb17b",
    "positionLy": [
      -16.1,
      -33.114,
      -11.177
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118838",
    "name": "Gam Vir",
    "distanceLy": 38.58,
    "apparentMagnitude": 3.52,
    "spectralClass": "F0 V",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -37.934,
      -0.976,
      -6.971
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-107213",
    "name": "Deneb Algedi",
    "distanceLy": 38.7,
    "apparentMagnitude": 2.85,
    "spectralClass": "A5mF2 (IV)",
    "colorIndex": 0.18,
    "color": "#c7ddff",
    "positionLy": [
      31.097,
      -10.751,
      -20.38
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-15293",
    "name": "Zet-1 Ret",
    "distanceLy": 39.16,
    "apparentMagnitude": 5.53,
    "spectralClass": "G2V",
    "colorIndex": 0.641,
    "color": "#ffd7a3",
    "positionLy": [
      11.729,
      -34.763,
      13.705
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-15333",
    "name": "Zet-2 Ret",
    "distanceLy": 39.24,
    "apparentMagnitude": 5.24,
    "spectralClass": "G1V",
    "colorIndex": 0.6,
    "color": "#ffd7a3",
    "positionLy": [
      11.753,
      -34.812,
      13.787
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-80442",
    "name": "Zet TrA",
    "distanceLy": 39.52,
    "apparentMagnitude": 4.9,
    "spectralClass": "F9V",
    "colorIndex": 0.555,
    "color": "#fff2d2",
    "positionLy": [
      -5.235,
      -37.156,
      -12.402
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-77022",
    "name": "Lam Ser",
    "distanceLy": 39.54,
    "apparentMagnitude": 4.42,
    "spectralClass": "G0Vvar",
    "colorIndex": 0.604,
    "color": "#ffd7a3",
    "positionLy": [
      -21.582,
      5.061,
      -32.744
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-41807",
    "name": "Gliese 309",
    "distanceLy": 39.82,
    "apparentMagnitude": 6.38,
    "spectralClass": "K0V",
    "colorIndex": 0.78,
    "color": "#ffd7a3",
    "positionLy": [
      -21.002,
      -20.806,
      26.675
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-26714",
    "name": "Gliese 211",
    "distanceLy": 40.04,
    "apparentMagnitude": 6.21,
    "spectralClass": "K1V",
    "colorIndex": 0.84,
    "color": "#ffd7a3",
    "positionLy": [
      1.938,
      32.182,
      23.751
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-43464",
    "name": "Copernicus",
    "distanceLy": 40.25,
    "apparentMagnitude": 5.96,
    "spectralClass": "G8V",
    "colorIndex": 0.869,
    "color": "#ffd7a3",
    "positionLy": [
      -24.231,
      19.102,
      25.849
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-77716",
    "name": "Bet TrA",
    "distanceLy": 40.37,
    "apparentMagnitude": 2.83,
    "spectralClass": "F2III",
    "colorIndex": 0.315,
    "color": "#fff2d2",
    "positionLy": [
      -9.358,
      -36.108,
      -15.443
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-56827",
    "name": "Gliese 435",
    "distanceLy": 40.45,
    "apparentMagnitude": 7.77,
    "spectralClass": "K5V",
    "colorIndex": 1.064,
    "color": "#ffb17b",
    "positionLy": [
      -28.796,
      -28.301,
      2.388
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-40578",
    "name": "Gliese 302",
    "distanceLy": 40.75,
    "apparentMagnitude": 5.95,
    "spectralClass": "K0V",
    "colorIndex": 0.754,
    "color": "#ffd7a3",
    "positionLy": [
      -22.579,
      -8.912,
      32.731
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-24753",
    "name": "Lam Aur",
    "distanceLy": 41.2,
    "apparentMagnitude": 4.69,
    "spectralClass": "G0V",
    "colorIndex": 0.63,
    "color": "#ffd7a3",
    "positionLy": [
      5.589,
      26.537,
      31.015
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-10772",
    "name": "Gliese 95",
    "distanceLy": 41.32,
    "apparentMagnitude": 6.33,
    "spectralClass": "G8V",
    "colorIndex": 0.724,
    "color": "#ffd7a3",
    "positionLy": [
      30.533,
      -18.079,
      21.176
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-7903",
    "name": "Gliese 67",
    "distanceLy": 41.55,
    "apparentMagnitude": 4.96,
    "spectralClass": "G2V",
    "colorIndex": 0.618,
    "color": "#ffd7a3",
    "positionLy": [
      27.611,
      28.131,
      13.138
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119003",
    "name": "Gliese 575B",
    "distanceLy": 41.61,
    "apparentMagnitude": 5.96,
    "spectralClass": "dG2",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -19.488,
      30.751,
      -20.143
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-58401",
    "name": "Gliese 454",
    "distanceLy": 41.63,
    "apparentMagnitude": 5.54,
    "spectralClass": "K0IV",
    "colorIndex": 0.76,
    "color": "#ffd7a3",
    "positionLy": [
      -40.938,
      -7.548,
      -0.132
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-80095",
    "name": "Gliese 620.1A",
    "distanceLy": 41.68,
    "apparentMagnitude": 5.37,
    "spectralClass": "G3/G5V",
    "colorIndex": 0.625,
    "color": "#ffd7a3",
    "positionLy": [
      -13.135,
      -26.337,
      -29.509
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-84976",
    "name": "Gliese 675",
    "distanceLy": 41.76,
    "apparentMagnitude": 6.44,
    "spectralClass": "K0V",
    "colorIndex": 0.759,
    "color": "#ffd7a3",
    "positionLy": [
      -2.45,
      38.522,
      -15.922
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-98385",
    "name": "Gliese 775",
    "distanceLy": 41.94,
    "apparentMagnitude": 7.46,
    "spectralClass": "K4V",
    "colorIndex": 1.128,
    "color": "#ffb17b",
    "positionLy": [
      21.375,
      2.434,
      -36.006
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-46447",
    "name": "Gliese 349",
    "distanceLy": 42.1,
    "apparentMagnitude": 7.2,
    "spectralClass": "K3V",
    "colorIndex": 1.002,
    "color": "#ffb17b",
    "positionLy": [
      -33.225,
      4.148,
      25.514
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119137",
    "name": "Onkaria",
    "distanceLy": 42.14,
    "apparentMagnitude": 14.67,
    "spectralClass": "m",
    "colorIndex": 1.74,
    "color": "#ffb17b",
    "positionLy": [
      -8.134,
      3.645,
      -41.186
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118360",
    "name": "Gliese 194B",
    "distanceLy": 42.2,
    "apparentMagnitude": 0.96,
    "spectralClass": "G0 III",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      5.509,
      30.36,
      28.795
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-25559",
    "name": "Gliese 204",
    "distanceLy": 42.47,
    "apparentMagnitude": 7.65,
    "spectralClass": "K5V",
    "colorIndex": 1.113,
    "color": "#ffb17b",
    "positionLy": [
      5.82,
      -2.592,
      41.986
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-19834",
    "name": "Gliese 167",
    "distanceLy": 42.55,
    "apparentMagnitude": 7.64,
    "spectralClass": "K5V",
    "colorIndex": 1.115,
    "color": "#ffb17b",
    "positionLy": [
      11.149,
      -34.116,
      22.845
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-91156",
    "name": "Gliese 722",
    "distanceLy": 42.67,
    "apparentMagnitude": 5.85,
    "spectralClass": "G5V",
    "colorIndex": 0.673,
    "color": "#ffd7a3",
    "positionLy": [
      6.726,
      -15.329,
      -39.255
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-24549",
    "name": "Capella",
    "distanceLy": 42.8,
    "apparentMagnitude": 0.08,
    "spectralClass": "M1: comp",
    "colorIndex": 0.795,
    "color": "#ffd7a3",
    "positionLy": [
      5.586,
      30.789,
      29.205
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-21764",
    "name": "Gliese 174",
    "distanceLy": 43.02,
    "apparentMagnitude": 8.09,
    "spectralClass": "K3V",
    "colorIndex": 1.092,
    "color": "#ffb17b",
    "positionLy": [
      13.528,
      15.347,
      37.841
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-70956",
    "name": "Gliese 556",
    "distanceLy": 43.11,
    "apparentMagnitude": 7.24,
    "spectralClass": "K3V",
    "colorIndex": 0.997,
    "color": "#ffd7a3",
    "positionLy": [
      -20.386,
      34.391,
      -16.14
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-90508",
    "name": "Gliese 716",
    "distanceLy": 43.22,
    "apparentMagnitude": 6.81,
    "spectralClass": "K1V",
    "colorIndex": 0.861,
    "color": "#ffd7a3",
    "positionLy": [
      5.57,
      -14.006,
      -40.508
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-67209",
    "name": "Gliese 528A",
    "distanceLy": 43.73,
    "apparentMagnitude": 7.05,
    "spectralClass": "K2",
    "colorIndex": 1.11,
    "color": "#ffb17b",
    "positionLy": [
      -34.642,
      19.84,
      -17.854
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-46720",
    "name": "The UMa",
    "distanceLy": 43.96,
    "apparentMagnitude": 3.17,
    "spectralClass": "F6IV",
    "colorIndex": 0.475,
    "color": "#fff2d2",
    "positionLy": [
      -21.833,
      34.49,
      16.324
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-7499",
    "name": "Titawin",
    "distanceLy": 44,
    "apparentMagnitude": 4.1,
    "spectralClass": "F8V",
    "colorIndex": 0.536,
    "color": "#fff2d2",
    "positionLy": [
      30.104,
      29.103,
      13.529
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-111606",
    "name": "Gliese 868",
    "distanceLy": 44.19,
    "apparentMagnitude": 7.83,
    "spectralClass": "K4/K5V",
    "colorIndex": 1.143,
    "color": "#ffb17b",
    "positionLy": [
      36.124,
      -21.879,
      -13.019
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-83731",
    "name": "Gliese 656",
    "distanceLy": 44.43,
    "apparentMagnitude": 7.38,
    "spectralClass": "K0V",
    "colorIndex": 0.889,
    "color": "#ffd7a3",
    "positionLy": [
      -4.686,
      -38.757,
      -21.212
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118926",
    "name": "Gliese 528B",
    "distanceLy": 44.53,
    "apparentMagnitude": 8.03,
    "spectralClass": "dK6",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -35.27,
      20.198,
      -18.177
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-543",
    "name": "Gliese 5",
    "distanceLy": 44.59,
    "apparentMagnitude": 6.07,
    "spectralClass": "K0V",
    "colorIndex": 0.752,
    "color": "#ffd7a3",
    "positionLy": [
      38.972,
      21.631,
      1.125
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-97725",
    "name": "Alshain",
    "distanceLy": 44.68,
    "apparentMagnitude": 3.71,
    "spectralClass": "G8IVvar",
    "colorIndex": 0.855,
    "color": "#ffd7a3",
    "positionLy": [
      21.408,
      4.985,
      -38.896
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-55525",
    "name": "Gliese 428A",
    "distanceLy": 44.73,
    "apparentMagnitude": 7.22,
    "spectralClass": "K7V+...",
    "colorIndex": 1.271,
    "color": "#ffb17b",
    "positionLy": [
      -20.989,
      -39.363,
      3.261
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-116405",
    "name": "Iot Psc",
    "distanceLy": 44.73,
    "apparentMagnitude": 4.13,
    "spectralClass": "F7V",
    "colorIndex": 0.507,
    "color": "#fff2d2",
    "positionLy": [
      44.343,
      4.385,
      -3.889
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-109763",
    "name": "Gliese 853A",
    "distanceLy": 44.96,
    "apparentMagnitude": 5.36,
    "spectralClass": "G1V",
    "colorIndex": 0.614,
    "color": "#ffd7a3",
    "positionLy": [
      24.08,
      -36.202,
      -11.452
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-79297",
    "name": "Gliese 615",
    "distanceLy": 45.29,
    "apparentMagnitude": 7.53,
    "spectralClass": "K0V",
    "colorIndex": 0.815,
    "color": "#ffd7a3",
    "positionLy": [
      -10.856,
      -38.23,
      -21.728
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-97633",
    "name": "Gliese 770",
    "distanceLy": 45.82,
    "apparentMagnitude": 6.22,
    "spectralClass": "K3/K4V",
    "colorIndex": 1.017,
    "color": "#ffb17b",
    "positionLy": [
      20.03,
      -18.594,
      -36.778
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-53565",
    "name": "Chalawan",
    "distanceLy": 45.87,
    "apparentMagnitude": 5.03,
    "spectralClass": "G0V",
    "colorIndex": 0.624,
    "color": "#ffd7a3",
    "positionLy": [
      -33.703,
      29.746,
      9.115
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-25157",
    "name": "Gliese 201",
    "distanceLy": 45.94,
    "apparentMagnitude": 7.93,
    "spectralClass": "K2",
    "colorIndex": 1.104,
    "color": "#ffb17b",
    "positionLy": [
      6.928,
      13.679,
      43.304
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119164",
    "name": "Gliese 684B",
    "distanceLy": 45.95,
    "apparentMagnitude": 8.06,
    "spectralClass": "K3 V",
    "colorIndex": 1.1,
    "color": "#ffb17b",
    "positionLy": [
      -2.36,
      40.525,
      -21.532
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-116361",
    "name": "Errai",
    "distanceLy": 46,
    "apparentMagnitude": 3.21,
    "spectralClass": "K1IV",
    "colorIndex": 1.031,
    "color": "#ffb17b",
    "positionLy": [
      9.811,
      44.927,
      -0.887
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118197",
    "name": "Gliese 127B",
    "distanceLy": 46.03,
    "apparentMagnitude": 6.7,
    "spectralClass": "G7 V",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      26.931,
      -22.305,
      29.929
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-4139",
    "name": "Gliese 42",
    "distanceLy": 46.22,
    "apparentMagnitude": 7.15,
    "spectralClass": "K2V",
    "colorIndex": 0.936,
    "color": "#ffd7a3",
    "positionLy": [
      38.824,
      -23.361,
      9.145
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-61708",
    "name": "Gliese 481",
    "distanceLy": 46.24,
    "apparentMagnitude": 7.91,
    "spectralClass": "K2",
    "colorIndex": 1.109,
    "color": "#ffb17b",
    "positionLy": [
      -43.874,
      12.262,
      -7.955
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-37243",
    "name": "Gliese 282A",
    "distanceLy": 46.35,
    "apparentMagnitude": 7.18,
    "spectralClass": "K2V",
    "colorIndex": 0.891,
    "color": "#ffd7a3",
    "positionLy": [
      -19.547,
      -2.908,
      41.924
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-12810",
    "name": "Tau-1 Eri",
    "distanceLy": 46.38,
    "apparentMagnitude": 4.47,
    "spectralClass": "F5/F6V",
    "colorIndex": 0.481,
    "color": "#fff2d2",
    "positionLy": [
      33.043,
      -14.773,
      29.004
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-14843",
    "name": "Dalim",
    "distanceLy": 46.43,
    "apparentMagnitude": 3.8,
    "spectralClass": "F8V",
    "colorIndex": 0.543,
    "color": "#fff2d2",
    "positionLy": [
      27.168,
      -22.503,
      30.193
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-102091",
    "name": "Eta Cep",
    "distanceLy": 46.53,
    "apparentMagnitude": 3.41,
    "spectralClass": "K0IV",
    "colorIndex": 0.912,
    "color": "#ffd7a3",
    "positionLy": [
      14.498,
      41.017,
      -16.49
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-67274",
    "name": "Gliese 529",
    "distanceLy": 46.64,
    "apparentMagnitude": 8.16,
    "spectralClass": "K4/K5V",
    "colorIndex": 1.257,
    "color": "#ffb17b",
    "positionLy": [
      -38.349,
      -17.555,
      -19.909
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118869",
    "name": "Alp Com",
    "distanceLy": 46.72,
    "apparentMagnitude": 5.17,
    "spectralClass": "F5 V",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -42.486,
      14.07,
      -13.392
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-42319",
    "name": "Pi-1 UMa",
    "distanceLy": 46.82,
    "apparentMagnitude": 5.63,
    "spectralClass": "G1.5Vb",
    "colorIndex": 0.618,
    "color": "#ffd7a3",
    "positionLy": [
      -12.656,
      42.441,
      15.191
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-101668",
    "name": "Gliese 796",
    "distanceLy": 46.91,
    "apparentMagnitude": 6.36,
    "spectralClass": "G8/K0V",
    "colorIndex": 0.719,
    "color": "#ffd7a3",
    "positionLy": [
      27.621,
      -18.91,
      -32.86
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-79191",
    "name": "Sharjah",
    "distanceLy": 46.96,
    "apparentMagnitude": 11.34,
    "spectralClass": "unknown",
    "colorIndex": 1.486,
    "color": "#ffb17b",
    "positionLy": [
      -20.051,
      -15.191,
      -39.649
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-67095",
    "name": "Gliese GJ 1177A",
    "distanceLy": 47.26,
    "apparentMagnitude": 8.13,
    "spectralClass": "K5/M1V+K5",
    "colorIndex": 1.322,
    "color": "#ffb17b",
    "positionLy": [
      -35.567,
      -25.345,
      -18.064
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-44000",
    "name": "Talitha",
    "distanceLy": 47.32,
    "apparentMagnitude": 3.12,
    "spectralClass": "A7IV",
    "colorIndex": 0.223,
    "color": "#c7ddff",
    "positionLy": [
      -22.296,
      35.192,
      22.45
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-78536",
    "name": "Gliese 611A",
    "distanceLy": 47.36,
    "apparentMagnitude": 6.66,
    "spectralClass": "G8V",
    "colorIndex": 0.734,
    "color": "#ffd7a3",
    "positionLy": [
      -17.67,
      29.903,
      -32.19
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-70274",
    "name": "The Boo",
    "distanceLy": 47.39,
    "apparentMagnitude": 4.04,
    "spectralClass": "F7V",
    "colorIndex": 0.497,
    "color": "#fff2d2",
    "positionLy": [
      -23.594,
      37.27,
      -17.331
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-35200",
    "name": "Gliese 269A",
    "distanceLy": 47.6,
    "apparentMagnitude": 6.7,
    "spectralClass": "K2V",
    "colorIndex": 0.975,
    "color": "#ffd7a3",
    "positionLy": [
      -10.773,
      -34.802,
      30.638
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-106354",
    "name": "Gliese 833",
    "distanceLy": 47.68,
    "apparentMagnitude": 7.14,
    "spectralClass": "K2V",
    "colorIndex": 0.879,
    "color": "#ffd7a3",
    "positionLy": [
      24.411,
      -36.977,
      -17.624
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-33729",
    "name": "Gliese 259",
    "distanceLy": 47.77,
    "apparentMagnitude": 6.71,
    "spectralClass": "K1V",
    "colorIndex": 0.882,
    "color": "#ffd7a3",
    "positionLy": [
      -11.341,
      -20.905,
      41.434
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-54790",
    "name": "Gliese 420A",
    "distanceLy": 47.77,
    "apparentMagnitude": 7.68,
    "spectralClass": "K5",
    "colorIndex": 1.043,
    "color": "#ffb17b",
    "positionLy": [
      -13.328,
      45.795,
      2.639
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-76816",
    "name": "Psi Ser",
    "distanceLy": 47.81,
    "apparentMagnitude": 5.86,
    "spectralClass": "G5V",
    "colorIndex": 0.684,
    "color": "#ffd7a3",
    "positionLy": [
      -26.704,
      2.098,
      -39.602
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-78950",
    "name": "Gliese 613",
    "distanceLy": 47.84,
    "apparentMagnitude": 7.11,
    "spectralClass": "K3V",
    "colorIndex": 0.856,
    "color": "#ffd7a3",
    "positionLy": [
      -12.241,
      -39.872,
      -23.443
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-102154",
    "name": "Psi Cap",
    "distanceLy": 47.87,
    "apparentMagnitude": 4.13,
    "spectralClass": "F5V",
    "colorIndex": 0.426,
    "color": "#fff2d2",
    "positionLy": [
      28.7,
      -20.437,
      -32.412
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-30557",
    "name": "Gliese 233A",
    "distanceLy": 48.04,
    "apparentMagnitude": 6.78,
    "spectralClass": "K0",
    "colorIndex": 0.938,
    "color": "#ffd7a3",
    "positionLy": [
      -5.183,
      15.448,
      45.194
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-77934",
    "name": "Gliese 604",
    "distanceLy": 48.05,
    "apparentMagnitude": 8.06,
    "spectralClass": "K5V",
    "colorIndex": 1.118,
    "color": "#ffb17b",
    "positionLy": [
      -17.987,
      -32.539,
      -30.438
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118471",
    "name": "Gliese 269B",
    "distanceLy": 48.18,
    "apparentMagnitude": 7.9,
    "spectralClass": "K4 V",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -10.904,
      -35.227,
      31.014
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-74952",
    "name": "Nu-2 Lup",
    "distanceLy": 48.31,
    "apparentMagnitude": 5.65,
    "spectralClass": "G2V",
    "colorIndex": 0.639,
    "color": "#ffd7a3",
    "positionLy": [
      -20.456,
      -36.08,
      -24.772
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-92725",
    "name": "Gliese 738A",
    "distanceLy": 48.51,
    "apparentMagnitude": 5.2,
    "spectralClass": "G0V",
    "colorIndex": 0.594,
    "color": "#fff2d2",
    "positionLy": [
      10.029,
      26.348,
      -39.471
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-28032",
    "name": "Eta Lep",
    "distanceLy": 48.53,
    "apparentMagnitude": 3.71,
    "spectralClass": "F1V",
    "colorIndex": 0.337,
    "color": "#fff2d2",
    "positionLy": [
      0.738,
      -11.878,
      47.046
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-61952",
    "name": "Gliese 483",
    "distanceLy": 48.54,
    "apparentMagnitude": 7.01,
    "spectralClass": "K3V",
    "colorIndex": 0.936,
    "color": "#ffd7a3",
    "positionLy": [
      -29.484,
      38.121,
      -5.763
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-85769",
    "name": "Rasalhague",
    "distanceLy": 48.59,
    "apparentMagnitude": 2.08,
    "spectralClass": "A5III",
    "colorIndex": 0.155,
    "color": "#c7ddff",
    "positionLy": [
      -5.176,
      10.566,
      -47.14
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-59020",
    "name": "Alchiba",
    "distanceLy": 48.72,
    "apparentMagnitude": 4.02,
    "spectralClass": "F0IV/V",
    "colorIndex": 0.334,
    "color": "#fff2d2",
    "positionLy": [
      -44.219,
      -20.379,
      -1.624
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119253",
    "name": "Gliese 738B",
    "distanceLy": 48.85,
    "apparentMagnitude": 7.7,
    "spectralClass": "K1 V",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      10.101,
      26.537,
      -39.756
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-47457",
    "name": "Gliese 364",
    "distanceLy": 48.97,
    "apparentMagnitude": 4.93,
    "spectralClass": "G0V",
    "colorIndex": 0.534,
    "color": "#fff2d2",
    "positionLy": [
      -36.916,
      -19.85,
      25.315
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-104861",
    "name": "Alderamin",
    "distanceLy": 49.05,
    "apparentMagnitude": 2.45,
    "spectralClass": "A7IV-V",
    "colorIndex": 0.257,
    "color": "#fff2d2",
    "positionLy": [
      17.208,
      43.538,
      -14.622
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-5849",
    "name": "Nu Phe",
    "distanceLy": 49.3,
    "apparentMagnitude": 4.97,
    "spectralClass": "F8V",
    "colorIndex": 0.571,
    "color": "#fff2d2",
    "positionLy": [
      32.693,
      -35.181,
      11.127
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-3575",
    "name": "Gliese GJ 1021",
    "distanceLy": 49.44,
    "apparentMagnitude": 5.8,
    "spectralClass": "G5IV",
    "colorIndex": 0.635,
    "color": "#ffd7a3",
    "positionLy": [
      32.705,
      -36.481,
      6.618
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-27367",
    "name": "Gliese GJ 1085",
    "distanceLy": 49.5,
    "apparentMagnitude": 5.97,
    "spectralClass": "G4V",
    "colorIndex": 0.639,
    "color": "#ffd7a3",
    "positionLy": [
      2.459,
      -3.535,
      49.313
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-37745",
    "name": "Gliese 288A",
    "distanceLy": 49.61,
    "apparentMagnitude": 5.36,
    "spectralClass": "G0V",
    "colorIndex": 0.589,
    "color": "#fff2d2",
    "positionLy": [
      -18.247,
      -27.864,
      36.765
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-28882",
    "name": "Gliese 227",
    "distanceLy": 49.81,
    "apparentMagnitude": 6.76,
    "spectralClass": "K0",
    "colorIndex": 0.814,
    "color": "#ffd7a3",
    "positionLy": [
      -1.397,
      13.346,
      47.968
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-77121",
    "name": "Gliese 599A",
    "distanceLy": 50.08,
    "apparentMagnitude": 6.01,
    "spectralClass": "G6IV",
    "colorIndex": 0.715,
    "color": "#ffd7a3",
    "positionLy": [
      -21.591,
      -30.773,
      -33.085
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118231",
    "name": "Gliese GJ 3233",
    "distanceLy": 50.18,
    "apparentMagnitude": 7.28,
    "spectralClass": "G5",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      23.731,
      30.936,
      31.585
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-15880",
    "name": "Gliese 141",
    "distanceLy": 50.2,
    "apparentMagnitude": 7.86,
    "spectralClass": "K5V",
    "colorIndex": 1.153,
    "color": "#ffb17b",
    "positionLy": [
      31.285,
      -4.693,
      38.979
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-2935",
    "name": "Gliese 25A",
    "distanceLy": 50.23,
    "apparentMagnitude": 5.57,
    "spectralClass": "K1V+...",
    "colorIndex": 0.715,
    "color": "#ffd7a3",
    "positionLy": [
      45.008,
      -21.044,
      7.4
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-24759",
    "name": "Gliese 200A",
    "distanceLy": 50.39,
    "apparentMagnitude": 7.77,
    "spectralClass": "K3V",
    "colorIndex": 1.051,
    "color": "#ffb17b",
    "positionLy": [
      8.908,
      -2.702,
      49.522
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-65147",
    "name": "Gliese GJ 3781A",
    "distanceLy": 50.39,
    "apparentMagnitude": 7.06,
    "spectralClass": "G5",
    "colorIndex": 0.78,
    "color": "#ffd7a3",
    "positionLy": [
      -47.015,
      2.394,
      -17.966
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-86529",
    "name": "Cervantes",
    "distanceLy": 50.59,
    "apparentMagnitude": 5.12,
    "spectralClass": "G5V",
    "colorIndex": 0.694,
    "color": "#ffd7a3",
    "positionLy": [
      -2.161,
      -39.775,
      -31.187
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-95207",
    "name": "Del Aql",
    "distanceLy": 50.64,
    "apparentMagnitude": 3.36,
    "spectralClass": "F0IV",
    "colorIndex": 0.319,
    "color": "#fff2d2",
    "positionLy": [
      18.428,
      2.751,
      -47.084
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-18465",
    "name": "Gliese 157A",
    "distanceLy": 50.65,
    "apparentMagnitude": 8.07,
    "spectralClass": "K4V",
    "colorIndex": 1.115,
    "color": "#ffb17b",
    "positionLy": [
      25.799,
      -1.025,
      43.57
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118001",
    "name": "Gliese 25B",
    "distanceLy": 50.66,
    "apparentMagnitude": 6.4,
    "spectralClass": "G8 V",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      45.396,
      -21.225,
      7.464
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-36744",
    "name": "Castor",
    "distanceLy": 50.87,
    "apparentMagnitude": 1.58,
    "spectralClass": "A2Vm",
    "colorIndex": 0.034,
    "color": "#c7ddff",
    "positionLy": [
      -17.325,
      26.871,
      39.563
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-112997",
    "name": "Helvetios",
    "distanceLy": 50.91,
    "apparentMagnitude": 5.45,
    "spectralClass": "G5V",
    "colorIndex": 0.666,
    "color": "#ffd7a3",
    "positionLy": [
      45.836,
      18.051,
      -12.827
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-67063",
    "name": "Tau Boo",
    "distanceLy": 50.94,
    "apparentMagnitude": 4.5,
    "spectralClass": "F7V",
    "colorIndex": 0.508,
    "color": "#fff2d2",
    "positionLy": [
      -43.366,
      15.281,
      -21.921
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-66553",
    "name": "Gliese GJ 1175",
    "distanceLy": 51.06,
    "apparentMagnitude": 6.92,
    "spectralClass": "K1V",
    "colorIndex": 0.855,
    "color": "#ffd7a3",
    "positionLy": [
      -38.069,
      -28.893,
      -17.968
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-3899",
    "name": "Phi-2 Cet",
    "distanceLy": 51.38,
    "apparentMagnitude": 5.17,
    "spectralClass": "F7IV-V",
    "colorIndex": 0.514,
    "color": "#fff2d2",
    "positionLy": [
      49.293,
      -9.49,
      10.956
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-95024",
    "name": "Gliese 758",
    "distanceLy": 51.4,
    "apparentMagnitude": 6.37,
    "spectralClass": "G8V",
    "colorIndex": 0.804,
    "color": "#ffd7a3",
    "positionLy": [
      15.334,
      28.163,
      -40.174
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-98478",
    "name": "Gliese 778",
    "distanceLy": 51.42,
    "apparentMagnitude": 7.28,
    "spectralClass": "K1V",
    "colorIndex": 0.815,
    "color": "#ffd7a3",
    "positionLy": [
      24.293,
      20.372,
      -40.482
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118485",
    "name": "Castor B",
    "distanceLy": 51.55,
    "apparentMagnitude": 2.85,
    "spectralClass": "A m",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -17.559,
      27.234,
      40.092
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-3580",
    "name": "Gliese 32A",
    "distanceLy": 51.59,
    "apparentMagnitude": 7.89,
    "spectralClass": "K5V comp SB",
    "colorIndex": 1.251,
    "color": "#ffb17b",
    "positionLy": [
      37.629,
      -34.46,
      7.622
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-71058",
    "name": "Sig Boo",
    "distanceLy": 51.64,
    "apparentMagnitude": 4.47,
    "spectralClass": "F3Vwvar",
    "colorIndex": 0.364,
    "color": "#fff2d2",
    "positionLy": [
      -35.006,
      25.621,
      -28.015
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-98454",
    "name": "Gliese 777A",
    "distanceLy": 51.72,
    "apparentMagnitude": 5.73,
    "spectralClass": "G6IV+...",
    "colorIndex": 0.749,
    "color": "#ffd7a3",
    "positionLy": [
      23.03,
      25.779,
      -38.471
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118351",
    "name": "Gliese 188B",
    "distanceLy": 51.75,
    "apparentMagnitude": 5.7,
    "spectralClass": "G4 V",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      11.145,
      16.548,
      47.754
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-77524",
    "name": "Chi Her",
    "distanceLy": 51.84,
    "apparentMagnitude": 4.6,
    "spectralClass": "F9V",
    "colorIndex": 0.563,
    "color": "#fff2d2",
    "positionLy": [
      -20.172,
      34.987,
      -32.494
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-107306",
    "name": "Gliese 838",
    "distanceLy": 52.17,
    "apparentMagnitude": 5.57,
    "spectralClass": "G2V",
    "colorIndex": 0.601,
    "color": "#ffd7a3",
    "positionLy": [
      29.691,
      -38.341,
      -19.233
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-17397",
    "name": "Gliese 152",
    "distanceLy": 52.28,
    "apparentMagnitude": 6.99,
    "spectralClass": "K1V",
    "colorIndex": 0.87,
    "color": "#ffd7a3",
    "positionLy": [
      22.925,
      -32.388,
      34.036
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-110649",
    "name": "Gliese 862",
    "distanceLy": 52.39,
    "apparentMagnitude": 7.65,
    "spectralClass": "K4V",
    "colorIndex": 1.08,
    "color": "#ffb17b",
    "positionLy": [
      41.85,
      -26.208,
      -17.495
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-44120",
    "name": "Gliese 332A",
    "distanceLy": 52.41,
    "apparentMagnitude": 3.96,
    "spectralClass": "F5V",
    "colorIndex": 0.463,
    "color": "#fff2d2",
    "positionLy": [
      -27.712,
      34.923,
      27.558
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-65150",
    "name": "Gliese GJ 3782B",
    "distanceLy": 52.65,
    "apparentMagnitude": 7.35,
    "spectralClass": "G5",
    "colorIndex": 0.869,
    "color": "#ffd7a3",
    "positionLy": [
      -49.122,
      2.503,
      -18.778
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-61098",
    "name": "Gliese 472",
    "distanceLy": 52.76,
    "apparentMagnitude": 7.13,
    "spectralClass": "K0V",
    "colorIndex": 0.836,
    "color": "#ffd7a3",
    "positionLy": [
      -18.913,
      -49.174,
      -2.786
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-38795",
    "name": "Gliese 294A",
    "distanceLy": 52.85,
    "apparentMagnitude": 5.59,
    "spectralClass": "G2V...",
    "colorIndex": 0.573,
    "color": "#fff2d2",
    "positionLy": [
      -12.872,
      -45.911,
      22.802
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-50809",
    "name": "Gliese 391",
    "distanceLy": 52.91,
    "apparentMagnitude": 3.99,
    "spectralClass": "F2IV",
    "colorIndex": 0.369,
    "color": "#fff2d2",
    "positionLy": [
      -13.308,
      -50.871,
      5.898
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-18727",
    "name": "Gliese 156.2",
    "distanceLy": 53,
    "apparentMagnitude": 8.2,
    "spectralClass": "K4V",
    "colorIndex": 1.132,
    "color": "#ffb17b",
    "positionLy": [
      6.276,
      51.461,
      11.017
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-112090",
    "name": "Xi Peg",
    "distanceLy": 53.15,
    "apparentMagnitude": 4.2,
    "spectralClass": "F7V",
    "colorIndex": 0.502,
    "color": "#fff2d2",
    "positionLy": [
      49.324,
      11.208,
      -16.338
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-85407",
    "name": "Gliese 678A",
    "distanceLy": 53.3,
    "apparentMagnitude": 5.31,
    "spectralClass": "G8IV-V",
    "colorIndex": 0.715,
    "color": "#ffd7a3",
    "positionLy": [
      -6.864,
      -0.989,
      -52.847
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-90727",
    "name": "Gliese 719",
    "distanceLy": 53.34,
    "apparentMagnitude": 8.2,
    "spectralClass": "K7Vvar",
    "colorIndex": 1.265,
    "color": "#ffb17b",
    "positionLy": [
      4.874,
      41.868,
      -32.681
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-104700",
    "name": "Gliese 824",
    "distanceLy": 53.45,
    "apparentMagnitude": 7.88,
    "spectralClass": "K2",
    "colorIndex": 1.02,
    "color": "#ffb17b",
    "positionLy": [
      39.88,
      8.724,
      -34.502
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-28371",
    "name": "Gliese 225.2A",
    "distanceLy": 53.47,
    "apparentMagnitude": 7.85,
    "spectralClass": "K3/K4V",
    "colorIndex": 1.137,
    "color": "#ffb17b",
    "positionLy": [
      -0.065,
      -27.563,
      45.82
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118586",
    "name": "Gliese 332B",
    "distanceLy": 53.59,
    "apparentMagnitude": 6.18,
    "spectralClass": "G5 V",
    "colorIndex": 0.65,
    "color": "#ffd7a3",
    "positionLy": [
      -28.336,
      35.709,
      28.177
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119159",
    "name": "Gliese 678B",
    "distanceLy": 53.64,
    "apparentMagnitude": 6.2,
    "spectralClass": "G8 IV-V",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -6.909,
      -0.997,
      -53.176
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-71169",
    "name": "Gliese GJ 3860",
    "distanceLy": 53.82,
    "apparentMagnitude": 7.48,
    "spectralClass": "K0",
    "colorIndex": 0.973,
    "color": "#ffd7a3",
    "positionLy": [
      -41.222,
      9.111,
      -33.383
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-33977",
    "name": "Gliese 264.1A",
    "distanceLy": 53.87,
    "apparentMagnitude": 5.56,
    "spectralClass": "G3V...",
    "colorIndex": 0.624,
    "color": "#ffd7a3",
    "positionLy": [
      -10.744,
      -37.154,
      37.496
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-71682",
    "name": "Alp Cir",
    "distanceLy": 54.04,
    "apparentMagnitude": 3.18,
    "spectralClass": "F1Vp",
    "colorIndex": 0.256,
    "color": "#fff2d2",
    "positionLy": [
      -17.351,
      -48.971,
      -14.886
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118505",
    "name": "Gliese 291B",
    "distanceLy": 54.38,
    "apparentMagnitude": 6.17,
    "spectralClass": "G4 V",
    "colorIndex": 0.65,
    "color": "#ffd7a3",
    "positionLy": [
      -24.734,
      -13.059,
      46.633
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-32394",
    "name": "Psi-5 Aur",
    "distanceLy": 54.52,
    "apparentMagnitude": 5.24,
    "spectralClass": "G0V",
    "colorIndex": 0.575,
    "color": "#fff2d2",
    "positionLy": [
      -7.999,
      37.584,
      38.68
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-29495",
    "name": "Gliese GJ 3389",
    "distanceLy": 54.54,
    "apparentMagnitude": 6.37,
    "spectralClass": "G5V",
    "colorIndex": 0.713,
    "color": "#ffd7a3",
    "positionLy": [
      -2.992,
      -22.064,
      49.79
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-101626",
    "name": "Gliese 795A",
    "distanceLy": 54.54,
    "apparentMagnitude": 7.88,
    "spectralClass": "K5V",
    "colorIndex": 1.241,
    "color": "#ffb17b",
    "positionLy": [
      34.858,
      4.727,
      -41.679
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-39046",
    "name": "Gliese 295",
    "distanceLy": 54.69,
    "apparentMagnitude": 6.97,
    "spectralClass": "G8V",
    "colorIndex": 0.716,
    "color": "#ffd7a3",
    "positionLy": [
      -23.963,
      26.69,
      41.282
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-744",
    "name": "Caph",
    "distanceLy": 54.74,
    "apparentMagnitude": 2.28,
    "spectralClass": "F2III-IV",
    "colorIndex": 0.38,
    "color": "#fff2d2",
    "positionLy": [
      28.049,
      46.997,
      1.124
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-16030",
    "name": "Gliese 143",
    "distanceLy": 54.82,
    "apparentMagnitude": 8.08,
    "spectralClass": "K5V",
    "colorIndex": 1.13,
    "color": "#ffb17b",
    "positionLy": [
      15.144,
      -49.058,
      19.208
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-6365",
    "name": "Gliese 56.5",
    "distanceLy": 54.83,
    "apparentMagnitude": 7.17,
    "spectralClass": "K0",
    "colorIndex": 0.826,
    "color": "#ffd7a3",
    "positionLy": [
      11.805,
      53.356,
      4.413
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-91996",
    "name": "Gliese 727",
    "distanceLy": 54.99,
    "apparentMagnitude": 7.97,
    "spectralClass": "K0",
    "colorIndex": 1.07,
    "color": "#ffb17b",
    "positionLy": [
      11.345,
      10.253,
      -52.823
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-35043",
    "name": "Gliese GJ 1095",
    "distanceLy": 55.09,
    "apparentMagnitude": 5.54,
    "spectralClass": "G0V",
    "colorIndex": 0.576,
    "color": "#fff2d2",
    "positionLy": [
      -12.153,
      40.452,
      35.377
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-62328",
    "name": "Gliese 486.1",
    "distanceLy": 55.22,
    "apparentMagnitude": 6.29,
    "spectralClass": "G7V",
    "colorIndex": 0.703,
    "color": "#ffd7a3",
    "positionLy": [
      -48.984,
      23.199,
      -10.587
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-115720",
    "name": "Gliese 895.4",
    "distanceLy": 55.22,
    "apparentMagnitude": 6.76,
    "spectralClass": "K2V",
    "colorIndex": 0.839,
    "color": "#ffd7a3",
    "positionLy": [
      28.085,
      47.418,
      -3.527
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-93563",
    "name": "Gliese 744",
    "distanceLy": 55.3,
    "apparentMagnitude": 6.15,
    "spectralClass": "G8V",
    "colorIndex": 0.705,
    "color": "#ffd7a3",
    "positionLy": [
      12.568,
      -33.903,
      -41.843
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-95696",
    "name": "Gliese 762.1",
    "distanceLy": 55.32,
    "apparentMagnitude": 6.6,
    "spectralClass": "K1V",
    "colorIndex": 0.859,
    "color": "#ffd7a3",
    "positionLy": [
      11.165,
      47.21,
      -26.583
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-68463",
    "name": "Gliese 538",
    "distanceLy": 55.39,
    "apparentMagnitude": 6.27,
    "spectralClass": "G8V",
    "colorIndex": 0.733,
    "color": "#ffd7a3",
    "positionLy": [
      -46.698,
      10.367,
      -27.932
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-72461",
    "name": "Gliese 565",
    "distanceLy": 55.53,
    "apparentMagnitude": 7.81,
    "spectralClass": "K3V",
    "colorIndex": 1.036,
    "color": "#ffb17b",
    "positionLy": [
      -37.064,
      -22.856,
      -34.464
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-113357",
    "name": "Gliese 886",
    "distanceLy": 55.56,
    "apparentMagnitude": 7.48,
    "spectralClass": "K4V",
    "colorIndex": 0.943,
    "color": "#ffd7a3",
    "positionLy": [
      53.662,
      -3.729,
      -13.913
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-67528",
    "name": "Gliese 531",
    "distanceLy": 55.71,
    "apparentMagnitude": 7.37,
    "spectralClass": "K1V",
    "colorIndex": 0.891,
    "color": "#ffd7a3",
    "positionLy": [
      -30.962,
      -43.243,
      -16.566
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118628",
    "name": "Gliese 348B",
    "distanceLy": 55.77,
    "apparentMagnitude": 7.18,
    "spectralClass": "K0",
    "colorIndex": 0.87,
    "color": "#ffd7a3",
    "positionLy": [
      -44.072,
      -2.676,
      34.077
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-12620",
    "name": "Iot Hor",
    "distanceLy": 55.99,
    "apparentMagnitude": 5.4,
    "spectralClass": "G3IV",
    "colorIndex": 0.561,
    "color": "#fff2d2",
    "positionLy": [
      26.854,
      -43.392,
      23.049
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-38671",
    "name": "Gliese 290",
    "distanceLy": 56.07,
    "apparentMagnitude": 6.55,
    "spectralClass": "G8V",
    "colorIndex": 0.719,
    "color": "#ffd7a3",
    "positionLy": [
      -4.607,
      55.262,
      8.286
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-70096",
    "name": "Gliese 547",
    "distanceLy": 56.07,
    "apparentMagnitude": 6.25,
    "spectralClass": "G1V",
    "colorIndex": 0.639,
    "color": "#ffd7a3",
    "positionLy": [
      -45.457,
      1.215,
      -32.801
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-78223",
    "name": "Rho CrB",
    "distanceLy": 56.21,
    "apparentMagnitude": 5.39,
    "spectralClass": "G2V",
    "colorIndex": 0.612,
    "color": "#ffd7a3",
    "positionLy": [
      -23.306,
      30.866,
      -40.795
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-82337",
    "name": "Gliese 641",
    "distanceLy": 56.26,
    "apparentMagnitude": 6.65,
    "spectralClass": "G8V",
    "colorIndex": 0.749,
    "color": "#ffd7a3",
    "positionLy": [
      -16.22,
      -0.026,
      -53.876
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-45486",
    "name": "Gliese 340A",
    "distanceLy": 56.31,
    "apparentMagnitude": 7.2,
    "spectralClass": "K3V",
    "colorIndex": 0.992,
    "color": "#ffd7a3",
    "positionLy": [
      -37.593,
      26.922,
      32.139
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119014",
    "name": "Gliese 580B",
    "distanceLy": 56.43,
    "apparentMagnitude": 7.35,
    "spectralClass": "unknown",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -37.41,
      -1.331,
      -42.224
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-53330",
    "name": "Gliese GJ 3633",
    "distanceLy": 56.44,
    "apparentMagnitude": 7.37,
    "spectralClass": "K0",
    "colorIndex": 0.92,
    "color": "#ffd7a3",
    "positionLy": [
      -53.836,
      7.258,
      15.307
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-93530",
    "name": "Gam CrA",
    "distanceLy": 56.44,
    "apparentMagnitude": 4.23,
    "spectralClass": "F7IV-V",
    "colorIndex": 0.523,
    "color": "#fff2d2",
    "positionLy": [
      12.869,
      -34.014,
      -43.157
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-39231",
    "name": "Gliese GJ 3476",
    "distanceLy": 56.47,
    "apparentMagnitude": 7.18,
    "spectralClass": "K1V",
    "colorIndex": 0.872,
    "color": "#ffd7a3",
    "positionLy": [
      -11.692,
      -51.594,
      19.747
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-3198",
    "name": "Gliese 28",
    "distanceLy": 56.52,
    "apparentMagnitude": 7.36,
    "spectralClass": "K2V",
    "colorIndex": 0.937,
    "color": "#ffd7a3",
    "positionLy": [
      42.491,
      36.468,
      7.649
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-46376",
    "name": "Tau-1 Hya",
    "distanceLy": 56.54,
    "apparentMagnitude": 4.59,
    "spectralClass": "F6V",
    "colorIndex": 0.411,
    "color": "#fff2d2",
    "positionLy": [
      -44.673,
      -2.731,
      34.543
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-84636",
    "name": "Xi Oph",
    "distanceLy": 56.6,
    "apparentMagnitude": 4.39,
    "spectralClass": "F2/F3V",
    "colorIndex": 0.394,
    "color": "#fff2d2",
    "positionLy": [
      -8.941,
      -20.389,
      -52.042
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-43602",
    "name": "Gliese 327",
    "distanceLy": 56.7,
    "apparentMagnitude": 6.01,
    "spectralClass": "G3V",
    "colorIndex": 0.661,
    "color": "#ffd7a3",
    "positionLy": [
      -38.911,
      -5.37,
      40.896
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-15760",
    "name": "Gliese GJ 3222A",
    "distanceLy": 56.82,
    "apparentMagnitude": 6.9,
    "spectralClass": "K0V",
    "colorIndex": 0.84,
    "color": "#ffd7a3",
    "positionLy": [
      27.423,
      -36.582,
      33.74
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-69304",
    "name": "Gliese GJ 3833",
    "distanceLy": 56.84,
    "apparentMagnitude": 8.03,
    "spectralClass": "K5",
    "colorIndex": 1.064,
    "color": "#ffb17b",
    "positionLy": [
      -40.965,
      28.607,
      -27.101
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-7963",
    "name": "Gliese GJ 3109",
    "distanceLy": 56.86,
    "apparentMagnitude": 5.52,
    "spectralClass": "F8V",
    "colorIndex": 0.551,
    "color": "#fff2d2",
    "positionLy": [
      30.323,
      -45.85,
      14.543
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-76593",
    "name": "Gliese 594",
    "distanceLy": 56.87,
    "apparentMagnitude": 4.64,
    "spectralClass": "F5IV-V",
    "colorIndex": 0.413,
    "color": "#fff2d2",
    "positionLy": [
      -23.029,
      -39.975,
      -33.255
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-31925",
    "name": "Gliese 241",
    "distanceLy": 56.9,
    "apparentMagnitude": 8.08,
    "spectralClass": "K2",
    "colorIndex": 1.021,
    "color": "#ffb17b",
    "positionLy": [
      -9.311,
      23.105,
      51.157
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118511",
    "name": "Gliese 293.1A",
    "distanceLy": 56.96,
    "apparentMagnitude": 8.06,
    "spectralClass": "K5 V",
    "colorIndex": 1.04,
    "color": "#ffb17b",
    "positionLy": [
      -28.036,
      -0.808,
      49.576
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-57334",
    "name": "Gliese 446",
    "distanceLy": 56.99,
    "apparentMagnitude": 6.48,
    "spectralClass": "G5V",
    "colorIndex": 0.681,
    "color": "#ffd7a3",
    "positionLy": [
      -49.136,
      -28.742,
      2.734
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-1291",
    "name": "Gliese GJ 3021",
    "distanceLy": 57.07,
    "apparentMagnitude": 6.59,
    "spectralClass": "G6V",
    "colorIndex": 0.749,
    "color": "#ffd7a3",
    "positionLy": [
      10.031,
      -56.177,
      0.711
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118611",
    "name": "Gliese 340B",
    "distanceLy": 57.17,
    "apparentMagnitude": 8.1,
    "spectralClass": "K3 V",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -38.168,
      27.334,
      32.627
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-88419",
    "name": "Gliese 702.1",
    "distanceLy": 57.25,
    "apparentMagnitude": 5.94,
    "spectralClass": "G3V",
    "colorIndex": 0.615,
    "color": "#ffd7a3",
    "positionLy": [
      1.292,
      -33.667,
      -46.287
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-99696",
    "name": "Gliese 788",
    "distanceLy": 57.3,
    "apparentMagnitude": 5.91,
    "spectralClass": "G3V",
    "colorIndex": 0.602,
    "color": "#ffd7a3",
    "positionLy": [
      12.719,
      52.688,
      -18.589
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-103904",
    "name": "Gliese 819A",
    "distanceLy": 57.32,
    "apparentMagnitude": 7.12,
    "spectralClass": "K1V",
    "colorIndex": 0.901,
    "color": "#ffd7a3",
    "positionLy": [
      40.552,
      -13.792,
      -38.09
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-88765",
    "name": "Iot Pav",
    "distanceLy": 57.44,
    "apparentMagnitude": 5.47,
    "spectralClass": "G0V",
    "colorIndex": 0.592,
    "color": "#fff2d2",
    "positionLy": [
      1.227,
      -50.72,
      -26.938
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-17609",
    "name": "Tau-6 Eri",
    "distanceLy": 57.49,
    "apparentMagnitude": 4.22,
    "spectralClass": "F3/F5V",
    "colorIndex": 0.434,
    "color": "#fff2d2",
    "positionLy": [
      28.992,
      -22.695,
      44.157
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-95784",
    "name": "Gliese GJ 1240",
    "distanceLy": 57.49,
    "apparentMagnitude": 7.53,
    "spectralClass": "K2V",
    "colorIndex": 0.922,
    "color": "#ffd7a3",
    "positionLy": [
      22.055,
      -11.241,
      -51.889
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-74309",
    "name": "Gliese 580A",
    "distanceLy": 57.64,
    "apparentMagnitude": 6.58,
    "spectralClass": "K0V",
    "colorIndex": 0.763,
    "color": "#ffd7a3",
    "positionLy": [
      -38.207,
      -1.359,
      -43.127
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-98643",
    "name": "Gliese 776",
    "distanceLy": 57.82,
    "apparentMagnitude": 6.07,
    "spectralClass": "G2V",
    "colorIndex": 0.648,
    "color": "#ffd7a3",
    "positionLy": [
      11.61,
      -53.348,
      -19.031
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-22398",
    "name": "Gliese GJ 3317",
    "distanceLy": 57.88,
    "apparentMagnitude": 7.49,
    "spectralClass": "K2V",
    "colorIndex": 0.901,
    "color": "#ffd7a3",
    "positionLy": [
      14.264,
      -33.288,
      45.151
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-25357",
    "name": "Gliese GJ 1079",
    "distanceLy": 57.96,
    "apparentMagnitude": 7.7,
    "spectralClass": "K2/K3V",
    "colorIndex": 0.946,
    "color": "#ffd7a3",
    "positionLy": [
      7.174,
      -31.147,
      48.354
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-46710",
    "name": "Gliese 354.1A",
    "distanceLy": 58.03,
    "apparentMagnitude": 7.05,
    "spectralClass": "K0",
    "colorIndex": 0.779,
    "color": "#ffd7a3",
    "positionLy": [
      -41.4,
      26.337,
      30.991
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-82752",
    "name": "Gliese 649.1C",
    "distanceLy": 58.06,
    "apparentMagnitude": 7.93,
    "spectralClass": "K0",
    "colorIndex": 1.004,
    "color": "#ffb17b",
    "positionLy": [
      -10.558,
      42.708,
      -37.881
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-38820",
    "name": "Gliese 293.1B",
    "distanceLy": 58.1,
    "apparentMagnitude": 8.05,
    "spectralClass": "K5V",
    "colorIndex": 1.065,
    "color": "#ffb17b",
    "positionLy": [
      -28.597,
      -0.826,
      50.564
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-64037",
    "name": "Diadem",
    "distanceLy": 58.14,
    "apparentMagnitude": 4.32,
    "spectralClass": "F5V",
    "colorIndex": 0.455,
    "color": "#fff2d2",
    "positionLy": [
      -52.873,
      17.511,
      -16.668
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-83284",
    "name": "Gliese 652",
    "distanceLy": 58.18,
    "apparentMagnitude": 6.59,
    "spectralClass": "K1V",
    "colorIndex": 0.814,
    "color": "#ffd7a3",
    "positionLy": [
      -12.259,
      -27.835,
      -49.597
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-8989",
    "name": "Chi Eri",
    "distanceLy": 58.22,
    "apparentMagnitude": 3.69,
    "spectralClass": "G5IV",
    "colorIndex": 0.844,
    "color": "#ffd7a3",
    "positionLy": [
      31.627,
      -45.633,
      17.523
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-75083",
    "name": "Eta CrB",
    "distanceLy": 58.26,
    "apparentMagnitude": 4.99,
    "spectralClass": "G2V",
    "colorIndex": 0.577,
    "color": "#fff2d2",
    "positionLy": [
      -31.796,
      29.384,
      -38.988
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-32353",
    "name": "Gliese 240.1",
    "distanceLy": 58.29,
    "apparentMagnitude": 5.44,
    "spectralClass": "F8V",
    "colorIndex": 0.525,
    "color": "#fff2d2",
    "positionLy": [
      -2.116,
      57.33,
      10.344
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-22854",
    "name": "Gliese GJ 2037",
    "distanceLy": 58.34,
    "apparentMagnitude": 8.13,
    "spectralClass": "K3/K4V",
    "colorIndex": 1.072,
    "color": "#ffb17b",
    "positionLy": [
      14.187,
      -27.893,
      49.232
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-107007",
    "name": "Gliese 836.7",
    "distanceLy": 58.34,
    "apparentMagnitude": 5.96,
    "spectralClass": "G0V",
    "colorIndex": 0.587,
    "color": "#fff2d2",
    "positionLy": [
      46.836,
      14.874,
      -31.436
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119259",
    "name": "Gam CrA",
    "distanceLy": 58.36,
    "apparentMagnitude": 5,
    "spectralClass": "F8 V",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      13.304,
      -35.167,
      -44.618
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-54712",
    "name": "Zosma",
    "distanceLy": 58.43,
    "apparentMagnitude": 2.56,
    "spectralClass": "A4V",
    "colorIndex": 0.128,
    "color": "#c7ddff",
    "positionLy": [
      -53.627,
      20.485,
      10.884
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-38313",
    "name": "Gliese 292A",
    "distanceLy": 58.52,
    "apparentMagnitude": 5.01,
    "spectralClass": "F3/F5V",
    "colorIndex": 0.47,
    "color": "#fff2d2",
    "positionLy": [
      -22.636,
      -33.322,
      42.456
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-29452",
    "name": "Gliese 230",
    "distanceLy": 58.55,
    "apparentMagnitude": 6.43,
    "spectralClass": "G8V",
    "colorIndex": 0.663,
    "color": "#ffd7a3",
    "positionLy": [
      -3.314,
      10.797,
      57.446
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-55681",
    "name": "Gliese 429B",
    "distanceLy": 58.57,
    "apparentMagnitude": 7.58,
    "spectralClass": "K2V",
    "colorIndex": 1.002,
    "color": "#ffb17b",
    "positionLy": [
      -57.872,
      3.072,
      8.45
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-45252",
    "name": "Gliese 339A",
    "distanceLy": 58.58,
    "apparentMagnitude": 7.91,
    "spectralClass": "K0",
    "colorIndex": 1.035,
    "color": "#ffb17b",
    "positionLy": [
      -43.891,
      4.538,
      38.527
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-21429",
    "name": "Gliese 171.2A",
    "distanceLy": 58.6,
    "apparentMagnitude": 8.1,
    "spectralClass": "K2",
    "colorIndex": 1.104,
    "color": "#ffb17b",
    "positionLy": [
      18.518,
      26.724,
      48.752
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-104972",
    "name": "Gliese 825.4A",
    "distanceLy": 58.61,
    "apparentMagnitude": 6.56,
    "spectralClass": "G5V",
    "colorIndex": 0.737,
    "color": "#ffd7a3",
    "positionLy": [
      40.195,
      -26.016,
      -33.8
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-8884",
    "name": "Sheratan",
    "distanceLy": 58.66,
    "apparentMagnitude": 2.64,
    "spectralClass": "A5V...",
    "colorIndex": 0.165,
    "color": "#c7ddff",
    "positionLy": [
      48.117,
      20.839,
      26.299
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-32276",
    "name": "Alzirr",
    "distanceLy": 58.7,
    "apparentMagnitude": 3.35,
    "spectralClass": "F5IV",
    "colorIndex": 0.443,
    "color": "#fff2d2",
    "positionLy": [
      -11.235,
      13.101,
      56.11
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-64904",
    "name": "Iot Cen",
    "distanceLy": 58.78,
    "apparentMagnitude": 2.75,
    "spectralClass": "A2V",
    "colorIndex": 0.068,
    "color": "#c7ddff",
    "positionLy": [
      -44.235,
      -35.137,
      -16.231
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-68714",
    "name": "Menkent",
    "distanceLy": 58.82,
    "apparentMagnitude": 2.06,
    "spectralClass": "K0IIIb",
    "colorIndex": 1.011,
    "color": "#ffb17b",
    "positionLy": [
      -40.309,
      -34.88,
      -24.867
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-69742",
    "name": "Gliese 542.1A",
    "distanceLy": 58.82,
    "apparentMagnitude": 5.87,
    "spectralClass": "F7Vw",
    "colorIndex": 0.518,
    "color": "#fff2d2",
    "positionLy": [
      -43.504,
      -25.614,
      -30.184
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118472",
    "name": "Gliese 271B",
    "distanceLy": 58.82,
    "apparentMagnitude": 8.2,
    "spectralClass": "K3 V",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -18.682,
      22.02,
      51.244
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-36263",
    "name": "Rho Gem",
    "distanceLy": 58.86,
    "apparentMagnitude": 4.16,
    "spectralClass": "F0V...",
    "colorIndex": 0.32,
    "color": "#fff2d2",
    "positionLy": [
      -18.968,
      31.004,
      46.3
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-42380",
    "name": "Gliese 315",
    "distanceLy": 59.16,
    "apparentMagnitude": 7.61,
    "spectralClass": "K1V",
    "colorIndex": 0.832,
    "color": "#ffd7a3",
    "positionLy": [
      -37.232,
      11.818,
      44.431
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-72341",
    "name": "Gliese 564",
    "distanceLy": 59.27,
    "apparentMagnitude": 5.86,
    "spectralClass": "G2V",
    "colorIndex": 0.576,
    "color": "#fff2d2",
    "positionLy": [
      -39.905,
      24.023,
      -36.65
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-64378",
    "name": "Gliese 503A",
    "distanceLy": 59.36,
    "apparentMagnitude": 4.9,
    "spectralClass": "F7IV",
    "colorIndex": 0.489,
    "color": "#fff2d2",
    "positionLy": [
      -28.892,
      -50.931,
      -9.702
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-47556",
    "name": "Gliese 365",
    "distanceLy": 59.42,
    "apparentMagnitude": 8.13,
    "spectralClass": "K5V",
    "colorIndex": 1.133,
    "color": "#ffb17b",
    "positionLy": [
      -36.147,
      40.29,
      24.513
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-1931",
    "name": "Gliese 18",
    "distanceLy": 59.44,
    "apparentMagnitude": 7.92,
    "spectralClass": "K2V",
    "colorIndex": 0.94,
    "color": "#ffd7a3",
    "positionLy": [
      52.65,
      -27.011,
      5.634
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-19871",
    "name": "Eps Ret",
    "distanceLy": 59.48,
    "apparentMagnitude": 4.44,
    "spectralClass": "K2IV",
    "colorIndex": 1.078,
    "color": "#ffb17b",
    "positionLy": [
      13.255,
      -51.15,
      27.323
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-40728",
    "name": "Chi Cnc",
    "distanceLy": 59.59,
    "apparentMagnitude": 5.13,
    "spectralClass": "F6V",
    "colorIndex": 0.487,
    "color": "#fff2d2",
    "positionLy": [
      -30.409,
      27.257,
      43.403
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-71731",
    "name": "Mu Vir",
    "distanceLy": 59.59,
    "apparentMagnitude": 3.87,
    "spectralClass": "F2III",
    "colorIndex": 0.385,
    "color": "#fff2d2",
    "positionLy": [
      -44.916,
      -5.876,
      -38.723
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-109076",
    "name": "Tau PsA",
    "distanceLy": 59.62,
    "apparentMagnitude": 4.94,
    "spectralClass": "F6V",
    "colorIndex": 0.489,
    "color": "#fff2d2",
    "positionLy": [
      44.589,
      -32.074,
      -23.175
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-60983",
    "name": "Eta Crv",
    "distanceLy": 59.63,
    "apparentMagnitude": 4.3,
    "spectralClass": "F2V",
    "colorIndex": 0.388,
    "color": "#fff2d2",
    "positionLy": [
      -56.7,
      -16.631,
      -7.986
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-82765",
    "name": "Gliese 649.1A",
    "distanceLy": 59.7,
    "apparentMagnitude": 7.76,
    "spectralClass": "K0",
    "colorIndex": 0.98,
    "color": "#ffd7a3",
    "positionLy": [
      -10.826,
      43.923,
      -38.961
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-26330",
    "name": "Pi Men",
    "distanceLy": 59.74,
    "apparentMagnitude": 5.65,
    "spectralClass": "G3IV",
    "colorIndex": 0.6,
    "color": "#ffd7a3",
    "positionLy": [
      0.984,
      -58.911,
      9.842
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-33603",
    "name": "Gliese 260",
    "distanceLy": 59.77,
    "apparentMagnitude": 6.81,
    "spectralClass": "K0IV-V",
    "colorIndex": 0.786,
    "color": "#ffd7a3",
    "positionLy": [
      -7.419,
      -52.444,
      27.693
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-96138",
    "name": "The Cyg",
    "distanceLy": 59.8,
    "apparentMagnitude": 4.49,
    "spectralClass": "F4V",
    "colorIndex": 0.395,
    "color": "#fff2d2",
    "positionLy": [
      15.63,
      45.958,
      -34.924
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-47977",
    "name": "Gliese 368",
    "distanceLy": 59.91,
    "apparentMagnitude": 5.08,
    "spectralClass": "G2V",
    "colorIndex": 0.619,
    "color": "#ffd7a3",
    "positionLy": [
      -34.948,
      43.112,
      22.568
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119397",
    "name": "Gliese 822B",
    "distanceLy": 60.28,
    "apparentMagnitude": 5.4,
    "spectralClass": "F7 V",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      44.541,
      10.473,
      -39.239
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-104520",
    "name": "Del Equ",
    "distanceLy": 60.3,
    "apparentMagnitude": 4.47,
    "spectralClass": "F5V+...",
    "colorIndex": 0.529,
    "color": "#fff2d2",
    "positionLy": [
      44.556,
      10.478,
      -39.254
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119327",
    "name": "Gliese GJ 4134",
    "distanceLy": 60.4,
    "apparentMagnitude": 7.72,
    "spectralClass": "dK0",
    "colorIndex": 0.94,
    "color": "#ffd7a3",
    "positionLy": [
      18.094,
      49.15,
      -30.08
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-35453",
    "name": "Wasat",
    "distanceLy": 60.47,
    "apparentMagnitude": 3.5,
    "spectralClass": "F0IV...",
    "colorIndex": 0.374,
    "color": "#fff2d2",
    "positionLy": [
      -19.205,
      22.634,
      52.678
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-89684",
    "name": "Eta Ser",
    "distanceLy": 60.48,
    "apparentMagnitude": 3.23,
    "spectralClass": "K0III-IV",
    "colorIndex": 0.941,
    "color": "#ffd7a3",
    "positionLy": [
      5.608,
      -3.059,
      -60.14
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118632",
    "name": "Gliese 351B",
    "distanceLy": 60.52,
    "apparentMagnitude": 4.65,
    "spectralClass": "F0 IV",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -36.616,
      -39.279,
      27.918
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-116397",
    "name": "Gliese 902.1",
    "distanceLy": 60.57,
    "apparentMagnitude": 7.18,
    "spectralClass": "K1V",
    "colorIndex": 0.802,
    "color": "#ffd7a3",
    "positionLy": [
      50.747,
      -32.759,
      -4.472
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-10508",
    "name": "Gliese 90",
    "distanceLy": 60.6,
    "apparentMagnitude": 7.13,
    "spectralClass": "K2V",
    "colorIndex": 0.92,
    "color": "#ffd7a3",
    "positionLy": [
      19.103,
      56.058,
      12.85
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-83134",
    "name": "Gliese 651",
    "distanceLy": 60.62,
    "apparentMagnitude": 6.76,
    "spectralClass": "G8V",
    "colorIndex": 0.728,
    "color": "#ffd7a3",
    "positionLy": [
      -10.23,
      44.396,
      -39.993
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-90376",
    "name": "Gliese 715",
    "distanceLy": 60.71,
    "apparentMagnitude": 8.04,
    "spectralClass": "K3V",
    "colorIndex": 1.074,
    "color": "#ffb17b",
    "positionLy": [
      7.887,
      -1.926,
      -60.167
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-46683",
    "name": "Gliese 355",
    "distanceLy": 60.74,
    "apparentMagnitude": 7.82,
    "spectralClass": "K0",
    "colorIndex": 0.933,
    "color": "#ffd7a3",
    "positionLy": [
      -47.652,
      -11.781,
      35.77
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119020",
    "name": "Eta CrB",
    "distanceLy": 60.74,
    "apparentMagnitude": 5.96,
    "spectralClass": "G2 V",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -33.147,
      30.63,
      -40.642
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-3842",
    "name": "Gliese 36",
    "distanceLy": 60.95,
    "apparentMagnitude": 7.15,
    "spectralClass": "G8/K0V",
    "colorIndex": 0.769,
    "color": "#ffd7a3",
    "positionLy": [
      54.72,
      -24.024,
      11.992
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-78603",
    "name": "Gliese 610",
    "distanceLy": 61.03,
    "apparentMagnitude": 7.39,
    "spectralClass": "K3/K4V",
    "colorIndex": 1.043,
    "color": "#ffb17b",
    "positionLy": [
      -27.359,
      -21.325,
      -50.218
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119390",
    "name": "Gliese 818.1B",
    "distanceLy": 61.1,
    "apparentMagnitude": 6.4,
    "spectralClass": "unknown",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      13.008,
      -58.486,
      -11.981
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-4142",
    "name": "Gliese 41",
    "distanceLy": 61.14,
    "apparentMagnitude": 4.8,
    "spectralClass": "F8V",
    "colorIndex": 0.54,
    "color": "#fff2d2",
    "positionLy": [
      28.735,
      53.534,
      6.776
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-19374",
    "name": "Gliese 161",
    "distanceLy": 61.16,
    "apparentMagnitude": 7.7,
    "spectralClass": "G5",
    "colorIndex": 0.952,
    "color": "#ffd7a3",
    "positionLy": [
      9.905,
      57.3,
      18.943
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-98605",
    "name": "Gliese GJ 1249",
    "distanceLy": 61.28,
    "apparentMagnitude": 6.18,
    "spectralClass": "G5IV",
    "colorIndex": 0.654,
    "color": "#ffd7a3",
    "positionLy": [
      24.918,
      38.132,
      -40.997
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-46518",
    "name": "Psi Vel",
    "distanceLy": 61.37,
    "apparentMagnitude": 3.6,
    "spectralClass": "F2IV",
    "colorIndex": 0.371,
    "color": "#fff2d2",
    "positionLy": [
      -37.125,
      -39.827,
      28.307
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-18813",
    "name": "Gliese 159",
    "distanceLy": 61.42,
    "apparentMagnitude": 5.38,
    "spectralClass": "F5V",
    "colorIndex": 0.516,
    "color": "#fff2d2",
    "positionLy": [
      30.103,
      -0.288,
      53.54
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-94854",
    "name": "Gliese 755",
    "distanceLy": 61.42,
    "apparentMagnitude": 6.48,
    "spectralClass": "G1/G2V",
    "colorIndex": 0.628,
    "color": "#ffd7a3",
    "positionLy": [
      17.52,
      -35.216,
      -47.176
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-98365",
    "name": "Gliese 775.1",
    "distanceLy": 61.88,
    "apparentMagnitude": 7.15,
    "spectralClass": "G7V",
    "colorIndex": 0.714,
    "color": "#ffd7a3",
    "positionLy": [
      30.377,
      16.632,
      -51.278
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-7221",
    "name": "Gliese 59A",
    "distanceLy": 62.14,
    "apparentMagnitude": 6.97,
    "spectralClass": "K0V",
    "colorIndex": 0.766,
    "color": "#ffd7a3",
    "positionLy": [
      52.056,
      -25.449,
      22.436
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-65939",
    "name": "Gliese GJ 2102",
    "distanceLy": 62.2,
    "apparentMagnitude": 7.98,
    "spectralClass": "K0",
    "colorIndex": 1.026,
    "color": "#ffb17b",
    "positionLy": [
      -56.447,
      9.286,
      -24.409
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-115080",
    "name": "Gliese 894.5",
    "distanceLy": 62.37,
    "apparentMagnitude": 7.8,
    "spectralClass": "K2V",
    "colorIndex": 0.881,
    "color": "#ffd7a3",
    "positionLy": [
      60.485,
      -11.65,
      -9.828
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-33928",
    "name": "Gliese 262",
    "distanceLy": 62.4,
    "apparentMagnitude": 5.93,
    "spectralClass": "G4V",
    "colorIndex": 0.595,
    "color": "#fff2d2",
    "positionLy": [
      -14.881,
      30.572,
      52.321
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-44769",
    "name": "Gliese 334.2",
    "distanceLy": 62.59,
    "apparentMagnitude": 5.95,
    "spectralClass": "F9V",
    "colorIndex": 0.585,
    "color": "#fff2d2",
    "positionLy": [
      -38.134,
      34.894,
      35.297
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-97365",
    "name": "Omi Aql",
    "distanceLy": 62.59,
    "apparentMagnitude": 5.12,
    "spectralClass": "F8V",
    "colorIndex": 0.563,
    "color": "#fff2d2",
    "positionLy": [
      28.669,
      11.316,
      -54.475
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-25480",
    "name": "Gliese 204.1",
    "distanceLy": 62.63,
    "apparentMagnitude": 6.99,
    "spectralClass": "G5V",
    "colorIndex": 0.755,
    "color": "#ffd7a3",
    "positionLy": [
      4.349,
      -54.462,
      30.611
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-29787",
    "name": "Gliese 231.1A",
    "distanceLy": 62.78,
    "apparentMagnitude": 5.7,
    "spectralClass": "G0.5Vb",
    "colorIndex": 0.61,
    "color": "#ffd7a3",
    "positionLy": [
      -4.708,
      5.581,
      62.357
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-72086",
    "name": "Gliese GJ 3867",
    "distanceLy": 63.18,
    "apparentMagnitude": 7.76,
    "spectralClass": "G8V",
    "colorIndex": 0.893,
    "color": "#ffd7a3",
    "positionLy": [
      -47.037,
      2.98,
      -42.081
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-42311",
    "name": "Gliese 314A",
    "distanceLy": 63.27,
    "apparentMagnitude": 5.05,
    "spectralClass": "G3/G5V",
    "colorIndex": 0.72,
    "color": "#ffd7a3",
    "positionLy": [
      -37.36,
      -24.378,
      44.868
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-8777",
    "name": "Mothallah",
    "distanceLy": 63.33,
    "apparentMagnitude": 3.42,
    "spectralClass": "F6IV",
    "colorIndex": 0.488,
    "color": "#fff2d2",
    "positionLy": [
      48.508,
      31.261,
      26.087
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-27253",
    "name": "Bet Pic",
    "distanceLy": 63.41,
    "apparentMagnitude": 3.85,
    "spectralClass": "A3V",
    "colorIndex": 0.171,
    "color": "#c7ddff",
    "positionLy": [
      2.21,
      -49.322,
      39.784
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-98194",
    "name": "Gliese GJ 4130",
    "distanceLy": 63.44,
    "apparentMagnitude": 7.67,
    "spectralClass": "G5",
    "colorIndex": 0.932,
    "color": "#ffd7a3",
    "positionLy": [
      29.423,
      24.494,
      -50.589
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-103527",
    "name": "Gliese 816.1A",
    "distanceLy": 63.5,
    "apparentMagnitude": 7.69,
    "spectralClass": "K2",
    "colorIndex": 0.97,
    "color": "#ffd7a3",
    "positionLy": [
      31.621,
      45.592,
      -30.89
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-67406",
    "name": "Gliese 530",
    "distanceLy": 63.52,
    "apparentMagnitude": 6.43,
    "spectralClass": "G5V",
    "colorIndex": 0.703,
    "color": "#ffd7a3",
    "positionLy": [
      -51.155,
      -26.229,
      -27.01
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-39644",
    "name": "Tureis",
    "distanceLy": 63.54,
    "apparentMagnitude": 2.83,
    "spectralClass": "F2mF5IIp",
    "colorIndex": 0.458,
    "color": "#fff2d2",
    "positionLy": [
      -30.59,
      -26.153,
      49.172
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-100599",
    "name": "Gliese 790",
    "distanceLy": 63.68,
    "apparentMagnitude": 6.61,
    "spectralClass": "G6/G8V",
    "colorIndex": 0.724,
    "color": "#ffd7a3",
    "positionLy": [
      32.844,
      -32.67,
      -43.689
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119086",
    "name": "Gliese 627B",
    "distanceLy": 63.7,
    "apparentMagnitude": 7.85,
    "spectralClass": "K3 V",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -23.402,
      20.122,
      -55.726
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-82144",
    "name": "Larawag",
    "distanceLy": 63.71,
    "apparentMagnitude": 2.29,
    "spectralClass": "K2IIIb",
    "colorIndex": 1.144,
    "color": "#ffb17b",
    "positionLy": [
      -15.793,
      -35.899,
      -50.214
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-40587",
    "name": "Alp Cha",
    "distanceLy": 63.8,
    "apparentMagnitude": 4.05,
    "spectralClass": "F5III",
    "colorIndex": 0.413,
    "color": "#fff2d2",
    "positionLy": [
      -8.206,
      -62.146,
      11.881
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118413",
    "name": "Gliese GJ 3383",
    "distanceLy": 63.95,
    "apparentMagnitude": 7.98,
    "spectralClass": "G5",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -1.151,
      20.5,
      60.566
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-80481",
    "name": "Gliese 627A",
    "distanceLy": 64.12,
    "apparentMagnitude": 6.98,
    "spectralClass": "K2V",
    "colorIndex": 0.848,
    "color": "#ffd7a3",
    "positionLy": [
      -23.554,
      20.253,
      -56.087
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-31512",
    "name": "Nu-2 CMa",
    "distanceLy": 64.42,
    "apparentMagnitude": 3.95,
    "spectralClass": "K1III+...",
    "colorIndex": 1.037,
    "color": "#ffb17b",
    "positionLy": [
      -9.693,
      -21.245,
      60.038
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-58895",
    "name": "Eta Cru",
    "distanceLy": 64.43,
    "apparentMagnitude": 4.14,
    "spectralClass": "F2III",
    "colorIndex": 0.353,
    "color": "#fff2d2",
    "positionLy": [
      -27.611,
      -58.211,
      -0.829
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-104102",
    "name": "Gliese 818.1A",
    "distanceLy": 64.47,
    "apparentMagnitude": 5.67,
    "spectralClass": "G3IV",
    "colorIndex": 0.59,
    "color": "#fff2d2",
    "positionLy": [
      13.725,
      -61.71,
      -12.646
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-104814",
    "name": "Gliese 825.3",
    "distanceLy": 64.64,
    "apparentMagnitude": 8.15,
    "spectralClass": "K2",
    "colorIndex": 0.99,
    "color": "#ffd7a3",
    "positionLy": [
      49.158,
      0.182,
      -41.967
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-70634",
    "name": "Gliese GJ 3859",
    "distanceLy": 64.88,
    "apparentMagnitude": 6.88,
    "spectralClass": "G5",
    "colorIndex": 0.774,
    "color": "#ffd7a3",
    "positionLy": [
      -8.238,
      64.048,
      -6.286
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118551",
    "name": "Gliese 314B",
    "distanceLy": 64.97,
    "apparentMagnitude": 6.8,
    "spectralClass": "K0 V",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -38.366,
      -25.031,
      46.073
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-107813",
    "name": "Gliese 840",
    "distanceLy": 65.09,
    "apparentMagnitude": 7.73,
    "spectralClass": "K0",
    "colorIndex": 0.911,
    "color": "#ffd7a3",
    "positionLy": [
      46.988,
      34.807,
      -28.583
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-39790",
    "name": "Gliese 297.1",
    "distanceLy": 65.17,
    "apparentMagnitude": 4.74,
    "spectralClass": "F5V",
    "colorIndex": 0.437,
    "color": "#fff2d2",
    "positionLy": [
      -16.699,
      -57.162,
      26.464
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-71629",
    "name": "Gliese GJ 3863",
    "distanceLy": 65.22,
    "apparentMagnitude": 6.73,
    "spectralClass": "G5V",
    "colorIndex": 0.707,
    "color": "#ffd7a3",
    "positionLy": [
      -12.725,
      -63.037,
      -10.856
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-94051",
    "name": "Gliese GJ 1233",
    "distanceLy": 65.28,
    "apparentMagnitude": 7.04,
    "spectralClass": "G8V",
    "colorIndex": 0.804,
    "color": "#ffd7a3",
    "positionLy": [
      10.815,
      55.164,
      -33.193
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-33765",
    "name": "Gliese 257.1",
    "distanceLy": 65.51,
    "apparentMagnitude": 7.98,
    "spectralClass": "K3V",
    "colorIndex": 0.986,
    "color": "#ffd7a3",
    "positionLy": [
      -11.562,
      48.969,
      41.945
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-38512",
    "name": "Gliese 292.2",
    "distanceLy": 65.52,
    "apparentMagnitude": 7.43,
    "spectralClass": "G8V",
    "colorIndex": 0.739,
    "color": "#ffd7a3",
    "positionLy": [
      -31.398,
      -1.615,
      57.487
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-26440",
    "name": "Gliese GJ 3358",
    "distanceLy": 65.76,
    "apparentMagnitude": 7.74,
    "spectralClass": "K2V",
    "colorIndex": 0.834,
    "color": "#ffd7a3",
    "positionLy": [
      3.893,
      51.422,
      40.797
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-21717",
    "name": "Alp Cae",
    "distanceLy": 65.77,
    "apparentMagnitude": 4.44,
    "spectralClass": "F2V",
    "colorIndex": 0.342,
    "color": "#fff2d2",
    "positionLy": [
      16.64,
      -43.893,
      46.069
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-9861",
    "name": "Hamal",
    "distanceLy": 65.81,
    "apparentMagnitude": 2.01,
    "spectralClass": "K2III",
    "colorIndex": 1.151,
    "color": "#ffb17b",
    "positionLy": [
      51.311,
      26.202,
      31.806
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-50363",
    "name": "Gliese GJ 3593",
    "distanceLy": 66.01,
    "apparentMagnitude": 6.66,
    "spectralClass": "G5",
    "colorIndex": 0.653,
    "color": "#ffd7a3",
    "positionLy": [
      -42.9,
      45.894,
      20.264
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-117958",
    "name": "Gliese 4.1B",
    "distanceLy": 66.16,
    "apparentMagnitude": 7.2,
    "spectralClass": "dG8",
    "colorIndex": 0.78,
    "color": "#ffd7a3",
    "positionLy": [
      34.614,
      56.369,
      0.944
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-104549",
    "name": "Tau Cyg",
    "distanceLy": 66.35,
    "apparentMagnitude": 3.74,
    "spectralClass": "F1IV",
    "colorIndex": 0.393,
    "color": "#fff2d2",
    "positionLy": [
      39.251,
      40.887,
      -34.485
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-45040",
    "name": "Pi-1 Cnc",
    "distanceLy": 66.41,
    "apparentMagnitude": 6.49,
    "spectralClass": "G9V",
    "colorIndex": 0.731,
    "color": "#ffd7a3",
    "positionLy": [
      -47.73,
      17.185,
      42.866
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-44910",
    "name": "Sig-2 UMa",
    "distanceLy": 66.47,
    "apparentMagnitude": 4.8,
    "spectralClass": "F7IV-V",
    "colorIndex": 0.489,
    "color": "#fff2d2",
    "positionLy": [
      -19.072,
      61.244,
      17.416
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-99134",
    "name": "Gliese 783.2A",
    "distanceLy": 66.51,
    "apparentMagnitude": 7.34,
    "spectralClass": "K1V",
    "colorIndex": 0.83,
    "color": "#ffd7a3",
    "positionLy": [
      34.576,
      18.541,
      -53.702
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-105371",
    "name": "Gliese GJ 1262",
    "distanceLy": 66.6,
    "apparentMagnitude": 6.98,
    "spectralClass": "G5V",
    "colorIndex": 0.723,
    "color": "#ffd7a3",
    "positionLy": [
      19.245,
      -61.853,
      -15.49
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-18222",
    "name": "Gliese GJ 3255",
    "distanceLy": 66.63,
    "apparentMagnitude": 6.81,
    "spectralClass": "G0",
    "colorIndex": 0.719,
    "color": "#ffd7a3",
    "positionLy": [
      33.25,
      19.054,
      54.508
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-21368",
    "name": "Aldebaran",
    "distanceLy": 66.64,
    "apparentMagnitude": 0.87,
    "spectralClass": "K5III",
    "colorIndex": 1.538,
    "color": "#ffb17b",
    "positionLy": [
      22.92,
      18.939,
      59.646
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118057",
    "name": "Gliese 55.3B",
    "distanceLy": 66.64,
    "apparentMagnitude": 7.2,
    "spectralClass": "G5",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      22.719,
      -62.166,
      7.796
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-19843",
    "name": "Gam Dor",
    "distanceLy": 66.74,
    "apparentMagnitude": 4.26,
    "spectralClass": "F4III",
    "colorIndex": 0.312,
    "color": "#fff2d2",
    "positionLy": [
      18.214,
      -52.222,
      37.355
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118606",
    "name": "Gliese 337B",
    "distanceLy": 66.79,
    "apparentMagnitude": 7.3,
    "spectralClass": "unknown",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -48.004,
      17.284,
      43.109
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-75493",
    "name": "Gliese 586B",
    "distanceLy": 66.84,
    "apparentMagnitude": 7.57,
    "spectralClass": "K2V",
    "colorIndex": 0.868,
    "color": "#ffd7a3",
    "positionLy": [
      -40.554,
      -10.867,
      -52.002
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-64252",
    "name": "Gliese GJ 3769",
    "distanceLy": 66.86,
    "apparentMagnitude": 7.56,
    "spectralClass": "K0",
    "colorIndex": 0.93,
    "color": "#ffd7a3",
    "positionLy": [
      -63.474,
      -2.643,
      -20.848
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-114562",
    "name": "Gliese GJ 4324",
    "distanceLy": 66.88,
    "apparentMagnitude": 5.58,
    "spectralClass": "F7V",
    "colorIndex": 0.556,
    "color": "#fff2d2",
    "positionLy": [
      39.335,
      53.559,
      -7.52
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-114586",
    "name": "Gliese GJ 1282",
    "distanceLy": 66.99,
    "apparentMagnitude": 5.64,
    "spectralClass": "F7V",
    "colorIndex": 0.521,
    "color": "#fff2d2",
    "positionLy": [
      30.894,
      -59.146,
      -5.871
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-110303",
    "name": "Gliese 857",
    "distanceLy": 67.07,
    "apparentMagnitude": 5.31,
    "spectralClass": "F9V",
    "colorIndex": 0.665,
    "color": "#ffd7a3",
    "positionLy": [
      32.711,
      -56.752,
      -14.404
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-75489",
    "name": "Gliese 586A",
    "distanceLy": 67.14,
    "apparentMagnitude": 6.89,
    "spectralClass": "K2V",
    "colorIndex": 0.788,
    "color": "#ffd7a3",
    "positionLy": [
      -40.749,
      -10.905,
      -52.231
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-7325",
    "name": "Gliese 59.1",
    "distanceLy": 67.37,
    "apparentMagnitude": 6.52,
    "spectralClass": "G6V",
    "colorIndex": 0.686,
    "color": "#ffd7a3",
    "positionLy": [
      22.171,
      62.876,
      9.704
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-83344",
    "name": "Gliese 654.1",
    "distanceLy": 67.4,
    "apparentMagnitude": 6,
    "spectralClass": "F9V",
    "colorIndex": 0.578,
    "color": "#fff2d2",
    "positionLy": [
      -15.939,
      0.826,
      -65.484
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-64202",
    "name": "Gliese 501.2",
    "distanceLy": 67.42,
    "apparentMagnitude": 4.85,
    "spectralClass": "G3V",
    "colorIndex": 0.693,
    "color": "#ffd7a3",
    "positionLy": [
      -50.655,
      -41.322,
      -16.472
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-38544",
    "name": "Gliese 292.1",
    "distanceLy": 67.49,
    "apparentMagnitude": 7.76,
    "spectralClass": "K2",
    "colorIndex": 0.95,
    "color": "#ffd7a3",
    "positionLy": [
      -30.623,
      22.234,
      55.876
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-51670",
    "name": "Gliese 396",
    "distanceLy": 67.61,
    "apparentMagnitude": 7.29,
    "spectralClass": "K0",
    "colorIndex": 0.819,
    "color": "#ffd7a3",
    "positionLy": [
      -6.152,
      67.289,
      2.387
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119561",
    "name": "Gliese 894.2B",
    "distanceLy": 67.64,
    "apparentMagnitude": 7.61,
    "spectralClass": "K2 V",
    "colorIndex": 0.91,
    "color": "#ffd7a3",
    "positionLy": [
      64.74,
      -15.738,
      -11.674
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118390",
    "name": "Gliese GJ 3363",
    "distanceLy": 67.95,
    "apparentMagnitude": 8.15,
    "spectralClass": "G5",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      3.79,
      36.398,
      57.244
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-33981",
    "name": "Gliese 264.1B",
    "distanceLy": 67.96,
    "apparentMagnitude": 6.83,
    "spectralClass": "K0V",
    "colorIndex": 0.779,
    "color": "#ffd7a3",
    "positionLy": [
      -13.56,
      -46.88,
      47.305
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-22069",
    "name": "Gliese 176.3",
    "distanceLy": 68.05,
    "apparentMagnitude": 7.58,
    "spectralClass": "K0V",
    "colorIndex": 0.875,
    "color": "#ffd7a3",
    "positionLy": [
      13.922,
      -52.185,
      41.395
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-69793",
    "name": "Gliese 544A",
    "distanceLy": 68.11,
    "apparentMagnitude": 7.58,
    "spectralClass": "K1V",
    "colorIndex": 0.867,
    "color": "#ffd7a3",
    "positionLy": [
      -55.634,
      -6.115,
      -38.804
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-25047",
    "name": "Gliese 196",
    "distanceLy": 68.12,
    "apparentMagnitude": 5.08,
    "spectralClass": "F6V",
    "colorIndex": 0.506,
    "color": "#fff2d2",
    "positionLy": [
      2.07,
      66.919,
      12.558
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-63164",
    "name": "Gliese 491A",
    "distanceLy": 68.13,
    "apparentMagnitude": 7.54,
    "spectralClass": "K0V",
    "colorIndex": 0.769,
    "color": "#ffd7a3",
    "positionLy": [
      -64.919,
      -11.637,
      -17.1
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-117996",
    "name": "Gliese GJ 9015B",
    "distanceLy": 68.23,
    "apparentMagnitude": 6,
    "spectralClass": "A",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      30.629,
      -60.813,
      4.406
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119398",
    "name": "Gliese 822.1B",
    "distanceLy": 68.23,
    "apparentMagnitude": 6.42,
    "spectralClass": "G0 V",
    "colorIndex": 0.6,
    "color": "#ffd7a3",
    "positionLy": [
      40.369,
      42.051,
      -35.466
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-44135",
    "name": "Ross 687",
    "distanceLy": 68.3,
    "apparentMagnitude": 12.37,
    "spectralClass": "M4",
    "colorIndex": 1.455,
    "color": "#ffb17b",
    "positionLy": [
      -48.272,
      6.24,
      47.92
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-101710",
    "name": "Gliese 797A",
    "distanceLy": 68.32,
    "apparentMagnitude": 6.43,
    "spectralClass": "G5V",
    "colorIndex": 0.611,
    "color": "#ffd7a3",
    "positionLy": [
      41.444,
      23.294,
      -49.063
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-5884",
    "name": "Kap Tuc",
    "distanceLy": 68.35,
    "apparentMagnitude": 4.25,
    "spectralClass": "F6IV",
    "colorIndex": 0.48,
    "color": "#fff2d2",
    "positionLy": [
      23.298,
      -63.755,
      7.996
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-18279",
    "name": "Gliese 155.2",
    "distanceLy": 68.53,
    "apparentMagnitude": 7.84,
    "spectralClass": "K0V",
    "colorIndex": 0.831,
    "color": "#ffd7a3",
    "positionLy": [
      17.139,
      60.039,
      28.262
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-43948",
    "name": "Gliese GJ 3523",
    "distanceLy": 68.61,
    "apparentMagnitude": 5.8,
    "spectralClass": "F7/F8IV/V",
    "colorIndex": 0.521,
    "color": "#fff2d2",
    "positionLy": [
      -46.346,
      -19.064,
      46.861
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-78290",
    "name": "The Dra",
    "distanceLy": 68.61,
    "apparentMagnitude": 4.01,
    "spectralClass": "F8IV-V",
    "colorIndex": 0.528,
    "color": "#fff2d2",
    "positionLy": [
      -17.634,
      58.537,
      -31.133
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-117998",
    "name": "Gliese 23B",
    "distanceLy": 68.65,
    "apparentMagnitude": 6.4,
    "spectralClass": "G1 V",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      67.708,
      -4.302,
      10.494
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-58276",
    "name": "Gliese GJ 1153",
    "distanceLy": 68.71,
    "apparentMagnitude": 7.92,
    "spectralClass": "K2V",
    "colorIndex": 0.974,
    "color": "#ffd7a3",
    "positionLy": [
      -64.417,
      -23.898,
      0.234
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-79366",
    "name": "Sig CrB",
    "distanceLy": 68.75,
    "apparentMagnitude": 5.23,
    "spectralClass": "F8V",
    "colorIndex": 0.599,
    "color": "#fff2d2",
    "positionLy": [
      -25.322,
      38.304,
      -51.169
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-54745",
    "name": "Gliese GJ 3651",
    "distanceLy": 68.87,
    "apparentMagnitude": 7.76,
    "spectralClass": "K1V",
    "colorIndex": 0.845,
    "color": "#ffd7a3",
    "positionLy": [
      -60.834,
      29.876,
      12.224
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118055",
    "name": "Gliese 55.1B",
    "distanceLy": 68.87,
    "apparentMagnitude": 8.2,
    "spectralClass": "unknown",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      23.561,
      -64.215,
      8.001
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-96914",
    "name": "Gliese 765.4A",
    "distanceLy": 68.9,
    "apparentMagnitude": 7.68,
    "spectralClass": "K3V",
    "colorIndex": 1,
    "color": "#ffb17b",
    "positionLy": [
      25.506,
      38.129,
      -51.404
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-41955",
    "name": "Gliese GJ 3507",
    "distanceLy": 68.94,
    "apparentMagnitude": 7.32,
    "spectralClass": "G5",
    "colorIndex": 0.791,
    "color": "#ffd7a3",
    "positionLy": [
      -43.037,
      -0.874,
      53.85
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-4839",
    "name": "Gliese GJ 3071",
    "distanceLy": 68.95,
    "apparentMagnitude": 8.16,
    "spectralClass": "K2",
    "colorIndex": 1.008,
    "color": "#ffb17b",
    "positionLy": [
      66.155,
      6.084,
      18.474
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-65325",
    "name": "Gliese 511.1",
    "distanceLy": 69.04,
    "apparentMagnitude": 6.5,
    "spectralClass": "G6V",
    "colorIndex": 0.739,
    "color": "#ffd7a3",
    "positionLy": [
      -28.902,
      61.659,
      -11.384
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-106746",
    "name": "Nu Oct",
    "distanceLy": 69.14,
    "apparentMagnitude": 3.73,
    "spectralClass": "K0III",
    "colorIndex": 1.008,
    "color": "#ffb17b",
    "positionLy": [
      12.421,
      -67.478,
      -8.578
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-96594",
    "name": "Gliese 765.1B",
    "distanceLy": 69.19,
    "apparentMagnitude": 6.25,
    "spectralClass": "G5V",
    "colorIndex": 0.661,
    "color": "#ffd7a3",
    "positionLy": [
      18.916,
      53.401,
      -39.718
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-69449",
    "name": "Gliese 540.3",
    "distanceLy": 69.2,
    "apparentMagnitude": 6.31,
    "spectralClass": "F9V",
    "colorIndex": 0.596,
    "color": "#fff2d2",
    "positionLy": [
      -40.61,
      -48.935,
      -27.3
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-98159",
    "name": "Gliese 773.4",
    "distanceLy": 69.31,
    "apparentMagnitude": 5.65,
    "spectralClass": "F7V",
    "colorIndex": 0.498,
    "color": "#fff2d2",
    "positionLy": [
      28.902,
      -38.458,
      -49.89
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-948",
    "name": "The Scl",
    "distanceLy": 69.39,
    "apparentMagnitude": 5.24,
    "spectralClass": "F3/F5V",
    "colorIndex": 0.459,
    "color": "#fff2d2",
    "positionLy": [
      56.678,
      -39.935,
      2.904
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-77172",
    "name": "Gliese GJ 3917",
    "distanceLy": 69.44,
    "apparentMagnitude": 7.44,
    "spectralClass": "G8V",
    "colorIndex": 0.801,
    "color": "#ffd7a3",
    "positionLy": [
      -37.765,
      1.905,
      -58.24
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-31631",
    "name": "Gliese GJ 3400A",
    "distanceLy": 69.45,
    "apparentMagnitude": 6.15,
    "spectralClass": "G1/G2V",
    "colorIndex": 0.624,
    "color": "#ffd7a3",
    "positionLy": [
      -5.465,
      -61.057,
      32.651
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-92627",
    "name": "Gliese GJ 9638",
    "distanceLy": 69.78,
    "apparentMagnitude": 8.16,
    "spectralClass": "K0V",
    "colorIndex": 0.91,
    "color": "#ffd7a3",
    "positionLy": [
      15.444,
      27.889,
      -62.074
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-52311",
    "name": "Gliese GJ 3615",
    "distanceLy": 69.8,
    "apparentMagnitude": 7.72,
    "spectralClass": "K1V",
    "colorIndex": 0.873,
    "color": "#ffd7a3",
    "positionLy": [
      -57.637,
      -33.906,
      19.995
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-34741",
    "name": "Gliese 268.1",
    "distanceLy": 69.89,
    "apparentMagnitude": 4.49,
    "spectralClass": "F0IV",
    "colorIndex": 0.324,
    "color": "#fff2d2",
    "positionLy": [
      -14.906,
      -50.91,
      45.497
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-61258",
    "name": "Gliese GJ 1161A",
    "distanceLy": 69.89,
    "apparentMagnitude": 7.84,
    "spectralClass": "K4V",
    "colorIndex": 1.024,
    "color": "#ffb17b",
    "positionLy": [
      -56.641,
      -39.967,
      -8.859
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-93671",
    "name": "Gliese 746",
    "distanceLy": 69.9,
    "apparentMagnitude": 6.08,
    "spectralClass": "G5V",
    "colorIndex": 0.705,
    "color": "#ffd7a3",
    "positionLy": [
      19.547,
      20.266,
      -63.979
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-86219",
    "name": "Lam Ara",
    "distanceLy": 69.96,
    "apparentMagnitude": 4.76,
    "spectralClass": "F3IV",
    "colorIndex": 0.415,
    "color": "#fff2d2",
    "positionLy": [
      -3.888,
      -53.131,
      -45.348
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-517",
    "name": "Gliese 4.1A",
    "distanceLy": 70.05,
    "apparentMagnitude": 5.98,
    "spectralClass": "G5V",
    "colorIndex": 0.687,
    "color": "#ffd7a3",
    "positionLy": [
      36.654,
      59.687,
      1.002
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-12357",
    "name": "Eps Cet",
    "distanceLy": 70.07,
    "apparentMagnitude": 4.83,
    "spectralClass": "F5V",
    "colorIndex": 0.447,
    "color": "#fff2d2",
    "positionLy": [
      52.61,
      -14.415,
      43.974
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-51354",
    "name": "Gliese 392.1",
    "distanceLy": 70.13,
    "apparentMagnitude": 5.25,
    "spectralClass": "F2V",
    "colorIndex": 0.399,
    "color": "#fff2d2",
    "positionLy": [
      -8.407,
      69.536,
      3.436
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-111836",
    "name": "Gliese GJ 4291",
    "distanceLy": 70.19,
    "apparentMagnitude": 8.11,
    "spectralClass": "K0",
    "colorIndex": 0.966,
    "color": "#ffd7a3",
    "positionLy": [
      65.884,
      -7.825,
      -22.893
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-114967",
    "name": "Gliese 894.4",
    "distanceLy": 70.2,
    "apparentMagnitude": 7.36,
    "spectralClass": "K1V",
    "colorIndex": 0.801,
    "color": "#ffd7a3",
    "positionLy": [
      49.71,
      48.852,
      -8.406
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-109580",
    "name": "Gliese GJ 4268A",
    "distanceLy": 70.25,
    "apparentMagnitude": 7.5,
    "spectralClass": "K1V",
    "colorIndex": 0.81,
    "color": "#ffd7a3",
    "positionLy": [
      36.501,
      57.312,
      -17.822
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-109033",
    "name": "Gliese 848.4",
    "distanceLy": 70.32,
    "apparentMagnitude": 6.54,
    "spectralClass": "G0",
    "colorIndex": 0.773,
    "color": "#ffd7a3",
    "positionLy": [
      61.765,
      -9.238,
      -32.325
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-3527",
    "name": "Gliese 31.4",
    "distanceLy": 70.34,
    "apparentMagnitude": 8.03,
    "spectralClass": "K2V",
    "colorIndex": 0.983,
    "color": "#ffd7a3",
    "positionLy": [
      68.948,
      2.192,
      13.74
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-55046",
    "name": "Gliese 423.1",
    "distanceLy": 70.35,
    "apparentMagnitude": 7.29,
    "spectralClass": "G8V",
    "colorIndex": 0.732,
    "color": "#ffd7a3",
    "positionLy": [
      -68.925,
      -6.214,
      12.66
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-77386",
    "name": "Eps Ser",
    "distanceLy": 70.44,
    "apparentMagnitude": 3.71,
    "spectralClass": "A2m",
    "colorIndex": 0.147,
    "color": "#c7ddff",
    "positionLy": [
      -37.523,
      5.5,
      -59.364
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-27220",
    "name": "Zet Lep",
    "distanceLy": 70.47,
    "apparentMagnitude": 3.55,
    "spectralClass": "A2Vann",
    "colorIndex": 0.104,
    "color": "#c7ddff",
    "positionLy": [
      3.876,
      -18.029,
      68.02
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-7358",
    "name": "Gliese 60A",
    "distanceLy": 70.54,
    "apparentMagnitude": 7.11,
    "spectralClass": "K3V",
    "colorIndex": 0.909,
    "color": "#ffd7a3",
    "positionLy": [
      55.962,
      -35.173,
      24.629
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-5829",
    "name": "Gliese 55.1A",
    "distanceLy": 70.6,
    "apparentMagnitude": 7.22,
    "spectralClass": "K2V",
    "colorIndex": 1,
    "color": "#ffb17b",
    "positionLy": [
      24.153,
      -65.827,
      8.201
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-16204",
    "name": "Kap Ret",
    "distanceLy": 70.72,
    "apparentMagnitude": 4.71,
    "spectralClass": "F5IV-V",
    "colorIndex": 0.41,
    "color": "#fff2d2",
    "positionLy": [
      19.656,
      -62.976,
      25.473
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119075",
    "name": "Sig CrB",
    "distanceLy": 70.73,
    "apparentMagnitude": 6.72,
    "spectralClass": "G1 V",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -26.054,
      39.406,
      -52.644
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119189",
    "name": "Gliese GJ 4035",
    "distanceLy": 70.9,
    "apparentMagnitude": 8,
    "spectralClass": "dK8",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -1.171,
      5.973,
      -70.642
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-12411",
    "name": "Gliese GJ 3175",
    "distanceLy": 70.97,
    "apparentMagnitude": 5.79,
    "spectralClass": "F6V",
    "colorIndex": 0.524,
    "color": "#fff2d2",
    "positionLy": [
      53.584,
      -11.655,
      45.045
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-40005",
    "name": "Gliese GJ 9256",
    "distanceLy": 71.06,
    "apparentMagnitude": 6.78,
    "spectralClass": "G4V",
    "colorIndex": 0.679,
    "color": "#ffd7a3",
    "positionLy": [
      -32.578,
      38.135,
      50.337
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-51375",
    "name": "Gliese 397.2",
    "distanceLy": 71.14,
    "apparentMagnitude": 4.89,
    "spectralClass": "F6V",
    "colorIndex": 0.5,
    "color": "#fff2d2",
    "positionLy": [
      -38.989,
      -57.342,
      15.879
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119033",
    "name": "Gliese 593B",
    "distanceLy": 71.14,
    "apparentMagnitude": 7.6,
    "spectralClass": "unknown",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -32.118,
      45.537,
      -44.217
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-36411",
    "name": "Gliese GJ 3446",
    "distanceLy": 71.15,
    "apparentMagnitude": 6.66,
    "spectralClass": "G3V",
    "colorIndex": 0.641,
    "color": "#ffd7a3",
    "positionLy": [
      -21.81,
      -43.156,
      52.196
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-27141",
    "name": "Gliese 217",
    "distanceLy": 71.28,
    "apparentMagnitude": 7.34,
    "spectralClass": "K0V",
    "colorIndex": 0.833,
    "color": "#ffd7a3",
    "positionLy": [
      3.454,
      43.176,
      56.603
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-30430",
    "name": "Gliese GJ 3394",
    "distanceLy": 71.37,
    "apparentMagnitude": 6.37,
    "spectralClass": "G2V",
    "colorIndex": 0.626,
    "color": "#ffd7a3",
    "positionLy": [
      -6.737,
      -34.36,
      62.189
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-17625",
    "name": "Gliese GJ 1064A",
    "distanceLy": 71.45,
    "apparentMagnitude": 7.67,
    "spectralClass": "K1V",
    "colorIndex": 0.796,
    "color": "#ffd7a3",
    "positionLy": [
      29.366,
      47.275,
      44.806
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-21935",
    "name": "Gliese 176.2",
    "distanceLy": 71.51,
    "apparentMagnitude": 8,
    "spectralClass": "K5III",
    "colorIndex": 0.907,
    "color": "#ffd7a3",
    "positionLy": [
      20.723,
      33.227,
      59.835
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-54585",
    "name": "Gliese 417",
    "distanceLy": 71.51,
    "apparentMagnitude": 6.41,
    "spectralClass": "G0V",
    "colorIndex": 0.6,
    "color": "#ffd7a3",
    "positionLy": [
      -56.75,
      41.844,
      11.923
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-98513",
    "name": "Gliese 779.1",
    "distanceLy": 71.59,
    "apparentMagnitude": 7.82,
    "spectralClass": "K3V",
    "colorIndex": 0.924,
    "color": "#ffd7a3",
    "positionLy": [
      33.238,
      31.146,
      -55.227
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-11046",
    "name": "Kap For",
    "distanceLy": 71.64,
    "apparentMagnitude": 5.19,
    "spectralClass": "G2V",
    "colorIndex": 0.608,
    "color": "#ffd7a3",
    "positionLy": [
      53.263,
      -28.927,
      38.183
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-103057",
    "name": "Gliese 811",
    "distanceLy": 71.65,
    "apparentMagnitude": 5.7,
    "spectralClass": "F7V",
    "colorIndex": 0.507,
    "color": "#fff2d2",
    "positionLy": [
      44.781,
      -31.742,
      -46.054
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-18366",
    "name": "Gliese GJ 3257",
    "distanceLy": 71.7,
    "apparentMagnitude": 6.53,
    "spectralClass": "G0",
    "colorIndex": 0.698,
    "color": "#ffd7a3",
    "positionLy": [
      18.637,
      61.867,
      31.077
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-9217",
    "name": "Alp Hyi",
    "distanceLy": 71.79,
    "apparentMagnitude": 2.86,
    "spectralClass": "F0V",
    "colorIndex": 0.29,
    "color": "#fff2d2",
    "positionLy": [
      29.692,
      -63.135,
      16.931
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-69192",
    "name": "Gliese GJ 3830",
    "distanceLy": 71.92,
    "apparentMagnitude": 7.05,
    "spectralClass": "G0",
    "colorIndex": 0.733,
    "color": "#ffd7a3",
    "positionLy": [
      -60.087,
      -4.165,
      -39.303
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-101056",
    "name": "Gliese 793.1",
    "distanceLy": 71.92,
    "apparentMagnitude": 7.08,
    "spectralClass": "G9V",
    "colorIndex": 0.796,
    "color": "#ffd7a3",
    "positionLy": [
      33.116,
      48.029,
      -42.06
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-109475",
    "name": "Gliese 851.2",
    "distanceLy": 71.92,
    "apparentMagnitude": 6.23,
    "spectralClass": "G5V",
    "colorIndex": 0.648,
    "color": "#ffd7a3",
    "positionLy": [
      48.36,
      -47.544,
      -23.942
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-3490",
    "name": "Gliese 31.5",
    "distanceLy": 71.94,
    "apparentMagnitude": 6.55,
    "spectralClass": "G3V",
    "colorIndex": 0.655,
    "color": "#ffd7a3",
    "positionLy": [
      29.1,
      -65.539,
      5.743
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-75024",
    "name": "Gliese GJ 1191",
    "distanceLy": 72.13,
    "apparentMagnitude": 7.97,
    "spectralClass": "K2V",
    "colorIndex": 0.97,
    "color": "#ffd7a3",
    "positionLy": [
      -44.94,
      -13.343,
      -54.814
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-88075",
    "name": "Gliese 700.2",
    "distanceLy": 72.14,
    "apparentMagnitude": 7.01,
    "spectralClass": "K0V",
    "colorIndex": 0.799,
    "color": "#ffd7a3",
    "positionLy": [
      0.709,
      31.979,
      -64.664
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-103127",
    "name": "Gliese 812.1",
    "distanceLy": 72.21,
    "apparentMagnitude": 6.52,
    "spectralClass": "G0V",
    "colorIndex": 0.587,
    "color": "#fff2d2",
    "positionLy": [
      36.273,
      -50.276,
      -37.018
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-54544",
    "name": "Gliese GJ 3648",
    "distanceLy": 72.22,
    "apparentMagnitude": 7.05,
    "spectralClass": "G8/K0V",
    "colorIndex": 0.76,
    "color": "#ffd7a3",
    "positionLy": [
      -63.423,
      -31.816,
      13.475
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-98105",
    "name": "Gliese 773.3",
    "distanceLy": 72.41,
    "apparentMagnitude": 5.87,
    "spectralClass": "F8V",
    "colorIndex": 0.598,
    "color": "#fff2d2",
    "positionLy": [
      35.605,
      -12.523,
      -61.802
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-78470",
    "name": "Gliese 609.2",
    "distanceLy": 72.46,
    "apparentMagnitude": 7.1,
    "spectralClass": "G8V",
    "colorIndex": 0.771,
    "color": "#ffd7a3",
    "positionLy": [
      -31.757,
      30.915,
      -57.327
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-59092",
    "name": "Gliese GJ 9390A",
    "distanceLy": 72.48,
    "apparentMagnitude": 6.81,
    "spectralClass": "G0...",
    "colorIndex": 0.666,
    "color": "#ffd7a3",
    "positionLy": [
      -70.872,
      -14.892,
      -2.932
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-69479",
    "name": "Syrma",
    "distanceLy": 72.53,
    "apparentMagnitude": 4.07,
    "spectralClass": "F7V",
    "colorIndex": 0.511,
    "color": "#fff2d2",
    "positionLy": [
      -59.796,
      -7.582,
      -40.339
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-106967",
    "name": "Mu-1 Cyg",
    "distanceLy": 72.53,
    "apparentMagnitude": 4.49,
    "spectralClass": "F6V",
    "colorIndex": 0.512,
    "color": "#fff2d2",
    "positionLy": [
      52.742,
      34.877,
      -35.527
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-41366",
    "name": "Gliese 307.1",
    "distanceLy": 72.58,
    "apparentMagnitude": 6.32,
    "spectralClass": "G5V",
    "colorIndex": 0.624,
    "color": "#ffd7a3",
    "positionLy": [
      -30.462,
      51.9,
      40.566
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-85393",
    "name": "Gliese GJ 4010",
    "distanceLy": 72.62,
    "apparentMagnitude": 7.22,
    "spectralClass": "G5",
    "colorIndex": 0.737,
    "color": "#ffd7a3",
    "positionLy": [
      -6.358,
      53.461,
      -48.743
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-102157",
    "name": "Aljanah",
    "distanceLy": 72.71,
    "apparentMagnitude": 2.48,
    "spectralClass": "K0III",
    "colorIndex": 1.021,
    "color": "#ffb17b",
    "positionLy": [
      39.995,
      40.625,
      -45.122
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-76148",
    "name": "Gliese 593A",
    "distanceLy": 72.75,
    "apparentMagnitude": 6.78,
    "spectralClass": "K2V",
    "colorIndex": 0.906,
    "color": "#ffd7a3",
    "positionLy": [
      -32.845,
      46.572,
      -45.223
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-101933",
    "name": "Gliese GJ 4157",
    "distanceLy": 72.75,
    "apparentMagnitude": 6.95,
    "spectralClass": "G3/G5V",
    "colorIndex": 0.671,
    "color": "#ffd7a3",
    "positionLy": [
      41.42,
      -35.741,
      -47.958
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-50776",
    "name": "Gliese GJ 3597",
    "distanceLy": 72.9,
    "apparentMagnitude": 6.92,
    "spectralClass": "G5V",
    "colorIndex": 0.659,
    "color": "#ffd7a3",
    "positionLy": [
      -57.871,
      -36.059,
      25.79
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-76141",
    "name": "Gliese 591",
    "distanceLy": 72.98,
    "apparentMagnitude": 7.65,
    "spectralClass": "K3V",
    "colorIndex": 0.946,
    "color": "#ffd7a3",
    "positionLy": [
      -32.953,
      46.746,
      -45.332
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119433",
    "name": "Mu-2 Cyg",
    "distanceLy": 73.06,
    "apparentMagnitude": 6.09,
    "spectralClass": "G2 V",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      53.132,
      35.137,
      -35.794
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-13738",
    "name": "Gliese 120.1A",
    "distanceLy": 73.28,
    "apparentMagnitude": 7.33,
    "spectralClass": "K1/K2V",
    "colorIndex": 0.863,
    "color": "#ffd7a3",
    "positionLy": [
      47.534,
      -30.934,
      46.405
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118182",
    "name": "Gliese 120.1B",
    "distanceLy": 73.31,
    "apparentMagnitude": 8.2,
    "spectralClass": "unknown",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      47.558,
      -30.944,
      46.423
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-23382",
    "name": "Gliese 186.1A",
    "distanceLy": 73.33,
    "apparentMagnitude": 7.02,
    "spectralClass": "G5V",
    "colorIndex": 0.636,
    "color": "#ffd7a3",
    "positionLy": [
      10.196,
      -60.848,
      39.627
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-83885",
    "name": "Eta Sco",
    "distanceLy": 73.48,
    "apparentMagnitude": 3.32,
    "spectralClass": "F3p",
    "colorIndex": 0.441,
    "color": "#fff2d2",
    "positionLy": [
      -11.094,
      -50.333,
      -52.364
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-8470",
    "name": "Gliese GJ 9061B",
    "distanceLy": 73.59,
    "apparentMagnitude": 6.72,
    "spectralClass": "G0",
    "colorIndex": 0.654,
    "color": "#ffd7a3",
    "positionLy": [
      64.229,
      -13.668,
      33.218
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-1346",
    "name": "Gliese 13",
    "distanceLy": 73.71,
    "apparentMagnitude": 6.84,
    "spectralClass": "G2V",
    "colorIndex": 0.655,
    "color": "#ffd7a3",
    "positionLy": [
      44.594,
      -58.594,
      3.294
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-78499",
    "name": "Gliese GJ 9541B",
    "distanceLy": 73.71,
    "apparentMagnitude": 8.02,
    "spectralClass": "K2V",
    "colorIndex": 0.85,
    "color": "#ffd7a3",
    "positionLy": [
      -34.9,
      -14.632,
      -63.25
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-15061",
    "name": "Gliese GJ 9112",
    "distanceLy": 73.87,
    "apparentMagnitude": 7.83,
    "spectralClass": "K0",
    "colorIndex": 0.861,
    "color": "#ffd7a3",
    "positionLy": [
      48.162,
      11.532,
      54.816
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-86455",
    "name": "Gliese 692.1",
    "distanceLy": 73.87,
    "apparentMagnitude": 7.51,
    "spectralClass": "K0V",
    "colorIndex": 0.752,
    "color": "#ffd7a3",
    "positionLy": [
      -5.012,
      27.206,
      -68.5
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-36109",
    "name": "Gliese 275",
    "distanceLy": 73.96,
    "apparentMagnitude": 6.72,
    "spectralClass": "G5IV-V",
    "colorIndex": 0.694,
    "color": "#ffd7a3",
    "positionLy": [
      -17.176,
      -57.802,
      42.822
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-76835",
    "name": "Unukalhai",
    "distanceLy": 73.96,
    "apparentMagnitude": 2.63,
    "spectralClass": "K2III",
    "colorIndex": 1.167,
    "color": "#ffb17b",
    "positionLy": [
      -41.026,
      8.277,
      -60.977
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-111099",
    "name": "Ups Aqr",
    "distanceLy": 73.98,
    "apparentMagnitude": 5.21,
    "spectralClass": "F7V",
    "colorIndex": 0.446,
    "color": "#fff2d2",
    "positionLy": [
      64.457,
      -26.158,
      -25.165
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-66040",
    "name": "Heze",
    "distanceLy": 74.08,
    "apparentMagnitude": 3.38,
    "spectralClass": "A3V",
    "colorIndex": 0.114,
    "color": "#c7ddff",
    "positionLy": [
      -67.838,
      -0.77,
      -29.741
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-89196",
    "name": "Gliese 708.4",
    "distanceLy": 74.43,
    "apparentMagnitude": 6.3,
    "spectralClass": "G2V",
    "colorIndex": 0.641,
    "color": "#ffd7a3",
    "positionLy": [
      3.553,
      52.821,
      -52.316
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-86347",
    "name": "Dziban",
    "distanceLy": 74.48,
    "apparentMagnitude": 4.57,
    "spectralClass": "F5IV-V",
    "colorIndex": 0.434,
    "color": "#fff2d2",
    "positionLy": [
      -1.797,
      70.896,
      -22.761
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-49934",
    "name": "Gliese 385.1",
    "distanceLy": 74.52,
    "apparentMagnitude": 6.38,
    "spectralClass": "G0V",
    "colorIndex": 0.592,
    "color": "#fff2d2",
    "positionLy": [
      -55.837,
      -40.62,
      28.019
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-42581",
    "name": "Gliese 319.1A",
    "distanceLy": 74.58,
    "apparentMagnitude": 8.11,
    "spectralClass": "K2V",
    "colorIndex": 0.904,
    "color": "#ffd7a3",
    "positionLy": [
      -35.489,
      -50.799,
      41.507
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-109181",
    "name": "Gliese 850",
    "distanceLy": 74.69,
    "apparentMagnitude": 7.23,
    "spectralClass": "K0",
    "colorIndex": 0.812,
    "color": "#ffd7a3",
    "positionLy": [
      53.565,
      44.169,
      -27.529
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-51103",
    "name": "Gliese 392A",
    "distanceLy": 74.72,
    "apparentMagnitude": 6.42,
    "spectralClass": "G1V",
    "colorIndex": 0.61,
    "color": "#ffd7a3",
    "positionLy": [
      -45.324,
      56.208,
      19.224
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-72377",
    "name": "Alp-1 Lib",
    "distanceLy": 74.94,
    "apparentMagnitude": 5.15,
    "spectralClass": "F3V",
    "colorIndex": 0.401,
    "color": "#fff2d2",
    "positionLy": [
      -52.968,
      -20.654,
      -48.829
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119271",
    "name": "Gliese GJ 9648A",
    "distanceLy": 74.98,
    "apparentMagnitude": 6.57,
    "spectralClass": "G6 V",
    "colorIndex": 0.65,
    "color": "#ffd7a3",
    "positionLy": [
      14.954,
      57.309,
      -45.965
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-76035",
    "name": "Alphecca",
    "distanceLy": 75.05,
    "apparentMagnitude": 2.22,
    "spectralClass": "A0V",
    "colorIndex": 0.032,
    "color": "#c7ddff",
    "positionLy": [
      -39.713,
      33.737,
      -54.007
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-12928",
    "name": "Koeia",
    "distanceLy": 75.06,
    "apparentMagnitude": 10.25,
    "spectralClass": "M0",
    "colorIndex": 1.389,
    "color": "#ffb17b",
    "positionLy": [
      51.575,
      -29.435,
      45.917
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-84121",
    "name": "Sarin",
    "distanceLy": 75.13,
    "apparentMagnitude": 3.12,
    "spectralClass": "A3IVv SB",
    "colorIndex": 0.08,
    "color": "#c7ddff",
    "positionLy": [
      -13.292,
      31.561,
      -66.874
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-114634",
    "name": "Gam Tuc",
    "distanceLy": 75.2,
    "apparentMagnitude": 3.99,
    "spectralClass": "F1III",
    "colorIndex": 0.41,
    "color": "#fff2d2",
    "positionLy": [
      38.908,
      -63.94,
      -7.311
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-86353",
    "name": "Dziban B",
    "distanceLy": 75.22,
    "apparentMagnitude": 5.81,
    "spectralClass": "G0V",
    "colorIndex": 0.53,
    "color": "#fff2d2",
    "positionLy": [
      -1.812,
      71.602,
      -22.977
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-10518",
    "name": "Gliese 91.2A",
    "distanceLy": 75.5,
    "apparentMagnitude": 7.94,
    "spectralClass": "K3V",
    "colorIndex": 1.033,
    "color": "#ffb17b",
    "positionLy": [
      59.488,
      -23.629,
      40.038
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-85939",
    "name": "Ome Dra",
    "distanceLy": 75.55,
    "apparentMagnitude": 4.77,
    "spectralClass": "F5V",
    "colorIndex": 0.43,
    "color": "#fff2d2",
    "positionLy": [
      -2.748,
      70.418,
      -27.234
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-8481",
    "name": "Chi Cet",
    "distanceLy": 75.62,
    "apparentMagnitude": 4.66,
    "spectralClass": "F3III",
    "colorIndex": 0.333,
    "color": "#fff2d2",
    "positionLy": [
      65.976,
      -14.023,
      34.193
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-72396",
    "name": "Zubenelgenubi",
    "distanceLy": 75.8,
    "apparentMagnitude": 2.75,
    "spectralClass": "A3IV",
    "colorIndex": 0.147,
    "color": "#c7ddff",
    "positionLy": [
      -53.518,
      -20.945,
      -49.419
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-1496",
    "name": "Gliese 16.1",
    "distanceLy": 75.81,
    "apparentMagnitude": 6.47,
    "spectralClass": "G0V",
    "colorIndex": 0.674,
    "color": "#ffd7a3",
    "positionLy": [
      74.817,
      -10.621,
      6.118
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-56639",
    "name": "Gliese 433.2A",
    "distanceLy": 75.83,
    "apparentMagnitude": 6.29,
    "spectralClass": "G0V",
    "colorIndex": 0.566,
    "color": "#fff2d2",
    "positionLy": [
      -53.29,
      53.723,
      4.956
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118515",
    "name": "Kaewkosin",
    "distanceLy": 75.85,
    "apparentMagnitude": 12.33,
    "spectralClass": "m",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -36.317,
      20.133,
      63.474
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118527",
    "name": "Maru",
    "distanceLy": 75.85,
    "apparentMagnitude": 13.92,
    "spectralClass": "DQ5",
    "colorIndex": 0.05,
    "color": "#c7ddff",
    "positionLy": [
      -16.028,
      -69.453,
      25.935
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118567",
    "name": "Gliese GJ 3516",
    "distanceLy": 75.85,
    "apparentMagnitude": 7.6,
    "spectralClass": "G0",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -42.267,
      43.316,
      45.722
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119127",
    "name": "Alrakis",
    "distanceLy": 75.85,
    "apparentMagnitude": 5.63,
    "spectralClass": "F7 V",
    "colorIndex": 0.47,
    "color": "#fff2d2",
    "positionLy": [
      -10.417,
      61.725,
      -42.83
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-39667",
    "name": "Mu-2 Cnc",
    "distanceLy": 75.96,
    "apparentMagnitude": 5.3,
    "spectralClass": "G2IV",
    "colorIndex": 0.642,
    "color": "#ffd7a3",
    "positionLy": [
      -37.367,
      27.939,
      59.936
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-116247",
    "name": "Gliese GJ 4351",
    "distanceLy": 76.1,
    "apparentMagnitude": 6.58,
    "spectralClass": "G5",
    "colorIndex": 0.665,
    "color": "#ffd7a3",
    "positionLy": [
      52.428,
      54.924,
      -5.054
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-69135",
    "name": "Gliese GJ 3827",
    "distanceLy": 76.28,
    "apparentMagnitude": 7.93,
    "spectralClass": "K1V",
    "colorIndex": 0.865,
    "color": "#ffd7a3",
    "positionLy": [
      -62.468,
      -16.654,
      -40.478
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-72778",
    "name": "Gliese 569.1",
    "distanceLy": 76.28,
    "apparentMagnitude": 7.77,
    "spectralClass": "K1V",
    "colorIndex": 0.785,
    "color": "#ffd7a3",
    "positionLy": [
      -32.609,
      61.457,
      -31.267
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-13608",
    "name": "Gliese 118.2A",
    "distanceLy": 76.62,
    "apparentMagnitude": 7.52,
    "spectralClass": "K2",
    "colorIndex": 0.953,
    "color": "#ffd7a3",
    "positionLy": [
      49.234,
      34.632,
      47.4
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-29359",
    "name": "Gliese GJ 3387",
    "distanceLy": 76.65,
    "apparentMagnitude": 6.85,
    "spectralClass": "G4V",
    "colorIndex": 0.642,
    "color": "#ffd7a3",
    "positionLy": [
      -3.987,
      9.053,
      76.01
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-105571",
    "name": "Gliese 828A",
    "distanceLy": 76.67,
    "apparentMagnitude": 7.49,
    "spectralClass": "K0V",
    "colorIndex": 0.876,
    "color": "#ffd7a3",
    "positionLy": [
      42.721,
      -54.033,
      -33.672
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-28195",
    "name": "Gliese GJ 3376A",
    "distanceLy": 76.81,
    "apparentMagnitude": 6.99,
    "spectralClass": "G0",
    "colorIndex": 0.72,
    "color": "#ffd7a3",
    "positionLy": [
      0.548,
      -6.228,
      76.56
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-87902",
    "name": "Zet Ser",
    "distanceLy": 76.81,
    "apparentMagnitude": 4.62,
    "spectralClass": "F3V",
    "colorIndex": 0.39,
    "color": "#fff2d2",
    "positionLy": [
      0.162,
      -4.944,
      -76.654
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-79252",
    "name": "Gliese 615.1A",
    "distanceLy": 76.92,
    "apparentMagnitude": 6.68,
    "spectralClass": "G8V",
    "colorIndex": 0.764,
    "color": "#ffd7a3",
    "positionLy": [
      -33.573,
      17.993,
      -66.831
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-19185",
    "name": "Gliese 162.1",
    "distanceLy": 77.07,
    "apparentMagnitude": 6.37,
    "spectralClass": "G3V",
    "colorIndex": 0.636,
    "color": "#ffd7a3",
    "positionLy": [
      15.818,
      -69.4,
      29.549
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-111763",
    "name": "Gliese 871A",
    "distanceLy": 77.09,
    "apparentMagnitude": 5.99,
    "spectralClass": "G0",
    "colorIndex": 0.584,
    "color": "#fff2d2",
    "positionLy": [
      49.409,
      -56.572,
      -17.348
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118074",
    "name": "Gliese 60B",
    "distanceLy": 77.12,
    "apparentMagnitude": 8,
    "spectralClass": "K4 V",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      61.189,
      -38.456,
      26.929
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-23731",
    "name": "Gliese GJ 3330",
    "distanceLy": 77.21,
    "apparentMagnitude": 7.74,
    "spectralClass": "K0V",
    "colorIndex": 0.804,
    "color": "#ffd7a3",
    "positionLy": [
      17.232,
      19.263,
      72.762
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-55476",
    "name": "Iot Leo",
    "distanceLy": 77.21,
    "apparentMagnitude": 4,
    "spectralClass": "F2IV SB",
    "colorIndex": 0.423,
    "color": "#fff2d2",
    "positionLy": [
      -74.976,
      14.11,
      11.9
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-114017",
    "name": "Gliese GJ 4315A",
    "distanceLy": 77.23,
    "apparentMagnitude": 7.91,
    "spectralClass": "K0Ve",
    "colorIndex": 0.9,
    "color": "#ffd7a3",
    "positionLy": [
      50.492,
      57.358,
      -11.204
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-38954",
    "name": "Gliese GJ 3471",
    "distanceLy": 77.38,
    "apparentMagnitude": 7.68,
    "spectralClass": "K0V",
    "colorIndex": 0.833,
    "color": "#ffd7a3",
    "positionLy": [
      -36.039,
      27.533,
      62.695
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-6903",
    "name": "Gliese 58.2",
    "distanceLy": 77.42,
    "apparentMagnitude": 7.74,
    "spectralClass": "K2V",
    "colorIndex": 0.966,
    "color": "#ffd7a3",
    "positionLy": [
      66.554,
      28.654,
      27.256
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-70650",
    "name": "Gliese GJ 3852",
    "distanceLy": 77.43,
    "apparentMagnitude": 6.36,
    "spectralClass": "G5V",
    "colorIndex": 0.702,
    "color": "#ffd7a3",
    "positionLy": [
      -45.859,
      51.609,
      -35.066
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-2069",
    "name": "Kap Phe",
    "distanceLy": 77.66,
    "apparentMagnitude": 3.93,
    "spectralClass": "A7V",
    "colorIndex": 0.175,
    "color": "#c7ddff",
    "positionLy": [
      55.795,
      -53.632,
      6.407
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-116050",
    "name": "Gliese GJ 4343",
    "distanceLy": 77.66,
    "apparentMagnitude": 7.9,
    "spectralClass": "G5",
    "colorIndex": 0.845,
    "color": "#ffd7a3",
    "positionLy": [
      66.069,
      40.183,
      -7.111
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-62310",
    "name": "Gliese GJ 1165",
    "distanceLy": 77.73,
    "apparentMagnitude": 7.93,
    "spectralClass": "K2V",
    "colorIndex": 0.946,
    "color": "#ffd7a3",
    "positionLy": [
      -73.151,
      -21.059,
      -15.728
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-92892",
    "name": "Gliese GJ 9639",
    "distanceLy": 77.77,
    "apparentMagnitude": 6.8,
    "spectralClass": "G0",
    "colorIndex": 0.606,
    "color": "#ffd7a3",
    "positionLy": [
      17.073,
      39.095,
      -65.02
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-73014",
    "name": "Gliese 570.1",
    "distanceLy": 77.79,
    "apparentMagnitude": 6.34,
    "spectralClass": "G5V",
    "colorIndex": 0.708,
    "color": "#ffd7a3",
    "positionLy": [
      -36.476,
      -58.584,
      -35.891
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119408",
    "name": "Gliese GJ 9733B",
    "distanceLy": 77.84,
    "apparentMagnitude": 6.9,
    "spectralClass": "A7 V",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      35.492,
      -62.532,
      -29.818
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-88348",
    "name": "Gliese 702.2",
    "distanceLy": 77.99,
    "apparentMagnitude": 6.8,
    "spectralClass": "G0V",
    "colorIndex": 0.61,
    "color": "#ffd7a3",
    "positionLy": [
      1.907,
      6.332,
      -77.706
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-85548",
    "name": "Gliese 679",
    "distanceLy": 78.01,
    "apparentMagnitude": 6.52,
    "spectralClass": "G5V",
    "colorIndex": 0.639,
    "color": "#ffd7a3",
    "positionLy": [
      -7.852,
      43.927,
      -63.984
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-35774",
    "name": "Gliese GJ 2057",
    "distanceLy": 78.18,
    "apparentMagnitude": 8.19,
    "spectralClass": "G5",
    "colorIndex": 0.959,
    "color": "#ffd7a3",
    "positionLy": [
      -27.236,
      17.539,
      71.151
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-90217",
    "name": "Kaus Borealis",
    "distanceLy": 78.18,
    "apparentMagnitude": 2.82,
    "spectralClass": "K1IIIb",
    "colorIndex": 1.025,
    "color": "#ffb17b",
    "positionLy": [
      8.596,
      -33.559,
      -70.081
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-42214",
    "name": "Gliese GJ 9273",
    "distanceLy": 78.2,
    "apparentMagnitude": 6.74,
    "spectralClass": "G0",
    "colorIndex": 0.655,
    "color": "#ffd7a3",
    "positionLy": [
      -49.346,
      -9.268,
      59.948
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-114526",
    "name": "Gliese GJ 4320",
    "distanceLy": 78.35,
    "apparentMagnitude": 8.07,
    "spectralClass": "K2V",
    "colorIndex": 0.871,
    "color": "#ffd7a3",
    "positionLy": [
      66.166,
      39.964,
      -12.771
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-62317",
    "name": "Gliese GJ 9417",
    "distanceLy": 78.42,
    "apparentMagnitude": 5.83,
    "spectralClass": "F5V",
    "colorIndex": 0.467,
    "color": "#fff2d2",
    "positionLy": [
      -37.959,
      68.133,
      -8.182
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-12126",
    "name": "Gliese GJ 9087",
    "distanceLy": 78.71,
    "apparentMagnitude": 8.1,
    "spectralClass": "K0",
    "colorIndex": 0.944,
    "color": "#ffd7a3",
    "positionLy": [
      60.923,
      -4.333,
      49.641
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-43673",
    "name": "Gliese GJ 3519",
    "distanceLy": 78.78,
    "apparentMagnitude": 5.7,
    "spectralClass": "F6V",
    "colorIndex": 0.481,
    "color": "#fff2d2",
    "positionLy": [
      -31.302,
      -64.507,
      32.643
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118887",
    "name": "Zet UMa",
    "distanceLy": 78.78,
    "apparentMagnitude": 3.95,
    "spectralClass": "A1 m",
    "colorIndex": 0.13,
    "color": "#c7ddff",
    "positionLy": [
      -42.273,
      64.47,
      -16.215
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-102002",
    "name": "Eta Ind",
    "distanceLy": 78.84,
    "apparentMagnitude": 4.51,
    "spectralClass": "A6:var",
    "colorIndex": 0.278,
    "color": "#fff2d2",
    "positionLy": [
      31.906,
      -62.059,
      -36.691
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-15093",
    "name": "Gliese 132",
    "distanceLy": 78.9,
    "apparentMagnitude": 6.75,
    "spectralClass": "G3V",
    "colorIndex": 0.586,
    "color": "#fff2d2",
    "positionLy": [
      36.335,
      -56.431,
      41.471
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-92567",
    "name": "Gliese GJ 4087",
    "distanceLy": 78.95,
    "apparentMagnitude": 7.98,
    "spectralClass": "K1V",
    "colorIndex": 0.857,
    "color": "#ffd7a3",
    "positionLy": [
      14.972,
      -48.061,
      -60.823
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-14250",
    "name": "Gliese GJ 3194A",
    "distanceLy": 79.03,
    "apparentMagnitude": 6.64,
    "spectralClass": "G4V",
    "colorIndex": 0.634,
    "color": "#ffd7a3",
    "positionLy": [
      26.003,
      69.588,
      26.965
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-49528",
    "name": "Regulus",
    "distanceLy": 79.3,
    "apparentMagnitude": 1.36,
    "spectralClass": "B7V",
    "colorIndex": -0.087,
    "color": "#c7ddff",
    "positionLy": [
      -68.554,
      16.443,
      36.308
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119058",
    "name": "Graffias",
    "distanceLy": 79.36,
    "apparentMagnitude": 4.84,
    "spectralClass": "F6 IV-V",
    "colorIndex": 0.45,
    "color": "#fff2d2",
    "positionLy": [
      -37.606,
      -15.65,
      -68.099
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119059",
    "name": "Xi Sco",
    "distanceLy": 79.36,
    "apparentMagnitude": 5,
    "spectralClass": "F6 IV-V",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -37.606,
      -15.65,
      -68.1
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119060",
    "name": "Gliese GJ 9540C",
    "distanceLy": 79.36,
    "apparentMagnitude": 7.3,
    "spectralClass": "G8 V",
    "colorIndex": 0.75,
    "color": "#ffd7a3",
    "positionLy": [
      -37.606,
      -15.647,
      -68.1
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119071",
    "name": "Gliese 615.1B",
    "distanceLy": 79.45,
    "apparentMagnitude": 7.5,
    "spectralClass": "G8 V",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -34.682,
      18.585,
      -69.03
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-32280",
    "name": "Gliese 245.1",
    "distanceLy": 79.51,
    "apparentMagnitude": 5.92,
    "spectralClass": "F7V",
    "colorIndex": 0.491,
    "color": "#fff2d2",
    "positionLy": [
      -13.295,
      -41.892,
      66.261
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118054",
    "name": "Gliese 54.2B",
    "distanceLy": 79.53,
    "apparentMagnitude": 7.85,
    "spectralClass": "K1 V",
    "colorIndex": 0.78,
    "color": "#ffd7a3",
    "positionLy": [
      74.667,
      -10.945,
      25.117
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118324",
    "name": "Gliese GJ 9160B",
    "distanceLy": 79.55,
    "apparentMagnitude": 7.3,
    "spectralClass": "unknown",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      26.941,
      -19.652,
      72.223
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119336",
    "name": "Gliese GJ 4138",
    "distanceLy": 79.55,
    "apparentMagnitude": 7.95,
    "spectralClass": "G8 V",
    "colorIndex": 0.86,
    "color": "#ffd7a3",
    "positionLy": [
      33.822,
      49.411,
      -52.371
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-12673",
    "name": "Kaffaljidhma",
    "distanceLy": 79.61,
    "apparentMagnitude": 3.47,
    "spectralClass": "A3V",
    "colorIndex": 0.093,
    "color": "#c7ddff",
    "positionLy": [
      60.144,
      4.494,
      51.961
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-104846",
    "name": "Gliese 825.2",
    "distanceLy": 79.65,
    "apparentMagnitude": 6.75,
    "spectralClass": "G5V",
    "colorIndex": 0.637,
    "color": "#ffd7a3",
    "positionLy": [
      44.127,
      -54.659,
      -37.537
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-53754",
    "name": "Merak",
    "distanceLy": 79.74,
    "apparentMagnitude": 2.34,
    "spectralClass": "A1V",
    "colorIndex": 0.033,
    "color": "#c7ddff",
    "positionLy": [
      -42.736,
      66.407,
      11.084
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-94042",
    "name": "Gliese GJ 9648B",
    "distanceLy": 79.74,
    "apparentMagnitude": 5.85,
    "spectralClass": "G4V+...",
    "colorIndex": 0.666,
    "color": "#ffd7a3",
    "positionLy": [
      15.905,
      60.958,
      -48.89
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118562",
    "name": "Gliese 321.3B",
    "distanceLy": 79.74,
    "apparentMagnitude": 5,
    "spectralClass": "unknown",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -30.332,
      -65.089,
      34.679
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-13354",
    "name": "Gliese GJ 3187",
    "distanceLy": 79.88,
    "apparentMagnitude": 8.09,
    "spectralClass": "K1V",
    "colorIndex": 0.827,
    "color": "#ffd7a3",
    "positionLy": [
      48.681,
      -44.033,
      45.526
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-59099",
    "name": "Gliese GJ 3706",
    "distanceLy": 80,
    "apparentMagnitude": 7.46,
    "spectralClass": "K0V",
    "colorIndex": 0.794,
    "color": "#ffd7a3",
    "positionLy": [
      -61.002,
      51.691,
      -2.562
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-80679",
    "name": "Gliese 629",
    "distanceLy": 80,
    "apparentMagnitude": 7.24,
    "spectralClass": "K0V",
    "colorIndex": 0.858,
    "color": "#ffd7a3",
    "positionLy": [
      -23.411,
      -50.357,
      -57.582
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-117794",
    "name": "Gliese GJ 4382",
    "distanceLy": 80,
    "apparentMagnitude": 6.72,
    "spectralClass": "G5",
    "colorIndex": 0.694,
    "color": "#ffd7a3",
    "positionLy": [
      50.94,
      61.683,
      -0.419
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118589",
    "name": "Ross 686",
    "distanceLy": 80,
    "apparentMagnitude": 12.68,
    "spectralClass": "dM4",
    "colorIndex": 1.47,
    "color": "#ffb17b",
    "positionLy": [
      -56.533,
      7.308,
      56.12
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-13048",
    "name": "Gliese 113A",
    "distanceLy": 80.35,
    "apparentMagnitude": 7.56,
    "spectralClass": "K1V",
    "colorIndex": 0.82,
    "color": "#ffd7a3",
    "positionLy": [
      53.142,
      36.566,
      47.913
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-60805",
    "name": "Gliese 469.2A",
    "distanceLy": 80.39,
    "apparentMagnitude": 6.37,
    "spectralClass": "G1/G2V",
    "colorIndex": 0.591,
    "color": "#fff2d2",
    "positionLy": [
      -77.535,
      -18.622,
      -10.235
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-101654",
    "name": "Phi-2 Pav",
    "distanceLy": 80.43,
    "apparentMagnitude": 5.11,
    "spectralClass": "F8V",
    "colorIndex": 0.544,
    "color": "#fff2d2",
    "positionLy": [
      25.426,
      -70.038,
      -30.29
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-37498",
    "name": "Gliese 284",
    "distanceLy": 80.47,
    "apparentMagnitude": 5.04,
    "spectralClass": "G5IV",
    "colorIndex": 0.765,
    "color": "#ffd7a3",
    "positionLy": [
      -24.636,
      -57.075,
      51.103
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-59592",
    "name": "Megrez",
    "distanceLy": 80.51,
    "apparentMagnitude": 3.32,
    "spectralClass": "A3Vvar",
    "colorIndex": 0.077,
    "color": "#c7ddff",
    "positionLy": [
      -43.712,
      67.548,
      -2.947
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-42794",
    "name": "Alsephina",
    "distanceLy": 80.55,
    "apparentMagnitude": 1.93,
    "spectralClass": "A1V",
    "colorIndex": 0.043,
    "color": "#c7ddff",
    "positionLy": [
      -30.639,
      -65.749,
      35.029
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-28288",
    "name": "Menkalinan",
    "distanceLy": 81.11,
    "apparentMagnitude": 1.9,
    "spectralClass": "A2V",
    "colorIndex": 0.077,
    "color": "#c7ddff",
    "positionLy": [
      0.118,
      57.303,
      57.408
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-45831",
    "name": "Gliese GJ 1124",
    "distanceLy": 81.34,
    "apparentMagnitude": 7.69,
    "spectralClass": "K2V",
    "colorIndex": 0.987,
    "color": "#ffd7a3",
    "positionLy": [
      -48.009,
      52.499,
      39.424
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-3163",
    "name": "Gliese 29",
    "distanceLy": 81.4,
    "apparentMagnitude": 5.89,
    "spectralClass": "G1V",
    "colorIndex": 0.564,
    "color": "#fff2d2",
    "positionLy": [
      40.725,
      -70.101,
      7.259
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-9250",
    "name": "Gliese 82.1",
    "distanceLy": 81.48,
    "apparentMagnitude": 7.14,
    "spectralClass": "G5",
    "colorIndex": 0.773,
    "color": "#ffd7a3",
    "positionLy": [
      59.168,
      44.625,
      33.855
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118302",
    "name": "Gliese GJ 9155B",
    "distanceLy": 81.54,
    "apparentMagnitude": 7.3,
    "spectralClass": "G6 V",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      17.992,
      -68.439,
      40.508
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-39598",
    "name": "Gliese 296.1",
    "distanceLy": 81.56,
    "apparentMagnitude": 6.8,
    "spectralClass": "G2V",
    "colorIndex": 0.6,
    "color": "#ffd7a3",
    "positionLy": [
      -37.392,
      -40.041,
      60.419
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-95279",
    "name": "Gliese GJ 1237",
    "distanceLy": 81.58,
    "apparentMagnitude": 8.01,
    "spectralClass": "K3V",
    "colorIndex": 0.929,
    "color": "#ffd7a3",
    "positionLy": [
      19.524,
      62,
      -49.292
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-81564",
    "name": "Gliese 637.1",
    "distanceLy": 81.6,
    "apparentMagnitude": 7.56,
    "spectralClass": "K1V",
    "colorIndex": 0.769,
    "color": "#ffd7a3",
    "positionLy": [
      -10.078,
      75.713,
      -28.716
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-24726",
    "name": "Gliese 198",
    "distanceLy": 81.62,
    "apparentMagnitude": 5.96,
    "spectralClass": "G0V",
    "colorIndex": 0.572,
    "color": "#fff2d2",
    "positionLy": [
      13.856,
      -25.399,
      76.322
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-65272",
    "name": "Alcor",
    "distanceLy": 81.72,
    "apparentMagnitude": 3.99,
    "spectralClass": "A5V SB",
    "colorIndex": 0.169,
    "color": "#c7ddff",
    "positionLy": [
      -43.683,
      66.933,
      -17.037
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-51784",
    "name": "Gliese 398.1",
    "distanceLy": 81.78,
    "apparentMagnitude": 5.71,
    "spectralClass": "F7V",
    "colorIndex": 0.528,
    "color": "#fff2d2",
    "positionLy": [
      -74.686,
      -17.325,
      28.468
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-40054",
    "name": "Tegmine",
    "distanceLy": 81.8,
    "apparentMagnitude": 4.67,
    "spectralClass": "G0V",
    "colorIndex": 0.531,
    "color": "#fff2d2",
    "positionLy": [
      -42.518,
      24.8,
      65.339
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-86475",
    "name": "Cebalrai",
    "distanceLy": 81.85,
    "apparentMagnitude": 2.76,
    "spectralClass": "K2III",
    "colorIndex": 1.168,
    "color": "#ffb17b",
    "positionLy": [
      -5.878,
      6.517,
      -81.374
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-60910",
    "name": "Gliese GJ 1160",
    "distanceLy": 81.87,
    "apparentMagnitude": 8.08,
    "spectralClass": "K2V",
    "colorIndex": 0.941,
    "color": "#ffd7a3",
    "positionLy": [
      -46.381,
      67.158,
      -6.377
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-72873",
    "name": "Gliese GJ 3880",
    "distanceLy": 81.89,
    "apparentMagnitude": 5.63,
    "spectralClass": "F7V",
    "colorIndex": 0.533,
    "color": "#fff2d2",
    "positionLy": [
      -38.093,
      62.386,
      -36.909
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-95956",
    "name": "Gliese GJ 4116",
    "distanceLy": 81.91,
    "apparentMagnitude": 5.71,
    "spectralClass": "F7V",
    "colorIndex": 0.475,
    "color": "#fff2d2",
    "positionLy": [
      20.517,
      63.866,
      -47
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-42053",
    "name": "Gliese 310.1A",
    "distanceLy": 81.95,
    "apparentMagnitude": 5.91,
    "spectralClass": "F8V",
    "colorIndex": 0.53,
    "color": "#fff2d2",
    "positionLy": [
      -51.187,
      9.448,
      63.296
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118166",
    "name": "Gliese 106.1B",
    "distanceLy": 81.99,
    "apparentMagnitude": 6.3,
    "spectralClass": "dF3",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      61.944,
      4.63,
      53.512
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-22734",
    "name": "Gliese GJ 3319",
    "distanceLy": 82.07,
    "apparentMagnitude": 7.6,
    "spectralClass": "K0V",
    "colorIndex": 0.792,
    "color": "#ffd7a3",
    "positionLy": [
      18.98,
      -47.548,
      64.147
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-6692",
    "name": "Rho Psc",
    "distanceLy": 82.24,
    "apparentMagnitude": 5.35,
    "spectralClass": "F2V:var",
    "colorIndex": 0.395,
    "color": "#fff2d2",
    "positionLy": [
      72.24,
      27.008,
      28.549
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-15403",
    "name": "Gliese 135",
    "distanceLy": 82.26,
    "apparentMagnitude": 7.05,
    "spectralClass": "G0",
    "colorIndex": 0.655,
    "color": "#ffd7a3",
    "positionLy": [
      53.076,
      -4.08,
      62.713
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-55539",
    "name": "Gam Crt",
    "distanceLy": 82.32,
    "apparentMagnitude": 4.06,
    "spectralClass": "A9V",
    "colorIndex": 0.216,
    "color": "#c7ddff",
    "positionLy": [
      -77.512,
      -25.006,
      11.971
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-32679",
    "name": "Gliese 249.1",
    "distanceLy": 82.38,
    "apparentMagnitude": 5.14,
    "spectralClass": "F5III",
    "colorIndex": 0.46,
    "color": "#fff2d2",
    "positionLy": [
      -12.227,
      -59.873,
      55.253
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-78498",
    "name": "Gliese GJ 9541A",
    "distanceLy": 82.38,
    "apparentMagnitude": 7.44,
    "spectralClass": "G8V comp",
    "colorIndex": 0.75,
    "color": "#ffd7a3",
    "positionLy": [
      -39.012,
      -16.353,
      -70.693
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-42797",
    "name": "Gliese 321.2",
    "distanceLy": 82.43,
    "apparentMagnitude": 7.2,
    "spectralClass": "G5V",
    "colorIndex": 0.743,
    "color": "#ffd7a3",
    "positionLy": [
      -39.932,
      -55.828,
      45.635
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-36689",
    "name": "Gliese 279",
    "distanceLy": 82.51,
    "apparentMagnitude": 4.44,
    "spectralClass": "F6V",
    "colorIndex": 0.521,
    "color": "#fff2d2",
    "positionLy": [
      -30.457,
      -31.304,
      70.003
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-64327",
    "name": "Gliese 503.2",
    "distanceLy": 82.51,
    "apparentMagnitude": 6.82,
    "spectralClass": "G1V",
    "colorIndex": 0.603,
    "color": "#ffd7a3",
    "positionLy": [
      -42.972,
      68.967,
      -14.299
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-62757",
    "name": "Alioth",
    "distanceLy": 82.55,
    "apparentMagnitude": 1.76,
    "spectralClass": "A0p",
    "colorIndex": -0.022,
    "color": "#c7ddff",
    "positionLy": [
      -44.931,
      68.405,
      -10.793
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-58628",
    "name": "Gliese GJ 3701",
    "distanceLy": 82.59,
    "apparentMagnitude": 5.15,
    "spectralClass": "F6V",
    "colorIndex": 0.417,
    "color": "#fff2d2",
    "positionLy": [
      -60.951,
      -55.729,
      -0.973
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-66493",
    "name": "Gliese 521.2A",
    "distanceLy": 82.61,
    "apparentMagnitude": 6.31,
    "spectralClass": "F7.7V",
    "colorIndex": 0.537,
    "color": "#fff2d2",
    "positionLy": [
      -47.568,
      63.764,
      -22.279
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-74377",
    "name": "Gliese 580.2",
    "distanceLy": 82.65,
    "apparentMagnitude": 5.15,
    "spectralClass": "F9IV",
    "colorIndex": 0.55,
    "color": "#fff2d2",
    "positionLy": [
      -21.027,
      76.277,
      -23.901
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-94686",
    "name": "Gliese 754.2",
    "distanceLy": 82.8,
    "apparentMagnitude": 6.29,
    "spectralClass": "G8V",
    "colorIndex": 0.676,
    "color": "#ffd7a3",
    "positionLy": [
      22.424,
      50.212,
      -61.904
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-21223",
    "name": "Gliese GJ 3295",
    "distanceLy": 82.84,
    "apparentMagnitude": 7.75,
    "spectralClass": "G0",
    "colorIndex": 0.759,
    "color": "#ffd7a3",
    "positionLy": [
      13.021,
      74.856,
      33.016
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-110823",
    "name": "Gliese 862.1",
    "distanceLy": 82.89,
    "apparentMagnitude": 6.15,
    "spectralClass": "F7V",
    "colorIndex": 0.565,
    "color": "#fff2d2",
    "positionLy": [
      76.254,
      -9.462,
      -31.078
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-117175",
    "name": "Gliese GJ 1291A",
    "distanceLy": 82.95,
    "apparentMagnitude": 7.88,
    "spectralClass": "K1V",
    "colorIndex": 0.839,
    "color": "#ffd7a3",
    "positionLy": [
      72.2,
      -40.722,
      -3.074
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-93452",
    "name": "Okab",
    "distanceLy": 83.03,
    "apparentMagnitude": 2.99,
    "spectralClass": "A0Vn",
    "colorIndex": 0.014,
    "color": "#c7ddff",
    "positionLy": [
      22.697,
      19.895,
      -77.353
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-2705",
    "name": "Gliese 22.2",
    "distanceLy": 83.12,
    "apparentMagnitude": 5.57,
    "spectralClass": "F3IV-V",
    "colorIndex": 0.472,
    "color": "#fff2d2",
    "positionLy": [
      50.173,
      -65.831,
      7.602
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-26436",
    "name": "Gliese GJ 3360A",
    "distanceLy": 83.16,
    "apparentMagnitude": 7.33,
    "spectralClass": "G5",
    "colorIndex": 0.769,
    "color": "#ffd7a3",
    "positionLy": [
      5.487,
      -59.928,
      57.396
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-57828",
    "name": "Phecda",
    "distanceLy": 83.18,
    "apparentMagnitude": 2.41,
    "spectralClass": "A0V SB",
    "colorIndex": 0.044,
    "color": "#c7ddff",
    "positionLy": [
      -49.233,
      67.034,
      1.326
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-17107",
    "name": "Gliese 147.1",
    "distanceLy": 83.37,
    "apparentMagnitude": 6.68,
    "spectralClass": "F9V",
    "colorIndex": 0.554,
    "color": "#fff2d2",
    "positionLy": [
      47.638,
      -4.679,
      68.267
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-9694",
    "name": "Gliese GJ 3133",
    "distanceLy": 83.5,
    "apparentMagnitude": 7.79,
    "spectralClass": "K0V",
    "colorIndex": 0.832,
    "color": "#ffd7a3",
    "positionLy": [
      68.732,
      -22.565,
      41.703
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-28836",
    "name": "Gliese 226.3",
    "distanceLy": 83.57,
    "apparentMagnitude": 6.12,
    "spectralClass": "G0V",
    "colorIndex": 0.6,
    "color": "#ffd7a3",
    "positionLy": [
      -1.826,
      48.393,
      68.102
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118448",
    "name": "Gliese GJ 9220B",
    "distanceLy": 83.63,
    "apparentMagnitude": 7.68,
    "spectralClass": "G6 V",
    "colorIndex": 0.72,
    "color": "#ffd7a3",
    "positionLy": [
      -19.229,
      19.069,
      79.127
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-106570",
    "name": "Gliese 836.1",
    "distanceLy": 83.65,
    "apparentMagnitude": 6.75,
    "spectralClass": "G2V",
    "colorIndex": 0.623,
    "color": "#ffd7a3",
    "positionLy": [
      60.732,
      -38.375,
      -42.854
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-54241",
    "name": "Gliese 412.2",
    "distanceLy": 83.67,
    "apparentMagnitude": 6.51,
    "spectralClass": "G1/G2V",
    "colorIndex": 0.606,
    "color": "#ffd7a3",
    "positionLy": [
      -70.475,
      -42.057,
      16.3
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-92260",
    "name": "Gliese 732.1",
    "distanceLy": 83.72,
    "apparentMagnitude": 5.51,
    "spectralClass": "G9IVa",
    "colorIndex": 0.843,
    "color": "#ffd7a3",
    "positionLy": [
      11.25,
      66.836,
      -49.139
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-521",
    "name": "Gliese 4.2A",
    "distanceLy": 83.87,
    "apparentMagnitude": 5.7,
    "spectralClass": "G1IV...",
    "colorIndex": 0.519,
    "color": "#fff2d2",
    "positionLy": [
      54.917,
      -63.367,
      1.515
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-29688",
    "name": "Gliese GJ 9205",
    "distanceLy": 83.91,
    "apparentMagnitude": 7.43,
    "spectralClass": "G5",
    "colorIndex": 0.776,
    "color": "#ffd7a3",
    "positionLy": [
      -1.932,
      79.234,
      27.553
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-12795",
    "name": "Mu Cet",
    "distanceLy": 84.06,
    "apparentMagnitude": 4.27,
    "spectralClass": "F1III-IV",
    "colorIndex": 0.311,
    "color": "#fff2d2",
    "positionLy": [
      62.233,
      14.762,
      54.549
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-78903",
    "name": "Gliese 611.1",
    "distanceLy": 84.06,
    "apparentMagnitude": 7.23,
    "spectralClass": "G8V",
    "colorIndex": 0.714,
    "color": "#ffd7a3",
    "positionLy": [
      -12.674,
      -79.515,
      -24.147
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-12154",
    "name": "Lam-2 For",
    "distanceLy": 84.08,
    "apparentMagnitude": 5.78,
    "spectralClass": "G1V",
    "colorIndex": 0.653,
    "color": "#ffd7a3",
    "positionLy": [
      53.616,
      -47.719,
      43.797
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119131",
    "name": "Gliese 656.1B",
    "distanceLy": 84.13,
    "apparentMagnitude": 3.4,
    "spectralClass": "A3 V",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -17.4,
      -22.803,
      -79.085
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-17449",
    "name": "Gliese 150.2",
    "distanceLy": 84.43,
    "apparentMagnitude": 7.72,
    "spectralClass": "K2",
    "colorIndex": 0.864,
    "color": "#ffd7a3",
    "positionLy": [
      32.603,
      60.771,
      48.708
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-33007",
    "name": "Gliese GJ 9219",
    "distanceLy": 84.45,
    "apparentMagnitude": 6.05,
    "spectralClass": "G3/G5V",
    "colorIndex": 0.708,
    "color": "#ffd7a3",
    "positionLy": [
      -17.183,
      -40.35,
      72.175
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-27014",
    "name": "Gliese 217.2",
    "distanceLy": 84.47,
    "apparentMagnitude": 8.09,
    "spectralClass": "K0V",
    "colorIndex": 0.76,
    "color": "#ffd7a3",
    "positionLy": [
      1.935,
      -79.453,
      28.628
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-12893",
    "name": "Gliese 112",
    "distanceLy": 84.52,
    "apparentMagnitude": 7.89,
    "spectralClass": "K1IV",
    "colorIndex": 0.84,
    "color": "#ffd7a3",
    "positionLy": [
      57.007,
      36.586,
      50.548
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-2076",
    "name": "Ankaa",
    "distanceLy": 84.72,
    "apparentMagnitude": 2.4,
    "spectralClass": "K0III...",
    "colorIndex": 1.083,
    "color": "#ffb17b",
    "positionLy": [
      62.242,
      -57.023,
      7.17
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-90582",
    "name": "Gliese GJ 1229",
    "distanceLy": 84.74,
    "apparentMagnitude": 7.2,
    "spectralClass": "G8V",
    "colorIndex": 0.692,
    "color": "#ffd7a3",
    "positionLy": [
      11.518,
      20.121,
      -81.503
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-97755",
    "name": "Terebellum",
    "distanceLy": 84.76,
    "apparentMagnitude": 4.7,
    "spectralClass": "G3/G5III",
    "colorIndex": 0.748,
    "color": "#ffd7a3",
    "positionLy": [
      36.792,
      -37.554,
      -66.484
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-47998",
    "name": "Gliese 368.1A",
    "distanceLy": 84.83,
    "apparentMagnitude": 7.91,
    "spectralClass": "K1V",
    "colorIndex": 0.894,
    "color": "#ffd7a3",
    "positionLy": [
      -43.289,
      -67.401,
      27.903
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-13735",
    "name": "Gliese 120.1C",
    "distanceLy": 85.05,
    "apparentMagnitude": 7.84,
    "spectralClass": "K2V",
    "colorIndex": 0.96,
    "color": "#ffd7a3",
    "positionLy": [
      55.172,
      -35.91,
      53.85
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-23428",
    "name": "Eta-1 Pic",
    "distanceLy": 85.05,
    "apparentMagnitude": 5.37,
    "spectralClass": "F2V",
    "colorIndex": 0.421,
    "color": "#fff2d2",
    "positionLy": [
      13.737,
      -64.334,
      53.904
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-81770",
    "name": "Gliese GJ 9578",
    "distanceLy": 85.16,
    "apparentMagnitude": 4.84,
    "spectralClass": "F2V",
    "colorIndex": 0.375,
    "color": "#fff2d2",
    "positionLy": [
      -14.939,
      71.243,
      -44.196
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-115740",
    "name": "Gliese GJ 9829",
    "distanceLy": 85.18,
    "apparentMagnitude": 6.5,
    "spectralClass": "F8V",
    "colorIndex": 0.531,
    "color": "#fff2d2",
    "positionLy": [
      84.309,
      -6.071,
      -10.529
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-63947",
    "name": "Gliese GJ 9429",
    "distanceLy": 85.22,
    "apparentMagnitude": 6.78,
    "spectralClass": "G5IV",
    "colorIndex": 0.667,
    "color": "#ffd7a3",
    "positionLy": [
      -81.073,
      7.735,
      -25.116
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-86847",
    "name": "Gliese 695.1",
    "distanceLy": 85.31,
    "apparentMagnitude": 7.2,
    "spectralClass": "G6/G8V",
    "colorIndex": 0.748,
    "color": "#ffd7a3",
    "positionLy": [
      -3.713,
      -47.73,
      -70.615
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-109511",
    "name": "Eps Cep",
    "distanceLy": 85.45,
    "apparentMagnitude": 4.18,
    "spectralClass": "F0IV",
    "colorIndex": 0.278,
    "color": "#fff2d2",
    "positionLy": [
      41.693,
      71.698,
      -20.553
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-78005",
    "name": "Gliese GJ 9533",
    "distanceLy": 85.56,
    "apparentMagnitude": 8.02,
    "spectralClass": "K0V",
    "colorIndex": 0.757,
    "color": "#ffd7a3",
    "positionLy": [
      -38.281,
      39.824,
      -65.336
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-42054",
    "name": "Gliese 310.1B",
    "distanceLy": 85.58,
    "apparentMagnitude": 7.25,
    "spectralClass": "G5V",
    "colorIndex": 0.71,
    "color": "#ffd7a3",
    "positionLy": [
      -53.458,
      9.871,
      66.101
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-19791",
    "name": "Gliese GJ 3267",
    "distanceLy": 85.61,
    "apparentMagnitude": 8.19,
    "spectralClass": "G5",
    "colorIndex": 0.84,
    "color": "#ffd7a3",
    "positionLy": [
      8.957,
      83.166,
      18.208
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-27821",
    "name": "Gliese 224.1",
    "distanceLy": 85.61,
    "apparentMagnitude": 4.65,
    "spectralClass": "K1III/IV",
    "colorIndex": 1.022,
    "color": "#ffb17b",
    "positionLy": [
      0.997,
      -76.336,
      38.732
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-65173",
    "name": "Mizar",
    "distanceLy": 85.81,
    "apparentMagnitude": 2.23,
    "spectralClass": "A2V",
    "colorIndex": 0.057,
    "color": "#c7ddff",
    "positionLy": [
      -46.04,
      70.226,
      -17.656
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-114848",
    "name": "Danfeng",
    "distanceLy": 86.01,
    "apparentMagnitude": 11.03,
    "spectralClass": "M2",
    "colorIndex": 1.45,
    "color": "#ffb17b",
    "positionLy": [
      42.273,
      -74.537,
      -7.43
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-79766",
    "name": "Gliese GJ 9557A",
    "distanceLy": 86.03,
    "apparentMagnitude": 5.48,
    "spectralClass": "F3IV-V",
    "colorIndex": 0.41,
    "color": "#fff2d2",
    "positionLy": [
      -27.993,
      54.965,
      -59.975
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-400",
    "name": "Gliese GJ 3003",
    "distanceLy": 86.08,
    "apparentMagnitude": 7.82,
    "spectralClass": "G9V",
    "colorIndex": 0.755,
    "color": "#ffd7a3",
    "positionLy": [
      79.059,
      34.007,
      1.704
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-105425",
    "name": "Gliese GJ 4194",
    "distanceLy": 86.13,
    "apparentMagnitude": 7.26,
    "spectralClass": "G5",
    "colorIndex": 0.619,
    "color": "#ffd7a3",
    "positionLy": [
      22.468,
      81.174,
      -17.987
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-116218",
    "name": "Lam And",
    "distanceLy": 86.13,
    "apparentMagnitude": 3.81,
    "spectralClass": "G8III-IV",
    "colorIndex": 0.984,
    "color": "#ffd7a3",
    "positionLy": [
      59.046,
      62.43,
      -5.799
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-44016",
    "name": "Gliese 333.1",
    "distanceLy": 86.17,
    "apparentMagnitude": 5.17,
    "spectralClass": "F3V",
    "colorIndex": 0.417,
    "color": "#fff2d2",
    "positionLy": [
      -31.224,
      -73.928,
      31.387
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-6117",
    "name": "Gliese 56.3A",
    "distanceLy": 86.4,
    "apparentMagnitude": 8,
    "spectralClass": "K1V",
    "colorIndex": 0.78,
    "color": "#ffd7a3",
    "positionLy": [
      81.348,
      -1.308,
      29.081
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-28693",
    "name": "Gliese GJ 9200",
    "distanceLy": 86.65,
    "apparentMagnitude": 6.35,
    "spectralClass": "G0IV-V",
    "colorIndex": 0.517,
    "color": "#fff2d2",
    "positionLy": [
      -1.195,
      -61.312,
      61.222
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-27998",
    "name": "Gliese 224",
    "distanceLy": 86.77,
    "apparentMagnitude": 6.6,
    "spectralClass": "G5IV",
    "colorIndex": 0.65,
    "color": "#ffd7a3",
    "positionLy": [
      1.449,
      20.88,
      84.204
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-70851",
    "name": "Seginus",
    "distanceLy": 86.79,
    "apparentMagnitude": 3.04,
    "spectralClass": "A7IIIvar",
    "colorIndex": 0.191,
    "color": "#c7ddff",
    "positionLy": [
      -53.651,
      53.8,
      -41.946
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-97456",
    "name": "Gliese GJ 4126",
    "distanceLy": 86.81,
    "apparentMagnitude": 6.16,
    "spectralClass": "G0V",
    "colorIndex": 0.642,
    "color": "#ffd7a3",
    "positionLy": [
      39.938,
      17.498,
      -75.068
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-107693",
    "name": "Mu Cap",
    "distanceLy": 86.81,
    "apparentMagnitude": 5.08,
    "spectralClass": "F3IV",
    "colorIndex": 0.378,
    "color": "#fff2d2",
    "positionLy": [
      71.823,
      -20.342,
      -44.317
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-60776",
    "name": "Algorab",
    "distanceLy": 86.86,
    "apparentMagnitude": 2.94,
    "spectralClass": "B9.5V",
    "colorIndex": -0.012,
    "color": "#c7ddff",
    "positionLy": [
      -82.57,
      -24.692,
      -10.821
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-91662",
    "name": "Gliese 725.1",
    "distanceLy": 87.04,
    "apparentMagnitude": 7.54,
    "spectralClass": "K0",
    "colorIndex": 0.843,
    "color": "#ffd7a3",
    "positionLy": [
      12.138,
      60.283,
      -61.605
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-11755",
    "name": "Sig Cet",
    "distanceLy": 87.07,
    "apparentMagnitude": 4.74,
    "spectralClass": "F5V",
    "colorIndex": 0.454,
    "color": "#fff2d2",
    "positionLy": [
      66.176,
      -22.893,
      51.743
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-37910",
    "name": "Gliese 285.1",
    "distanceLy": 87.09,
    "apparentMagnitude": 7.06,
    "spectralClass": "G0",
    "colorIndex": 0.712,
    "color": "#ffd7a3",
    "positionLy": [
      -13.333,
      81.945,
      26.306
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-13631",
    "name": "Gliese GJ 3188",
    "distanceLy": 87.11,
    "apparentMagnitude": 5.59,
    "spectralClass": "F4V",
    "colorIndex": 0.445,
    "color": "#fff2d2",
    "positionLy": [
      29.887,
      76.574,
      28.849
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-97882",
    "name": "Gliese 773.2",
    "distanceLy": 87.14,
    "apparentMagnitude": 7.91,
    "spectralClass": "K1V",
    "colorIndex": 0.797,
    "color": "#ffd7a3",
    "positionLy": [
      37.002,
      43.336,
      -65.921
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-27559",
    "name": "Wazn",
    "distanceLy": 87.18,
    "apparentMagnitude": 3.12,
    "spectralClass": "K1.5III",
    "colorIndex": 1.146,
    "color": "#ffb17b",
    "positionLy": [
      2.79,
      -50.961,
      70.687
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-56633",
    "name": "Iot Crt",
    "distanceLy": 87.18,
    "apparentMagnitude": 5.48,
    "spectralClass": "F7V",
    "colorIndex": 0.52,
    "color": "#fff2d2",
    "positionLy": [
      -84.512,
      -19.911,
      7.889
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-3497",
    "name": "Gliese 31.3",
    "distanceLy": 87.23,
    "apparentMagnitude": 5.22,
    "spectralClass": "F0V",
    "colorIndex": 0.35,
    "color": "#fff2d2",
    "positionLy": [
      79.34,
      -32.686,
      15.688
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-112777",
    "name": "Rho Ind",
    "distanceLy": 87.23,
    "apparentMagnitude": 6.04,
    "spectralClass": "G4IV-V",
    "colorIndex": 0.66,
    "color": "#ffd7a3",
    "positionLy": [
      28.529,
      -82.008,
      -8.362
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-68415",
    "name": "Gliese GJ 3824",
    "distanceLy": 87.51,
    "apparentMagnitude": 7.12,
    "spectralClass": "G5",
    "colorIndex": 0.74,
    "color": "#ffd7a3",
    "positionLy": [
      -72.664,
      22.613,
      -43.208
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-9066",
    "name": "Gliese 81.3",
    "distanceLy": 87.63,
    "apparentMagnitude": 6.1,
    "spectralClass": "F8V",
    "colorIndex": 0.487,
    "color": "#fff2d2",
    "positionLy": [
      47.317,
      -68.832,
      26.499
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118164",
    "name": "Gliese 105.4B",
    "distanceLy": 88.17,
    "apparentMagnitude": 5.6,
    "spectralClass": "F5 V",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      66.207,
      -18.139,
      55.342
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-93213",
    "name": "Ascella",
    "distanceLy": 88.2,
    "apparentMagnitude": 2.6,
    "spectralClass": "A3IV",
    "colorIndex": 0.062,
    "color": "#c7ddff",
    "positionLy": [
      20.634,
      -43.939,
      -73.638
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-21219",
    "name": "Gliese GJ 9158",
    "distanceLy": 88.34,
    "apparentMagnitude": 7.92,
    "spectralClass": "K0",
    "colorIndex": 0.779,
    "color": "#ffd7a3",
    "positionLy": [
      32.291,
      8.291,
      81.808
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-83755",
    "name": "Sabik",
    "distanceLy": 88.37,
    "apparentMagnitude": 2.43,
    "spectralClass": "A2.5Va",
    "colorIndex": 0.059,
    "color": "#c7ddff",
    "positionLy": [
      -18.273,
      -23.949,
      -83.072
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-32237",
    "name": "Gliese 243",
    "distanceLy": 88.51,
    "apparentMagnitude": 6.43,
    "spectralClass": "F7V",
    "colorIndex": 0.55,
    "color": "#fff2d2",
    "positionLy": [
      -15.293,
      -40.652,
      77.119
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-60893",
    "name": "Gacrux",
    "distanceLy": 88.56,
    "apparentMagnitude": 1.59,
    "spectralClass": "M4III",
    "colorIndex": 1.6,
    "color": "#ffb17b",
    "positionLy": [
      -47.641,
      -74.366,
      -6.519
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-101546",
    "name": "Gliese 794.3",
    "distanceLy": 88.58,
    "apparentMagnitude": 6.76,
    "spectralClass": "G0",
    "colorIndex": 0.61,
    "color": "#ffd7a3",
    "positionLy": [
      44.169,
      55.306,
      -53.263
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-14112",
    "name": "Tau-3 Eri",
    "distanceLy": 88.63,
    "apparentMagnitude": 4.08,
    "spectralClass": "A4V",
    "colorIndex": 0.163,
    "color": "#c7ddff",
    "positionLy": [
      56.816,
      -35.517,
      58.014
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-1441",
    "name": "Gliese GJ 9008",
    "distanceLy": 88.77,
    "apparentMagnitude": 6.51,
    "spectralClass": "G2V",
    "colorIndex": 0.599,
    "color": "#fff2d2",
    "positionLy": [
      86.073,
      -20.657,
      6.767
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-55613",
    "name": "Gliese GJ 3663",
    "distanceLy": 88.77,
    "apparentMagnitude": 5.18,
    "spectralClass": "F7V",
    "colorIndex": 0.495,
    "color": "#fff2d2",
    "positionLy": [
      -38.519,
      -79.771,
      5.805
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-83176",
    "name": "Eps-2 Ara",
    "distanceLy": 88.8,
    "apparentMagnitude": 5.27,
    "spectralClass": "F6V",
    "colorIndex": 0.498,
    "color": "#fff2d2",
    "positionLy": [
      -13.05,
      -71.138,
      -51.519
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-36296",
    "name": "Gliese GJ 3443",
    "distanceLy": 88.85,
    "apparentMagnitude": 5.86,
    "spectralClass": "F8V",
    "colorIndex": 0.487,
    "color": "#fff2d2",
    "positionLy": [
      -33.502,
      -11.675,
      81.456
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-74205",
    "name": "Gliese GJ 3896A",
    "distanceLy": 88.85,
    "apparentMagnitude": 6.69,
    "spectralClass": "G5V",
    "colorIndex": 0.68,
    "color": "#ffd7a3",
    "positionLy": [
      -55.916,
      29.344,
      -62.497
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-79938",
    "name": "Sig Ser",
    "distanceLy": 88.94,
    "apparentMagnitude": 4.82,
    "spectralClass": "F0V",
    "colorIndex": 0.338,
    "color": "#fff2d2",
    "positionLy": [
      -36.852,
      1.597,
      -80.932
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-112575",
    "name": "Sig Peg",
    "distanceLy": 88.97,
    "apparentMagnitude": 5.16,
    "spectralClass": "F7IV",
    "colorIndex": 0.487,
    "color": "#fff2d2",
    "positionLy": [
      83.875,
      15.198,
      -25.483
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-102100",
    "name": "Gliese GJ 9706",
    "distanceLy": 89.02,
    "apparentMagnitude": 4.52,
    "spectralClass": "F8IV-V",
    "colorIndex": 0.535,
    "color": "#fff2d2",
    "positionLy": [
      31.521,
      75.141,
      -35.832
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-64016",
    "name": "Gliese 500",
    "distanceLy": 89.16,
    "apparentMagnitude": 7.36,
    "spectralClass": "G6V",
    "colorIndex": 0.718,
    "color": "#ffd7a3",
    "positionLy": [
      -78.767,
      -33.678,
      -24.725
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-7587",
    "name": "Gliese 67.1",
    "distanceLy": 89.31,
    "apparentMagnitude": 5.88,
    "spectralClass": "G2V",
    "colorIndex": 0.62,
    "color": "#ffd7a3",
    "positionLy": [
      9.941,
      -88.639,
      4.526
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-83021",
    "name": "Gliese 650",
    "distanceLy": 89.31,
    "apparentMagnitude": 7.12,
    "spectralClass": "G2V",
    "colorIndex": 0.608,
    "color": "#ffd7a3",
    "positionLy": [
      -22.039,
      -20.951,
      -83.975
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-23820",
    "name": "Cursa",
    "distanceLy": 89.36,
    "apparentMagnitude": 2.78,
    "spectralClass": "A3IIIvar",
    "colorIndex": 0.161,
    "color": "#c7ddff",
    "positionLy": [
      20.079,
      -7.922,
      86.711
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-42172",
    "name": "Gliese 312",
    "distanceLy": 89.38,
    "apparentMagnitude": 6.53,
    "spectralClass": "G1V",
    "colorIndex": 0.598,
    "color": "#fff2d2",
    "positionLy": [
      -43.305,
      -57.63,
      52.846
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-83351",
    "name": "Mu Dra",
    "distanceLy": 89.48,
    "apparentMagnitude": 4.91,
    "spectralClass": "F5",
    "colorIndex": 0.471,
    "color": "#fff2d2",
    "positionLy": [
      -12.286,
      72.82,
      -50.527
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118759",
    "name": "Gliese 431.1B",
    "distanceLy": 89.75,
    "apparentMagnitude": 7.1,
    "spectralClass": "G3 V",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -43.083,
      78.561,
      5.22
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-94350",
    "name": "Gumala",
    "distanceLy": 89.85,
    "apparentMagnitude": 6.25,
    "spectralClass": "F8V",
    "colorIndex": 0.548,
    "color": "#fff2d2",
    "positionLy": [
      26.535,
      -36.802,
      -77.553
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-111625",
    "name": "Gliese 869",
    "distanceLy": 89.9,
    "apparentMagnitude": 7.41,
    "spectralClass": "G8/K0V",
    "colorIndex": 0.789,
    "color": "#ffd7a3",
    "positionLy": [
      71.753,
      -47.626,
      -25.79
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-14540",
    "name": "Algol",
    "distanceLy": 89.92,
    "apparentMagnitude": 2.09,
    "spectralClass": "B8V",
    "colorIndex": -0.003,
    "color": "#c7ddff",
    "positionLy": [
      46.28,
      58.943,
      49.702
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-101423",
    "name": "Gliese GJ 1255A",
    "distanceLy": 89.97,
    "apparentMagnitude": 7.46,
    "spectralClass": "K0Vvar",
    "colorIndex": 0.859,
    "color": "#ffd7a3",
    "positionLy": [
      14.184,
      87.147,
      -17.305
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-19157",
    "name": "Psi Tau",
    "distanceLy": 90.02,
    "apparentMagnitude": 5.21,
    "spectralClass": "F1V",
    "colorIndex": 0.359,
    "color": "#fff2d2",
    "positionLy": [
      37.265,
      43.646,
      69.359
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-20500",
    "name": "Gliese GJ 9155A",
    "distanceLy": 90.35,
    "apparentMagnitude": 6.28,
    "spectralClass": "G4V+...",
    "colorIndex": 0.659,
    "color": "#ffd7a3",
    "positionLy": [
      19.936,
      -75.833,
      44.884
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-99254",
    "name": "Xi-2 Cap",
    "distanceLy": 90.35,
    "apparentMagnitude": 5.84,
    "spectralClass": "F5V",
    "colorIndex": 0.476,
    "color": "#fff2d2",
    "positionLy": [
      48.158,
      -19.736,
      -73.852
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-101285",
    "name": "Phi-1 Pav",
    "distanceLy": 90.65,
    "apparentMagnitude": 4.75,
    "spectralClass": "F1III",
    "colorIndex": 0.291,
    "color": "#fff2d2",
    "positionLy": [
      27.957,
      -78.96,
      -34.654
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-8417",
    "name": "Gliese GJ 3115",
    "distanceLy": 90.85,
    "apparentMagnitude": 5.78,
    "spectralClass": "F8V",
    "colorIndex": 0.572,
    "color": "#fff2d2",
    "positionLy": [
      68.021,
      49.068,
      34.918
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-52370",
    "name": "Macondo",
    "distanceLy": 90.85,
    "apparentMagnitude": 8.3,
    "spectralClass": "K3V",
    "colorIndex": 0.945,
    "color": "#ffd7a3",
    "positionLy": [
      -71.607,
      -50.247,
      24.534
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-63411",
    "name": "Del Mus",
    "distanceLy": 90.9,
    "apparentMagnitude": 3.61,
    "spectralClass": "K2III",
    "colorIndex": 1.19,
    "color": "#ffb17b",
    "positionLy": [
      -27.715,
      -86.23,
      -7.721
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-71304",
    "name": "Gliese 558.1",
    "distanceLy": 90.98,
    "apparentMagnitude": 6.03,
    "spectralClass": "F7V",
    "colorIndex": 0.506,
    "color": "#fff2d2",
    "positionLy": [
      -26.396,
      -84.312,
      -21.715
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-36536",
    "name": "Gliese GJ 3449A",
    "distanceLy": 91.05,
    "apparentMagnitude": 5.9,
    "spectralClass": "F5V",
    "colorIndex": 0.54,
    "color": "#fff2d2",
    "positionLy": [
      -35.186,
      -14.058,
      82.798
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-56121",
    "name": "Gliese 431.1A",
    "distanceLy": 91.28,
    "apparentMagnitude": 5.46,
    "spectralClass": "F6V",
    "colorIndex": 0.515,
    "color": "#fff2d2",
    "positionLy": [
      -43.818,
      79.901,
      5.313
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-84729",
    "name": "Gliese 667.1",
    "distanceLy": 91.44,
    "apparentMagnitude": 7,
    "spectralClass": "G2V",
    "colorIndex": 0.607,
    "color": "#ffd7a3",
    "positionLy": [
      -3.796,
      -88.465,
      -22.815
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-82745",
    "name": "Kap Oph",
    "distanceLy": 91.46,
    "apparentMagnitude": 3.19,
    "spectralClass": "K2IIIvar",
    "colorIndex": 1.16,
    "color": "#ffb17b",
    "positionLy": [
      -24.241,
      14.899,
      -86.922
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-40837",
    "name": "Gliese 304",
    "distanceLy": 91.54,
    "apparentMagnitude": 7.17,
    "spectralClass": "G8:III...",
    "colorIndex": 0.692,
    "color": "#ffd7a3",
    "positionLy": [
      -40.764,
      -58.48,
      57.43
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-112403",
    "name": "Gliese GJ 9797",
    "distanceLy": 91.57,
    "apparentMagnitude": 7.77,
    "spectralClass": "G5V",
    "colorIndex": 0.741,
    "color": "#ffd7a3",
    "positionLy": [
      65.431,
      -60.662,
      -20.575
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-21274",
    "name": "Gliese GJ 3300",
    "distanceLy": 91.64,
    "apparentMagnitude": 7.61,
    "spectralClass": "G8V",
    "colorIndex": 0.776,
    "color": "#ffd7a3",
    "positionLy": [
      27.096,
      -53.423,
      69.356
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-8194",
    "name": "Eps Scl",
    "distanceLy": 91.69,
    "apparentMagnitude": 5.29,
    "spectralClass": "F2IV",
    "colorIndex": 0.395,
    "color": "#fff2d2",
    "positionLy": [
      74.398,
      -38.828,
      36.95
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-45606",
    "name": "Gliese 340.2",
    "distanceLy": 91.8,
    "apparentMagnitude": 8.15,
    "spectralClass": "K0",
    "colorIndex": 0.86,
    "color": "#ffd7a3",
    "positionLy": [
      -70.177,
      1.437,
      59.162
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-25598",
    "name": "Gliese GJ 3347A",
    "distanceLy": 91.87,
    "apparentMagnitude": 6.71,
    "spectralClass": "G0V",
    "colorIndex": 0.582,
    "color": "#fff2d2",
    "positionLy": [
      12.147,
      19.965,
      88.853
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-110614",
    "name": "Zet-1 Aqr",
    "distanceLy": 91.87,
    "apparentMagnitude": 3.65,
    "spectralClass": "F3III-IV",
    "colorIndex": 0.406,
    "color": "#fff2d2",
    "positionLy": [
      84.702,
      -0.032,
      -35.591
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-63535",
    "name": "Gliese 496A",
    "distanceLy": 92,
    "apparentMagnitude": 5.58,
    "spectralClass": "F7V",
    "colorIndex": 0.554,
    "color": "#fff2d2",
    "positionLy": [
      -82.819,
      -32.346,
      -23.657
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-80656",
    "name": "Gliese 632",
    "distanceLy": 92.06,
    "apparentMagnitude": 7.01,
    "spectralClass": "G0",
    "colorIndex": 0.607,
    "color": "#ffd7a3",
    "positionLy": [
      -6.159,
      90.598,
      -15.111
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-80089",
    "name": "Athebyne",
    "distanceLy": 92.08,
    "apparentMagnitude": 2.73,
    "spectralClass": "G8III",
    "colorIndex": 0.91,
    "color": "#ffd7a3",
    "positionLy": [
      -17.864,
      80.934,
      -40.12
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-87623",
    "name": "Gliese GJ 4039A",
    "distanceLy": 92.13,
    "apparentMagnitude": 6.32,
    "spectralClass": "G2V",
    "colorIndex": 0.642,
    "color": "#ffd7a3",
    "positionLy": [
      -1.014,
      37.468,
      -84.165
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-109081",
    "name": "Biham",
    "distanceLy": 92.29,
    "apparentMagnitude": 3.52,
    "spectralClass": "A2V",
    "colorIndex": 0.086,
    "color": "#c7ddff",
    "positionLy": [
      81.421,
      9.964,
      -42.295
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-39902",
    "name": "Gliese 296.2",
    "distanceLy": 92.45,
    "apparentMagnitude": 6.54,
    "spectralClass": "F8",
    "colorIndex": 0.567,
    "color": "#fff2d2",
    "positionLy": [
      -17.253,
      86.72,
      26.993
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-68870",
    "name": "Gliese 539.1",
    "distanceLy": 92.95,
    "apparentMagnitude": 6.02,
    "spectralClass": "G1V",
    "colorIndex": 0.581,
    "color": "#fff2d2",
    "positionLy": [
      -20.575,
      -89.717,
      -12.913
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-83804",
    "name": "Gliese GJ 3993",
    "distanceLy": 92.98,
    "apparentMagnitude": 6.98,
    "spectralClass": "G5",
    "colorIndex": 0.705,
    "color": "#ffd7a3",
    "positionLy": [
      -10.812,
      77.673,
      -49.944
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-113961",
    "name": "Ebla",
    "distanceLy": 93.13,
    "apparentMagnitude": 8.59,
    "spectralClass": "K3V",
    "colorIndex": 1.012,
    "color": "#ffb17b",
    "positionLy": [
      90.782,
      -3.674,
      -20.467
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-6799",
    "name": "Ome And",
    "distanceLy": 93.35,
    "apparentMagnitude": 4.83,
    "spectralClass": "F5IV",
    "colorIndex": 0.421,
    "color": "#fff2d2",
    "positionLy": [
      60.801,
      66.474,
      24.459
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-40591",
    "name": "Gliese GJ 1109",
    "distanceLy": 93.37,
    "apparentMagnitude": 4.44,
    "spectralClass": "A4m...",
    "colorIndex": 0.222,
    "color": "#c7ddff",
    "positionLy": [
      -42.576,
      -55.75,
      61.628
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118862",
    "name": "Gliese 496B",
    "distanceLy": 93.48,
    "apparentMagnitude": 6.4,
    "spectralClass": "unknown",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -84.153,
      -32.867,
      -24.035
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-21808",
    "name": "Bet Cae",
    "distanceLy": 93.51,
    "apparentMagnitude": 5.04,
    "spectralClass": "F3V",
    "colorIndex": 0.391,
    "color": "#fff2d2",
    "positionLy": [
      24.863,
      -56.463,
      70.268
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-110271",
    "name": "Nu Ind",
    "distanceLy": 93.62,
    "apparentMagnitude": 5.28,
    "spectralClass": "A3V: + F9V",
    "colorIndex": 0.66,
    "color": "#ffd7a3",
    "positionLy": [
      26.096,
      -89.162,
      -11.535
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-50684",
    "name": "Gliese GJ 3596",
    "distanceLy": 93.83,
    "apparentMagnitude": 7.26,
    "spectralClass": "G5",
    "colorIndex": 0.6,
    "color": "#ffd7a3",
    "positionLy": [
      -82.458,
      24.83,
      37.262
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-93725",
    "name": "Gliese GJ 4097",
    "distanceLy": 93.83,
    "apparentMagnitude": 7.75,
    "spectralClass": "K0V",
    "colorIndex": 0.787,
    "color": "#ffd7a3",
    "positionLy": [
      23.699,
      -48.288,
      -76.882
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-10282",
    "name": "Eta Ari",
    "distanceLy": 94.16,
    "apparentMagnitude": 5.23,
    "spectralClass": "F5V",
    "colorIndex": 0.457,
    "color": "#fff2d2",
    "positionLy": [
      73.449,
      34.066,
      48.064
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-3178",
    "name": "Gliese 27.2",
    "distanceLy": 94.21,
    "apparentMagnitude": 6.14,
    "spectralClass": "G3/G5V",
    "colorIndex": 0.718,
    "color": "#ffd7a3",
    "positionLy": [
      84.848,
      -38.025,
      15.17
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119491",
    "name": "Gliese 855.1B",
    "distanceLy": 94.26,
    "apparentMagnitude": 6.1,
    "spectralClass": "unknown",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      26.277,
      -89.781,
      -11.61
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-117913",
    "name": "Gliese GJ 4384A",
    "distanceLy": 94.35,
    "apparentMagnitude": 5.81,
    "spectralClass": "F8",
    "colorIndex": 0.539,
    "color": "#fff2d2",
    "positionLy": [
      78.47,
      52.38,
      -0.175
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-19940",
    "name": "Ome-2 Tau",
    "distanceLy": 94.4,
    "apparentMagnitude": 4.93,
    "spectralClass": "A3m",
    "colorIndex": 0.259,
    "color": "#fff2d2",
    "positionLy": [
      38.305,
      33.181,
      79.646
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-33632",
    "name": "Citalá",
    "distanceLy": 94.46,
    "apparentMagnitude": 6.29,
    "spectralClass": "G0III-IV",
    "colorIndex": 0.572,
    "color": "#fff2d2",
    "positionLy": [
      -24.459,
      -8.835,
      90.807
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-54024",
    "name": "Chi Leo",
    "distanceLy": 94.57,
    "apparentMagnitude": 4.62,
    "spectralClass": "F2III-IVvar",
    "colorIndex": 0.332,
    "color": "#fff2d2",
    "positionLy": [
      -91.105,
      12.075,
      22.286
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-4280",
    "name": "Gliese 42.1",
    "distanceLy": 94.79,
    "apparentMagnitude": 7.41,
    "spectralClass": "G5",
    "colorIndex": 0.652,
    "color": "#ffd7a3",
    "positionLy": [
      84.044,
      38.704,
      20.561
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-24361",
    "name": "Gliese 193",
    "distanceLy": 94.79,
    "apparentMagnitude": 7.43,
    "spectralClass": "G8V",
    "colorIndex": 0.719,
    "color": "#ffd7a3",
    "positionLy": [
      18.051,
      -25.851,
      89.389
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-69491",
    "name": "Iot Boo",
    "distanceLy": 94.81,
    "apparentMagnitude": 4.75,
    "spectralClass": "A9V",
    "colorIndex": 0.236,
    "color": "#c7ddff",
    "positionLy": [
      -49.05,
      74.064,
      -33.136
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-53075",
    "name": "Praecipua",
    "distanceLy": 94.87,
    "apparentMagnitude": 3.79,
    "spectralClass": "K0III-IV",
    "colorIndex": 1.04,
    "color": "#ffb17b",
    "positionLy": [
      -75.152,
      53.344,
      22.507
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-53099",
    "name": "Gliese 404.1",
    "distanceLy": 95.01,
    "apparentMagnitude": 3.78,
    "spectralClass": "K0III-IV...",
    "colorIndex": 0.945,
    "color": "#ffd7a3",
    "positionLy": [
      -47.086,
      -81.311,
      14.061
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-15973",
    "name": "Gliese 141.2",
    "distanceLy": 95.14,
    "apparentMagnitude": 7.88,
    "spectralClass": "G8V",
    "colorIndex": 0.716,
    "color": "#ffd7a3",
    "positionLy": [
      50.92,
      -48.458,
      64.121
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-62876",
    "name": "Taiyi",
    "distanceLy": 95.54,
    "apparentMagnitude": 5.23,
    "spectralClass": "A5n",
    "colorIndex": 0.303,
    "color": "#fff2d2",
    "positionLy": [
      -38.553,
      86.891,
      -9.519
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-107577",
    "name": "Gliese 838.3A",
    "distanceLy": 95.67,
    "apparentMagnitude": 7.85,
    "spectralClass": "G5",
    "colorIndex": 0.798,
    "color": "#ffd7a3",
    "positionLy": [
      59.95,
      64.444,
      -37.504
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118923",
    "name": "Gliese GJ 3806A",
    "distanceLy": 95.93,
    "apparentMagnitude": 6.57,
    "spectralClass": "G3 IV-V",
    "colorIndex": 0.55,
    "color": "#fff2d2",
    "positionLy": [
      -69.266,
      -55.985,
      -35.641
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-113500",
    "name": "Pi PsA",
    "distanceLy": 95.96,
    "apparentMagnitude": 5.12,
    "spectralClass": "A9V",
    "colorIndex": 0.305,
    "color": "#fff2d2",
    "positionLy": [
      76.459,
      -54.694,
      -19.242
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-72407",
    "name": "Gliese GJ 3868A",
    "distanceLy": 96.01,
    "apparentMagnitude": 7.4,
    "spectralClass": "K0...",
    "colorIndex": 0.76,
    "color": "#ffd7a3",
    "positionLy": [
      -69.48,
      16.216,
      -64.248
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-67195",
    "name": "Gliese GJ 3807B",
    "distanceLy": 96.13,
    "apparentMagnitude": 6.56,
    "spectralClass": "G0V",
    "colorIndex": 0.561,
    "color": "#fff2d2",
    "positionLy": [
      -69.408,
      -56.099,
      -35.716
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-3413",
    "name": "Diphda",
    "distanceLy": 96.32,
    "apparentMagnitude": 2.04,
    "spectralClass": "K0III",
    "colorIndex": 1.019,
    "color": "#ffb17b",
    "positionLy": [
      89.966,
      -29.745,
      17.32
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-113629",
    "name": "Gliese GJ 9808",
    "distanceLy": 96.35,
    "apparentMagnitude": 7.49,
    "spectralClass": "G6V",
    "colorIndex": 0.646,
    "color": "#ffd7a3",
    "positionLy": [
      34.431,
      89.597,
      -8.409
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-81432",
    "name": "Gliese 634.1",
    "distanceLy": 96.44,
    "apparentMagnitude": 7.21,
    "spectralClass": "G0",
    "colorIndex": 0.631,
    "color": "#ffd7a3",
    "positionLy": [
      -32.493,
      -4.807,
      -90.671
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-33215",
    "name": "Pi CMa",
    "distanceLy": 96.5,
    "apparentMagnitude": 4.66,
    "spectralClass": "F2IV/V",
    "colorIndex": 0.374,
    "color": "#fff2d2",
    "positionLy": [
      -21.773,
      -33.22,
      87.942
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-108573",
    "name": "Kurhah",
    "distanceLy": 96.52,
    "apparentMagnitude": 4.26,
    "spectralClass": "Am",
    "colorIndex": 0.379,
    "color": "#fff2d2",
    "positionLy": [
      36.156,
      87.214,
      -20.085
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-32521",
    "name": "Alp Pic",
    "distanceLy": 96.55,
    "apparentMagnitude": 3.24,
    "spectralClass": "A7IV",
    "colorIndex": 0.225,
    "color": "#c7ddff",
    "positionLy": [
      -9.48,
      -85.205,
      44.416
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-57197",
    "name": "Flegetonte",
    "distanceLy": 96.67,
    "apparentMagnitude": 8.07,
    "spectralClass": "K0",
    "colorIndex": 0.835,
    "color": "#ffd7a3",
    "positionLy": [
      -96.362,
      4.758,
      6.018
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-112070",
    "name": "Gliese 871.2",
    "distanceLy": 96.78,
    "apparentMagnitude": 7.87,
    "spectralClass": "K0",
    "colorIndex": 0.803,
    "color": "#ffd7a3",
    "positionLy": [
      58.766,
      74.366,
      -19.566
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-88361",
    "name": "Alnasl",
    "distanceLy": 96.87,
    "apparentMagnitude": 2.98,
    "spectralClass": "K0III",
    "colorIndex": 0.981,
    "color": "#ffd7a3",
    "positionLy": [
      2.117,
      -49.054,
      -83.503
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-96350",
    "name": "Gliese 765.2",
    "distanceLy": 96.87,
    "apparentMagnitude": 8.04,
    "spectralClass": "K0",
    "colorIndex": 0.881,
    "color": "#ffd7a3",
    "positionLy": [
      9.531,
      94.161,
      -20.648
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-15163",
    "name": "Iot Hyi",
    "distanceLy": 96.9,
    "apparentMagnitude": 5.51,
    "spectralClass": "F4III",
    "colorIndex": 0.438,
    "color": "#fff2d2",
    "positionLy": [
      13.883,
      -94.56,
      15.965
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-79580",
    "name": "Eta UMi",
    "distanceLy": 96.98,
    "apparentMagnitude": 4.95,
    "spectralClass": "F5V",
    "colorIndex": 0.393,
    "color": "#fff2d2",
    "positionLy": [
      -10.32,
      94.002,
      -21.517
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-676",
    "name": "Alpheratz",
    "distanceLy": 97.01,
    "apparentMagnitude": 2.07,
    "spectralClass": "B9p",
    "colorIndex": -0.038,
    "color": "#c7ddff",
    "positionLy": [
      84.718,
      47.166,
      3.102
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-17398",
    "name": "Bet Ret",
    "distanceLy": 97.39,
    "apparentMagnitude": 3.84,
    "spectralClass": "K0IV SB",
    "colorIndex": 1.133,
    "color": "#ffb17b",
    "positionLy": [
      23.152,
      -88.127,
      34.389
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-30639",
    "name": "Gliese GJ 9212A",
    "distanceLy": 97.42,
    "apparentMagnitude": 6.05,
    "spectralClass": "F8/G0V",
    "colorIndex": 0.545,
    "color": "#fff2d2",
    "positionLy": [
      -10.376,
      -42.486,
      87.05
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-94081",
    "name": "Altais",
    "distanceLy": 97.42,
    "apparentMagnitude": 3.07,
    "spectralClass": "G9III",
    "colorIndex": 0.99,
    "color": "#ffd7a3",
    "positionLy": [
      11.527,
      90.108,
      -35.187
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-38870",
    "name": "Gliese GJ 9247",
    "distanceLy": 97.86,
    "apparentMagnitude": 7.95,
    "spectralClass": "G6V",
    "colorIndex": 0.739,
    "color": "#ffd7a3",
    "positionLy": [
      -39.687,
      -56.051,
      69.708
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-54382",
    "name": "Gliese GJ 3644",
    "distanceLy": 97.86,
    "apparentMagnitude": 7.69,
    "spectralClass": "G5",
    "colorIndex": 0.777,
    "color": "#ffd7a3",
    "positionLy": [
      -95.419,
      4.194,
      21.298
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-66029",
    "name": "Gliese GJ 9450",
    "distanceLy": 98.03,
    "apparentMagnitude": 7.29,
    "spectralClass": "G3V",
    "colorIndex": 0.669,
    "color": "#ffd7a3",
    "positionLy": [
      -69.888,
      -61.572,
      -30.586
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-101587",
    "name": "Kap Del",
    "distanceLy": 98.24,
    "apparentMagnitude": 5.07,
    "spectralClass": "G5IV+...",
    "colorIndex": 0.702,
    "color": "#ffd7a3",
    "positionLy": [
      61.889,
      17.204,
      -74.327
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-59250",
    "name": "Gliese GJ 3711A",
    "distanceLy": 98.33,
    "apparentMagnitude": 7.96,
    "spectralClass": "K0",
    "colorIndex": 0.88,
    "color": "#ffd7a3",
    "positionLy": [
      -58.523,
      78.962,
      -2.93
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-101445",
    "name": "Alp Ind",
    "distanceLy": 98.33,
    "apparentMagnitude": 3.11,
    "spectralClass": "K0III",
    "colorIndex": 0.998,
    "color": "#ffd7a3",
    "positionLy": [
      42.325,
      -72.253,
      -51.542
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-22543",
    "name": "Gliese GJ 9168",
    "distanceLy": 98.45,
    "apparentMagnitude": 6.94,
    "spectralClass": "G1V-VI",
    "colorIndex": 0.586,
    "color": "#fff2d2",
    "positionLy": [
      20.133,
      70.619,
      65.571
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-92881",
    "name": "Eps CrA",
    "distanceLy": 98.45,
    "apparentMagnitude": 4.83,
    "spectralClass": "F3IV/V",
    "colorIndex": 0.396,
    "color": "#fff2d2",
    "positionLy": [
      19.898,
      -59.395,
      -75.95
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-57933",
    "name": "Gliese 452.5A",
    "distanceLy": 98.51,
    "apparentMagnitude": 6.7,
    "spectralClass": "G5V",
    "colorIndex": 0.646,
    "color": "#ffd7a3",
    "positionLy": [
      -54.935,
      -81.759,
      1.193
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-85557",
    "name": "Nu-1 Dra",
    "distanceLy": 98.66,
    "apparentMagnitude": 4.89,
    "spectralClass": "Am...",
    "colorIndex": 0.251,
    "color": "#fff2d2",
    "positionLy": [
      -6.821,
      80.995,
      -55.912
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-100701",
    "name": "Rho Cap",
    "distanceLy": 98.72,
    "apparentMagnitude": 4.77,
    "spectralClass": "F3V",
    "colorIndex": 0.386,
    "color": "#fff2d2",
    "positionLy": [
      56.842,
      -30.199,
      -74.845
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-104979",
    "name": "The Ind",
    "distanceLy": 98.78,
    "apparentMagnitude": 4.39,
    "spectralClass": "A5V",
    "colorIndex": 0.191,
    "color": "#c7ddff",
    "positionLy": [
      45.039,
      -79.349,
      -37.837
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-102639",
    "name": "Gliese GJ 1255-",
    "distanceLy": 98.93,
    "apparentMagnitude": 7.81,
    "spectralClass": "G8V",
    "colorIndex": 0.685,
    "color": "#ffd7a3",
    "positionLy": [
      17.69,
      95.455,
      -19.012
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-69510",
    "name": "Xuange",
    "distanceLy": 99.02,
    "apparentMagnitude": 4.18,
    "spectralClass": "A0sh",
    "colorIndex": 0.087,
    "color": "#c7ddff",
    "positionLy": [
      -56.867,
      71.331,
      -38.496
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-104250",
    "name": "Gliese GJ 4183",
    "distanceLy": 99.17,
    "apparentMagnitude": 7.83,
    "spectralClass": "G8IV",
    "colorIndex": 0.78,
    "color": "#ffd7a3",
    "positionLy": [
      51.526,
      70.675,
      -46.729
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-46272",
    "name": "Gliese 344A",
    "distanceLy": 99.2,
    "apparentMagnitude": 5.38,
    "spectralClass": "G2V",
    "colorIndex": 0.642,
    "color": "#ffd7a3",
    "positionLy": [
      -77.672,
      -10.492,
      60.804
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118984",
    "name": "Gliese 561.1B",
    "distanceLy": 99.26,
    "apparentMagnitude": 7.14,
    "spectralClass": "dF9",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -67.122,
      -42.644,
      -59.391
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-6672",
    "name": "Ruchbah",
    "distanceLy": 99.41,
    "apparentMagnitude": 2.66,
    "spectralClass": "A5Vv SB",
    "colorIndex": 0.16,
    "color": "#c7ddff",
    "positionLy": [
      45.931,
      86.293,
      18.05
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-85567",
    "name": "Nu-2 Dra",
    "distanceLy": 99.44,
    "apparentMagnitude": 4.86,
    "spectralClass": "Am",
    "colorIndex": 0.279,
    "color": "#fff2d2",
    "positionLy": [
      -6.855,
      81.626,
      -56.373
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-77420",
    "name": "Kap CrB",
    "distanceLy": 99.47,
    "apparentMagnitude": 4.79,
    "spectralClass": "K0III-IV",
    "colorIndex": 0.996,
    "color": "#ffd7a3",
    "positionLy": [
      -43.057,
      57.983,
      -68.395
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-6442",
    "name": "Gliese 57.1A",
    "distanceLy": 99.5,
    "apparentMagnitude": 7.85,
    "spectralClass": "K0IV",
    "colorIndex": 0.9,
    "color": "#ffd7a3",
    "positionLy": [
      90.666,
      -22.325,
      34.37
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-74595",
    "name": "Bet Cir",
    "distanceLy": 99.65,
    "apparentMagnitude": 4.07,
    "spectralClass": "A3V",
    "colorIndex": 0.088,
    "color": "#c7ddff",
    "positionLy": [
      -33.608,
      -85.239,
      -39.181
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-96232",
    "name": "Gliese 764.2",
    "distanceLy": 99.68,
    "apparentMagnitude": 5.46,
    "spectralClass": "F7V",
    "colorIndex": 0.501,
    "color": "#fff2d2",
    "positionLy": [
      39.892,
      -24.624,
      -87.968
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-21703",
    "name": "Gliese 175A",
    "distanceLy": 99.8,
    "apparentMagnitude": 6.53,
    "spectralClass": "G5V",
    "colorIndex": 0.677,
    "color": "#ffd7a3",
    "positionLy": [
      17.547,
      -85.498,
      48.404
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-65774",
    "name": "Gliese GJ 3788",
    "distanceLy": 100.14,
    "apparentMagnitude": 7.32,
    "spectralClass": "G9V",
    "colorIndex": 0.781,
    "color": "#ffd7a3",
    "positionLy": [
      -92.159,
      -4.049,
      -38.961
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-115348",
    "name": "Omi Gru",
    "distanceLy": 100.36,
    "apparentMagnitude": 5.53,
    "spectralClass": "F4V",
    "colorIndex": 0.409,
    "color": "#fff2d2",
    "positionLy": [
      60.141,
      -79.854,
      -8.825
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-53098",
    "name": "Gliese 403.1",
    "distanceLy": 100.48,
    "apparentMagnitude": 5.23,
    "spectralClass": "F6V",
    "colorIndex": 0.48,
    "color": "#fff2d2",
    "positionLy": [
      -90.392,
      -34.594,
      26.993
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-62150",
    "name": "Gliese GJ 3746",
    "distanceLy": 100.6,
    "apparentMagnitude": 6.87,
    "spectralClass": "G5",
    "colorIndex": 0.695,
    "color": "#ffd7a3",
    "positionLy": [
      -96.451,
      -20.594,
      -19.849
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-14465",
    "name": "Gliese GJ 3200",
    "distanceLy": 100.67,
    "apparentMagnitude": 6.97,
    "spectralClass": "G3V",
    "colorIndex": 0.645,
    "color": "#ffd7a3",
    "positionLy": [
      66.898,
      -23.947,
      71.308
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-35253",
    "name": "Lam Gem",
    "distanceLy": 100.88,
    "apparentMagnitude": 3.58,
    "spectralClass": "A3V...",
    "colorIndex": 0.106,
    "color": "#c7ddff",
    "positionLy": [
      -32.319,
      28.721,
      91.148
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-101442",
    "name": "Rotanev",
    "distanceLy": 100.88,
    "apparentMagnitude": 3.64,
    "spectralClass": "F5IV",
    "colorIndex": 0.425,
    "color": "#fff2d2",
    "positionLy": [
      61.95,
      25.421,
      -75.454
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118786",
    "name": "Gliese 452.5B",
    "distanceLy": 100.88,
    "apparentMagnitude": 7.7,
    "spectralClass": "unknown",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -56.265,
      -83.738,
      1.225
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-68675",
    "name": "Pi Hya",
    "distanceLy": 100.98,
    "apparentMagnitude": 3.25,
    "spectralClass": "K2III",
    "colorIndex": 1.091,
    "color": "#ffb17b",
    "positionLy": [
      -76.853,
      -45.344,
      -47.267
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118328",
    "name": "Gliese 175B",
    "distanceLy": 100.98,
    "apparentMagnitude": 7.4,
    "spectralClass": "unknown",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      17.751,
      -86.503,
      48.974
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-108922",
    "name": "Alnair",
    "distanceLy": 101.01,
    "apparentMagnitude": 1.73,
    "spectralClass": "B7IV",
    "colorIndex": -0.07,
    "color": "#c7ddff",
    "positionLy": [
      60.901,
      -73.826,
      -32.302
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-59390",
    "name": "Gliese GJ 3715",
    "distanceLy": 101.07,
    "apparentMagnitude": 7.92,
    "spectralClass": "G8V",
    "colorIndex": 0.792,
    "color": "#ffd7a3",
    "positionLy": [
      -99.364,
      17.616,
      -5.624
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-91004",
    "name": "Gliese GJ 9630",
    "distanceLy": 101.07,
    "apparentMagnitude": 7.43,
    "spectralClass": "G5V",
    "colorIndex": 0.687,
    "color": "#ffd7a3",
    "positionLy": [
      14.727,
      -43.784,
      -89.896
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-100086",
    "name": "Gliese GJ 9691",
    "distanceLy": 101.17,
    "apparentMagnitude": 6.26,
    "spectralClass": "G2IV-V",
    "colorIndex": 0.549,
    "color": "#fff2d2",
    "positionLy": [
      37.689,
      -77.497,
      -52.993
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-75229",
    "name": "Edasich",
    "distanceLy": 101.2,
    "apparentMagnitude": 3.29,
    "spectralClass": "K2III",
    "colorIndex": 1.166,
    "color": "#ffb17b",
    "positionLy": [
      -32.668,
      86.711,
      -40.677
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-55321",
    "name": "Gliese 426A",
    "distanceLy": 101.26,
    "apparentMagnitude": 7.93,
    "spectralClass": "K6+...",
    "colorIndex": 0.894,
    "color": "#ffd7a3",
    "positionLy": [
      -94.867,
      31.61,
      15.951
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-11322",
    "name": "Gliese GJ 9082",
    "distanceLy": 101.73,
    "apparentMagnitude": 7.94,
    "spectralClass": "G5",
    "colorIndex": 0.807,
    "color": "#ffd7a3",
    "positionLy": [
      81.356,
      10.245,
      60.216
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-75150",
    "name": "Eps Lib",
    "distanceLy": 101.86,
    "apparentMagnitude": 4.92,
    "spectralClass": "F5IV",
    "colorIndex": 0.453,
    "color": "#fff2d2",
    "positionLy": [
      -62.998,
      -18.252,
      -77.933
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118625",
    "name": "Gliese 344B",
    "distanceLy": 101.89,
    "apparentMagnitude": 6.6,
    "spectralClass": "unknown",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -79.788,
      -10.775,
      62.462
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-95663",
    "name": "Gliese GJ 9659",
    "distanceLy": 102.15,
    "apparentMagnitude": 7.27,
    "spectralClass": "G0",
    "colorIndex": 0.64,
    "color": "#ffd7a3",
    "positionLy": [
      39.197,
      -11.589,
      -93.614
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-25853",
    "name": "Gam Men",
    "distanceLy": 102.28,
    "apparentMagnitude": 5.18,
    "spectralClass": "K4III",
    "colorIndex": 1.13,
    "color": "#ffb17b",
    "positionLy": [
      2.956,
      -99.384,
      23.971
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-111000",
    "name": "Gliese GJ 9787",
    "distanceLy": 102.37,
    "apparentMagnitude": 7.8,
    "spectralClass": "G5V",
    "colorIndex": 0.721,
    "color": "#ffd7a3",
    "positionLy": [
      77.53,
      -59.366,
      -30.731
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-111215",
    "name": "Gliese 863.3",
    "distanceLy": 102.5,
    "apparentMagnitude": 7.58,
    "spectralClass": "G5V",
    "colorIndex": 0.67,
    "color": "#ffd7a3",
    "positionLy": [
      55.431,
      -83.564,
      -21.242
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-115884",
    "name": "Gliese GJ 4340",
    "distanceLy": 102.53,
    "apparentMagnitude": 5.82,
    "spectralClass": "G2V",
    "colorIndex": 0.681,
    "color": "#ffd7a3",
    "positionLy": [
      22.241,
      -100.058,
      -2.6
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-110822",
    "name": "Alp Lac",
    "distanceLy": 102.6,
    "apparentMagnitude": 3.76,
    "spectralClass": "A1V",
    "colorIndex": 0.031,
    "color": "#c7ddff",
    "positionLy": [
      60.71,
      78.918,
      -24.747
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-86839",
    "name": "Gam Oph",
    "distanceLy": 102.79,
    "apparentMagnitude": 3.75,
    "spectralClass": "A0V",
    "colorIndex": 0.043,
    "color": "#c7ddff",
    "positionLy": [
      -5.422,
      4.855,
      -102.533
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-49627",
    "name": "Gliese 379.1A",
    "distanceLy": 103.18,
    "apparentMagnitude": 6.14,
    "spectralClass": "G1V",
    "colorIndex": 0.615,
    "color": "#ffd7a3",
    "positionLy": [
      -74.099,
      -60.44,
      38.767
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-104342",
    "name": "Gliese GJ 9726",
    "distanceLy": 103.28,
    "apparentMagnitude": 5.83,
    "spectralClass": "F5IV",
    "colorIndex": 0.45,
    "color": "#fff2d2",
    "positionLy": [
      58.615,
      -66.758,
      -52.672
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-48878",
    "name": "Gliese GJ 3580",
    "distanceLy": 103.34,
    "apparentMagnitude": 7.86,
    "spectralClass": "K0V SB",
    "colorIndex": 0.868,
    "color": "#ffd7a3",
    "positionLy": [
      -81.413,
      42.943,
      46.99
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-104876",
    "name": "Gliese 825.1",
    "distanceLy": 103.48,
    "apparentMagnitude": 6.6,
    "spectralClass": "G5V",
    "colorIndex": 0.689,
    "color": "#ffd7a3",
    "positionLy": [
      37.826,
      -90.809,
      -32.096
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-41892",
    "name": "Gliese GJ 9269",
    "distanceLy": 103.51,
    "apparentMagnitude": 7.22,
    "spectralClass": "K1IV:+...",
    "colorIndex": 0.745,
    "color": "#ffd7a3",
    "positionLy": [
      -59.079,
      -41.035,
      74.431
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-87474",
    "name": "Gliese GJ 4034",
    "distanceLy": 103.71,
    "apparentMagnitude": 7.92,
    "spectralClass": "G5",
    "colorIndex": 0.859,
    "color": "#ffd7a3",
    "positionLy": [
      -1.676,
      61.233,
      -83.682
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-67088",
    "name": "Alkaid",
    "distanceLy": 103.94,
    "apparentMagnitude": 1.85,
    "spectralClass": "B3V SB",
    "colorIndex": -0.099,
    "color": "#c7ddff",
    "positionLy": [
      -60.435,
      78.814,
      -30.641
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-96271",
    "name": "Gliese GJ 4118",
    "distanceLy": 104.24,
    "apparentMagnitude": 7.51,
    "spectralClass": "G5",
    "colorIndex": 0.719,
    "color": "#ffd7a3",
    "positionLy": [
      35.877,
      58.127,
      -78.736
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-117900",
    "name": "Ome Psc",
    "distanceLy": 104.34,
    "apparentMagnitude": 4.03,
    "spectralClass": "F4IV",
    "colorIndex": 0.419,
    "color": "#fff2d2",
    "positionLy": [
      103.589,
      12.468,
      -0.311
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-14052",
    "name": "Eps For",
    "distanceLy": 105.01,
    "apparentMagnitude": 5.88,
    "spectralClass": "G8/K0V",
    "colorIndex": 0.794,
    "color": "#ffd7a3",
    "positionLy": [
      65.039,
      -49.447,
      65.969
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-98184",
    "name": "Eps Pav",
    "distanceLy": 105.08,
    "apparentMagnitude": 3.97,
    "spectralClass": "A0V",
    "colorIndex": -0.032,
    "color": "#c7ddff",
    "positionLy": [
      15.508,
      -100.437,
      -26.701
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-85998",
    "name": "Xi Ser",
    "distanceLy": 105.28,
    "apparentMagnitude": 3.54,
    "spectralClass": "F0IIIp",
    "colorIndex": 0.262,
    "color": "#fff2d2",
    "positionLy": [
      -9.91,
      -27.955,
      -101.014
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-35046",
    "name": "Gliese GJ 3436",
    "distanceLy": 105.38,
    "apparentMagnitude": 7.74,
    "spectralClass": "G5V",
    "colorIndex": 0.607,
    "color": "#ffd7a3",
    "positionLy": [
      -33.358,
      -23.795,
      97.091
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-3086",
    "name": "Del And",
    "distanceLy": 105.52,
    "apparentMagnitude": 3.27,
    "spectralClass": "K3III...",
    "colorIndex": 1.268,
    "color": "#ffb17b",
    "positionLy": [
      89.248,
      54.126,
      15.467
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-3472",
    "name": "Cocibolca",
    "distanceLy": 105.59,
    "apparentMagnitude": 7.78,
    "spectralClass": "G5V",
    "colorIndex": 0.664,
    "color": "#ffd7a3",
    "positionLy": [
      92.71,
      -47.139,
      18.208
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-48099",
    "name": "Natasha",
    "distanceLy": 105.59,
    "apparentMagnitude": 8.54,
    "spectralClass": "K1V",
    "colorIndex": 0.855,
    "color": "#ffd7a3",
    "positionLy": [
      -57.497,
      -80.635,
      36.615
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-697",
    "name": "Gliese 6",
    "distanceLy": 105.83,
    "apparentMagnitude": 6.21,
    "spectralClass": "F8IV",
    "colorIndex": 0.504,
    "color": "#fff2d2",
    "positionLy": [
      84.868,
      63.136,
      3.217
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-24599",
    "name": "Omi Col",
    "distanceLy": 105.83,
    "apparentMagnitude": 4.81,
    "spectralClass": "K0/K1III/IV",
    "colorIndex": 0.987,
    "color": "#ffd7a3",
    "positionLy": [
      16.01,
      -60.541,
      85.31
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-99743",
    "name": "Algedi",
    "distanceLy": 105.83,
    "apparentMagnitude": 3.58,
    "spectralClass": "G6/G8III",
    "colorIndex": 0.883,
    "color": "#ffd7a3",
    "positionLy": [
      58.53,
      -22.986,
      -85.118
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-112389",
    "name": "Sadalbari",
    "distanceLy": 106.1,
    "apparentMagnitude": 3.51,
    "spectralClass": "M2III",
    "colorIndex": 0.933,
    "color": "#ffd7a3",
    "positionLy": [
      92.006,
      44.171,
      -29.008
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-69658",
    "name": "Gliese 541.1",
    "distanceLy": 106.14,
    "apparentMagnitude": 6.47,
    "spectralClass": "F9V",
    "colorIndex": 0.723,
    "color": "#ffd7a3",
    "positionLy": [
      -86.709,
      -13.931,
      -59.6
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-62412",
    "name": "Gliese GJ 3752",
    "distanceLy": 106.21,
    "apparentMagnitude": 8.13,
    "spectralClass": "G8V",
    "colorIndex": 0.686,
    "color": "#ffd7a3",
    "positionLy": [
      -103.691,
      2.202,
      -22.868
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-13908",
    "name": "Zet For",
    "distanceLy": 106.38,
    "apparentMagnitude": 5.69,
    "spectralClass": "F3V",
    "colorIndex": 0.427,
    "color": "#fff2d2",
    "positionLy": [
      68.138,
      -45.418,
      67.903
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-112684",
    "name": "Tau-1 Gru",
    "distanceLy": 106.38,
    "apparentMagnitude": 6.03,
    "spectralClass": "G3IV",
    "colorIndex": 0.621,
    "color": "#ffd7a3",
    "positionLy": [
      67.422,
      -79.793,
      -20.089
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-45440",
    "name": "Gliese 340.1A",
    "distanceLy": 106.45,
    "apparentMagnitude": 5.38,
    "spectralClass": "F4V",
    "colorIndex": 0.415,
    "color": "#fff2d2",
    "positionLy": [
      -29.338,
      -99.17,
      25.216
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-79640",
    "name": "Yed Posterior",
    "distanceLy": 106.45,
    "apparentMagnitude": 3.23,
    "spectralClass": "G8III",
    "colorIndex": 0.966,
    "color": "#ffd7a3",
    "positionLy": [
      -45.539,
      -8.708,
      -95.82
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-116562",
    "name": "Lam Psc",
    "distanceLy": 106.62,
    "apparentMagnitude": 4.49,
    "spectralClass": "A7V",
    "colorIndex": 0.2,
    "color": "#c7ddff",
    "positionLy": [
      106.244,
      3.312,
      -8.34
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-50527",
    "name": "Gliese 388.2",
    "distanceLy": 106.76,
    "apparentMagnitude": 7.17,
    "spectralClass": "G1V",
    "colorIndex": 0.553,
    "color": "#fff2d2",
    "positionLy": [
      -93.408,
      -28.495,
      43.144
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-101181",
    "name": "Gliese GJ 4147",
    "distanceLy": 107.01,
    "apparentMagnitude": 6.11,
    "spectralClass": "G0V",
    "colorIndex": 0.543,
    "color": "#fff2d2",
    "positionLy": [
      64.781,
      -25.381,
      -81.298
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-9075",
    "name": "Gliese 81.1A",
    "distanceLy": 107.15,
    "apparentMagnitude": 6.42,
    "spectralClass": "G5",
    "colorIndex": 0.817,
    "color": "#ffd7a3",
    "positionLy": [
      91.959,
      -19.052,
      51.584
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-41195",
    "name": "Bet Vol",
    "distanceLy": 107.54,
    "apparentMagnitude": 3.77,
    "spectralClass": "K2IIIvar",
    "colorIndex": 1.132,
    "color": "#ffb17b",
    "positionLy": [
      -25.837,
      -98.344,
      35.001
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-95927",
    "name": "Mu Aql",
    "distanceLy": 107.61,
    "apparentMagnitude": 4.45,
    "spectralClass": "K3III",
    "colorIndex": 1.176,
    "color": "#ffb17b",
    "positionLy": [
      42.591,
      13.82,
      -97.847
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-46322",
    "name": "Ome Leo",
    "distanceLy": 108.18,
    "apparentMagnitude": 5.4,
    "spectralClass": "F9V",
    "colorIndex": 0.605,
    "color": "#ffd7a3",
    "positionLy": [
      -84.313,
      17.029,
      65.603
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-37933",
    "name": "Tapecue",
    "distanceLy": 108.47,
    "apparentMagnitude": 8.1,
    "spectralClass": "G6IV/V",
    "colorIndex": 0.745,
    "color": "#ffd7a3",
    "positionLy": [
      -28.718,
      -88.043,
      56.466
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-48786",
    "name": "Eta Ant",
    "distanceLy": 108.65,
    "apparentMagnitude": 5.23,
    "spectralClass": "A8IV",
    "colorIndex": 0.3,
    "color": "#fff2d2",
    "positionLy": [
      -76.009,
      -63.694,
      44.384
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-81583",
    "name": "Eta Her",
    "distanceLy": 108.65,
    "apparentMagnitude": 3.48,
    "spectralClass": "G8III-IV",
    "colorIndex": 0.916,
    "color": "#ffd7a3",
    "positionLy": [
      -27.904,
      68.259,
      -79.788
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-38071",
    "name": "Gliese GJ 9242",
    "distanceLy": 108.68,
    "apparentMagnitude": 7.49,
    "spectralClass": "G5V",
    "colorIndex": 0.675,
    "color": "#ffd7a3",
    "positionLy": [
      -25.441,
      -93.529,
      49.162
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-7525",
    "name": "Gliese 62",
    "distanceLy": 108.75,
    "apparentMagnitude": 8.14,
    "spectralClass": "K1V",
    "colorIndex": 0.83,
    "color": "#ffd7a3",
    "positionLy": [
      86.37,
      -53.377,
      38.972
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-113278",
    "name": "Zet Gru",
    "distanceLy": 108.86,
    "apparentMagnitude": 4.11,
    "spectralClass": "G8III",
    "colorIndex": 0.96,
    "color": "#ffd7a3",
    "positionLy": [
      63.708,
      -86.66,
      -16.809
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-31601",
    "name": "Alhena",
    "distanceLy": 109.3,
    "apparentMagnitude": 1.93,
    "spectralClass": "A0IV",
    "colorIndex": 0.001,
    "color": "#c7ddff",
    "positionLy": [
      -17.176,
      30.859,
      103.438
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-51112",
    "name": "Gliese GJ 3603",
    "distanceLy": 109.34,
    "apparentMagnitude": 7.89,
    "spectralClass": "K0V",
    "colorIndex": 0.81,
    "color": "#ffd7a3",
    "positionLy": [
      -100.017,
      -12.568,
      42.351
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118619",
    "name": "Gliese 340.1B",
    "distanceLy": 109.34,
    "apparentMagnitude": 6.13,
    "spectralClass": "unknown",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -30.137,
      -101.862,
      25.899
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-63405",
    "name": "Vindemiatrix",
    "distanceLy": 109.6,
    "apparentMagnitude": 2.85,
    "spectralClass": "G8IIIvar",
    "colorIndex": 0.934,
    "color": "#ffd7a3",
    "positionLy": [
      -103.661,
      20.835,
      -28.834
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-15159",
    "name": "Zibal",
    "distanceLy": 109.74,
    "apparentMagnitude": 4.8,
    "spectralClass": "A5m",
    "colorIndex": 0.232,
    "color": "#c7ddff",
    "positionLy": [
      71.206,
      -16.826,
      81.793
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-26316",
    "name": "Gliese 209",
    "distanceLy": 109.82,
    "apparentMagnitude": 7.68,
    "spectralClass": "G4IV-V",
    "colorIndex": 0.667,
    "color": "#ffd7a3",
    "positionLy": [
      10.271,
      38.872,
      102.191
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-21541",
    "name": "Sceptrum",
    "distanceLy": 109.85,
    "apparentMagnitude": 3.86,
    "spectralClass": "K1III",
    "colorIndex": 1.082,
    "color": "#ffb17b",
    "positionLy": [
      37.201,
      -27.142,
      99.738
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-93755",
    "name": "Gliese GJ 4096",
    "distanceLy": 110.37,
    "apparentMagnitude": 7.89,
    "spectralClass": "K1V",
    "colorIndex": 0.862,
    "color": "#ffd7a3",
    "positionLy": [
      24.105,
      -74.465,
      -77.821
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-17055",
    "name": "Tupi",
    "distanceLy": 110.52,
    "apparentMagnitude": 7.12,
    "spectralClass": "F8/G0V",
    "colorIndex": 0.583,
    "color": "#fff2d2",
    "positionLy": [
      38.293,
      -88.17,
      54.545
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-12256",
    "name": "Iot-2 For",
    "distanceLy": 110.71,
    "apparentMagnitude": 5.84,
    "spectralClass": "F5V",
    "colorIndex": 0.476,
    "color": "#fff2d2",
    "positionLy": [
      73.755,
      -55.681,
      60.967
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-54881",
    "name": "Gliese 421.1A",
    "distanceLy": 111.28,
    "apparentMagnitude": 6.51,
    "spectralClass": "F6V+...",
    "colorIndex": 0.437,
    "color": "#fff2d2",
    "positionLy": [
      -66.086,
      88.604,
      12.826
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-71405",
    "name": "Gliese 559.1",
    "distanceLy": 111.32,
    "apparentMagnitude": 7.6,
    "spectralClass": "F8",
    "colorIndex": 0.626,
    "color": "#ffd7a3",
    "positionLy": [
      -37.125,
      100.297,
      -30.878
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-107011",
    "name": "Kap Peg",
    "distanceLy": 111.62,
    "apparentMagnitude": 4.14,
    "spectralClass": "F5IV",
    "colorIndex": 0.425,
    "color": "#fff2d2",
    "positionLy": [
      83.58,
      48.309,
      -56.034
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-12274",
    "name": "Gliese GJ 9089",
    "distanceLy": 111.81,
    "apparentMagnitude": 7.36,
    "spectralClass": "G0V",
    "colorIndex": 0.583,
    "color": "#fff2d2",
    "positionLy": [
      73.97,
      57.279,
      61.228
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-75466",
    "name": "Nusakan",
    "distanceLy": 111.81,
    "apparentMagnitude": 3.66,
    "spectralClass": "F0p",
    "colorIndex": 0.319,
    "color": "#fff2d2",
    "positionLy": [
      -60.203,
      54.388,
      -76.938
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-79000",
    "name": "Gliese 606.1A",
    "distanceLy": 111.97,
    "apparentMagnitude": 7.7,
    "spectralClass": "K0V",
    "colorIndex": 0.79,
    "color": "#ffd7a3",
    "positionLy": [
      -5.185,
      -111.399,
      -9.988
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-30832",
    "name": "Lusitânia",
    "distanceLy": 112.04,
    "apparentMagnitude": 8.1,
    "spectralClass": "K5",
    "colorIndex": 0.846,
    "color": "#ffd7a3",
    "positionLy": [
      -13.988,
      21.252,
      109.116
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-95633",
    "name": "Mu Tel",
    "distanceLy": 112.12,
    "apparentMagnitude": 6.29,
    "spectralClass": "F5V",
    "colorIndex": 0.45,
    "color": "#fff2d2",
    "positionLy": [
      24.692,
      -91.967,
      -59.189
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-10645",
    "name": "Gam Tri",
    "distanceLy": 112.31,
    "apparentMagnitude": 4.03,
    "spectralClass": "A1Vnn",
    "colorIndex": 0.019,
    "color": "#c7ddff",
    "positionLy": [
      77.031,
      62.556,
      52.604
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-49700",
    "name": "Lam Hya",
    "distanceLy": 112.55,
    "apparentMagnitude": 3.61,
    "spectralClass": "K0III",
    "colorIndex": 1.007,
    "color": "#ffb17b",
    "positionLy": [
      -97.648,
      -24.079,
      50.514
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-87314",
    "name": "Grumium",
    "distanceLy": 112.55,
    "apparentMagnitude": 3.73,
    "spectralClass": "K2III",
    "colorIndex": 1.177,
    "color": "#ffb17b",
    "positionLy": [
      -1.736,
      94.251,
      -61.481
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-37178",
    "name": "Ceibo",
    "distanceLy": 112.66,
    "apparentMagnitude": 9.37,
    "spectralClass": "K4V",
    "colorIndex": 1.006,
    "color": "#ffb17b",
    "positionLy": [
      -9.615,
      -110.313,
      20.769
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-14632",
    "name": "Misam",
    "distanceLy": 112.74,
    "apparentMagnitude": 3.79,
    "spectralClass": "K0III",
    "colorIndex": 0.98,
    "color": "#ffd7a3",
    "positionLy": [
      54.121,
      79.521,
      58.803
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-75182",
    "name": "Alkalurops",
    "distanceLy": 113.13,
    "apparentMagnitude": 4.31,
    "spectralClass": "F0V",
    "colorIndex": 0.309,
    "color": "#fff2d2",
    "positionLy": [
      -56.426,
      68.677,
      -69.986
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-45106",
    "name": "Miaplacidus",
    "distanceLy": 113.17,
    "apparentMagnitude": 1.67,
    "spectralClass": "A2IV",
    "colorIndex": 0.07,
    "color": "#c7ddff",
    "positionLy": [
      -29.291,
      -106.152,
      26.098
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-45204",
    "name": "The Hya",
    "distanceLy": 113.49,
    "apparentMagnitude": 3.89,
    "spectralClass": "B9.5V",
    "colorIndex": -0.06,
    "color": "#c7ddff",
    "positionLy": [
      -85.045,
      4.583,
      75.001
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-2796",
    "name": "Lam-2 Phe",
    "distanceLy": 113.56,
    "apparentMagnitude": 5.51,
    "spectralClass": "F6V",
    "colorIndex": 0.461,
    "color": "#fff2d2",
    "positionLy": [
      75.069,
      -84.396,
      11.784
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-33142",
    "name": "Gliese 253",
    "distanceLy": 113.6,
    "apparentMagnitude": 8.17,
    "spectralClass": "G7V",
    "colorIndex": 0.771,
    "color": "#ffd7a3",
    "positionLy": [
      -15.348,
      -93.354,
      62.894
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-59350",
    "name": "Gliese 458.1A",
    "distanceLy": 113.68,
    "apparentMagnitude": 7.43,
    "spectralClass": "G4V",
    "colorIndex": 0.701,
    "color": "#ffd7a3",
    "positionLy": [
      -113.35,
      -6.117,
      -6.179
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-27585",
    "name": "Del Lep",
    "distanceLy": 113.72,
    "apparentMagnitude": 3.76,
    "spectralClass": "G8III/IV",
    "colorIndex": 0.984,
    "color": "#ffd7a3",
    "positionLy": [
      4.023,
      -40.531,
      106.181
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-6523",
    "name": "The Cet",
    "distanceLy": 113.8,
    "apparentMagnitude": 3.6,
    "spectralClass": "K0III",
    "colorIndex": 1.065,
    "color": "#ffb17b",
    "positionLy": [
      105.158,
      -16.199,
      40.379
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-22866",
    "name": "Gliese GJ 9169A",
    "distanceLy": 113.88,
    "apparentMagnitude": 7.02,
    "spectralClass": "F8",
    "colorIndex": 0.561,
    "color": "#fff2d2",
    "positionLy": [
      31.318,
      9.273,
      109.097
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-115893",
    "name": "Gliese GJ 9830",
    "distanceLy": 113.96,
    "apparentMagnitude": 7.14,
    "spectralClass": "G0",
    "colorIndex": 0.585,
    "color": "#fff2d2",
    "positionLy": [
      82.991,
      77.498,
      -9.675
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-14207",
    "name": "Gliese 121.2",
    "distanceLy": 114.28,
    "apparentMagnitude": 8.08,
    "spectralClass": "G5",
    "colorIndex": 0.677,
    "color": "#ffd7a3",
    "positionLy": [
      79.122,
      -11.283,
      81.683
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-7521",
    "name": "Pi Psc",
    "distanceLy": 114.44,
    "apparentMagnitude": 5.54,
    "spectralClass": "F0V",
    "colorIndex": 0.347,
    "color": "#fff2d2",
    "positionLy": [
      101.989,
      24.07,
      45.995
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-62925",
    "name": "Cor Caroli",
    "distanceLy": 114.8,
    "apparentMagnitude": 2.89,
    "spectralClass": "A0spe...",
    "colorIndex": -0.115,
    "color": "#9fc7ff",
    "positionLy": [
      -87.394,
      71.182,
      -21.801
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-19697",
    "name": "Alp Hor",
    "distanceLy": 115.01,
    "apparentMagnitude": 3.85,
    "spectralClass": "K1III",
    "colorIndex": 1.085,
    "color": "#ffb17b",
    "positionLy": [
      37.957,
      -77.392,
      76.132
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-5517",
    "name": "Emiw",
    "distanceLy": 115.13,
    "apparentMagnitude": 8.06,
    "spectralClass": "K0IV/V",
    "colorIndex": 0.849,
    "color": "#ffd7a3",
    "positionLy": [
      44.281,
      -105.327,
      14.129
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-86024",
    "name": "Gliese 683.1",
    "distanceLy": 115.25,
    "apparentMagnitude": 7.16,
    "spectralClass": "G4IV-V",
    "colorIndex": 0.641,
    "color": "#ffd7a3",
    "positionLy": [
      -8.173,
      -77.962,
      -84.485
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-13668",
    "name": "Rho-3 Ari",
    "distanceLy": 115.29,
    "apparentMagnitude": 5.58,
    "spectralClass": "F6V",
    "colorIndex": 0.471,
    "color": "#fff2d2",
    "positionLy": [
      78.719,
      35.671,
      76.308
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-112364",
    "name": "Iot Cep",
    "distanceLy": 115.29,
    "apparentMagnitude": 3.5,
    "spectralClass": "K0III",
    "colorIndex": 1.053,
    "color": "#ffb17b",
    "positionLy": [
      44.351,
      105.486,
      -14.052
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-103550",
    "name": "Zet Mic",
    "distanceLy": 115.37,
    "apparentMagnitude": 5.32,
    "spectralClass": "F3V",
    "colorIndex": 0.424,
    "color": "#fff2d2",
    "positionLy": [
      64.548,
      -72.028,
      -62.899
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-61404",
    "name": "Gliese 479.1",
    "distanceLy": 115.41,
    "apparentMagnitude": 6.99,
    "spectralClass": "G0",
    "colorIndex": 0.633,
    "color": "#ffd7a3",
    "positionLy": [
      -21.31,
      113.374,
      -3.501
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-49998",
    "name": "Gliese GJ 9322",
    "distanceLy": 115.49,
    "apparentMagnitude": 7.75,
    "spectralClass": "G1V",
    "colorIndex": 0.609,
    "color": "#ffd7a3",
    "positionLy": [
      -103.234,
      6.349,
      51.393
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-114692",
    "name": "Phi Gru",
    "distanceLy": 115.49,
    "apparentMagnitude": 5.54,
    "spectralClass": "F5V",
    "colorIndex": 0.445,
    "color": "#fff2d2",
    "positionLy": [
      85.945,
      -75.504,
      -15.865
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-102362",
    "name": "Iot Mic",
    "distanceLy": 115.54,
    "apparentMagnitude": 5.11,
    "spectralClass": "F1IV",
    "colorIndex": 0.361,
    "color": "#fff2d2",
    "positionLy": [
      55.752,
      -80.241,
      -61.656
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-59249",
    "name": "Gliese GJ 3712B",
    "distanceLy": 115.62,
    "apparentMagnitude": 8.14,
    "spectralClass": "K0",
    "colorIndex": 0.88,
    "color": "#ffd7a3",
    "positionLy": [
      -68.817,
      92.842,
      -3.44
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-75026",
    "name": "Gliese 582.1A",
    "distanceLy": 115.66,
    "apparentMagnitude": 7.68,
    "spectralClass": "G5V",
    "colorIndex": 0.657,
    "color": "#ffd7a3",
    "positionLy": [
      -49.143,
      -85.844,
      -59.938
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-95522",
    "name": "Gliese 761.1",
    "distanceLy": 115.78,
    "apparentMagnitude": 6.95,
    "spectralClass": "G5",
    "colorIndex": 0.718,
    "color": "#ffd7a3",
    "positionLy": [
      37.479,
      60.683,
      -91.204
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-48182",
    "name": "Ups UMa",
    "distanceLy": 116.24,
    "apparentMagnitude": 3.78,
    "spectralClass": "F0IV",
    "colorIndex": 0.291,
    "color": "#fff2d2",
    "positionLy": [
      -50.572,
      99.674,
      31.912
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-22792",
    "name": "Pi-1 Ori",
    "distanceLy": 116.32,
    "apparentMagnitude": 4.64,
    "spectralClass": "A0V",
    "colorIndex": 0.085,
    "color": "#c7ddff",
    "positionLy": [
      32.09,
      20.5,
      109.909
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-87550",
    "name": "Gliese GJ 4033",
    "distanceLy": 116.4,
    "apparentMagnitude": 6.36,
    "spectralClass": "F8V",
    "colorIndex": 0.451,
    "color": "#fff2d2",
    "positionLy": [
      -0.751,
      -106.106,
      -47.854
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-2241",
    "name": "Felixvarela",
    "distanceLy": 116.44,
    "apparentMagnitude": 9.62,
    "spectralClass": "K5V",
    "colorIndex": 1.128,
    "color": "#ffb17b",
    "positionLy": [
      110.936,
      -32.538,
      13.902
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-24769",
    "name": "Zet Pic",
    "distanceLy": 116.48,
    "apparentMagnitude": 5.44,
    "spectralClass": "F7III-IV",
    "colorIndex": 0.517,
    "color": "#fff2d2",
    "positionLy": [
      13.038,
      -90.02,
      72.769
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-45056",
    "name": "Gliese GJ 3539",
    "distanceLy": 116.65,
    "apparentMagnitude": 7.65,
    "spectralClass": "G5",
    "colorIndex": 0.794,
    "color": "#ffd7a3",
    "positionLy": [
      -56.741,
      88.313,
      50.88
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-78879",
    "name": "Tau CrB",
    "distanceLy": 116.69,
    "apparentMagnitude": 4.73,
    "spectralClass": "K0III-IV",
    "colorIndex": 1.015,
    "color": "#ffb17b",
    "positionLy": [
      -43.692,
      69.396,
      -83.02
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-18860",
    "name": "Nu Tau",
    "distanceLy": 116.94,
    "apparentMagnitude": 3.91,
    "spectralClass": "A1V",
    "colorIndex": 0.032,
    "color": "#c7ddff",
    "positionLy": [
      56.76,
      12.202,
      101.514
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-74977",
    "name": "Nu-1 Lup",
    "distanceLy": 116.94,
    "apparentMagnitude": 4.99,
    "spectralClass": "F8V",
    "colorIndex": 0.515,
    "color": "#fff2d2",
    "positionLy": [
      -49.807,
      -86.807,
      -60.494
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-25288",
    "name": "Gliese GJ 9181",
    "distanceLy": 116.99,
    "apparentMagnitude": 7.17,
    "spectralClass": "F8V",
    "colorIndex": 0.538,
    "color": "#fff2d2",
    "positionLy": [
      4.358,
      -113.358,
      28.58
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-52575",
    "name": "Mu Vel",
    "distanceLy": 117.15,
    "apparentMagnitude": 2.69,
    "spectralClass": "G5III SB",
    "colorIndex": 0.901,
    "color": "#ffd7a3",
    "positionLy": [
      -72.352,
      -88.978,
      23.939
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-74167",
    "name": "Zet Lup",
    "distanceLy": 117.32,
    "apparentMagnitude": 3.41,
    "spectralClass": "G8III",
    "colorIndex": 0.918,
    "color": "#ffd7a3",
    "positionLy": [
      -48.158,
      -92.576,
      -53.619
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-26301",
    "name": "Phi-2 Ori",
    "distanceLy": 117.49,
    "apparentMagnitude": 4.09,
    "spectralClass": "G8III-IV",
    "colorIndex": 0.951,
    "color": "#ffd7a3",
    "positionLy": [
      11.664,
      18.969,
      115.365
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-75187",
    "name": "Alkalurops B",
    "distanceLy": 117.62,
    "apparentMagnitude": 6.51,
    "spectralClass": "G1V",
    "colorIndex": 0.6,
    "color": "#ffd7a3",
    "positionLy": [
      -58.68,
      71.352,
      -72.798
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-36870",
    "name": "Gliese GJ 9237",
    "distanceLy": 117.79,
    "apparentMagnitude": 7.16,
    "spectralClass": "G5",
    "colorIndex": 0.564,
    "color": "#fff2d2",
    "positionLy": [
      -47.848,
      -6.476,
      107.437
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-70532",
    "name": "Elgafar",
    "distanceLy": 118.26,
    "apparentMagnitude": 4.81,
    "spectralClass": "G2III",
    "colorIndex": 0.693,
    "color": "#ffd7a3",
    "positionLy": [
      -94.311,
      -4.597,
      -71.199
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-61767",
    "name": "Rho Vir",
    "distanceLy": 118.3,
    "apparentMagnitude": 4.88,
    "spectralClass": "A0V",
    "colorIndex": 0.076,
    "color": "#c7ddff",
    "positionLy": [
      -114.48,
      21.022,
      -21.158
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-104184",
    "name": "Gam Equ",
    "distanceLy": 118.39,
    "apparentMagnitude": 4.7,
    "spectralClass": "F0p",
    "colorIndex": 0.262,
    "color": "#fff2d2",
    "positionLy": [
      86.04,
      20.825,
      -78.605
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-68055",
    "name": "Gliese 534.3",
    "distanceLy": 119.73,
    "apparentMagnitude": 8.16,
    "spectralClass": "G5V",
    "colorIndex": 0.686,
    "color": "#ffd7a3",
    "positionLy": [
      -86.264,
      -66.958,
      -49.11
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-62075",
    "name": "Iot Cru",
    "distanceLy": 120.04,
    "apparentMagnitude": 4.69,
    "spectralClass": "K1III",
    "colorIndex": 1.049,
    "color": "#ffb17b",
    "positionLy": [
      -57.082,
      -104.973,
      -11.519
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-35946",
    "name": "Iot Gem",
    "distanceLy": 120.35,
    "apparentMagnitude": 3.78,
    "spectralClass": "G9III+...",
    "colorIndex": 1.024,
    "color": "#ffb17b",
    "positionLy": [
      -38.901,
      56.128,
      99.102
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-62921",
    "name": "Cor Caroli B",
    "distanceLy": 120.35,
    "apparentMagnitude": 5.61,
    "spectralClass": "F0V",
    "colorIndex": 0.337,
    "color": "#fff2d2",
    "positionLy": [
      -91.625,
      74.617,
      -22.848
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-9888",
    "name": "Gliese GJ 9073A",
    "distanceLy": 120.53,
    "apparentMagnitude": 6.88,
    "spectralClass": "G2V",
    "colorIndex": 0.624,
    "color": "#ffd7a3",
    "positionLy": [
      102.328,
      -1.299,
      63.676
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-15737",
    "name": "Gliese GJ 2030A",
    "distanceLy": 121.16,
    "apparentMagnitude": 6.2,
    "spectralClass": "G2V",
    "colorIndex": 0.702,
    "color": "#ffd7a3",
    "positionLy": [
      75.83,
      -16.431,
      93.055
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-111517",
    "name": "Gliese 867.1A",
    "distanceLy": 121.25,
    "apparentMagnitude": 7.74,
    "spectralClass": "G8/K0V",
    "colorIndex": 0.764,
    "color": "#ffd7a3",
    "positionLy": [
      111.11,
      -26.481,
      -40.673
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-95554",
    "name": "Iot-2 Cyg",
    "distanceLy": 121.34,
    "apparentMagnitude": 3.76,
    "spectralClass": "A5Vn",
    "colorIndex": 0.148,
    "color": "#c7ddff",
    "positionLy": [
      28.671,
      95.262,
      -69.469
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-7887",
    "name": "Gliese GJ 9059",
    "distanceLy": 121.52,
    "apparentMagnitude": 7.7,
    "spectralClass": "G5V",
    "colorIndex": 0.691,
    "color": "#ffd7a3",
    "positionLy": [
      43.048,
      111.784,
      20.447
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-93569",
    "name": "Tau Sgr",
    "distanceLy": 121.61,
    "apparentMagnitude": 3.32,
    "spectralClass": "K1/K2III",
    "colorIndex": 1.169,
    "color": "#ffb17b",
    "positionLy": [
      31.012,
      -56.474,
      -103.141
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-19538",
    "name": "Beid",
    "distanceLy": 121.7,
    "apparentMagnitude": 4.04,
    "spectralClass": "F2II-III",
    "colorIndex": 0.327,
    "color": "#fff2d2",
    "positionLy": [
      54.921,
      -14.489,
      107.632
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-74438",
    "name": "Del Boo",
    "distanceLy": 121.79,
    "apparentMagnitude": 3.46,
    "spectralClass": "G8III",
    "colorIndex": 0.961,
    "color": "#ffd7a3",
    "positionLy": [
      -66.938,
      66.892,
      -76.666
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-3525",
    "name": "Gliese GJ 3050",
    "distanceLy": 121.84,
    "apparentMagnitude": 7.19,
    "spectralClass": "G5",
    "colorIndex": 0.76,
    "color": "#ffd7a3",
    "positionLy": [
      29.032,
      118.185,
      5.785
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-57156",
    "name": "Xi Vir",
    "distanceLy": 122.02,
    "apparentMagnitude": 4.84,
    "spectralClass": "A4V",
    "colorIndex": 0.174,
    "color": "#c7ddff",
    "positionLy": [
      -120.504,
      17.526,
      7.748
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-29715",
    "name": "Gliese GJ 9209A",
    "distanceLy": 122.06,
    "apparentMagnitude": 6.44,
    "spectralClass": "G1V",
    "colorIndex": 0.593,
    "color": "#fff2d2",
    "positionLy": [
      -4.443,
      -104.863,
      62.319
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-89566",
    "name": "Gliese GJ 4052",
    "distanceLy": 122.06,
    "apparentMagnitude": 6.92,
    "spectralClass": "G5",
    "colorIndex": 0.724,
    "color": "#ffd7a3",
    "positionLy": [
      10.524,
      -20.348,
      -119.895
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-30346",
    "name": "Eps Mon",
    "distanceLy": 122.29,
    "apparentMagnitude": 4.39,
    "spectralClass": "A5IV",
    "colorIndex": 0.215,
    "color": "#c7ddff",
    "positionLy": [
      -12.619,
      9.793,
      121.246
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-78673",
    "name": "Del Nor",
    "distanceLy": 122.34,
    "apparentMagnitude": 4.73,
    "spectralClass": "Am",
    "colorIndex": 0.23,
    "color": "#c7ddff",
    "positionLy": [
      -40.99,
      -86.768,
      -75.881
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-41201",
    "name": "Gliese 306.1",
    "distanceLy": 122.43,
    "apparentMagnitude": 7.81,
    "spectralClass": "G5V",
    "colorIndex": 0.643,
    "color": "#ffd7a3",
    "positionLy": [
      -63.047,
      -61.087,
      85.339
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-53905",
    "name": "Dubhe",
    "distanceLy": 122.89,
    "apparentMagnitude": 1.81,
    "spectralClass": "F7V comp",
    "colorIndex": 1.061,
    "color": "#ffb17b",
    "positionLy": [
      -56.421,
      108.256,
      14.138
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-106139",
    "name": "Rho Cyg",
    "distanceLy": 123.59,
    "apparentMagnitude": 3.98,
    "spectralClass": "G8III",
    "colorIndex": 0.885,
    "color": "#ffd7a3",
    "positionLy": [
      69.517,
      88.29,
      -51.449
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-93510",
    "name": "Lam Aql",
    "distanceLy": 123.68,
    "apparentMagnitude": 3.43,
    "spectralClass": "B9Vn",
    "colorIndex": -0.096,
    "color": "#c7ddff",
    "positionLy": [
      35.129,
      -10.527,
      -118.122
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-102200",
    "name": "Gam-1 Del",
    "distanceLy": 123.78,
    "apparentMagnitude": 5.15,
    "spectralClass": "A2Ia+...",
    "colorIndex": 0.495,
    "color": "#fff2d2",
    "positionLy": [
      79.043,
      34.376,
      -88.835
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-65839",
    "name": "Dofida",
    "distanceLy": 123.83,
    "apparentMagnitude": 7.17,
    "spectralClass": "G2V",
    "colorIndex": 0.603,
    "color": "#ffd7a3",
    "positionLy": [
      -77.279,
      -90.959,
      -32.972
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-5353",
    "name": "Eta Cet",
    "distanceLy": 123.92,
    "apparentMagnitude": 3.46,
    "spectralClass": "K2III",
    "colorIndex": 1.161,
    "color": "#ffb17b",
    "positionLy": [
      116.546,
      -21.907,
      35.96
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-48318",
    "name": "Rasalas",
    "distanceLy": 124.11,
    "apparentMagnitude": 3.88,
    "spectralClass": "K0III",
    "colorIndex": 1.222,
    "color": "#ffb17b",
    "positionLy": [
      -94.789,
      54.419,
      58.792
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-94484",
    "name": "Kap Cyg",
    "distanceLy": 124.16,
    "apparentMagnitude": 3.8,
    "spectralClass": "K0III",
    "colorIndex": 0.95,
    "color": "#ffd7a3",
    "positionLy": [
      24.454,
      99.633,
      -69.926
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-7240",
    "name": "Gliese GJ 3099",
    "distanceLy": 124.2,
    "apparentMagnitude": 7.83,
    "spectralClass": "K0/K1V",
    "colorIndex": 0.815,
    "color": "#ffd7a3",
    "positionLy": [
      82.156,
      -86.124,
      35.486
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-60457",
    "name": "Tupã",
    "distanceLy": 124.2,
    "apparentMagnitude": 6.99,
    "spectralClass": "F8/G0V",
    "colorIndex": 0.537,
    "color": "#fff2d2",
    "positionLy": [
      -54.06,
      -111.653,
      -6.105
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-109476",
    "name": "Gliese 851.3",
    "distanceLy": 124.2,
    "apparentMagnitude": 6.55,
    "spectralClass": "K0/K1V",
    "colorIndex": 0.89,
    "color": "#ffd7a3",
    "positionLy": [
      107.092,
      -33.857,
      -53.023
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-79284",
    "name": "Gliese GJ 3944",
    "distanceLy": 124.25,
    "apparentMagnitude": 6.68,
    "spectralClass": "G3V",
    "colorIndex": 0.617,
    "color": "#ffd7a3",
    "positionLy": [
      -51.766,
      -45.336,
      -103.456
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-70471",
    "name": "Gliese 550",
    "distanceLy": 124.3,
    "apparentMagnitude": 7.85,
    "spectralClass": "G5V",
    "colorIndex": 0.682,
    "color": "#ffd7a3",
    "positionLy": [
      -61.298,
      -97.859,
      -46.003
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-44254",
    "name": "Alp Vol",
    "distanceLy": 124.92,
    "apparentMagnitude": 4,
    "spectralClass": "Am",
    "colorIndex": 0.145,
    "color": "#c7ddff",
    "positionLy": [
      -35.744,
      -114.465,
      34.988
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-26315",
    "name": "Bubup",
    "distanceLy": 124.96,
    "apparentMagnitude": 6.69,
    "spectralClass": "WN...",
    "colorIndex": 0.584,
    "color": "#fff2d2",
    "positionLy": [
      3.509,
      -119.941,
      34.899
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-37522",
    "name": "Sig Gem",
    "distanceLy": 125.06,
    "apparentMagnitude": 4.23,
    "spectralClass": "K1III SB",
    "colorIndex": 1.118,
    "color": "#ffb17b",
    "positionLy": [
      -47.708,
      60.408,
      98.565
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-93819",
    "name": "Meridiana",
    "distanceLy": 125.35,
    "apparentMagnitude": 4.11,
    "spectralClass": "A0/A1V",
    "colorIndex": 0.042,
    "color": "#c7ddff",
    "positionLy": [
      29.524,
      -77.007,
      -94.395
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119010",
    "name": "Gliese GJ 9512B",
    "distanceLy": 125.44,
    "apparentMagnitude": 6.69,
    "spectralClass": "F9 V",
    "colorIndex": 0.5,
    "color": "#fff2d2",
    "positionLy": [
      -51.516,
      -98.997,
      -57.286
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-109733",
    "name": "Psi Oct",
    "distanceLy": 125.54,
    "apparentMagnitude": 5.49,
    "spectralClass": "F3III",
    "colorIndex": 0.312,
    "color": "#fff2d2",
    "positionLy": [
      24.495,
      -122.571,
      -11.704
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-22481",
    "name": "Iot Pic",
    "distanceLy": 125.69,
    "apparentMagnitude": 6.42,
    "spectralClass": "F0IV",
    "colorIndex": 0.483,
    "color": "#fff2d2",
    "positionLy": [
      22.209,
      -100.981,
      71.461
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-86991",
    "name": "Fuyue",
    "distanceLy": 125.83,
    "apparentMagnitude": 3.19,
    "spectralClass": "K0/K1III",
    "colorIndex": 1.192,
    "color": "#ffb17b",
    "positionLy": [
      -4.443,
      -75.804,
      -100.339
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-28287",
    "name": "Del Aur",
    "distanceLy": 126.03,
    "apparentMagnitude": 3.72,
    "spectralClass": "K0III",
    "colorIndex": 1.01,
    "color": "#ffb17b",
    "positionLy": [
      0.152,
      102.324,
      73.569
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-67883",
    "name": "Gliese 534.1A",
    "distanceLy": 126.22,
    "apparentMagnitude": 6,
    "spectralClass": "G8V",
    "colorIndex": 0.78,
    "color": "#ffd7a3",
    "positionLy": [
      -63.701,
      -103.02,
      -35.51
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-90288",
    "name": "Zet Tel",
    "distanceLy": 126.22,
    "apparentMagnitude": 4.1,
    "spectralClass": "G8/K0III",
    "colorIndex": 0.995,
    "color": "#ffd7a3",
    "positionLy": [
      10.375,
      -95.362,
      -82.037
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-44947",
    "name": "Tau UMa",
    "distanceLy": 126.32,
    "apparentMagnitude": 4.67,
    "spectralClass": "Am",
    "colorIndex": 0.381,
    "color": "#fff2d2",
    "positionLy": [
      -41.688,
      113.061,
      37.894
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-102201",
    "name": "Gam-2 Del",
    "distanceLy": 126.32,
    "apparentMagnitude": 4.27,
    "spectralClass": "K1IV",
    "colorIndex": 1.042,
    "color": "#ffb17b",
    "positionLy": [
      80.67,
      35.082,
      -90.654
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-80402",
    "name": "Iot TrA",
    "distanceLy": 126.56,
    "apparentMagnitude": 5.28,
    "spectralClass": "F4IV",
    "colorIndex": 0.383,
    "color": "#fff2d2",
    "positionLy": [
      -21.643,
      -113.811,
      -50.961
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-10041",
    "name": "Bet Tri",
    "distanceLy": 126.86,
    "apparentMagnitude": 3,
    "spectralClass": "A5III",
    "colorIndex": 0.14,
    "color": "#c7ddff",
    "positionLy": [
      87.768,
      72.741,
      55.669
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-94873",
    "name": "Rho-1 Sgr",
    "distanceLy": 126.96,
    "apparentMagnitude": 3.92,
    "spectralClass": "F0III/IV",
    "colorIndex": 0.228,
    "color": "#c7ddff",
    "positionLy": [
      42.16,
      -38.91,
      -113.256
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-117313",
    "name": "Gliese GJ 9843",
    "distanceLy": 127.01,
    "apparentMagnitude": 6.56,
    "spectralClass": "F5V",
    "colorIndex": 0.43,
    "color": "#fff2d2",
    "positionLy": [
      27.258,
      124.045,
      -0.957
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-21195",
    "name": "Ups-1 Eri",
    "distanceLy": 127.06,
    "apparentMagnitude": 4.49,
    "spectralClass": "K0III",
    "colorIndex": 0.972,
    "color": "#ffd7a3",
    "positionLy": [
      40.642,
      -63.08,
      102.532
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-57190",
    "name": "Lam Mus",
    "distanceLy": 127.16,
    "apparentMagnitude": 3.63,
    "spectralClass": "A7III",
    "colorIndex": 0.16,
    "color": "#c7ddff",
    "positionLy": [
      -50.139,
      -116.812,
      3.153
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-394",
    "name": "Gliese GJ 3002",
    "distanceLy": 127.8,
    "apparentMagnitude": 6.09,
    "spectralClass": "G2V",
    "colorIndex": 0.632,
    "color": "#ffd7a3",
    "positionLy": [
      105.101,
      72.683,
      2.246
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-76118",
    "name": "Karaka",
    "distanceLy": 127.95,
    "apparentMagnitude": 8.71,
    "spectralClass": "K0/K1V",
    "colorIndex": 0.891,
    "color": "#ffd7a3",
    "positionLy": [
      -12.821,
      -126.089,
      -17.593
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-26347",
    "name": "Nu-1 Col",
    "distanceLy": 128.41,
    "apparentMagnitude": 6.15,
    "spectralClass": "F0IV",
    "colorIndex": 0.322,
    "color": "#fff2d2",
    "positionLy": [
      11.237,
      -60.03,
      112.956
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-78423",
    "name": "Iot-1 Nor",
    "distanceLy": 128.46,
    "apparentMagnitude": 4.63,
    "spectralClass": "A7IV",
    "colorIndex": 0.252,
    "color": "#fff2d2",
    "positionLy": [
      -33.331,
      -108.671,
      -59.844
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-50641",
    "name": "Gliese GJ 9326",
    "distanceLy": 128.61,
    "apparentMagnitude": 5.73,
    "spectralClass": "F7V",
    "colorIndex": 0.531,
    "color": "#fff2d2",
    "positionLy": [
      -88.046,
      84.764,
      40.043
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-79759",
    "name": "Gam-2 Nor",
    "distanceLy": 128.76,
    "apparentMagnitude": 4.01,
    "spectralClass": "G8III",
    "colorIndex": 1.08,
    "color": "#ffb17b",
    "positionLy": [
      -34.917,
      -98.862,
      -74.745
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-9135",
    "name": "Lam Ari",
    "distanceLy": 128.81,
    "apparentMagnitude": 4.79,
    "spectralClass": "F0V",
    "colorIndex": 0.29,
    "color": "#fff2d2",
    "positionLy": [
      102.758,
      51.562,
      58.095
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-112263",
    "name": "Eps Gru",
    "distanceLy": 128.92,
    "apparentMagnitude": 3.49,
    "spectralClass": "A3V",
    "colorIndex": 0.083,
    "color": "#c7ddff",
    "positionLy": [
      76.69,
      -100.633,
      -24.713
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-42990",
    "name": "Ashlesha",
    "distanceLy": 129.27,
    "apparentMagnitude": 3.38,
    "spectralClass": "G0III-IV",
    "colorIndex": 0.685,
    "color": "#ffd7a3",
    "positionLy": [
      -85.448,
      14.452,
      95.925
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-57119",
    "name": "Uklun",
    "distanceLy": 129.48,
    "apparentMagnitude": 7.47,
    "spectralClass": "G6V",
    "colorIndex": 0.721,
    "color": "#ffd7a3",
    "positionLy": [
      -67.112,
      -110.638,
      4.446
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-56174",
    "name": "Xi Hya",
    "distanceLy": 129.63,
    "apparentMagnitude": 3.54,
    "spectralClass": "G8III",
    "colorIndex": 0.947,
    "color": "#ffd7a3",
    "positionLy": [
      -109.342,
      -68.421,
      12.941
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-89530",
    "name": "Gliese GJ 9624",
    "distanceLy": 129.63,
    "apparentMagnitude": 6.84,
    "spectralClass": "F7V",
    "colorIndex": 0.533,
    "color": "#fff2d2",
    "positionLy": [
      7.768,
      -92.776,
      -90.205
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-4426",
    "name": "Mu And",
    "distanceLy": 129.74,
    "apparentMagnitude": 3.86,
    "spectralClass": "A5V",
    "colorIndex": 0.13,
    "color": "#c7ddff",
    "positionLy": [
      98.436,
      80.761,
      24.887
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-49895",
    "name": "Gliese 384A",
    "distanceLy": 129.74,
    "apparentMagnitude": 8.18,
    "spectralClass": "G8V",
    "colorIndex": 0.798,
    "color": "#ffd7a3",
    "positionLy": [
      -78.293,
      -95.613,
      39.492
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-79378",
    "name": "Gliese GJ 9551",
    "distanceLy": 129.89,
    "apparentMagnitude": 7.83,
    "spectralClass": "G5",
    "colorIndex": 0.722,
    "color": "#ffd7a3",
    "positionLy": [
      -18.797,
      122.762,
      -38.049
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-88589",
    "name": "Pi Pav",
    "distanceLy": 129.99,
    "apparentMagnitude": 4.33,
    "spectralClass": "Am",
    "colorIndex": 0.228,
    "color": "#c7ddff",
    "positionLy": [
      2.158,
      -116.506,
      -57.62
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-50440",
    "name": "Algieba",
    "distanceLy": 130.1,
    "apparentMagnitude": 2.01,
    "spectralClass": "K0III",
    "colorIndex": 1.128,
    "color": "#ffb17b",
    "positionLy": [
      -110.902,
      44.157,
      51.731
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-61739",
    "name": "Gam Cen",
    "distanceLy": 130.15,
    "apparentMagnitude": 2.2,
    "spectralClass": "A1IV",
    "colorIndex": -0.023,
    "color": "#c7ddff",
    "positionLy": [
      -84.056,
      -98.165,
      -15.396
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-117547",
    "name": "Gliese GJ 4375",
    "distanceLy": 130.15,
    "apparentMagnitude": 7.51,
    "spectralClass": "K0V SB",
    "colorIndex": 1.007,
    "color": "#ffb17b",
    "positionLy": [
      114.206,
      62.369,
      -2.458
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-79704",
    "name": "Gliese GJ 9553",
    "distanceLy": 130.25,
    "apparentMagnitude": 7.68,
    "spectralClass": "G5V",
    "colorIndex": 0.616,
    "color": "#ffd7a3",
    "positionLy": [
      -48.86,
      -61.739,
      -103.763
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-47373",
    "name": "Subra",
    "distanceLy": 130.31,
    "apparentMagnitude": 3.52,
    "spectralClass": "A5V+...",
    "colorIndex": 0.516,
    "color": "#fff2d2",
    "positionLy": [
      -105.523,
      22.386,
      73.101
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-110160",
    "name": "Pi-2 Gru",
    "distanceLy": 130.46,
    "apparentMagnitude": 5.62,
    "spectralClass": "F3III-IV",
    "colorIndex": 0.372,
    "color": "#fff2d2",
    "positionLy": [
      82.759,
      -93.734,
      -37.222
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-42792",
    "name": "Asellus Australis",
    "distanceLy": 130.57,
    "apparentMagnitude": 3.94,
    "spectralClass": "K0III",
    "colorIndex": 1.083,
    "color": "#ffb17b",
    "positionLy": [
      -81.675,
      40.682,
      93.391
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-62833",
    "name": "Gliese GJ 9423",
    "distanceLy": 130.78,
    "apparentMagnitude": 5.89,
    "spectralClass": "G2IV",
    "colorIndex": 0.633,
    "color": "#ffd7a3",
    "positionLy": [
      -91.145,
      -91.095,
      -22.293
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-72380",
    "name": "Kochab",
    "distanceLy": 130.93,
    "apparentMagnitude": 2.07,
    "spectralClass": "K4IIIvar",
    "colorIndex": 1.465,
    "color": "#ffb17b",
    "positionLy": [
      -26.282,
      125.96,
      -24.232
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-61429",
    "name": "Tau Cen",
    "distanceLy": 131.25,
    "apparentMagnitude": 3.85,
    "spectralClass": "A2V",
    "colorIndex": 0.049,
    "color": "#c7ddff",
    "positionLy": [
      -85.725,
      -98.363,
      -14.231
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-113770",
    "name": "The Gru",
    "distanceLy": 131.89,
    "apparentMagnitude": 4.28,
    "spectralClass": "F5me...",
    "colorIndex": 0.423,
    "color": "#fff2d2",
    "positionLy": [
      93.078,
      -90.819,
      -21.969
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-78602",
    "name": "Gliese GJ 9543A",
    "distanceLy": 132.05,
    "apparentMagnitude": 7.84,
    "spectralClass": "K0V",
    "colorIndex": 0.818,
    "color": "#ffd7a3",
    "positionLy": [
      -53.072,
      -71.651,
      -97.394
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-57894",
    "name": "Gliese 452.3A",
    "distanceLy": 132.1,
    "apparentMagnitude": 8.2,
    "spectralClass": "G0",
    "colorIndex": 0.71,
    "color": "#ffd7a3",
    "positionLy": [
      -124.556,
      43.903,
      2.971
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-17706",
    "name": "Gliese GJ 9134",
    "distanceLy": 132.15,
    "apparentMagnitude": 7.85,
    "spectralClass": "unknown",
    "colorIndex": 0.658,
    "color": "#ffd7a3",
    "positionLy": [
      30.601,
      -119.613,
      47.129
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-18385",
    "name": "Gliese GJ 3258",
    "distanceLy": 132.31,
    "apparentMagnitude": 6.88,
    "spectralClass": "G8V",
    "colorIndex": 0.748,
    "color": "#ffd7a3",
    "positionLy": [
      61.457,
      -56.298,
      102.766
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-82477",
    "name": "Zet-2 Sco",
    "distanceLy": 132.31,
    "apparentMagnitude": 3.62,
    "spectralClass": "K4III",
    "colorIndex": 1.393,
    "color": "#ffb17b",
    "positionLy": [
      -27.529,
      -89.154,
      -93.813
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-8972",
    "name": "Sig Hyi",
    "distanceLy": 132.48,
    "apparentMagnitude": 6.15,
    "spectralClass": "F5/F6IV/V",
    "colorIndex": 0.448,
    "color": "#fff2d2",
    "positionLy": [
      23.409,
      -129.746,
      12.955
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-114725",
    "name": "Gliese GJ 9819",
    "distanceLy": 132.48,
    "apparentMagnitude": 7.5,
    "spectralClass": "G2V",
    "colorIndex": 0.632,
    "color": "#ffd7a3",
    "positionLy": [
      68.468,
      -112.72,
      -12.501
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-11542",
    "name": "Iot Cas",
    "distanceLy": 132.85,
    "apparentMagnitude": 4.46,
    "spectralClass": "A5p Sr",
    "colorIndex": 0.153,
    "color": "#c7ddff",
    "positionLy": [
      40.627,
      122.654,
      30.912
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-26395",
    "name": "Nu-2 Col",
    "distanceLy": 133.07,
    "apparentMagnitude": 5.28,
    "spectralClass": "F5V",
    "colorIndex": 0.486,
    "color": "#fff2d2",
    "positionLy": [
      11.319,
      -63.883,
      116.185
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-113603",
    "name": "Markab",
    "distanceLy": 133.34,
    "apparentMagnitude": 2.49,
    "spectralClass": "B9.5III",
    "colorIndex": -0.002,
    "color": "#c7ddff",
    "positionLy": [
      124.955,
      34.973,
      -30.715
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-5530",
    "name": "The Cas",
    "distanceLy": 133.56,
    "apparentMagnitude": 4.34,
    "spectralClass": "A7Vvar",
    "colorIndex": 0.17,
    "color": "#c7ddff",
    "positionLy": [
      72.677,
      109.607,
      23.3
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-80385",
    "name": "Ups Oph",
    "distanceLy": 133.56,
    "apparentMagnitude": 4.62,
    "spectralClass": "A3m",
    "colorIndex": 0.185,
    "color": "#c7ddff",
    "positionLy": [
      -51.734,
      -19.446,
      -121.588
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-3323",
    "name": "Rho Tuc",
    "distanceLy": 133.84,
    "apparentMagnitude": 5.38,
    "spectralClass": "F6V",
    "colorIndex": 0.515,
    "color": "#fff2d2",
    "positionLy": [
      54.617,
      -121.754,
      10.239
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-64758",
    "name": "Gam Hya",
    "distanceLy": 133.84,
    "apparentMagnitude": 2.99,
    "spectralClass": "G8III",
    "colorIndex": 0.92,
    "color": "#ffd7a3",
    "positionLy": [
      -115.815,
      -52.662,
      -41.537
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-25364",
    "name": "Elnath",
    "distanceLy": 133.89,
    "apparentMagnitude": 1.65,
    "spectralClass": "B7III",
    "colorIndex": -0.13,
    "color": "#9fc7ff",
    "positionLy": [
      17.226,
      64.107,
      116.276
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-88141",
    "name": "Pincoya",
    "distanceLy": 133.95,
    "apparentMagnitude": 9.62,
    "spectralClass": "K2",
    "colorIndex": 1.396,
    "color": "#ffb17b",
    "positionLy": [
      1.599,
      -64.038,
      -117.635
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-94999",
    "name": "Arkab Posterior",
    "distanceLy": 134.17,
    "apparentMagnitude": 4.27,
    "spectralClass": "F2III",
    "colorIndex": 0.35,
    "color": "#fff2d2",
    "positionLy": [
      33.814,
      -94.537,
      -88.993
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-47069",
    "name": "Kalausi",
    "distanceLy": 134.28,
    "apparentMagnitude": 8.23,
    "spectralClass": "K0V",
    "colorIndex": 0.811,
    "color": "#ffd7a3",
    "positionLy": [
      -79.395,
      -92.042,
      57.052
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-1470",
    "name": "Sig And",
    "distanceLy": 134.78,
    "apparentMagnitude": 4.51,
    "spectralClass": "A2V",
    "colorIndex": 0.054,
    "color": "#c7ddff",
    "positionLy": [
      107.594,
      80.706,
      8.623
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-39910",
    "name": "Psi Cnc",
    "distanceLy": 134.89,
    "apparentMagnitude": 5.73,
    "spectralClass": "G8IV",
    "colorIndex": 0.825,
    "color": "#ffd7a3",
    "positionLy": [
      -65.613,
      58.085,
      102.543
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-5044",
    "name": "Nenque",
    "distanceLy": 134.94,
    "apparentMagnitude": 7.72,
    "spectralClass": "G3IV",
    "colorIndex": 0.613,
    "color": "#ffd7a3",
    "positionLy": [
      100.025,
      -85.813,
      28.998
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-97799",
    "name": "Eta Cyg",
    "distanceLy": 134.94,
    "apparentMagnitude": 3.89,
    "spectralClass": "K0IIIvar",
    "colorIndex": 1.019,
    "color": "#ffb17b",
    "positionLy": [
      53.664,
      77.56,
      -96.508
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-2478",
    "name": "Bet-1 Tuc",
    "distanceLy": 135.05,
    "apparentMagnitude": 4.36,
    "spectralClass": "B9V",
    "colorIndex": -0.064,
    "color": "#c7ddff",
    "positionLy": [
      60.821,
      -120.29,
      8.425
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-102064",
    "name": "Bet Pav",
    "distanceLy": 135.11,
    "apparentMagnitude": 3.42,
    "spectralClass": "A5IV",
    "colorIndex": 0.163,
    "color": "#c7ddff",
    "positionLy": [
      35.938,
      -123.624,
      -40.994
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-56506",
    "name": "Pi Cha",
    "distanceLy": 135.39,
    "apparentMagnitude": 5.64,
    "spectralClass": "F1III",
    "colorIndex": 0.362,
    "color": "#fff2d2",
    "positionLy": [
      -32.829,
      -131.309,
      3.268
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-14257",
    "name": "Rho-3 Eri",
    "distanceLy": 135.56,
    "apparentMagnitude": 5.26,
    "spectralClass": "A8V",
    "colorIndex": 0.193,
    "color": "#c7ddff",
    "positionLy": [
      93.224,
      -17.931,
      96.769
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-22478",
    "name": "Iot Pic",
    "distanceLy": 135.56,
    "apparentMagnitude": 5.58,
    "spectralClass": "F0IV...",
    "colorIndex": 0.341,
    "color": "#fff2d2",
    "positionLy": [
      23.959,
      -108.917,
      77.069
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-77776",
    "name": "Lam CrB",
    "distanceLy": 135.56,
    "apparentMagnitude": 5.43,
    "spectralClass": "F0IV",
    "colorIndex": 0.352,
    "color": "#fff2d2",
    "positionLy": [
      -55.14,
      83.36,
      -91.581
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-108939",
    "name": "Mu PsA",
    "distanceLy": 135.84,
    "apparentMagnitude": 4.5,
    "spectralClass": "A2V",
    "colorIndex": 0.054,
    "color": "#c7ddff",
    "positionLy": [
      100.694,
      -73.962,
      -53.324
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-96648",
    "name": "Gliese GJ 9664A",
    "distanceLy": 136.13,
    "apparentMagnitude": 7.48,
    "spectralClass": "G5V",
    "colorIndex": 0.711,
    "color": "#ffd7a3",
    "positionLy": [
      30.328,
      -116.695,
      -63.189
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-36617",
    "name": "Del-2 CMi",
    "distanceLy": 136.18,
    "apparentMagnitude": 5.59,
    "spectralClass": "F2V",
    "colorIndex": 0.321,
    "color": "#fff2d2",
    "positionLy": [
      -53.774,
      7.816,
      124.871
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-100767",
    "name": "The Cep",
    "distanceLy": 136.47,
    "apparentMagnitude": 4.21,
    "spectralClass": "A7III",
    "colorIndex": 0.199,
    "color": "#c7ddff",
    "positionLy": [
      37.633,
      121.586,
      -49.231
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-13085",
    "name": "Gliese 113.1",
    "distanceLy": 136.52,
    "apparentMagnitude": 6.94,
    "spectralClass": "K0",
    "colorIndex": 0.956,
    "color": "#ffd7a3",
    "positionLy": [
      86.611,
      70.55,
      78.485
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-13667",
    "name": "Azha",
    "distanceLy": 136.52,
    "apparentMagnitude": 3.89,
    "spectralClass": "K1III-IV",
    "colorIndex": 1.088,
    "color": "#ffb17b",
    "positionLy": [
      96.85,
      -21.117,
      93.877
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-87661",
    "name": "Xi Her",
    "distanceLy": 136.81,
    "apparentMagnitude": 3.7,
    "spectralClass": "K0III",
    "colorIndex": 0.935,
    "color": "#ffd7a3",
    "positionLy": [
      -1.164,
      66.844,
      -119.363
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-44768",
    "name": "Gliese GJ 3535",
    "distanceLy": 137.44,
    "apparentMagnitude": 7.15,
    "spectralClass": "G0",
    "colorIndex": 0.61,
    "color": "#ffd7a3",
    "positionLy": [
      -99.087,
      -25.654,
      91.732
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-117085",
    "name": "Del Scl",
    "distanceLy": 137.44,
    "apparentMagnitude": 4.59,
    "spectralClass": "A0V",
    "colorIndex": 0.001,
    "color": "#c7ddff",
    "positionLy": [
      121.068,
      -64.802,
      -5.855
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-50230",
    "name": "Tania Borealis",
    "distanceLy": 137.5,
    "apparentMagnitude": 3.45,
    "spectralClass": "A2IV",
    "colorIndex": 0.029,
    "color": "#c7ddff",
    "positionLy": [
      -90.722,
      93.626,
      43.712
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-114609",
    "name": "Gam Psc",
    "distanceLy": 137.97,
    "apparentMagnitude": 3.7,
    "spectralClass": "G7III",
    "colorIndex": 0.916,
    "color": "#ffd7a3",
    "positionLy": [
      135.342,
      7.899,
      -25.594
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-69673",
    "name": "Eta Aps",
    "distanceLy": 138.08,
    "apparentMagnitude": 4.89,
    "spectralClass": "A2m...",
    "colorIndex": 0.243,
    "color": "#c7ddff",
    "positionLy": [
      -17.774,
      -136.387,
      -12.243
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-70781",
    "name": "Gliese GJ 3854A",
    "distanceLy": 138.2,
    "apparentMagnitude": 7.97,
    "spectralClass": "G5V",
    "colorIndex": 0.71,
    "color": "#ffd7a3",
    "positionLy": [
      -105.113,
      -37.256,
      -81.629
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-77869",
    "name": "Xi-1 Lup",
    "distanceLy": 138.2,
    "apparentMagnitude": 5.14,
    "spectralClass": "A3V",
    "colorIndex": 0.129,
    "color": "#c7ddff",
    "positionLy": [
      -58.651,
      -77.214,
      -98.477
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-20572",
    "name": "Gliese GJ 9156",
    "distanceLy": 138.91,
    "apparentMagnitude": 7.89,
    "spectralClass": "G5V...",
    "colorIndex": 0.65,
    "color": "#ffd7a3",
    "positionLy": [
      24.418,
      -124.936,
      55.593
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-80571",
    "name": "Kornephoros",
    "distanceLy": 139.14,
    "apparentMagnitude": 2.78,
    "spectralClass": "G8III",
    "colorIndex": 0.947,
    "color": "#ffd7a3",
    "positionLy": [
      -49.432,
      50.973,
      -119.664
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-89726",
    "name": "Alasia",
    "distanceLy": 139.38,
    "apparentMagnitude": 7.95,
    "spectralClass": "G5",
    "colorIndex": 0.713,
    "color": "#ffd7a3",
    "positionLy": [
      12.97,
      -28.795,
      -135.758
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-7574",
    "name": "Achernar",
    "distanceLy": 139.44,
    "apparentMagnitude": 0.45,
    "spectralClass": "B3Vp",
    "colorIndex": -0.158,
    "color": "#9fc7ff",
    "positionLy": [
      68.707,
      -117.259,
      31.208
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-10975",
    "name": "Del Hyi",
    "distanceLy": 139.68,
    "apparentMagnitude": 4.08,
    "spectralClass": "A3V",
    "colorIndex": 0.034,
    "color": "#c7ddff",
    "positionLy": [
      41.415,
      -130.104,
      29.473
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-34389",
    "name": "Gam-2 Vol",
    "distanceLy": 139.8,
    "apparentMagnitude": 3.78,
    "spectralClass": "G8IIIvar",
    "colorIndex": 1.006,
    "color": "#ffb17b",
    "positionLy": [
      -13.79,
      -131.782,
      44.585
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-55433",
    "name": "Lam Crt",
    "distanceLy": 139.86,
    "apparentMagnitude": 5.08,
    "spectralClass": "F3IV",
    "colorIndex": 0.439,
    "color": "#fff2d2",
    "positionLy": [
      -130.727,
      -45.026,
      21.077
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-33364",
    "name": "Gliese 255A",
    "distanceLy": 140.58,
    "apparentMagnitude": 6.23,
    "spectralClass": "F5V",
    "colorIndex": 0.465,
    "color": "#fff2d2",
    "positionLy": [
      -28.312,
      -81.652,
      110.885
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-20977",
    "name": "Gliese 170.1",
    "distanceLy": 140.89,
    "apparentMagnitude": 4.78,
    "spectralClass": "A6IV",
    "colorIndex": 0.17,
    "color": "#c7ddff",
    "positionLy": [
      51.471,
      39.293,
      125.126
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118453",
    "name": "Gliese 255B",
    "distanceLy": 140.89,
    "apparentMagnitude": 7.1,
    "spectralClass": "F8 IV-V",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -28.371,
      -81.827,
      111.125
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-37397",
    "name": "Zet Vol",
    "distanceLy": 141.01,
    "apparentMagnitude": 3.93,
    "spectralClass": "K0III",
    "colorIndex": 1.033,
    "color": "#ffb17b",
    "positionLy": [
      -18.118,
      -134.563,
      38.062
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-54046",
    "name": "Chi-1 Hya",
    "distanceLy": 141.01,
    "apparentMagnitude": 4.92,
    "spectralClass": "F3IV/V",
    "colorIndex": 0.369,
    "color": "#fff2d2",
    "positionLy": [
      -121.763,
      -64.66,
      29.609
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-56831",
    "name": "Gliese GJ 3680",
    "distanceLy": 141.07,
    "apparentMagnitude": 6.44,
    "spectralClass": "G2III/IV",
    "colorIndex": 0.651,
    "color": "#ffd7a3",
    "positionLy": [
      -122.731,
      -68.815,
      10.123
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-54880",
    "name": "Gliese 421.1B",
    "distanceLy": 141.13,
    "apparentMagnitude": 7.9,
    "spectralClass": "F2",
    "colorIndex": 0.601,
    "color": "#ffd7a3",
    "positionLy": [
      -83.809,
      112.38,
      16.268
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-72347",
    "name": "Gliese GJ 3876",
    "distanceLy": 141.19,
    "apparentMagnitude": 5.63,
    "spectralClass": "F9V",
    "colorIndex": 0.671,
    "color": "#ffd7a3",
    "positionLy": [
      -13.547,
      139.988,
      -12.451
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-37633",
    "name": "Kap Gem",
    "distanceLy": 141.38,
    "apparentMagnitude": 3.57,
    "spectralClass": "G8III",
    "colorIndex": 0.932,
    "color": "#ffd7a3",
    "positionLy": [
      -56.667,
      58.399,
      115.611
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-14206",
    "name": "Mu Hor",
    "distanceLy": 141.56,
    "apparentMagnitude": 5.12,
    "spectralClass": "F0IV",
    "colorIndex": 0.349,
    "color": "#fff2d2",
    "positionLy": [
      49.644,
      -122.27,
      51.235
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-103708",
    "name": "Alp Oct",
    "distanceLy": 141.99,
    "apparentMagnitude": 5.13,
    "spectralClass": "F4III",
    "colorIndex": 0.49,
    "color": "#fff2d2",
    "positionLy": [
      23.005,
      -138.367,
      -22.077
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-93388",
    "name": "Omi Sgr",
    "distanceLy": 142.05,
    "apparentMagnitude": 3.76,
    "spectralClass": "K0III",
    "colorIndex": 1.012,
    "color": "#ffb17b",
    "positionLy": [
      36.748,
      -52.62,
      -126.729
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-7068",
    "name": "Del Phe",
    "distanceLy": 142.12,
    "apparentMagnitude": 3.93,
    "spectralClass": "K0III-IV",
    "colorIndex": 0.972,
    "color": "#ffd7a3",
    "positionLy": [
      85.817,
      -107.374,
      36.097
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-116392",
    "name": "Ome-1 Aqr",
    "distanceLy": 142.18,
    "apparentMagnitude": 4.97,
    "spectralClass": "A7IV",
    "colorIndex": 0.257,
    "color": "#fff2d2",
    "positionLy": [
      137.284,
      -34.931,
      -12.141
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-2883",
    "name": "Gliese 24A",
    "distanceLy": 142.43,
    "apparentMagnitude": 6.79,
    "spectralClass": "G0/G1V",
    "colorIndex": 0.639,
    "color": "#ffd7a3",
    "positionLy": [
      92.003,
      -107.706,
      14.832
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-110841",
    "name": "Bet PsA",
    "distanceLy": 142.8,
    "apparentMagnitude": 4.29,
    "spectralClass": "A1V",
    "colorIndex": 0.011,
    "color": "#c7ddff",
    "positionLy": [
      111.76,
      -76.403,
      -45.435
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-104394",
    "name": "Zet Cyg",
    "distanceLy": 143.11,
    "apparentMagnitude": 3.21,
    "spectralClass": "G8II SB",
    "colorIndex": 0.99,
    "color": "#ffd7a3",
    "positionLy": [
      92.232,
      72.047,
      -82.366
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-89906",
    "name": "Kaus Australis",
    "distanceLy": 143.3,
    "apparentMagnitude": 1.79,
    "spectralClass": "B9.5III",
    "colorIndex": -0.031,
    "color": "#c7ddff",
    "positionLy": [
      12.45,
      -80.929,
      -117.605
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-52789",
    "name": "Nu Hya",
    "distanceLy": 143.74,
    "apparentMagnitude": 3.11,
    "spectralClass": "K0/K1III",
    "colorIndex": 1.232,
    "color": "#ffb17b",
    "positionLy": [
      -131.584,
      -40.088,
      41.725
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-763",
    "name": "Eps Phe",
    "distanceLy": 144.19,
    "apparentMagnitude": 3.88,
    "spectralClass": "K0III",
    "colorIndex": 1.013,
    "color": "#ffb17b",
    "positionLy": [
      100.534,
      -103.278,
      4.13
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-96726",
    "name": "Gliese 765.3",
    "distanceLy": 144.19,
    "apparentMagnitude": 6.29,
    "spectralClass": "G0V",
    "colorIndex": 0.59,
    "color": "#fff2d2",
    "positionLy": [
      33.252,
      122.301,
      -68.754
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-32829",
    "name": "Nervia",
    "distanceLy": 144.25,
    "apparentMagnitude": 8.1,
    "spectralClass": "G0",
    "colorIndex": 0.729,
    "color": "#ffd7a3",
    "positionLy": [
      -24.311,
      94.387,
      106.344
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-101794",
    "name": "Mu-2 Oct",
    "distanceLy": 144.38,
    "apparentMagnitude": 6.51,
    "spectralClass": "G1V",
    "colorIndex": 0.62,
    "color": "#ffd7a3",
    "positionLy": [
      23.682,
      -139.687,
      -27.793
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-49652",
    "name": "Gliese 379.2",
    "distanceLy": 144.44,
    "apparentMagnitude": 8.07,
    "spectralClass": "G3V",
    "colorIndex": 0.59,
    "color": "#fff2d2",
    "positionLy": [
      -102.616,
      -86.435,
      53.517
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-54380",
    "name": "Psi UMa",
    "distanceLy": 144.51,
    "apparentMagnitude": 3,
    "spectralClass": "K1III",
    "colorIndex": 1.144,
    "color": "#ffb17b",
    "positionLy": [
      -100.597,
      101.285,
      22.457
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-86040",
    "name": "Pi Ara",
    "distanceLy": 145.35,
    "apparentMagnitude": 5.25,
    "spectralClass": "A7V",
    "colorIndex": 0.195,
    "color": "#c7ddff",
    "positionLy": [
      -8.056,
      -118.329,
      -84.016
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-61166",
    "name": "Kraz",
    "distanceLy": 145.67,
    "apparentMagnitude": 2.65,
    "spectralClass": "G5II",
    "colorIndex": 0.893,
    "color": "#ffd7a3",
    "positionLy": [
      -132.191,
      -57.845,
      -19.984
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-89364",
    "name": "Eta Sgr",
    "distanceLy": 145.93,
    "apparentMagnitude": 3.1,
    "spectralClass": "M2III",
    "colorIndex": 1.582,
    "color": "#ffb17b",
    "positionLy": [
      8.983,
      -87.338,
      -116.564
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-76716",
    "name": "Gam CrB",
    "distanceLy": 146.06,
    "apparentMagnitude": 3.81,
    "spectralClass": "A1Vs",
    "colorIndex": 0.02,
    "color": "#c7ddff",
    "positionLy": [
      -73.819,
      64.706,
      -108.157
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-94352",
    "name": "Tau Dra",
    "distanceLy": 146.39,
    "apparentMagnitude": 4.45,
    "spectralClass": "K3III",
    "colorIndex": 1.257,
    "color": "#ffb17b",
    "positionLy": [
      13.574,
      140.255,
      -39.673
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-20837",
    "name": "Ain",
    "distanceLy": 146.65,
    "apparentMagnitude": 3.53,
    "spectralClass": "K0III",
    "colorIndex": 1.014,
    "color": "#ffb17b",
    "positionLy": [
      53.778,
      48.182,
      127.647
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-19047",
    "name": "Gliese GJ 9143",
    "distanceLy": 146.92,
    "apparentMagnitude": 5.59,
    "spectralClass": "F0IV/V",
    "colorIndex": 0.324,
    "color": "#fff2d2",
    "positionLy": [
      62.284,
      -68.185,
      114.266
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-21620",
    "name": "Sig-1 Tau",
    "distanceLy": 147.05,
    "apparentMagnitude": 5.08,
    "spectralClass": "A4m",
    "colorIndex": 0.141,
    "color": "#c7ddff",
    "positionLy": [
      48.885,
      40.039,
      132.782
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-2706",
    "name": "Gliese GJ 9016",
    "distanceLy": 147.45,
    "apparentMagnitude": 7.38,
    "spectralClass": "F8",
    "colorIndex": 0.549,
    "color": "#fff2d2",
    "positionLy": [
      97.706,
      109.43,
      14.818
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-6440",
    "name": "Gliese GJ 3095",
    "distanceLy": 147.45,
    "apparentMagnitude": 7.3,
    "spectralClass": "G5",
    "colorIndex": 0.829,
    "color": "#ffd7a3",
    "positionLy": [
      136.743,
      19.04,
      51.77
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-5672",
    "name": "Gliese GJ 3080",
    "distanceLy": 147.52,
    "apparentMagnitude": 7.24,
    "spectralClass": "G5",
    "colorIndex": 0.77,
    "color": "#ffd7a3",
    "positionLy": [
      104.661,
      98.045,
      34.563
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-99035",
    "name": "The Sge",
    "distanceLy": 147.58,
    "apparentMagnitude": 6.51,
    "spectralClass": "F5IV",
    "colorIndex": 0.394,
    "color": "#fff2d2",
    "positionLy": [
      74.042,
      52.684,
      -116.285
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-8383",
    "name": "Gliese 77",
    "distanceLy": 147.78,
    "apparentMagnitude": 7.13,
    "spectralClass": "G4V",
    "colorIndex": 0.637,
    "color": "#ffd7a3",
    "positionLy": [
      98.552,
      -97.915,
      50.401
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-37340",
    "name": "Alp Mon",
    "distanceLy": 147.78,
    "apparentMagnitude": 3.94,
    "spectralClass": "K0III",
    "colorIndex": 1.022,
    "color": "#ffb17b",
    "positionLy": [
      -62.308,
      -24.521,
      131.743
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-97124",
    "name": "Eps Dra",
    "distanceLy": 147.98,
    "apparentMagnitude": 3.84,
    "spectralClass": "G8III",
    "colorIndex": 0.888,
    "color": "#ffd7a3",
    "positionLy": [
      22.716,
      139.295,
      -44.5
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-20590",
    "name": "Kap-2 Tau",
    "distanceLy": 148.05,
    "apparentMagnitude": 5.27,
    "spectralClass": "A7V",
    "colorIndex": 0.25,
    "color": "#fff2d2",
    "positionLy": [
      54.979,
      55.94,
      125.568
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-20597",
    "name": "Del-3 Tau",
    "distanceLy": 148.52,
    "apparentMagnitude": 4.3,
    "spectralClass": "A2IV",
    "colorIndex": 0.049,
    "color": "#c7ddff",
    "positionLy": [
      56.636,
      45.719,
      129.466
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-115465",
    "name": "The Psc",
    "distanceLy": 148.52,
    "apparentMagnitude": 4.27,
    "spectralClass": "K1III",
    "colorIndex": 1.062,
    "color": "#ffb17b",
    "positionLy": [
      146.164,
      16.502,
      -20.563
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-116605",
    "name": "Ome-2 Aqr",
    "distanceLy": 148.52,
    "apparentMagnitude": 4.49,
    "spectralClass": "B9V",
    "colorIndex": -0.032,
    "color": "#c7ddff",
    "positionLy": [
      143.354,
      -37.3,
      -10.828
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-2572",
    "name": "Bet-3 Tuc",
    "distanceLy": 148.59,
    "apparentMagnitude": 5.07,
    "spectralClass": "A0V",
    "colorIndex": 0.038,
    "color": "#c7ddff",
    "positionLy": [
      66.7,
      -132.432,
      9.591
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-12193",
    "name": "Eta Hor",
    "distanceLy": 148.59,
    "apparentMagnitude": 5.3,
    "spectralClass": "A6V",
    "colorIndex": 0.289,
    "color": "#fff2d2",
    "positionLy": [
      69.878,
      -117.953,
      57.3
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-62699",
    "name": "Gliese 488.1",
    "distanceLy": 148.59,
    "apparentMagnitude": 4.25,
    "spectralClass": "A4IV",
    "colorIndex": 0.224,
    "color": "#c7ddff",
    "positionLy": [
      -110.456,
      -95.867,
      -26.231
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-84378",
    "name": "Gliese 665.1",
    "distanceLy": 148.93,
    "apparentMagnitude": 6.59,
    "spectralClass": "G3V",
    "colorIndex": 0.647,
    "color": "#ffd7a3",
    "positionLy": [
      -24.71,
      -60.748,
      -133.712
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-43844",
    "name": "Omi-1 Cnc",
    "distanceLy": 149.13,
    "apparentMagnitude": 5.22,
    "spectralClass": "A5III",
    "colorIndex": 0.149,
    "color": "#c7ddff",
    "positionLy": [
      -100.477,
      39.41,
      102.918
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-76824",
    "name": "Eta Lib",
    "distanceLy": 149.2,
    "apparentMagnitude": 5.41,
    "spectralClass": "A6IV",
    "colorIndex": 0.238,
    "color": "#c7ddff",
    "positionLy": [
      -80.292,
      -40.306,
      -119.12
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-112050",
    "name": "Bet Oct",
    "distanceLy": 149.27,
    "apparentMagnitude": 4.13,
    "spectralClass": "A9IV/V",
    "colorIndex": 0.208,
    "color": "#c7ddff",
    "positionLy": [
      21.215,
      -147.586,
      -7.092
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-108030",
    "name": "Itonda",
    "distanceLy": 149.54,
    "apparentMagnitude": 7.47,
    "spectralClass": "G2V:",
    "colorIndex": 0.568,
    "color": "#fff2d2",
    "positionLy": [
      101.687,
      -91.582,
      -60.299
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-27034",
    "name": "Del Dor",
    "distanceLy": 149.61,
    "apparentMagnitude": 4.34,
    "spectralClass": "A7V",
    "colorIndex": 0.217,
    "color": "#c7ddff",
    "positionLy": [
      4.082,
      -136.396,
      61.348
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-114493",
    "name": "Psi-1 Aqr",
    "distanceLy": 149.82,
    "apparentMagnitude": 4.24,
    "spectralClass": "K0III",
    "colorIndex": 1.107,
    "color": "#ffb17b",
    "positionLy": [
      145.206,
      -23.663,
      -28.297
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-99423",
    "name": "Rho Aql",
    "distanceLy": 149.96,
    "apparentMagnitude": 4.94,
    "spectralClass": "A2V",
    "colorIndex": 0.072,
    "color": "#c7ddff",
    "positionLy": [
      80.018,
      39.311,
      -120.576
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-77870",
    "name": "Xi-2 Lup",
    "distanceLy": 150.23,
    "apparentMagnitude": 5.59,
    "spectralClass": "B9V",
    "colorIndex": 0.072,
    "color": "#c7ddff",
    "positionLy": [
      -63.753,
      -83.931,
      -107.056
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-20842",
    "name": "Chamukuy",
    "distanceLy": 150.37,
    "apparentMagnitude": 3.4,
    "spectralClass": "A7III",
    "colorIndex": 0.179,
    "color": "#c7ddff",
    "positionLy": [
      56.131,
      41.123,
      133.305
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-43876",
    "name": "Omi-2 Cnc",
    "distanceLy": 150.44,
    "apparentMagnitude": 5.68,
    "spectralClass": "F0IV",
    "colorIndex": 0.209,
    "color": "#c7ddff",
    "positionLy": [
      -101.384,
      40.409,
      103.542
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-9467",
    "name": "Alrescha",
    "distanceLy": 150.58,
    "apparentMagnitude": 3.82,
    "spectralClass": "A2",
    "colorIndex": 0.024,
    "color": "#c7ddff",
    "positionLy": [
      129.578,
      7.261,
      76.363
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-12452",
    "name": "Iot Eri",
    "distanceLy": 150.65,
    "apparentMagnitude": 4.11,
    "spectralClass": "K0III",
    "colorIndex": 1.006,
    "color": "#ffb17b",
    "positionLy": [
      88.375,
      -96.544,
      74.595
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-15539",
    "name": "Intan",
    "distanceLy": 150.72,
    "apparentMagnitude": 9.92,
    "spectralClass": "K3/K4IV",
    "colorIndex": 1.037,
    "color": "#ffb17b",
    "positionLy": [
      80.273,
      -83.691,
      96.271
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-87775",
    "name": "Nu Oph",
    "distanceLy": 150.72,
    "apparentMagnitude": 3.32,
    "spectralClass": "K0III",
    "colorIndex": 0.987,
    "color": "#ffd7a3",
    "positionLy": [
      -0.631,
      -25.586,
      -148.53
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-69259",
    "name": "Kap-1 Boo",
    "distanceLy": 151.49,
    "apparentMagnitude": 6.62,
    "spectralClass": "F1V",
    "colorIndex": 0.394,
    "color": "#fff2d2",
    "positionLy": [
      -78.262,
      119.028,
      -51.537
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118785",
    "name": "Gliese 452.2B",
    "distanceLy": 151.7,
    "apparentMagnitude": 8.1,
    "spectralClass": "unknown",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -119.914,
      -92.872,
      2.917
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-74206",
    "name": "Gliese GJ 3897B",
    "distanceLy": 151.77,
    "apparentMagnitude": 7.71,
    "spectralClass": "G7V",
    "colorIndex": 0.743,
    "color": "#ffd7a3",
    "positionLy": [
      -95.512,
      50.143,
      -106.758
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-12360",
    "name": "Eps Hyi",
    "distanceLy": 151.84,
    "apparentMagnitude": 4.12,
    "spectralClass": "B9III",
    "colorIndex": -0.061,
    "color": "#c7ddff",
    "positionLy": [
      43.135,
      -141.049,
      36.063
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-11449",
    "name": "Phi For",
    "distanceLy": 151.98,
    "apparentMagnitude": 5.13,
    "spectralClass": "A2/A3V",
    "colorIndex": 0.089,
    "color": "#c7ddff",
    "positionLy": [
      100.842,
      -84.572,
      76.01
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-60387",
    "name": "Gliese GJ 3723",
    "distanceLy": 152.05,
    "apparentMagnitude": 8.12,
    "spectralClass": "G5",
    "colorIndex": 0.664,
    "color": "#ffd7a3",
    "positionLy": [
      -150.742,
      -11.204,
      -16.498
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-44746",
    "name": "Gliese GJ 9287A",
    "distanceLy": 152.27,
    "apparentMagnitude": 6.77,
    "spectralClass": "G0/G1V",
    "colorIndex": 0.573,
    "color": "#fff2d2",
    "positionLy": [
      -100.476,
      -66.366,
      93.197
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-24283",
    "name": "Mu Aur",
    "distanceLy": 152.98,
    "apparentMagnitude": 4.82,
    "spectralClass": "A4m",
    "colorIndex": 0.189,
    "color": "#c7ddff",
    "positionLy": [
      24.167,
      95.201,
      117.287
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-115376",
    "name": "Kap Psc",
    "distanceLy": 153.49,
    "apparentMagnitude": 4.95,
    "spectralClass": "A0p",
    "colorIndex": 0.036,
    "color": "#c7ddff",
    "positionLy": [
      151.854,
      3.363,
      -22.063
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-59621",
    "name": "Gienah",
    "distanceLy": 153.63,
    "apparentMagnitude": 2.58,
    "spectralClass": "B8III",
    "colorIndex": -0.107,
    "color": "#9fc7ff",
    "positionLy": [
      -146.137,
      -46.305,
      -10.095
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-10578",
    "name": "Phi Eri",
    "distanceLy": 153.7,
    "apparentMagnitude": 3.56,
    "spectralClass": "B8IV-V",
    "colorIndex": -0.12,
    "color": "#9fc7ff",
    "positionLy": [
      79.184,
      -120.309,
      53.667
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-20659",
    "name": "Ups Tau",
    "distanceLy": 153.77,
    "apparentMagnitude": 4.28,
    "spectralClass": "A8Vn",
    "colorIndex": 0.263,
    "color": "#fff2d2",
    "positionLy": [
      56.347,
      59.624,
      130.065
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-20583",
    "name": "Kap-1 Tau",
    "distanceLy": 153.92,
    "apparentMagnitude": 4.21,
    "spectralClass": "A7IV-V",
    "colorIndex": 0.136,
    "color": "#c7ddff",
    "positionLy": [
      57.147,
      58.391,
      130.447
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-51089",
    "name": "Bet LMi",
    "distanceLy": 153.92,
    "apparentMagnitude": 4.2,
    "spectralClass": "G8III-IV",
    "colorIndex": 0.908,
    "color": "#ffd7a3",
    "positionLy": [
      -113.564,
      92.002,
      48.273
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-90687",
    "name": "Kap-2 CrA",
    "distanceLy": 153.99,
    "apparentMagnitude": 6.31,
    "spectralClass": "B8",
    "colorIndex": 0.02,
    "color": "#c7ddff",
    "positionLy": [
      17.44,
      -96.324,
      -118.874
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-112886",
    "name": "Del PsA",
    "distanceLy": 154.14,
    "apparentMagnitude": 4.2,
    "spectralClass": "G8III",
    "colorIndex": 0.952,
    "color": "#ffd7a3",
    "positionLy": [
      124.899,
      -82.908,
      -35.845
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-5299",
    "name": "Psi-2 Psc",
    "distanceLy": 154.28,
    "apparentMagnitude": 5.56,
    "spectralClass": "A3V",
    "colorIndex": 0.121,
    "color": "#c7ddff",
    "positionLy": [
      137.991,
      54.634,
      42.157
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-87561",
    "name": "Eltanin",
    "distanceLy": 154.28,
    "apparentMagnitude": 2.24,
    "spectralClass": "K5III",
    "colorIndex": 1.521,
    "color": "#ffb17b",
    "positionLy": [
      -1.423,
      120.725,
      -96.056
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-20833",
    "name": "The-1 Tau",
    "distanceLy": 154.36,
    "apparentMagnitude": 3.84,
    "spectralClass": "G7III",
    "colorIndex": 0.952,
    "color": "#ffd7a3",
    "positionLy": [
      57.644,
      42.449,
      136.754
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-92654",
    "name": "Alya",
    "distanceLy": 154.65,
    "apparentMagnitude": 4.62,
    "spectralClass": "A5V",
    "colorIndex": 0.161,
    "color": "#c7ddff",
    "positionLy": [
      37.456,
      11.336,
      -149.615
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-117754",
    "name": "Eta Tuc",
    "distanceLy": 154.72,
    "apparentMagnitude": 5,
    "spectralClass": "A1V",
    "colorIndex": 0.06,
    "color": "#c7ddff",
    "positionLy": [
      67.098,
      -139.416,
      -0.707
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-89577",
    "name": "Gliese GJ 4050",
    "distanceLy": 154.8,
    "apparentMagnitude": 7.34,
    "spectralClass": "G5V",
    "colorIndex": 0.759,
    "color": "#ffd7a3",
    "positionLy": [
      9.474,
      -111.205,
      -107.264
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-28543",
    "name": "Mu Ori",
    "distanceLy": 154.94,
    "apparentMagnitude": 4.12,
    "spectralClass": "Am...",
    "colorIndex": 0.17,
    "color": "#c7ddff",
    "positionLy": [
      -1.588,
      25.966,
      152.745
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-92951",
    "name": "Eps Aql",
    "distanceLy": 154.94,
    "apparentMagnitude": 4.02,
    "spectralClass": "K2III",
    "colorIndex": 1.082,
    "color": "#ffb17b",
    "positionLy": [
      38.485,
      40.28,
      -144.58
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-82952",
    "name": "Eps Her",
    "distanceLy": 155.02,
    "apparentMagnitude": 3.92,
    "spectralClass": "A0V",
    "colorIndex": -0.018,
    "color": "#c7ddff",
    "positionLy": [
      -34.255,
      79.669,
      -128.49
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-76997",
    "name": "Bet Ser",
    "distanceLy": 155.09,
    "apparentMagnitude": 3.65,
    "spectralClass": "A3V",
    "colorIndex": 0.073,
    "color": "#c7ddff",
    "positionLy": [
      -82.416,
      41.242,
      -124.739
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-86021",
    "name": "Gliese 683.2A",
    "distanceLy": 155.16,
    "apparentMagnitude": 6.68,
    "spectralClass": "G8IV/V",
    "colorIndex": 0.757,
    "color": "#ffd7a3",
    "positionLy": [
      -11.819,
      -95.233,
      -121.931
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-40773",
    "name": "The Cha",
    "distanceLy": 155.31,
    "apparentMagnitude": 4.34,
    "spectralClass": "K0III-IV",
    "colorIndex": 1.161,
    "color": "#ffb17b",
    "positionLy": [
      -19.382,
      -151.622,
      27.516
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119548",
    "name": "Gliese GJ 9812B",
    "distanceLy": 155.31,
    "apparentMagnitude": 5.9,
    "spectralClass": "A3 (IV)",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      140.12,
      -59.328,
      -31.116
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-21630",
    "name": "Sig-2 Tau",
    "distanceLy": 155.53,
    "apparentMagnitude": 4.67,
    "spectralClass": "A5Vn",
    "colorIndex": 0.147,
    "color": "#c7ddff",
    "positionLy": [
      51.601,
      42.657,
      140.389
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-91639",
    "name": "Eps-2 Lyr",
    "distanceLy": 155.53,
    "apparentMagnitude": 4.59,
    "spectralClass": "A8Vn",
    "colorIndex": 0.18,
    "color": "#c7ddff",
    "positionLy": [
      23.057,
      99.168,
      -117.58
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-91686",
    "name": "Zet-2 Lyr",
    "distanceLy": 155.53,
    "apparentMagnitude": 5.73,
    "spectralClass": "F0IVvar",
    "colorIndex": 0.285,
    "color": "#fff2d2",
    "positionLy": [
      23.939,
      94.887,
      -120.889
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-20405",
    "name": "Secunda Hyadum",
    "distanceLy": 155.61,
    "apparentMagnitude": 3.77,
    "spectralClass": "G8III",
    "colorIndex": 0.983,
    "color": "#ffd7a3",
    "positionLy": [
      60.978,
      46.903,
      135.264
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-79135",
    "name": "Psi Sco",
    "distanceLy": 155.61,
    "apparentMagnitude": 4.93,
    "spectralClass": "A3IV",
    "colorIndex": 0.087,
    "color": "#c7ddff",
    "positionLy": [
      -69.558,
      -27.193,
      -136.515
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-10279",
    "name": "Gliese 87.1B",
    "distanceLy": 156.13,
    "apparentMagnitude": 7.56,
    "spectralClass": "G4",
    "colorIndex": 0.716,
    "color": "#ffd7a3",
    "positionLy": [
      130.538,
      -6.528,
      85.403
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-91684",
    "name": "Zet-1 Lyr",
    "distanceLy": 156.13,
    "apparentMagnitude": 4.34,
    "spectralClass": "Am",
    "colorIndex": 0.192,
    "color": "#c7ddff",
    "positionLy": [
      24.011,
      95.273,
      -121.338
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-80819",
    "name": "Gam Aps",
    "distanceLy": 156.28,
    "apparentMagnitude": 3.86,
    "spectralClass": "K0IV SB",
    "colorIndex": 0.923,
    "color": "#ffd7a3",
    "positionLy": [
      -11.097,
      -153.355,
      -27.974
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-17142",
    "name": "Gliese GJ 3244",
    "distanceLy": 156.66,
    "apparentMagnitude": 6.96,
    "spectralClass": "G5",
    "colorIndex": 0.954,
    "color": "#ffd7a3",
    "positionLy": [
      89.337,
      -6.376,
      128.528
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-81602",
    "name": "Bet Aps",
    "distanceLy": 156.96,
    "apparentMagnitude": 4.23,
    "spectralClass": "K0III",
    "colorIndex": 1.06,
    "color": "#ffb17b",
    "positionLy": [
      -11.174,
      -153.246,
      -32.032
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-106642",
    "name": "Nashira",
    "distanceLy": 157.03,
    "apparentMagnitude": 3.69,
    "spectralClass": "A7III:mp...",
    "colorIndex": 0.32,
    "color": "#fff2d2",
    "positionLy": [
      123.266,
      -45.026,
      -86.239
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-94966",
    "name": "Eta Tel",
    "distanceLy": 157.26,
    "apparentMagnitude": 5.03,
    "spectralClass": "A0Vn",
    "colorIndex": 0.02,
    "color": "#c7ddff",
    "positionLy": [
      32.36,
      -127.906,
      -85.577
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-102714",
    "name": "Mu Aqr",
    "distanceLy": 157.26,
    "apparentMagnitude": 4.73,
    "spectralClass": "A3m",
    "colorIndex": 0.325,
    "color": "#fff2d2",
    "positionLy": [
      106.259,
      -24.556,
      -113.299
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-30269",
    "name": "Nu Pic",
    "distanceLy": 157.41,
    "apparentMagnitude": 5.6,
    "spectralClass": "Am",
    "colorIndex": 0.242,
    "color": "#c7ddff",
    "positionLy": [
      -8.708,
      -131.065,
      86.743
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-104442",
    "name": "Solaris",
    "distanceLy": 157.72,
    "apparentMagnitude": 9.78,
    "spectralClass": "K5",
    "colorIndex": 1.611,
    "color": "#ffb17b",
    "positionLy": [
      114.085,
      39.993,
      -101.289
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119388",
    "name": "Gliese 816.2B",
    "distanceLy": 158.02,
    "apparentMagnitude": 6.5,
    "spectralClass": "unknown",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      107.098,
      -53.672,
      -103.053
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-98110",
    "name": "The-2 Sgr",
    "distanceLy": 158.17,
    "apparentMagnitude": 5.3,
    "spectralClass": "A4/A5IV",
    "colorIndex": 0.17,
    "color": "#c7ddff",
    "positionLy": [
      64.952,
      -90.04,
      -112.663
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-21220",
    "name": "Rho Tau",
    "distanceLy": 158.25,
    "apparentMagnitude": 4.65,
    "spectralClass": "A8V",
    "colorIndex": 0.255,
    "color": "#fff2d2",
    "positionLy": [
      56.158,
      40.544,
      142.29
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-1682",
    "name": "Rho And",
    "distanceLy": 158.33,
    "apparentMagnitude": 5.16,
    "spectralClass": "F5III",
    "colorIndex": 0.442,
    "color": "#fff2d2",
    "positionLy": [
      124.288,
      97.408,
      11.487
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-3696",
    "name": "Gliese GJ 9029A",
    "distanceLy": 159.02,
    "apparentMagnitude": 7.85,
    "spectralClass": "F7/F8V",
    "colorIndex": 0.539,
    "color": "#fff2d2",
    "positionLy": [
      124.379,
      -95.569,
      26.161
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-53584",
    "name": "Alkes",
    "distanceLy": 159.18,
    "apparentMagnitude": 4.08,
    "spectralClass": "K1III",
    "colorIndex": 1.079,
    "color": "#ffb17b",
    "positionLy": [
      -145.942,
      -49.978,
      39.259
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-104122",
    "name": "Nu Aqr",
    "distanceLy": 159.33,
    "apparentMagnitude": 4.5,
    "spectralClass": "G8III",
    "colorIndex": 0.926,
    "color": "#ffd7a3",
    "positionLy": [
      114.98,
      -31.416,
      -105.735
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-30788",
    "name": "Lucilinburhuc",
    "distanceLy": 159.41,
    "apparentMagnitude": 7.89,
    "spectralClass": "G5",
    "colorIndex": 0.74,
    "color": "#ffd7a3",
    "positionLy": [
      -15.515,
      100.241,
      122.976
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-81569",
    "name": "Gliese GJ 3970",
    "distanceLy": 159.41,
    "apparentMagnitude": 7.16,
    "spectralClass": "G8V",
    "colorIndex": 0.78,
    "color": "#ffd7a3",
    "positionLy": [
      -41.9,
      -96.696,
      -119.609
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-9620",
    "name": "Gliese 83.4A",
    "distanceLy": 159.57,
    "apparentMagnitude": 7.3,
    "spectralClass": "G3V",
    "colorIndex": 0.694,
    "color": "#ffd7a3",
    "positionLy": [
      96.037,
      -113.642,
      57.659
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-96756",
    "name": "Gliese GJ 9666",
    "distanceLy": 159.57,
    "apparentMagnitude": 5.49,
    "spectralClass": "F5V",
    "colorIndex": 0.46,
    "color": "#fff2d2",
    "positionLy": [
      67.149,
      -42.562,
      -138.352
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-72261",
    "name": "Merga",
    "distanceLy": 159.8,
    "apparentMagnitude": 5.76,
    "spectralClass": "F7IVw",
    "colorIndex": 0.482,
    "color": "#fff2d2",
    "positionLy": [
      -81.896,
      115.177,
      -74.592
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-12451",
    "name": "Zet Hor",
    "distanceLy": 160.12,
    "apparentMagnitude": 5.21,
    "spectralClass": "F4IV",
    "colorIndex": 0.411,
    "color": "#fff2d2",
    "positionLy": [
      70.967,
      -130.434,
      59.898
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-70828",
    "name": "Rho Boo",
    "distanceLy": 160.12,
    "apparentMagnitude": 3.57,
    "spectralClass": "K3III",
    "colorIndex": 1.298,
    "color": "#ffb17b",
    "positionLy": [
      -108.921,
      80.955,
      -84.968
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-25542",
    "name": "Nihal",
    "distanceLy": 160.35,
    "apparentMagnitude": 2.81,
    "spectralClass": "G5II",
    "colorIndex": 0.807,
    "color": "#ffd7a3",
    "positionLy": [
      20.709,
      -56.836,
      148.504
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-42195",
    "name": "Del Hya",
    "distanceLy": 160.35,
    "apparentMagnitude": 4.14,
    "spectralClass": "A1Vnn",
    "colorIndex": 0.003,
    "color": "#c7ddff",
    "positionLy": [
      -101.307,
      15.937,
      123.271
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-98604",
    "name": "Eta Sge",
    "distanceLy": 160.35,
    "apparentMagnitude": 5.09,
    "spectralClass": "K2III",
    "colorIndex": 1.058,
    "color": "#ffb17b",
    "positionLy": [
      78.262,
      54.82,
      -128.772
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-112776",
    "name": "Skat",
    "distanceLy": 160.59,
    "apparentMagnitude": 3.27,
    "spectralClass": "A3V",
    "colorIndex": 0.066,
    "color": "#c7ddff",
    "positionLy": [
      148.267,
      -43.781,
      -43.462
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-11231",
    "name": "Lam Hor",
    "distanceLy": 161.06,
    "apparentMagnitude": 5.36,
    "spectralClass": "F2III",
    "colorIndex": 0.395,
    "color": "#fff2d2",
    "positionLy": [
      64.352,
      -139.923,
      47.141
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-13813",
    "name": "Acamar",
    "distanceLy": 161.22,
    "apparentMagnitude": 2.88,
    "spectralClass": "A4III+...",
    "colorIndex": 0.128,
    "color": "#c7ddff",
    "positionLy": [
      87.597,
      -104.288,
      86.278
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-20490",
    "name": "Del-2 Tau",
    "distanceLy": 161.38,
    "apparentMagnitude": 4.8,
    "spectralClass": "A7V",
    "colorIndex": 0.154,
    "color": "#c7ddff",
    "positionLy": [
      62.563,
      48.379,
      140.678
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-103684",
    "name": "Eta Cap",
    "distanceLy": 161.46,
    "apparentMagnitude": 4.82,
    "spectralClass": "A5V",
    "colorIndex": 0.169,
    "color": "#c7ddff",
    "positionLy": [
      109.43,
      -54.84,
      -105.302
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-20155",
    "name": "Prima Hyadum",
    "distanceLy": 161.54,
    "apparentMagnitude": 3.65,
    "spectralClass": "G8III",
    "colorIndex": 0.981,
    "color": "#ffd7a3",
    "positionLy": [
      65.875,
      43.518,
      140.937
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-83290",
    "name": "Rapeto",
    "distanceLy": 161.54,
    "apparentMagnitude": 7.39,
    "spectralClass": "G2IV-V",
    "colorIndex": 0.565,
    "color": "#fff2d2",
    "positionLy": [
      -28.181,
      -110.81,
      -114.121
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-19730",
    "name": "Alp Ret",
    "distanceLy": 161.62,
    "apparentMagnitude": 3.33,
    "spectralClass": "G7III",
    "colorIndex": 0.915,
    "color": "#ffd7a3",
    "positionLy": [
      33.205,
      -143.329,
      66.909
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-97112",
    "name": "Nu Tel",
    "distanceLy": 161.62,
    "apparentMagnitude": 5.33,
    "spectralClass": "A9Vn",
    "colorIndex": 0.196,
    "color": "#c7ddff",
    "positionLy": [
      40.652,
      -134.561,
      -79.767
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-36087",
    "name": "Gomeisa",
    "distanceLy": 161.7,
    "apparentMagnitude": 2.89,
    "spectralClass": "B8Vvar",
    "colorIndex": -0.097,
    "color": "#c7ddff",
    "positionLy": [
      -59.392,
      23.313,
      148.584
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-114887",
    "name": "Salm",
    "distanceLy": 161.7,
    "apparentMagnitude": 4.58,
    "spectralClass": "A5V",
    "colorIndex": 0.18,
    "color": "#c7ddff",
    "positionLy": [
      145.843,
      65.101,
      -25.298
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-56403",
    "name": "Sagarmatha",
    "distanceLy": 161.78,
    "apparentMagnitude": 8.42,
    "spectralClass": "K0",
    "colorIndex": 0.76,
    "color": "#ffd7a3",
    "positionLy": [
      -160.333,
      -13.413,
      16.952
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-34382",
    "name": "Gam-1 Vol",
    "distanceLy": 161.94,
    "apparentMagnitude": 5.68,
    "spectralClass": "F2",
    "colorIndex": 0.436,
    "color": "#fff2d2",
    "positionLy": [
      -15.967,
      -152.653,
      51.654
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-84542",
    "name": "Gliese 668.1",
    "distanceLy": 162.02,
    "apparentMagnitude": 6.31,
    "spectralClass": "G9V",
    "colorIndex": 0.85,
    "color": "#ffd7a3",
    "positionLy": [
      -27.99,
      -16.704,
      -158.711
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-103804",
    "name": "The Cap",
    "distanceLy": 162.19,
    "apparentMagnitude": 4.08,
    "spectralClass": "A1V",
    "colorIndex": -0.01,
    "color": "#c7ddff",
    "positionLy": [
      112.339,
      -48.048,
      -106.655
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-43783",
    "name": "Zet Oct",
    "distanceLy": 162.27,
    "apparentMagnitude": 5.43,
    "spectralClass": "F0III",
    "colorIndex": 0.306,
    "color": "#fff2d2",
    "positionLy": [
      -8.55,
      -161.802,
      8.801
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-91633",
    "name": "Eps-1 Lyr",
    "distanceLy": 162.35,
    "apparentMagnitude": 4.67,
    "spectralClass": "F1V",
    "colorIndex": 0.17,
    "color": "#c7ddff",
    "positionLy": [
      24.026,
      103.637,
      -122.632
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-55498",
    "name": "Shama",
    "distanceLy": 162.83,
    "apparentMagnitude": 9.1,
    "spectralClass": "K0",
    "colorIndex": 0.874,
    "color": "#ffd7a3",
    "positionLy": [
      -160.804,
      -4.345,
      25.261
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-76100",
    "name": "Zubenelhakrabi",
    "distanceLy": 163.16,
    "apparentMagnitude": 3.91,
    "spectralClass": "K0III",
    "colorIndex": 1.007,
    "color": "#ffb17b",
    "positionLy": [
      -92.989,
      -41.649,
      -127.433
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-58773",
    "name": "Omi Vir",
    "distanceLy": 163.24,
    "apparentMagnitude": 4.12,
    "spectralClass": "G8III",
    "colorIndex": 0.967,
    "color": "#ffd7a3",
    "positionLy": [
      -161.306,
      24.785,
      -3.667
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-69261",
    "name": "Kap-2 Boo",
    "distanceLy": 163.4,
    "apparentMagnitude": 4.53,
    "spectralClass": "A8IV",
    "colorIndex": 0.233,
    "color": "#c7ddff",
    "positionLy": [
      -84.409,
      128.395,
      -55.596
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-110049",
    "name": "Sadachbia",
    "distanceLy": 163.73,
    "apparentMagnitude": 3.86,
    "spectralClass": "A0V",
    "colorIndex": -0.057,
    "color": "#c7ddff",
    "positionLy": [
      148.844,
      -3.964,
      -68.102
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-3025",
    "name": "Eps And",
    "distanceLy": 163.82,
    "apparentMagnitude": 4.34,
    "spectralClass": "G5III...",
    "colorIndex": 0.871,
    "color": "#ffd7a3",
    "positionLy": [
      140.823,
      80.196,
      23.917
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-8813",
    "name": "Mesarthim",
    "distanceLy": 164.06,
    "apparentMagnitude": 3.88,
    "spectralClass": "A1p Si",
    "colorIndex": -0.047,
    "color": "#c7ddff",
    "positionLy": [
      136.234,
      54.208,
      73.608
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-13108",
    "name": "Nu Hor",
    "distanceLy": 164.56,
    "apparentMagnitude": 5.25,
    "spectralClass": "A2V",
    "colorIndex": 0.101,
    "color": "#c7ddff",
    "positionLy": [
      55.661,
      -146.371,
      50.57
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-45317",
    "name": "Gliese 339.3",
    "distanceLy": 164.64,
    "apparentMagnitude": 4.63,
    "spectralClass": "F3/F5V",
    "colorIndex": 0.473,
    "color": "#fff2d2",
    "positionLy": [
      -98.601,
      -100.03,
      85.901
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-96858",
    "name": "Fawaris",
    "distanceLy": 164.98,
    "apparentMagnitude": 2.86,
    "spectralClass": "B9.5III",
    "colorIndex": -0.002,
    "color": "#c7ddff",
    "positionLy": [
      51.466,
      116.921,
      -104.391
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-54718",
    "name": "Chertan",
    "distanceLy": 165.06,
    "apparentMagnitude": 3.33,
    "spectralClass": "A2V",
    "colorIndex": -0.003,
    "color": "#c7ddff",
    "positionLy": [
      -155.949,
      43.915,
      31.558
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-57884",
    "name": "Gliese 452.2A",
    "distanceLy": 165.06,
    "apparentMagnitude": 6.46,
    "spectralClass": "F7V",
    "colorIndex": 0.528,
    "color": "#fff2d2",
    "positionLy": [
      -130.473,
      -101.049,
      3.171
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-28309",
    "name": "Mahasim",
    "distanceLy": 165.56,
    "apparentMagnitude": 2.65,
    "spectralClass": "A0p Si",
    "colorIndex": -0.083,
    "color": "#c7ddff",
    "positionLy": [
      0.16,
      100.128,
      131.853
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-13176",
    "name": "Bharani",
    "distanceLy": 165.65,
    "apparentMagnitude": 3.61,
    "spectralClass": "B8Vn",
    "colorIndex": -0.1,
    "color": "#c7ddff",
    "positionLy": [
      108.57,
      75.872,
      99.472
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-19382",
    "name": "Gliese GJ 3264",
    "distanceLy": 165.73,
    "apparentMagnitude": 7.03,
    "spectralClass": "G0",
    "colorIndex": 0.712,
    "color": "#ffd7a3",
    "positionLy": [
      76.003,
      -22.758,
      145.506
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-37159",
    "name": "Jishui",
    "distanceLy": 166.32,
    "apparentMagnitude": 4.89,
    "spectralClass": "F3III",
    "colorIndex": 0.413,
    "color": "#fff2d2",
    "positionLy": [
      -57.417,
      94.407,
      124.312
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-53063",
    "name": "Gliese GJ 9336",
    "distanceLy": 166.58,
    "apparentMagnitude": 7.02,
    "spectralClass": "G3/G5V",
    "colorIndex": 0.645,
    "color": "#ffd7a3",
    "positionLy": [
      -149.296,
      -58.685,
      44.879
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-43689",
    "name": "Zet Hya",
    "distanceLy": 167.17,
    "apparentMagnitude": 3.11,
    "spectralClass": "G8III-IV",
    "colorIndex": 0.978,
    "color": "#ffd7a3",
    "positionLy": [
      -115.188,
      17.317,
      119.914
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-60554",
    "name": "Gam Com",
    "distanceLy": 167.26,
    "apparentMagnitude": 4.35,
    "spectralClass": "K2IIICN+...",
    "colorIndex": 1.128,
    "color": "#ffb17b",
    "positionLy": [
      -146.296,
      79.215,
      -17.275
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-88131",
    "name": "Tau Oph",
    "distanceLy": 167.43,
    "apparentMagnitude": 4.77,
    "spectralClass": "F5V+...",
    "colorIndex": 0.41,
    "color": "#fff2d2",
    "positionLy": [
      2.229,
      -23.824,
      -165.712
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-111147",
    "name": "Eta Aqr",
    "distanceLy": 167.86,
    "apparentMagnitude": 4.04,
    "spectralClass": "B9IV-Vn",
    "colorIndex": -0.083,
    "color": "#c7ddff",
    "positionLy": [
      156.543,
      -0.344,
      -60.596
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-116439",
    "name": "Kap And",
    "distanceLy": 168.38,
    "apparentMagnitude": 4.15,
    "spectralClass": "B9IVn",
    "colorIndex": -0.071,
    "color": "#c7ddff",
    "positionLy": [
      120,
      117.672,
      -10.283
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-2479",
    "name": "Bet-2 Tuc",
    "distanceLy": 168.47,
    "apparentMagnitude": 4.53,
    "spectralClass": "A2V",
    "colorIndex": 0.147,
    "color": "#c7ddff",
    "positionLy": [
      75.849,
      -150.061,
      10.511
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-77617",
    "name": "The Lib",
    "distanceLy": 168.47,
    "apparentMagnitude": 4.13,
    "spectralClass": "K0III",
    "colorIndex": 1.003,
    "color": "#ffb17b",
    "positionLy": [
      -84.404,
      -48.494,
      -137.5
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-21228",
    "name": "Alp Dor",
    "distanceLy": 168.64,
    "apparentMagnitude": 3.3,
    "spectralClass": "A0V:",
    "colorIndex": -0.079,
    "color": "#c7ddff",
    "positionLy": [
      35.413,
      -138.221,
      89.898
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-80729",
    "name": "Ome Oph",
    "distanceLy": 168.64,
    "apparentMagnitude": 4.45,
    "spectralClass": "Ap",
    "colorIndex": 0.13,
    "color": "#c7ddff",
    "positionLy": [
      -58.706,
      -61.716,
      -145.552
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-5574",
    "name": "Tau Psc",
    "distanceLy": 168.82,
    "apparentMagnitude": 4.51,
    "spectralClass": "K0III-IV...",
    "colorIndex": 1.092,
    "color": "#ffb17b",
    "positionLy": [
      138.987,
      84.638,
      44.932
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-92659",
    "name": "Alya B",
    "distanceLy": 169.43,
    "apparentMagnitude": 4.98,
    "spectralClass": "A5Vn",
    "colorIndex": 0.204,
    "color": "#c7ddff",
    "positionLy": [
      41.053,
      12.415,
      -163.912
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-77280",
    "name": "Mu Ser",
    "distanceLy": 169.61,
    "apparentMagnitude": 3.54,
    "spectralClass": "A0V",
    "colorIndex": -0.036,
    "color": "#c7ddff",
    "positionLy": [
      -91.203,
      -10.148,
      -142.638
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-14802",
    "name": "Botein",
    "distanceLy": 169.7,
    "apparentMagnitude": 4.35,
    "spectralClass": "K2IIIvar",
    "colorIndex": 1.033,
    "color": "#ffb17b",
    "positionLy": [
      107.077,
      57.278,
      118.535
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-76299",
    "name": "Phi Boo",
    "distanceLy": 169.7,
    "apparentMagnitude": 5.25,
    "spectralClass": "G8III-IV",
    "colorIndex": 0.886,
    "color": "#ffd7a3",
    "positionLy": [
      -75.176,
      109.878,
      -105.224
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-119195",
    "name": "Tau Oph",
    "distanceLy": 169.7,
    "apparentMagnitude": 5.24,
    "spectralClass": "dF3   J",
    "colorIndex": 0.38,
    "color": "#fff2d2",
    "positionLy": [
      2.251,
      -24.149,
      -167.947
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-20248",
    "name": "Nu Men",
    "distanceLy": 169.78,
    "apparentMagnitude": 5.78,
    "spectralClass": "F0/F2III",
    "colorIndex": 0.359,
    "color": "#fff2d2",
    "positionLy": [
      10.412,
      -167.955,
      22.576
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-76190",
    "name": "Tau-5 Ser",
    "distanceLy": 169.78,
    "apparentMagnitude": 5.93,
    "spectralClass": "F3V",
    "colorIndex": 0.354,
    "color": "#fff2d2",
    "positionLy": [
      -95.593,
      47.138,
      -132.162
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-110192",
    "name": "Bet Lac",
    "distanceLy": 169.96,
    "apparentMagnitude": 4.42,
    "spectralClass": "G9III",
    "colorIndex": 1.015,
    "color": "#ffb17b",
    "positionLy": [
      95.021,
      134.349,
      -42.525
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-77276",
    "name": "Del CrB",
    "distanceLy": 170.05,
    "apparentMagnitude": 4.59,
    "spectralClass": "G5III-IV",
    "colorIndex": 0.794,
    "color": "#ffd7a3",
    "positionLy": [
      -82.301,
      74.727,
      -128.683
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-115258",
    "name": "Alkarab",
    "distanceLy": 170.41,
    "apparentMagnitude": 4.42,
    "spectralClass": "F8IV",
    "colorIndex": 0.617,
    "color": "#ffd7a3",
    "positionLy": [
      154.604,
      67.687,
      -23.534
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-23125",
    "name": "Ome Aur",
    "distanceLy": 170.49,
    "apparentMagnitude": 4.93,
    "spectralClass": "A1V",
    "colorIndex": 0.037,
    "color": "#c7ddff",
    "positionLy": [
      35.246,
      104.709,
      129.854
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-32985",
    "name": "Gliese GJ 9222",
    "distanceLy": 170.49,
    "apparentMagnitude": 7.64,
    "spectralClass": "F8V+...",
    "colorIndex": 0.525,
    "color": "#fff2d2",
    "positionLy": [
      -10.347,
      -164.471,
      43.709
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-64450",
    "name": "Gliese 506.2",
    "distanceLy": 170.76,
    "apparentMagnitude": 7.27,
    "spectralClass": "G0",
    "colorIndex": 0.53,
    "color": "#fff2d2",
    "positionLy": [
      -14.786,
      170.047,
      -5.033
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-79352",
    "name": "Yed Prior",
    "distanceLy": 171.12,
    "apparentMagnitude": 2.73,
    "spectralClass": "M1III",
    "colorIndex": 1.584,
    "color": "#ffb17b",
    "positionLy": [
      -75.964,
      -11.026,
      -152.938
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-13028",
    "name": "Lilii Borea",
    "distanceLy": 171.57,
    "apparentMagnitude": 4.52,
    "spectralClass": "K1III",
    "colorIndex": 1.112,
    "color": "#ffb17b",
    "positionLy": [
      111.288,
      83.825,
      100.124
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-85560",
    "name": "Yildun",
    "distanceLy": 172.11,
    "apparentMagnitude": 4.35,
    "spectralClass": "A1Vn",
    "colorIndex": 0.021,
    "color": "#c7ddff",
    "positionLy": [
      -1.239,
      171.808,
      -10.173
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-13114",
    "name": "Bet For",
    "distanceLy": 172.66,
    "apparentMagnitude": 4.45,
    "spectralClass": "G8III",
    "colorIndex": 0.981,
    "color": "#ffd7a3",
    "positionLy": [
      107.865,
      -92.532,
      98.056
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-2466",
    "name": "Lam-1 Phe",
    "distanceLy": 172.75,
    "apparentMagnitude": 4.76,
    "spectralClass": "A0V",
    "colorIndex": 0.018,
    "color": "#c7ddff",
    "positionLy": [
      112.715,
      -129.988,
      15.548
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-23442",
    "name": "Iot Tau",
    "distanceLy": 172.75,
    "apparentMagnitude": 4.62,
    "spectralClass": "A7V",
    "colorIndex": 0.155,
    "color": "#c7ddff",
    "positionLy": [
      39.475,
      63.567,
      155.707
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-28837",
    "name": "The Lep",
    "distanceLy": 172.75,
    "apparentMagnitude": 4.67,
    "spectralClass": "A0V",
    "colorIndex": 0.046,
    "color": "#c7ddff",
    "positionLy": [
      -4.483,
      -44.523,
      166.857
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-76642",
    "name": "Tau-7 Ser",
    "distanceLy": 173.12,
    "apparentMagnitude": 5.8,
    "spectralClass": "A2m",
    "colorIndex": 0.207,
    "color": "#c7ddff",
    "positionLy": [
      -93.06,
      54.828,
      -135.291
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-80637",
    "name": "Marfik",
    "distanceLy": 173.12,
    "apparentMagnitude": 3.82,
    "spectralClass": "A2V",
    "colorIndex": 0.022,
    "color": "#c7ddff",
    "positionLy": [
      -65.572,
      5.993,
      -160.108
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-86298",
    "name": "Omi Ser",
    "distanceLy": 173.21,
    "apparentMagnitude": 4.24,
    "spectralClass": "A2Va",
    "colorIndex": 0.086,
    "color": "#c7ddff",
    "positionLy": [
      -13.678,
      -38.596,
      -168.3
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-5725",
    "name": "Revati",
    "distanceLy": 173.86,
    "apparentMagnitude": 5.21,
    "spectralClass": "A7IV",
    "colorIndex": 0.32,
    "color": "#fff2d2",
    "positionLy": [
      163.498,
      22.92,
      54.493
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-116934",
    "name": "Tau Cas",
    "distanceLy": 173.95,
    "apparentMagnitude": 4.88,
    "spectralClass": "K1III",
    "colorIndex": 1.122,
    "color": "#ffb17b",
    "positionLy": [
      90.35,
      148.557,
      -5.108
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-115865",
    "name": "Bet Scl",
    "distanceLy": 174.04,
    "apparentMagnitude": 4.38,
    "spectralClass": "B9.5IVMNpe.",
    "colorIndex": -0.095,
    "color": "#c7ddff",
    "positionLy": [
      136.532,
      -106.716,
      -16.177
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-96921",
    "name": "Ups Aql",
    "distanceLy": 174.88,
    "apparentMagnitude": 5.89,
    "spectralClass": "A3IV",
    "colorIndex": 0.18,
    "color": "#c7ddff",
    "positionLy": [
      77.118,
      23.169,
      -155.241
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-114346",
    "name": "Gliese GJ 4318",
    "distanceLy": 174.98,
    "apparentMagnitude": 6.9,
    "spectralClass": "G5V",
    "colorIndex": 0.733,
    "color": "#ffd7a3",
    "positionLy": [
      58.488,
      -164.485,
      -11.863
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-3407",
    "name": "Pi Cas",
    "distanceLy": 175.07,
    "apparentMagnitude": 4.95,
    "spectralClass": "A5V",
    "colorIndex": 0.17,
    "color": "#c7ddff",
    "positionLy": [
      117.203,
      128.09,
      22.5
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-108793",
    "name": "Iot Aqr",
    "distanceLy": 175.16,
    "apparentMagnitude": 4.29,
    "spectralClass": "B8V",
    "colorIndex": -0.075,
    "color": "#c7ddff",
    "positionLy": [
      149.603,
      -41.989,
      -80.859
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-71569",
    "name": "Zet Boo",
    "distanceLy": 175.73,
    "apparentMagnitude": 3.78,
    "spectralClass": "A3IVn",
    "colorIndex": 0.044,
    "color": "#c7ddff",
    "positionLy": [
      -130.22,
      41.704,
      -110.385
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-103237",
    "name": "Eps Equ",
    "distanceLy": 176.4,
    "apparentMagnitude": 5.3,
    "spectralClass": "F5III...",
    "colorIndex": 0.464,
    "color": "#fff2d2",
    "positionLy": [
      123.878,
      13.206,
      -124.882
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-27461",
    "name": "Gam Pic",
    "distanceLy": 176.78,
    "apparentMagnitude": 4.5,
    "spectralClass": "K1III",
    "colorIndex": 1.075,
    "color": "#ffb17b",
    "positionLy": [
      4.367,
      -146.843,
      98.33
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-29623",
    "name": "Kap Aur",
    "distanceLy": 176.97,
    "apparentMagnitude": 4.32,
    "spectralClass": "G8IIIvar",
    "colorIndex": 1.021,
    "color": "#ffb17b",
    "positionLy": [
      -10.328,
      87.139,
      153.684
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-111768",
    "name": "Tiaki",
    "distanceLy": 176.97,
    "apparentMagnitude": 2.07,
    "spectralClass": "M5III",
    "colorIndex": 1.61,
    "color": "#ffb17b",
    "positionLy": [
      114.133,
      -129.185,
      -40.043
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-7593",
    "name": "Nembus",
    "distanceLy": 177.16,
    "apparentMagnitude": 3.59,
    "spectralClass": "K3III",
    "colorIndex": 1.275,
    "color": "#ffb17b",
    "positionLy": [
      106.553,
      132.949,
      48.555
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-19992",
    "name": "Ups-4 Eri",
    "distanceLy": 177.94,
    "apparentMagnitude": 3.55,
    "spectralClass": "B9V",
    "colorIndex": -0.108,
    "color": "#9fc7ff",
    "positionLy": [
      63.719,
      -98.981,
      133.432
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-93710",
    "name": "Del CrA",
    "distanceLy": 178.52,
    "apparentMagnitude": 4.57,
    "spectralClass": "K1III",
    "colorIndex": 1.07,
    "color": "#ffb17b",
    "positionLy": [
      39.889,
      -115.932,
      -129.762
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-106444",
    "name": "Bunda",
    "distanceLy": 178.62,
    "apparentMagnitude": 4.68,
    "spectralClass": "A7V",
    "colorIndex": 0.175,
    "color": "#c7ddff",
    "positionLy": [
      143.939,
      -24.409,
      -102.906
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-84529",
    "name": "Inquill",
    "distanceLy": 178.72,
    "apparentMagnitude": 6.67,
    "spectralClass": "G1Vw...",
    "colorIndex": 0.614,
    "color": "#ffd7a3",
    "positionLy": [
      -20.616,
      -133.952,
      -116.495
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-19465",
    "name": "Del Hor",
    "distanceLy": 178.81,
    "apparentMagnitude": 4.93,
    "spectralClass": "A9V",
    "colorIndex": 0.334,
    "color": "#fff2d2",
    "positionLy": [
      60.932,
      -119.636,
      118.108
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-100425",
    "name": "Peacock",
    "distanceLy": 178.81,
    "apparentMagnitude": 1.94,
    "spectralClass": "B2IV",
    "colorIndex": -0.118,
    "color": "#9fc7ff",
    "positionLy": [
      58.22,
      -149.514,
      -78.933
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-78316",
    "name": "Pi Ser",
    "distanceLy": 179.01,
    "apparentMagnitude": 4.82,
    "spectralClass": "A3V",
    "colorIndex": 0.066,
    "color": "#c7ddff",
    "positionLy": [
      -81.073,
      69.382,
      -143.727
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-8814",
    "name": "Xi Psc",
    "distanceLy": 179.11,
    "apparentMagnitude": 4.61,
    "spectralClass": "K0III SB",
    "colorIndex": 0.928,
    "color": "#ffd7a3",
    "positionLy": [
      157.326,
      9.959,
      85.027
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-41586",
    "name": "Muscida",
    "distanceLy": 179.11,
    "apparentMagnitude": 3.35,
    "spectralClass": "G4II-III",
    "colorIndex": 0.856,
    "color": "#ffd7a3",
    "positionLy": [
      -53.41,
      156.223,
      69.439
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-104028",
    "name": "Chi Cap",
    "distanceLy": 179.8,
    "apparentMagnitude": 5.3,
    "spectralClass": "A0V",
    "colorIndex": 0,
    "color": "#c7ddff",
    "positionLy": [
      122.882,
      -65.001,
      -114.029
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-74148",
    "name": "Kap-1 Lup",
    "distanceLy": 180,
    "apparentMagnitude": 3.88,
    "spectralClass": "B9V",
    "colorIndex": -0.029,
    "color": "#c7ddff",
    "positionLy": [
      -79.457,
      -135.304,
      -88.196
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-46259",
    "name": "Alphard",
    "distanceLy": 180.3,
    "apparentMagnitude": 1.99,
    "spectralClass": "K3III",
    "colorIndex": 1.44,
    "color": "#ffb17b",
    "positionLy": [
      -140.258,
      -27.143,
      109.989
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-115718",
    "name": "Poerava",
    "distanceLy": 180.3,
    "apparentMagnitude": 7.82,
    "spectralClass": "F7V",
    "colorIndex": 0.513,
    "color": "#fff2d2",
    "positionLy": [
      94.24,
      -153.249,
      -11.847
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-42687",
    "name": "Asellus Borealis",
    "distanceLy": 181.2,
    "apparentMagnitude": 4.66,
    "spectralClass": "A1IV",
    "colorIndex": 0.01,
    "color": "#c7ddff",
    "positionLy": [
      -110.232,
      66.317,
      127.609
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-23540",
    "name": "Gam-1 Cae",
    "distanceLy": 181.3,
    "apparentMagnitude": 4.55,
    "spectralClass": "K2III",
    "colorIndex": 1.177,
    "color": "#ffb17b",
    "positionLy": [
      35.46,
      -105.237,
      143.307
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-56478",
    "name": "Ups Leo",
    "distanceLy": 181.5,
    "apparentMagnitude": 4.3,
    "spectralClass": "G9III",
    "colorIndex": 0.983,
    "color": "#ffd7a3",
    "positionLy": [
      -180.564,
      -2.609,
      18.223
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-9814",
    "name": "Kap Ari",
    "distanceLy": 181.6,
    "apparentMagnitude": 5.03,
    "spectralClass": "A2m",
    "colorIndex": 0.121,
    "color": "#c7ddff",
    "positionLy": [
      142.684,
      69.93,
      87.922
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-4896",
    "name": "Eps Psc",
    "distanceLy": 181.8,
    "apparentMagnitude": 4.27,
    "spectralClass": "K0III",
    "colorIndex": 0.952,
    "color": "#ffd7a3",
    "positionLy": [
      173.334,
      24.957,
      48.839
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-95052",
    "name": "Rukbat",
    "distanceLy": 181.8,
    "apparentMagnitude": 3.96,
    "spectralClass": "B8V",
    "colorIndex": -0.105,
    "color": "#9fc7ff",
    "positionLy": [
      49.393,
      -118.352,
      -128.864
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-97721",
    "name": "Iot Sgr",
    "distanceLy": 181.8,
    "apparentMagnitude": 4.12,
    "spectralClass": "K0III",
    "colorIndex": 1.063,
    "color": "#ffb17b",
    "positionLy": [
      65.255,
      -121.34,
      -118.623
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-32682",
    "name": "Tau Pup",
    "distanceLy": 182.01,
    "apparentMagnitude": 2.94,
    "spectralClass": "K0III...",
    "colorIndex": 1.207,
    "color": "#ffb17b",
    "positionLy": [
      -24.965,
      -140.673,
      112.76
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-104802",
    "name": "Eps Mic",
    "distanceLy": 182.21,
    "apparentMagnitude": 4.71,
    "spectralClass": "A0V",
    "colorIndex": 0.07,
    "color": "#c7ddff",
    "positionLy": [
      117.251,
      -97.021,
      -100.197
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-114740",
    "name": "Gam Scl",
    "distanceLy": 182.21,
    "apparentMagnitude": 4.41,
    "spectralClass": "K1III",
    "colorIndex": 1.109,
    "color": "#ffb17b",
    "positionLy": [
      151.147,
      -97.987,
      -27.452
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-29734",
    "name": "Kap Col",
    "distanceLy": 182.52,
    "apparentMagnitude": 4.37,
    "spectralClass": "G8II",
    "colorIndex": 0.978,
    "color": "#ffd7a3",
    "positionLy": [
      -10.77,
      -105.054,
      148.863
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-58494",
    "name": "Gliese 454.2A",
    "distanceLy": 182.52,
    "apparentMagnitude": 6.91,
    "spectralClass": "G0V",
    "colorIndex": 0.586,
    "color": "#fff2d2",
    "positionLy": [
      -150.14,
      -103.772,
      -1.158
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-12838",
    "name": "Gam Hor",
    "distanceLy": 182.62,
    "apparentMagnitude": 5.73,
    "spectralClass": "G8III/IV",
    "colorIndex": 0.932,
    "color": "#ffd7a3",
    "positionLy": [
      60.717,
      -163.721,
      53.462
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-114059",
    "name": "Iot Gru",
    "distanceLy": 183.23,
    "apparentMagnitude": 3.88,
    "spectralClass": "K0III SB",
    "colorIndex": 0.998,
    "color": "#ffd7a3",
    "positionLy": [
      125.992,
      -130.122,
      -27.725
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-118793",
    "name": "Gliese 454.2B",
    "distanceLy": 183.23,
    "apparentMagnitude": 8.1,
    "spectralClass": "unknown",
    "colorIndex": null,
    "color": "#c7ddff",
    "positionLy": [
      -150.731,
      -104.18,
      -1.159
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-79939",
    "name": "Xi CrB",
    "distanceLy": 183.44,
    "apparentMagnitude": 4.86,
    "spectralClass": "K0III",
    "colorIndex": 0.97,
    "color": "#ffd7a3",
    "positionLy": [
      -65.219,
      94.182,
      -143.27
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-97627",
    "name": "Libertas",
    "distanceLy": 183.54,
    "apparentMagnitude": 4.71,
    "spectralClass": "K0III",
    "colorIndex": 1.023,
    "color": "#ffb17b",
    "positionLy": [
      86.798,
      27.007,
      -159.45
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-29477",
    "name": "Amadioha",
    "distanceLy": 183.65,
    "apparentMagnitude": 8.98,
    "spectralClass": "G8/K0IV/V",
    "colorIndex": 0.817,
    "color": "#ffd7a3",
    "positionLy": [
      -9.438,
      -91.538,
      158.927
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-57226",
    "name": "Taiyangshou",
    "distanceLy": 183.65,
    "apparentMagnitude": 3.69,
    "spectralClass": "K0III",
    "colorIndex": 1.181,
    "color": "#ffb17b",
    "positionLy": [
      -123.179,
      136.002,
      7.507
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-74717",
    "name": "Gam TrA",
    "distanceLy": 183.85,
    "apparentMagnitude": 2.87,
    "spectralClass": "A1V",
    "colorIndex": 0.014,
    "color": "#c7ddff",
    "positionLy": [
      -43.211,
      -171.271,
      -51.002
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-44037",
    "name": "Gliese GJ 3525",
    "distanceLy": 183.96,
    "apparentMagnitude": 6.88,
    "spectralClass": "G5V",
    "colorIndex": 0.695,
    "color": "#ffd7a3",
    "positionLy": [
      -114.903,
      -85.842,
      115.192
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-12450",
    "name": "Gliese GJ 9094",
    "distanceLy": 184.16,
    "apparentMagnitude": 8.01,
    "spectralClass": "F8V",
    "colorIndex": 0.564,
    "color": "#fff2d2",
    "positionLy": [
      121.722,
      -92.46,
      102.723
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-54921",
    "name": "Phi Leo",
    "distanceLy": 184.16,
    "apparentMagnitude": 4.45,
    "spectralClass": "A7IVn",
    "colorIndex": 0.21,
    "color": "#c7ddff",
    "positionLy": [
      -180.515,
      -11.729,
      34.548
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-47820",
    "name": "Nu Cha",
    "distanceLy": 184.37,
    "apparentMagnitude": 5.43,
    "spectralClass": "G8III",
    "colorIndex": 0.901,
    "color": "#ffd7a3",
    "positionLy": [
      -35.205,
      -179.484,
      23.226
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-74889",
    "name": "Omi Lib",
    "distanceLy": 184.79,
    "apparentMagnitude": 6.14,
    "spectralClass": "F2V",
    "colorIndex": 0.393,
    "color": "#fff2d2",
    "positionLy": [
      -113.825,
      -49.533,
      -136.887
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-93520",
    "name": "Rho Tel",
    "distanceLy": 185,
    "apparentMagnitude": 5.17,
    "spectralClass": "F7V",
    "colorIndex": 0.532,
    "color": "#fff2d2",
    "positionLy": [
      32.259,
      -146.458,
      -108.327
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-74556",
    "name": "Zubeneschamali",
    "distanceLy": 185.11,
    "apparentMagnitude": 2.61,
    "spectralClass": "B8V",
    "colorIndex": -0.071,
    "color": "#c7ddff",
    "positionLy": [
      -119.208,
      -30.178,
      -138.356
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-50033",
    "name": "Gliese GJ 3589",
    "distanceLy": 185.32,
    "apparentMagnitude": 6.02,
    "spectralClass": "F9V",
    "colorIndex": 0.573,
    "color": "#fff2d2",
    "positionLy": [
      -154.822,
      66.919,
      76.774
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-5289",
    "name": "Ups Phe",
    "distanceLy": 185.74,
    "apparentMagnitude": 5.21,
    "spectralClass": "A3V",
    "colorIndex": 0.159,
    "color": "#c7ddff",
    "positionLy": [
      133.094,
      -123.042,
      40.562
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-55118",
    "name": "Del Crt",
    "distanceLy": 185.74,
    "apparentMagnitude": 3.56,
    "spectralClass": "K0III",
    "colorIndex": 1.112,
    "color": "#ffb17b",
    "positionLy": [
      -176.775,
      -47.379,
      31.695
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-22904",
    "name": "Omi-2 Ori",
    "distanceLy": 185.95,
    "apparentMagnitude": 4.06,
    "spectralClass": "K2III",
    "colorIndex": 1.158,
    "color": "#ffb17b",
    "positionLy": [
      49.554,
      43.455,
      173.878
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-24249",
    "name": "Mu Lep",
    "distanceLy": 185.95,
    "apparentMagnitude": 3.29,
    "spectralClass": "B9IV: HgMn",
    "colorIndex": -0.11,
    "color": "#9fc7ff",
    "positionLy": [
      36.415,
      -51.896,
      174.81
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-69751",
    "name": "Khambalia",
    "distanceLy": 186.48,
    "apparentMagnitude": 4.52,
    "spectralClass": "A1V",
    "colorIndex": 0.128,
    "color": "#c7ddff",
    "positionLy": [
      -149.019,
      -43.125,
      -103.484
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-13254",
    "name": "Angetenar",
    "distanceLy": 186.91,
    "apparentMagnitude": 4.76,
    "spectralClass": "K0III",
    "colorIndex": 0.906,
    "color": "#ffd7a3",
    "positionLy": [
      128.112,
      -66.994,
      118.465
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-109657",
    "name": "Ancha",
    "distanceLy": 187.45,
    "apparentMagnitude": 4.17,
    "spectralClass": "G8III-IV",
    "colorIndex": 0.979,
    "color": "#ffd7a3",
    "positionLy": [
      167.218,
      -25.385,
      -80.806
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-53089",
    "name": "Gliese 404",
    "distanceLy": 187.66,
    "apparentMagnitude": 8.09,
    "spectralClass": "F8IV-V",
    "colorIndex": 0.538,
    "color": "#fff2d2",
    "positionLy": [
      -128.437,
      -131.327,
      38.394
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-108086",
    "name": "Del Ind",
    "distanceLy": 188.09,
    "apparentMagnitude": 4.4,
    "spectralClass": "F0IV",
    "colorIndex": 0.297,
    "color": "#fff2d2",
    "positionLy": [
      92.956,
      -154.064,
      -54.8
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-43939",
    "name": "Acubens",
    "distanceLy": 188.31,
    "apparentMagnitude": 4.26,
    "spectralClass": "A5m",
    "colorIndex": 0.141,
    "color": "#c7ddff",
    "positionLy": [
      -129.452,
      38.695,
      131.172
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-75589",
    "name": "Gliese 587",
    "distanceLy": 188.53,
    "apparentMagnitude": 7.68,
    "spectralClass": "G5V",
    "colorIndex": 0.77,
    "color": "#ffd7a3",
    "positionLy": [
      -74.13,
      -144.322,
      -96.015
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-12159",
    "name": "Buna",
    "distanceLy": 188.75,
    "apparentMagnitude": 7.28,
    "spectralClass": "G0",
    "colorIndex": 0.656,
    "color": "#ffd7a3",
    "positionLy": [
      108.502,
      126.45,
      88.675
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-101472",
    "name": "Iot Del",
    "distanceLy": 188.97,
    "apparentMagnitude": 5.42,
    "spectralClass": "A2V",
    "colorIndex": 0.05,
    "color": "#c7ddff",
    "positionLy": [
      117.722,
      37.278,
      -143.039
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-32932",
    "name": "The Gem",
    "distanceLy": 189.08,
    "apparentMagnitude": 3.6,
    "spectralClass": "A3III",
    "colorIndex": 0.102,
    "color": "#c7ddff",
    "positionLy": [
      -35.803,
      105.624,
      152.681
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-3685",
    "name": "Zet And",
    "distanceLy": 189.19,
    "apparentMagnitude": 4.08,
    "spectralClass": "K1II",
    "colorIndex": 1.1,
    "color": "#ffb17b",
    "positionLy": [
      168.802,
      77.753,
      35.371
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-94967",
    "name": "Sika",
    "distanceLy": 189.41,
    "apparentMagnitude": 7.84,
    "spectralClass": "G1V",
    "colorIndex": 0.599,
    "color": "#fff2d2",
    "positionLy": [
      56.254,
      -102.932,
      -148.709
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-45975",
    "name": "Iot Cha",
    "distanceLy": 189.63,
    "apparentMagnitude": 5.34,
    "spectralClass": "F3/F5IV",
    "colorIndex": 0.454,
    "color": "#fff2d2",
    "positionLy": [
      -23.607,
      -187.179,
      19.091
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-101446",
    "name": "Rho Pav",
    "distanceLy": 189.63,
    "apparentMagnitude": 4.86,
    "spectralClass": "Fm delta Del",
    "colorIndex": 0.447,
    "color": "#fff2d2",
    "positionLy": [
      57.373,
      -166.694,
      -69.854
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-53347",
    "name": "Iot Ant",
    "distanceLy": 190.07,
    "apparentMagnitude": 4.6,
    "spectralClass": "K0III",
    "colorIndex": 1.006,
    "color": "#ffb17b",
    "positionLy": [
      -145.78,
      -114.75,
      41.308
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-76616",
    "name": "Iot Ser",
    "distanceLy": 190.07,
    "apparentMagnitude": 4.51,
    "spectralClass": "A1V",
    "colorIndex": 0.062,
    "color": "#c7ddff",
    "positionLy": [
      -101.662,
      63.978,
      -147.3
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-76740",
    "name": "Gliese GJ 1195",
    "distanceLy": 190.07,
    "apparentMagnitude": 7.2,
    "spectralClass": "sdF3",
    "colorIndex": 0.484,
    "color": "#fff2d2",
    "positionLy": [
      -104.992,
      -36.049,
      -154.276
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-104649",
    "name": "Kitalpha",
    "distanceLy": 190.29,
    "apparentMagnitude": 3.92,
    "spectralClass": "G0III+...",
    "colorIndex": 0.549,
    "color": "#fff2d2",
    "positionLy": [
      142.915,
      17.405,
      -124.427
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-13439",
    "name": "Psi For",
    "distanceLy": 190.85,
    "apparentMagnitude": 5.93,
    "spectralClass": "F5V",
    "colorIndex": 0.437,
    "color": "#fff2d2",
    "positionLy": [
      108.627,
      -118.641,
      102.699
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-86109",
    "name": "Gliese GJ 4014",
    "distanceLy": 191.41,
    "apparentMagnitude": 7.24,
    "spectralClass": "G5V",
    "colorIndex": 0.714,
    "color": "#ffd7a3",
    "positionLy": [
      -12.783,
      -130.893,
      -139.067
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-20384",
    "name": "Gliese GJ 3273",
    "distanceLy": 191.63,
    "apparentMagnitude": 7.71,
    "spectralClass": "G5",
    "colorIndex": 0.798,
    "color": "#ffd7a3",
    "positionLy": [
      48.695,
      150.887,
      107.631
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-55921",
    "name": "Gliese 429.3",
    "distanceLy": 191.86,
    "apparentMagnitude": 7.39,
    "spectralClass": "F6V",
    "colorIndex": 0.419,
    "color": "#fff2d2",
    "positionLy": [
      -117.974,
      -150.488,
      15.636
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-45894",
    "name": "Lam Pyx",
    "distanceLy": 192.08,
    "apparentMagnitude": 4.71,
    "spectralClass": "G8III",
    "colorIndex": 0.892,
    "color": "#ffd7a3",
    "positionLy": [
      -130.401,
      -92.636,
      106.348
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-26423",
    "name": "Gliese 210",
    "distanceLy": 192.54,
    "apparentMagnitude": 7.43,
    "spectralClass": "G0V...",
    "colorIndex": 0.6,
    "color": "#ffd7a3",
    "positionLy": [
      13.485,
      -131.22,
      140.25
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-80443",
    "name": "Timir",
    "distanceLy": 192.54,
    "apparentMagnitude": 6.89,
    "spectralClass": "K0III/IV",
    "colorIndex": 0.95,
    "color": "#ffd7a3",
    "positionLy": [
      -72.829,
      -44.619,
      -172.555
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-93451",
    "name": "Gliese 743.2",
    "distanceLy": 192.54,
    "apparentMagnitude": 7.18,
    "spectralClass": "K0",
    "colorIndex": 1.093,
    "color": "#ffb17b",
    "positionLy": [
      48.708,
      84.162,
      -166.174
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-79928",
    "name": "Gam Her",
    "distanceLy": 192.65,
    "apparentMagnitude": 3.74,
    "spectralClass": "A9III",
    "colorIndex": 0.299,
    "color": "#fff2d2",
    "positionLy": [
      -75.525,
      63.207,
      -165.573
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-11457",
    "name": "Xi-2 Cet",
    "distanceLy": 193.11,
    "apparentMagnitude": 4.3,
    "spectralClass": "B9III",
    "colorIndex": -0.053,
    "color": "#c7ddff",
    "positionLy": [
      152.464,
      28.41,
      115.055
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-93248",
    "name": "Zet CrA",
    "distanceLy": 193.11,
    "apparentMagnitude": 4.74,
    "spectralClass": "A0Vn",
    "colorIndex": -0.027,
    "color": "#c7ddff",
    "positionLy": [
      38.964,
      -129.451,
      -137.891
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-109093",
    "name": "Gliese GJ 4261",
    "distanceLy": 193.22,
    "apparentMagnitude": 6.18,
    "spectralClass": "G0V",
    "colorIndex": 0.688,
    "color": "#ffd7a3",
    "positionLy": [
      161.558,
      64.868,
      -83.818
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-50272",
    "name": "Eps Sex",
    "distanceLy": 193.45,
    "apparentMagnitude": 5.25,
    "spectralClass": "F2III",
    "colorIndex": 0.336,
    "color": "#fff2d2",
    "positionLy": [
      -172.743,
      -27.153,
      82.737
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-36274",
    "name": "Sig Pup",
    "distanceLy": 193.68,
    "apparentMagnitude": 3.25,
    "spectralClass": "K5III SB",
    "colorIndex": 1.509,
    "color": "#ffb17b",
    "positionLy": [
      -53.503,
      -132.834,
      130.404
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-89854",
    "name": "Phi Oct",
    "distanceLy": 194.02,
    "apparentMagnitude": 5.47,
    "spectralClass": "A0V",
    "colorIndex": 0.043,
    "color": "#c7ddff",
    "positionLy": [
      5.149,
      -187.453,
      -49.807
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-43807",
    "name": "Sig-2 Cnc",
    "distanceLy": 194.26,
    "apparentMagnitude": 5.44,
    "spectralClass": "A7IV",
    "colorIndex": 0.181,
    "color": "#c7ddff",
    "positionLy": [
      -113.768,
      105.545,
      116.844
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-6678",
    "name": "Psi Cas",
    "distanceLy": 195.07,
    "apparentMagnitude": 4.72,
    "spectralClass": "K0III",
    "colorIndex": 1.047,
    "color": "#ffb17b",
    "positionLy": [
      67.615,
      181.03,
      26.612
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-77398",
    "name": "Chi Lup",
    "distanceLy": 195.19,
    "apparentMagnitude": 3.97,
    "spectralClass": "B9.5III-IV",
    "colorIndex": -0.045,
    "color": "#c7ddff",
    "positionLy": [
      -86.75,
      -108.091,
      -137.435
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-113521",
    "name": "Scheat",
    "distanceLy": 196.01,
    "apparentMagnitude": 2.44,
    "spectralClass": "M2II-IIIvar",
    "colorIndex": 1.655,
    "color": "#ffb17b",
    "positionLy": [
      167.753,
      92.27,
      -42.001
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-105175",
    "name": "Iot Cap",
    "distanceLy": 196.72,
    "apparentMagnitude": 4.28,
    "spectralClass": "G8III",
    "colorIndex": 0.888,
    "color": "#ffd7a3",
    "positionLy": [
      145.415,
      -56.971,
      -119.609
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-105041",
    "name": "The-1 Mic",
    "distanceLy": 197.19,
    "apparentMagnitude": 4.8,
    "spectralClass": "A2p",
    "colorIndex": 0.029,
    "color": "#c7ddff",
    "positionLy": [
      114.652,
      -128.874,
      -95.558
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-5436",
    "name": "Mirach",
    "distanceLy": 197.43,
    "apparentMagnitude": 2.07,
    "spectralClass": "M0IIIvar",
    "colorIndex": 1.576,
    "color": "#ffb17b",
    "positionLy": [
      153.118,
      114.987,
      48.081
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-85467",
    "name": "Del Ara",
    "distanceLy": 197.91,
    "apparentMagnitude": 3.6,
    "spectralClass": "B8V",
    "colorIndex": -0.104,
    "color": "#9fc7ff",
    "positionLy": [
      -12.188,
      -172.564,
      -96.133
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-62890",
    "name": "Minelauva",
    "distanceLy": 198.39,
    "apparentMagnitude": 3.39,
    "spectralClass": "M3III",
    "colorIndex": 1.571,
    "color": "#ffb17b",
    "positionLy": [
      -192.243,
      11.757,
      -47.578
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-90835",
    "name": "Alp Sct",
    "distanceLy": 199.12,
    "apparentMagnitude": 3.85,
    "spectralClass": "K2III",
    "colorIndex": 1.317,
    "color": "#ffb17b",
    "positionLy": [
      30.154,
      -28.552,
      -194.741
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-80101",
    "name": "Psi Oph",
    "distanceLy": 199.48,
    "apparentMagnitude": 4.48,
    "spectralClass": "K0III",
    "colorIndex": 0.996,
    "color": "#ffd7a3",
    "positionLy": [
      -76.149,
      -68.35,
      -171.241
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-109784",
    "name": "Alp Tuc",
    "distanceLy": 199.73,
    "apparentMagnitude": 2.87,
    "spectralClass": "K3III",
    "colorIndex": 1.39,
    "color": "#ffb17b",
    "positionLy": [
      89.521,
      -173.421,
      -42.459
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-4412",
    "name": "Castula",
    "distanceLy": 199.85,
    "apparentMagnitude": 4.62,
    "spectralClass": "G8III-IV",
    "colorIndex": 0.957,
    "color": "#ffd7a3",
    "positionLy": [
      99.274,
      171.629,
      25.058
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-46014",
    "name": "Kap Leo",
    "distanceLy": 201.33,
    "apparentMagnitude": 4.47,
    "spectralClass": "K2III",
    "colorIndex": 1.222,
    "color": "#ffb17b",
    "positionLy": [
      -140.734,
      88.833,
      113.3
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-8351",
    "name": "Tau-2 Hyi",
    "distanceLy": 201.7,
    "apparentMagnitude": 6.05,
    "spectralClass": "F0III",
    "colorIndex": 0.338,
    "color": "#fff2d2",
    "positionLy": [
      30.679,
      -198.748,
      15.594
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-76206",
    "name": "Eps TrA",
    "distanceLy": 201.7,
    "apparentMagnitude": 4.11,
    "spectralClass": "K0III",
    "colorIndex": 1.161,
    "color": "#ffb17b",
    "positionLy": [
      -47.416,
      -184.717,
      -65.696
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-114362",
    "name": "Phi Aqr",
    "distanceLy": 202.08,
    "apparentMagnitude": 4.22,
    "spectralClass": "M2III",
    "colorIndex": 1.545,
    "color": "#ffb17b",
    "positionLy": [
      196.976,
      -21.295,
      -39.787
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-80776",
    "name": "Rosalíadecastro",
    "distanceLy": 202.33,
    "apparentMagnitude": 7.89,
    "spectralClass": "G0",
    "colorIndex": 0.68,
    "color": "#ffd7a3",
    "positionLy": [
      -75.047,
      7.361,
      -187.753
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-92733",
    "name": "Eta Sct",
    "distanceLy": 202.33,
    "apparentMagnitude": 4.83,
    "spectralClass": "K1III",
    "colorIndex": 1.057,
    "color": "#ffb17b",
    "positionLy": [
      49.597,
      -20.609,
      -195.069
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-91441",
    "name": "Del Sct",
    "distanceLy": 202.46,
    "apparentMagnitude": 4.7,
    "spectralClass": "F2IIIp d Del",
    "colorIndex": 0.358,
    "color": "#fff2d2",
    "positionLy": [
      36.67,
      -31.854,
      -196.541
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-71879",
    "name": "Izar",
    "distanceLy": 202.58,
    "apparentMagnitude": 2.35,
    "spectralClass": "A0",
    "colorIndex": 0.966,
    "color": "#ffd7a3",
    "positionLy": [
      -135.625,
      92.203,
      -118.926
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-45728",
    "name": "Alp Lyn",
    "distanceLy": 203.09,
    "apparentMagnitude": 3.14,
    "spectralClass": "M0IIIvar",
    "colorIndex": 1.55,
    "color": "#ffb17b",
    "positionLy": [
      -128.872,
      114.716,
      107.129
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-114727",
    "name": "Omi Cep",
    "distanceLy": 203.09,
    "apparentMagnitude": 4.75,
    "spectralClass": "K0III",
    "colorIndex": 0.836,
    "color": "#ffd7a3",
    "positionLy": [
      74.48,
      188.445,
      -13.594
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-84622",
    "name": "Nu Ser",
    "distanceLy": 203.21,
    "apparentMagnitude": 4.32,
    "spectralClass": "A0/A1V",
    "colorIndex": 0.037,
    "color": "#c7ddff",
    "positionLy": [
      -33.699,
      -45.184,
      -195.239
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-18497",
    "name": "Zaurak",
    "distanceLy": 203.34,
    "apparentMagnitude": 2.97,
    "spectralClass": "M1IIIb Ca-1",
    "colorIndex": 1.588,
    "color": "#ffb17b",
    "positionLy": [
      100.326,
      -47.498,
      170.37
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-78861",
    "name": "Phi Her",
    "distanceLy": 203.98,
    "apparentMagnitude": 4.23,
    "spectralClass": "B9MNp...",
    "colorIndex": -0.045,
    "color": "#c7ddff",
    "positionLy": [
      -67.361,
      144.068,
      -127.721
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-107037",
    "name": "Iot PsA",
    "distanceLy": 204.23,
    "apparentMagnitude": 4.35,
    "spectralClass": "B9.5V",
    "colorIndex": -0.053,
    "color": "#c7ddff",
    "positionLy": [
      142.352,
      -111.309,
      -95.164
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-82051",
    "name": "Gliese 638.1",
    "distanceLy": 204.36,
    "apparentMagnitude": 7.38,
    "spectralClass": "K0V",
    "colorIndex": 0.901,
    "color": "#ffd7a3",
    "positionLy": [
      -41.921,
      -151.195,
      -130.94
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-111676",
    "name": "Homam",
    "distanceLy": 204.36,
    "apparentMagnitude": 3.41,
    "spectralClass": "B8.5V",
    "colorIndex": -0.086,
    "color": "#c7ddff",
    "positionLy": [
      189.047,
      38.403,
      -67.445
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-91589",
    "name": "Lam CrA",
    "distanceLy": 205.26,
    "apparentMagnitude": 5.11,
    "spectralClass": "A0/A1V",
    "colorIndex": 0.075,
    "color": "#c7ddff",
    "positionLy": [
      30.576,
      -127.281,
      -158.1
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-56660",
    "name": "Gliese GJ 3679",
    "distanceLy": 205.78,
    "apparentMagnitude": 6.4,
    "spectralClass": "G6/G8V",
    "colorIndex": 0.821,
    "color": "#ffd7a3",
    "positionLy": [
      -186.137,
      -86.057,
      17.098
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-110441",
    "name": "Rho-1 Cep",
    "distanceLy": 206.04,
    "apparentMagnitude": 5.83,
    "spectralClass": "A2m",
    "colorIndex": 0.171,
    "color": "#c7ddff",
    "positionLy": [
      36.795,
      202.103,
      -15.864
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-4075",
    "name": "Lam-1 Tuc",
    "distanceLy": 206.43,
    "apparentMagnitude": 6.67,
    "spectralClass": "F7IV/V",
    "colorIndex": 0.518,
    "color": "#fff2d2",
    "positionLy": [
      70.398,
      -193.361,
      16.385
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-89856",
    "name": "Zet Sct",
    "distanceLy": 206.69,
    "apparentMagnitude": 4.66,
    "spectralClass": "K0III",
    "colorIndex": 0.932,
    "color": "#ffd7a3",
    "positionLy": [
      21.041,
      -32.1,
      -203.095
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-27414",
    "name": "Tau Aur",
    "distanceLy": 206.82,
    "apparentMagnitude": 4.51,
    "spectralClass": "G8III",
    "colorIndex": 0.949,
    "color": "#ffd7a3",
    "positionLy": [
      7.57,
      130.663,
      160.138
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-43286",
    "name": "Gam Pyx",
    "distanceLy": 207.35,
    "apparentMagnitude": 4.02,
    "spectralClass": "K3III",
    "colorIndex": 1.272,
    "color": "#ffb17b",
    "positionLy": [
      -124.33,
      -96.415,
      135.052
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-102287",
    "name": "Albali",
    "distanceLy": 207.74,
    "apparentMagnitude": 3.78,
    "spectralClass": "A1V",
    "colorIndex": 0,
    "color": "#c7ddff",
    "positionLy": [
      136.887,
      -34.272,
      -152.461
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-7280",
    "name": "Chi Cas",
    "distanceLy": 208.14,
    "apparentMagnitude": 4.68,
    "spectralClass": "K0III",
    "colorIndex": 0.991,
    "color": "#ffd7a3",
    "positionLy": [
      97.658,
      178.844,
      42.428
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-13233",
    "name": "Gliese 115",
    "distanceLy": 209.07,
    "apparentMagnitude": 8.16,
    "spectralClass": "F8V",
    "colorIndex": 0.568,
    "color": "#fff2d2",
    "positionLy": [
      110.426,
      -145.449,
      101.8
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-16044",
    "name": "Xi Tau",
    "distanceLy": 209.07,
    "apparentMagnitude": 3.73,
    "spectralClass": "B9Vn",
    "colorIndex": -0.082,
    "color": "#c7ddff",
    "positionLy": [
      127.454,
      35.344,
      161.921
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-20455",
    "name": "Xi Eri",
    "distanceLy": 209.07,
    "apparentMagnitude": 5.17,
    "spectralClass": "A2V",
    "colorIndex": 0.072,
    "color": "#c7ddff",
    "positionLy": [
      85.122,
      -13.658,
      190.472
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-43461",
    "name": "Sig-1 Cnc",
    "distanceLy": 210.29,
    "apparentMagnitude": 5.67,
    "spectralClass": "A8Vms",
    "colorIndex": 0.224,
    "color": "#c7ddff",
    "positionLy": [
      -121.316,
      112.907,
      129.441
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-59984",
    "name": "Gliese 460",
    "distanceLy": 210.29,
    "apparentMagnitude": 6.16,
    "spectralClass": "F0IV",
    "colorIndex": 0.306,
    "color": "#fff2d2",
    "positionLy": [
      -188.262,
      92.19,
      -16.716
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-103273",
    "name": "Gliese GJ 4172",
    "distanceLy": 210.42,
    "apparentMagnitude": 7.35,
    "spectralClass": "K0V",
    "colorIndex": 0.843,
    "color": "#ffd7a3",
    "positionLy": [
      123.63,
      -116.497,
      -124.186
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-51934",
    "name": "Phi-3 Hya",
    "distanceLy": 210.56,
    "apparentMagnitude": 4.91,
    "spectralClass": "G8III",
    "colorIndex": 0.922,
    "color": "#ffd7a3",
    "positionLy": [
      -188.91,
      -61.128,
      70.084
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-107742",
    "name": "Aldhanab",
    "distanceLy": 211.1,
    "apparentMagnitude": 3,
    "spectralClass": "B8III",
    "colorIndex": -0.084,
    "color": "#c7ddff",
    "positionLy": [
      143.031,
      -128.117,
      -87.711
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-3773",
    "name": "Lam Hyi",
    "distanceLy": 211.79,
    "apparentMagnitude": 5.09,
    "spectralClass": "K5III",
    "colorIndex": 1.345,
    "color": "#ffb17b",
    "positionLy": [
      53.855,
      -204.499,
      11.592
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-44872",
    "name": "Eps Pyx",
    "distanceLy": 211.93,
    "apparentMagnitude": 5.59,
    "spectralClass": "A4IV",
    "colorIndex": 0.179,
    "color": "#c7ddff",
    "positionLy": [
      -134.782,
      -107.132,
      123.57
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-23630",
    "name": "Eps Lep",
    "distanceLy": 213.31,
    "apparentMagnitude": 3.19,
    "spectralClass": "K4III",
    "colorIndex": 1.46,
    "color": "#ffb17b",
    "positionLy": [
      46.5,
      -81.188,
      191.7
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-21340",
    "name": "Theemin",
    "distanceLy": 213.87,
    "apparentMagnitude": 3.81,
    "spectralClass": "G8III",
    "colorIndex": 0.957,
    "color": "#ffd7a3",
    "positionLy": [
      66.334,
      -108.749,
      171.799
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-111359",
    "name": "Situla",
    "distanceLy": 213.87,
    "apparentMagnitude": 5.04,
    "spectralClass": "K2III",
    "colorIndex": 1.14,
    "color": "#ffb17b",
    "positionLy": [
      199.704,
      -15.768,
      -74.908
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-17637",
    "name": "Gam Hyi",
    "distanceLy": 214.01,
    "apparentMagnitude": 3.26,
    "spectralClass": "M2III",
    "colorIndex": 1.59,
    "color": "#ffb17b",
    "positionLy": [
      31.822,
      -205.967,
      48.648
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-99574",
    "name": "Chechia",
    "distanceLy": 214.01,
    "apparentMagnitude": 6.44,
    "spectralClass": "G5",
    "colorIndex": 0.867,
    "color": "#ffd7a3",
    "positionLy": [
      119.37,
      17.092,
      -176.806
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-111804",
    "name": "Matar",
    "distanceLy": 214.29,
    "apparentMagnitude": 2.93,
    "spectralClass": "G2II-III..",
    "colorIndex": 0.852,
    "color": "#ffd7a3",
    "positionLy": [
      174.817,
      107.863,
      -61.047
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-6397",
    "name": "Adhil",
    "distanceLy": 214.44,
    "apparentMagnitude": 4.87,
    "spectralClass": "K0III-IV",
    "colorIndex": 1.077,
    "color": "#ffb17b",
    "positionLy": [
      140.631,
      153.021,
      52.818
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-111292",
    "name": "Sig-2 Gru",
    "distanceLy": 214.72,
    "apparentMagnitude": 5.85,
    "spectralClass": "A1V",
    "colorIndex": 0.06,
    "color": "#c7ddff",
    "positionLy": [
      152.47,
      -139.707,
      -57.78
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-7940",
    "name": "Pi Scl",
    "distanceLy": 214.86,
    "apparentMagnitude": 5.25,
    "spectralClass": "K1II/III",
    "colorIndex": 1.044,
    "color": "#ffb17b",
    "positionLy": [
      163.823,
      -114.896,
      78.265
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-60986",
    "name": "Funi",
    "distanceLy": 215.43,
    "apparentMagnitude": 8.75,
    "spectralClass": "G0",
    "colorIndex": 0.645,
    "color": "#ffd7a3",
    "positionLy": [
      -57.043,
      207.581,
      -8.047
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-112588",
    "name": "Gam PsA",
    "distanceLy": 215.43,
    "apparentMagnitude": 4.46,
    "spectralClass": "A0III",
    "colorIndex": -0.037,
    "color": "#c7ddff",
    "positionLy": [
      173.142,
      -116.937,
      -52.501
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-46637",
    "name": "Xi Leo",
    "distanceLy": 215.57,
    "apparentMagnitude": 4.99,
    "spectralClass": "K0IIIvar",
    "colorIndex": 1.046,
    "color": "#ffb17b",
    "positionLy": [
      -168.794,
      42.239,
      127.258
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-76760",
    "name": "Rho Oct",
    "distanceLy": 215.71,
    "apparentMagnitude": 5.57,
    "spectralClass": "A2V",
    "colorIndex": 0.118,
    "color": "#c7ddff",
    "positionLy": [
      -11.688,
      -214.706,
      -17.212
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-100143",
    "name": "Kap-1 Sgr",
    "distanceLy": 215.71,
    "apparentMagnitude": 5.6,
    "spectralClass": "A0V",
    "colorIndex": 0.002,
    "color": "#c7ddff",
    "positionLy": [
      93.278,
      -144.478,
      -130.219
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-100797",
    "name": "Omi Cap",
    "distanceLy": 216.43,
    "apparentMagnitude": 5.94,
    "spectralClass": "A1V",
    "colorIndex": 0.062,
    "color": "#c7ddff",
    "positionLy": [
      124.811,
      -68.971,
      -162.806
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-110554",
    "name": "Gliese GJ 1269A",
    "distanceLy": 216.57,
    "apparentMagnitude": 7.1,
    "spectralClass": "K0V",
    "colorIndex": 0.894,
    "color": "#ffd7a3",
    "positionLy": [
      194.861,
      45.947,
      -82.591
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-122",
    "name": "The Oct",
    "distanceLy": 217.15,
    "apparentMagnitude": 4.78,
    "spectralClass": "K2III",
    "colorIndex": 1.254,
    "color": "#ffb17b",
    "positionLy": [
      48.604,
      -211.639,
      0.338
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-79257",
    "name": "Zet Nor",
    "distanceLy": 217.73,
    "apparentMagnitude": 5.78,
    "spectralClass": "F2III",
    "colorIndex": 0.365,
    "color": "#fff2d2",
    "positionLy": [
      -55.267,
      -179.522,
      -110.1
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-105499",
    "name": "Gam Ind",
    "distanceLy": 218.02,
    "apparentMagnitude": 6.1,
    "spectralClass": "F1III",
    "colorIndex": 0.366,
    "color": "#fff2d2",
    "positionLy": [
      98.78,
      -177.846,
      -78.392
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-91507",
    "name": "Zet Pav",
    "distanceLy": 218.46,
    "apparentMagnitude": 4.01,
    "spectralClass": "K2III",
    "colorIndex": 1.134,
    "color": "#ffb17b",
    "positionLy": [
      12.988,
      -207.08,
      -68.354
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-3271",
    "name": "Xi Phe",
    "distanceLy": 218.6,
    "apparentMagnitude": 5.72,
    "spectralClass": "Ap",
    "colorIndex": 0.131,
    "color": "#c7ddff",
    "positionLy": [
      118.653,
      -182.293,
      21.87
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-21987",
    "name": "Kap Dor",
    "distanceLy": 218.6,
    "apparentMagnitude": 5.28,
    "spectralClass": "A8/A9III/IV",
    "colorIndex": 0.206,
    "color": "#c7ddff",
    "positionLy": [
      35.712,
      -188.804,
      104.236
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-76317",
    "name": "Ome Lup",
    "distanceLy": 218.6,
    "apparentMagnitude": 4.34,
    "spectralClass": "K4.5III",
    "colorIndex": 1.412,
    "color": "#ffb17b",
    "positionLy": [
      -93.461,
      -147.875,
      -131.092
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-8909",
    "name": "Eta-2 Hyi",
    "distanceLy": 218.75,
    "apparentMagnitude": 4.68,
    "spectralClass": "G5III",
    "colorIndex": 0.931,
    "color": "#ffd7a3",
    "positionLy": [
      72.948,
      -202.313,
      39.994
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-22143",
    "name": "Gliese GJ 3312",
    "distanceLy": 218.75,
    "apparentMagnitude": 6.53,
    "spectralClass": "G0",
    "colorIndex": 0.704,
    "color": "#ffd7a3",
    "positionLy": [
      50.998,
      147.359,
      153.416
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-108133",
    "name": "Kap-1 Ind",
    "distanceLy": 218.9,
    "apparentMagnitude": 6.13,
    "spectralClass": "F3V",
    "colorIndex": 0.469,
    "color": "#fff2d2",
    "positionLy": [
      97.231,
      -187.656,
      -56.988
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-78172",
    "name": "Gliese 604.1",
    "distanceLy": 219.49,
    "apparentMagnitude": 7.52,
    "spectralClass": "G5IV",
    "colorIndex": 0.78,
    "color": "#ffd7a3",
    "positionLy": [
      -76.761,
      -156.421,
      -133.469
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-78400",
    "name": "Eta Nor",
    "distanceLy": 219.49,
    "apparentMagnitude": 4.65,
    "spectralClass": "G8III",
    "colorIndex": 0.902,
    "color": "#ffd7a3",
    "positionLy": [
      -69.917,
      -166.224,
      -125.121
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-97792",
    "name": "Phi Aql",
    "distanceLy": 219.49,
    "apparentMagnitude": 5.28,
    "spectralClass": "A1IV",
    "colorIndex": 0.014,
    "color": "#c7ddff",
    "positionLy": [
      104.495,
      43.472,
      -188.055
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-76469",
    "name": "Psi-1 Lup",
    "distanceLy": 219.63,
    "apparentMagnitude": 4.66,
    "spectralClass": "G8/K0III",
    "colorIndex": 0.964,
    "color": "#ffd7a3",
    "positionLy": [
      -104.081,
      -124.123,
      -148.321
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-76630",
    "name": "Chi Ser",
    "distanceLy": 219.78,
    "apparentMagnitude": 5.34,
    "spectralClass": "A0p Sr",
    "colorIndex": 0.033,
    "color": "#c7ddff",
    "positionLy": [
      -121.531,
      48.87,
      -176.482
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-23495",
    "name": "Gliese GJ 3324",
    "distanceLy": 219.93,
    "apparentMagnitude": 7.44,
    "spectralClass": "G8V",
    "colorIndex": 0.81,
    "color": "#ffd7a3",
    "positionLy": [
      48.345,
      92.852,
      193.419
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-55269",
    "name": "Sig Leo",
    "distanceLy": 220.08,
    "apparentMagnitude": 4.05,
    "spectralClass": "B9.5Vs",
    "colorIndex": -0.058,
    "color": "#c7ddff",
    "positionLy": [
      -215.722,
      23.116,
      36.935
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-101263",
    "name": "Zet Del",
    "distanceLy": 220.08,
    "apparentMagnitude": 4.64,
    "spectralClass": "A3V",
    "colorIndex": 0.12,
    "color": "#c7ddff",
    "positionLy": [
      133.482,
      55.751,
      -165.857
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-63521",
    "name": "Xi-1 Cen",
    "distanceLy": 220.52,
    "apparentMagnitude": 4.83,
    "spectralClass": "A0V",
    "colorIndex": 0.029,
    "color": "#c7ddff",
    "positionLy": [
      -137.671,
      -167.757,
      -39.187
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-92007",
    "name": "The Pav",
    "distanceLy": 220.82,
    "apparentMagnitude": 5.71,
    "spectralClass": "A9V",
    "colorIndex": 0.268,
    "color": "#fff2d2",
    "positionLy": [
      19.598,
      -200.26,
      -90.965
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-65263",
    "name": "Iot-1 Mus",
    "distanceLy": 221.12,
    "apparentMagnitude": 5.04,
    "spectralClass": "K0III",
    "colorIndex": 1.11,
    "color": "#ffb17b",
    "positionLy": [
      -53.719,
      -213.476,
      -20.922
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-77923",
    "name": "Eps CrB",
    "distanceLy": 221.42,
    "apparentMagnitude": 4.14,
    "spectralClass": "K3III",
    "colorIndex": 1.231,
    "color": "#ffb17b",
    "positionLy": [
      -100.546,
      100.103,
      -169.993
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-4283",
    "name": "Lam-2 Tuc",
    "distanceLy": 221.87,
    "apparentMagnitude": 5.45,
    "spectralClass": "G7III",
    "colorIndex": 1.095,
    "color": "#ffb17b",
    "positionLy": [
      75.38,
      -207.861,
      18.447
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-38426",
    "name": "Phi Gem",
    "distanceLy": 222.48,
    "apparentMagnitude": 4.97,
    "spectralClass": "A3V",
    "colorIndex": 0.098,
    "color": "#c7ddff",
    "positionLy": [
      -94.401,
      100.193,
      174.778
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-57401",
    "name": "Gliese GJ 3687",
    "distanceLy": 222.48,
    "apparentMagnitude": 7.1,
    "spectralClass": "G5/G6V",
    "colorIndex": 0.756,
    "color": "#ffd7a3",
    "positionLy": [
      -181.495,
      -128.325,
      9.46
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-45390",
    "name": "Gliese GJ 3544",
    "distanceLy": 222.63,
    "apparentMagnitude": 6.73,
    "spectralClass": "F5",
    "colorIndex": 0.443,
    "color": "#fff2d2",
    "positionLy": [
      -168.433,
      2.833,
      145.559
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-111244",
    "name": "Sig-1 Gru",
    "distanceLy": 222.78,
    "apparentMagnitude": 6.28,
    "spectralClass": "A3Vn",
    "colorIndex": 0.119,
    "color": "#c7ddff",
    "positionLy": [
      158.088,
      -144.931,
      -60.298
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-101950",
    "name": "Del Del",
    "distanceLy": 223.24,
    "apparentMagnitude": 4.43,
    "spectralClass": "A7IIIp d Del",
    "colorIndex": 0.302,
    "color": "#fff2d2",
    "positionLy": [
      141.035,
      58.06,
      -163.018
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-76235",
    "name": "Ups Lib",
    "distanceLy": 223.7,
    "apparentMagnitude": 3.6,
    "spectralClass": "K3III",
    "colorIndex": 1.361,
    "color": "#ffb17b",
    "positionLy": [
      -115.237,
      -105.486,
      -160.109
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-22456",
    "name": "Pi-2 Ori",
    "distanceLy": 224.47,
    "apparentMagnitude": 4.35,
    "spectralClass": "A1Vn",
    "colorIndex": 0.01,
    "color": "#c7ddff",
    "positionLy": [
      66.122,
      34.729,
      211.682
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-68302",
    "name": "Tau Vir",
    "distanceLy": 224.94,
    "apparentMagnitude": 4.23,
    "spectralClass": "A3V",
    "colorIndex": 0.121,
    "color": "#c7ddff",
    "positionLy": [
      -193.916,
      6.063,
      -113.823
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-73327",
    "name": "Nekkar",
    "distanceLy": 225.25,
    "apparentMagnitude": 3.49,
    "spectralClass": "G8III",
    "colorIndex": 0.956,
    "color": "#ffd7a3",
    "positionLy": [
      -120.275,
      145.958,
      -122.335
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-7449",
    "name": "Tau Scl",
    "distanceLy": 226.18,
    "apparentMagnitude": 5.69,
    "spectralClass": "F2V",
    "colorIndex": 0.335,
    "color": "#fff2d2",
    "positionLy": [
      179.063,
      -112.775,
      79.857
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-92564",
    "name": "Nunki",
    "distanceLy": 227.76,
    "apparentMagnitude": 2.05,
    "spectralClass": "B2.5V",
    "colorIndex": -0.134,
    "color": "#9fc7ff",
    "positionLy": [
      48.763,
      -100.903,
      -198.283
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-74265",
    "name": "Iot-2 Lib",
    "distanceLy": 227.92,
    "apparentMagnitude": 6.07,
    "spectralClass": "A2V",
    "colorIndex": 0.124,
    "color": "#c7ddff",
    "positionLy": [
      -142.709,
      -76.635,
      -160.342
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-76044",
    "name": "Del Ser",
    "distanceLy": 228.08,
    "apparentMagnitude": 3.8,
    "spectralClass": "F0IV",
    "colorIndex": 0.268,
    "color": "#fff2d2",
    "positionLy": [
      -132.747,
      41.716,
      -180.717
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-3172",
    "name": "Schedar",
    "distanceLy": 228.24,
    "apparentMagnitude": 2.24,
    "spectralClass": "K0II-IIIvar",
    "colorIndex": 1.17,
    "color": "#ffb17b",
    "positionLy": [
      123.89,
      190.409,
      22.128
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-55707",
    "name": "Kap Crt",
    "distanceLy": 228.56,
    "apparentMagnitude": 5.93,
    "spectralClass": "F4III-IV",
    "colorIndex": 0.49,
    "color": "#fff2d2",
    "positionLy": [
      -220.978,
      -48.912,
      31.884
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-42765",
    "name": "Gliese 321.1",
    "distanceLy": 228.88,
    "apparentMagnitude": 4.05,
    "spectralClass": "G5III",
    "colorIndex": 0.874,
    "color": "#ffd7a3",
    "positionLy": [
      -110.666,
      -155.069,
      126.859
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-94786",
    "name": "Pi Dra",
    "distanceLy": 228.88,
    "apparentMagnitude": 4.6,
    "spectralClass": "A2IIIs",
    "colorIndex": 0.033,
    "color": "#c7ddff",
    "positionLy": [
      32.454,
      208.626,
      -88.363
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-103406",
    "name": "Gam Mic",
    "distanceLy": 229.04,
    "apparentMagnitude": 4.67,
    "spectralClass": "G8III",
    "colorIndex": 0.89,
    "color": "#ffd7a3",
    "positionLy": [
      137.73,
      -122.247,
      -136.187
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-4453",
    "name": "Eta And",
    "distanceLy": 229.69,
    "apparentMagnitude": 4.4,
    "spectralClass": "G8III-IV",
    "colorIndex": 0.94,
    "color": "#ffd7a3",
    "positionLy": [
      204.236,
      91.285,
      52.065
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-60075",
    "name": "Ginan",
    "distanceLy": 229.85,
    "apparentMagnitude": 3.59,
    "spectralClass": "K3/K4III",
    "colorIndex": 1.389,
    "color": "#ffb17b",
    "positionLy": [
      -113.035,
      -199.855,
      -10.566
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-27604",
    "name": "Nu Aur",
    "distanceLy": 230.34,
    "apparentMagnitude": 3.97,
    "spectralClass": "K0III",
    "colorIndex": 1.132,
    "color": "#ffb17b",
    "positionLy": [
      6.631,
      145.419,
      178.506
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-50655",
    "name": "Tania Australis",
    "distanceLy": 230.34,
    "apparentMagnitude": 3.06,
    "spectralClass": "M0III SB",
    "colorIndex": 1.603,
    "color": "#ffb17b",
    "positionLy": [
      -157.082,
      152.624,
      71.314
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-111849",
    "name": "Rho Gru",
    "distanceLy": 230.34,
    "apparentMagnitude": 4.84,
    "spectralClass": "K0III",
    "colorIndex": 1.027,
    "color": "#ffb17b",
    "positionLy": [
      163.206,
      -152.368,
      -56.595
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-116377",
    "name": "Gliese GJ 2157",
    "distanceLy": 231.15,
    "apparentMagnitude": 7.53,
    "spectralClass": "K0V",
    "colorIndex": 0.864,
    "color": "#ffd7a3",
    "positionLy": [
      118.681,
      198.074,
      -10.601
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-63963",
    "name": "Psi Hya",
    "distanceLy": 231.48,
    "apparentMagnitude": 4.94,
    "spectralClass": "K0III",
    "colorIndex": 1.048,
    "color": "#ffb17b",
    "positionLy": [
      -203.301,
      -90.885,
      -63.18
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-92117",
    "name": "Nu-2 Lyr",
    "distanceLy": 231.48,
    "apparentMagnitude": 5.22,
    "spectralClass": "A3V",
    "colorIndex": 0.1,
    "color": "#c7ddff",
    "positionLy": [
      42.133,
      124.548,
      -190.515
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-30270",
    "name": "Tejat",
    "distanceLy": 231.64,
    "apparentMagnitude": 2.87,
    "spectralClass": "M3IIIvar",
    "colorIndex": 1.621,
    "color": "#ffb17b",
    "positionLy": [
      -21.403,
      88.698,
      212.919
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-24187",
    "name": "Iot Lep",
    "distanceLy": 231.81,
    "apparentMagnitude": 4.45,
    "spectralClass": "B8V",
    "colorIndex": -0.099,
    "color": "#c7ddff",
    "positionLy": [
      46.877,
      -47.678,
      221.958
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-42215",
    "name": "Eta Pyx",
    "distanceLy": 231.81,
    "apparentMagnitude": 5.24,
    "spectralClass": "A0V",
    "colorIndex": -0.03,
    "color": "#c7ddff",
    "positionLy": [
      -132.146,
      -102.545,
      160.493
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-4842",
    "name": "Sig Scl",
    "distanceLy": 232.3,
    "apparentMagnitude": 5.5,
    "spectralClass": "A1/A2IV",
    "colorIndex": 0.083,
    "color": "#c7ddff",
    "positionLy": [
      190.66,
      -121.559,
      53.27
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-3448",
    "name": "Phi-1 Cet",
    "distanceLy": 233.64,
    "apparentMagnitude": 4.77,
    "spectralClass": "K0IIIvar",
    "colorIndex": 0.998,
    "color": "#ffd7a3",
    "positionLy": [
      225.386,
      -43.016,
      44.005
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-6853",
    "name": "Gam Phe",
    "distanceLy": 233.64,
    "apparentMagnitude": 3.41,
    "spectralClass": "K5II-III",
    "colorIndex": 1.542,
    "color": "#ffb17b",
    "positionLy": [
      157.504,
      -160.286,
      63.928
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-30204",
    "name": "Del Col",
    "distanceLy": 233.97,
    "apparentMagnitude": 3.85,
    "spectralClass": "G7II",
    "colorIndex": 0.858,
    "color": "#ffd7a3",
    "positionLy": [
      -18.81,
      -128.921,
      194.34
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-95566",
    "name": "Gliese GJ 9657A",
    "distanceLy": 233.97,
    "apparentMagnitude": 5.46,
    "spectralClass": "K1/K2III",
    "colorIndex": 1.12,
    "color": "#ffb17b",
    "positionLy": [
      79.678,
      -106.168,
      -192.67
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-101151",
    "name": "Nu Mic",
    "distanceLy": 233.97,
    "apparentMagnitude": 5.12,
    "spectralClass": "K0III",
    "colorIndex": 0.999,
    "color": "#ffd7a3",
    "positionLy": [
      103.81,
      -164.04,
      -130.603
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-50924",
    "name": "Mu Hya",
    "distanceLy": 234.14,
    "apparentMagnitude": 3.83,
    "spectralClass": "K4III",
    "colorIndex": 1.456,
    "color": "#ffb17b",
    "positionLy": [
      -205.552,
      -67.816,
      89.28
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-107514",
    "name": "Gliese GJ 4226",
    "distanceLy": 234.81,
    "apparentMagnitude": 7.49,
    "spectralClass": "G0",
    "colorIndex": 0.801,
    "color": "#ffd7a3",
    "positionLy": [
      195.599,
      -40.928,
      -123.302
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-8628",
    "name": "Baten Kaitos",
    "distanceLy": 234.98,
    "apparentMagnitude": 3.74,
    "spectralClass": "K2III",
    "colorIndex": 1.136,
    "color": "#ffb17b",
    "positionLy": [
      204.366,
      -42.157,
      108.047
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-22648",
    "name": "Ome Eri",
    "distanceLy": 234.98,
    "apparentMagnitude": 4.36,
    "spectralClass": "A9IV",
    "colorIndex": 0.257,
    "color": "#fff2d2",
    "positionLy": [
      67.518,
      -22.329,
      223.963
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-58583",
    "name": "The-1 Cru",
    "distanceLy": 234.98,
    "apparentMagnitude": 4.32,
    "spectralClass": "Am",
    "colorIndex": 0.28,
    "color": "#fff2d2",
    "positionLy": [
      -105.526,
      -209.951,
      -1.393
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-101156",
    "name": "Eta Del",
    "distanceLy": 236.17,
    "apparentMagnitude": 5.39,
    "spectralClass": "A3IVs",
    "colorIndex": 0.093,
    "color": "#c7ddff",
    "positionLy": [
      143.199,
      53.237,
      -180.105
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-98313",
    "name": "Mu-2 Pav",
    "distanceLy": 236.35,
    "apparentMagnitude": 5.32,
    "spectralClass": "K2IVCN...",
    "colorIndex": 1.218,
    "color": "#ffb17b",
    "positionLy": [
      46.934,
      -217.467,
      -79.779
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-72263",
    "name": "Mu Lib",
    "distanceLy": 237.9,
    "apparentMagnitude": 5.32,
    "spectralClass": "Ap",
    "colorIndex": 0.066,
    "color": "#c7ddff",
    "positionLy": [
      -170.538,
      -58.153,
      -155.338
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-27880",
    "name": "Xi Aur",
    "distanceLy": 238.24,
    "apparentMagnitude": 4.96,
    "spectralClass": "A2V",
    "colorIndex": 0.052,
    "color": "#c7ddff",
    "positionLy": [
      3.018,
      196.829,
      134.199
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-98167",
    "name": "Mu-1 Pav",
    "distanceLy": 238.94,
    "apparentMagnitude": 5.75,
    "spectralClass": "K0IV",
    "colorIndex": 1.033,
    "color": "#ffb17b",
    "positionLy": [
      46.914,
      -219.866,
      -80.944
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-51465",
    "name": "Phi-1 Hya",
    "distanceLy": 239.29,
    "apparentMagnitude": 7.62,
    "spectralClass": "G2V",
    "colorIndex": 0.618,
    "color": "#ffd7a3",
    "positionLy": [
      -212.477,
      -69.798,
      85.107
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-91754",
    "name": "Phi Sgr",
    "distanceLy": 239.29,
    "apparentMagnitude": 3.17,
    "spectralClass": "B8.5III",
    "colorIndex": -0.107,
    "color": "#9fc7ff",
    "positionLy": [
      42.198,
      -108.603,
      -209.012
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  },
  {
    "id": "hyg-42306",
    "name": "The Vol",
    "distanceLy": 240.17,
    "apparentMagnitude": 5.19,
    "spectralClass": "A0V",
    "colorIndex": 0.013,
    "color": "#c7ddff",
    "positionLy": [
      -51.574,
      -226.239,
      61.964
    ],
    "fact": "Its catalog distance and 3D position come from the HYG star database."
  }
]
