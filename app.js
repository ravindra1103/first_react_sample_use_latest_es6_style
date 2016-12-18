import React, { Component } from 'react';
import Header from './Header';

export default class App extends Component {
  constructor(props) {
    super (props);
  }
  render () {
    return (
      <div>
       <Header title="Test Basic React with latest Style"/>
      </div>
    );
  }
}
