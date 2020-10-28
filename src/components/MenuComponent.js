import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'

class Menu extends Component {

    render() {

        const menu = this.props.dishes.map(item => {

            return (
                <div key={item.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(item.id)}>
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
            </div>
        )
    }
}

export default Menu;