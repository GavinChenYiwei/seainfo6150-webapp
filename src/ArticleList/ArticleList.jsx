import React from 'react';
import ArticleListIterm from '../ArticleListIterm/ArticleListIterm';

const ArticleList = props => {
    let displayContent;
    if(props.articles.length){
        displayContent = (
            <div>
                <ul>
                    {props.articles.map((articleIterm) => (<ArticleListIterm article = {articleIterm} key = {articleIterm.slug}/>))}
                </ul>
            </div>
        )
    } else {
        displayContent = <div>You have no data!</div>
    }
    return props.articles.length ? (
        <div>
            {displayContent}
        </div>
    ) : null;
};

export default ArticleList;