import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'

function RenderMenuITem({ item, onClick }) {

    return (
        <Card onClick={() => onClick(item.id)}>
            <CardImg width="100%" src={item.image} alt={item.name}></CardImg>
            <CardImgOverlay >
                <CardTitle>{item.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

const Menu = (props) => {
    const menu = props.dishes.map(item => {

        return (
            <div key={item.id} className="col-12 col-md-5 m-1">
                <RenderMenuITem item={item} onClick={()=>props.onClick(item.id)} />
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


export default Menu;