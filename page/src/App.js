
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import SubHeading from './components/SubHeading';


function App() {
  return (
    <Router>
    <div className="App">
   <Navbar></Navbar>
   <Header></Header>
  <SubHeading></SubHeading> 
    </div>
    </Router>
  );
}

export default App;
