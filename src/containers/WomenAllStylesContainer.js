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

const Div = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 48px;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`

const Icon = styled.div`
    display: flex;
    align-items: center;
    margin-right: 8px;
`

const Label = styled.label`
    padding: 16px;
`

const Select = styled.select`
    padding: 8px;
`

const WomenAllStylesContainer = ({setAppState, womenShoes, onShoeClick, totalItems}) => {

    const productListNodes = womenShoes.map((shoe, index) => {
        return <ProductItem key={index} shoe={shoe} setAppState={setAppState} onShoeClick={onShoeClick}/>
    })

    const handleClickBackButton = () => {
        setAppState("WomenHomeContainer")
    }

    return (
        <>
            <Header setAppState={setAppState} totalItems={totalItems}/>
            <Div>
                <Icon><i class="bi bi-arrow-left"></i></Icon>
                <p onclick={handleClickBackButton}> Back </p>
            </Div>
            <hr/>
            <HeaderStyle>
                <h3> All Filters </h3>
                <SearchBar>
                    <Label for="SortBy">Sort By:</Label>
                    <Select name="cars" id="cars">
                        <option value="relevance">Relevance</option>
                        <option value="newest">Newest</option>
                        <option value="highest">Highest Rated</option>
                        <option value="a_z">A-Z</option>
                        <option value="z_a">Z-A</option>
                        <option value="price_low">Price (Low-High) </option>
                        <option value="price_low">Price (High-Low) </option>
                    </Select>
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
export default WomenAllStylesContainer;