
import React, { Component } from 'react';

class DishDetail extends Component {

    RenderDish = (dish) => {
        return (
            <div className="col-12 col-md-5 pt-3">
                <Card>
                    <CardImg
                        width="100%"
                        src={dish.image}
                        alt={dish.name}
                        className="img-thumbnail"
                    />
                    <CardBody>
                        <CardTitle> {dish.name} </CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    };

    RenderComments = (comments) => {
        const commentList = comments.map((comment) => {
            return (
                <li key={comment.id} className="m-2">
                    <p>{comment.comment}</p>
                    <p>
                        --{comment.author},{' '}
                        {new Intl.DateTimeFormat('en-Us', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit',
                        }).format(new Date(Date.parse(comment.date)))}
                    </p>
                </li>
            );
        });

        return (
            <div className="col-12 col-md-5 pt-3">
                <h3>Comments</h3>
                <ul className="list-unstyled">{commentList}</ul>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"></span> Submit Comment
				</Button>
            </div>
        );
    };

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }

    handleInputSubmit(values) {
        this.toggleModal();
        console.log('Current State is :' + JSON.stringify(values));
        alert('Current State is :' + JSON.stringify(values));
    }

    render() {
        if (this.state.dish === undefined) {
            return <div></div>;
        } else {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/menu/">Menu</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>{this.state.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{this.state.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default DishDetail;