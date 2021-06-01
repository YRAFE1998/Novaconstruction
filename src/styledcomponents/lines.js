import styled from 'styled-components';

export const Verticalline = styled.div`
  top: ${props => props.offset + 'px'};
  border-left: 3px solid #cdb068;
  height: 100px;
`;