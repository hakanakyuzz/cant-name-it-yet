import { useState, useEffect } from 'react';

const useToggleVisibility = (initialState) => {
    const [isVisible, setIsVisible] = useState(initialState)

    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    }

    useEffect(() => {
        isVisible ? document.body.style.overflow = 'hidden' : document.body.style.overflow = ''

        return () => {
            document.body.style.overflow = ''
        }
    }, [isVisible])

    return [isVisible, toggleVisibility]
}

export default useToggleVisibility