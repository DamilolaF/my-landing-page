
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
//import SubHeading from './components/SubHeading';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
  <Navbar></Navbar>
   <Header></Header>
  </div>
    </Router>
  );
}

export default App;
