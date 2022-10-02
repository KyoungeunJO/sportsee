import { useEffect, useState } from 'react'

/**
 * Custom hook to fetch user's data
 */
function useUserInfos() {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(import.meta.env.VITE_BASE_URL + '/user/' + import.meta.env.VITE_USER_ID)
        .then(response => response.json())
        .then(response => setData(response.data))
        .catch(error => setData({error})
        )
    }, [])

    return data
}

export default useUserInfos