import styled from 'styled-components';

export const Verticalline = styled.div`
  top: ${props => props.offset + 'px'};
  border-left: 3px solid gold;
  height: 100px;
  position: relative;
  left: 50%;
  margin-left: -3px;
  width:50%;
`;