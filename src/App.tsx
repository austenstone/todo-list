import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './list/List';

function App() {
  items: ToDoItem[] = [
    { name: 'Grocery' },
    { name: 'Grocery' },
    { name: 'Grocery' },
    { name: 'Grocery' }
  ];

  return (
    <div className="App">
      <List items={items}/>
      <h1>Testing</h1>
    </div>
  );
}

export default App;
