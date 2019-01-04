import gql from 'graphql-tag';
import React from 'react';
import { Mutation } from 'react-apollo';

import AddFeedForm from '../../components/AddFeedForm';
import { fetchArticles } from '../ArticleList';
import { fetchFeeds } from '../FeedList';
import { feedFields } from '../../fragments';

export const addFeedMutation = gql`
  mutation AddFeed($feedUrl: String!) {
    addFeed(url: $feedUrl) {
      ...FeedFields
    }
  }
  ${feedFields}
`;

export default function AddFeedControl() {
  return (
    <Mutation
      mutation={addFeedMutation}
      update={(cache, { data }) => {
        const previous = cache.readQuery({ query: fetchFeeds });

        cache.writeQuery({
          query: fetchFeeds,
          data: {
            feeds: [...previous.feeds, data.addFeed],
          },
        });
      }}
      refetchQueries={[{ query: fetchArticles }]}
    >
      {(addFeed) => (
        <AddFeedForm
          onSubmit={(e) => {
            const feedUrl = e.currentTarget.feedUrl.value;
            addFeed({ variables: { feedUrl } });
          }}
        />
      )}
    </Mutation>
  );
}
