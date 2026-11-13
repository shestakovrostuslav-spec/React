
function Header() {
    return (
        <header style={{ borderBottom: '2px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>
            <h2 style={{ margin: 0, color: '#333' }}>Панель керування режимом</h2>
            <p style={{ margin: '5px 0 0', fontSize: '14px', color: '#666' }}>
                Демонстрація патерну Lifting State Up
            </p>
        </header>
    );
}

export default Header;