# Achmad Rizky

## Summary

## ==== GraphQL - Subscription ====

# Subscriptions

## Get real-time updates from your GraphQL server

---

In addition to [queries](https://www.apollographql.com/docs/react/data/queries) and [mutations](https://www.apollographql.com/docs/react/data/mutations), GraphQL supports a third operation type: **subscriptions**.

Like queries, subscriptions enable you to fetch data. _Unlike_ queries, subscriptions are long-lasting operations that can change their result over time. They can maintain an active connection to your GraphQL server (most commonly via WebSocket), enabling the server to push updates to the subscription's result.

Subscriptions are useful for notifying your client in real time about changes to back-end data, such as the creation of a new object or updates to an important field.

## [When to use subscriptions](https://www.apollographql.com/docs/react/data/subscriptions/#when-to-use-subscriptions)

In the majority of cases, your client should _not_ use subscriptions to stay up to date with your backend. Instead, you should [poll intermittently](https://www.apollographql.com/docs/react/data/queries/#polling) with queries, or [re-execute queries on demand](https://www.apollographql.com/docs/react/data/queries/#refetching) when a user performs a relevant action (such as clicking a button).

You _should_ use subscriptions for the following:

- **Small, incremental changes to large objects**. Repeatedly polling for a large object is expensive, especially when most of the object's fields rarely change. Instead, you can fetch the object's initial state with a query, and your server can proactively push updates to individual fields as they occur.
- **Low-latency, real-time updates**. For example, a chat application's client wants to receive new messages as soon as they're available.

## [Choosing a subscription library](https://www.apollographql.com/docs/react/data/subscriptions/#choosing-a-subscription-library)

The GraphQL spec does not define a specific protocol for sending subscription requests. The first popular JavaScript library to implement subscriptions over WebSocket is called `subscriptions-transport-ws`. **This library is no longer actively maintained.** Its successor is a library called `graphql-ws`. The two libraries _do not use the same WebSocket subprotocol_, so you need to make sure that your server and clients all use the same library.

Apollo Client supports both `graphql-ws` and `subscriptions-transport-ws`. We recommend you use the newer library `graphql-ws`, and this page shows how to use it. If you need to use `subscriptions-transport-ws` because your server still uses that protocol, the differences are described [at the bottom of this page](https://www.apollographql.com/docs/react/data/subscriptions/#the-older-subscriptions-transport-ws-library).

**Note**: Confusingly, the `subscriptions-transport-ws` library calls its _WebSocket subprotocol_ `graphql-ws`, and the `graphql-ws` _library_ calls its subprotocol `graphql-transport-ws`! In this article, we refer to the two _libraries_ (`subscriptions-transport-ws` and `graphql-ws`), _not_ the two subprotocols.

## [Defining a subscription](https://www.apollographql.com/docs/react/data/subscriptions/#defining-a-subscription)

You define a subscription on both the server side and the client side, just like you do for queries and mutations.

### [Server side](https://www.apollographql.com/docs/react/data/subscriptions/#server-side)

You define available subscriptions in your GraphQL schema as fields of the `Subscription` type. The following `commentAdded` subscription notifies a subscribing client whenever a new comment is added to a particular blog post (specified by `postID`):

    type Subscription { commentAdded(postID: ID!): Comment }

### [Client side](https://www.apollographql.com/docs/react/data/subscriptions/#client-side)

In your application's client, you define the shape of each subscription you want Apollo Client to execute, like so:

    const COMMENTS_SUBSCRIPTION = gql` subscription OnCommentAdded($postID: ID!) { commentAdded(postID: $postID) { id content } } `;

When Apollo Client executes the `OnCommentAdded` subscription, it establishes a connection to your GraphQL server and listens for response data. Unlike with a query, there is no expectation that the server will immediately process and return a response. Instead, your server only pushes data to your client when a particular event occurs on your backend.

Whenever your GraphQL server _does_ push data to a subscribing client, that data conforms to the structure of the executed subscription, just like it does for a query:

    { "data": { "commentAdded": { "id": "123", "content": "What a thoughtful and well written post!" } } }
