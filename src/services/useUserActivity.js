import { useEffect, useState } from 'react'

export default function useUserActivity() {
    const [dataActivity, setDataActivity] = useState({})

    useEffect(() => {
        console.log('fetching data activity');
        fetch(import.meta.env.VITE_BASE_URL + '/user/' + import.meta.env.VITE_USER_ID + '/activity')
        .then(response => response.json())
        .then(response => setDataActivity(response.data))
    }, [])

    return dataActivity
}