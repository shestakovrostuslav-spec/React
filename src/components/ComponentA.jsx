
function ComponentA({ isEnabled, onToggle }) {
    const boxStyle = {
        padding: '15px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        border: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    };

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '6px',
        border: 'none',
        backgroundColor: isEnabled ? '#dc3545' : '#28a745',
        color: '#fff',
        fontWeight: 'bold'
    };

    return (
        <div style={boxStyle}>
            <div>
                <strong>Компонент A</strong>
                <div style={{ fontSize: '13px', color: '#555' }}>Перемикач режиму</div>
            </div>

            <button onClick={onToggle} style={buttonStyle}>
                {isEnabled ? 'Вимкнути' : 'Ввімкнути'}
            </button>
        </div>
    );
}

export default ComponentA;