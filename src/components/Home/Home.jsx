import React, { Fragment } from 'react';

import ArticleList from '../../containers/ArticleList';
import FeedControls from '../FeedControls';

export default function Home() {
  return (
    <Fragment>
      <header>
        <h1>GraphRSS</h1>
      </header>
      <main>
        <FeedControls />
        <ArticleList />
      </main>
    </Fragment>
  );
}
