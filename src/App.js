
import React, { useState } from 'react';
import './App.css';
import MainPage from './page/MainPage';

function App() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (parseInt(age) > 17) {
            console.log('Пользователь создан');
        } else {
            console.log('Отменено');
        }
        setName('');
        setAge('');
        setEmail('');
    };

    const handleReset = () => {
        console.log('Отменено');
        setName('');
        setAge('');
        setEmail('');
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Возраст"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Submit</button>
                <button type="button" onClick={handleReset}>Reset</button>
            </form>
            <MainPage age={parseInt(age)} />
        </div>
    );
}

export default App;
