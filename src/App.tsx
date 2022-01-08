import React from 'react';
import logo from './logo.svg';
import './App.css';
import List, { ToDoItem } from './list/List';

const items: ToDoItem[] = [
  { name: 'Grocery' },
  { name: 'Grocery' },
  { name: 'Grocery' },
  { name: 'Grocery' }
];

function App() {

  return (
    <div className="App">
      <List items={items}/>
      <h1>Testing</h1>
    </div>
  );
}

export default App;
