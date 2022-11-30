import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
    userLoginReducer,
    userRegisterReducer,
  } from "./reducers/userReducer";
import {
    listAlbumSongsReducer,
    listAlbumsReducer,
    albumCreateReducer,
    addSongReducer,
    playSongReducer

} from './reducers/albumReducer'
const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    listAlbumSongs:listAlbumSongsReducer,
    listAlbums:listAlbumsReducer,
    albumCreate:albumCreateReducer,
    addSong:addSongReducer,
    playSong: playSongReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;