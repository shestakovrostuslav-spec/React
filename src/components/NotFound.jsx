import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="page not-found">
            <h1>404</h1>
            <h2>Сторінку не знайдено</h2>
            <p>Схоже, ви перейшли за невірним посиланням або цю сторінку було видалено.</p>
            <Link to="/" className="btn">На головну</Link>
        </div>
    );
};

export default NotFound;