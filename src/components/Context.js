import React, { useState, useEffect } from "react";
import { getTopTen } from '../helpers/api_helpers';

export const Context = React.createContext();

export const ContextController = ({ children }) => {
  let initialState = {
  track_list: [],
  heading: ''
  }

  const [state, setState] = useState(initialState);

  useEffect(() => {
    getTopTen()
    .then(res => {
      const topTen = res.data.message.body.track_list;
      setState({
        track_list: topTen,
        heading: "Top 10 Tracks"
      });
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}
