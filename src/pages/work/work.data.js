const WORK_DATA = {
  jobs: [
    {
      "id": "pagerduty",
      "company": "PagerDuty",
      "url": "https://www.pagerduty.com/",
      "title": "Software Engineer Co-op",
      "dates": "May 2019 - August 2019",
      "bullets": [
        'Provisioned an AWS Memcached instance using Terraform to persist the learner models so that the learner would not have to re-create new models from scratch on service restart.',
        'Spearheaded developing a timeline component for users to view a list of related incidents using React and Redux',
        'Worked with teams upstream from our service to change the format of the event data being sent through Kafka using Elixir.'
      ]
    },
    {
      "id": "rbc",
      "company": "Royal Bank of Canada",
      "url": "https://www.rbcroyalbank.com/personal.html",
      "title": "DevOps Engineer Co-op",
      "dates": "September 2018 - April 2019",
      "bullets": [
        'Created a suite of Ansible roles to provision iOS, Android, and NPM build servers allowing for the task to be automated and run in 2 hours instead of 8 hours of manual effort. ',
        'Migrated build pipelines onto a team-internal instance of Cloud Jenkins to allow the team to have complete autonomy over the configuration of Jenkins. ',
        'Worked with various teams to get approval to automate the deployment of iOS builds using Fastlane allowing the iOS mobile banking team to have complete control over when they wanted to build and release. '
      ]
    },
    {
      "id": "eao",
      "company": "BC Environmental Assessment Office",
      "url": "https://projects.eao.gov.bc.ca/",
      "title": "Full Stack Developer Co-op",
      "dates": "January 2018 - April 2018",
      "bullets": [
        'Wrote unit tests using Karma, Jasmine, Istanbul, and Angular’s TestBed Suite for Angular modules created to bring branch coverage up from 0% to 80% which resulted in less frequent bugs appearing in production.',
        'Collaborated with a UX designer to create new website functionality for users to be able to view, comment, and vote on environmental projects happening in their area. ',
        'Proposed a new continuous integration workflow by researching a better Git branching strategy and by adding more code quality checks, such as code peer review and unit testing, before successful deployments to an environment.'
      ]
    },
    {
      "id": "pension",
      "company": "BC Pension Corporation",
      "url": "https://www.pensionsbc.ca/portal/page/portal/pen_corp_home/home/",
      "title": "Web Developer Co-op",
      "dates": "May 2017 - August 2017",
      "bullets": [
        'Worked in a cross-functional team to develop an app which let users to manage their pre-retirement beneficiaries using SCSS, HTML, JavaScript, and JSP. ',
        'Refactored form validation to make use of the HTML5 constraint validation API to make data validation on the frontend more robust'
      ]
    },
    {
      "id": "bazaar",
      "company": "The Bazaar",
      "url": "http://thebazaar.io",
      "title": "Software Engineer Co-op",
      "dates": "September 2016 - December 2016",
      "bullets": [
        'Worked closely with the CEO to develop a product MVP using Node.js, Express.js, Bootstrap, and MongoDB. ',
        'Modernized the marketing page to help potential customers and investors better understand our product. ',
        'Designed and implemented a CRUD API for the front end and mobile app to access'
      ]
    }
  ]
}

export default WORK_DATA;
