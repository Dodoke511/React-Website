import { useState } from 'react';
import './Styles.css'

function Counter (){
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2 style={{marginTop: "1.5rem"}}className='margin'>Counter</h2>
            <p>Interactive counter</p>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)} style ={{marginLeft: "0.5rem"}}>Decrease</button>

            <div style={{marginTop: "1rem"}}>
            <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    );
}

export default Counter;