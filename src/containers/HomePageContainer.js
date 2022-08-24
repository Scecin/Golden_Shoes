import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

const GenderImages = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 32px;
    margin-bottom: 32px;
`

const HomePageContainer = ({setAppState}) => {

    const handleClickWomen = () => {
        setAppState("WomenHomeContainer")
    }
    const handleClickMen = () => {
        setAppState("MenHomeContainer")
    }
    const handleClickKids = () => {
        setAppState("KidsHomeContainer")
    }

    return (
        <>
            <Header setAppState={setAppState}/>
            <hr/>
            <div class="bigContainer">
                <img src= "/images/sale_shoes.jpg" alt="Sale" class="image"/>
                <div class="middle">
                    <button class="text">SALES</button>
                </div>
            </div>
            <GenderImages>
                <div class="container">
                    <img src= "/images/women_shoes.jpg" alt="Women" class="image"/>
                    <div class="middle">
                        <button onClick={handleClickWomen} class="text">WOMEN</button>
                    </div>
                </div>
                <div class="container">
                    <img src= "/images/men_shoes.jpg" alt="Men" class="image"/>
                    <div class="middle">
                        <button onClick={handleClickMen}class="text">MEN</button>
                    </div>
                </div>
                <div class="container">
                    <img src= "/images/kids_shoes.jpg" alt="Kids" class="image"/>
                    <div class="middle">
                        <button onClick={handleClickKids}class="text">KIDS</button>
                    </div>
                </div>
            </GenderImages>
            <hr/>
            <Footer setAppState={setAppState}/>
        </>
    )
}
export default HomePageContainer