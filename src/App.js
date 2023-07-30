import React from "react";
import './App.css'
import {Routes,Route} from 'react-router-dom'

import Home from './pages/Home'
import Rooms from "./pages/Rooms";
import SingleRoomPage from "./pages/SingleRoomPage";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";


const App = () => {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/rooms/' element={<Rooms />} />
        <Route exact path='/rooms/:slug' element={<SingleRoomPage />} />
        <Route path='/*' element={<ErrorPage/>}/>
      </Routes>
    </>
  );
};

export default App;
