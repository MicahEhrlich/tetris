import {
  ADD_SCORE,
  RESET_GAME,
  PAUSE_GAME,
  RESUME_GAME,
  GAME_OVER,
  NEXT_SHAPE,
  NEXT_COLOR,
  DISPLAY_NEXT_SHAPE,
  START_GAME,
  ADD_ROWS,
  SET_SPEED,
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    case ADD_ROWS:
      return {
        ...state,
        rows: action.payload,
      };
    case NEXT_SHAPE:
      return {
        ...state,
        nextShape: action.payload,
      };
    case NEXT_COLOR:
      return {
        ...state,
        nextColor: action.payload,
      };
    case DISPLAY_NEXT_SHAPE:
      return {
        ...state,
        nextShapeDisplayed: action.payload,
      };
    case RESET_GAME:
      return {
        ...state,
        speed: 1000,
        score: 0,
        rows: 0,
        pause: false,
        gameOver: false,
        gameStart: true,
        newGame: false,
      };
    case START_GAME:
      return {
        ...state,
        newGame: true,
      };
    case PAUSE_GAME:
      return {
        ...state,
        pause: true,
      };
    case RESUME_GAME:
      return {
        ...state,
        pause: false,
      };
    case GAME_OVER:
      return {
        ...state,
        pause: false,
        gameOver: true,
        gameStart: false,
      };
    case SET_SPEED:
      return {
        ...state,
        speed: action.payload,
      };
    default:
      return state;
  }
};
