import { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import QuizSummary from './components/QuizSummary';
import './style.css';

const quizData = [
    {
        id: 1,
        question: 'Що таке React?',
        options: [
            'Бібліотека JavaScript для створення інтерфейсів',
            'Мова програмування',
            'Система керування базами даних',
            'Операційна система'
        ],
        correct: 'Бібліотека JavaScript для створення інтерфейсів'
    },
    {
        id: 2,
        question: 'Який хук використовується для збереження стану в функціональних компонентах?',
        options: ['useEffect', 'useState', 'useContext', 'useReducer'],
        correct: 'useState'
    },
    {
        id: 3,
        question: 'Як передаються дані від батьківського компонента до дочірнього?',
        options: ['Через State', 'Через Props', 'Через Redux', 'Через LocalStorage'],
        correct: 'Через Props'
    }
];

function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const handleAnswerSubmit = (selectedOption) => {
        // Перевіряємо правильність відповіді
        if (selectedOption === quizData[currentIndex].correct) {
            setScore(score + 1);
        }

        // Переходимо до наступного питання або завершуємо тест
        const nextIndex = currentIndex + 1;
        if (nextIndex < quizData.length) {
            setCurrentIndex(nextIndex);
        } else {
            setIsFinished(true);
        }
    };

    const handleRestart = () => {
        setCurrentIndex(0);
        setScore(0);
        setIsFinished(false);
    };

    return (
        <div className="app-container">
            <h1>Інтерактивне опитування</h1>
            {!isFinished ? (
                <QuestionCard
                    questionData={quizData[currentIndex]}
                    onAnswerSubmit={handleAnswerSubmit}
                />
            ) : (
                <QuizSummary
                    score={score}
                    totalQuestions={quizData.length}
                    onRestart={handleRestart}
                />
            )}
        </div>
    );
}

export default App;