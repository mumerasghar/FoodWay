import { render } from '@testing-library/react'
import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { Loading } from './LoadingComponent'
function RenderCard({ item, isLoading, errMess }) {

    console.log(isLoading)
    if (isLoading)
        return (
            <Loading></Loading>
        )

    else if (errMess)
        return (
            <h4>{errMess}</h4>
        )

    else {
        if (item) {
            return (

                <Card >
                    <CardImg src={item.image} alt={item.name}></CardImg>
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else{
            return(<h1></h1>)
        }
    }
}

function Home(props) {

    if (props.dishesLoading)
        return (
            <Loading></Loading>
        )

    else if (props.dishesErrMess)
        return (
            <h4>eoo</h4>
        )

    else
        return (
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                        <RenderCard
                            item={props.dish}
                            isLoading={props.dishesLoading}
                            errMess={props.dishesErrMess} />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.promotion} />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.leader} />
                    </div>
                </div>
            </div>
        )
}

export default Home;