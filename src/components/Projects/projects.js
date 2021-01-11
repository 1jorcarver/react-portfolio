import professionalPortfolio from './assets/css-portfolio.png';
import recipeFinder from './assets/serverside-api.png';
import putaRingonit from './assets/orm-mvc.png';
import employeeTracker from './assets/sql.png';
import backEnd from './assets/orm.png';
import noSQL from './assets/nosql.png';

const projects = [

    {
        title: 'Put-A-Ring-On-It',
        source: putaRingonit,
        description: 'A full-stack wedding planner application.',
        link: 'https://put-a-ring-on-it.herokuapp.com/',
        repo: 'https://github.com/1jorcarver/put-a-ring-on-it'
    },
    {
        title: 'recipe-finder',
        source: recipeFinder,
        description: 'A recipe finder which uses server-side APIs.',
        link: 'https://salgorog.github.io/recipe-finder/',
        repo: 'https://github.com/1jorcarver/recipe-finder'
    },
    {
        title: 'professional-portfolio',
        source: professionalPortfolio,
        description: 'A basic css and html portfolio website.',
        link: 'https://1jorcarver.github.io/professional-portfolio/',
        repo: 'https://github.com/1jorcarver/professional-portfolio'
    },
    {
        title: 'employee-tracker',
        source: employeeTracker,
        description: 'A web app which uses SQL to track employees.',
        link: 'https://youtu.be/15haGQQgzjk',
        repo: 'https://github.com/1jorcarver/employee-tracker'
    },
    {
        title: 'ORM-eCommerce-BackEnd',
        source: backEnd,
        description: 'A back end to an e-commerce website.',
        link: 'https://youtu.be/2sxloWQ4HFQ',
        repo: 'https://github.com/1jorcarver/ORM-eCommerce-BackEnd'
    },
    {
        title: 'NoSQL-Social-Network-API',
        source: noSQL,
        description: 'An API for a social network using NoSQL.',
        link: 'https://youtu.be/iv-58waoA_U',
        repo: 'https://github.com/1jorcarver/NoSQL-Social-Network-API'
    }
];

export default projects;