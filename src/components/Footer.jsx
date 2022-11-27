import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={`d-flex flex-row align-items-center justify-content-center p-20 ${styles.footer}`}>
            <p>Copyright © {new Date().getFullYear()} Cookchef, Inc.</p>
        </footer>
    );
};

export default Footer;