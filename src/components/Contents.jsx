import React from "react";
import styles from "../styles/components/Contents.module.scss";
import {Link} from "react-router-dom";
import logo from "../assets/icons/icon-logo.svg";

function Contents() {

    return (
        <main className={styles['main']}>
            <div className={styles['main-search-container']}>
                <div className={styles['main-search-logo-container']}>
                    <img src={logo} alt="google" className={styles['main-search-logo']}/>
                </div>
                <div className={styles['main-search-input-container']}>
                <input type="search" className={styles['main-search-input']} />
                    <button type="button" className={styles['main-search-button']}>
                        <span className="blind">검색</span>
                    </button>
                    <div className={styles['main-search-input-button-container']}>
                        <button type="button" className={`${styles['main-search-input-button']} ${styles.keyboard}`}>
                            <span className="blind">키보드</span>
                        </button>
                        <button type="button" className={`${styles['main-search-input-button']} ${styles.mic}`}>
                            <span className="blind">마이크</span>
                        </button>
                        <button type="button" className={`${styles['main-search-input-button']} ${styles.camera}`}>
                            <span className="blind">카메라</span>
                        </button>
                    </div>
                </div>
                <div className={styles['main-gray-button-container']}>
                    <button type="button" className={styles['main-gray-button']}>Google Search</button>
                    <Link to="#" className={styles['main-gray-button']}>I'm Feeling Lucky</Link>
                </div>
            </div>
        </main>
    );
}

export default Contents;