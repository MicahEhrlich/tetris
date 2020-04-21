import styled from 'styled-components';

export const GameStatus = styled.div`
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  color: silver;
  width: 80px;
  background-image: linear-gradient(
    to right,
    #16222a 0%,
    #3a6073 51%,
    #16222a 100%
  );

  border: grey 2px solid;
  box-shadow: 2px 2px 1px darkblue;
  text-shadow: 1px 1px 4px darkblue;
`;
export const GameOverText = styled.div`
  position: absolute;
  margin: 0 auto;
  margin-left: 14px;
  text-align: center;
  top: 10%; /* Adjust this value to move the positioned div up and down */
  color: silver;
  background-image: linear-gradient(
    to right,
    #16222a 0%,
    #3a6073 51%,
    #16222a 100%
  );
  width: 300px;
  border: grey 2px solid;
  box-shadow: 2px 2px 1px darkblue;
  text-shadow: 1px 1px 4px darkblue;
`;

export const GameButton = styled.button`
  margin-top: 5px;
  margin-bottom: 5px;
  margin: 5px;
  border-radius: 3px;
  color: silver;
  border: grey 3px solid;
  text-shadow: 1px 1px 4px darkblue;
  

  /* Color the border and text with theme.main */
  background-image: linear-gradient(
    to right,
    #16222a 0%,
    #3a6073 51%,
    #16222a 100%
  );
  border: grey 1px solid;
`;
