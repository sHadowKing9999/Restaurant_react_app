import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
import {DISHES} from '../shared/dishes';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import DishDetail from './DishDetailComponent';
import About from './AboutComponent';
class Main extends Component {
    constructor(props){
      super(props);
      this.state={
        dishes:DISHES,
        comments:COMMENTS,
        leaders:LEADERS,
        promotions:PROMOTIONS
      };
    }
    render() {
      const HomePage=()=>{
        return(
          <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
          comment={this.state.comments.filter((com)=>com.featured)[0]}
          leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
          promotion={this.state.promotions.filter((pro)=>pro.featured)[0]}/>
        )
      }
      const DishwithId=({match})=>{
        return(
          <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
          comments={this.state.comments.filter((com)=>com.dishId===parseInt(match.params.dishId,10))} />
        );
      }
      return(
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/aboutus" component={()=><About leaders={this.state.leaders}/>}/>
          <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>
          <Route path="/menu/:dishId" component={DishwithId} />
          <Route exact path="/contactus" component={Contact}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </div>
    );
    }
}

export default Main;
