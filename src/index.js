import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import ToDoContainer from './Components/ToDoContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDoContainer />
  </React.StrictMode>,
);
