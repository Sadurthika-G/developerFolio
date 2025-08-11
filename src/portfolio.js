/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sadurthika G",
  title: "Hi all, I'm Sadurthika 👋",
  subTitle: emoji(
    "I am a dedicated and passionate individual striving to make a meaningful impact in technology and entrepreneurship. With interests in Machine Learning, IoT, and Sustainable Technology, I thrive at the intersection of cutting-edge technology and real-world applications."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Sadurthika-G",
  linkedin: "https://www.linkedin.com/in/sadurthika-g-770b73262",
  gmail: "sadurthig@gmail.com",
  display: true // Set true to display this section
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "TECH ENTHUSIAST | INNOVATOR | COMMUNITY LEADER",
  skills: [
    emoji("💡 Applying IoT and AI to solve real-world problems"),
    emoji("🌱 Promoting sustainable and impactful technologies"),
    emoji("🌟 Leading initiatives in entrepreneurship and tech communities")
  ],
  softwareSkills: [
    { skillName: "Machine Learning", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "IoT", fontAwesomeClassname: "fas fa-microchip" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Arduino", fontAwesomeClassname: "fas fa-microchip" },
    { skillName: "Tinkercad", fontAwesomeClassname: "fas fa-tools" },
    { skillName: "Leadership", fontAwesomeClassname: "fas fa-users" },
    { skillName: "Sustainable Tech", fontAwesomeClassname: "fas fa-leaf" }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Jansons Institute of Technology",
      subHeader: "Bachelor of Engineering - ECE",
      duration: "2022 - 2026",
      desc: "Active participant and leader in multiple tech and innovation communities",
      descBullets: [
        "Secretary - IEEE JIT Student Branch",
        "Founder & CTO at CiviMastro Technologies Private Limited",
        "JIT IIC Ambassador",
        "NSS Volunteer"
      ]
    }
  ]
};

// Tech Stack Section

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Machine Learning", progressPercentage: "60%" },
    { Stack: "IoT & Embedded Systems", progressPercentage: "75%" },
    { Stack: "Sustainable Innovation", progressPercentage: "80%" },
    { Stack: "Leadership & Communication", progressPercentage: "85%" }
  ],
  displayCodersrank: false
};

// Work Experience Section

const workExperiences = {
  display: false,
  experience: []
};

// Open Source Section

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Big Projects Section

const bigProjects = {
  title: "Projects",
  subtitle: "Here are a few of my impactful works",
  projects: [
    {
      image: "https://via.placeholder.com/150",
      projectName:
        "Structural Integrity Assessment & Maintenance System (SIAMS)",
      projectDesc:
        "AI-based structural safety system designed to monitor and assess buildings in real-time.",
      footerLink: [{ name: "GitHub", url: "https://github.com/Sadurthika-G" }]
    },
    {
      image: "https://via.placeholder.com/150",
      projectName: "IoT-enabled Sericulture Unit",
      projectDesc:
        "Automated disinfection and temperature control system for sericulture productivity.",
      footerLink: [{ name: "GitHub", url: "https://github.com/Sadurthika-G" }]
    }
  ],
  display: true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements 🏆"),
  subtitle: "Some proud moments of recognition",
  achievementsCards: [
    {
      title: "Runner-up – BVS Conference",
      subtitle: "Organized by the Government of Gujarat"
    },
    {
      title: "Top 5 – AICTE Arm Community Project",
      subtitle: "All India Ranking in tech contest"
    },
    {
      title: "Best Paper Award",
      subtitle: "International Conference at Suguna College"
    },
    {
      title: "Hackathon Champion",
      subtitle:
        "EDII Hackathon 2024 by Govt. of Tamil Nadu – 1st Prize"
    }
  ],
  display: true
};

// Blog Section

const blogSection = {
  title: "Blogs & Media",
  subtitle: "Thoughts, ideas, and innovations I love to share",
  displayMediumBlogs: false,
  blogs: [
    {
      url: "https://medium.com/@sadurthig",
      title: "From Ideas to Impact – My Startup Journey",
      description:
        "Reflections on building sustainable tech solutions through innovation."
    }
  ],
  display: true
};

// Resume Section

const resumeSection = {
  title: "Resume",
  subtitle:
    "To know more about me visit :https://docs.google.com/spreadsheets/d/1LsirOvNEmcWH8F4SifbiE5_dDHBVOGdI0pdVGmhh6HM/edit?usp=sharing",
  display: true
};

// Contact Info Section

const contactInfo = {
  title: emoji("Contact Me 📬"),
  subtitle: "Let's collaborate and innovate together!",
  email_address: "sadurthig@gmail.com"
};

const isHireable = false;

// Talks Section

const talkSection = {
  title: emoji("Talks and Presentations 🎙"),
  subtitle:
    "I love sharing my knowledge and experiences at events and conferences.",
  talks: [],
  display: false
};

// Podcasts Section

const podcastSection = {
  title: "Podcasts",
  subtitle: "I've had the pleasure of being a guest on some great podcasts.",
  podcasts: [],
  display: false
};

// Twitter Section

const twitterDetails = {
  userName: "YourTwitterUsername",
  display: false
};

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
  contactInfo,
  isHireable,
  resumeSection,
  talkSection,
  podcastSection,
  twitterDetails
};
