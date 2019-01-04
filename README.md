# GraphRSS

A simple RSS reader using a GraphQL backend ([server
code](https://github.com/thinkful-ei25/arun-graphrss-server))

This was built as an exercise in learning GraphQL and the
[Apollo](http://apollographql.com) ecosystem.

## Live version

[Demo](https://graphrss.herokuapp.com)

## Tech stack

### Client

- Apollo Client
  ([apollo-client](https://github.com/apollographql/apollo-client)/[apollo-boost](https://github.com/apollographql/apollo-client/tree/master/packages/apollo-boost))
- React ([create-react-app](https://facebook.github.io/create-react-app/))

### Server ([code](https://github.com/thinkful-ei25/arun-graphrss-server))

- [Bookshelf](https://bookshelfjs.org)
- [Knex.js](https://knexjs.org)
- Apollo Server
  ([apollo-server](https://github.com/apollographql/apollo-server))
- PostgreSQL

## Lessons / pain points

- Render-props are uglier (at first sight) than HOCs. But they do make the
  React devtools easier to read

- Managing state using the Apollo cache is convenient, particularly as query
  responses will automatically update the cache in some instances. However,
  when adding new information, it is necessary to ensure that any `@client`
  data is also filled in (as resolvers will not be called during `writeQuery`

- Organizing mutations, queries from the start is important, particularly on
  the client side, particularly if you're using the `update` or
  `refetchQueries` props

- [Apollo client
  devtools](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm)
  is actually quite buggy, and doesn't refresh nearly as often as one would
  like.

- Bookshelf makes a lot of queries easy. But keeping track of whether we are
  working with a bookshelf collection or an array of Promises was a major pain
  point. Perhaps using Typescript or Flow would help with this in the future.
  Alternatively, dropping down to Knex.js for complicated operations like
  refreshing a set of feeds might be simpler.

## Future work

- Per-user feeds (inc. authentication)

- Allow users to mark an article as
  read

- Sort/filter articles:
  - by feed
  - by date
  - by read-status
  - Update backend periodically so that users do not miss articles
