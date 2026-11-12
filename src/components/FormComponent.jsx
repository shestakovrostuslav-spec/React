import { useState } from 'react';
import './style.css';

function BookForm() {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        genre: 'Фантастика',
        year: ''
    });

    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Очищаємо помилку при введенні користувача
        if (error) setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Базова валідація
        if (!formData.title.trim() || !formData.author.trim() || !formData.year) {
            setError('Будь ласка, заповніть усі обов’язкові поля!');
            return;
        }

        if (Number(formData.year) < 1000 || Number(formData.year) > 2026) {
            setError('Введіть коректний рік видання (між 1000 та 2026 роками).');
            return;
        }

        // Зберігаємо дані в успішний стан для виведення на екран
        setSuccessMessage({ ...formData });
        console.Hоlog ? null : console.log('Додано книгу:', formData);

        // Очищення форми
        setFormData({
            title: '',
            author: '',
            genre: 'Фантастика',
            year: ''
        });
        setError('');
    };

    return (
        <div className="form-container">
            <h2>Додавання книги до бібліотеки</h2>

            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Назва книги:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Наприклад: Кобзар"
                    />
                </div>

                <div className="form-group">
                    <label>Автор:</label>
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        placeholder="Наприклад: Тарас Шевченко"
                    />
                </div>

                <div className="form-group">
                    <label>Жанр:</label>
                    <select
                        name="genre"
                        value={formData.genre}
                        onChange={handleChange}
                    >
                        <option value="Фантастика">Фантастика</option>
                        <option value="Детектив">Детектив</option>
                        <option value="Наукова література">Наукова література</option>
                        <option value="Роман">Роман</option>
                        <option value="Поезія">Поезія</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Рік видання:</label>
                    <input
                        type="number"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        placeholder="2024"
                    />
                </div>

                <button type="submit" className="submit-btn">Додати книгу</button>
            </form>

            {successMessage && (
                <div className="success-card">
                    <h3>Книгу успішно додано!</h3>
                    <p><strong>Назва:</strong> {successMessage.title}</p>
                    <p><strong>Автор:</strong> {successMessage.author}</p>
                    <p><strong>Жанр:</strong> {successMessage.genre}</p>
                    <p><strong>Рік:</strong> {successMessage.year}</p>
                </div>
            )}
        </div>
    );
}

export default BookForm;