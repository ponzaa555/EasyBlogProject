import useSwr from "swr"


const baseURL="http://localhost:3000/"
// const fetcher = (...args) => fetch(...args).then(res => res.json())
const response = (...args) => fetch(...args).then(res => res.json())

export default function fetcher(endpoint){
    const {data,error} = useSwr(`${baseURL}${endpoint}`,response)

    return{
        data:data,
        isLoading:!error && !data,
        isError:error 
    }
}