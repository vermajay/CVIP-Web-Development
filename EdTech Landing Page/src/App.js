import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Error from "./pages/Error";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {

  return (
    <div className = "bg-richBlack-900 w-screen min-h-screen flex flex-col justify-start font-inter">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;