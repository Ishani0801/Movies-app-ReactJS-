import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from "./screens/home/Home.js";
import { BrowserRouter } from "react-router-dom";



ReactDOM.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>
  ,
  document.getElementById('root')
);


