import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';

import { feedFields } from '../../fragments';

export const fetchFeeds = gql`
  query FetchFeeds {
    feeds {
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
              <li key={feed.id}>{feed.title}</li>
            ))}
          </ul>
        );
      }}
    </Query>
  );
}
