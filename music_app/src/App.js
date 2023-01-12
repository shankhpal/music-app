
import { BrowserRouter as Router,Routes ,Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginScreen from "./components/loginScreen/LoginScreen";
import RegisterScreen from "./components/RegisterScreen/RegisterScreen";
import { useState } from "react";
import Home from "./components/LandingPage/Home";
import CreateAlbum from "./components/Album/CreateAblum";
import Albums from "./components/Album/Albums";
import AddSongs from "./components/Album/AddSongs";
import Songs from "./components/Album/Songs";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header  className='mb-5' setSearch={(s) => setSearch(s)}/>
      <div  className='mt-5 pt-2'>
      <Routes>
        <Route  path="/" element={<Home/>} />
          <Route exact path='/create' element={<CreateAlbum/>}/>
         <Route exact path='/albums' element={<Albums search={search}/>}/>
         <Route exact path='/album/:id' element={<AddSongs/>} />
         <Route exact path='/songs/:id' element={<Songs search={search}/>}/>
         <Route exact path="/login" element={<LoginScreen/>} />
         <Route eaxact path="/register" element={<RegisterScreen/>} /> 

      </Routes>
      </div>

      <Footer />

    </Router>
  );
}

export default App;
