import { faHome, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../App';
import './Header.css'
const Header = () => {
  const {added} = useContext(Context)
  return (
    <div className="header">
      <Link to='/'>
        <FontAwesomeIcon icon={faHome}/>
      </Link>
      <Link className="list" to='/list'>
        <p>{added.length}</p>
        <FontAwesomeIcon icon={faList}/>
      </Link>
    </div>
  );
};

export default Header;