import React from "react";
import { Link } from 'react-router-dom'
import {Button, Card, Image} from "semantic-ui-react";
import styled from "styled-components";

const StyleCard = styled.div`
width: 20%; 
height: 15000%; 
background: #423ABA; 
color: white;
border: 3px solid rgba; 
border-radius: 2%; 
text-align: center;
font-weight: bold; 
font-size: 1rem; 
margin-left: 1rem;
margin-top: 2rem;

`

const StyleFlex = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`
const StyleButton = styled.button`
width: 25%; 
height: 30%; 
margin: 5px;
padding: 5px;
background: white; 
color: #423ABA;
border: 3px solid rgba; 
border-radius: 2%; 
text-align: left;

`

const Business = props =>{
    console.log(props.data.id)


    return(
        <StyleCard>
            <Card.Header>{props.data.name}</Card.Header><br></br>
            <StyleFlex>

                <StyleButton as={Link} to={{ pathname:`/update-listing`, state: props.data}}> Update Business </StyleButton>

                 <StyleButton onClick={() => props.deleteData(props.data)}> Delete Business </StyleButton> 

            </StyleFlex>
        </StyleCard>
    )
}

export default Business;

