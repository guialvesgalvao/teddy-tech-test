import { useState } from "react"

export default function Button2 (){

    const [count, setCount] = useState(0)

    return (
        <button onClick={() => setCount(count + 1)}>
            Parabéns Guilherme, você conseguiu! Contador: {count}
        </button>
    )
}