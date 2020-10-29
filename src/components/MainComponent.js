import Menu from './MenuComponent'
import Home from './HomeComponent'
import { Component } from 'react';
import { DISHES } from '../shared/dishes'
import DishDetail from './DishDetailComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import { Switch, Route, Redirect } from 'react-router-dom'
class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dishes: DISHES,
        }
    }

    render() {

        const HomePage = () => {
            return (
                <Home />
            )
        }
        return (

            <div className="App">
                <Header />

                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch>
                {/* <Menu dishes={this.state.dishes}
                    onClick={(itemId) => this.handleClick(itemId)} /> */}
                {/* <DishDetail item={this.state.dishes.filter((item) => item.id === this.state.selectedDish)[0]} /> */}
                <Footer />
            </div>
        );
    }  
}

export default Main;
