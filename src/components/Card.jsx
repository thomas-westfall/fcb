import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayed: this.props.front
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        if(this.state.displayed == this.props.front){
        this.setState({
            displayed: this.props.back,
            new: false,
        })
    }
    else{
        this.setState({
            displayed: this.props.front,
            new: false,
        })
    }
    }
    render() {
    return (
    <div onClick={this.handleClick}className="card-container">
        <div className="card">
            <div className="front">
                <div className="eng">{this.state.displayed}</div>
            </div>
            {/* <div className="front back">
                <div className="han">{this.props.han}</div>
                <div className="pin">{this.props.pin}</div>
            </div> */}
        </div>
    </div>
        )
}
}

export default Card;
