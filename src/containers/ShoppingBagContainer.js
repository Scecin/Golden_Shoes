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
    padding: 48px;
    justify-content: center;
`

const ShoppingBag = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 48px;
`

const Price = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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

const ShoppingList = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 3;
`

const ShoppingBagContainer = ({setAppState, basketList, deleteShoeBasket, totalItems}) => {

    const basketNodes = basketList.map((shoe, index) => {
        return <ShoeInf key={index}>
                    <Img src={shoe.img} alt="Shoes" class="image"/>
                    <Inf>
                        <p> {shoe.name} </p>
                        <p> Color {shoe.color}</p>
                        <p> SIZE </p>
                        <p> {shoe.price}</p>
                        <form action="/action_page.php">
                            <label for="points">Quantity: </label>
                            <input type="number" id="points" name="points" step="1" min="0" required></input>
                        </form>
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
                        <Remove>
                            <i class="bi bi-trash"></i>
                            <p onClick={deleteShoeBasket}> Remove</p>
                        </Remove>
                        <hr/>
                    </Inf>
                </ShoeInf>
    })

    const totalPrice = basketList.reduce((price, shoe) => price + shoe.price, 0)
    const priceWithTwoDecimals = totalPrice.toFixed(2)

    return (
        <>
            <Header setAppState={setAppState} totalItems={totalItems}/>
            <hr/>
            <H1>Shopping Bag</H1>
                <ShoppingBag>
                    <ShoppingList>
                        {basketNodes}
                    </ShoppingList>
                    <hr/>
                    <Total>
                        <Price>
                            <h3> Subtotal</h3>
                            <h3> £{priceWithTwoDecimals}</h3>
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