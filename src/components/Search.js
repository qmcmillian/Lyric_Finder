import React, { useState, useEffect, useContext } from "react";
import { Context } from '../components/Context';
import { getTracks } from '../helpers/api_helpers';

const Search = () => {
  const [state, setState] = useContext(Context);
  const [userInput, setUserInput] = useState("");
  const [trackTitle, setTrackTitle] = useState("");

  const findTrack = () => {
    getTracks(trackTitle)
    .then(res => {
      let track_list = res.data.message.body.track_list;
      setState({ track_list: track_list, heading: "Search Results" });
    })
    .catch(err => console.log(err));
  };

  const handleSubmit = event => {
    event.preventDefault();
    setTrackTitle(userInput);
    findTrack();
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
      <form onSubmit={handleSubmit}>
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
