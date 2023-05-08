import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home/Home';
// import Home from './Components/Home/Home';

function App() {
  return (
         
                <BrowserRouter>

                       <div>
                           
                           <Routes>
                           <Route path="/" element={<Home />} />
                           </Routes>

                           </div>
                
                </BrowserRouter>
  );
}

export default App;
