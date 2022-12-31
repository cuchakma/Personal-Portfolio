import React from 'react';
import classes from './Header.module.css';
import image from '../img/profile-2.png';

const Header = () => {
    return (
        <>
            <div className={classes['portfolio-header']}>
                <ul className={classes['portfolio-name']}>
                    <li>
                        <p>Cupid Chakma</p>
                    </li>
                </ul>
                <ul className={classes['portfolio-list']}>
                    <li>
                        <p>About</p>
                    </li>
                    <li>
                        <p>Projects</p>
                    </li>
                    <li>
                        <p>Contact</p>
                    </li>
                </ul>
            </div>
            <div className={classes['portfolio-header-summary-wrapper']}>
                <div className={classes['portfolio-header-summary']}>
                    <p className={classes['portfolio-header-para']}>Software Engineer</p>
                    <h2 className={classes['portfolio-header-heading']}>Hello, My Name Is Cupid Chakma</h2>
                    <p className={classes['portfolio-header-para-2']}>Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
                    <span className={classes['portfolio-projects-link']}>Projects</span>
                    <span className={classes['portfolio-linkedin-link']}>Linkedin</span>
                </div>
                <div className={classes['portfolio-header-image-wrapper']}>
                
                </div>
            </div>
        </>
    );
}

export default Header;