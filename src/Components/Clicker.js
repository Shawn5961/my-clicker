import React from 'react';
import "../Styles.css"

class Clicker extends React.Component {
  constructor() {
    super();
    this.state = {
      coins: 0,
      coinsPerSecond: 1000
    };
    
    this.addCoin = this.addCoin.bind(this);
    this.addCoinsPerSecond = this.addCoinsPerSecond.bind(this);
  }
  
  addCoin() {
    this.setState(state => ({
      coins: state.coins + 1
    }));
  }

  addCoinsPerSecond() {
    this.setState(state => ({
      coinsPerSecond: state.coinsPerSecond / 2
    }));
  }

  addCoinInterval() {
    let that = this;
    this.addCoin();
    setTimeout(() => {that.addCoinInterval(); }, this.state.coinsPerSecond)
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
          Get +1 coin
        </button>
        <button onClick={this.addCoinsPerSecond}>
          Get +1 coin per second
        </button>  
      </div>
    );
  }
}

export default Clicker;