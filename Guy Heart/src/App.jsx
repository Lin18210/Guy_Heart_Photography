
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import HomePage from './pages/Home.jsx'
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Blog from './pages/Blog.jsx';
import Video from './pages/Video.jsx';
import ScrollToTop from "./Components/ScrollToTop.jsx";

function App() {

  return(
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/video" element={<Video/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App