import React from "react";
import styles from "./ArticleTextToggleButton.module.css"

const ArticleTextToggleButton = (props) => {
    return (
        <button className={styles.button} onClick={props.onClick}>{props.buttonText}</button>
    )
}

export default ArticleTextToggleButton;