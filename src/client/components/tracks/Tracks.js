import React, { useContext } from 'react';
import { Context } from '../Context';
import Spinner from '../spinner/Spinner';

const Tracks = () => {
  const [state] = useContext(Context);
  const { track_list, heading } = state;

  return (
    <Context>
      {value => {
        const { track_list } = value[0];
          console.log('inside tracks',value[0])

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
