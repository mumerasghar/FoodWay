import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

function RenderComment(props) {

    console.log(props.comments)
    return (
        <div></div>
    )
}

function DishDetail(props) {
    return (
        <div className="container">

            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={props.dish.image} alt={props.dish.name}></CardImg>
                        <CardBody>
                            <CardTitle>{props.dish.name}</CardTitle>
                            <CardText>{props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    {/* <Card>
                        <CardBody>
                            <CardTitle>Comments</CardTitle>
                            <CardText></CardText>
                        </CardBody>
                    </Card> */}
                    <RenderComment comments={props.comments} />
                </div>
            </div>
        </div>
    )
}
export default DishDetail