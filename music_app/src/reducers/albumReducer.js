import {
    ADD_SONG_FAIL,
    ADD_SONG_REQUEST,
    ADD_SONG_SUCCESS,
    ALBUM_CREATE_FAIL,
    ALBUM_CREATE_REQUEST,
    ALBUM_CREATE_SUCCESS,
    ALBUM_LIST_FAIL,
    ALBUM_LIST_REQUEST,
    ALBUM_LIST_SUCCESS,
    ALBUM_SONGS_REQUEST,
    ALBUM_SONGS_REQUEST_FAIL,
    ALBUM_SONGS_REQUEST_SUCCESS,
    PLAY_SONG_FAIL,
    PLAY_SONG_REQUEST,
    PLAY_SONG_SUCCESS,
    } from "../utils/constants";

export const listAlbumSongsReducer = (state = { songs: [] }, action) => {
    switch (action.type) {
      case ALBUM_SONGS_REQUEST:
        return { loading: true };
      case ALBUM_SONGS_REQUEST_SUCCESS:
        return { loading: false, songs: action.payload };
      case ALBUM_SONGS_REQUEST_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  export const listAlbumsReducer = (state = { Albums: [] }, action) => {
    switch (action.type) {
      case ALBUM_LIST_REQUEST:
        return { loading: true };
      case ALBUM_LIST_SUCCESS:
        return { loading: false, Albums: action.payload };
      case ALBUM_LIST_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  export const albumCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case ALBUM_CREATE_REQUEST:
        return { loading: true };
      case ALBUM_CREATE_SUCCESS:
        return { loading: false, success: true };
      case ALBUM_CREATE_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  export const addSongReducer = (state = {}, action) => {
    switch (action.type) {
      case ADD_SONG_REQUEST:
        return { loading: true };
      case ADD_SONG_SUCCESS:
        return { loading: false, success: true };
      case ADD_SONG_FAIL:
        return { loading: false, success: false, error: action.payload };
  
      default:
        return state;
    }
  };
  export const playSongReducer = (state = {song:[]}, action) => {
    switch (action.type) {
      case PLAY_SONG_REQUEST:
        return { loading: true };
      case PLAY_SONG_SUCCESS:
        return { loading: false,song: action.payload, success: true };
      case PLAY_SONG_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
 