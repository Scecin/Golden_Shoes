import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HeaderStyle = styled.h3`
    margin: 48px;
`

const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    padding:48px;
`

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 4px 4px rgba(0,0,0,0.2);
    border-radius: 5px;
    margin-left:48px;
    width: 350px;
    height: 350px;
    margin: 48px;
    font-size: x-large;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
        font-size: xx-large;
    }
`

const FaqsContainer = ({setAppState, totalItems}) => {

    const handleClickContactUs = () => {
        setAppState("ContactUsContainer")
    }

    return (
        <>
            <Header setAppState={setAppState} totalItems={totalItems}/>
            <hr/>
            <HeaderStyle> FAQ's </HeaderStyle>
            <Body>
                <CardList>
                    <Card>Delivery</Card>
                    <Card>Returns</Card>
                    <Card>Payments</Card>
                    <Card>Stores</Card>
                    <Card>Sizes</Card>
                    <Card onClick={handleClickContactUs} >Contact Us</Card>
                </CardList>
            </Body>
            <hr/>
            <Footer setAppState={setAppState}/>
        </>
    )
}
export default FaqsContainer;