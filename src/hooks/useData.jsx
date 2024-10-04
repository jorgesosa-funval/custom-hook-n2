import { useEffect, useState } from "react"
import { fetchData } from "../utilis/fetchData"
import axios from "axios"
import { useQuery } from '@tanstack/react-query'

export default function useData(url, key) {
    const base = `https://www.thecocktaildb.com/api/json/v1/1/${url}`

    const getData = async () => {
        const rs = await axios.get(base)
        return rs;
    }

    const { data, isLoading: loading, isError: error } = useQuery({
        queryKey: [key],
        queryFn: getData,
        
    })

    // useEffect(() => {
    //     setLoading(true);
    //     const base = `https://www.thecocktaildb.com/api/json/v1/1/${url}`

    //     axios.get(base)
    //         .then(rs => setData(rs.data))
    //         .catch((error) => setError(error))
    //         .finally(() => setLoading(false))


    //     /*  setTimeout(() => {
    //          fetchData(url)
    //              .then((rs) => setData(rs))
    //              .catch((error) => setError(error.message))
    //              .finally(() => setLoading(false))
    //      }, 3000) */

    // }, [url])

    return {
        data,
        error,
        loading
    }
}
