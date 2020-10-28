import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './MenuComponent'
import { Component } from 'react';
import { DISHES } from '../shared/dishes'
import DishDetail from './DishDetailComponent'

class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    handleClick(itemId) {

        this.setState({ selectedDish: itemId })
    }

    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes}
                    onClick={(itemId) => this.handleClick(itemId)} />
                <DishDetail item={this.state.dishes.filter((item) => item.id === this.state.selectedDish)[0]} />
            </div>
        );
    }
}

export default Main;
