
import './App.css';
import Hotellist from './hotel/hotellist';
import Additem from './menu/additem';
import Viewlist from './menu/viewlist';
import Hotelreg from './hotel/hotelreg';
import {Routes,Route,Link} from "react-router-dom"
import {Nav,Navbar} from "react-bootstrap"
function App() {
  return (
    <>
         <Navbar bg="dark" variant="dark">
      <Nav>
        
      <Nav.Link><Link to ="/">Hotelregistration</Link></Nav.Link>
      <Nav.Link><Link to ="/about">Hotallist</Link></Nav.Link>
      <Nav.Link><Link to ="/services">Additem</Link></Nav.Link>
      <Nav.Link><Link to ="/contact">Viewitem</Link></Nav.Link>
     </Nav></Navbar>
     <Routes>
      <Route path ="/"element ={<Hotelreg/>} />
      <Route path ="/about"element ={<Hotellist/>} />
      <Route path ="/services"element ={<Additem/>} />
      <Route path ="/contact"element ={<Viewlist/>} />
     </Routes>
    </>
  );
}

export default App;
