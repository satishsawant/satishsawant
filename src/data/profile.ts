// Single source of truth for all portfolio content.
// Edit this file to update copy anywhere on the site — components only read from here.

export interface ExperienceEntry {
  company: string
  role: string
  period: string
  bullets: string[]
}

export interface ProjectEntry {
  name: string
  org: string
  period: string
  role: string
  stack: string[]
  bullets: string[]
}

export interface EducationEntry {
  degree: string
  field: string
  institution: string
  year: string
  detail?: string
}

export interface SkillGroup {
  label: string
  items: string[]
}

export const profile = {
  name: 'Satish Sawant',
  title: 'Software Engineer II',
  tagline: 'Full-stack developer — .NET, React & Node.js',
  location: 'Pune, IN',
  email: 'sawantss.77@gmail.com',
  phone: '7350127619',
  yearsExperience: '9+',

  // Configure or clear any of these — empty values are simply not rendered.
  links: {
    upwork: 'https://www.upwork.com/freelancers/~01ecbee254ba869c8c?viewMode=1',
    github: 'https://github.com/satishsawant',
    linkedin: 'https://www.linkedin.com/in/satish-sawant-71a119a2/',
    website: 'https://satishsawant.github.io/satishsawant/',
  },

  // Built with the configured `base` (see vite.config.ts) so the download link
  // works whether the site is deployed at the domain root or a sub-path.
  resumeFile: `${import.meta.env.BASE_URL}resume.pdf`,

  summary:
    'Software developer with 9+ years of experience designing, developing, and delivering scalable web applications and enterprise software solutions using .NET, .NET Core, C#, Node.js, React and AWS. Strong expertise in RESTful and GraphQL APIs, backend architecture, cloud deployment, database optimization, third-party API integrations, and performance improvement. Experienced leading development teams, mentoring engineers, troubleshooting complex technical issues, and delivering high-quality software in Agile environments. Proven ability to translate business requirements into scalable, maintainable, and reliable applications while contributing to continuous improvement and digital transformation.',
}

// Handful of pillars pulled straight from the resume's summary and bullets,
// used to spotlight the skills that matter most before the full skill matrix.
export interface CoreSkill {
  icon: 'code' | 'nodes' | 'layers' | 'cloud' | 'db'
  title: string
  description: string
}

export const coreExpertise: CoreSkill[] = [
  {
    icon: 'code',
    title: '.NET / C#',
    description: 'Enterprise web apps and APIs with .NET, .NET Core, C#, and Entity Framework.',
  },
  {
    icon: 'nodes',
    title: 'React',
    description: 'Production frontends — from e-commerce monitoring tools to internal business-rule platforms.',
  },
  {
    icon: 'layers',
    title: 'Node.js & APIs',
    description: 'RESTful and GraphQL APIs with Node.js, Nest JS, and Prisma.',
  },
  {
    icon: 'cloud',
    title: 'AWS & Cloud',
    description: 'Lambda, S3, EC2, and SQS pipelines; Docker and Kubernetes deployments.',
  },
  {
    icon: 'db',
    title: 'Databases',
    description: 'SQL Server, PostgreSQL, and MongoDB — schema design, indexing, and query optimization.',
  },
]

export const skills: SkillGroup[] = [
  { label: 'Languages', items: ['C#', 'JavaScript', 'SQL', 'Python'] },
  { label: 'Frontend', items: ['React', 'HTML', 'CSS', 'Bootstrap'] },
  { label: 'Backend', items: ['.NET Core', 'Web API', 'Node.js', 'Nest JS', 'GraphQL', 'Prisma'] },
  { label: 'Databases', items: ['SQL Server', 'PostgreSQL', 'MongoDB'] },
  {
    label: 'DevOps & Tools',
    items: ['AWS (S3, EC2, Lambda, SQS, DataSync)', 'Docker', 'GitHub', 'Jira', 'Visual Studio', 'VS Code'],
  },
  {
    label: 'Other',
    items: [
      'Web Scraping',
      'RESTful APIs',
      'Entity Framework',
      'Microservices',
      'Payment Gateway Integration',
      'CI/CD',
      'Unit Testing',
      'Docker',
      'Kubernetes',
      'Agile',
      'Design Patterns',
      'SOLID Principles',
      'MAUI',
    ],
  },
]

export const experience: ExperienceEntry[] = [
  {
    company: 'Wiser Solutions',
    role: 'Software Engineer II',
    period: 'Nov 2025 – Sept 2026',
    bullets: [
      'Provided application support and development, troubleshooting customer issues, resolving production bugs, and implementing application enhancements based on business requirements.',
      'Developed a Python-based web data extraction tool, creating scripts to extract structured data from HTML and automate website data collection.',
      'Implemented automated website screenshot capture and validation, and analyzed HTTP requests using Postman to improve data extraction reliability.',
    ],
  },
  {
    company: 'Realisieren Technology',
    role: 'Senior Software Developer',
    period: 'May 2018 – Oct 2025',
    bullets: [
      'Led a team of backend developers in designing, developing, and maintaining scalable, high-performance applications using Node.js, PostgreSQL, and MongoDB.',
      'Optimized SQL queries, database schemas, and indexing strategies to improve database performance, application responsiveness, and scalability.',
      'Established and maintained software development lifecycle (SDLC) documentation, coding standards, development guidelines, and best practices.',
      'Developed and executed unit tests to ensure code quality, application reliability, and functional correctness prior to deployment.',
      'Integrated and maintained third-party APIs and payment services, including ShipStation and Braintree Payment Gateway, to enhance application functionality and streamline business operations.',
      'Collaborated with UI/UX designers and frontend developers to improve application usability, user experience, and overall product quality.',
    ],
  },
  {
    company: 'Realizer Technology',
    role: 'Software Developer',
    period: 'Aug 2016 – July 2017',
    bullets: [
      'Designed and developed Android applications using Android Studio, implementing UI screens, application features, API integration, and navigation based on project requirements. Collaborated with the team to develop new features.',
    ],
  },
]

