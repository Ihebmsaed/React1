import { useEffect, useState } from "react";

export default function TodoList(props) {
    const [tasks, setTasks] = useState(props.initialTasks || []);
    const [newTask, setNewTask] = useState('');
    const [priority, setPriority] = useState('Moyenne');

    useEffect(() => {
        console.log('I m rendering 1 - TodoList');
        return () => {
            console.log("I m unmounting - TodoList");
        };
    }, []);

    useEffect(() => {
        console.log('I m rendering 2 - TodoList');
        console.log(tasks);
    }, [tasks]);

    useEffect(() => {
        console.log('I m rendering 3 - TodoList');
    });

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, { name: newTask, priority, completed: false }]);
            setNewTask('');
        }
    };

    const toggleTask = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const removeTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.completed).length;

    return (
        <>
            <h1>Todo List avec Priorités</h1>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task.name} - {task.priority} {task.completed ? 'Terminé' : 'Non terminé'}{' '}
                        <button onClick={() => toggleTask(index)}>Toggle</button>
                        <button onClick={() => removeTask(index)}>Supprimer</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Nom de la tâche"
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="Haute">Haute</option>
                <option value="Moyenne">Moyenne</option>
                <option value="Basse">Basse</option>
            </select>
            <button onClick={addTask}>Ajouter</button>
            <p>Total des tâches : {totalTasks}</p>
            <p>Tâches terminées : {completedTasks}</p>
        </>
    );
}