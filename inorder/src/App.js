import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"
import Navbar  from './components/navbar'
import Footer from './components/footer';
import Signin from './pages/signin'
import Dashboard from './pages/dashboard';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path ="/" element ={<HomePage/>}/>
        <Route path = "/dashboard" element = {<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
