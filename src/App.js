import React, { useEffect } from 'react';
import './App.scss';
import Header from '../src/components/Header/Header'
import {Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Home from './Pages/Home'
import Menu from './Pages/Menu'

function App() {

  let navigate = useNavigate();
  
  useEffect(() => {
    navigate("/");
  }, [])


  return (
    <>
      <Header/>
      <Routes>
       
       <Route  path='/' element = {<Home/>} exact/>
       <Route path='/menu' element = {<Menu/>}/>
       
      </Routes>
    </>
  );
}

export default App;
