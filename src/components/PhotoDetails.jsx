import { useParams, useNavigate } from 'react-router-dom';
import { photosData } from '../data/photo';

const PhotoDetails = () => {
    const { id } = useParams(); // Отримуємо :id з URL
    const navigate = useNavigate();

    // Шукаємо фото за ID
    const photo = photosData.find((item) => item.id === id);

    // Якщо користувач ввів неіснуючий ID (наприклад, /gallery/999)
    if (!photo) {
        return (
            <div className="page">
                <h2>Фотографію не знайдено</h2>
                <p>Роботи з ідентифікатором #{id} не існує в портфоліо.</p>
                <button onClick={() => navigate('/gallery')} className="btn">
                    Повернутися до галереї
                </button>
            </div>
        );
    }

    return (
        <div className="page photo-details">
            <button onClick={() => navigate(-1)} className="btn-back">
                ← Назад до галереї
            </button>

            <div className="details-container">
                <img src={photo.imageUrl} alt={photo.title} className="details-img" />
                <div className="details-text">
                    <span className="badge">{photo.category}</span>
                    <h2>{photo.title}</h2>
                    <p className="description">{photo.description}</p>
                    <div className="tech-specs">
                        <strong>Обладнання:</strong> {photo.camera}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoDetails;