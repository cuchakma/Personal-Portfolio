import React from "react";
import classes from './ParentWrapper.module.css';


const ParentWrapper = ( props ) => {
    return (
        <div className={classes['portfolio-background-wrapper']}>
            <div className={classes['portfolio-parent-wrapper']}>
                {props.children}
            </div>
            <div className={classes['portfolio-footer-bg']}></div>
        </div>
    )
}


export default ParentWrapper;