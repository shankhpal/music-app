import axios from "axios";
import { ADD_SONG_REQUEST,
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
        PLAY_SONG_FAIL, PLAY_SONG_REQUEST,
        PLAY_SONG_SUCCESS, } from "../utils/constants";

export const listAlbumSongs = (id) => async (dispatch) => {
    try {
      dispatch({
        type: ALBUM_SONGS_REQUEST,
  
      });
     
  
      const { data } = await axios.get(`/api/album/${id}/songs`);
  
      dispatch({
        type: ALBUM_SONGS_REQUEST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: ALBUM_SONGS_REQUEST_FAIL,
        payload: message,
      });
    }
  };
  export const listAlbums = () => async (dispatch) => {
    try {
      dispatch({
        type: ALBUM_LIST_REQUEST,
  
      });
  
      const { data } = await axios.get(`/api/album/listAlbums`);
  
      dispatch({
        type: ALBUM_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: ALBUM_LIST_FAIL,
        payload: message,
      });
    }
  };
  export const createAlbum = (name,createdBy) => async (dispatch) => {
    try {
      dispatch({
        type: ALBUM_CREATE_REQUEST,
  
      });
    
  
      const { data } = await axios.post(`/api/album/`,{name,createdBy});
  
      dispatch({
        type: ALBUM_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: ALBUM_CREATE_FAIL,
        payload: message,
      });
    }
  };

  export const addSong = (id,formData) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_SONG_REQUEST,
  
      });
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };
  
      const { data } = await axios.post(`/api/album/${id}/`,formData,config);
  
      dispatch({
        type: ADD_SONG_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: ALBUM_LIST_FAIL,
        payload: message,
      });
    }
  };
  export const  playSong= ({name}) => async (dispatch) => {
    try {
      dispatch({
        type: PLAY_SONG_REQUEST,
  
      });
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
     console.log(name)
      const { data } = await axios.get(`/api/album/song/${name}`);
      console.log(data)
      dispatch({
        type: PLAY_SONG_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type:PLAY_SONG_FAIL,
        payload: message,
      });
    }
  };