import React, { useState } from 'react';

import Card from '../card/card.component';

const UseStateExample = () => {
  const [name, setName] = useState('Tyler');
  const [address, setAddress] = useState('Orange County ');

  return (
    <Card>
      <h1> {name} </h1>
      <h1> {address} </h1>
      <button onClick={() => setName('Brody')}>Set Name to Brody</button>
      <button onClick={() => setAddress('Canada')}>Set Address</button>
    </Card>
  );
};

export class StateClassComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'Yihua',
      address: 'Canada'
    };
  }

  render() {
    return (
      <Card>
        <h1> {this.state.name} </h1>
        <button onClick={this.setState({ name: 'Andrei' })}>
          Set Name to Andrei
        </button>
        <button onClick={this.setState({ address: 'Amsterdam' })}>
          Set Address
        </button>
      </Card>
    );
  }
}

export default UseStateExample;
