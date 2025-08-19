import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 
import typescriptLogo from "./assets/images/file.svg";
import typescriptHover from "./assets/images/file2.svg";
import ionicLogo from "./assets/images/file1.svg";
import ionicHover from "./assets/images/file12.svg";


const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};


const illustration = {
  animated: true 
};

const greeting = {
  username: "Limonadia",
  title: "Hi I'm Nadia",
  subTitle: emoji(
    "A developer with a special love for frontend, but I don't stop there. I'm passionate about solving problems in the smartest, most efficient way possible. As I grow in my career, I’m exploring different corners of the ever-expanding world of technology. My portfolio is constantly evolving, with projects built using a wide range of platforms and tools. Each one represents a new challenge, a new skill, and a new opportunity to grow."
  ),
  resumeLink:"https://drive.google.com/file/d/1-9uIO26mZ--BAHlWj1AYjAiHKIVDBzlE/view?usp=sharing",
  displayGreeting: true 
};

const socialMediaLinks = {
  github: "https://github.com/limonadia",
  linkedin: "https://www.linkedin.com/in/nadia-mezini-738625284/",
  gmail: "nadiamezini@gmail.com",
  gitlab: "https://git.bluehat.al/nadia.mezini",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "Currently I'm working as a Frontend Angular developer at BlueHat shpk in Tirana.",
  skills: [
    emoji(
      "⚡ Build dynamic, scalable, and accessible user interfaces with Angular"
    ),
    emoji(
      "⚡ Develop Progressive Web Apps (PWAs) and Single Page Applications (SPAs) with Angular"
    ),
    emoji(
      "⚡ Optimize performance with RxJS, Angular modules, and lazy loading"
    ),
    emoji(
      "⚡ State management and clean architecture with NgRx & services"
    ),
    emoji(
      "⚡ Integration of REST APIs, GraphQL, and third-party services"
    ),
    emoji(
      "⚡ Write reusable components and maintainable code following Angular best practices"
    )
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      src: typescriptLogo,
      hoverimg: typescriptHover
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Ionic",
      src: ionicLogo,
      hoverimg: ionicHover
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
  ],
  display: true 
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Faculty of Natural Sciences Tirana",
      logo: require("./assets/images/fshn.png"),
      subHeader: "Bachelor in Computer Science",
      duration: "September 2021 - July 2024",
      desc: "Focused on software engineering, web technologies, and computer systems while building a strong foundation in problem-solving and programming.",
      descBullets: [
        "Completed projects in web development using JavaScript, Angular, and modern frameworks",
        "Collaborated in group projects applying Agile methodologies",
        "Gained experience in data structures, algorithms, and database design",
        "Built console-based applications in C and C++ to strengthen problem-solving and memory management skills",
        "Implemented object-oriented projects in Java, including desktop applications and algorithms practice",
        "Created static and responsive web pages with HTML5 and CSS3",
        "Developed small-scale web applications using PHP with SQL database integration",
        "Designed and optimized relational databases (MySQL/PostgreSQL) with queries, stored procedures, and normalization",
        "Explored animation and infographic design principles, applying them to create engaging visual content",
        "Studied geolocation technologies and implemented projects involving maps, location tracking, and spatial data"
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend (Angular / React / UI Design)",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming (JavaScript / TypeScript / Algorithms)",
      progressPercentage: "70%"
    },
    {
      Stack: "DevOps & Cloud (Docker / CI-CD / Firebase / AWS basics)",
      progressPercentage: "40%"
    },
    {
      Stack: "Version Control & Collaboration (Git / GitHub / Agile)",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false 
};


const workExperiences = {
  display: true,
  experience: [
    {
      role: "Angular Developer",
      company: "BlueHat Shpk",
      companylogo: require("./assets/images/bluehat.jpeg"),
      date: "November 2024 – Present",
      desc: "Building cross-platform web and mobile applications with Angular and Ionic, focusing on scalable, user-friendly solutions.",
      descBullets: [
        "Developed responsive front-end interfaces using Angular, TypeScript, and Ionic components",
        "Integrated REST APIs and optimized application performance",
        "Collaborated in Agile teams, participating in code reviews, debugging, and testing",
        "Enhanced application scalability and maintainability through best practices"
      ]
    },
    {
      role: "Devops Intern",
      company: "TiranaIT",
      companylogo: require("./assets/images/tiranait.jpeg"),
      date: "July 2024 – October 2024",
      desc: "Gained hands-on experience with DevOps tools and workflows, contributing to efficient deployment and collaboration.",
      descBullets: [
        "Worked with Docker and Kubernetes for containerization and orchestration",
        "Used GitHub for version control and Jira for project management",
        "Developed Linux and shell scripting skills for application deployment",
        "Collaborated with team members to solve technical challenges and improve workflows"
      ]    
    }
  ]
};

const openSource = {
  showGithubProfile: "false", 
  display: false
};


const bigProjects = {
  title: "My Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/krijime.png"),
      projectName: "Krijime Zanash",
      projectDesc: "An e-commerce platform showcasing and selling handmade jewelry, built to gain experience in online retail and frontend development.",
      footerLink: [
        {
          name: "See Repo",
          url: "https://github.com/limonadia/krijime-zanash"
        }
      ]
    },
    {
      image: require("./assets/images/libratrack.png"),
      projectName: "LibraTrack",
      projectDesc: "A library management system designed to handle reservations, cancellations, borrowing, returns, and overdue tracking, focusing on functionality and user-friendly design.",
      footerLink: [
        {
          name: "See Repo",
          url: "https://github.com/limonadia/libraTrack"
        }
      ]
    },
    {
      image: require("./assets/images/nota.png"),
      projectName: "Nota Facile",
      projectDesc: "A web application for personal finance management, helping users track income, expenses, and overall financial health with intuitive dashboards.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://web.notafacile.italiacoding.com/"
        }
      ]
    },
    {
      image: require("./assets/images/discount.png"),
      projectName: "DiscountApp",
      projectDesc: "A mobile application that enables businesses to offer coupons and discounts, while allowing customers to easily discover and purchase promotional deals.",
      footerLink: [
        {
          name: "Unreleased App",
        }
      ]
    },
    {
      image: require("./assets/images/dental.png"),
      projectName: "DentalTour",
      projectDesc: "A platform connecting dental tourists with suitable clinics, streamlining the search, selection, and appointment process for international patients.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dev-dentaltour.italiacoding.com/"
        }
      ]
    }
  ],
  display: true 
};


const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", 
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false
};


const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false
};

const resumeSection = {
  title: "Resume",
  url: "https://drive.google.com/file/d/1-9uIO26mZ--BAHlWj1AYjAiHKIVDBzlE/view?usp=sharing",
  subtitle: "Feel free to download my resume",
  display: true 
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:"Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "nadiamezini@gmail.com"
};

const twitterDetails = {
  userName: "twitter", 
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
