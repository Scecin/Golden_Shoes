import React from "react";
import styled from "styled-components";

const FooterStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const Link = styled.p`
    font-size: large;
    &:hover {
        color: red;
        text-decoration-line: underline;
        cursor: pointer;
    }
`

const Footer = ({setAppState}) => {

    const handleClickFaqs = () => {
        setAppState("FaqsContainer")
    }

    const handleClickContactUs = () => {
        setAppState("ContactUsContainer")
    }

    return (
        <>
            <FooterStyle>
                <div>
                    <h3>Customer Services</h3>
                    <Link onClick={handleClickFaqs}>FAQ's</Link>
                    <p>Orders & payments</p>
                    <p>Delivery & returns</p>
                    <p>Track order</p>
                    <p>Terms & Conditions</p>
                </div>
                <div>
                    <h3>Information</h3>
                    <p>My account</p>
                    <p>Gift card</p>
                    <p>Student discount</p>
                    <p>Cookie policy</p>
                    <p>Privacy policy</p>
                </div>
                <div>
                    <h3>About us</h3>
                        <Link onClick={handleClickContactUs}>Contact us</Link>
                        <p>Store locator</p>
                        <p>Careers</p>
                        <p>Corporate</p>
                </div>
                <div>
                    <h3>Follow us</h3>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-google"></a>
                    <a href="#" class="fa fa-linkedin"></a>
                    <a href="#" class="fa fa-youtube"></a>
                    <a href="#" class="fa fa-instagram"></a>
                </div>
            </FooterStyle>
        </>
    )
}
export default Footer;