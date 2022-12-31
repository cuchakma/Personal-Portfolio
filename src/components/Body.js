import React from "react";
import classes from './Body.module.css';

const Body = () => {
    return (
        <div className={classes['portfolio-projects']}>
            <div className={classes['portfolio-project-head']}>
                <h2>Projects</h2>
            </div>
        </div>
    )
}

export default Body;