import React from "react";
import {Button, Card, Image} from "semantic-ui-react"



const Stats = (props) =>{

    return (
        <Card>
        <Card.Header>Business Name: {props.Name}</Card.Header>
        {props.stats && props.stats.map(info => {
            return (
                <Card>
                    <Card.Content>Term : {info.term}</Card.Content>
                    <Card.Content>High Rating Score: {info.highratingscore}</Card.Content>
                    <Card.Content>Low Rating Score: {info.poorratingscore}</Card.Content>
                </Card>
            )
            }
        )}
        </Card>
    )
}
export default Stats;