
import { CreateCard } from './components/CreateCard';
import Navbar from './components/Navbar';
import { Cards } from './components/Cards';
function App() {
  var card= [{ title: "Card1", description: "This is card1" }, { title: "Card2", description: "This is card2" }];
  return (
    <div>
     <Navbar />
    <div style={{display:"flex", alignItems:"center", margin:"50px"}}>
    {card.map((card) => {
      return <Cards title={card.title} description={card.description} />;
    })}
    </div>
   <CreateCard />
   </div>
  );
}

export default App;
