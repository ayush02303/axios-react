import axios from "axios"

const api = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com"
}) 

export const getPost = ()=>{
    return api.get("/posts")
}

// delete function 

export const deletePost = (id)=>{
    return api.delete(`posts/${id}`)
}
//  post function 

export const postData = ( post )=>{
    return api.post("/posts",post)
}