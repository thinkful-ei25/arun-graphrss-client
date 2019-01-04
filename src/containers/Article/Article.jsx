import gql from 'graphql-tag';
import React from 'react';
import { Mutation } from 'react-apollo';

import ArticleExpanded from '../../components/ArticleExpanded/ArticleExpanded';
import ArticleSummary from '../../components/ArticleSummary/ArticleSummary';

export const TOGGLE_EXPANDED = gql`
  mutation ToggleExpanded($id: ID!) {
    toggleExpanded(id: $id) @client
  }
`;

export default function Article({ id, title, url, summary, description, expanded }) {
  return (
    <Mutation mutation={TOGGLE_EXPANDED} variables={{ id }}>
      {(toggleExpanded) => (
        <button type="button" onClick={toggleExpanded}>
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
