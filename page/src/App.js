
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
//import SubHeading from './components/SubHeading';
import Header from './components/Header';
import Cakes from './components/Cakes';
import Foods from './components/Foods'
import Special from './components/Special';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chefs from './components/Chefs';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <div className="App">
  <Navbar></Navbar>
   <Header></Header>
   <About></About>
   <Foods id="foods"></Foods>
   <Cakes id="dessert"></Cakes>
   <Special></Special>
   <Chefs id="chef"></Chefs>
   <Contact></Contact>
   <Footer></Footer>
  </div>
    </Router>
  );
};

export default App;
