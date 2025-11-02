import React, { useState } from 'react'
import { getPost } from '../api/PostApi'
import { useEffect} from 'react'


const Posts = () => {

       const [ data , setData] = useState([])


      const getData = async ()=>{
        const res = await getPost()
        console.log(res.data)
        setData(res.data)
      }
    
      useEffect( ()=>{ 
          getData()
      } , [])

  return (
    <>
    <section>
        <ul>
            {
                data.map( ( currEle)=>{
                    const { id , body , title } = currEle
                    return <li key={id}>
                        <p>{body}</p>
                        <p>{title}</p>
                        <button>Add</button>
                        <button onClick={ (  )=> handleDelete(id)}>Delete</button>
                    </li>

                }) 
            }
        </ul>
    </section>
    </>
  )
}

export default Posts
