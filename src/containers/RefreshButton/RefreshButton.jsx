import React from 'react';

import { Mutation } from 'react-apollo';

import { fetchArticlesQuery } from '../../queries';
import { refreshArticlesMutation } from '../../mutations';

export default function RefreshButton() {
  return (
    <Mutation
      mutation={refreshArticlesMutation}
      update={(cache, { data }) => {
        const previousData = cache.readQuery({ query: fetchArticlesQuery });

        // Merge articles
        let articlesMap = previousData.articles.reduce((acc, article) => {
          acc.set(article.id, article);
          return acc;
        }, new Map());
        articlesMap = data.refresh.reduce((acc, article) => {
          // Set expanded to false for new items
          article.expanded = false;
          acc.set(article.id, article);
          return acc;
        }, articlesMap);

        cache.writeQuery({
          query: fetchArticlesQuery,
          data: { articles: [...articlesMap.values()] },
        });
      }}
    >
      {(refresh) => (
        <button type="button" onClick={refresh}>
          Refresh
        </button>
      )}
    </Mutation>
  );
}
