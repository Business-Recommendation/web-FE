import React from "react";
import {Button, Card, Image} from "semantic-ui-react";


const Business = props =>{
    console.log(props)

    return(
        <Card>
            <Card.Header>{props.data.name}</Card.Header>
            <Button > Update Business </Button>
            <Button onClick={props.grabData} > View Stats </Button>
            <Button > Delete Business </Button>
        </Card>
    )
}

export default Business;

