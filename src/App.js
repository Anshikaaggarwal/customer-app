
import './App.css';
import Home from './components/Home.js'
import TryOn from './components/TryOn.js';
import Login from './components/Login.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeCoverDesign from './HomeCoverDesign';
import OrderHistory from './OrderHistory';
import OrderList from './OrderList';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <TryOn/> */}  
      {/* <Login/> */}
        <Router>
         
            <Routes>           
              <Route path="/login" element={<Login />} />
              <Route path="/tryon" element={<TryOn />} />
              <Route path="/" element={<HomeCoverDesign/>} />
              <Route path="/order-history" element={<OrderHistory/>} />
              <Route path="/order-list" element={<OrderList/>} />
            </Routes>
        
          </Router>
     
    </div>

    
  );
}

export default App;














  
