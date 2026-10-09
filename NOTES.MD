# Song Scrapbook

An app that creates an interactive map of daily song submissions and allows the user to filter by day, friend, etc.

## Potential Roadblocks

Potential roadblocks include authentication and Redux.

### Auth

Use a third party library for this.

### Redux Usage

1. Have a filter by day
2. Create a submission flow where they can search on YouTube.

## Things Learned

### How To Properly Think About State In React

State shouldn't be derived: state should be a source-of-truth. Props shouldn't be copied into new state. In essence: not everything has to be state.

### Rules Of Hooks

https://react.dev/reference/rules/rules-of-hooks

Hooks can only be in the top level of a React function (component, hook). They can't be nested inside a function, like a `handleEvent()` function.

### Redux vs. React Router vs. React Query

Understanding what each does and where data should be stored is important. One architectural insight learned was that React Router should be used to keep track of search results. For example, if the user searches for `radiohead`, then that history should be stored in the URL via query params: `/search?q=radiohead`. This allows the user to go navigate back to the page and have the same search results populate, without a need for a separate mechanism or data store.

### Putting Logic Handling In Parent vs. Child

Let's look at `Log.tsx`, where we have the parent `<Log />` and child `<Search />` components. The `<Search />` component is an 'dumb' input with no logic -- all of the logic lives within the parent. This is to keep the `<Search />` component reusable. It can definitely be seen as premature abstraction, and all of this could live within the parent component, but eventually it would be nice to have more pages with search functionality and different logic.
