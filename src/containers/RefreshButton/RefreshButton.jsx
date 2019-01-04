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

        cache.writeQuery({
          query,
          data: { articles: [...previousData.articles, ...data.refresh] },
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
