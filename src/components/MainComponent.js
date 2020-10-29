import Menu from './MenuComponent'
import { Component } from 'react';
import { DISHES } from '../shared/dishes'
import DishDetail from './DishDetailComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
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
                <Header></Header>
                <Menu dishes={this.state.dishes}
                    onClick={(itemId) => this.handleClick(itemId)} />
                <DishDetail item={this.state.dishes.filter((item) => item.id === this.state.selectedDish)[0]} />
                <Footer />
            </div>
        );
    }
}

export default Main;
