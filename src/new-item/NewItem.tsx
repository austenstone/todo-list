import React, { useState } from 'react';
import { ToDoItem } from '../list/List';

function NewItem(props: { item: ToDoItem, onAddItem?: (item: ToDoItem) => void}) {
    const [item, setItem] = useState<ToDoItem>(props.item)

    const handleInput = (e: any) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e: any) => {
        if (props.onAddItem) props.onAddItem(item);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Name' name="name" value={item.name} onChange={handleInput}></input>
            <input type="text" placeholder='Description' name="description" value={item.description} onChange={handleInput}></input>
            <button type="submit" value="Submit">Submit</button>
        </form>
    )
}

export default NewItem;
