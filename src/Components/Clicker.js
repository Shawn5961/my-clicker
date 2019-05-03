import React from 'react';
import "../Styles.css"

class Clicker extends React.Component {
    constructor(props){
    super(props);
    var incrementAmount = 1
    var incrementSecondsAmount = 0

    this.state = {
      coins: 0,
      coinsToAdd: incrementAmount,
      coinsPerSecondToAdd: incrementSecondsAmount
    };

    this.getGreeting = this.getGreeting.bind(this);
    this.incrementCoinsPerSecond = this.incrementCoinsPerSecond.bind(this);
    this.incrementCoins = this.incrementCoins.bind(this);
    this.addCoin = this.addCoin.bind(this);
  }

  getGreeting(){
    return "Welcome to Clicker Game"
  }

  incrementCoins(coinsToIncrement) {
    this.setState(state => ({
      coinsToAdd: state.coinsToAdd + coinsToIncrement
    }));
  }

  incrementCoinsPerSecond(coinsPerSecondToIncrement) {
    this.setState(state => ({
      coinsPerSecondToAdd: state.coinsPerSecondToAdd + coinsPerSecondToIncrement
    }));
  }

  addCoin() {
    this.setState(state => ({
      coins: state.coins + state.coinsToAdd
    }));
  }

  addCoinsPerSecond() {
    this.setState(state => ({
      coins: state.coins + state.coinsToAdd
    }));
  }

  addCoinInterval() {
    let that = this;
    for (let i = 0; i < this.state.coinsPerSecondToAdd; i++){
      this.addCoinsPerSecond();
    }
    setTimeout(() => {that.addCoinInterval(); }, 1000)
  };

  componentDidMount() {
    this.addCoinInterval()
  };



  render() {
    return (
      <div>
        <h1>{this.getGreeting()}</h1>
        <h1>You have {this.state.coins} coins.</h1>
        <br />
        <button onClick={this.addCoin}>
          Add {this.state.coinsToAdd} coins
        </button>

        <button onClick={() => this.incrementCoins(1)}>
          Increase coins to add by 1
        </button>

        <button onClick={() => this.incrementCoins(10)}>
          Increase coins to add by 10
        </button>

        <button onClick={() => this.incrementCoinsPerSecond(1)}>
          Get +1 coin per second
        </button>  

        <button onClick={() => this.incrementCoinsPerSecond(10)}>
          Get +10 coins per second
        </button>  

        <br />
          Coins to add = {this.state.coinsToAdd}
        <br />
          Coins per second = {this.state.coinsPerSecondToAdd}
      </div>
    );
  }
}


export default Clicker;