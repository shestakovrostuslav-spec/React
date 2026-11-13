
function Header({ totalCount }) {
    return (
        <header className="app-header">
            <h1>Фільмографія Studio Ghibli</h1>
            <p>Колекція анімаційних шедеврів Хаяо Міядзакі та Ісао Такахати</p>
            {totalCount > 0 && (
                <span className="badge">Знайдено фільмів: {totalCount}</span>
            )}
        </header>
    );
}

export default Header;