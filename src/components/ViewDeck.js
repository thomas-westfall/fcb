import React, { Component } from 'react';
import NavBar from './NavBar';
import FlashcardApp from 'react-flashcard-app';
import Card from './Card'
import DrawButton from './DrawButton'
class ViewDeck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardlist: this.props.cards,
            value: "simplified",
            valueb: "english",
            decks: [],
            allcards: [],
            index: 0,
            currentCard: this.props.cards[0],
            frontn: 0,
            backn: 0,
            frontc: this.props.cards[0].cardSimplified,
            backc: this.props.cards[0].cardEnglish,
            new: true,
            displayed: this.props.cards[0].cardSimplified,
            displayedb: this.props.cards[0].cardEnglish,
            temp: this.props.cards[0].cardEnglish,
            flipped: false,
            cardsleft: this.props.cards.length
        }
        this.deckTest = this.deckTest.bind(this);
        this.updateCard = this.updateCard.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClickA = this.handleClickA.bind(this);
        this.handleClickB = this.handleClickB.bind(this);
        this.handleChangeB = this.handleChangeB.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
      handleChangeB(event) {
          console.log(this.state.valueb)
        this.setState({valueb: event.target.value});
      }
    
      handleClickA(event) {
        switch(this.state.value){
            case "simplified":
                this.setState({
                    displayed: this.props.cards[this.state.index].cardSimplified
                })
                break
            case "traditional":
                this.setState({
                    displayed: this.props.cards[this.state.index].cardTraditional
                })
                break
            case "english":
                this.setState({
                    displayed: this.props.cards[this.state.index].cardEnglish
                })
                break
            case "pinyin":
                this.setState({
                    displayed: this.props.cards[this.state.index].cardPinyin
                })
                break
          }
        event.preventDefault();
      }
      handleClickB(event) {
        switch(this.state.valueb){
            case "simplified":
                this.setState({
                    displayedb: this.props.cards[this.state.index].cardSimplified
                })
                break
            case "traditional":
                this.setState({
                    displayedb: this.props.cards[this.state.index].cardTraditional
                })
                break
            case "english":
                this.setState({
                    displayedb: this.props.cards[this.state.index].cardEnglish
                })
                break
            case "pinyin":
                this.setState({
                    displayedb: this.props.cards[this.state.index].cardPinyin
                })
                break
          }
        event.preventDefault();
      }

    handleClick(e){
        console.log(this.state.flipped)
        e.preventDefault();
        if(this.state.flipped){
            switch(this.state.value){
                case "simplified":
                    this.setState({
                        displayed: this.props.cards[this.state.index].cardSimplified
                    })
                    break
                case "traditional":
                    this.setState({
                        displayed: this.props.cards[this.state.index].cardTraditional
                    })
                    break
                case "english":
                    this.setState({
                        displayed: this.props.cards[this.state.index].cardEnglish
                    })
                    break
                case "pinyin":
                    this.setState({
                        displayed: this.props.cards[this.state.index].cardPinyin
                    })
                    break
              }
              this.setState({
                  flipped: false
              })
        }
        else{
            switch(this.state.valueb){
                case "simplified":
                    this.setState({
                        displayedb: this.props.cards[this.state.index].cardSimplified
                    })
                    break
                case "traditional":
                    this.setState({
                        displayedb: this.props.cards[this.state.index].cardTraditional
                    })
                    break
                case "english":
                    this.setState({
                        displayedb: this.props.cards[this.state.index].cardEnglish
                    })
                    break
                case "pinyin":
                    this.setState({
                        displayedb: this.props.cards[this.state.index].cardPinyin
                    })
                    break
              }
              this.setState({
                  flipped: true,
              })
        }
    //     }
    //     if(this.state.displayed == this.props.cards[this.state.index].cardEnglish){
    //     this.setState({
    //         displayed: this.props.cards[this.state.index].cardSimplified,
    //     })
    // }
    // else{
    //     this.setState({
    //         displayed: this.props.cards[this.state.index].cardEnglish,
    //     })
    // }
    // }
    }
    componentDidMount() {
        console.log(this.props, "nice!")
        this.setState({
        })
    }

    deckTest(){
        console.log(this.props)
    }

    // getRandomCard(cards){
    //     var randomIndex = Math.floor(Math.random() * cards.length);
    //     var card = cards[randomIndex];
    //     if(card === this.state.currentCard){
    //       this.getRandomCard(cards)
    //     }
    
    //     return(card);
    //   }
    
      updateCard(){
          console.log(this.state.index)
          this.setState({
              flipped: false
          })
        if(this.state.index + 2 >= this.props.cards.length){
            this.setState({
                index: -1,
                cardsleft: this.props.cards.length
            })
        }
        else{
            this.setState({
                cardsleft: this.state.cardsleft - 1
            })
        }
          switch(this.state.value){
            case "simplified":
                this.setState({
                    displayed: this.props.cards[++this.state.index].cardSimplified
                })
                break
            case "traditional":
                this.setState({
                    displayed: this.props.cards[++this.state.index].cardTraditional
                })
                break
            case "english":
                this.setState({
                    displayed: this.props.cards[++this.state.index].cardEnglish
                })
                break
            case "pinyin":
                this.setState({
                    displayed: this.props.cards[++this.state.index].cardPinyin
                })
                break
          }

        
          
      }

    render() {


        return (
        <div>
            <NavBar></NavBar>
            <center>
            <div className="colTR">
            <div className="TopRow">
            <h1 className="headingLabel">{this.props.deckdata[0].deckName}</h1>
            </div></div></center>
            <br></br>
            <div className="cardRow">
          {/* <Card eng={this.state.currentCard.cardEnglish}
            han={this.state.currentCard.cardSimplified}
            pin={this.state.currentCard.cardPinyin}
          /> */}
          {/* <Card front={this.props.cards[this.state.index].cardSimplified}
          back={this.props.cards[this.state.index].cardEnglish}
          new={this.state.new}
          /> */}
<center>
<table className="newTable">
    <tr>
        <td>
        <label>
          Front:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="simplified">Simplified</option>
            <option value="traditional">Traditional</option>
            <option value="english">English</option>
            <option value="pinyin">Pinyin</option>
          </select>
        </label>
          </td><td></td><td>
        <button onClick={this.handleClickA}>Submit</button>

        </td><td></td><td></td><td></td><td>

        <label>
          Back:
          <select value={this.state.valueb} onChange={this.handleChangeB}>
            <option value="simplified">Simplified</option>
            <option value="traditional">Traditional</option>
            <option value="english">English</option>
            <option value="pinyin">Pinyin</option>
          </select>
        </label>
        </td><td></td><td><button onClick={this.handleClickB}>Submit</button></td></tr>
        </table>
        </center>
    <div onClick={this.handleClick}className="card-container">
        <div className="card">
            <div className="front">
                {this.state.flipped ? <div className="eng">{this.state.displayedb}</div> : <div className="eng">{this.state.displayed}</div>}
            </div>
        </div>
    </div>
        </div>
        <div className="buttonRow">
          <DrawButton drawCard={this.updateCard}/>
          <br></br>
          <center>
          <h3>Cards left: {this.state.cardsleft}</h3>
          </center>
        </div>
        </div>
        )
    }
}

export default ViewDeck;