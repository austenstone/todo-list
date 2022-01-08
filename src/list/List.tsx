import React from 'react';
import './List.css';

export interface ToDoItem {
    name: string;
    description?: string;
    dueDate?: Date;
}

class List extends React.Component<{ items: ToDoItem[], newItem: ToDoItem }> {
    render() {
        return (
            <div className="List">
                <div id="items">

                </div>
                <div id="list-controls">
                    <input type="text" value={this.props.newItem.name}></input>
                </div>
                {this.props.items.map((item, i) => <p key={i}>{item.name}</p>)}
            </div>
        )
    }
}


export default List;
