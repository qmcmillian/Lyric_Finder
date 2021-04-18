import React, { useState, useEffect } from "react";
import { getLyrics } from '../helpers/api_helpers';
import { Link } from 'react-router-dom';
import Spinner from '../components/spinner/Spinner';
import Moment from 'react-moment';

const Lyrics = (props) => {
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});

  const  trackId  = props.match.params.id;

  const notDefined =  track === undefined || lyrics === undefined;
  const empytyState = Object.keys(track).length === 0 || Object.keys(lyrics).length === 0;

  useEffect(() => {
    getLyrics(trackId)
    .then(res => {
      setLyrics(res[0].lyrics);
      setTrack(res[1].track);
    })
    .catch(error => {
      console.log(err)
    })
  }, []);

  if (notDefined || empytyState) {
    return <Spinner/>
  } else {
    return (
      <React.Fragment>
        <Link to='/' className="btn btn-dark btn-sm mb-4">Go Back</Link>
        <div className="card">
          <h5 className="card-header">
            {track.track_name} by <span className="text-secondary">{track.artist_name}</span>
          </h5>
        <div className="card-body">
          <p className="card-text">{lyrics.lyrics_body}</p>
        </div>
        </div>
        <ul className="list-group mt-3">
        <li className="list-group-item">
            <strong>Genre</strong>: {track.primary_genres.music_genre_list[0].music_genre.music_genre_name_extended}
          </li>
          <li className="list-group-item">
            <strong>Album</strong>: {track.album_name}
          </li>
          <li className="list-group-item">
            <strong>Explicit Content</strong>: {track.explicit === 1 ? 'Yes' : 'No'}
          </li>
        </ul>
      </React.Fragment>
    )
  }
}

export default Lyrics
