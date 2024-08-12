import React from "react";
import { useNavigate } from "react-router";
export default function Navbar(){
    const navigate=useNavigate();
    return(
        <div style={{ backgroundColor:'#000',width:'100%',height:'70px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <ul style={{listStyle:'none'}}>
                <li style={{fontWeight:'bold',color:"white"}}>FlashCard</li>
            </ul>
            <ul style={{display:'flex',alignItems:'center',listStyle:'none'}}>
                <li style={{fontWeight:'bold',color:"white",paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}><p onClick={()=>navigate('/')}>Home</p></li>
                <li style={{fontWeight:'bold',color:"white",paddingRight:'20px',paddingLeft:'20px',cursor:'pointer'}}><p onClick={()=>navigate('/add')}>Add Card</p></li>
            </ul>
        </div>
    )
}