import React from "react";
import styled from "styled-components"
import Footer from "../components/Footer";
import Header from "../components/Header";

const GenderImages = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 32px;
    margin-bottom: 32px;
`

const H3 = styled.h3`
    margin: 0px;
    margin-left: 48px;
`

const MenHomeContainer = ({setAppState}) => {

    return (
        <>
            <Header setAppState={setAppState}/>
            <H3>MEN</H3>
            <hr/>
            <div class="container">
                <img src= "/images/all_styles.jpg" alt="Sale" class="image"/>
                <div class="middle">
                    <button class="text">ALL STYLES</button>
                </div>
            </div>
            <GenderImages>
                <div class="container">
                    <img src= "/images/sale_shoes.jpg" alt="Sales" class="image"/>
                    <div class="middle">
                        <button class="text">SALES</button>
                    </div>
                </div>
                <div class="container">
                    <img src= "/images/men_shoes2.jpg" alt="Shoes" class="image"/>
                    <div class="middle">
                        <button class="text">SHOES</button>
                    </div>
                </div>
                <div class="container">
                    <img src= "/images/men_boots.jpg" alt="Boots" class="image"/>
                    <div class="middle">
                        <button class="text">Boots</button>
                    </div>
                </div>
                <div class="container">
                    <img src= "/images/men_trainers.jpg" alt="Trainers" class="image"/>
                    <div class="middle">
                        <button class="text">TRAINERS</button>
                    </div>
                </div>
                <div class="container">
                    <img src= "/images/men_sandals.jpg" alt="Sandals" class="image"/>
                    <div class="middle">
                        <button class="text">Sandals</button>
                    </div>
                </div>
            </GenderImages>
            <hr/>
            <Footer setAppState={setAppState}/>
        </>
    )
}
export default MenHomeContainer