import { useEffect, useState } from "react";

export default function GradeManager(props) {
    const [notes, setNotes] = useState(props.initialNotes || []);
    const [newNote, setNewNote] = useState('');

    useEffect(() => {
        console.log('I m rendering 1 - GradeManager');
        return () => {
            console.log("I m unmounting - GradeManager");
        };
    }, []);

    useEffect(() => {
        console.log('I m rendering 2 - GradeManager');
        console.log(notes);
    }, [notes]);

    useEffect(() => {
        console.log('I m rendering 3 - GradeManager');
    });

    const addNote = () => {
        const note = parseFloat(newNote);
        if (note >= 0 && note <= 20) {
            setNotes([...notes, note]);
            setNewNote('');
        } else {
            alert("La note doit être comprise entre 0 et 20.");
        }
    };

    const removeNote = (index) => {
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
    };

    const average = notes.length > 0 ? (notes.reduce((a, b) => a + b, 0) / notes.length).toFixed(2) : 0;

    return (
        <>
            <h1>Gestionnaire de notes</h1>
            <ul>
                {notes.map((note, index) => (
                    <li key={index}>
                        {note} <button onClick={() => removeNote(index)}>Supprimer</button>
                    </li>
                ))}
            </ul>
            <input
                type="number"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Entrez une nouvelle note"
            />
            <button onClick={addNote}>Ajouter</button>
            <p>Moyenne : {average}</p>
        </>
    );
}