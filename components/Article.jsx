import React from 'react';
import ArticleItem from './ArticleItem';
import articleStyle from '../styles/Article.module.css';
const Article = ({ articles }) => {
  return (
    <div className={articleStyle.grid}>
      {articles.map((article) => (
        <ArticleItem article={article} />
      ))}
    </div>
  );
};

export default Article;
