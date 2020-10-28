import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

class DishDetail extends Component {

    render() {

        let item;
        if (this.props.item == null) {
            return (
                <div>empty</div>

            )
        } else {
            return (
                <Card>
                    <CardImg width="100%" src={this.props.item.image} alt={this.props.item.name}></CardImg>
                    <CardBody>
                        <CardTitle>{this.props.item.name}</CardTitle>
                        <CardText>{this.props.item.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
    }
}

export default DishDetail