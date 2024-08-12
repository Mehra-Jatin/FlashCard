import React, {  useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Cardcomponent(props) {

    const navigate = useNavigate();
   const  [isFlipped, setIsFlipped] = useState(false);
    const handleFlip = () => {
    setIsFlipped(!isFlipped);
    }
    const handledelete = async (id) => {
      try{
        await axios.delete("http://localhost:8080/user/"+id);
        window.location.reload();
      }
      catch{
        console.log("error");
      }
    }
  return (
    <div style={{width:'200px',height:'250px',display:'grid', gridTemplateColumns:"auto", backgroundColor:"black"}} >
    <div style={{width:'200px',height:'200px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around',backgroundColor:"#f5e9eb"}} key={props.id}>
    {isFlipped ? (<p>{props.description}</p> ) : ( <h3>{props.title}</h3>)}
    <button style={{height:"30px", width:"80px", backgroundColor:"orange", marginLeft:"10px",color:"white", borderRadius:"15px" }} onClick={handleFlip}>
      {isFlipped ? "Show Title" : "Flip Card"}
    </button>
  </div>
  <div  style={{width:'200px',height:'40px',display:'flex',justifyContent:"center" , alignItems:"center"}}>
   <button  style={{height:"30px", width:"50px", backgroundColor:"orange", marginRight:"10px", color:"white", borderRadius:"15px" }} onClick={()=>{handledelete(props.id)}}>Delete</button>
    <button style={{height:"30px", width:"50px", backgroundColor:"orange", marginLeft:"10px" ,color:"white", borderRadius:"15px" }} onClick={()=>{navigate("/update/"+props.id)}}>Edit</button>
  </div>
  </div>
  )
}

export default Cardcomponent
