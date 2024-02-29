import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import Landing from './Landing';
import Layla from './Layla';

function App() {
  return (
    <BrowserRouter>
      <Nav />
        <div>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/aboutme' element={<AboutMe />} />
            <Route path='/projects' element={<Projects />}/>
            <Route path='/contact' element={<Contact />} />
            <Route path='/layla' element={<Layla />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
