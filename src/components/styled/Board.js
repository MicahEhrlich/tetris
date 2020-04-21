import styled from 'styled-components';

const Board = styled.div`
  display: grid;
  border-top: grey 2px solid;
  border-left: grey 2px solid;
  width: 290px;
  grid-template-columns: repeat(10, minmax(1em, 29px));
`;

export default Board;
