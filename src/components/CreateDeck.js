import React, { Component } from 'react';
import './CreateDeck.css'
import axios from "axios";
import { Link } from 'react-router-dom';
import NavBar from './NavBar'
class CreateDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '', 
      simplified: [], 
      traditional: [],
      translated: [], 
      pinyin: [],
      name: '',
      deckcreated: 0,
      deckfinished: 0,

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeB = this.handleChangeB.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.makeCards = this.makeCards.bind(this);
    this.fetchDeck = this.fetchDeck.bind(this);
  }
componentDidMount(){
  console.log(this.props)
}
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleChangeB(event) {
    this.setState({name: event.target.value});
  }
  handleSubmit(event) {
    let newdeck = 0;
    event.preventDefault();
    // axios.post(`https://cors-anywhere.herokuapp.com/https://fcbe123.herokuapp.com/api/decks`, {
      axios.post(`http://localhost:5000/api/decks`, {
      userId: 1,
      deckName: this.state.name,
      deckSize: this.state.translated.length,
    })
      .then(response => {
        console.log(response)
        newdeck = response.data
        this.setState({deckcreated: newdeck})
        let promises = [];
        let tempt = []
        for (let i = 0; i < this.state.translated.length; i++) {
        //   promises.push(axios.post('https://cors-anywhere.herokuapp.com/https://fcbe123.herokuapp.com/api/cards/pinyin',{q:this.state.simplified[i]}))
        // }
        promises.push(axios.post('http://localhost:5000/api/cards/pinyin',{q:this.state.simplified[i]}))
      }
        Promise.all(promises)
          .then(responses => {
            console.log(responses)
            for(let i = 0; i < responses.length; i++){
              
               tempt.push(responses[i].data.text);
            }
            console.log(tempt)
            this.makeCards(newdeck, tempt)
          }
      )
      .catch(error => {
        console.log(error.response)
      })
      }
      )
    }

  makeCards(newdeckid, deckpinyin){
    let promises = [];
    for (let i = 0; i < this.state.simplified.length; i++) {
      // promises.push(axios.post('https://cors-anywhere.herokuapp.com/https://fcbe123.herokuapp.com/api/cards',{
        promises.push(axios.post('http://localhost:5000/api/cards',{
        cardEnglish:this.state.translated[i],
        cardPinyin:deckpinyin[i],
        cardSimplified:this.state.simplified[i],
        cardTraditional:this.state.traditional[i],
        deckId: newdeckid,
        userId: this.props.loggeduser.id
      }))
    }
    Promise.all(promises)
      .then(responses => {
        this.fetchDeck(newdeckid)
        console.log(responses)
        this.setState({deckfinished: this.state.deckcreated})
      }
        )
  .catch(error => {
    console.log(error.response)
  })
  }

  fetchDeck(deckid){
    this.props.fetchCardsData(deckid)
    this.props.fetchDeckData(deckid)
}

  handleClick(e){
    console.log(this.props.loggeduser.id)
    e.preventDefault();
    //console.log(this.state.value.split(/ |\n/).join("."))
    let temp = this.state.value.split(/ |\n/)
    let tempt = []
    temp = temp.filter(function (el) {
      return el != "";
    });
    this.setState({simplified: temp})

    let promises = [];
    let promisesb = [];
for (let i = 0; i < temp.length; i++) {
  // promises.push(axios.post('https://fcbe123.herokuapp.com/api/decks/translate',{q:temp[i], key:process.env.TRANSLATE}))
  promises.push(axios.post('https://cors-anywhere.herokuapp.com/https://fcbe123.herokuapp.com/api/decks/translate',{q:temp[i], key:process.env.TRANSLATE}))
  promisesb.push(axios.post('https://cors-anywhere.herokuapp.com/https://fcbe123.herokuapp.com/api/decks/translatetrad',{q:temp[i], key:process.env.TRANSLATE}))
  //  promises.push(axios.post('http://localhost:5000/api/decks/translate',{q:temp[i],key:process.env.TRANSLATE}))
  //  promisesb.push(axios.post('http://localhost:5000/api/decks/translatetrad',{q:temp[i], key:process.env.TRANSLATE}))
}
Promise.all(promises)
  .then(responses => {
    for(let i = 0; i < responses.length; i++){
      tempt.push(responses[i].data.data.translations[0].translatedText);
    }
    console.log(tempt)
  this.setState({translated: tempt})
  // let newobj = {deckId = }

  }
    )
    let temptr = [];
    Promise.all(promisesb)
    .then(responses => {
      
      console.log(responses)
      for(let i = 0; i < responses.length; i++){
        temptr.push(responses[i].data.data.translations[0].translatedText);
      }
      console.log(temptr)
    this.setState({traditional: temptr})
    // let newobj = {deckId = }
  
    }
      )
    
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div>
        
        {this.state.translated != '' ? (<div>
          <center>
          <form>
          <label>Enter the deck name:</label>
        <input type="text" onChange={this.handleChangeB}></input>
        <button onClick={this.handleSubmit}>Create Deck</button>
        </form>
        </center>
        </div>
        ):(<div>
          <center>
          <label>
          Enter the words here: <br></br>
          <textarea class ="inputw" type="text" value={this.state.value} onChange={this.handleChange} />
        </label><br></br>
        <button className="btn btn-success"onClick={this.handleClick}>Submit</button>
        <Link className="btn btn-danger" to='/home'>Cancel</Link>
        </center>
        </div>)}
        </div>
        <div>
          {this.state.deckfinished ? (
            <center>
          <div>
            Deck created! <Link className="btn btn-success" to="/viewdeck">View deck</Link>
          </div></center>):(<></>)}
        </div>
        </div>
    );
  }
}

export default CreateDeck;
