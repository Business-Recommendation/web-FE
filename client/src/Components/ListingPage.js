import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {Button, Card, Image} from "semantic-ui-react"
import {pushData, grabData} from "../actions"

import Business from "./Business.js"

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

    console.log("hi", props.list.listings)

    //I will have to map through the data to add the card with Biz name and buttons
    // 
    return (
        <Card.Group>

            {//Card that hold a button to add more business}
             }
            <Card>
                <form onSubmit={addNewBusiness}>
                    <label>Restaurant Name</label><input type ="text" name="name"value={list.name} onChange={handleChanges} placeholder="Restaurant Name"/>
                    <label>Yelp Url</label><input type ="text" name="yelp_url" value={list.yelp_url} onChange={handleChanges} placeholder="Yelp URL"/>
                    <Button  >Add New Business</Button>
                </form>         
            </Card>

            {props.list.listings && props.list.listings.map(info => <Business data={info} key={info.id}/>)}

        </Card.Group>
    )
}
const mapStateToProps = state =>{
    console.log(state)
    return {
        list: state
    }
}

export default connect(mapStateToProps, {pushData, grabData})(ListingPage);
