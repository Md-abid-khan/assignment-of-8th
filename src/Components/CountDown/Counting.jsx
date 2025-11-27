import React, { useEffect, useState } from 'react';

const Counting = ({target}) => {
    const [count, setCount] = useState(0);
    
        useEffect(() => {
            if (count === target) {
                return
            }
            const timer = setInterval(() => {
                setCount((p) => p + 1);
            }, 10);
    
            return () => clearInterval(timer)
        }, [count, target])
    return (
        <div>
            {count}
        </div>
    );
};

export default Counting;