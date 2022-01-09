import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List, { ToDoItem } from './list/List';
import NewItem from './new-item/NewItem';

const items: ToDoItem[] = [
  { name: 'Grocery' },
  { name: 'Grocery' },
  { name: 'Grocery' },
  { name: 'Grocery' }
];

function App() {
  const [items, setItems] = useState<ToDoItem[]>([])

  useEffect(() => {
    let todos = localStorage.getItem('todos') || '[]';
    setItems(JSON.parse(todos))
  }, [])

  const onAddItem = (newItem: ToDoItem) => {
    const newItems = [...items, newItem];
    setItems(newItems)
    localStorage.setItem('todos', JSON.stringify(newItems));
  }

  const onItemsChange = (items: ToDoItem[]) => {
    const newItems = [...items];
    setItems(newItems)
    localStorage.setItem('todos', JSON.stringify(newItems));
  }

  return (
    <div className="App">
      <List items={items} onItemsChange={onItemsChange}/>
      <NewItem item={{name: ''}} onAddItem={onAddItem}></NewItem>
    </div>
  );
}

export default App;
