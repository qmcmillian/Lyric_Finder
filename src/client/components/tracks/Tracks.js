import React, { Component } from 'react';
import { Context } from '../Context';
import Spinner from '../spinner/Spinner';


const Tracks = () => {
  return (
    <Context>
      {value => {
        const { track_list } = value;

        if (track_list === undefined || track_list.length === 0) {
          return <Spinner/>
        } else {
          return <h1>Tracks Loaded</h1>;
        }
      }}
    </Context>
  )
}

export default Tracks;
