import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Nav from './Nav';
import About from './About';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        
      </Router>
    </div>
  );
}

export default App;
