import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {
  return (
    <article>
      <h1>{props.article.title}</h1>
		<address>
		  by {props.article.author} (
		  <a href={props.article.authorEmail}>{props.article.authorEmail}</a>)
		</address>
        <time dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
        <img src={props.article.image._url} alt={props.article.title}/>
      <HTMLText text={props.article.text} />
    </article>
  );
};

export default DynamicArticle;
