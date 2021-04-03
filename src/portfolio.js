/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "weeebdev's Portfolio",
  description: "We(e)b developer 🍀 and Senior Procrastinator 🦥",
  og: {
    title: "Adil Akhmetov Portfolio",
    type: "website",
    url: "http://weeebdev.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Adil Akhmetov",
  logo_name: "AdilAkhmetov",
  nickname: "weeebdev",
  subTitle: "We(e)b developer 🍀 and Senior Procrastinator 🦥",
  resumeLink:
    "https://docs.google.com/viewer?url=https://docs.google.com/document/d/169vbQt_L2pSrQCOzzF3czqAaSMPgbFmi8f2X6jArDTQ/export?format=pdf",
  portfolio_repository: "https://github.com/weeebdev/weeebdev.github.io",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/weeebdev",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/adildev/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:weeebdev@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/weeebdev",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/sadcheat/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

// TODO: Add Skills
const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //   ],
    // },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
      ],
      softwareSkills: [
        // {
        //   skillName: "GCP",
        //   fontAwesomeClassname: "simple-icons:googlecloud",
        //   style: {
        //     color: "#4285F4",
        //   },
        // },
        // {
        //   skillName: "AWS",
        //   fontAwesomeClassname: "simple-icons:amazonaws",
        //   style: {
        //     color: "#FF9900",
        //   },
        // },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6",
        //   },
        // },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#7E57C2",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/weeebdev",
    },
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://leetcode.com/user3449f/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Suleyman Demirel University",
      subtitle: "Bachelor degree in Information Systems",
      logo_path: "sdu_logo.png",
      alt_name: "SDU",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Highest GPA 3.95/4.0",
      ],
      website_link: "https://sdu.edu.kz",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Математика и Python для анализа данных",
      subtitle: "- Moscow Institute of Physics and Technology",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/KAL72YYQGXED",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as DevOps Engineer, Designer and Frontend Developer.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Freelancing",
          company: "",
          company_url: "",
          logo_path: "icons8-home-64.png",
          duration: "Apr 2020 - Jun 2020",
          location: "Remote",
          description:
            "I was taking random tasks from university and different companies.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Frontend Web Developer Intern",
          company: "Dar Lab.",
          company_url: "https://dar.io/",
          logo_path: "dar-logo.png",
          duration: "Jun 2021 - Present",
          location: "Remote",
          description:
            "Learning frameworks: \
                      - React; \
                      - Angular; \
                      - Nest;",
          // color: "#ee3c26",
        },
        {
          title: "Information Security Intern",
          company: "Beeline",
          company_url: "https://beeline.kz/",
          logo_path: "beeline-logo.jpg",
          duration: "Jun 2020 - Aug 2020",
          location: "Remote",
          description:
            "Digital Generation program. Responsibilities: Building an experimental polygon for pentesting; Developing a web server for pentesting;",
          // color: "#0071C5",
        },
        {
          title: "Frontend Web Developer Intern",
          company: "ONE Technologies",
          company_url: "https://one.kz/",
          logo_path: "one-logo.png",
          duration: "Jun 2020 - Aug 2020",
          location: "Remote",
          description:
            "I was learning different frameworks for web development like React & Next. For the final project, we worked on https://lab.one.kz (although, it is a bit refactored now). I was responsible for the frontend part.",
          // color: "#0071C5",
        },
        {
          title: "System Administrator Intern",
          company: "IT Support Group Kazakhstan",
          company_url: "https://itsupport.kz/",
          logo_path: "itsupport-logo.png",
          duration: "May 2020 - Jun 2020",
          location: "Almaty, Kazakhstan",
          description:
            "Responsibilities: Exchange data between branches of the company with a help of 1C v8.3; Maintenance of office computers; Installing factory servers",
          // color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "#WikigapKazakhstan translator",
          company: "WikiGap",
          company_url: "http://wikigapkazakhstan.kz",
          logo_path: "wikigap-logo.png",
          duration: "Nov 2020 - Mar 2021",
          location: "remote",
          description:
            "Participated in the #WikigapKazakhstan project to close the gender gap on Wikipedia.",
          // color: "#4285F4",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Remote",
          description:
            "I am actively contributing to many opensource projects.  These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "weeebdev_profile.png",
    description:
      "I am available on almost every social media. You can message me, I will try to reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I have Today I Learned blog where I post different technologies and tricks that I learn everyday!",
    link: "https://github.com/weeebdev/til",
    avatar_image_path: "blogs_image.svg",
  },
  // addressSection: {
  //   title: "Address",
  //   subtitle:
  //     "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
  //   avatar_image_path: "address_image.svg",
  //   location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  // },
  // phoneSection: {
  //   title: "Phone Number",
  //   subtitle: "+91 8320758513",
  // },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
