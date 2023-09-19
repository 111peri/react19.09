
import React from 'react';

function MainPage({ age }) {
    if (age > 50) {
        return <ErrorComponent message="Ошибка: возраст больше 50" />;
    } else if (age < 18) {
        return <ErrorComponent message="Ошибка: возраст меньше 18" />;
    } else {
        return <SuccessComponent />;
    }
}

function SuccessComponent() {
    return <div>Success: Пользователь создан</div>;
}

function ErrorComponent({ message }) {
    return <div>Error: {message}</div>;
}

export default MainPage;
