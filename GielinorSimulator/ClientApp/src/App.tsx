import React, { Component } from 'react';
import { Infobox } from './Components/Infobox';
import { EncyclopediaPage } from './Components/EncyclopediaPage';

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
          <EncyclopediaPage />
    );
  }
}
