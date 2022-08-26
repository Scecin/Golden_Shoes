import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header"; 
import Modal from "../components/Modal";

const Img = styled.img`
    width: 30%;
    height: 30%;
`

const Body = styled.div`
    display: flex;
    flex-direction: column;
    padding: 48px;
`

const Inf = styled.div`
    padding: 0px 48px 48px;
    text-align: start;
`

const ShoeInf = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

const Button = styled.button`
    width: 300px;
    margin: 48px;
    text-align: center;
    font-size: large;
    padding: 8px;
`

const Sizes = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 300px;
    justify-content: flex-start;
    margin-bottom: 16px;
`

const Size = styled.button`
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    width: 60px;
    font-size: medium;
    text-align: center;
    padding: 16px;
    margin: 4px;
    background: white;
    border-radius: 5px;
    &:hover {
        opacity: 0.8;
        cursor: pointer;
        background: #125688;
        color: white;
        font-weight: bold;
    }
    &:focus {
        background: #125688;
        color: white;
        font-weight: bold;
    }
`

const Card = styled.div`
    display: flex;
    flex-direction: row;
    background-color:aliceblue;
    padding:16px;
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    max-width: 60%;
    padding: 16px;
    margin-right:48px;
`

const DeliberyInf = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 4px 4px rgba(0,0,0,0.2);
    border-radius: 5px;
    padding:16px;
    margin-left:48px;
`

const List = styled.li`
    padding-bottom:16px;
`

const ProductPageContainer = ({setAppState, selectedShoe, addShoeBasket, totalItems, showModal, setShowModal}) => {

    const handleAddToBagButton = ((event) => {
        addShoeBasket(selectedShoe)
        setShowModal(prev => !prev)
    })
    
    return (
        <>
            <Header setAppState={setAppState} totalItems={totalItems}/>
            <hr/>
            <Modal showModal={showModal} setShowModal={setShowModal} selectedShoe={selectedShoe} />
            <Body>
                <ShoeInf>
                    <Img src= {selectedShoe.img} alt="Shoes" class="image"/>
                    <Inf>
                        <h1> {selectedShoe.name} </h1>
                        <h3> {selectedShoe.price}</h3>
                        <p> {selectedShoe.color}</p>
                        <p> SELECT SIZE </p>
                        <Sizes>
                            <Size> 3 </Size>
                            <Size> 3.5 </Size>
                            <Size> 4 </Size>
                            <Size> 4.5 </Size>
                            <Size> 5 </Size>
                            <Size> 5.5 </Size>
                            <Size> 6 </Size>
                            <Size> 6.5 </Size>
                            <Size> 7 </Size>
                            <Size> 7.5 </Size>
                            <Size> 8 </Size>
                        </Sizes>
                        <Button onClick={handleAddToBagButton}>Add to Bag</Button>
                    </Inf>
                </ShoeInf>
                <Card>
                    <Description>
                        <h3> Description </h3>
                        <p>{selectedShoe.description}</p>
                    </Description>
                    <DeliberyInf>
                        <h3> Delivery & Return</h3>
                        <ul>
                            <List> £6.95 Next Day Delivery by DPD (Order before 7pm) </List>
                            <List> FREE Collect from store (Within 5 working days) </List>
                            <List> FREE Standard Delivery (Within 5 working days) </List>
                            <List> FREE Pick up Points - Standard (Within 5 working days) </List>
                            <List> £5.95 Express Delivery by EVRi (Within 2 working days) </List>
                            <List> £5.95 Pick up Points - Next Day (Order before 7pm) </List>
                            <List> FREE Returns & Exchanges on all Items </List>
                        </ul>
                    </DeliberyInf>
                </Card>
            </Body>
            <hr/>
            <Footer setAppState={setAppState}/>
        </>
    )
}
export default ProductPageContainer;