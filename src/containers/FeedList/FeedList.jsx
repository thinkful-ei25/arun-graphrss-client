import React from 'react';
import { Query, Mutation } from 'react-apollo';

import { fetchArticlesQuery, fetchFeedsQuery } from '../../queries';
import { removeFeedMutation } from '../../mutations';

export default function FeedList() {
  return (
    <Query query={fetchFeedsQuery}>
      {({ data, loading, error }) => {
        if (error) return <p>Error: {error.message}</p>;
        if (loading) return <p>Loading...</p>;

        return (
          <ul>
            {data.feeds.map((feed) => (
              <Mutation
                key={feed.id}
                mutation={removeFeedMutation}
                update={(cache, { data }) => {
                  cache.writeQuery({
                    query: fetchFeedsQuery,
                    data: {
                      feeds: data.removeFeed,
                    },
                  });
                }}
                refetchQueries={[{ query: fetchArticlesQuery }]}
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
