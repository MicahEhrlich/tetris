import styled from 'styled-components';

const Cell = styled.div`
  width: 25px;
  height: 25px;
  border: 1px solid;
  border-bottom-color: grey;
  border-right-color: grey;
  background: ${(props) => props.backgroud};
  transition: color 3s;
  transition-delay: 1s;
`;
export default Cell;
