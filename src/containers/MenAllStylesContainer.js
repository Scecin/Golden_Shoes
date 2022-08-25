import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";

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

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ShoesList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    padding:48px;
`

const MenAllStylesContainer = ({setAppState, menShoes, onShoeClick, totalItems}) => {

    const productListNodes = menShoes.map((shoe, index) => {
        return <ProductItem key={index} shoe={shoe} setAppState={setAppState} onShoeClick={onShoeClick}/>
    })
    return (
        <>
            <Header setAppState={setAppState} totalItems={totalItems}/>
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
                    {productListNodes}
                </ShoesList>
                <Button>View More</Button> 
            </Body>
            <hr/>
            <Footer setAppState={setAppState}/>
        </>
    )
}
export default MenAllStylesContainer;