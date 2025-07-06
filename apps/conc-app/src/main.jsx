import './stack.css'
import App from './App.jsx'
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';


var start = new Date().getTime();
const container = document.getElementById('container');
const root = ReactDOM.createRoot(container);


root.render(<App elapsed={new Date().getTime() - start} />);
