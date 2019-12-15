import styled from 'styled-components';

export const ModalContentData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index:10012;
  & p{
      color:#000;
      padding: 0 2rem;
  }
  & .promo-content--first-line{
    font-size: 1.35rem;
    @media only screen and (max-width: 380px) {
        font-size: 1rem;
    }
    @media only screen and (max-width: 340px) {
        font-size: .8rem;
    }
  }
  & .promo-content--second-line{
      display: flex;
      justify-content: space-around;
      width: 100%;
      margin-bottom: 15px;
      & p {
          margin: 0;
          font-size: 2rem;
          color: #000;
          font-weight: bold;
          @media only screen and (max-width: 480px) {
              font-size: 1.4rem;
          }
           @media only screen and (max-width: 640px) {
              font-size: 1.8rem;
          }
          & span {
              font-size: 1.2rem;
              opacity: .3;
              text-decoration-line: line-through;
              @media only screen and (max-width: 640px) {
                display: none;
              }
          }
      }
  }
`;