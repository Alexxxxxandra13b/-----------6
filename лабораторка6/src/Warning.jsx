import React, { useState } from 'react';

const Warning = () => {
    const [isWarning, setIsWarning] = useState(true);

    return (
        <div>
            {isWarning && <div style={{ color: 'red' }}>Это предупреждение!</div>}
            <button onClick={() => setIsWarning(!isWarning)}>
                Переключить уведомление
            </button>
        </div>
    );
};

export default Warning;