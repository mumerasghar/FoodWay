import React, { Component } from 'react'
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap'
import '../App.css'
class Header extends Component {

    render() {

        return (
            <React.Fragment>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Fusion</NavbarBrand>
                    </div>
                </Navbar>

                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Fusion Con</h1>
                                <p>We take insporation from the worlds cusinies,and create a unique fusion experience. our lipsmacking creattion will tickle your culiniary senses </p>
                            </div>
                        </div>

                    </div>
                </Jumbotron>
            </React.Fragment>
        )
    }

}

export default Header