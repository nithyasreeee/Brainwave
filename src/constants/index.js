import { notification2, notification3, notification4, figma, notion, discord, slack, photoshop, protopie, framer, raindrop } from "../assets";
import { yourlogo } from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [
  {
    id: "0",
    title: "Brainwave",
    icon: "brainwave",
  },
  {
    id: "1",
    title: "Stopwatch",
    icon: "stopwatch",
  },
  {
    id: "2",
    title: "Development",
    icon: "development",
  },
];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  { src: figma, alt: "Photo icon" },
  { src: slack, alt: "Slack icon" },
  { src: notion, alt: "Dropbox icon" },
  { src: discord, alt: "Zoom icon" },
];

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: "Collab helps you build and share amazing photos with your friends and companies.",
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "src/assets/benefits/card-1.svg",
    iconUrl: "src/assets/benefits/icon-1.svg",
    imageUrl: "src/assets/benefits/image-1.png",
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "src/assets/benefits/card-2.svg",
    iconUrl: "src/assets/benefits/icon-2.svg",
    imageUrl: "src/assets/benefits/image-2.png",
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "src/assets/benefits/card-3.svg",
    iconUrl: "src/assets/benefits/icon-3.svg",
    imageUrl: "src/assets/benefits/image-3.png",
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "src/assets/benefits/card-4.svg",
    iconUrl: "src/assets/benefits/icon-4.svg",
    imageUrl: "src/assets/benefits/image-4.png",
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "src/assets/benefits/card-5.svg",
    iconUrl: "src/assets/benefits/icon-5.svg",
    imageUrl: "src/assets/benefits/image-5.png",
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "src/assets/benefits/card-6.svg",
    iconUrl: "src/assets/benefits/icon-6.svg",
    imageUrl: "src/assets/benefits/image-6.png",
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: "src/assets/socials/discord.svg",
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: "src/assets/socials/twitter.svg",
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: "src/assets/socials/instagram.svg",
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: "src/assets/socials/telegram.svg",
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: "src/assets/socials/facebook.svg",
    url: "#",
  },
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it more accessible for users.",
    date: "May 2023",
    status: "done",
    imageUrl: "src/assets/roadmap/image-1.png",
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: "src/assets/roadmap/image-2.png",
  },
  {
    id: "2",
    title: "Chatbot integration",
    text: "Allow the chatbot to be integrated into popular chat platforms like Slack, Discord, or Telegram.",
    date: "May 2023",
    status: "done",
    imageUrl: "src/assets/roadmap/image-3.png",
  },
  {
    id: "3",
    title: "Machine learning",
    text: "Implement machine learning algorithms to improve the chatbot's ability to understand and respond to user queries.",
    date: "May 2023",
    status: "progress",
    imageUrl: "src/assets/roadmap/image-4.png",
    colorful: true,
  },
];

export const collabText = "Brainwave enables seamless collaboration with your team and favorite apps. Work together, share ideas, and get things done faster!";

export const notificationImages = [notification2, notification3, notification4];

export const companyLogos = [
  { src: yourlogo, alt: "Your Company" },
];