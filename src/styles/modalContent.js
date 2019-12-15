import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`

export const ModalContent = styled.div`
  position: relative;
  width: 500px;
  background-color: rgba(255,255,255,1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:10011;
  animation: ${animation} .5s ease-in-out;
  @media only screen and (max-width: 480px) {
    margin: 0 15px;
  }
`;