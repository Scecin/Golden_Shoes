import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

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
`

const Price = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Total = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    max-width: 500px;
    margin: 48px;
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

const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding-bottom: 48px;
`

const ShoppingList = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 3;
`

const Input = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Label = styled.label`
    padding: 24px 0;
`

const TextInput = styled.input`
    font-size: large;
    padding-left: 8px;
`

const Button = styled.input`
    padding: 8px 24px;
`

const Quantity = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
`
const Buttons = styled.div`
    margin: 8px;
`

const ShoppingBagContainer = ({setAppState, basketList, deleteShoeBasket, totalItems}) => {

    const [quantity, setCuantity] = useState(1)
    // const [coupon, setCoupon] = useState(10)

    let totalPrice = basketList.reduce((price, shoe) => price + shoe.price, 0)

    let defaultTotalPrice = totalPrice * quantity;
    let priceWithTwoDecimals = defaultTotalPrice.toFixed(2)

    // const usingCode = (event) => {
    //     event.preventDefault()
    //     console.log(event.targert.value)
    //     if (event.target.value == 123) {
    //         setCoupon(prevCoupon => prevCoupon)
    //         defaultTotalPrice  = defaultTotalPrice - coupon
    //     }
    // }

    const incrementQuantity = () => {
        setCuantity(prevQuan => prevQuan +1)
    }   

    const decrementQuantity = () => {
        if(quantity > 1) {
        setCuantity(prevQuan => prevQuan-1)
    }
    }

    const basketNodes = basketList.map((shoe, index) => {
        return <ShoeInf key={index}>
                    <Img src={shoe.img} alt="Shoes" class="image"/>
                    <Inf>
                        <p> {shoe.name} </p>
                        <p> Color {shoe.color}</p>
                        <p> SIZE </p>
                        <p> {shoe.price}</p>
                        <Quantity>
                            <div class="quantity">Quantity {quantity}</div>
                            <Buttons className="btns">
                                <button onClick={incrementQuantity}>+</button>
                                <button onClick={decrementQuantity}>-</button>
                            </Buttons>
                        </Quantity>
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
                        <Remove>
                            <i class="bi bi-trash"></i>
                            <p onClick={deleteShoeBasket}> Remove</p>
                        </Remove>
                        <hr/>
                    </Inf>
                </ShoeInf>
    }) 

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
                        <hr/>
                        <Price>
                            <p> Delivery </p>
                            <p> Free </p>
                        </Price>
                        <Form>
                            <Label> Apply a Promotional Code </Label>
                            <Input>
                                <TextInput type="text" id="code" name="code"></TextInput>
                                <Button type="submit" value="Apply Code"></Button>
                            </Input>
                        </Form>
                    </Total>
                </ShoppingBag>
            <hr/>
            <Footer setAppState={setAppState}/>
        </>
    )
}
export default ShoppingBagContainer;