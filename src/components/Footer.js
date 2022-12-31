import React from "react";
import classes from './Footer.module.css';
import insta from '../img/insta.png';
import linkedin from '../img/bi_linkedin.png';
import message from '../img/bi_envelope-fill.png';

const Footer = () => {
    return (
        <div className={classes['portfolio-footer']}>
            <ul className={classes['portfolio-social-icons']}>
                <li>
                    <img src={insta} alt="insta"></img>
                </li>
                <li>
                    <img src={linkedin} alt="linkedin"></img>
                </li>
                <li>
                    <img src={message} alt="message"></img>
                </li>
            </ul>
        </div>
    );
}

export default Footer;