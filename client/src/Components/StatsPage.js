import React, {useEffect}from "react";
import {Button, Card, Image} from "semantic-ui-react"
import {connect} from "react-redux";
import {grabData} from "../actions"
import Stats from "./Stats.js"

import './style.css'

const StatsPage = (props) =>{

    
    useEffect(()=>{     
        props.grabData()
        
    }, [])

    //I will have to map through the data to add the card with Biz name and buttons
    return (
        <Card.Group style={{margin: "3.5px"}}>
            {props.list.listings && props.list.listings.map(info => <Stats Name={info.name} stats={info.data}/>)}

        </Card.Group>
    )
}

const mapStateToProps = state =>{
    return {
        list: state
    }
}

export default connect(mapStateToProps, {grabData})(StatsPage);
