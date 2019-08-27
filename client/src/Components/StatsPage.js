import React from "react";
import {Button, Card, Image} from "semantic-ui-react"

const StatsPage = (props) =>{

    //I will have to map through the data to add the card with Biz name and buttons
    return (
        <Card.Group>
       
            <Card>
                <Card.Header>Sites Analyzed</Card.Header>
                {//map here for the sites analyzed (maybe do image if the data gives us image)
                }
                <Card.Content>{props.name}</Card.Content>
            </Card>

            <Card>
                <Card.Header>Top Positive Key Words</Card.Header>
                {//map here for the Top Positive Key Words
                }
                <Card.Content>{props.Positive}</Card.Content>
            </Card>

            <Card>
                <Card.Header>Top Negative Key Words</Card.Header>
                {//map here for the Top Negative Key Words
                }
                <Card.Content>{props.Negative}</Card.Content>
            </Card>

            <Card>
                <Card.Header>Average Rating</Card.Header>
                {//Could be content or image not sure yet.
                }
                <Card.Content>{props.Rating}</Card.Content>
            </Card>



        </Card.Group>
    )
}

export default StatsPage;