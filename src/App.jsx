import Header from './components/Header';
import SharedParent from './components/SharedParent';

function App() {
    const appStyle = {
        fontFamily: 'Arial, sans-serif',
        maxWidth: '500px',
        margin: '40px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
    };

    return (
        <div style={appStyle}>
            <Header />
            <SharedParent />
        </div>
    );
}

export default App;