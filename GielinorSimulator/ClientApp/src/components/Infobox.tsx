import React, { Component } from 'react';

export class Infobox extends Component {
    constructor(props: {}) {
        super(props);
  }

  render() {
    return (
      <table>
            <tr><td colSpan={2}>Title</td></tr>
      </table>
    );
  }
}

export default Infobox;