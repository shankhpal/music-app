import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import MainScreen from "../../utils/MainScreen";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../utils/Loading";
import { listAlbumSongs } from "../../actions/albumActions";
import Card from "../../utils/Card";
 import music from "../../utils/images/music.jpg"

function Songs({search }) {
  const dispatch = useDispatch();
  const {id} = useParams()
  const listSongs = useSelector((state) => state.listAlbumSongs);
  const { loading, songs } = listSongs;
 
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
 const navigate =useNavigate

  useEffect(() => {
    dispatch(listAlbumSongs(id));
    if (!userInfo) {
        navigate("/login");
    }
  }, [
    dispatch,
    navigate,
    userInfo,
    id,
  ]);


  return (
    <div>
    <MainScreen>
      {console.log(songs)}
      <h2 className="heading">
      Welcome Back {userInfo && userInfo.name}..
      </h2>
      <Link to={`/album/${id}`}>
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg" variant="warning">
          Add Songs
        </Button>
      </Link>
     <div className="row">
      {loading&& <Loading />}
      {songs && songs.songs &&
        songs.songs
          .filter((filteredSong) =>
          filteredSong.name.toLowerCase().includes(search.toLowerCase())
          )
          .reverse()
          .map((song) => (
            <div key={song._id} className=' col-md-3'>
                    <div className='m-2'>
                        <Card img={music} title={song.name.toUpperCase()} id ={song._id} type={'song'} name={song.name} >
                        </ Card>
                    </div>
                </div>
          ))}
          {songs && !songs.songs&& !loading &&userInfo&&
          <h4>Sorry {userInfo.name}...No song added to this album </h4>
             
          }

    </div>
    </MainScreen>
    </div>
  );
}

export default Songs;

