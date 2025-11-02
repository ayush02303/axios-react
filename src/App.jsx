
import { useEffect } from 'react'
import './App.css'
import Movie from './Pages/Movie'
import { getPost } from './api/PostApi'
import Posts from './Components/Posts'

function App() {

  // console.log( getPost())

  // const getData = async ()=>{
  //   const res = await getPost()
  //   console.log(res)
  // }

  // useEffect( ()=>{ 
  //     getData()
  // } , [])
  return (
    <>
   <Posts/>
    </>
  )
}

export default App
