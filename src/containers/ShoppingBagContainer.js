import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const H1  = styled.h1`
    margin: 48px;
`

const Img = styled.img`
    width: 200px;
    height: 200px;
`

const Inf = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 48px;
    line-height: 0rem;
    justify-content: flex-end;
`

const ShoeInf = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
    padding: 48px;
    align-items: flex-end;
`

const ShoppingBag = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 48px;
`

const Price = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Total = styled.div`
    padding: 48px;
    flex-grow: 1;
`

const Remove= styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`

const ShoppingBagContainer = ({setAppState}) => {

    return (
        <>
            <Header setAppState={setAppState}/>
            <hr/>
            <H1>Shopping Bag</H1>
                <ShoppingBag>
                    <ShoeInf>
                        <Img src= "/images/women_shoes.jpg" alt="Shoes" class="image"/>
                        <Inf>
                            <p> Orianna Derby Chestnut </p>
                            <p> COLOUR Pink</p>
                            <p> SIZE </p>
                            <p> £79.99</p>
                            <form action="/action_page.php">
                                <label for="points">QUANTITY: </label>
                                <input type="number" id="points" name="points" step="1" min="0" required></input>
                            </form>
                            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
                            <Remove>
                                <i class="bi bi-trash"></i>
                                <p> Remove</p>
                            </Remove>
                        </Inf>
                    </ShoeInf>
                    <hr/>
                    <Total>
                        <Price>
                            <h3> Subtotal</h3>
                            <h3> £79.99</h3>
                        </Price>
                        <Price>
                            <p> Delivery </p>
                            <p> Free </p>
                        </Price>
                    </Total>
                </ShoppingBag>
            <hr/>
            <Footer setAppState={setAppState}/>
        </>
    )
}
export default ShoppingBagContainer;