import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HeaderStyle = styled.h3`
    margin: 36px;
`

const Title = styled.h1`
    display: flex;
    justify-content: center;
    padding: 48px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const CallUs = styled.div`
    margin: 48px;
`

const SendUs = styled.div`
    margin: 48px;
    display: inline-block;
`

const Line= styled.div`
    display: flex;
    flex-direction: row;
`

const Button = styled.input` 
    width: 100px;
    height: 30px;
    margin-right: 16px;
`

const Label= styled.label`
    display: inline-block;
    width: 200px;
    height: 30px;
    margin: 16px;
`

const Input= styled.input`
    margin: 16px;
    padding: 8px;
`

const BigInput= styled.textarea`
    margin: 16px;
    width: 675px;
    height: 200px;
    resize: none;
    padding: 8px;
`

const ButtonContainer = styled.div`
    display: flex; 
    justify-content: flex-end;
`

const ContactUsContainer = ({setAppState, totalItems}) => {

    return (
        <>
            <Header setAppState={setAppState} totalItems={totalItems}/>
            <hr/>
            <HeaderStyle> Contact Us </HeaderStyle>
            <Title>We'd love to hear from you</Title>
            <CallUs>
                <h2>Call Us</h2>
                <h3>Phone Number:</h3>
                <p>01234567890</p>
                <h3>Call Opening Hours</h3>
                <p> Monday - Friday: 9am - 5pm.</p>
            </CallUs>
            <SendUs>
                <h2>Send Us an E-mail</h2>
                <Form>
                    <Line>
                        <Label for="email">Email Address: </Label>
                        <Input type="text" id="email" name="email" size="100" required></Input>
                    </Line>
                    <Line>
                        <Label for="subject">Subject: </Label>
                        <Input type="text" id="subject" name="subject" size="100" required></Input>
                    </Line>
                    <Line>
                        <Label for="ddescription">Description: </Label>
                        <BigInput type="text" id="description" name="desccription" size="100"  required></BigInput>
                    </Line>
                    <ButtonContainer>
                        <Button type="submit" value="Send"></Button>
                    </ButtonContainer>
                </Form>
            </SendUs>
            <hr/>
            <Footer setAppState={setAppState}/>
        </>
    )
}

export default ContactUsContainer;