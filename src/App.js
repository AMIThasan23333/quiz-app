// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
// import Home from './Components/Home/Home';
// import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';

function App() {
  return (
         
                <BrowserRouter>

                       <div className='App' style={{backgroundImage : "url(./ques1.png)"}}>
                           <Header></Header>
                           <Routes>
                           <Route path="/" element={<Home />} />

                           <Route path="/quiz" element={<Quiz />} />

                           <Route path="/result" element={<Result />} />
                        
                           </Routes>

                           </div>

                           <Footer></Footer>
                
                </BrowserRouter>
  );
}

export default App;
