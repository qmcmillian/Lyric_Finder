import React, { useState, useEffect } from "react";
import axios from 'axios';

export const Context = React.createContext();

export const ContextController = ({ children }) => {
  let initialState = {
  track_list: [],
  heading: ''
  }

  const [state, setState] = useState(initialState);

  useEffect(() => {
    axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
    .then(res => {
      const topTen = res.data.message.body.track_list;
      setState({
        track_list: topTen,
        heading: "Top 10 Tracks"
      });
    })
    .catch(err => console.log(err));
  });

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}
