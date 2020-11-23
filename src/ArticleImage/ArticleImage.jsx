import React from "react"
import styles from "./ArticleImage.module.css"

const ArticleImage = (props) => {
    return (
        <div>
            <img className={styles.image} src={props.url} alt={props.title}/>
        </div>
    )
}

export default  ArticleImage