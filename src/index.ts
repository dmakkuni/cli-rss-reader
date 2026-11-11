import Parser from 'rss-parser';

interface CustomItem {
  title?: string;
  link?: string;
  pubDate?: string;
}

const parser = new Parser<any, CustomItem>();

async function fetchFeed(url: string) {
  try {
    console.log(`\nFetching feed from: ${url}...\n`);
    const feed = await parser.parseURL(url);

    console.log(`=== ${feed.title || 'RSS Feed'} ===`);
    console.log(`${feed.description || ''}\n`);

    feed.items.slice(0, 5).forEach((item, index) => {
      console.log(`${index + 1}. ${item.title}`);
      console.log(`   Link: ${item.link}`);
      console.log(`   Published: ${item.pubDate ? new Date(item.pubDate).toLocaleDateString() : 'Unknown'}\n`);
    });
  } catch (error) {
    console.error('Error fetching the RSS feed:', error);
  }
}

// Pass any valid RSS feed URL as a command-line argument, defaults to Hacker News
const targetUrl = process.argv[2] || 'https://news.ycombinator.com/rss';
fetchFeed(targetUrl);