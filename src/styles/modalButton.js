import styled from 'styled-components';

export const ModalButton = styled.button`
  position:absolute;
  width: 40px;
  height: 40px;
  background-color: rgba(0,0,0,.5);
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 1.5rem;
  line-height: 1.5rem;
  zIndex: 10099,
  &:hover{
      opacity: .5;
  }
  `;