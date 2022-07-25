import logo from './logo.svg';
import styles from './mystyle.module.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Nav = () => {
    return (
      <div className={'styles.nav'}>
        <Link to= '/'>About</Link>
      </div>
    );
  };
  
  export default Nav;