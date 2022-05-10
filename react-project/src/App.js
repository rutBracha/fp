import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import OrderDelivery from './component/orderDelivery';
import Tracking from './component/tracking';
function App() {
  return (
    <>
      <OrderDelivery />
      <Router>

        <Router path="/" exact >
          <OrderDelivery />
        </Router>
        <Router path="/tracking" >
          <Tracking />
        </Router>
      </Router>
    </>
  );
}

export default App;
