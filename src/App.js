
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeCoverDesign from './HomeCoverDesign';
import OrderHistory from './OrderHistory';
import OrderList from './OrderList';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<HomeCoverDesign/>} />
        <Route path="/order-history" element={<OrderHistory/>} />
        <Route path="/order-list" element={<OrderList/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
