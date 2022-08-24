import React from "react";
import styled from "styled-components";

const NavigationBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 48px;
`

const GenderBar = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 20px;
`

const ResourcesBar = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 20px;
    list-style-type: none;
`

const Link = styled.li`
    font-size: large;
    &:hover {
        color: red;
        text-decoration-line: underline;
        cursor: pointer;
    }
`

const ShopName = styled.h1`
    &:hover {
        cursor: pointer;
    }
`

const Header = ({setAppState}) => {

    const handleClickWomen = () => {
        setAppState("WomenHomeContainer")
    }
    const handleClickMen = () => {
        setAppState("MenHomeContainer")
    }
    const handleClickKids = () => {
        setAppState("KidsHomeContainer")
    }

    const handleClickHomePage = () => {
        setAppState("HomePageContainer")
    }

    const handleClickShoppingBag = () => {
        setAppState("ShoppingBagContainer")
    }
    
    return (
        <>
            <NavigationBar>
                <GenderBar>
                    <Link onClick={handleClickWomen}>Women</Link>
                    <Link onClick={handleClickMen}>Men</Link>
                    <Link onClick={handleClickKids}>Kids</Link>
                </GenderBar>
                <ShopName onClick={handleClickHomePage}> GOLDEN SHOES </ShopName>
                <ResourcesBar>
                    <Link>Search</Link>
                    <Link>Sign In</Link>
                    <Link onClick={handleClickShoppingBag} >Shopping Bag</Link>
                </ResourcesBar>
            </NavigationBar>
        </>
    )
}
export default Header;