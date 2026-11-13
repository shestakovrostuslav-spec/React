import { useState, useEffect } from 'react';
import Header from './components/Header';
import Loader from './components/Loader';
import FilmCard from './components/FilmCard';
import './style.css';

const API_URL = 'https://ghibliapi.vercel.app/films';

function App() {
    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`Помилка HTTP: ${response.status}`);
                }

                const data = await response.json();
                setFilms(data);
            } catch (err) {
                setError(err.message || 'Не вдалося завантажити дані з сервера');
            } finally {
                setIsLoading(false);
            }
        };

        fetchFilms();
    }, []);

    return (
        <div className="app-container">
            <Header totalCount={films.length} />

            <main className="main-content">
                {isLoading && <Loader />}

                {error && (
                    <div className="error-message">
                        <h3>Виникла помилка при завантаженні</h3>
                        <p>{error}</p>
                    </div>
                )}

                {!isLoading && !error && (
                    <section className="films-grid">
                        {films.map((film) => (
                            <FilmCard key={film.id} film={film} />
                        ))}
                    </section>
                )}
            </main>
        </div>
    );
}

export default App;