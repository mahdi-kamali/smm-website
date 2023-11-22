import { useEffect, useState } from "react"
import axios from "axios"
import { API } from "./envAccess"




const token = JSON.parse(sessionStorage.getItem("token"))


export function useFetch(url) {

    const [data, setData] = useState([])
    const [error, setError] = useState(undefined)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (
            async function () {
                try {
                    setLoading(true)
                    const response = await axios.get(url, {
                        method: "get",
                        headers: {
                            "token": token
                        }
                    })
                    setData(response.data)
                } catch (err) {
                    setError(err)
                } finally {
                    setLoading(false)
                }
            }
        )()
    }, [url])

    return [data, error, loading]

}


export function usePost(url) {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)


    const post = async (postData) => {
        setLoading(true)
        setError(null)

        await setTimeout(async () => {
            await axios({
                url: url,
                method: "post",
                data: postData,
                headers: {
                    token: token
                }

            }).then(response => {
                setLoading(false)
                setData(response)
                return response
            }).catch(err => {
                setLoading(false)
                if (err?.response?.data?.errors) {
                    const temp = Object.entries(err?.response?.data?.errors).map(item => {
                        return item[1].message
                    })
                    setError(temp)
                }

            })
        }, 2000)
    }


    return [
        data,
        error,
        loading,
        post
    ]

}

export async function post(url, postData) {

    return await axios({
        method: "post",
        url: url,
        headers: {
            token: token
        },
        data: postData
    }).then(response => {
        return response
    }).catch(err => {
       
        throw err
    })

}

