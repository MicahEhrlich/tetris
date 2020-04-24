import {
  UPDATE_POS,
  SET_ROTATE,
  SET_COLOR,
  UPDATE_STAGE,
  SET_SHAPE,
  HALT_MOVE,
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case UPDATE_POS:
      return {
        ...state,
        pos: action.payload,
      };
    case SET_ROTATE:
      return {
        ...state,
        rotate: action.payload,
      };
    case SET_SHAPE:
      return {
        ...state,
        shape: action.payload,
      };
    case SET_COLOR:
      return {
        ...state,
        color: action.payload,
      };
    case UPDATE_STAGE:
      return {
        ...state,
        stage: action.payload,
      };
    case HALT_MOVE:
      return {
        ...state,
        haltMove: action.payload,
      };
    default:
      return state;
  }
};
