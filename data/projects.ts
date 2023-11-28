import { Project } from '../types';

interface Projects {
  current: Project[];
  previous: Project[];
}

// imageUrl: 'https://avatars1.githubusercontent.com/u/18567331?v=4',
// repoUrl: 'https://github.com/MARIE-js/MARIE.js',
// screenshotUrl: '/images/projects/mariejs.png',
// url: 'https://marie.js.org',

const projects: Projects = {
  current: [
    {
      description:
        'Monash WAM (Weighted Average Mark) Calculator is a tool that allows Monash University students to calculate their WAM.',
      name: 'Monash WAM Calculator',
      url: '', // Add the URL here
    },
  ],
  previous: [
    {
      description:
        'Claxon Tournament is an organisation that holds tournament for all popular mobile games',
      imageUrl: 'https://avatars1.githubusercontent.com/u/26992093?v=4',
      name: 'Claxon Tournament',
      screenshotUrl: '/images/projects/claxon.png',
      url: 'https://claxontournaments.vercel.app/',
    },
    {
      description:
        'Pong is a classic game that is built using Python and Pygame. It is a two player game that allows players to play against each other',
      name: 'Pong',
      url: 'https://github.com/arvinloh/pong',
    },
    // {
    //   description:
    //     'Tracks flights sourced from various Australian state government websites using automated scraping tool.',
    //   name: 'COVID19 Australia Flight Tracker',
    //   url: 'https://covid19-flights.ericjiang.dev/',
    // },
    // {
    //   description: 'Muhnee is a new and exciting way to make managing your money simple.',
    //   imageUrl: 'https://avatars1.githubusercontent.com/u/58194669?v=4',
    //   name: 'Muhnee',
    //   url: 'https://muhneeapp.com',
    // },
  ],
};

export default projects