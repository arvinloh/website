import React from "react";
import { NextPageContext } from "next";
import { createClient } from "../../config/prismic";
import { generateFeed } from "../../utils/feed";

class BlogFeedRss extends React.Component {
  render() {
    return null; // or return some JSX if needed
  }
}

export async function getStaticProps(context: NextPageContext) {
  const { res } = context;
  if (!res) {
    return { props: {} };
  }
  const client = createClient();

  const posts = await (client as any).getAllByType("blog-post", {
    orderings: {
      field: "document.last_publication_date",
      direction: "desc",
    },
  });

  res.setHeader("Content-Type", "text/xml");
  res.write(generateFeed(posts).rss2());
  res.end();

  return { props: {} };
}

export default BlogFeedRss;