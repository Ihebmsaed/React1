import { useEffect, useState } from "react";

export default function ListManager(props) {
    const [items, setItems] = useState(props.initialItems || []);
    const [newItem, setNewItem] = useState('');

    useEffect(() => {
        console.log('I m rendering 1 - ListManager');
        return () => {
            console.log("I m unmounting - ListManager");
        };
    }, []);

    useEffect(() => {
        console.log('I m rendering 2 - ListManager');
        console.log(items);
    }, [items]);

    useEffect(() => {
        console.log('I m rendering 3 - ListManager');
    });

    const addItem = () => {
        if (newItem.trim()) {
            setItems([...items, newItem]);
            setNewItem('');
        }
    };

    const removeItem = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    return (
        <>
            <h1>Liste :</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item} <button onClick={() => removeItem(index)}>Supprimer</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder={props.placeholder || "Entrez un nouvel élément"}
            />
            <button onClick={addItem}>Ajouter</button>
        </>
    );
}
