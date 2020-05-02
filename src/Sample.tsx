import React, { useState, useCallback } from "react";

const Sample = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <button onClick={handleClick}>click here!</button>
            <p>count: {count}</p>
        </div>
    );
};
export default Sample;
