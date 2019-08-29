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



const Stats = (props) =>{

    return (
        <StyleMainCard >
        {props.stats && <Card.Header>Business Name: <br></br>{props.Name}</Card.Header>}
        {props.stats && props.stats.map(info => {
            return (
                <StyleCard>
                    <Card.Content>Term : {info.term}</Card.Content>
                    <Card.Content>High Rating Score: {info.highratingscore}</Card.Content>
                    <Card.Content>Low Rating Score: {info.poorratingscore}</Card.Content>
                </StyleCard>
            )
            }
        )}
        </StyleMainCard>
    )
}
export default Stats;