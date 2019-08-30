import React from "react";
import {Button, Card, Image} from "semantic-ui-react"
import styled from "styled-components";

const StyleMainCard = styled.div`
background: #423ABA; 
color: white;
margin: .5%;
padding: .5%;
height: 200%;
font-weight: bold;
`
const StyleCard = styled.p`
width: 100%; 
height: 20%; 
background: white; 
color: #423ABA;
border: 3px solid rgba; 
border-radius: 2%; 
text-align: center;
font-size: 1rem; 
margin-left: .5 rem;
margin-top: 2rem;

`

const RT = ['awesome food', 'too loud', 'deals', 'friendly', 'value', 'cold food', 'bad waiters', 'disgusting', 'boring', 'seating', 'rude', 'bad service']

const Stats = (props) =>{
    const ratingTerms = (arr) => {
        let termsArray = []

        arr.map(word => {
            let rng = Math.floor(Math.random() * Math.floor(2))
            if (rng === 1) termsArray.push(word)
        })

        return termsArray
    }

    return (
        <StyleMainCard >
            <Card.Header>Business Name: <br></br>{props.Name}</Card.Header>
                    {/* <StyleCard>High Rating Terms: {props.stats.highratingterms.map(rate => { return ( <Card.Content>{rate}</Card.Content>)})}</StyleCard>
                    <StyleCard>Low Rating Terms: {props.stats.lowratingterms.map(rate => { return ( <Card.Content>{rate}</Card.Content>)})}</StyleCard> */}
                    <StyleCard>High Rating Terms: {ratingTerms(RT).map(rate => { return ( <Card.Content>{rate}</Card.Content>)})}</StyleCard>
                    <StyleCard>Low Rating Terms: {ratingTerms(RT).map(rate => { return ( <Card.Content>{rate}</Card.Content>)})}</StyleCard>

        </StyleMainCard>
    )
}
export default Stats;