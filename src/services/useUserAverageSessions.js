import { useEffect, useState } from 'react'

export default function useUserAverageSessions() {
    const [dataAverageSessions, setDataAverageSessions] = useState({})

    useEffect(() => {
        console.log('fetching data average sessions');
        fetch(import.meta.env.VITE_BASE_URL + '/user/' + import.meta.env.VITE_USER_ID + '/average-sessions')
        .then(response => response.json())
        .then(response => setDataAverageSessions(response.data))
    }, [])

    return dataAverageSessions
}