import './fiber.css'
import App from './App.jsx'
import React from 'react';
import ReactDOM from 'react-dom';


var start = new Date().getTime();
const container = document.getElementById('container');


function update() {
  ReactDOM.render(
    <App elapsed={new Date().getTime() - start} />,
    container
  );
  requestAnimationFrame(update);
}

requestAnimationFrame(update);
