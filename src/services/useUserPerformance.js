import { useEffect, useState } from 'react'

/**
 * Custom hook to fetch performance data
 */
function useUserPerformance() {
    const [dataPerformance, setDataPerformance] = useState({})

    useEffect(() => {
        if (import.meta.env.VITE_USE_API == 'true') {
            fetch(import.meta.env.VITE_BASE_URL + '/user/' + import.meta.env.VITE_USER_ID + '/performance')
            .then(response => response.json())
            .then(response => setDataPerformance(response.data))
            .catch(error => setDataPerformance({error})
            )
        }
        else {
            import('../mockedData')
            .then(data => setDataPerformance(data.userPerformance))
        }
    }, [])

    return dataPerformance
}

export default  useUserPerformance