import React from 'react';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: 0
    };
  }

  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

export default Hello;