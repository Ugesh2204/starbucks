import './App.scss';
import Header from '../src/components/Header/Header'
import {
  Routes,
  Route,
} from "react-router-dom";
 import Home from './Pages/Home'
import Menu from './Pages/Menu'

function App() {
  return (
    <>
      <Header/>
      <Routes>
       
       <Route  path='/' element = {<Home/>}/>
       <Route path='/menu' element = {<Menu/>}/>
   
      </Routes>
    </>
  );
}

export default App;
