import React, { useContext } from 'react';
import Level from '../components/Level';
import Container from '@material-ui/core/Container';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import {
  GameStatus,
  GameOverText,
  GameButton,
  ArrowButton,
} from '../components/styled/GameStatus';
import TetrisContext from '../context/TetrisContext/TetrisContext';
import ShapeContext from '../context/ShapeContext/ShapeContext';

import {
  DisplayedCell,
  DisplayedShape,
} from '../components/styled/DisplayedShape';

const Tetris = () => {
  const tetrisContext = useContext(TetrisContext);
  const shapeContext = useContext(ShapeContext);

  const {
    startGame,
    score,
    rows,
    nextShapeDisplayed,
    gameOver,
    pauseGame,
    resetGame,
    gameStart,
    pause,
  } = tetrisContext;

  const { moveShape } = shapeContext;

  const level = Array.from(Array(20), () => new Array(10).fill(['black']));

  const handleButtonClick = (num) => {
    let tempKey = new KeyboardEvent('keydown', {
      keyCode: num,
      which: num,
    });
    moveShape(tempKey);
  };

  const restartTetrisGame = () => {
    startGame();
    resetGame();
  };

  return (
    <div>
      <Container style={{ display: 'flex', paddingTop: '10px' }}>
        <Level level={level} />
        {gameOver ? (
          <GameOverText>
            <h1>GAME OVER</h1>
            <GameButton onClick={restartTetrisGame}>
              <h3>RESTART</h3>
            </GameButton>
          </GameOverText>
        ) : null}
        {pause && !gameOver ? (
          <GameOverText>
            <h1>PAUSE</h1>
            <GameButton onClick={pauseGame}>
              <h3>RESUME</h3>
            </GameButton>
          </GameOverText>
        ) : null}
        {!gameStart && !gameOver ? (
          <GameOverText>
            <h1>PRESS START TO BEGIN</h1>
            <GameButton onClick={resetGame}>
              <h3>START</h3>
            </GameButton>
          </GameOverText>
        ) : null}
        <div style={{ display: 'grid' }}>
          <GameStatus>
            <h3>SCORE</h3>
            <h3>{score}</h3>
            <h3>ROWS</h3>
            <h3>{rows}</h3>
          </GameStatus>
          <GameStatus style={{ display: 'grid' }}>
            <h3>NEXT</h3>
            <DisplayedShape role='button' tabIndex='0'>
              {nextShapeDisplayed.length > 0
                ? nextShapeDisplayed.map((row) =>
                    row.map((cell, x) => (
                      <DisplayedCell key={x} backgroud={cell} />
                    ))
                  )
                : null}
            </DisplayedShape>
          </GameStatus>
          <GameStatus>
            <GameButton onClick={pauseGame} disabled={pause}>
              <h3>PAUSE</h3>
            </GameButton>
          </GameStatus>
        </div>
      </Container>
      <Container
        style={{ display: 'flex', paddingTop: '10px', paddingLeft: '100px' }}>
        <div>
          <ArrowButton color='primary' onClick={() => handleButtonClick(38)}>
            <AutorenewIcon />
          </ArrowButton>
          <div>
            <ArrowButton color='primary' onClick={() => handleButtonClick(37)}>
              <ArrowBackIcon />
            </ArrowButton>
            <ArrowButton color='primary' onClick={() => handleButtonClick(40)}>
              <ArrowDownwardIcon />
            </ArrowButton>
            <ArrowButton color='primary' onClick={() => handleButtonClick(39)}>
              <ArrowForwardIcon />
            </ArrowButton>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tetris;
