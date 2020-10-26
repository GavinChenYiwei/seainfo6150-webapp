import React, {useState} from "react";
import PropTypes from "prop-types";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import styles from "./ArticleListItem.module.css"

const ArticleListItem = (props) => {
  const[btnText, setBtnText] = useState("Show more");
  function onClick() {
    if(btnText === "Show more") {
      setBtnText("Show less")
    } else {
      setBtnText("Show more")
    }
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{props.article.title}</h1>
        {
          btnText === "Show less" ?
            <div>
                <p className={styles.shortText}>{props.article.shortText}</p>
                <time className={styles.time} dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
            </div>  : null
        }
        <ArticleTextToggleButton onClick = {onClick} buttonText = {btnText}/>
    </div>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired,
};
export default ArticleListItem;
