
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import './App.css'
import FavoriteList from './pages/FavoriteList';

function App() {





  return (
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Details />} />
        <Route path="/FavoriteList" element={<FavoriteList/>}/>
      </Routes>
    </Router>
  )
}

export default App
