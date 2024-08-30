import React from "react";
import styles from "../../styles/components/layout/Footer.module.scss";
import {Link} from "react-router-dom";

function Footer() {

    return (
        <footer className={styles['footer']}>
            <div className={styles['footer-inner']}>
                <span className={styles['footer-country-text']}>South Korea</span>
                <div className={styles['footer-link-container']}>
                    <ul className={styles['footer-info-list']}>
                        <li className={styles['footer-info-item']}>
                            <Link to="#" className={styles['footer-info-link']}>About</Link>
                        </li>
                        <li className={styles['footer-info-item']}>
                            <Link to="#" className={styles['footer-info-link']}>Advertising</Link>
                        </li>
                        <li className={styles['footer-info-item']}>
                            <Link to="#" className={styles['footer-info-link']}>Business</Link>
                        </li>
                        <li className={styles['footer-info-item']}>
                            <Link to="#" className={styles['footer-info-link']}>How Search works</Link>
                        </li>
                    </ul>
                    <ul className={styles['footer-terms-list']}>
                        <li className={styles['footer-terms-item']}>
                            <Link to="#" className={styles['footer-terms-link']}>Privacy</Link>
                        </li>
                        <li className={styles['footer-terms-item']}>
                            <Link to="#" className={styles['footer-terms-link']}>Terms</Link>
                        </li>
                        <li className={styles['footer-terms-item']}>
                            <Link to="#" className={styles['footer-terms-link']}>Settings</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;