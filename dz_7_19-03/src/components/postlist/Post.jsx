import React from 'react'

function List({item}) {
  return (
    <div>
        <h1>userId:  {item.userId}</h1>
        <h1>title:  {item.title}</h1>
        <h1>body:   {item.body}</h1>
    </div>
  )
}

export default List