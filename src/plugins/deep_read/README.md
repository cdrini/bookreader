# Deep Read plugin

Underlines named entities (people, places, organizations, works…) in the text
layer. Clicking one opens the **Deep Read** side panel with what the entity
means in this book and across archive.org.

Backend: [internetarchivecanada/deep-read](https://github.com/internetarchivecanada/deep-read/tree/main/backend).
`DeepReadApi.js` mirrors its schemas.

```js
br.options.plugins.deepRead = {
  // Without serverUrl, MockDeepReadApi guesses entities from the page OCR so
  // the UI can be worked on offline and on any book.
  serverUrl: 'http://localhost:8010',
  // Pages per extraction request
  windowSize: 4,
};
```

In the IA demo (`BookReaderDemo/demo-internetarchive.html`) the server defaults
to port 8010 on the same host; pass `?deepReadServer=<url>` to change it, or
`?deepReadServer=mock` for the mock.

Requires the `textSelection` plugin (mentions are rendered into its text layer).

## Flow

1. Pages are grouped into fixed windows of `windowSize` page indices. When a
   page's text layer renders, its window's entities are fetched once with
   `POST /v1/books/{id}/entities {start_leaf, end_leaf}`.
2. Each mention on that page (`mention.page_index`) has its OCR `quote` located
   in the text layer and wrapped in a
   `<mark class="BRhighlight BRdeepReadEntity BRdeepReadEntity--{type}">`.
3. On click (or picking from the panel's list of the current window's
   entities), `POST /v1/books/{id}/context {entity, start_leaf, end_leaf}` and
   render the result in the side panel.

## Known limitations

- A quote that appears several times on a page is only marked once
  (`renderHighlight` marks the first match).
- Highlights cover whole words, including adjacent punctuation.
