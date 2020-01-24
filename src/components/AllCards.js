import React, { Component } from 'react';
import './AllDecks.css';

class AllCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards : [],
        }
    }

    componentDidMount() {
        this.setState({
            cards : this.props.cards
        })
    }
    render() {
        return (
            <table className="DeckTable">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Item Name</td>
                        <td>Price</td>
                        <td>Paid</td>
                        <td>Owner</td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.cards[0] ? 
                    this.state.cards.map((eachCard) => (
                        <tr key={eachCard.id}>
                          <td>
                            {eachCard.id}
                          </td>
                          <td>
                            {eachCard.itemName}
                          </td>
                          <td>
                            ${eachCard.price}
                          </td>
                          <td>
                              {eachCard.paid ? "Yes" : "No"}
                          </td>
                          <td>
                              {eachCard.user.username}
                          </td>
                          {console.log(eachCard, "each one")}
                        </tr>
                      )
                      )
                    :
                    "" }
                    <tr>

                    </tr>
                </tbody>
            </table>
        )
    }
}

export default AllCards;