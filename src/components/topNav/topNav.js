import { React } from 'react';
import { CustomLink } from '../../utility/activeLink';
import styles from './topNav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const TopNav = () => {
    return (
        <div className={styles.contentHead}>
            <ul>
                <li>
                    <a className={ styles.dropdown }>
                        <span>Periodisering <FontAwesomeIcon icon={faAngleDown} />  </span>
                        <div className={ styles.dropdownContent  }>
                            <p> <CustomLink to="schedule-club">Club Periodisering</CustomLink> </p>
                            <p> <CustomLink to="talento-club">Talento Periodisering</CustomLink> </p>
                        </div>
                    </a>
                </li>
                <li> <a href=""> <small>Curriculum</small> </a> </li>
                <li> <a href=""><small>Statestic</small> </a> </li>
            </ul>
        </div>
    );
}

export default TopNav;