import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './Components/Layout';
import { Home } from './Components/Home';
import { FetchData } from './Components/FetchData';
import { Counter } from './Components/Counter';
import { Infobox } from './Components/Infobox';
import { EncyclopediaPage } from './Components/EncyclopediaPage';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
          <EncyclopediaPage />
      //<Layout>
      //  <Route exact path='/' component={Home} />
      //  <Route path='/counter' component={Counter} />
      //      <Route path='/fetch-data' component={FetchData} />
      //      <Infobox />
      //</Layout>
    );
  }
}
