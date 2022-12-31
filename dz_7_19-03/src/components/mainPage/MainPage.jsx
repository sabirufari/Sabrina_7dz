import React, { useEffect, useState } from 'react'
import { getApi } from '../../api'
import Input from '../fcomponents/Input'
import UserID from '../fcomponents/userID'
import Post from '../post/Post'

function Main() {
    const [post,setPost]=useState([])
    useEffect(()=>{
        getApi.get().then(response =>setPost(response.data))
    },[])

    const handleChange=(e)=>{
        getApi.get().then(response =>setPost(response.data.filter(item=>item.title.includes(e.target.value) || item.body.includes(e.target.value))))
    }
    const handleId=(e)=>{
        getApi.get(`?userId=${e.target.value}`).then(response =>setPost(response.data))  
    }

  return (
    <div>
        <Input handleChange={handleChange}/>
        <UserID handleId={handleId}/>
        {post.map(item=><Post key={item.id} item={item}/>)}
    </div>
  )
}

export default Main