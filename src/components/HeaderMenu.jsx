import styles from './HeaderMenu.module.scss';

const HeaderMenu = () => {
    return (
        <ul className={`card p-20 ${styles.menuContainer}`}>
            <li>Wishlist</li>
            <li>Connexion</li>
        </ul>
    );
};

export default HeaderMenu;