import axios from 'axios';

export const getTopTen = () => {
  let url = `https://cors.bridged.cc/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`;

  return axios.get(url)
    .then(response => {
      return response
    })
    .catch(error => {
      console.log(err)
    })
};

export const getTracks = (titleSearched) => {
  let url = `https://cors.bridged.cc/http://api.musixmatch.com/ws/1.1/track.search?q_track=${titleSearched}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`;

  return axios.get(url)
  .then(response => {
    return response
  })
  .catch(error => {
    console.log(err)
  })
};

export const getLyrics = (trackId) => {
  let request1 = axios.get(`https://cors.bridged.cc/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=${process.env.REACT_APP_MM_KEY}`);
  let request2 = axios.get(`https://cors.bridged.cc/http://api.musixmatch.com/ws/1.1/track.get?track_id=${trackId}&apikey=${process.env.REACT_APP_MM_KEY}`);

  return axios.all([request1, request2])

  .then(axios.spread((res1, res2) => {
    let result = [res1.data.message.body, res2.data.message.body];
    return result;
  }))
  .catch(error => {
    console.log(err)
  })
};