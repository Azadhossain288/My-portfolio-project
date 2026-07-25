import shohojpayImg from "../assets/payment.png";
import jobTrackerImg from "../assets/job-tracker.png";
import techwaveImg   from "../assets/podecast.png";
import teaHouseImg   from "../assets/tea-house.png";
import ironPulseImg  from "../assets/ironpulse.png"; 
import ghorKhojImg   from "../assets/ghorkhoj.png";
import travelImg     from "../assets/travel.png";
import driveFleetImg from "../assets/drivefleet.png";
import sunCartImg    from "../assets/Sun.png";
import circleCoreImg from "../assets/circlecore.png";

export const PROJECTS = [
  {
    num: "01",
    title: "IronPulse — Fitness & Gym Management Platform",
    category: "Fitness & Gym Management Platform",
    year: "2026",
    tags: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Stripe", "Better Auth", "TanStack Query", "Axios"],
    liveUrl: "https://fitness-platform-client-rxw4.vercel.app",
    githubUrl: "https://github.com/Azadhossain288/fitness-platform-client",
    desc: "A comprehensive fitness management platform designed for fitness enthusiasts, gym trainers, and administrators. Users can discover fitness classes, book sessions securely via Stripe, participate in community discussions, and track their fitness journey.",
    challenges: "Implementing secure session management and role-based access control across different user types (User, Trainer, Admin) with HTTPOnly cookies presented initial architectural hurdles. Additionally, handling server-side pagination with search regex filters and preventing duplicate bookings during Stripe checkout required careful backend logic synchronization.",
    futurePlans: "Planning to integrate real-time chat functionality between trainers and trainees using WebSockets, adding multi-language support, and introducing advanced graphical workout analytics for users to better monitor their weekly fitness progression.",
    color: "#c8a97e",
    bg: "linear-gradient(135deg, #1a0812 0%, #020d12 100%)",
    image: ironPulseImg,
  },


  {
    num: "02",
    title: "GhorKhoj (ঘরখোঁজ) – AI-Powered Real Estate Platform",
    category: "AI-Powered Real Estate Platform",
    year: "2026",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Better Auth", "Google Gemini / Groq", "Recharts"],
    liveUrl: "https://ghor-khoj-client.vercel.app/",
    githubUrl: "https://github.com/Azadhossain288/Ghor-khoj-client",
    desc: "A full-stack, AI-powered real estate listing and property discovery platform that enables users to explore, list, manage, and discover properties. Features an intelligent Smart Recommendation Engine and an Agentic AI Chat Assistant.",
    challenges: "Integrating real-time streaming responses and context-aware tool-calling support inside the Agentic AI Chat Assistant, alongside building a weighted scoring and LLM re-ranking recommendation engine.",
    futurePlans: "Implementing property comparison, mortgage calculator, interactive maps, AI price prediction, and a voice-enabled AI assistant.",
    color: "#F59E0B",
    bg: "linear-gradient(135deg, #0F172A 0%, #020d12 100%)",
    image: ghorKhojImg,
  },


  {
    num: "03",
    title: "Bangladesh Travel Explorer",
    category: "Full-Stack TypeScript Travel Discovery Platform",
    year: "2026",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Recharts", "Next.js API Routes", "MongoDB", "Mongoose", "JWT"],
    liveUrl: "https://bangladesh-travel-explorer-type-scr.vercel.app/",
    githubUrl: "https://github.com/Azadhossain288/Bangladesh-Travel-Explorer-TypeScript-Project",
    desc: "A production-ready full-stack web application where users can discover tourist spots across Bangladesh (hills, beaches, waterfalls, historical sites, tea gardens), leave reviews, and add places they've visited themselves.",
    challenges: "Implementing middleware-based protected routes with Next.js and synchronizing automated average rating recalculations using MongoDB aggregation pipelines upon every new review submission.",
    futurePlans: "Integrating interactive map locations via Leaflet/Mapbox, multi-language support, and user favorite bucket lists.",
    color: "#34D399",
    bg: "linear-gradient(135deg, #022c22 0%, #020d12 100%)",
    image: travelImg,
  },


  
  {
    num: "04",
    title: "DriveFleet | Premium Car Rental Portal",
    category: "Premium Car Rental Booking Platform",
    year: "2026",
    tags: ["React", "React Router", "Axios", "Tailwind CSS", "React Icons", "Node.js", "Express"],
    liveUrl: "https://drivefleet-client-odwy.vercel.app",
    githubUrl: "https://github.com/Azadhossain288/drivefleet-client",
    desc: "A premium car rental booking platform featuring a curated luxury vehicle fleet with instant booking, flexible pickup locations, customer testimonials, and corporate inquiry support.",
    challenges: "Managing dynamic fleet category filters and creating a seamless, validated instant booking user flow with responsive client-side routing.",
    futurePlans: "Integrating Stripe payment gateway for advance booking deposits and adding real-time vehicle availability tracking.",
    color: "#38BDF8",
    bg: "linear-gradient(135deg, #032541 0%, #020d12 100%)",
    image: driveFleetImg,
  },


  {
    num: "05",
    title: "SunCart — Summer Essentials Store",
    category: "Modern Summer eCommerce Platform",
    year: "2026",
    tags: ["Next.js", "React", "Tailwind CSS", "DaisyUI", "Better Auth", "Better-SQLite3", "Lucide React", "Animate.css"],
    liveUrl: "https://easy-shop-project-using-next-js.vercel.app",
    githubUrl: "https://github.com/Azadhossain288/EasyShop-Project-Using-Next-JS",
    desc: "A modern summer eCommerce platform where users can explore and purchase seasonal products like sunglasses, summer outfits, skincare, and beach accessories with protected routes, profile management, and Google OAuth.",
    challenges: "Configuring Better Auth alongside better-sqlite3 for local storage persistence and protecting dynamic product detail routes efficiently.",
    futurePlans: "Integrating Stripe checkout payment gateway and full shopping cart management functionality.",
    color: "#F59E0B",
    bg: "linear-gradient(135deg, #2a1802 0%, #020d12 100%)",
    image: sunCartImg,
  },



  {
    num: "06",
    title: "CircleCore — Relationship Management Dashboard",
    category: "Minimalist Relationship Management Dashboard",
    year: "2026",
    tags: ["React.js", "Vite", "Tailwind CSS", "DaisyUI", "React Router DOM", "Lucide React", "Context API", "React Hot Toast"],
    liveUrl: "https://subtle-kleicha-4fb2a7.netlify.app",
    githubUrl: "https://github.com/Azadhossain288/CircleCore-projects-using-React-JS",
    desc: "A minimalist and intuitive Relationship Management Dashboard designed to help individuals maintain consistent connections with friends, family, and mentors using an interactive Core Circle and smart activity timelines.",
    challenges: "Managing global interaction states efficiently using Context API and dynamically calculating real-time connection status metrics without database backend dependencies.",
    futurePlans: "Integrating backend synchronization with Node.js and MongoDB for cross-device cloud sync and automated reminder push notifications.",
    color: "#8B5CF6",
    bg: "linear-gradient(135deg, #1e1b4b 0%, #020d12 100%)",
    image: circleCoreImg,
  },

  {
    num: "07",
    title: "ShohojPay",
    category: "Mobile Financial Services",
    year: "2026",
    tags: ["TailwindCSS", "JavaScript", "DaisyUI"],
    liveUrl: "https://azadhossain288.github.io/ShohojPay-project/",
    githubUrl: "https://github.com/Azadhossain288/ShohojPay-project",
    desc: "This is a ShojPay digital payment application that allows users to send money, cash out, add money, pay bills, and receive bonuses easily.",
    challenges: "Managing dynamic user balances and input validations securely using vanilla JavaScript DOM manipulation.",
    futurePlans: "Adding transaction history export features and graphical spending breakdown analytics.",
    color: "#c8a97e",
    bg: "linear-gradient(135deg, #1a0812 0%, #020d12 100%)",
    image: shohojpayImg,
  },
  {
    num: "08",
    title: "Job Tracker",
    category: "Track Your Job Applications Smarter",
    year: "2026",
    tags: ["HTML5", "TailwindCSS", "JavaScript"],
    liveUrl: "https://azadhossain288.github.io/Job-Tracker-Project-Using-Javascript-A-4-/",
    githubUrl: "https://github.com/Azadhossain288/Job-Tracker-Project-Using-Javascript-A-4-",
    desc: "This is a Job Tracker web application that helps users manage and monitor their job applications in one organized dashboard. It allows users to track application status (Interview, Rejected), view job details, filter listings, and manage their job search efficiently.",
    challenges: "Handling real-time state updates and persistent filter filtering across various job application statuses efficiently without framework support.",
    futurePlans: "Integrating LocalStorage persistence and interview date reminder alerts.",
    color: "#e8c47a",
    bg: "linear-gradient(135deg, #041a12 0%, #020e0a 100%)",
    image: jobTrackerImg,
  },
  {
    num: "09",
    title: "TechWave - Responsive Podcast Landing Page (Grid & Flexbox)",
    category: "Manage Your Podcast Experience Smarter",
    year: "2026",
    tags: ["HTML5", "CSS3", "Grid & Flex"],
    liveUrl: "https://azadhossain288.github.io/ASSIGNMENT2_OF_PH/",
    githubUrl: "https://github.com/Azadhossain288/ASSIGNMENT2_OF_PH",
    desc: "A modern dark-themed podcast landing page built using CSS Grid and Flexbox for a clean, structured, and responsive layout. It showcases featured episodes, host details, and key statistics with a visually engaging UI design.",
    challenges: "Achieving pixel-perfect responsiveness across diverse mobile and desktop screen breakpoints using purely CSS Grid and Flexbox layouts.",
    futurePlans: "Adding an audio preview player for featured podcast episodes directly on the landing page.",
    color: "#d4b896",
    bg: "linear-gradient(135deg, #031a10 0%, #021020 100%)",
    image: techwaveImg,
  },
  {
    num: "10",
    title: "The Tea House Landing Page!",
    category: "The Smart Way to Enjoy Your Perfect Cup of Tea",
    year: "2026",
    tags: ["HTML5", "tailwindCSS"],
    liveUrl: "https://azadhossain288.github.io/Tea-house-project/",
    githubUrl: "https://github.com/Azadhossain288/Tea-house-project",
    desc: "This landing page is a masterclass in Conversion-Focused Design. It doesn't just sell a product, it manages a lifestyle through a Smarter user journey.",
    challenges: "Structuring custom Tailwind utility configurations and engaging conversion layout flows.",
    futurePlans: "Integrating an e-commerce cart drawer for instant tea purchases.",
    color: "#c9a870",
    bg: "linear-gradient(135deg, #050f28 0%, #020d0a 100%)",
    image: teaHouseImg,
  },
];