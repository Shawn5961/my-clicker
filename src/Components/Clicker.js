import React from 'react';
import "../Styles.css"

class Clicker extends React.Component {
  constructor() {
    super();
    this.state = {
      coins: 0,
      coinsPerSecond: 0,
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
      coinsPerSecond: state.coinsPerSecond + 1
    }));
  }

  addCoin() {
    this.setState(state => ({
      coins: state.coins + state.coinsToAdd
    }));
  }

  addCoinInterval() {
    let that = this;
    for (let i = 0; i < this.state.coinsPerSecond; i++){
      this.addCoin();
    }
    setTimeout(() => {that.addCoinInterval(); }, 1000)
  };

  componentDidMount() {
    this.addCoinInterval()
  };

  render() {
    return (
      <div>
        You have {this.state.coins} coins.
        <br />
        <button onClick={this.addCoin}>
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
        <br />
          Coins per second = {this.state.coinsPerSecond}
      </div>
    );
  }
}

export default Clicker;