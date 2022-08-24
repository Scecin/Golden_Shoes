import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

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
    padding: 48px;
    text-align: start;
`

const ShoeInf = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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
    width: 60px;
    text-align: center;
    padding: 8px;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
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

const ProductPageContainer = ({setAppState}) => {

    return (
        <>
            <Header setAppState={setAppState}/>
            <hr/>
            <Body>
                <ShoeInf>
                    <Img src= "/images/women_shoes.jpg" alt="Shoes" class="image"/>
                    <Inf>
                        <h1> Orianna Derby Chestnut </h1>
                        <h2> £79.99</h2>
                        <p> COLOUR Pink</p>
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
                        <form action="/action_page.php">
                            <label for="points">QUANTITY: </label>
                            <input type="number" id="points" name="points" step="1" min="0" required></input>
                        </form>
                        <Button>Add to Bag</Button>
                    </Inf>
                </ShoeInf>
                <Card>
                    <Description>
                        <h3> Description </h3>
                        <p>A super-chunky sole is the on-trend finishing touch to chic burgundy leather lace-up Orianna Derby. Perfectly balancing style and practicality, this low-profile shoe is designed for all-day comfort wear, with the rugged rubber sole adding maximum grip and durability. Minimal side stitching adds to the authentically crafted aesthetic</p>
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