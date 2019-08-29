import React from "react";
import { Link } from 'react-router-dom'
import {Button, Card, Image} from "semantic-ui-react";

const Business = props =>{
    console.log(props.data.id)


    return(
        <Card>
            <Card.Header>{props.data.name}</Card.Header><br></br>

            <Button as={Link} to={{ pathname:`/update-listing`, state: props.data}}> Update Business </Button><br></br>

            <Button onClick={() => props.deleteData(props.data)}> Delete Business </Button> <br></br>
        </Card>
    )
}

export default Business;

