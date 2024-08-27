import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  fiverr,
  upwork,
  weeblog,
  acm,
  systems,
  powershell,
  seo,
  tensorflow,
  playwright,
  mobile,
  backend,
  creator,
  web,
  typescript,
  html,
  css,
  tailwind,
  git,
  jmeter,
  Selenium,
  AWS,
  Jira,  
  LMS                ,
  Hospital           ,
  Financial          ,
  FaceRecognition    ,
  Allure             ,
  objDet             ,
  OMS                ,
  ParticipantsManager,
  GroundMotion       ,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Angular Developer",
    icon: web,
  },
  {
    title: ".NET Core Developer",
    icon: mobile,
  },
  {
    title: "Azure Cloud Engineer",
    icon: creator,
  },
  {
    title: "Automation Tester",
    icon: playwright,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "AI/ML/DL Engineer",
    icon: tensorflow,
  },
  {
    title: "Search Engine Optimization",
    icon: seo,
  },
  {
    title: "Powershell Developer",
    icon: powershell,
  }
];

const technologies: TTechnology[] = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Angular",
    icon: web,
  },
  {
    name: ".NET",
    icon: mobile,
  },
  {
    name: "Azure",
    icon: creator,
  },
  {
    name: "AWS",
    icon: AWS,
  },
  {
    name: "Python",
    icon: backend,
  },
  // {
  //   name: "tensorflow",
  //   icon: tensorflow,
  // },
  {
    name: "Playwright",
    icon: playwright,
  },
  {
    name: "Selenium",
    icon: Selenium,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "JMeter",
    icon: jmeter,
  },
  // {
  //   name: "Postman",
  //   icon: postman,
  // },
  {
    name: "JIRA",
    icon: Jira,
  },
];

const experiences: TExperience[] = [
  {
    title: "Junior Software Engineer",
    companyName: "Systems Limited",
    icon: systems,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Developing, Refactoring, and Maintaining .NET Core and Angular applications",
      "Deploying, Testing, and Monitoring applications E2E using Azure Cloud Services",
      "System Designing, Requirement Analysis, Mappings & Documentation using Papyrus, Draw.IO, and Microsoft Products",
      "Sanity, Regression, and Performance testing via debugging, Postman, JMeter",
      "Managing Database, Writing Complex Queries to facilitate SQL Database Operations",
      "Automation Testing using Selenium and Playwright via .NET NUnit and Specflow",
    ],
  },
  {
    title: "Python Developer",
    companyName: "ACM - FAST NUCES",
    icon: acm,
    iconBg: "#0076C0",
    date: "Oct 2022 - May 2023",
    points: [
      "Designing, Developing, Testing, Deploying a Web Application for Participant Management for ACM DEVDAY 2023",
      "Executing flawlessly Participant related operations - Registration, Edits, Scheduling, Cancellation, Verification, and Mailing",
      "Automated Systems build using Python Flask and HTML, CSS, Bootstrap to manage different workflows",
      "Utilizing QRCodes, Encrypted Hex Codes, and SMTP Library in Python to optimize verification process",
    ],
  },
  {
    title: "Owner & SEO Blogger",
    companyName: "Weeblog",
    icon: weeblog,
    iconBg: "#000000",
    date: "Jul 2022 - Jul 2023",
    points: [
      "Search Engine Optimized blogging for Computer Programming Niche",
      "Designed the website using WordPress themes and plugins",
      "Owned the blog website, managed a team of 5, composed 12 different articles",
    ],
  },
  {
    title: "Freelancer",
    companyName: "Upwork",
    icon: upwork,
    iconBg: "#00DD00",
    date: "Jul 2020 - Nov 2022",
    points: [
      "Composing different types of literatures (informative, journalistic, bibliographic, creative)",
      "Developing various applications with graphical interfaces and Mathematical Equations Modelling using C, C++, C#, and Python",
    ],
  },
  {
    title: "Freelancer",
    companyName: "Fiverr",
    icon: fiverr,
    iconBg: "#00B03A",
    date: "Jun 2020 - Jul 2022",
    points: [
      "Composing different types of literatures (informative, journalistic, bibliographic, creative)",
      "Provided Blogging and SEO services to different clients including Background Check in USA",
      "Developing various applications with graphical interfaces, multithreading, and OS structures using C and C++",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Fouzan tried his best to leave no loose ends and performed in the time he was allotted. No disturbances were observed and the quality of work was wonderful. I would recommend Fouzan in future.",
    name: "Jayapratha Pupsanathan",
    designation: "Software Engineer",
    company: "Universiti Tecknologi (Malaysia)",
    image: "https://th.bing.com/th/id/OIP.-m2TmCx4yYW0eho0HcCQkwHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    testimonial:
      "Being highly efficient and responsive, Fouzan has been fun to work with. Kept me updated throughout the project and responded quickly to any changes or requests made. Programming skills are great. Needs a little bit of work in terms of clean and understandable code, but other than that, he has been amazing.",
    name: "Shafik Khan",
    designation: "Graphic Designer",
    company: "Coroflot, Toronto (Canada)",
    image: "https://static.vecteezy.com/system/resources/previews/011/490/381/original/happy-smiling-young-man-avatar-3d-portrait-of-a-man-cartoon-character-people-illustration-isolated-on-white-background-vector.jpg",
  },
  {
    testimonial:
      "Fouzan completed the job to my required specifications. He also revised the work as requested. Recommended!",
    name: "Richy Bou",
    designation: "Trainer",
    company: "RBLS, Nagasaki (Japan)",
    image: "https://th.bing.com/th/id/OIP.ljBLaDP1KJQO9u9oy22EUwAAAA?rs=1&pid=ImgDetMain",
  },
  {
    testimonial:
      "An excellent seller that was really friendly and hardworking, completed my job easily. Highly recommend hiring Fouzan. Will definitely hire again.",
    name: "Sahil Bora",
    designation: "Software Engineer & Author",
    company: "FliteBoard, Organic Response, Melbourne (Australia)",
    image: "https://media.licdn.com/dms/image/v2/C5603AQHMWN-cEF29wA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1663159353449?e=1730332800&v=beta&t=LUaN2hxvXoYY8qOBABMLlExMUOEx6Wcl6grn_B9d_cM",
  },
];

