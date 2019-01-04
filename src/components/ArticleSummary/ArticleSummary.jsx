import React, { Fragment } from 'react';

export default function ArticleSummary({ title, url, summary }) {
  return (
    <Fragment>
      <header>
        <a href={url}>{title}</a>
      </header>
      <section dangerouslySetInnerHTML={{ __html: summary }} />
    </Fragment>
  );
}
