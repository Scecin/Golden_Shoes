import React from "react";
import styled from "styled-components";

const Img = styled.img`
    width: 100%;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`

const ShoeContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width:400px;
    padding:48px;
`

const Text = styled.p`
    margin: 8px;
    font-size: small;
`

const ShoeName = styled.h3`
    font-size: medium;
    margin: 8px;
`

const ShoeInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 16px;
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

const Div = styled.div`
    display: flex;
    justify-content: space-between;
`

const ProductItem = ({setAppState, shoe, onShoeClick}) => {

    const hadleClickProductPage = (() => {
        onShoeClick(shoe)
        setAppState("ProductPageContainer")
    })

    return (
        <>
            <ShoeContainer>
                <Img src={shoe.img} alt= "ShoeImg" onClick={hadleClickProductPage}/>
                <ShoeInformation>
                    <ShoeName> {shoe.name}</ShoeName>
                    <Div>
                        <div>
                            <Text> {shoe.style}</Text>
                            <Text> {shoe.color} </Text>
                        </div>
                        <ShoePrice>
                            <Price> {shoe.price}</Price>
                        </ShoePrice>
                        </Div>
                </ShoeInformation>
            </ShoeContainer>
        </>
    )
}
export default ProductItem;