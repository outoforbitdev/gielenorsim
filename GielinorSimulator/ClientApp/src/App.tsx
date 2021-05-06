import React, { Component } from 'react';
import { Infobox } from './Components/Infobox';
import { EncyclopediaPage } from './Components/EncyclopediaPage';
import { EntityType } from './Model/Entity';

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
          <EncyclopediaPage entityType={EntityType.Kingdom} name="Misthalin" expanded={false}  />
    );
  }
}
