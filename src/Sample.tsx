import React, { useState } from "react";

const Sample = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>click here!</button>
            <p>count: {count}</p>
        </div>
    );
};
export default Sample;
