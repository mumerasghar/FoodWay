import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'

class Menu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selecDish: null
        }

    }


    handleClick(item) {

        this.setState({ selecDish: item })
        console.log(item)
    }

    renderDish(item) {
        if (item != null) {
            return (
                <Card>
                    <CardImg width="100%" src={item.image} alt={item.name}></CardImg>
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    render() {

        const menu = this.props.dishes.map(item => {

            return (
                <div key={item.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.handleClick(item)}>
                        <CardImg width="100%" src={item.image} alt={item.name}></CardImg>
                        <CardImgOverlay >
                            <CardTitle>{item.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div >
            )
        })

        return (

            <div className="container" >
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selecDish)}
                </div>
            </div>
        )
    }
}

export default Menu;