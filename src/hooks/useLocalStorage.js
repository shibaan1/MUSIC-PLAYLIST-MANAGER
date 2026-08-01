import { useState } from "react"

function useLocalStorage(key, initialVal) {
    const [state, setState] = useState(() => {
        const data = localStorage.getItem(key)
        return data ? JSON.parse(data) : initialVal
    })

    const setValue = (newVal) => {
        setState(newVal)

        localStorage.setItem(key, JSON.stringify(newVal))

    }

    return [state, setValue]
}

export default useLocalStorage