import {Routes,Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Home from "./components/home/Home";
import './assets/css/root.css';
import Header from "./components/header/Header";
import Error from './components/error/Error';
import { useEffect } from 'react';
import Qualification from './components/qualification/Qualification';
import Resume from './components/resume/Resume';
import './assets/css/default.css';
import AboutMe from './components/about/About';
import Footer from './components/footer/Footer';
import Hobbies from './components/about/hobbies/hobbies';
import Projects from './components/projects/projects';


function App() {

  useEffect(() => {
    document.title = "Akhil A"
  })

  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/qualification" element={<Qualification />}></Route>
          <Route exact path="/resume" element={<Resume />}></Route>
          <Route exact path="/about-me" element={<AboutMe />} />
          <Route exact path="/about/hobbies" element={<Hobbies />} />
          <Route exact path="/projects" element={<Projects/>} />
          <Route path="*" element={<Error />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
