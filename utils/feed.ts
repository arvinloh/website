import moment from "moment";
import { Feed } from "feed";

import * as prismicH from "@prismicio/helpers";

import { IPrismicDocumentRecord, Nullable } from "../types";

export const generateFeed = (posts: IPrismicDocumentRecord[]) => {
    let lastUpdated;
    const firstPostPublishedTime = prismicH.asDate(posts[0].data.published_time);
    if (firstPostPublishedTime) {
      lastUpdated = new Date(firstPostPublishedTime.toISOString());
    } else {
      lastUpdated = new Date();
    }
  
    const feed = new Feed({
      title: "Arvin Loh",
      description: "Engineer &#124; maker of things",
      id: "http://arvinloh.netlify.app",
      copyright: "Copyright (C) Arvin Loh 2023 -",
      language: 'en-AU',
      feedLinks: {
        xml: "http://arvinloh.netlify.app/blog/feed.xml",
        json: "http://arvinloh.netlify.app/blog/feed.json",
      },
      author: {
        name: "Arvin Loh",
        email: "arvin.loh1111@gmail.com",
        link: "http://arvinloh.netlify.app",
      },
      updated: lastUpdated,
    });
  
    posts.forEach((post: IPrismicDocumentRecord) => {
      const { uid, data } = post;
      const { title, published_time, summary } = data;
  
      let _published_time;
  
      const _pub_time_iso = prismicH.asDate(published_time);
      if (_pub_time_iso) {
        _published_time = moment(_pub_time_iso.toISOString());
      } else {
        _published_time = moment();
      }
  
      feed.addItem({
        title: prismicH.asText(title) as string,
        description: prismicH.asText(summary) as string,
        date: _published_time.toDate(),
        link: `http://arvinloh.netlify.app/blog/${uid}`,
      });
    });
  
    return feed;
  };