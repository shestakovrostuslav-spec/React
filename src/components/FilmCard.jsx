
function FilmCard({ film }) {
    return (
        <article className="film-card">
            {film.image && (
                <img
                    src={film.image}
                    alt={film.title}
                    className="film-poster"
                    loading="lazy"
                />
            )}
            <div className="film-content">
                <div className="film-meta">
                    <span className="release-year">{film.release_date}</span>
                    <span className="director">Реж. {film.director}</span>
                </div>
                <h2 className="film-title">{film.title}</h2>
                <p className="film-original-title">{film.original_title}</p>
                <p className="film-description">{film.description}</p>
            </div>
        </article>
    );
}

export default FilmCard;