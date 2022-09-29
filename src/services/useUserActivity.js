import { useEffect, useState } from 'react'

/**
 * Custom hook to fetch activities information
 */
function useUserActivity() {
    const [dataActivity, setDataActivity] = useState({})

    useEffect(() => {
        fetch(import.meta.env.VITE_BASE_URL + '/user/' + import.meta.env.VITE_USER_ID + '/activity')
        .then(response => response.json())
        .then(response => setDataActivity(response.data))
    }, [])

    return dataActivity
}

export default useUserActivity