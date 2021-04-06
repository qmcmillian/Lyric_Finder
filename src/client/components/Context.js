import React, { useState, useEffect } from "react";

export const Context = React.createContext();

export const ContextController = ({ children }) => {
  let initialState = {
  track_list: [
    {track: {trak_name: 'abc'}},
    {track: {trak_name: '123'}}
  ],
  heading: 'Top 10 Tracks'
  }

  const [state, setState] = useState(initialState);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}
