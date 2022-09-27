import { useEffect, useState } from 'react'

export default function useUserPerformance() {
    const [dataPerformance, setDataPerformance] = useState({})

    useEffect(() => {
        console.log('fetching data performance');
        fetch(import.meta.env.VITE_BASE_URL + '/user/' + import.meta.env.VITE_USER_ID + '/performance')
        .then(response => response.json())
        .then(response => setDataPerformance(response.data))
    }, [])

    return dataPerformance
}