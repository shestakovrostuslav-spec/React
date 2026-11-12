function QuizSummary({ score, totalQuestions, onRestart }) {
    return (
        <div className="summary-box">
            <h2>Опитування завершено!</h2>
            <p>Ви правильно відповіли на <strong>{score}</strong> з <strong>{totalQuestions}</strong> питань.</p>
            <button className="btn" onClick={onRestart}>Пройти знову</button>
        </div>
    );
}

export default QuizSummary;