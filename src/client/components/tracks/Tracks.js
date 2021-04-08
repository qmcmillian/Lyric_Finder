import React, { Component } from 'react';
import { Context } from '../Context';

export class Tracks extends Component {
  render() {
    return (
      <Context>
        {value => {
          // console.log(value);
          return <h1>Tracks</h1>
        }}
      </Context>
    )
  }
}

export default Tracks;
