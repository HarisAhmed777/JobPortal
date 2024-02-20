import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Searchjobs from './components/sidebar/searchjobs/searchjobs';
import Specificfield from './components/specific field/specificfield';
import Displayjob from './components/displayjob/displayjob';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/specific field/Login/login';
import UserDashboard from './components/dashboard/userdashborad';
import DisplayProfile from './components/displayprofile.jsx';
import Displayspecific from './components/displayjob/displayspecific';
import { useContext, useEffect } from 'react';
import {Context} from './index.js';
import axios from 'axios';
import Register from './components/specific field/Login/register';
import Logout from './components/specific field/Login/logout';
import Applyjob from './components/applyjobs/applyjob';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <div>
              <Header />
              <div className='d-flex'>
                <Sidebar />
                <div>
                  <Searchjobs />
                  <Specificfield />
                </div>
              </div>
            </div>
          } />
          <Route path='/jobs' element={<Displayjob />} />
          <Route path='/login' element={<Login />} />
          <Route path='/:id' element={<UserDashboard />} /> {/* Updated path */}
          <Route path='/profile' element={<DisplayProfile />} /> {/* Updated path */}
          <Route path='/displayspecific/:_id' element={<Displayspecific/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/logout' element={<Logout/>} />
          <Route path = '/apply/:_id' element ={<Applyjob/>}/>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
