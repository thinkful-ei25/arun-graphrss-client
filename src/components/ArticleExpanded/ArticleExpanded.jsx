import React, { Fragment } from 'react';

export default function ArticleExpanded({ title, url, description }) {
  return (
    <Fragment>
      <header>
        <h2>{title}</h2>
      </header>
      <section dangerouslySetInnerHTML={{ __html: description }} />
      <a href={url}>Read more</a>
    </Fragment>
  );
}
