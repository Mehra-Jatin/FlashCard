import React from 'react'
import { useEffect ,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import '../styles/cards.css';
import Cardcomponent from '../components/Cardcomponent';
import Navbar from '../components/Navbar';


function Cards() {

const navigate = useNavigate();
  const[cards,setCards]=useState([]);
 
 
  useEffect(() => {
    const fetchCards = async () => {
     try{
      const response = await axios.get('http://localhost:8080/user');
      console.log(response.data);
      setCards(response.data);
     }
     catch{
        console.log("error");
     }
    };
    fetchCards();
  }, []);


  return (
    <div>
    <Navbar/>
 
        <div className='cards' style={{display:'grid',gridTemplateColumns:'auto auto auto auto',gap:'10px',marginTop:'50px',marginLeft:'50px' }}>
     
        {cards.map((card) => (
          <Cardcomponent  id ={card.id} title={card.title} description={card.description} />
          ))}
       </div>


    </div>
  )
}

export default Cards;
