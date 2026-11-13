import { Link } from 'react-router-dom';
import { photosData } from '../data/photo';

const Gallery = () => {
    return (
        <div className="page">
            <h2>Галерея робіт</h2>
            <p>Оберіть фотографію, щоб дізнатися деталі зйомки та параметри техніки:</p>

            <div className="gallery-grid">
                {photosData.map((photo) => (
                    <div key={photo.id} className="photo-card">
                        <img src={photo.imageUrl} alt={photo.title} />
                        <div className="photo-card-info">
                            <span className="badge">{photo.category}</span>
                            <h3>{photo.title}</h3>
                            <Link to={`/gallery/${photo.id}`} className="btn-small">
                                Детальніше →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;