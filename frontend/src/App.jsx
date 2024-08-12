import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Cards from './pages/Cards';
import Add from './pages/Add';
import Update from './pages/Update';

function App() {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
  
  );
}

export default App;