export const projects: ProjectEntry[] = [
  {
    name: 'Brand Protection Agency, Channel Sync',
    org: 'Wiser',
    period: '2021 – 2026',
    role: 'Senior Developer',
    stack: ['ASP.NET', 'C#', 'MSSQL'],
    bullets: [
      'E-commerce monitoring tool designed to detect Minimum Advertised Price (MAP) violations across online channels.',
      'Responsible for maintenance and customer support, handling change requests and resolving production issues as needed.',
      'Contributed to the development, enhancement, and support of the platform during active phases.',
    ],
  },
  {
    name: 'Extraction Tool',
    org: 'Wiser',
    period: '2025 – 2026',
    role: 'Software Developer',
    stack: ['Python', 'MSSQL'],
    bullets: [
      'Developed and maintained an internal Python-based web data extraction tool to extract and process structured information from HTML content across multiple websites.',
      'Analyzed website behavior, HTTP requests, headers, parameters, and responses using Postman/Insomnia and browser developer tools to understand data retrieval mechanisms.',
      'Implemented HTML parsing and data extraction logic using Python to identify and extract required product and website information.',
      'Troubleshot request failures, response issues, and website-specific behaviors to improve the reliability and accuracy of the extraction process.',
      'Collaborated with the team to analyze new websites and implement site-specific extraction logic based on their HTML structure and request patterns.',
    ],
  },
  {
    name: 'OBE Self Service (Content Rule Management)',
    org: 'Wiser',
    period: '2024 – 2025',
    role: 'Senior Developer',
    stack: ['React', 'Nest JS', 'Prisma', 'GraphQL', 'AWS', 'Docker', 'Kubernetes'],
    bullets: [
      'Enhanced an internal tool for Wiser users to create and manage business rules.',
      'Frontend built using React, structured with a monorepo framework; backend built with Nest JS, Prisma, and GraphQL.',
      'Backend deployed using Docker and Kubernetes; frontend hosted on AWS S3. Both deployed via a GitHub Actions pipeline.',
      'Focused on building scalable, maintainable architecture for smooth content rule management.',
    ],
  },
  {
    name: 'Mineral View',
    org: 'Realisieren Technologies',
    period: '2022 – 2024',
    role: 'Backend Lead',
    stack: ['React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Braintree', 'AWS'],
    bullets: [
      'Platform delivering lease and production data insights to mineral owners and operators.',
      'Tech stack per resume: Angular (frontend), Node.js (API), PostgreSQL, MongoDB, Braintree (payment integration).',
      'Oversaw development using Node.js, PostgreSQL, and MongoDB; provided technical mentorship, performed code reviews, and promoted best coding practices within the team.',
    ],
  },
  {
    name: 'Bold Precious Metals',
    org: 'Realisieren Technologies',
    period: '2021 – 2022',
    role: 'Developer',
    stack: ['React', '.NET Core', 'MSSQL', 'Ship Station'],
    bullets: [
      'US-based e-commerce platform for buying and selling precious metals such as gold, silver, and platinum coins and bars.',
      'Tech stack per resume: AngularJS (frontend), .NET Core APIs, MSSQL, Ship Station, Braintree Payment Gateway.',
      'Integrated Ship Station for shipping and Braintree for secure payment processing.',
      'Contributed to infrastructure configuration, including Cloudflare setup, DNS management, and SSL certificate installation for secure hosting.',
    ],
  },
  {
    name: 'Ansira Web Scraping',
    org: 'Ansira (Client)',
    period: '2018 – 2020',
    role: 'Developer',
    stack: ['C#.NET', 'AWS Lambda', 'SQS', 'S3', 'EC2'],
    bullets: [
      'Internal project focused on scraping product data and storing it in a centralized database.',
      'Implemented two types of scraping: first-party and third-party scraping.',
      'Built a robust, scalable pipeline using AWS (Lambda, SQS, S3, EC2), with deployment managed through AWS CodePipeline for automated, consistent releases.',
    ],
  },
]

export const education: EducationEntry[] = [
  { degree: 'MCA', field: 'Computer Application', institution: 'MIT College, Ch. Sambhajinagar', year: '2015' },
  {
    degree: 'BCS',
    field: 'Computer Science',
    institution: "MGM's Dr. G Y Pathrikar College of CS and IT, Ch. Sambhajinagar",
    year: '2012',
  },
  { degree: 'HSC', field: 'Science', institution: 'Maharashtra State Board', year: '2008', detail: '79%' },
  { degree: 'SSC', field: 'Science', institution: 'Maharashtra State Board', year: '2006', detail: '67.43%' },
]

export const achievements: string[] = [
  'Awarded "Star Performer" for outstanding contribution, commitment, and performance during the Ansira Phase I project.',
  'Received client recognition for effective contribution and strong team commitment on the OBE Self Service project.',
  'Successfully completed an Android Development course from Felix IT Systems.',
]

// Tooling and workflow — drawn from the resume's DevOps/Other skills, kept as its own
// section since it's how the work actually gets done day to day.
export const toolsWorkflow: SkillGroup[] = [
  { label: 'IDEs & Editors', items: ['Visual Studio', 'VS Code', 'Android Studio'] },
  { label: 'Collaboration & Tracking', items: ['GitHub', 'Jira', 'Agile', 'Coralogix'] },
  { label: 'API & Debugging', items: ['Postman', 'Insomnia'] },
  { label: 'Deployment & Infra', items: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS CodePipeline'] },
]
