import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './components/todo/ToDoList';


function App() {
  return (
    <div className="App">
     <h1>Todo App</h1>
      <ToDoList/>
    </div>
  );
}

export default App;
