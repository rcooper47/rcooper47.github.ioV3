import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Nav from './Nav';
import About from './About';
import Grid from './Grid';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        
      </Router>
      <Grid/>
    </div>
  );
}

export default App;
