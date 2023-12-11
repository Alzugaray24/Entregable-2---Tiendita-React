import React from 'react'
import { useState } from 'react'

const useCounter = (initialValue, stock) => {

    const [ count, setCount ] = useState(initialValue)

    const increment = () => {
        count < stock && setCount(count + 1)
    }
    const decrement = () => {
        count > initialValue && setCount(count - 1)
    }

    return {count, increment, decrement}
}

export default useCounter
