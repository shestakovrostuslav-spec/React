import { useState } from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

function SharedParent() {
    // Стан зберігається тут (піднято вгору)
    const [isEnabled, setIsEnabled] = useState(false);

    const handleToggle = () => {
        setIsEnabled((prev) => !prev);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Передаємо стан та колбек для зміни */}
            <ComponentA isEnabled={isEnabled} onToggle={handleToggle} />

            {/* Передаємо лише значення для відображення */}
            <ComponentB isEnabled={isEnabled} />
        </div>
    );
}

export default SharedParent;