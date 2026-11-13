import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="page home-page">
            <h1>Олександр Коваленко — Професійний фотограф</h1>
            <p className="subtitle">
                Зупиняю миті, які залишаються в пам’яті назавжди. Спеціалізуюся на портретній, пейзажній та репортажній зйомці.
            </p>
            <div className="hero-actions">
                <Link to="/gallery" className="btn">Переглянути роботи</Link>
                <Link to="/contact" className="btn btn-outline">Замовити зйомку</Link>
            </div>
        </div>
    );
};

export default Home;