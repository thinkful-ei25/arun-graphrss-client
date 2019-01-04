import gql from 'graphql-tag';
import React from 'react';

import { Mutation } from 'react-apollo';

import { articleFields } from '../../fragments';

export const REFRESH_ARTICLES = gql`
  mutation RefreshArticles {
    refresh {
      ...ArticleFields
    }
  }
  ${articleFields}
`;

export default function RefreshButton() {
  return (
    <Mutation
      mutation={REFRESH_ARTICLES}
      update={(cache, { data }) => {
        const query = gql`
          query Articles {
            articles {
              ...ArticleFields
            }
          }
          ${articleFields}
        `;

        const previousData = cache.readQuery({ query });

        // Merge articles
        let articlesMap = previousData.articles.reduce((acc, article) => {
          acc.set(article.id, article);
          return acc;
        }, new Map());
        articlesMap = data.refresh.reduce((acc, article) => {
          acc.set(article.id, article);
          return acc;
        }, articlesMap);

        cache.writeQuery({
          query,
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
