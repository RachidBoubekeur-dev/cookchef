import styles from './Header.module.scss';
import cookchef from '../assets/images/cookchef.png';

const Header = () => {
    return (
        <header className={`d-flex flex-row align-items-center ${styles.header}`}>
            <i className="fa-solid fa-bars mr-15"></i>
            <div className='flex-fill'>
                <img src={cookchef} alt="Cookchef Logo" />
            </div>
            <ul>
                <button className='mr-5 btn btn-reverse-primary'>
                    <i className="fa-solid fa-basket-shopping mr-5"></i>
                    <span>panier</span>
                </button>
                <button className='btn btn-primary'>connexxion</button>
            </ul>
        </header>
    );
};

export default Header;