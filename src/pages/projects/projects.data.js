import CRWN from '../../assets/crwn-clothing.PNG';
import HALP_CLI from '../../assets/javascript_example.PNG';
import PERSONAL from '../../assets/personal-website.PNG'

const PROJECTS_DATA = {
  projects: [
    {
      "project": "Personal Website",
      "img": PERSONAL,
      "github": "https://github.com/btzc/personal-website-v3",
      "link": "https://brandonzhoucharles.com",
      "description": "A revamped version of my old website. Features an accessible friendly colour scheme, more animations, some personal flair, and just an overall cooler look",
      "technologies": [
        'React',
        'SCSS',
        'JavaScript',
        'Git'
      ]
    },
    {
      "project": "CRWN Clothing",
      "img": CRWN,
      "github": "https://github.com/btzc/udemy-react-ztm",
      "link": "https://crwn-live-btzc.herokuapp.com/",
      "description": "A clothing site created while following a Udemy tutorial. Features OAuth authentication, cart manipulation, and checking out of cart items",
      "technologies": [
        'React',
        'Redux',
        'JavaScript',
        'SCSS',
        'Node.js',
        'Stripe API',
        'Firebase'
      ]
    },
    {
      "project": "HALP_CLI",
      "img": HALP_CLI,
      "github": "https://github.com/btzc/halp-cli",
      "description": "A way for terminal junkies to never have to use a browser to find a coding question answer. Features syntax highlighting, formatting, and parsing Medium or StackOverflow answers",
      "technologies": [
        'Node.js'
      ]
    }
  ]
};

export default PROJECTS_DATA;
