import React from 'react';
import "../Styles.css"

class Clicker extends React.Component {
  constructor() {
    super();
    this.state = {
      coins: 0,
      coinsPerSecond: 1000,
      coinsToAdd: 1
    };
    
    this.coinsToAdd = this.coinsToAdd.bind(this);
    this.addCoinsPerSecond = this.addCoinsPerSecond.bind(this);
    this.addCoin = this.addCoin.bind(this);
  }
  
  coinsToAdd() {
    this.setState(state => ({
      coinsToAdd: state.coinsToAdd + 1
    }));
  }

  addCoinsPerSecond() {
    this.setState(state => ({
      coinsPerSecond: state.coinsPerSecond / 2
    }));
  }

  addCoin() {
    this.setState(state => ({
      coins: this.coins + this.coinsToAdd
    }));
  }

  coinClick() {
    let that = this;
    {that.addCoin();}
  };

//  addCoinInterval() {
//    let that = this;
//    this.addCoin();
//    setTimeout(() => {that.addCoinInterval(); }, this.state.coinsPerSecond)
//  };

//  componentDidMount() {
//    this.addCoinInterval()
//  };

  render() {
    return (
      <div>
        You have {this.state.coins} coins.
        <br />
        <button onClick={this.coinClick}>
          Add {this.state.coinsToAdd} coins
        </button>

        <button onClick={this.coinsToAdd}>
          Get +1 per click
        </button>

        <button onClick={this.addCoinsPerSecond}>
          Get +1 coin per second
        </button>  

        <br />
          Coins to add = {this.state.coinsToAdd}
      </div>
    );
  }
}

export default Clicker;