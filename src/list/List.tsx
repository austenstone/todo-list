import React from 'react';
import './List.css';

export interface ToDoItem {
    name: string;
    description?: string;
    dueDate?: Date;
}

function List(items: ToDoItem[]) {
  return (
    <div className="List">
        {items.map((item) => <p>{item.name}</p>)}
    </div>
  );
}

export default List;
