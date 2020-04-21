import styled from 'styled-components';

export const DisplayedCell = styled.div`
  width: 14px;
  height: 14px;
  border: 1px grey solid;
  border-bottom-color: grey;
  border-right-color: grey;
  background: ${(props) => props.backgroud};
  transition: color 3s;
  transition-delay: 1s;
`;

export const DisplayedShape = styled.div`
  display: grid;
  margin-left: 9px;
  grid-template-columns: repeat(4, minmax(0, 15px));
  grid-template-rows: repeat(4, minmax(0, 15px));
`;
