# RSS Reader CLI

A lightweight command-line tool built with TypeScript and Node.js that fetches and parses public RSS or Atom feeds right in your terminal.

## Installation

### Requirements

- Node.js 18 or later
- An internet connection

Install the dependencies and build the CLI:

```sh
npm install
npm run build
```

## Usage

Run the reader with the default Hacker News RSS feed:

```sh
npm start
```

To read a different public RSS or Atom feed, pass its URL:

```sh
npm start -- https://example.com/feed.xml
```

The CLI prints the feed title and description, followed by up to the five most
recent items with their links and publication dates. If no URL is provided, it
uses `https://news.ycombinator.com/rss`.

After building, you can also run the compiled CLI directly:

```sh
node dist/index.js https://example.com/feed.xml
```
