import React, { Component } from 'react';
import './App.css';
import { Redirect, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import {registerUserThunk} from "./store/utilities/users";
import {logInThunk, logOutThunk} from "./store/utilities/loggeduser";
import {fetchDeckDataThunk, resetDeckDataThunk} from "./store/utilities/deckdata";
import {fetchCardsDataThunk, resetCardsDataThunk} from "./store/utilities/cards";

//PAGE IMPORTS
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import AssignCards from './components/AssignCards';
import AccessDenied from './components/AccessDenied';
import CreateDeck from './components/CreateDeck';
import ViewDeck from './components/ViewDeck';
// import allDecks from './components/AllDecks';
class RoutesView extends Component {

  componentDidMount() {
  }

  // addStudent = (student) => {
  //   this.props.addStudent(student);
  // }

  render() {
    const { isLoggedIn } = this.props;
    console.log('RENDERING')
    const HomeComponent = () => (<HomePage cards={this.props.cards} me={this.props.me} logOut={this.props.logOut} loggeduser={this.props.loggeduser} fetchDeckData={this.props.fetchDeckData} resetDeckData={this.props.resetDeckData} fetchCardsData={this.props.fetchCardsData} resetCardsData={this.props.resetCardsData} data={this.props.deckdata}/>);
    const LoginComponent = () => (<LoginPage logIn={this.props.logIn} isLoggedIn={this.props.isLoggedIn} error={this.props.error}/>);
    const RegisterComponent = () => (<RegisterPage users={this.props.users} registerUser={this.props.registerUser} registerError={this.props.registerError} registerSuccess={this.props.registerSuccess}/>);
    const AssignCardsComponent = () => (<AssignCards loggeduser={this.props.loggeduser} resetDeckData={this.props.resetDeckData} data={this.props.deckdata}/>);
    const CreateDeckComponent = () => (<CreateDeck loggeduser={this.props.loggeduser} cards={this.props.cards} fetchDeckData={this.props.fetchDeckData} resetDeckData={this.props.resetDeckData} fetchCardsData={this.props.fetchCardsData} resetCardsData={this.props.resetCardsData} deckdata={this.props.deckdata}/>);
    const ViewDeckComponent = () => (<ViewDeck loggeduser={this.props.loggeduser} cards={this.props.cards} fetchDeckData={this.props.fetchDeckData} resetDeckData={this.props.resetDeckData} fetchCardsData={this.props.fetchCardsData} resetCardsData={this.props.resetCardsData} deckdata={this.props.deckdata}/>);
    // const AllDecksComponent = () => (<AllDecks loggeduser={this.props.loggeduser} cards={this.props.cards} fetchDeckData={this.props.fetchDeckData} resetDeckData={this.props.resetDeckData} fetchCardsData={this.props.fetchCardsData} resetCardsData={this.props.resetCardsData} data={this.props.deckdata}/>);

    const DeniedComponent = () => (<AccessDenied />)
    // const AllCampusesComponent = () => (<AllCampuses students={this.props.students} campuses={this.props.campuses} removeCampus={this.removeCampus} addCampus={this.addCampus} grabCampus={this.grabCampus}/>);
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={LoginComponent} />
          <Route exact path="/login" render={LoginComponent} />
          <Route exact path="/register" render={RegisterComponent} />
          {isLoggedIn && (
          <Switch>
            <Route exact path="/home" render={HomeComponent} />
            <Route exact path="/create" render={CreateDeckComponent} />
            <Route exact path="/cards" render={AssignCardsComponent} />
            <Route exact path="/viewdeck" render={ViewDeckComponent} />
          </Switch>
          )}
          <Route component={DeniedComponent} />
          {/* <Route exact path="/allcampuses" render={AllCampusesComponent}/> */}
        </Switch>
      </Router>
    )
  }
}

const mapState = (state) => {
  return {
    users: state.users,
    loggeduser: state.loggeduser,
    error: state.loggeduser.response,
    deckdata: state.deckdata,
    registerSuccess: state.users.success,
    registerError: state.users.response,
    isLoggedIn: !!state.loggeduser.id,
    cards: state.cards
  }
}

const mapDispatch = (dispatch) => {
  return {
    registerUser: (user) => dispatch(registerUserThunk(user)),
    logIn: (user) => dispatch(logInThunk(user)),
    logOut: () => dispatch(logOutThunk()),
    fetchDeckData: (filename) => dispatch(fetchDeckDataThunk(filename)),
    resetDeckData: () => dispatch(resetDeckDataThunk()),
    fetchCardsData: (cards) => dispatch(fetchCardsDataThunk(cards)),
    resetCardsData: () => dispatch(resetCardsDataThunk())
  }
}
export default connect(mapState, mapDispatch)(RoutesView);