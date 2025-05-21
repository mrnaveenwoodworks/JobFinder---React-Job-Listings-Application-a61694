const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    jobType: "Full-time",
    salary: "$90,000 - $120,000",
    category: "Development",
    postedDate: "2023-05-10",
    logo: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxUZWNoQ29ycCUyQmNvbXBhbnklMkJsb2dvfGVufDB8fHx8MTc0NzgzODM3NXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "We are looking for a skilled Frontend Developer to join our team and help build beautiful, responsive web applications.",
    responsibilities: [
      "Develop and maintain responsive web applications using React",
      "Collaborate with UX designers to implement user interfaces",
      "Write clean, maintainable, and efficient code",
      "Optimize applications for maximum speed and scalability",
      "Ensure cross-browser compatibility and responsiveness"
    ],
    requirements: [
      "3+ years of experience with frontend development",
      "Proficiency in JavaScript, HTML, CSS, and React",
      "Experience with responsive design and CSS frameworks like Tailwind",
      "Knowledge of frontend build tools like Webpack",
      "Understanding of Git version control"
    ],
    benefits: [
      "Competitive salary",
      "Health, dental, and vision insurance",
      "Flexible work hours",
      "Remote work options",
      "Generous PTO policy"
    ]
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "DataFlow Systems",
    location: "Austin, TX",
    jobType: "Full-time",
    salary: "$100,000 - $130,000",
    category: "Development",
    postedDate: "2023-05-05",
    logo: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxEYXRhRmxvdyUyQlN5c3RlbXMlMkJjb21wYW55JTJCbG9nb3xlbnwwfHx8fDE3NDc4MzgzODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "DataFlow Systems is seeking a backend engineer to develop and maintain our cloud-based data processing platform.",
    responsibilities: [
      "Design and implement server-side applications",
      "Optimize database queries and data structures",
      "Deploy and monitor applications in cloud environments",
      "Collaborate with frontend developers to integrate user-facing elements",
      "Implement security and data protection measures"
    ],
    requirements: [
      "4+ years of backend development experience",
      "Strong knowledge of Node.js, Python, or Java",
      "Experience with SQL and NoSQL databases",
      "Understanding of RESTful API design",
      "Familiarity with cloud platforms (AWS, Azure, GCP)"
    ],
    benefits: [
      "Competitive compensation package",
      "Stock options",
      "Health benefits",
      "401(k) matching",
      "Professional development budget"
    ]
  },
  {
    id: 3,
    title: "UX/UI Designer",
    company: "Creative Solutions",
    location: "Remote",
    jobType: "Contract",
    salary: "$70 - $90 per hour",
    category: "Design",
    postedDate: "2023-05-12",
    logo: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxDcmVhdGl2ZSUyQlNvbHV0aW9ucyUyQmNvbXBhbnklMkJsb2dvfGVufDB8fHx8MTc0NzgzODM5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Join our creative team to design intuitive and engaging user experiences for web and mobile applications.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity mockups",
      "Conduct user research and usability testing",
      "Develop user personas and journey maps",
      "Collaborate with developers to ensure design implementation",
      "Stay updated on UX/UI trends and best practices"
    ],
    requirements: [
      "3+ years of experience in UX/UI design",
      "Proficiency in design tools (Figma, Sketch, Adobe XD)",
      "Portfolio demonstrating strong UI design skills",
      "Understanding of user-centered design principles",
      "Experience with design systems"
    ],
    benefits: [
      "Flexible working hours",
      "Remote work",
      "Contract-to-hire potential",
      "Collaborative team environment",
      "Work on diverse and challenging projects"
    ]
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "CloudScale",
    location: "Seattle, WA",
    jobType: "Full-time",
    salary: "$110,000 - $150,000",
    category: "Operations",
    postedDate: "2023-05-03",
    logo: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxDbG91ZFNjYWxlJTJCY29tcGFueSUyQmxvZ298ZW58MHx8fHwxNzQ3ODM4Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "CloudScale is looking for a DevOps engineer to help us build and maintain our infrastructure and deployment pipelines.",
    responsibilities: [
      "Design and implement CI/CD pipelines",
      "Manage cloud infrastructure using IaC tools",
      "Monitor system performance and availability",
      "Implement security best practices",
      "Troubleshoot and resolve infrastructure issues"
    ],
    requirements: [
      "4+ years of DevOps experience",
      "Proficiency with AWS, Azure, or GCP",
      "Experience with Docker, Kubernetes, and container orchestration",
      "Knowledge of IaC tools (Terraform, CloudFormation)",
      "Scripting skills (Bash, Python)"
    ],
    benefits: [
      "Competitive salary",
      "Comprehensive benefits package",
      "Remote work options",
      "Learning and development opportunities",
      "Modern and collaborative work environment"
    ]
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "Analytix",
    location: "Boston, MA",
    jobType: "Full-time",
    salary: "$120,000 - $160,000",
    category: "Data Science",
    postedDate: "2023-05-08",
    logo: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxBbmFseXRpeCUyQmNvbXBhbnklMkJsb2dvfGVufDB8fHx8MTc0NzgzODQwOXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Analytix is seeking a Data Scientist to help extract insights from our large datasets and build predictive models.",
    responsibilities: [
      "Develop machine learning models to solve business problems",
      "Analyze large datasets to identify patterns and trends",
      "Create data visualizations to communicate findings",
      "Collaborate with engineering team to implement models",
      "Stay current with advancements in data science"
    ],
    requirements: [
      "Masters or PhD in Statistics, Computer Science, or related field",
      "3+ years of experience in data science or machine learning",
      "Proficiency in Python and data science libraries",
      "Experience with SQL and data manipulation",
      "Knowledge of statistical analysis and experimental design"
    ],
    benefits: [
      "Competitive salary and bonus structure",
      "Comprehensive health benefits",
      "Flexible work arrangements",
      "Continuous learning opportunities",
      "Modern office with standing desks"
    ]
  },
  {
    id: 6,
    title: "Product Manager",
    company: "InnovateCo",
    location: "New York, NY",
    jobType: "Full-time",
    salary: "$100,000 - $140,000",
    category: "Management",
    postedDate: "2023-05-11",
    logo: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxJbm5vdmF0ZUNvJTJCY29tcGFueSUyQmxvZ298ZW58MHx8fHwxNzQ3ODM4NDE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "InnovateCo is looking for a Product Manager to drive the development of our digital products from conception to launch.",
    responsibilities: [
      "Define product vision, strategy, and roadmap",
      "Gather and prioritize product requirements",
      "Work closely with engineering, design, and marketing teams",
      "Analyze market trends and competitor products",
      "Define success metrics and track product performance"
    ],
    requirements: [
      "5+ years of experience in product management",
      "Experience shipping successful digital products",
      "Strong analytical and problem-solving skills",
      "Excellent communication and stakeholder management",
      "Technical background preferred"
    ],
    benefits: [
      "Competitive salary and equity",
      "Comprehensive benefits package",
      "Professional development budget",
      "Flexible work options",
      "Weekly team events and activities"
    ]
  },
  {
    id: 7,
    title: "Full Stack Developer",
    company: "WebSolutions",
    location: "Chicago, IL",
    jobType: "Full-time",
    salary: "$95,000 - $125,000",
    category: "Development",
    postedDate: "2023-05-06",
    logo: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxXZWJTb2x1dGlvbnMlMkJjb21wYW55JTJCbG9nb3xlbnwwfHx8fDE3NDc4Mzg0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Join our team as a Full Stack Developer to help build and maintain web applications for our diverse client base.",
    responsibilities: [
      "Develop both frontend and backend components of web applications",
      "Collaborate in an agile development environment",
      "Write clean, maintainable, and testable code",
      "Troubleshoot and debug issues across the stack",
      "Mentor junior developers"
    ],
    requirements: [
      "4+ years of full stack development experience",
      "Proficiency in JavaScript/TypeScript, React, and Node.js",
      "Experience with relational and NoSQL databases",
      "Knowledge of RESTful API design principles",
      "Understanding of CI/CD practices"
    ],
    benefits: [
      "Competitive compensation",
      "Health and wellness benefits",
      "Remote work flexibility",
      "Professional growth opportunities",
      "Collaborative work environment"
    ]
  },
  {
    id: 8,
    title: "Marketing Manager",
    company: "GrowthHackers",
    location: "Denver, CO",
    jobType: "Full-time",
    salary: "$85,000 - $110,000",
    category: "Marketing",
    postedDate: "2023-05-09",
    logo: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxHcm93dGhIYWNrZXJzJTJCY29tcGFueSUyQmxvZ298ZW58MHx8fHwxNzQ3ODM4NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "GrowthHackers is seeking a Marketing Manager to develop and execute marketing strategies to drive business growth.",
    responsibilities: [
      "Develop and implement marketing campaigns across channels",
      "Manage digital marketing initiatives (SEO, PPC, social media)",
      "Analyze campaign performance and optimize strategies",
      "Collaborate with sales team to align marketing efforts",
      "Manage marketing budget and resources"
    ],
    requirements: [
      "5+ years of marketing experience",
      "Experience with digital marketing channels",
      "Strong analytical skills and data-driven approach",
      "Excellent project management abilities",
      "Creative problem-solving skills"
    ],
    benefits: [
      "Competitive salary",
      "Comprehensive benefits package",
      "Flexible work arrangements",
      "Professional development opportunities",
      "Collaborative team environment"
    ]
  },
  {
    id: 9,
    title: "QA Engineer",
    company: "QualityFirst",
    location: "Portland, OR",
    jobType: "Full-time",
    salary: "$80,000 - $105,000",
    category: "QA",
    postedDate: "2023-05-04",
    logo: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxRdWFsaXR5Rmlyc3QlMkJjb21wYW55JTJCbG9nb3xlbnwwfHx8fDE3NDc4Mzg0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "QualityFirst is looking for a detailed-oriented QA Engineer to ensure the quality and reliability of our software products.",
    responsibilities: [
      "Design and implement test plans and test cases",
      "Execute manual and automated tests",
      "Report and track bugs through resolution",
      "Collaborate with development teams to improve quality",
      "Perform regression testing for new releases"
    ],
    requirements: [
      "3+ years of QA experience",
      "Experience with test automation tools",
      "Knowledge of software testing methodologies",
      "Strong analytical and problem-solving skills",
      "Attention to detail"
    ],
    benefits: [
      "Competitive salary",
      "Health and wellness benefits",
      "Flexible work hours",
      "Remote work options",
      "Continuous learning opportunities"
    ]
  },
  {
    id: 10,
    title: "Mobile Developer (iOS)",
    company: "AppWorks",
    location: "Los Angeles, CA",
    jobType: "Full-time",
    salary: "$95,000 - $130,000",
    category: "Development",
    postedDate: "2023-05-07",
    logo: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxBcHBXb3JrcyUyQmNvbXBhbnklMkJsb2dvfGVufDB8fHx8MTc0NzgzODQ1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "AppWorks is seeking an experienced iOS Developer to join our team and help build innovative mobile applications.",
    responsibilities: [
      "Develop and maintain iOS applications using Swift",
      "Collaborate with cross-functional teams to define features",
      "Ensure high-quality code through testing and code reviews",
      "Troubleshoot and fix bugs",
      "Stay current with Apple's design principles and guidelines"
    ],
    requirements: [
      "4+ years of iOS development experience",
      "Proficiency in Swift and Objective-C",
      "Experience with iOS frameworks and APIs",
      "Knowledge of mobile app architecture patterns",
      "Strong problem-solving skills"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance and retirement plans",
      "Flexible work arrangements",
      "Professional development budget",
      "Company-sponsored events and activities"
    ]
  }
];

export default jobsData;