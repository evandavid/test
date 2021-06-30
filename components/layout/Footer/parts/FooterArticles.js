import PropTypes from 'prop-types';
import React from 'react';
import Link from 'next/link';
import useContentful from 'utils/hooks/useContentful';

const FooterArticles = ({ title }) => {
  const { data: articles } = useContentful({
    contentType: 'blog',
    filterBySite: true,
    options: { order: '-fields.createdOn', limit: 4 },
  });

  return (
    <div>
      <div className="list-headed">
        <h3 className="list-headed__title">
          <span>{title}</span>
        </h3>
        <ul className="list-headed__items">
          {articles?.map(article => (
            <li key={article.path} className="list-headed__item">
              <Link href={'/blog/' + article.path}>{article.shortTitle || article.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

FooterArticles.propTypes = {
  title: PropTypes.string,
};

export default FooterArticles;
