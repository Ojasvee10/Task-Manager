import { useState, useEffect } from 'react';

export default function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/api/tasks")
            .then(res => res.text())
            .then(data => setMessage(data));
    }, []);

    return (
        <div style={{ fontFamily: 'Arial', padding: 20 }}>
            <h1>Task Manager Frontend Working!</h1>
            <p>Backend says: {message}</p>
        </div>
    );
}
