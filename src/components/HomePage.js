import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import AllDecks from './AllDecks';
import AllCards from './AllCards';
import CardsOwedContainer from './CardsOwedContainer';
import { withRouter } from 'react-router-dom';
import FlashcardApp from 'react-flashcard-app';
import NavBar from './NavBar';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      tlbox: [],
      amount: this.props.loggeduser.balance,
      email: this.props.loggeduser.email,
      username: this.props.loggeduser.username
    }
    console.log(this.props.loggeduser)

  }

  componentDidMount() {
    this.props.resetDeckData();
    this.props.resetCardsData();
    //console.log(this.props.loggeduser.email)
  }
  onChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
    console.log(event.target.files[0])

  }

  logout = () => {
    console.log('logout')
    this.props.logOut();
    this.props.me();
    this.props.history.push('/')
  }

  displaycard = (val) => {
    this.setState({ tlbox: val })
  }

  render() {

    return (
      
      <div className="container-fluid">

        {/* <nav className="navbar navbar-fixed-top">
          <Link className="btn btn-danger" to='/' onClick={this.logout}>Log out</Link>
          <Link className="btn btn-light" to='/create'>+</Link>
        </nav> */}
      <NavBar></NavBar>
        {/* <div className="row"> */}

        {/* <div className="colTL">
              <div className="TopRow">
                <table className="welcomeTable">
                  <tbody>
                    <tr>
                      <td className="welcomeTableText">
                        <h1>Welcome to , {this.props.loggeduser.firstName}!</h1>
                        Click here to make a new deck:
                            </td>
                      <td>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div> */}

        <center>
        <div className="colTR">
            <div className="TopRow">
              <h1 className="headingLabel">My Decks</h1>
            </div>
            <div className="TopRowTX">
              <div className="receiptHistory">
              <AllDecks loggeduser={this.props.loggeduser} cards={this.props.cards} fetchDeckData={this.props.fetchDeckData} resetDeckData={this.props.resetDeckData} fetchCardsData={this.props.fetchCardsData} resetCardsData={this.props.resetCardsData} data={this.props.deckdata} />
              </div>
            </div>
          </div>
          </center>
              {/* <h1 className="headingLabel">My Decks</h1>
              <br></br>
                <AllDecks loggeduser={this.props.loggeduser} cards={this.props.cards} fetchDeckData={this.props.fetchDeckData} resetDeckData={this.props.resetDeckData} fetchCardsData={this.props.fetchCardsData} resetCardsData={this.props.resetCardsData} data={this.props.deckdata} /> */}
        {/* </div> */}
      </div>
    )
  }
}

export default withRouter(HomePage);