import React, { useState } from 'react';

const Button = () => {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count +1);
        // console.log('Clicked');
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}


export default Button;
