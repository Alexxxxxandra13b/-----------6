import React, { useState } from 'react';

const ToggleSvet = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div>
            {isVisible && <div>Это блок, который можно скрывать!</div>}
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Скрыть' : 'Показать'}
            </button>
        </div>
    );
};

export default ToggleSvet;