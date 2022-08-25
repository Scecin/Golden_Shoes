import React from "react";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`

const BackGround = styled.div`
    width: 700px;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`

const ModalWrapper = styled.div`
    width: 500px;
    box-shadow: 0 0px  16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    position: relative;
    border-radius: 10px;
    margin: 48px;
`

const CloseModalButton = styled.div`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height:32px;
    padding: 0;
    z-index: 10;
`

const Img = styled.img`
    width: 40%;
    height: 40%;
`

const Shoe = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

const ShoeInf = styled.div`
    display: flex;
    flex-direction: column;
`

const Span = styled.span`
display: flex;  
justify-content: flex-end;
    padding: 16px 16px 0;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
    &:hidden {
        display: none;
    }
`

const Modal = ({showModal, setShowModal, selectedShoe}) => {

    return (
        <>
            {showModal ? ( 
                <Div>
            <BackGround>
                <ModalWrapper>
                    <Span>X</Span>
                        <Shoe>
                            <Img src= {selectedShoe.img} alt="Shoes" class="image"/>
                            <ShoeInf>
                                <h3> Item added to bag </h3>
                                <p> {selectedShoe.name} </p>
                                <p> {selectedShoe.price}</p>
                                <p> {selectedShoe.color}</p>
                                <p> {selectedShoe.pricce}</p>
                            </ShoeInf>
                        </Shoe>
                    {/* </ModalContent> */}
                    <CloseModalButton aria-label="close modal" onClick={() =>   setShowModal(prev => !prev)}>
                    </CloseModalButton>
                </ModalWrapper>
            </BackGround>
            </Div>
        ) : null}
        </>
    )
}
export default Modal;