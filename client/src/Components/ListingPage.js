import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {Button, Card, Input} from "semantic-ui-react"
import { Link } from 'react-router-dom'

import {pushData, grabData, deleteData} from "../actions"
import Business from "./Business.js"

import styled from "styled-components";

const StyleCard = styled.div`
width: 650px; 
height: 30%; 
background: #423ABA; 
color: white;
border: 3px solid rgba; 
border-radius: 2%; 
text-align: left;
font-weight: bold; 
font-size: 1rem; 
margin-left: 1rem;
margin-top: 2rem;
padding: .5%;

`

const StyleFlex = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`
const StyleButton = styled.button`
width: 1500%; 
height: 80%; 
margin: 5px;
padding: 5px;
background: white; 
color: #423ABA;
border: 3px solid rgba; 
border-radius: 2%; 
text-align: left;

`

const ListingPage = (props) =>{
    const [list, setList] = useState({
        name:'',
        yelp_url: ''
    })

    useEffect(()=>{
        console.log("useEffect", props.list.listings)
        props.grabData()
    }, [])

    let handleChanges = e => {
        setList({...list,
            [e.target.name]: e.target.value
        });
    };

    let addNewBusiness = e => {
        e.preventDefault();
        props.pushData(list);
        setList({
            name:'',
            yelp_url: ''
        })
    };

    

    console.log("hello", props.list.listings)

    //I will have to map through the data to add the card with Biz name and buttons
    // 
    return (
        <Card.Group style={{marginTop:"2.5px"}}>
            <br></br>

            {//Card that hold a button to add more business}
             }
            <StyleCard >
                <form onSubmit={addNewBusiness}>
                    <label>Restaurant Name</label><Input type ="text" name="name"value={list.name} onChange={handleChanges} placeholder="Restaurant Name" />
                    <label>Yelp Url</label><Input type ="text" name="yelp_url" value={list.yelp_url} onChange={handleChanges} placeholder="Yelp URL"/>
                    <StyleFlex>

                        <StyleButton >Add New Business</StyleButton>
                        <Link to='/stats'><StyleButton >View Stats</StyleButton> </Link>                   

                    </StyleFlex>
                </form>  
                              
            </StyleCard>

            {props.list.listings && props.list.listings.map(info => <Business data={info} key={`${info.id}${Date.now()}`} deleteData={props.deleteData}/>)}

        </Card.Group>
    )
}
const mapStateToProps = state =>{
    console.log(state)
    return {
        list: state
    }
}

export default connect(mapStateToProps, {pushData, grabData, deleteData})(ListingPage);
