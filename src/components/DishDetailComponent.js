import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

function DishDetail(props) {
    console.log("remder mehtod of dish detail component")
    if (props.item == null) {
        return (
            <div>empty</div>

        )
    } else {
        return (
            <Card>
                <CardImg width="100%" src={props.item.image} alt={props.item.name}></CardImg>
                <CardBody>
                    <CardTitle>{props.item.name}</CardTitle>
                    <CardText>{props.item.description}</CardText>
                </CardBody>
            </Card>
        )
    }
}
export default DishDetail