# Streaming #
Streaming is a data transfer technique that allows you to break down a route into smaller "chunks" and progressively stream them from the server to the client as they become ready.

There are two ways you implement streaming in Next.js:

- At the page level, with the `loading.tsx` file.
- For specific components, with `<Suspense>.`

<Suspense></Suspense> breaks down the route in smaller chunks and displays a loading fallback, great for parallel fetching and you are waiting for a very slow fetch to complete

## Partial Rerendering (new) ##
When you isolate dynamic parts of a route. A static route shell is served ensuring a fast initial load.
You isolate them by using a suspense boundary to show a skeleton

requires:
```
experimental: {
  ppr: true,
},
```