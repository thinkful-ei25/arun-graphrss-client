import React from 'react';
import { Mutation } from 'react-apollo';

import AddFeedForm from '../../components/AddFeedForm';
import { addFeedMutation } from '../../mutations';
import { fetchArticlesQuery, fetchFeedsQuery } from '../../queries';

export default function AddFeedControl() {
  return (
    <Mutation
      mutation={addFeedMutation}
      update={(cache, { data }) => {
        const previous = cache.readQuery({ query: fetchFeedsQuery });

        cache.writeQuery({
          query: fetchFeedsQuery,
          data: {
            feeds: [...previous.feeds, data.addFeed],
          },
        });
      }}
      refetchQueries={[{ query: fetchArticlesQuery }]}
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
