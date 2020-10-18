import React from 'react';
import PropTypes from 'prop-types';

const ArticleListIterm = props => {
    return (
        <li key = {props.key}>
            <h1>{props.article.title}</h1>
            <time dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
            <p>{props.article.shortText}</p>
        </li>
    );
};

ArticleListIterm.propTypes = {
    title: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    displayDate: PropTypes.string.isRequired,
    shortText: PropTypes.string.isRequired,
};

export default ArticleListIterm;