import React, { useEffect, useState } from 'react'
import { getPost, deletePost } from './PostApi'

const Axios = () => {
  const [data, setData] = useState([])

    const getPostData = async() => {
       const res = await getPost()
       setData(res.data)
    }

    useEffect(() =>{
      getPostData()
    }, [])

    const deletePost = async(id) => {
       const res = await deletePost(id)
       const newUpdatedPost = data.filter((currentPost) => {
          return currentPost.id !== id
       })
       setData(newUpdatedPost)  
    }
  return (
    <div>
    <ul>
      {data.map((item) => {
        const {id, title, body } = item
        return <li key={id}>
          <p>{id}</p>
          <p>{title}</p>
          <p>{body}</p>
          <button>Add</button>
          <button onClick={() => {deletePost(id)}}>Delete</button>
        </li>
      })}
    </ul>
    </div>
  )
}

export default Axios