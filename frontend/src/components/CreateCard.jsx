 export function CreateCard() {
  return (
    <div className="card">  
       <input  type="text" placeholder="Title" />   <br/>
         <textarea placeholder="Description"></textarea> <br/>
         <button>CreateCard</button>
    </div>
  );
}