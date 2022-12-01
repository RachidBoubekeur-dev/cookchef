import { useState } from 'react';
import styles from './Header.module.scss';
import cookchef from '../assets/images/cookchef.png';
import HeaderMenu from './HeaderMenu';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className={`d-flex flex-row align-items-center ${styles.header}`}>
            <div className='flex-fill'>
                <img src={cookchef} alt="Cookchef Logo" />
            </div>
            <ul className={styles.headerList}>
                <button className='mr-5 btn btn-reverse-primary'>
                    <i className="fa-solid fa-heart mr-5"></i>
                    <span>Wishlist</span>
                </button>
                <button className='btn btn-primary'>connexion</button>
            </ul>
            <i className={`fa-solid fa-bars ${styles.headerXs}`} onClick={() => setShowMenu(!showMenu)}></i>
            {showMenu && (
                <>
                    <div className='calc' onClick={() => setShowMenu(false)}></div>
                    <HeaderMenu />
                </>
            )}
        </header >
    );
};

export default Header;