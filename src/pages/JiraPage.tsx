import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

interface Item {
    id: number,
    item: string
}


let nextId = 0;


const JiraPage = () => {

    const [input,setInput] = useState('')
    const [items,setItems] = useState<Item[]>([]);

    useEffect(() => {

    });


    const handleAddItem = () => {
        setItems([
            {id: nextId++,item: input},
            ...items 
        ])
    }

    const handleDeleteItem = (itemId: number) => {
        setItems(items.filter(a => a.id !== itemId))                
    }


    return (
        <div>
            <h1>Items</h1>

            <input 
                type="text" 
                onChange={e => setInput(e.target.value)}
                value={input}
                placeholder="Enter an Item"
            />

            <button
                onClick={handleAddItem}>
                Add
            </button>

            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.item}
                        <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>

        </div>
    )
}


export default JiraPage;