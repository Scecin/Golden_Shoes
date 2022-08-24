import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HeaderStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 48px;
    margin-right: 48px;
`

const SearchBar = styled.div`
    display: flex;
    align-items: center;
`

const Button = styled.button`
    width: 300px;
    margin: 48px;
    text-align: center;
    font-size: x-large;
    padding: 8px;
`

const ShoesList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    padding:48px;
`

const Img = styled.img`
    width: 70%;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`

const ShoeContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width:500px;
    padding-bottom:48px;
`

const Text = styled.p`
    margin: 3px;
    margin-left: 16px;
    font-size: small;
`

const ShoeName = styled.h3`
    font-size: medium;
    margin: 8px;
`

const ShoeInformation = styled.div`
    display: flex;
    flex-direction: row;
`

const ShoePrice = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin-left: 160px; 
`

const Price = styled.h3`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin: 8px;
    font-size: medium;
`
const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
    
const WomenAllStylesContainer = ({setAppState}) => {

    const hadleClickProductPage = () => {
        setAppState("ProductPageContainer")
    }

    return (
        <>
            <Header setAppState={setAppState}/>
            <hr/>
            <HeaderStyle>
                <h3> All Filters </h3>
                <SearchBar>
                    <label for="SortBy">Sort By </label>
                    <input type="search" id="id"></input>
                </SearchBar>
            </HeaderStyle>
            <Body>
                <ShoesList>
                    <ShoeContainer>
                        <Img src= "/images/women_shoes.jpg" alt="Women" class="image" onClick={hadleClickProductPage}/>
                        <ShoeInformation>
                            <div>
                                <ShoeName> Amazing Shoes</ShoeName>
                                <Text> Women Shoes</Text>
                                <Text> Colour Black </Text>
                            </div>
                            <ShoePrice>
                                <Price> £79,99 </Price>
                            </ShoePrice>
                        </ShoeInformation>
                    </ShoeContainer>
                    <ShoeContainer>
                        <Img src= "/images/women_shoes.jpg" alt="Women" class="image" onClick={hadleClickProductPage}/>
                        <ShoeInformation>
                            <div>
                                <ShoeName> Amazing Shoes</ShoeName>
                                <Text> Women Shoes</Text>
                                <Text> Colour Black </Text>
                            </div>
                            <ShoePrice>
                                <Price> £79,99 </Price>
                            </ShoePrice>
                        </ShoeInformation>
                    </ShoeContainer>
                    <ShoeContainer>
                        <Img src= "/images/women_shoes.jpg" alt="Women" class="image" onClick={hadleClickProductPage}/>
                        <ShoeInformation>
                            <div>
                                <ShoeName> Amazing Shoes</ShoeName>
                                <Text> Women Shoes</Text>
                                <Text> Colour Black </Text>
                            </div>
                            <ShoePrice>
                                <Price> £79,99 </Price>
                            </ShoePrice>
                        </ShoeInformation>
                    </ShoeContainer>
                    <ShoeContainer>
                        <Img src= "/images/women_shoes.jpg" alt="Women" class="image" onClick={hadleClickProductPage}/>
                        <ShoeInformation>
                            <div>
                                <ShoeName> Amazing Shoes</ShoeName>
                                <Text> Women Shoes</Text>
                                <Text> Colour Black </Text>
                            </div>
                            <ShoePrice>
                                <Price> £79,99 </Price>
                            </ShoePrice>
                        </ShoeInformation>
                    </ShoeContainer>
                    <ShoeContainer>
                        <Img src= "/images/women_shoes.jpg" alt="Women" class="image" onClick={hadleClickProductPage}/>
                        <ShoeInformation>
                            <div>
                                <ShoeName> Amazing Shoes</ShoeName>
                                <Text> Women Shoes</Text>
                                <Text> Colour Black </Text>
                            </div>
                            <ShoePrice>
                                <Price> £79,99 </Price>
                            </ShoePrice>
                        </ShoeInformation>
                    </ShoeContainer>
                    <ShoeContainer>
                        <Img src= "/images/women_shoes.jpg" alt="Women" class="image" onClick={hadleClickProductPage}/>
                        <ShoeInformation>
                            <div>
                                <ShoeName> Amazing Shoes</ShoeName>
                                <Text> Women Shoes</Text>
                                <Text> Colour Black </Text>
                            </div>
                            <ShoePrice>
                                <Price> £79,99 </Price>
                            </ShoePrice>
                        </ShoeInformation>
                    </ShoeContainer>
                </ShoesList>
                <Button>View More</Button>
            </Body>
            <hr/>
            <Footer setAppState={setAppState}/>
        </>
    )
}
export default WomenAllStylesContainer;