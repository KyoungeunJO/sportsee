import { useEffect, useState } from 'react'

export default function useUserInfos() {
    const [data, setData] = useState({})

    useEffect(() => {
        console.log('fetching data');
        fetch(import.meta.env.VITE_BASE_URL + '/user/' + import.meta.env.VITE_USER_ID)
        .then(response => response.json())
        .then(response => setData(response.data))
    }, [])

    return data
}