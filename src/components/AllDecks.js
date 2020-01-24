import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AllDecks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            decks: [],
            allcards: []
        }
        this.fetchDeck = this.fetchDeck.bind(this);
    }

    componentDidMount() {
        console.log(this.props)
        this.setState({
            decks : this.props.loggeduser.decks
        })
    }
    fetchDeck(deckid){
        // this.props.fetchCardsData(deckid)
        // .then(result => 
        //     this.props.fetchDeckData(deckid)
        //     .then(res => console.log("done"))
        //     .catch((error) => {console.log(error)})
        //     )
        //     .catch((error) => {console.log(error)})
        this.props.fetchCardsData(deckid)
        this.props.fetchDeckData(deckid)
        this.setState({
            selected: true
        })
    }
    render() {
        return (
            <center>
            <div>
            <table className="DeckTable">
                <thead>
                    <tr>
                        <td>            {this.state.selected ?(<div><Link to="/viewdeck" >View</Link> </div>) : (<div></div>)
            }</td>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Size</td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.decks ? 
                    this.state.decks.map((eachDeck) => (
                        <tr key={eachDeck.id}>
                            {console.log(eachDeck)}
                          <td className="cView">
                          {/* <Link to="/viewdeck" onClick={() => this.fetchDeck(eachDeck.id)} className="bView">View</Link> */}
                          <button className="bView" onClick={() => this.fetchDeck(eachDeck.id)}>Select</button>
                          {/* <Link className="bView" to="/viewdeck" deckidb={eachDeck.id}>View</Link> */}
                          {/* <Link to={{ pathname: '/viewdeck/', state: { deckidc: eachDeck.id} }}>View</Link> */}
                          </td>
                          <td>
                            {eachDeck.id}
                          </td>
                          <td>
                              {eachDeck.deckName}
                          </td>
                          <td>
                              {eachDeck.deckSize} Cards
                          </td>
                        </tr>
                      )
                      )
                    :
                    "" }
                    <tr>

                    </tr>
                </tbody>
            </table>
            </div>
            </center>
        )
    }
}

export default AllDecks;