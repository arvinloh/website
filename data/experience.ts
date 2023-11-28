import moment from "moment";
import { Experience } from "../types";

const experience: Experience[] = [
  {
    company: "Monash University",
    companyUrl: "https://www.monash.edu/",
    positions: [
      {
        dates: {
          startDate: moment("1 Feb 2024 00:00 +0800"),
        },
        title: "Fastrack Founder 2024",
        description: [
          `Spearheaded the development and implementation of rapid prototyping techniques,
          facilitating real-life user testing.`,
          `Industry Collaboration and Network Expansion: Engaged in a dynamic collaboration 
          with a wide network of industry partners, including notable organizations like 
          Next - Reece Group, Shadowboxer, Hypershift Systems LUNA Start-up Studio, 
          Amazon Web Services, LaunchVic, Xailient, ThinkHQ, Airwallex, etc.`,
          `Business Acumen: Gained substantial experience in business operations 
          and strategies, enhancing my understanding of commercial practices and market dynamics`
        ],
      },
      {
        dates: {
          startDate: moment("1 Feb 2024 00:00 +0800"),
        },
        title: "Wired - Media",
      },
      {
        dates: {
          startDate: moment("5 Jan 2023 00:00 +0800"),
          endDate: moment("31 Dec 2023 00:00 +0800"),
        },
        title: "Monash Minds Leadership Program",
        description: [
          `Guided by a senior student and learn from the stories and experiences of 
          incredible leaders such as Fulbright Scholar, Khao Cao.`,
          `Acquired leadership development experience through meaningful hands-on service
          that addresses real-life needs in the Monash University community.`
        ],
      },
    ],
  },
  {
    company: "UPlus Real Estate Group",
    companyUrl: "https://www.realestate.com.au/agency/u-plus-real-estate-glen-waverley-GTGYVO",
    positions: [
      {
        dates: {
          startDate: moment("1 Mar 2022 00:00 +1000"),
          endDate: moment("5 Nov 2022 00:00 +1000"),
        },
        title: "Agent Representative",
        description: [
          `Assisted in the preparation of marketing materials and advertisements for
          properties, including brochures, flyers, and online marketing collateral.`,
          `Conducted market research and analysis to identify the most suitable
          target market for the property.`,
          `Excel proficiency for Investment Property Analysis (IPA) and 
          Customer Relationship Management (CRM).`,
          `Utilized digital platforms and traditional advertising methods 
          to maximize property exposure.`,
        ],
      },
    ],
  },
  {
    company: "Claxon Tournament Pte. Ltd",
    companyUrl: "https://claxontournaments.vercel.app/",
    positions: [
      {
        dates: {
          startDate: moment("20 Sept 2017 00:00 +1000"),
          endDate: moment("1 Aug 2020 00:00 +1000"),
        },
        title: "Co-Founder/ Managing Director",
        description: [
          `Given the opportunity to direct four seasonal tournaments, with each achieving
           a great amount of success, growing a following of 5,000 members`,
          `Negotiated terms of partnership with various game creators to organise
          well-publicized tournaments with large prizepools.`,
          `Assess and hire staff employees such as digital artists, streamers, and 
          moderators, and form a community engagement team.`,
          `Recruited, led and trained a team of 100 volunteers to enhance event experience`
        ],
      },
    ],
  },
];

export default experience;
