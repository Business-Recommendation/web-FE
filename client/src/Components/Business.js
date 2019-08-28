import React from "react";
import {Button, Card, Image} from "semantic-ui-react";



const Business = props =>{
    console.log(props.data.id)


    return(
        <Card>
            <Card.Header>{props.data.name}</Card.Header><br></br>

            <Button > Update Business </Button><br></br>

            <Button > Delete Business </Button> <br></br>
        </Card>
    )
}

export default Business;

