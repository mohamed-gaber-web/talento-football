import { React } from 'react';
import  './sideNav.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
    
const SideNav = () => {

    const homeImg = require('../../assets/images/final_talento-08.png');

    return (
        <aside>
            <ul>
                <li> <Link to="/"> <img src={ homeImg } /> <small>Home</small> </Link> </li>
                <li> <a href="#">  <FontAwesomeIcon icon={faCalendarDays} />  <small>Periodisering</small> </a> </li>
                <li> <a href="#"> <FontAwesomeIcon icon={faBookOpen} /> <small>Curriculum</small> </a> </li>
            </ul>
        </aside>
    );
}

export default SideNav;

