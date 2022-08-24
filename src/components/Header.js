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
    position: relative;
    font-size: large;
    display: flex;
    flex-direction: row;
    &:hover {
        text-decoration-line: underline;
        cursor: pointer;
    }
`

const ShopName = styled.h1`
    &:hover {
        cursor: pointer;
    }
`

const Counter = styled.div`
    position: absolute;
    top:-15px;
    right: -10px;
    font-size: 16px;
    background-color: white;
    border: 1px solid black;
    color: black;
    padding: 3px;
    border-radius: 20%;
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
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
                    <Link>
                        <li>Search</li>
                        <i class="bi bi-search"></i>
                    </Link>
                    <Link>
                        <li>Sign In</li>
                        <i class="bi bi-person"></i>
                    </Link>
                    <Link>
                        <li onClick={handleClickShoppingBag} >Shopping Bag</li>
                        <i class="bi bi-bag"></i>
                        <Counter>0</Counter>
                    </Link>
                </ResourcesBar>
            </NavigationBar>
        </>
    )
}
export default Header;