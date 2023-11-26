const config = {
  PRISMIC: {
    token: process.env.PRISMIC_TOKEN,
  },
  AIRTABLE: {
    apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API,
    tableId: process.env.NEXT_PUBLIC_AIRTABLE_TABLE_ID,
  },
  LASTFM: {
    API_KEY: process.env.NEXT_PUBLIC_LASTFM_API_KEY,
    BASE_URI: "https://ws.audioscrobbler.com/2.0/",
    USER_NAME: "lorderikir",
  },
};

export const SITE_CONFIG = {
  description: `
  I’m a Computer Science student at Monash. \n
  I try to make impact.
  `,
  title: "Arvin Loh",
  urls: {
    BASE_URL: "https://ericjiang.dev",
  },
};
export default config;
