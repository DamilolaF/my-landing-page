
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
//import SubHeading from './components/SubHeading';
import Header from './components/Header';
import Cakes from './components/Cakes';
import Foods from './components/Foods'
import Special from './components/Special';
function App() {
  return (
    <Router>
      <div className="App">
  <Navbar></Navbar>
   <Header></Header>
   <Foods id="foods"></Foods>
   <Cakes id="dessert"></Cakes>
   <Special></Special>
  </div>
    </Router>
  );
}

export default App;
