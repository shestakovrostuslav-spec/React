function OptionList({ options, selectedOption, onSelect }) {
    return (
        <div className="options-container">
            {options.map((option, index) => (
                <label key={index} className="option-item">
                    <input
                        type="radio"
                        name="quizOption"
                        value={option}
                        checked={selectedOption === option}
                        onChange={() => onSelect(option)}
                    />
                    {option}
                </label>
            ))}
        </div>
    );
}

export default OptionList;