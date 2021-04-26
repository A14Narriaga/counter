import { useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(0)
    const input = document.getElementById("valor") as HTMLInputElement

    const clear = () => {
        if(input != null) input.value = ''
    }
    const add = () => setCount(count + (input === null || input.value === '' ? 1 : +input.value))
    const sub = () => setCount(count - (input === null || input.value === '' ? 1 : +input.value))
    const reset = () => {
        setCount(0)
        clear()
    }

    return (
        <>
            <h1>Counter</h1>
            <p>{count}</p>
            <div className="number">
                <input id='valor' type="number" min="0" />
                <button onClick={clear}>CL</button>
            </div>
            <div className="btns">
                <button onClick={add}><i className="fas fa-plus"></i></button>
                <button onClick={sub}><i className="fas fa-minus"></i></button>
                <button onClick={reset}>Reset</button>
            </div>
        </>
    )
}

export default Counter