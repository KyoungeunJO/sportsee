import { useEffect, useState } from 'react'

/**
 * Custom hook to fetch average sessions activities
 */
function useUserAverageSessions() {
    const [dataAverageSessions, setDataAverageSessions] = useState({})

    useEffect(() => {
        fetch(import.meta.env.VITE_BASE_URL + '/user/' + import.meta.env.VITE_USER_ID + '/average-sessions')
        .then(response => response.json())
        .then(response => setDataAverageSessions(response.data))
    }, [])

    return dataAverageSessions
}

export default useUserAverageSessions