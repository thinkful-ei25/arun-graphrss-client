import React from 'react';
import { Query } from 'react-apollo';

import Article from '../Article/Article';
import { fetchArticlesQuery } from '../../queries';

export default function ArticleList() {
  return (
    <Query query={fetchArticlesQuery}>
      {({ data, loading, error }) => {
        if (loading) {
          return <p>Loading</p>;
        }
        if (error) {
          return <p>ERROR: {error.message}</p>;
        }

        return (
          <section>
            {data.articles &&
              data.articles
                .sort((a, b) => a.id - b.id)
                .map((article) => (
                  <article key={article.id}>
                    <Article {...article} />
                  </article>
                ))}
          </section>
        );
      }}
    </Query>
  );
}
