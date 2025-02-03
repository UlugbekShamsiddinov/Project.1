import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Players from './pages/Players';
import Clubs from './pages/Clubs';
import Error404 from './pages/Error404';
import PlayerById from './pages/PlayerById';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
      <Route path='/' element={<Players/>}/>
      <Route path='/clubs' element={<Clubs/>}/>
      <Route path='/player/:id' element={<PlayerById/>}/>
      <Route path='*' element={<Error404/>} />

      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
