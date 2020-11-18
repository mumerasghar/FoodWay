import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb,
    BreadcrumbItem, Modal, ModalHeader, ModalBody, FormGroup, Label, Form, Button, Row, Col
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { conrol, LocalForm, Errors, Control } from 'react-redux-form'

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class RenderComment extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        }
    }

    toggleModle = (() => this.setState({ isModalOpen: !this.state.isModalOpen }))

    handleSubmit = (values) => {
        console.log("Current state is: " + JSON.stringify(values))
        alert("Current state")
    }

    render() {
        return (
            <>
                <Button outline onClick={this.toggleModle}>
                    <span className="fa fa-edit fa-lg" color="primary"></span>Submit Comments
                </Button>
                <Modal toggle={this.toggleModle} isOpen={this.state.isModalOpen}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comments</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>

                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col>
                                    <Control.select model=".contactType"
                                        name="contactType"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>

                                    <Errors
                                        className="text-danger"
                                        model=".rating"
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Your Name</Label>
                                <Col>
                                    <Control.text model=".rating" id="rating" name="rating"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            minLength: minLength(3), maxLength: maxLength(15)
                                        }} />

                                    <Errors
                                        className="text-danger"
                                        model=".rating"
                                        show="touched"
                                        messages={{
                                            minLength: "Must be greater then 2 characters",
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="message" md={12}>Comments</Label>
                                <Col>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="6"
                                        placeholder="Comments"
                                        className="form-control" />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{ size: 10 }}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        )
    }
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


