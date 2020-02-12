import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Gift from "../components/Gift";
import { max_number } from "../helper/index";

class App extends Component {
  constructor() {
    super();

    this.state = { gifts: [] };
  }

  addGift = () => {
    const { gifts } = this.state;

    const ids = this.state.gifts.map(gift => gift.id);

    gifts.push({ id: max_number(ids) + 1 });

    this.setState({ gifts });
  };

  removeGift = id => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id);
    this.setState({ gifts });
  };

  render() {
    return (
      <>
        <h1>Gift Giver</h1>
        <div className="gift-list">
          {this.state.gifts.map(gift => {
            return (
              <Gift key={gift.id} gift={gift} removeGift={this.removeGift} />
            );
          })}
        </div>
        <Button className="btn-add" onClick={this.addGift}>
          Add Gift
        </Button>
      </>
    );
  }
}

export default App;
