import { useState } from 'react'
import axiosInstance from './axios';

function App() {
  const [user,setUser] = useState({});
  const getUser = (e)=>{
    e.preventDefault();
    axiosInstance().get('').then(res=>{
      console.log(res.data.results[0].name.first)
      setUser(res.data.results[0]);
    })
  }
  return (
    <>
    <p>Random user Generator</p>
    <button onClick={getUser}>Submit</button>
    {
      user.name ? <p>{user.name.first}</p>:''
    }
    </>
  )
}

export default App
