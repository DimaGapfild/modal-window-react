import React, { useState } from 'react'
import { ModalBox } from './styles/modalBox'
import { ModalContent } from './styles/modalContent'
import { ModalButton } from './styles/modalButton'
import { ModalContentData } from './styles/modalContentData'
import { Button } from './styles/button'

function App(props) {

  const [appState, setAppState] = useState(true);
  
  const { sendButtonText, productTitle, productPrice, productPriceOld, backgroundImage, productImage, buttonUrl } = props.data

       return (
        <ModalBox>
          <ModalContent backgroundImageUrl={backgroundImage}>
            <ModalButton type='close' title='CLOSE' onClick={() => {
              setAppState(false)
            }}>✕</ModalButton>
            <ModalContentData>
              <div className="promo-content--first-line">
                <p >
                  {productTitle}
                 </p>
                 <p>
                   <img src={productImage} width="80%"/>
                 </p>
              </div>
              <div className="promo-content--second-line">
                <p>
                  <span>&nbsp;{productPriceOld}&nbsp;</span>
                  &nbsp;{productPrice}&nbsp;
                </p>
                 <Button onClick={() => console.log(`click`)}>{sendButtonText}</Button>
              </div>
            </ModalContentData>          
          </ModalContent>
        </ModalBox>
      );
}

export default App;
