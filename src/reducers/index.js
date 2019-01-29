import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "song 1", duration: "1:05" },
    { title: "song 2", duration: "2:05" },
    { title: "song 3", duration: "3:05" },
    { title: "song 4", duration: "4:05" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

// keys of combineReducers are the keys to the state object
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
