import React, { Component } from 'react';
import { Encyclopedia } from './Components/Encyclopedia';

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
          <Encyclopedia />
    );
  }
}
