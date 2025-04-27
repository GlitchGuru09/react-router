import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
       const data = useLoaderData()
  //   const [data, setData] = useState([])
  //   useEffect(() => {
  //       fetch('https://api.github.com/users/GlitchGuru09')
  //       .then(response => response.json())
  //       .then(data => {
  //           console.log(data);
  //           setData(data)
  //       })
  //   },[])
  return (
    <div>Github Name: {data.name}
         <img src={data.avatar_url} alt="github profile" />
    </div>
  )
}

export default Github
