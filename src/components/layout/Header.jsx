import React from "react";
import styles from "../../styles/components/layout/Header.module.scss";
import {Link} from "react-router-dom";

function Header() {

    return (
        <header className={styles['header']}>
            <div className={styles['header-inner']}>
                <h1 className="blind">구글</h1>
                <div className={styles['header-link-container']}>
                    <Link to="#" className={styles['header-text-link']}>Google information</Link>
                    <Link to="#" className={styles['header-text-link']}>Store</Link>

                </div>
                <div className={styles['header-my-info-container']}>
                    <Link to="#" className={styles['header-text-link']}>Gmail</Link>
                    <Link to="#" className={styles['header-text-link']}>Images</Link>
                    <button className={styles['header-app-button']} type="button">
                        <span className="blind">구글 앱</span>
                    </button>
                    <Link to="#" className={styles['header-round-link']}>Sign in</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;