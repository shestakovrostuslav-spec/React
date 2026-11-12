import { useState } from 'react';
import OptionList from './OptionList';

function QuestionCard({ questionData, onAnswerSubmit }) {
    const [selected, setSelected] = useState('');

    const handleSubmit = () => {
        if (selected) {
            onAnswerSubmit(selected);
            setSelected(''); // очищуємо вибір для наступного питання
        }
    };

    return (
        <div className="question-card">
            <h2>{questionData.question}</h2>
            <OptionList
                options={questionData.options}
                selectedOption={selected}
                onSelect={setSelected}
            />
            <button className="btn" onClick={handleSubmit} disabled={!selected}>
                Відповісти
            </button>
        </div>
    );
}

export default QuestionCard;
