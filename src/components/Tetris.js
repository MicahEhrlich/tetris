import React, { useContext, useRef } from 'react';
import Level from '../components/Level';
import Container from '@material-ui/core/Container';

import {
  GameStatus,
  GameOverText,
  GameButton,
} from '../components/styled/GameStatus';
import TetrisContext from '../context/TetrisContext';
import {
  DisplayedCell,
  DisplayedShape,
} from '../components/styled/DisplayedShape';

const Tetris = () => {
  const tetrisContext = useContext(TetrisContext);

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

  const childRef = useRef();

  const level = Array.from(Array(20), () => new Array(10).fill(['black']));

  const restartTetrisGame = () => {
    startGame();
    resetGame();
  };

  return (
    <div>
      <Container style={{ display: 'flex', paddingTop: '10px' }}>
        <Level ref={childRef} level={level} />
        {gameOver ? (
          <GameOverText>
            <h1>GAME OVER</h1>
            <GameButton onClick={restartTetrisGame}>
              <h3>RESTART</h3>
            </GameButton>
          </GameOverText>
        ) : null}
        {pause & !gameOver ? (
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
    </div>
  );
};

export default Tetris;
