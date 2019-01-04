import gql from 'graphql-tag';
import React from 'react';
import { Query, Mutation } from 'react-apollo';

import { feedFields } from '../../fragments';
import { fetchArticles } from '../ArticleList';

export const fetchFeeds = gql`
  query FetchFeeds {
    feeds {
      ...FeedFields
    }
  }
  ${feedFields}
`;

const removeFeed = gql`
  mutation RemoveFeed($feedId: ID!) {
    removeFeed(id: $feedId) {
      ...FeedFields
    }
  }
  ${feedFields}
`;

export default function FeedList() {
  return (
    <Query query={fetchFeeds}>
      {({ data, loading, error }) => {
        if (error) return <p>Error: {error.message}</p>;
        if (loading) return <p>Loading...</p>;

        return (
          <ul>
            {data.feeds.map((feed) => (
              <Mutation
                key={feed.id}
                mutation={removeFeed}
                update={(cache, { data }) => {
                  cache.writeQuery({
                    query: fetchFeeds,
                    data: {
                      feeds: data.removeFeed,
                    },
                  });
                }}
                refetchQueries={[{ query: fetchArticles }]}
              >
                {(removeFeed) => (
                  <li>
                    {feed.title}{' '}
                    <button
                      type="button"
                      onClick={(e) => {
                        removeFeed({ variables: { feedId: feed.id } });
                      }}
                    >
                      Remove
                    </button>
                  </li>
                )}
              </Mutation>
            ))}
          </ul>
        );
      }}
    </Query>
  );
}
