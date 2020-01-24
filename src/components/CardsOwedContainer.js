import React, { Component } from 'react';
import './CardsOwedContainer.css';
import PayButton from './PayButton';

class CardsOwedContainer extends Component {
    state = {
        cards: []
    }
    componentDidMount() {
        this.setState({
            cards: this.props.loggeduser.cards,
            username: this.props.loggeduser.username,
            balance: this.props.loggeduser.balance
        })
    }
    render() {
        console.log(this.state.cards)
        return (
            <table className="DeckTable">
                <thead>
                    <tr>
                        <td>Item ID</td>
                        <td>Item Name</td>
                        <td>Price</td>
                        <td>Deck ID</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.cards ?
                        this.state.cards.map((card) => (
                            <tr key={card.id}>
                                <td>
                                    {card.id}
                                </td>
                                <td>
                                    {card.itemName}
                                </td>
                                <td>
                                    ${card.price}
                                </td>
                                <td>
                                    {card.deckId}
                                </td>
                                <td>
                                    {card.paid ?
                                        "Paid!"
                                        :
                                        <></>
                                    }
                                </td>
                            </tr>
                        )
                        )
                        :
                        ""}
                    <tr>

                    </tr>
                </tbody>
            </table>
        )
    }
}

export default CardsOwedContainer;