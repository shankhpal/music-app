import React, { useEffect } from "react";
import { Button} from "react-bootstrap";
import MainScreen from "../../utils/MainScreen";
import { Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../utils/Loading";
import ErrorMessage from "../../utils/ErrorMessage";
import './Album.css';
import { listAlbums } from "../../actions/albumActions";

function Albums({ search }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const albumList = useSelector((state) => state.listAlbums);
  const { loading, error, Albums } = albumList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

 
  useEffect(() => {
    if (!userInfo) {
        navigate("/");
    }
    dispatch(listAlbums());
  }, [dispatch, userInfo,navigate]);
  


  return (
  

    <MainScreen >
    
      <div className='row'>
        <div className='col-md-12 createAlbum'>
          <div className='m-3 p-3'>
            <h2 className='m-3 p-3 text-center text-light'><strong>{`Welcome Back ${userInfo && userInfo.name}...`}</strong></h2>
              <h3 className='m-3 p-3 text-center text-light'>GREAT TO SEE YOU</h3>
              <p className='m-3 p-3 text-center text-light'>A warm welcome and lots of good wishes on becoming part of our growing team. Congratulations and on behalf of all the members. We are all happy and excited about your inputs and contribution to our company.
              We love to form a team, work with enthusiastic, creative people, and have a great learning attitude. And hear that you fit the bill perfectly. It's great to have you with us. Warmest welcome!</p>
              <h4 className='m-3 p-3 text-center text-light'>Go ahead with your  Journey !</h4>
              <div className='m-3 text-center p-3'>
                <Link to="/create">
                  <Button variant='outline-success' >
                    Create new Album
                  </Button>
                </Link>
          </div>
          </div>
        </div>

      </div>
      
      <div className='row'>
     
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
     
      {loading && <Loading />}
     
      {Albums &&Albums.album &&
        Albums.album
          .filter((filteredAlbum) =>
            filteredAlbum.name.toLowerCase().includes(search.toLowerCase())
          )
          .reverse()
          .map((album) => (
            <div className="col-md-4 py-md-4 " data-aos="zoom-out" data-aos-delay="100">
              <div className="flip-card m-auto">
                <div className="flip-card-inner m-auto">
                  <div className="flip-card-front bg-light">
                    <h1 className="mt-5"><strong>{album.name}</strong></h1>
                    <p className="mt-4"> {album.createdBy}</p>

                  </div>
                  <div className="flip-card-back">

                    <div className="mt-5 p-5">
                      {console.log(album._id)}
                    <Link to={`/songs/${album._id}`}>
                      <Button variant='outline-success'>
                        View songs
                      </Button></Link>
                    <Link to={`/album/${album._id}`}>
                      <Button  className="mx-2" variant='outline-warning'>EDIT</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          ))}
        
      </div>
    </MainScreen>
  );
}

export default Albums;
