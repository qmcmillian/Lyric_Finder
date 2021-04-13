import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { Context} from '../components/Context';

const Search = () => {
  const [state, setState] = useContext(Context);
  const [userInput, setUserInput] = useState("");
  const [trackTitle, setTrackTitle] = useState("");


  const findTrack = event => {
    event.preventDefault();
    setTrackTitle(userInput);
  };

  const onChange = event => {
    setUserInput(event.target.value);
  };

  return (
    <div className="card card-body mb-4 p-4">
      <h1 className="display-4 text-center">
        <i className="fas fa-music" /> Search For A Song
      </h1>
      <p className="lead text-center">Get the lyrics for any song</p>
      <form onSubmit={findTrack}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Song title..."
            name="userInput"
            value={userInput}
            onChange={onChange}
          />
        </div>
        <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">
          Get Track Lyrics
        </button>
      </form>
    </div>
  )
}

export default Search;
