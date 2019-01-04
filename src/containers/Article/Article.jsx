import React from 'react';
import { Mutation } from 'react-apollo';

import './Article.css';
import ArticleExpanded from '../../components/ArticleExpanded';
import ArticleSummary from '../../components/ArticleSummary';
import { toggleExpandedMutation } from '../../mutations';

export default function Article({ id, title, url, summary, description, expanded }) {
  return (
    <Mutation mutation={toggleExpandedMutation} variables={{ id }}>
      {(toggleExpanded) => (
        <button className="Article__button" type="button" onClick={toggleExpanded}>
          {expanded ? (
            <ArticleExpanded title={title} description={description} url={url} />
          ) : (
            <ArticleSummary title={title} url={url} summary={summary} />
          )}
        </button>
      )}
    </Mutation>
  );
}
