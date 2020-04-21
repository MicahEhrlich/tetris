import {
  SHAPE_I,
  SHAPE_O,
  SHAPE_T,
  SHAPE_L,
  SHAPE_J,
  SHAPE_Z,
  SHAPE_S,
} from '../components/shapes/Shapes';

import {
  VIAL_OCEAN,
  KALE_SALAD,
  DISCO_CLUB,
  SHADY_LANE,
  FRESCO_CRUSH,
  CUCUMBER_WATER,
  PAR_FOUR,
  OOEY_GOOEY,
  BLOODY_MIMOSA,
  DUSTY_CACTUS,
} from '../components/shapes/Colors';

const COLORS = [
  VIAL_OCEAN,
  KALE_SALAD,
  DISCO_CLUB,
  SHADY_LANE,
  FRESCO_CRUSH,
  CUCUMBER_WATER,
  PAR_FOUR,
  OOEY_GOOEY,
  BLOODY_MIMOSA,
  DUSTY_CACTUS,
];

const SHAPES = [SHAPE_I, SHAPE_O, SHAPE_T, SHAPE_L, SHAPE_J, SHAPE_Z, SHAPE_S];

export const getRandomShape = () => {
  let randomShape = Math.floor(Math.random() * 4) + Math.floor(Math.random() * 3);
  let shape = SHAPES[randomShape];
  return shape;
};

export const getRandomColor = () => {
  let color = 2 * Math.floor(Math.random() * 5);
  return COLORS[color];
};

export const rotateShape = (pos, shape, rotate) => {
  let rotatedShape = pos;
  if (shape === SHAPE_I) {
    switch (rotate) {
      case 0:
      case 2:
        rotatedShape = [
          [pos[0][0], pos[0][1]],
          [pos[1][0] + 1, pos[1][1] - 1],
          [pos[2][0] + 2, pos[2][1] - 2],
          [pos[3][0] + 3, pos[3][1] - 3],
        ];
        break;
      case 1:
      case 3:
        rotatedShape = [
          [pos[0][0], pos[0][1]],
          [pos[1][0] - 1, pos[1][1] + 1],
          [pos[2][0] - 2, pos[2][1] + 2],
          [pos[3][0] - 3, pos[3][1] + 3],
        ];
        break;
      default:
        break;
    }
  } else if (shape === SHAPE_T) {
    switch (rotate) {
      case 0:
        rotatedShape = [
          [pos[0][0] + 1, pos[0][1]],
          [pos[1][0], pos[1][1]],
          [pos[2][0] + 2, pos[2][1] - 1],
          [pos[3][0], pos[3][1]],
        ];
        break;
      case 1:
        rotatedShape = [
          [pos[0][0], pos[0][1]],
          [pos[1][0], pos[1][1]],
          [pos[2][0] - 1, pos[2][1] + 1],
          [pos[3][0], pos[3][1]],
        ];
        break;
      case 2:
        rotatedShape = [
          [pos[0][0], pos[0][1]],
          [pos[1][0], pos[1][1] - 1],
          [pos[2][0], pos[2][1] - 1],
          [pos[3][0] + 1, pos[3][1] - 1],
        ];
        break;
      case 3:
        rotatedShape = [
          [pos[1][0], pos[1][1]],
          [pos[0][0] - 1, pos[0][1] + 1],
          [pos[3][0] - 2, pos[3][1] + 2],
          [pos[2][0], pos[2][1]],
        ];
        break;
      default:
        break;
    }
  } else if (shape === SHAPE_L) {
    switch (rotate) {
      case 0:
        rotatedShape = [
          [pos[0][0], pos[0][1]],
          [pos[1][0], pos[1][1]],
          [pos[2][0] + 1, pos[2][1] - 1],
          [pos[3][0] + 1, pos[3][1] + 1],
        ];
        break;
      case 1:
        rotatedShape = [
          [pos[0][0], pos[0][1] + 2],
          [pos[1][0] + 1, pos[1][1] - 1],
          [pos[2][0], pos[2][1]],
          [pos[3][0] - 1, pos[3][1] + 1],
        ];
        break;
      case 2:
        rotatedShape = [
          [pos[0][0], pos[0][1] - 2],
          [pos[1][0], pos[1][1]],
          [pos[2][0] + 1, pos[2][1] - 1],
          [pos[3][0] + 1, pos[3][1] - 1],
        ];
        break;
      case 3:
        rotatedShape = [
          [pos[0][0], pos[0][1]],
          [pos[1][0] - 1, pos[1][1] + 1],
          [pos[2][0] - 2, pos[2][1] + 2],
          [pos[3][0] - 1, pos[3][1] - 1],
        ];
        break;
      default:
        break;
    }
  } else if (shape === SHAPE_J) {
    switch (rotate) {
      case 0:
        rotatedShape = [
          [pos[0][0], pos[0][1] + 1],
          [pos[1][0] + 1, pos[1][1]],
          [pos[2][0] + 2, pos[2][1] - 2],
          [pos[3][0] + 1, pos[3][1] - 1],
        ];
        break;
      case 1:
        rotatedShape = [
          [pos[0][0], pos[0][1] - 1],
          [pos[1][0], pos[1][1] - 1],
          [pos[2][0] - 1, pos[2][1] + 1],
          [pos[3][0] - 1, pos[3][1] + 1],
        ];
        break;
      case 2:
        rotatedShape = [
          [pos[0][0], pos[0][1]],
          [pos[1][0] - 1, pos[1][1] + 1],
          [pos[2][0], pos[2][1] - 1],
          [pos[3][0] + 1, pos[3][1] - 2],
        ];
        break;
      case 3:
        rotatedShape = [
          [pos[0][0], pos[0][1]],
          [pos[1][0], pos[1][1]],
          [pos[2][0] - 1, pos[2][1] + 2],
          [pos[3][0] - 1, pos[3][1] + 2],
        ];
        break;
      default:
        break;
    }
  } else if (shape === SHAPE_Z) {
    switch (rotate) {
      case 0:
      case 2:
        rotatedShape = [
          [pos[0][0], pos[0][1] + 1],
          [pos[1][0] + 1, pos[1][1] - 1],
          [pos[2][0], pos[2][1]],
          [pos[3][0] + 1, pos[3][1] - 2],
        ];
        break;
      case 1:
      case 3:
        rotatedShape = [
          [pos[0][0], pos[0][1] - 1],
          [pos[1][0] - 1, pos[1][1] + 1],
          [pos[2][0], pos[2][1]],
          [pos[3][0] - 1, pos[3][1] + 2],
        ];
        break;
      default:
        break;
    }
  } else if (shape === SHAPE_S) {
    switch (rotate) {
      case 0:
      case 2:
        rotatedShape = [
          [pos[0][0], pos[0][1] - 1],
          [pos[1][0] + 1, pos[1][1] - 2],
          [pos[2][0], pos[2][1] + 1],
          [pos[3][0] + 1, pos[3][1]],
        ];
        break;
      case 1:
      case 3:
        rotatedShape = [
          [pos[0][0], pos[0][1] + 1],
          [pos[1][0] - 1, pos[1][1] + 2],
          [pos[2][0], pos[2][1] - 1],
          [pos[3][0] - 1, pos[3][1]],
        ];
        break;
      default:
        break;
    }
  }
  return rotatedShape;
};
