
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate ,useLocation} from 'react-router';
import Navbar from '../components/Navbar';

function Update() {
  const navigate = useNavigate();
  const location = useLocation();
  const id=location.pathname.split("/")[2];
  const [input, setInput] = useState({title: '', description: ''});

  const handlechange = (e) => {
    setInput({...input, [e.target.name]: e.target.value})
    console.log(input);
  }
 const handleclick = async(e) => {
    try{
        await axios.put('http://localhost:8080/user'+id,input);
       navigate("/");
    }
    catch{
      console.log("error");
    }
  }
  return (
    <>
    <Navbar/>
   
    <div className='form' style={{ height:"600px", width:"600px", textAlign:"center" , margin:"auto", backgroundColor:"white"}}>
  
      <h1>Update Card</h1>
      <input style={{height:"70px" , width:"400px" , marginTop:"20px"}} type='text' placeholder='title' onChange={handlechange} name="title" /><br/>
      <input  style={{height:"70px" , width:"400px",  marginTop:"20px" }} type='text' placeholder='description' onChange={handlechange} name="description" /><br/>
      <button style={{height:"50px", width:"200px", backgroundColor:"orange" , marginTop:"20px"}} onClick={handleclick}>Update</button>
    </div>

     </>
  )
}

export default Update;
