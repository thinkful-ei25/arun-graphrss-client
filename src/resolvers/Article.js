import gql from 'graphql-tag';

export const mutations = {
  toggleExpanded: (root, { id: articleId }, { cache, getCacheKey }) => {
    const id = getCacheKey({ __typename: 'Article', id: articleId });

    const fragment = gql`
      fragment expandedArticle on Article {
        expanded
      }
    `;

    const article = cache.readFragment({ fragment, id });
    const data = { ...article, expanded: !article.expanded };

    cache.writeData({ id, data });
    return null;
  },
};

const Article = {
  expanded: () => false,
};

export default Article;
