

function ComponentB({ isEnabled }) {
    const indicatorBoxStyle = {
        padding: '15px',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: isEnabled ? '#c3e6cb' : '#f5c6cb',
        backgroundColor: isEnabled ? '#d4edda' : '#f8d7da',
        color: isEnabled ? '#155724' : '#721c24',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    };

    const dotStyle = {
        height: '14px',
        width: '14px',
        borderRadius: '50%',
        backgroundColor: isEnabled ? '#28a745' : '#dc3545',
        display: 'inline-block',
        marginRight: '8px'
    };

    return (
        <div style={indicatorBoxStyle}>
            <div>
                <strong>Компонент B</strong>
                <div style={{ fontSize: '13px', opacity: 0.8 }}>Індикатор стану</div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                <span style={dotStyle}></span>
                {isEnabled ? 'РЕЖИМ АКТИВОВАНО' : 'РЕЖИМ ВИМКНЕНО'}
            </div>
        </div>
    );
}

export default ComponentB;