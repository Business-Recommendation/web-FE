import React from "react";
import {Button, Card, Image} from "semantic-ui-react"

const ListingPage = (props) =>{

    //I will have to map through the data to add the card with Biz name and buttons
    return (
        <Card.Group>
            {//map here for the first card
            }
            <Card>
                <Card.Header>{props.name}</Card.Header>
                <Button onClick={}> Update Business </Button>
                <Button onClick={}> View Stats </Button>
                <Button onClick={}> Delete Business </Button>
            </Card>

            {//Card that hold a button to add more business
            }
            <Card>
                <Button onClick={}>Add New Business</Button>
            </Card>

        </Card.Group>
    )
}