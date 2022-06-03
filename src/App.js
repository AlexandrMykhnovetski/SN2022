import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogues from './components/Dialogues/Dialogues';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const App = (props) => {
  return ( 
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
            <Routes>
                <Route path='/profile/*' element= {<Profile/>}/>
                <Route path='/dialogues/*' element={<Dialogues/>}/>
                <Route path='/news' element={<Dialogues/>}/>  /* need to create news element in future */
                <Route path='/music' element={<Dialogues/>}/>  /* need to create music element in future */
                <Route path='/settings' element={<Dialogues/>}/>  /* need to create settings element in future */
           </Routes>
        </div>
      </div>
    </BrowserRouter>)
   }




      export default App;
