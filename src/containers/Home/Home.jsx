import React from 'react';

import ArticleList from '../ArticleList';
import FeedControls from '../../components/FeedControls';

export default function Home() {
  return (
    <main>
      <FeedControls />
      <ArticleList />
    </main>
  );
}
