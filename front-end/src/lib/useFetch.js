import { useEffect, useState } from "react"
import axios from "axios"


export function useFetch(url, useToken) {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (
            async function () {
                try {
                    setLoading(true)
                    const response = await axios.get(url)
                    setData(response.data)
                } catch (err) {
                    setError(err)
                } finally {
                    setLoading(false)
                }
            }
        )()
    }, [url])

    return { data, error, loading }

}


export function usePost(url) {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const token = JSON.parse(sessionStorage.getItem("token"))


    const post = (postData) => {
        setLoading(loading)
        axios({
            url: url,
            method: "post",
            data: postData,
            headers: {
                token: token
            }

        }).then(response => {
            setLoading(false)
            setData(response)
        }).catch(err => {
            setLoading(false)
            // setError(err.response)
            if (err?.response?.data?.errors) {
                console.log(true)
            }

            console.log(err)
        })
    }


    return {
        data,
        error,
        loading,
        post
    }

}

