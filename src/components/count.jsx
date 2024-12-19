import { useState } from "react";

const Counter = () => {
    const [count,setCount] = useState(0);

    const handleIncrement = (event) => {
        setCount(count+1);
    }
    const handleDecrement = (event) => {
        setCount(count-1);
    }
    return (
        <>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>INCREMENT</button>
        <button onClick={handleDecrement}>DECREMENT</button>
        </>
    )
}
export default Counter