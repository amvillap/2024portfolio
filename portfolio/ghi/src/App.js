import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
        <div>
          <Routes>
            <Route path='/aboutme' />
            <Route path='/projects' />
            <Route path='/contact' />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
