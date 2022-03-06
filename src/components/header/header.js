import styles from './header.module.css';

const Header = () => {
    
    const logo = require('../../assets/images/logo.png')
    return (
        <header>
            <div className={ styles.header }>
                <div>
                    <img src={ logo }
                        alt="talento" />
                    <p>Coach</p>
                </div>
            </div>
        </header>
    );
}


export default Header;