const projects: TProject[] = [
  {
    name: "Library Management System",
    description:
      "Web-based platform that allows librarians to manage stock, book transactions, reports, and customer requests, and also allows customers to search, book, cancel, return, pay dues, request, and manage book transactions within a library, providing a convenient and efficient solution for library operations",
    tags: [
      {
        name: "angular",
        color: "red-text-gradient",
      },
      {
        name: "json-server",
        color: "yellow-text-gradient",
      },
      {
        name: "bootstrap",
        color: "purple-text-gradient",
      },
      {
        name: "firebase",
        color: "golden-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "blue-text-gradient",
      },
      
    ],
    image: LMS,
    sourceCodeLink: "https://librarymanagementsystem-930eb.web.app/",
  },
  {
    name: "Object Recognition in Image",
    description:
      "Scripted Application that detects objects from images using different Unimodal and Ensembles, built using 5 commonly used CNNs along with transfer learning, model tuning, and Fully Connected layers, acquiring an accuracy of upto 90%, enabling flexibility in a variety of applications requiring object detection.",
    tags: [
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "orange-text-gradient",
      },
      {
        name: "DeepLearning",
        color: "red-text-gradient",
      },
      {
        name: "Ensembled",
        color: "green-text-gradient",
      },
    ],
    image: objDet,
    sourceCodeLink: "https://github.com/fouzanasif/Object-Recognition-VOC2008-Dataset",
  },
  {
    name: "Participation Manager",
    description:
      "A web-based platform to register, edit, cancel, schedule, and manage registrations for an event along with sending mails, on-day verification, and handy management for each competition, enabling flexible, user-friendly, and resilient experience for managing team and participants for ACM's biggest event",
    tags: [
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "Flask",
        color: "red-text-gradient",
      },
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "orange-text-gradient",
      },
      {
        name: "Javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "GSpread",
        color: "green-text-gradient",
      },
    ],
    image: ParticipantsManager,
    sourceCodeLink: "https://github.com/fouzanasif/Basic-registration-and-verification-system",
  },
  {
    name: "Face Recognition in Video Attendance System",
    description:
      "A web-based platform to track and manage attendance of faculty including the class start time and end time along from archived daily videos of each class recorded using CCTV",
    tags: [
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "FAST-API",
        color: "golden-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "orange-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "SQLite",
        color: "blue-text-gradient",
      },
      {
        name: "GPU Programming",
        color: "red-text-gradient",
      },
    ],
    image: FaceRecognition,
    sourceCodeLink: "#",
  },
  {
    name: "Client's Order Management System",
    description:
      "Facilitating a large-scale business with microservices solution, providing seamless execution and synchronization for Order Management, Sales, Item Management, Promotions, and Customer Management",
    tags: [
      {
        name: "Azure",
        color: "blue-text-gradient",
      },
      {
        name: ".NET",
        color: "purple-text-gradient",
      },
      {
        name: "JMeter",
        color: "red-text-gradient",
      },
      {
        name: "Powershell",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
      {
        name: "REST-APIs",
        color: "green-text-gradient",
      },
      {
        name: "SOAP-APIs",
        color: "yellow-text-gradient",
      },
    ],
    image: OMS,
    sourceCodeLink: "#",
  },
  {
    name: "Client's Integrated Hospital System",
    description:
      "Integrating third parties with a Dubai governmental business to establish integrated solution, connecting the hospitals and the patients across UAE together to provide centralized, controlled, and synchronized Hospital and Patient Management System for admissions, lab tests, and other operations",
    tags: [
      {
        name: "Azure",
        color: "blue-text-gradient",
      },
      {
        name: ".NET",
        color: "purple-text-gradient",
      },
      {
        name: "JMeter",
        color: "red-text-gradient",
      },
      {
        name: "CRM",
        color: "golden-text-gradient",
      },
      {
        name: "Cryptography",
        color: "white-text-gradient",
      },
      {
        name: "REST-APIs",
        color: "green-text-gradient",
      },
    ],
    image: Hospital,
    sourceCodeLink: "#",
  },
  {
    name: "NUnit + Specflow Automation Testing",
    description:
      "Automating the testing process for Library Management System using Page Object Model and Behaviour Driven Testing via NUnit and Specflow in .NET Core, enabling regression testing for all features of the system",
    tags: [
      {
        name: "NUnit",
        color: "blue-text-gradient",
      },
      {
        name: "Speclow",
        color: "purple-text-gradient",
      },
      {
        name: "Selenium",
        color: "green-text-gradient",
      },
      {
        name: "Playwright",
        color: "red-text-gradient",
      },
      {
        name: ".NET",
        color: "purple-text-gradient",
      },
      {
        name: "POM",
        color: "yellow-text-gradient",
      },
    ],
    image: Allure,
    sourceCodeLink: "https://github.com/fouzanasif/Automation-Testing",
  },
  {
    name: "Ground Motion Data Analysis",
    description:
      "Cleaning, Transforming, Analyzing, and Modelling the Ground Motion data to extract meaningful insights of earthquakes that had been prevalent in past, facilitating predictive analysis of vulnerability of an earthquake within a region.",
    tags: [
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "Pandas",
        color: "white-text-gradient",
      },
      {
        name: "Sci-Kit",
        color: "blue-text-gradient",
      },
      {
        name: "DataScience",
        color: "golden-text-gradient",
      },
    ],
    image: GroundMotion,
    sourceCodeLink: "https://github.com/fouzanasif/NGA-West2-Dataset-Analysis",
  },
  {
    name: "Recommender System",
    description:
      "A scripted solution to recommend and provide insights of top performing items and their combinations using Statistical and Mathematical models, facilitating stable finance policy and influencing customer buying pattern",
    tags: [
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "Pandas",
        color: "white-text-gradient",
      },
      {
        name: "MarketBasket",
        color: "green-text-gradient",
      },
      {
        name: "Apriori",
        color: "red-text-gradient",
      },
      {
        name: "Finance",
        color: "blue-text-gradient",
      },
    ],
    image: Financial,
    sourceCodeLink: "https://github.com/fouzanasif/Sales-Data-Analysis",
  },
];

export { services, technologies, experiences, testimonials, projects };
