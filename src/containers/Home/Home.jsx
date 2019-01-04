import React, { Fragment } from 'react';

import ArticleList from '../ArticleList';
import FeedControls from '../FeedControls/FeedControls';

export default function Home() {
  return (
    <Fragment>
      <FeedControls />
      <ArticleList />
    </Fragment>
  );
}
