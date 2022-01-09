import React, { useState } from 'react';
import './List.css';

export interface ToDoItem {
    name: string;
    description?: string;
    dueDate?: Date;
    complete?: boolean;
    completeDate?: Date;
}

function List(props: { items: ToDoItem[], onItemsChange: (items: ToDoItem[]) => void }) {
    const onComplete = (e: any, item: ToDoItem) => {
        item.complete = e.target.checked
        props.onItemsChange(props.items);
    }
    return (
        <div className="list">
            {props.items?.map((item, i) => <div className='todo-item' key={i}>
                <div className='completed'>
                    <input type="checkbox" checked={item.complete} onChange={(e) => onComplete(e, item)}></input>
                </div>
                <div className='content flex-fill'>
                    <span className='name'>{item.name}</span>
                    <p>{item.description}</p>
                </div>
            </div>)}
        </div>
    )
}


export default List;
