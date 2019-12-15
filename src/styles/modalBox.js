import styled from 'styled-components';

export const ModalBox = styled.div`
  position:fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:10001;

  &::before {
    content: "";
    position:absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0, .4)
  }
`;