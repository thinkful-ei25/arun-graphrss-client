import React from 'react';

import AddFeedControl from '../../containers/AddFeedControl';
import RefreshButton from '../../containers/RefreshButton';
import FeedList from '../../containers/FeedList';

export default function FeedControls() {
  return (
    <section>
      <AddFeedControl />
      <FeedList />
      <RefreshButton />
    </section>
  );
}
