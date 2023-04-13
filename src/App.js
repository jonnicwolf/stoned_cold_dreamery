import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>

      <Routes>
        <Route exact path='/' element={<Home/>} />
      </Routes>
    </div>
  );
};

export default App;
