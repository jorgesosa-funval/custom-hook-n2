import { useEffect, useState } from "react"
import { fetchData } from "../utilis/fetchData"
export default function useData(url) {
    const [data, setData] = useState()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            fetchData(url)
                .then((rs) => setData(rs))
                .catch((error) => setError(error.message))
                .finally(() => setLoading(false))
        }, 3000)

    }, [url])

    return {
        data,
        error,
        loading
    }
}
