import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import About from './AboutComponent';
import {connect} from 'react-redux';
const mapStateToProps=state=>{
  return(
  { dishes:state.dishes,
    comments:state.comments,  
    leaders:state.leaders,
    promotions:state.promotions
  }
  )

}
class Main extends Component {
    constructor(props){
      super(props);
    }
    render() {
      const HomePage=()=>{
        return(
          <Home dish={this.props.dishes.filter((dish)=>dish.featured)[0]}
          comment={this.props.comments.filter((com)=>com.featured)[0]}
          leader={this.props.leaders.filter((leader)=>leader.featured)[0]}
          promotion={this.props.promotions.filter((pro)=>pro.featured)[0]}/>
        )
      }
      const DishwithId=({match})=>{
        return(
          <DishDetail dish={this.props.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
          comments={this.props.comments.filter((com)=>com.dishId===parseInt(match.params.dishId,10))} />
        );
      }
      return(
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/aboutus" component={()=><About leaders={this.props.leaders}/>}/>
          <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes}/>}/>
          <Route path="/menu/:dishId" component={DishwithId} />
          <Route exact path="/contactus" component={Contact}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </div>
    );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
