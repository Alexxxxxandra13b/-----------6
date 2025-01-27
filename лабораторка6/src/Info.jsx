import React, { useState } from 'react';

const Info = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div>
            <button onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? 'Скрыть описание' : 'Подробнее'}
            </button>
            {isExpanded && <p>Здесь подробное описание.</p>}
        </div>
    );
};

export default Info;