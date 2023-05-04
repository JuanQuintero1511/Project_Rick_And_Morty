import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import styled from './Nav.module.scss'


const Nav = ({ onSearch, setAccess }) => {
  const handleLogOut = () => {
      setAccess(false);
  }

  return (
    <nav>

        <div className={styled.nav}>
            <Link to='/about'> ABOUT </Link>
            <Link to='/home'> HOME </Link>
            <Link to='/favorites'> FAVORITES </Link>
        </div>

        <button className={styled.button} onClick={handleLogOut}>LOG OUT</button>
        <SearchBar onSearch={onSearch}/>
    </nav>
  )
}

export default Nav;