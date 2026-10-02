/* =====================================================================
   PORTFOLIO DATA — this is the ONLY file you need to edit.
   ---------------------------------------------------------------------
   • Every section of the website is built from the data below.
   • To add something, copy an existing { ... } block, paste it,
     and change the values. Don't forget the comma between blocks.
   • Images go in  assets/img/  (file names are case-sensitive on
     GitHub Pages: "Dino.png" and "dino.png" are different files).
   • Dates use "YYYY-MM" (e.g. "2024-03"). Use "present" for an
     ongoing job. Years of experience are calculated automatically.
   ===================================================================== */

const PORTFOLIO = {

  /* ------------------------------------------------------------------ */
  /* 1. PROFILE                                                          */
  /* ------------------------------------------------------------------ */
  profile: {
    name: "Usman Ghani",
    title: "Lead Game Developer",
    // Rotating words under your name in the hero section
    roles: [
      "Lead Unity Game Developer",
      "Systems Architect",
      "XR & Multiplayer Developer",
      "AI / ML in Games Explorer",
    ],
    tagline:
      "I build scalable, high-performance games and immersive experiences for mobile, desktop, WebGL and XR, and I'm now bringing AI and machine learning into Unity.",
    photo: "assets/img/BG1.jpeg",
    location: "Islamabad, Pakistan",
    email: "usmanghani.inbox@gmail.com",
    phone: "+92 317 1675472",
    cv: "assets/Usman_Ghani_CV.pdf", // replace this PDF whenever your CV changes
    openToWork: true, // shows the "Open to opportunities" badge
    socials: [
      { label: "LinkedIn", icon: "bi-linkedin", url: "https://www.linkedin.com/in/usmanghani-profile/" },
      { label: "GitHub", icon: "bi-github", url: "https://github.com/UG0100120" },
      { label: "Soar Games", icon: "bi-controller", url: "http://www.playsoargames.com/" },
      // { label: "YouTube", icon: "bi-youtube", url: "https://youtube.com/@yourchannel" },
      // { label: "itch.io", icon: "bi-joystick", url: "https://yourname.itch.io" },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 2. ABOUT (each string is one paragraph)                             */
  /* ------------------------------------------------------------------ */
  about: [
    "I'm a Lead Unity Game Developer and Systems Architect. I build scalable, high-performance and immersive experiences for iOS, macOS, Android, WebGL, desktop and XR. My core is Unity and C#. I design multiplayer systems, optimize large projects for performance, and lead teams from architecture through to production.",
    "I care about clean architecture, maintainable code, strong Git workflows and mentoring developers, so the games we ship are production-ready and can grow.",
    "Right now I'm going deep into AI, machine learning, deep learning and data science. I'm adding ML to Unity games, building AI-driven game experiences, and learning the fundamentals properly.",
  ],

  /* Extra numbers shown in the stats strip.
     "Years of experience" and "Projects" are calculated automatically. */
  extraStats: [
    { value: "6+", label: "Platforms shipped" },
    { value: "3", label: "Studios" },
  ],

  /* ------------------------------------------------------------------ */
  /* 3. SKILLS (add/remove groups or items freely)                       */
  /* ------------------------------------------------------------------ */
  skills: [
    {
      group: "Engine & Languages",
      icon: "bi-cpu",
      items: ["Unity 2D", "Unity 3D", "C#", "HTML5", "Python (learning)"],
    },
    {
      group: "Architecture",
      icon: "bi-diagram-3",
      items: ["OOP", "Clean Architecture", "SOLID", "Systems Architecture", "Design Patterns"],
    },
    {
      group: "Multiplayer & Backend",
      icon: "bi-hdd-network",
      items: ["Photon PUN / Realtime", "Photon Chat & Voice", "Real-time Systems", "REST API Integration"],
    },
    {
      group: "XR & Hardware",
      icon: "bi-headset-vr",
      items: ["VR", "AR", "MR", "Orbbec Astra", "Interactive Wall Games"],
    },
    {
      group: "Optimization",
      icon: "bi-speedometer2",
      items: ["Addressables", "Memory Management", "Build Optimization", "Profiling"],
    },
    {
      group: "AI / ML / Data",
      icon: "bi-stars",
      items: ["Machine Learning in Unity", "AI-driven Gameplay", "Deep Learning", "Data Science"],
    },
    {
      group: "Platforms",
      icon: "bi-phone",
      items: ["Android", "iOS", "macOS", "Windows", "WebGL", "XR Headsets"],
    },
    {
      group: "Workflow & Monetization",
      icon: "bi-git",
      items: ["Git", "Agile", "Team Leadership", "Mentoring", "AdMob", "Unity Ads"],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* 4. EXPERIENCE (newest first)                                        */
  /*    end: "present" for a current job                                 */
  /* ------------------------------------------------------------------ */
  experience: [
    {
      role: "Lead Game Developer",
      company: "Eyesight Electronics",
      location: "United Kingdom · Remote",
      type: "Full-time",
      start: "2023-09",
      end: "2026-08",
      points: [
        "Developed software and games for Mac, Windows and mobile with consistent performance on every platform.",
        "Guided and mentored the development team and set up the collaboration practices behind each release.",
        "Planned and tracked milestones and managed projects so high-quality products shipped on time.",
        "Brought in new technologies and industry trends to keep the products creative and current.",
      ],
      tags: ["Unity", "C#", "Cross-platform", "Leadership"],
    },
    {
      role: "Senior Game Developer",
      company: "Section Soft",
      location: "Islamabad, Pakistan",
      type: "Part-time",
      start: "2024-03",
      end: "2026-08",
      points: [
        "Worked on multiple products for WebGL, Windows and Android.",
        "Developed VR applications, Orbbec Astra depth-camera integrations and interactive wall games.",
        "Built optimized, engaging cross-platform experiences.",
      ],
      tags: ["VR", "Orbbec Astra", "WebGL", "Interactive Walls"],
    },
    {
      role: "Game Developer",
      company: "AptechMedia",
      location: "Islamabad, Pakistan",
      type: "Full-time",
      start: "2021-08",
      end: "2023-08",
      points: [
        "Wrote clean, efficient C# in Unity for smooth gameplay mechanics.",
        "Optimized games to run well on PC, Web and mobile.",
        "Solved complex technical problems to improve performance and player experience.",
        "Worked on project planning, progress tracking and Agile delivery.",
      ],
      tags: ["Unity", "Photon", "Multiplayer", "Mobile"],
    },
  ],

  /* ------------------------------------------------------------------ */
  /* 5. PROJECTS                                                         */
  /*  id         : unique, no spaces (used in the project page URL)      */
  /*  category   : one of the keys in projectCategories below            */
  /*  cover      : thumbnail image shown on the card                     */
  /*  images     : screenshots shown on the project page                 */
  /*  video      : optional YouTube link                                 */
  /*  links      : buttons on the project page (store, WebGL, GitHub…)   */
  /*  featured   : true = shown first                                    */
  /* ------------------------------------------------------------------ */
  projectCategories: {
    mobile: "Mobile Games",
    multiplayer: "Multiplayer & Metaverse",
    xr: "XR / Interactive",
    ai: "AI / ML",
    other: "Other",
  },

  projects: [
    {
      id: "innoverse",
      title: "InnoVerse",
      category: "multiplayer",
      client: "AptechMedia",
      date: "2021 – 2022",
      featured: true,
      cover: "assets/img/Innoverse.png",
      images: ["assets/img/InnoverseSS1.png", "assets/img/InnoverseSS2.png", "assets/img/InnoverseSS3.png"],
      summary: "Multiplayer 3D virtual space with rooms, chat and shared video watching.",
      description:
        "A multiplayer project where users join rooms, move around, chat and watch videos together. Users can also view images. Images and videos are uploaded through backend APIs.",
      tech: ["Unity", "C#", "Photon", "REST APIs", "Multiplayer"],
      links: [],
    },
    {
      id: "decenterland",
      title: "DecenterLand",
      category: "multiplayer",
      client: "AptechMedia",
      date: "2022-06",
      featured: true,
      cover: "assets/img/decenterLandIcon.png",
      images: ["assets/img/shiba1.png", "assets/img/shiba2.png", "assets/img/shiba3.png"],
      summary: "Multiplayer metaverse game built on Photon, with voice and text chat.",
      description: "A multiplayer game made with Photon. It includes voice chat and text chat.",
      tech: ["Unity", "Photon PUN", "Photon Voice", "Photon Chat", "WebGL"],
      links: [{ label: "Play WebGL", url: "https://games.jzmaxx.com/Blockchain/", icon: "bi-play-circle" }],
    },
    {
      id: "bayraverse",
      title: "BayraVerse",
      category: "multiplayer",
      client: "AptechMedia",
      date: "2022-05",
      featured: true,
      cover: "assets/img/bayraIcon.png",
      images: ["assets/img/bayraverse1.png", "assets/img/bayraverse2.png", "assets/img/bayraverse3.png"],
      summary: "NFT-based multiplayer world: run, walk, fight and drive.",
      description: "An NFT-based multiplayer game where players can run, walk, fight and drive.",
      tech: ["Unity", "C#", "Multiplayer", "WebGL", "Blockchain"],
      links: [{ label: "Play WebGL", url: "https://games.jzmaxx.com/BayraVerse/", icon: "bi-play-circle" }],
    },
    {
      id: "dinosaur-hunting",
      title: "The World of Dinosaur Hunting",
      category: "mobile",
      client: "AptechMedia",
      date: "2022-04",
      featured: true,
      cover: "assets/img/dino.png",
      images: ["assets/img/dino1.png", "assets/img/dino2.png", "assets/img/dino3.png"],
      summary: "3D dinosaur hunting and T-Rex simulation adventure.",
      description:
        "Hunt wild beasts or take control of a giant T-Rex in this jungle adventure and simulation game.",
      tech: ["Unity 3D", "C#", "Android", "AdMob"],
      links: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.aptechmedia.dinosaur.attack.dino.games", icon: "bi-google-play" }],
    },
    {
      id: "game-plan",
      title: "Game Plan Stick Cricket",
      category: "mobile",
      client: "Hum TV",
      date: "2022-07",
      cover: "assets/img/GamePlanIcon.jpg",
      images: ["assets/img/GamePlan1.png", "assets/img/GamePlan2.png", "assets/img/GamePlan3.png"],
      summary: "Online stick cricket quiz game with rewards.",
      description: "An online stick cricket game where users answer questions and earn rewards.",
      tech: ["Unity 2D", "C#", "APIs"],
      links: [],
    },
    {
      id: "car-driving-simulator",
      title: "Car Driving Simulator 3D",
      category: "mobile",
      client: "Soar Games",
      date: "2022-11",
      cover: "assets/img/CarDrivingSimulatorIcon.png",
      images: ["assets/img/cardrivingsimulator1.png", "assets/img/cardrivingsimulator2.png", "assets/img/cardrivingsimulator3.png"],
      summary: "Relaxing open-world driving game.",
      description: "A relaxing open-world driving game.",
      tech: ["Unity 3D", "C#", "Android"],
      links: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.SOARGAMES.CarDrivingSimulator3D", icon: "bi-google-play" }],
    },
    {
      id: "dunk-ball",
      title: "Dunk Ball",
      category: "mobile",
      client: "Soar Games",
      date: "2022-11",
      cover: "assets/img/DunkBallIcon.png",
      images: ["assets/img/dunkball1.png", "assets/img/dunkball2.png", "assets/img/dunkball3.png"],
      summary: "Hyper-casual basketball game with endless levels.",
      description: "A simple, relaxing hyper-casual game with endless levels.",
      tech: ["Unity", "C#", "Android", "Hyper-casual"],
      links: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.SOARGAMES.DunkBall", icon: "bi-google-play" }],
    },
    {
      id: "crashy-race",
      title: "Crashy Race",
      category: "mobile",
      client: "Soar Games",
      date: "2022-10",
      cover: "assets/img/CrashyRaceIcon.png",
      images: ["assets/img/crashyrace1.png", "assets/img/crashyrace2.png", "assets/img/crashyrace3.png"],
      summary: "Hyper-casual racing game with endless levels.",
      description: "A simple, relaxing hyper-casual racing game with endless levels.",
      tech: ["Unity", "C#", "Android", "Hyper-casual"],
      links: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.SOARGAMES.CrashyRaceRacing", icon: "bi-google-play" }],
    },
    {
      id: "knife-shooting",
      title: "Knife Shooting",
      category: "mobile",
      client: "Soar Games",
      date: "2022-10",
      cover: "assets/img/knifeIcon.png",
      images: ["assets/img/knifeshooting1.png", "assets/img/knifeshooting2.png", "assets/img/knifeshooting3.png"],
      summary: "Hyper-casual knife throwing game with endless levels.",
      description: "A simple, relaxing hyper-casual game with endless levels.",
      tech: ["Unity", "C#", "Android", "Hyper-casual"],
      links: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.SOARGAMES.KnifeShoot", icon: "bi-google-play" }],
    },
    {
      id: "color-shooting-2d",
      title: "Color Shooting 2D",
      category: "mobile",
      client: "Soar Games",
      date: "2022-09",
      cover: "assets/img/colorShooting2dIcon.png",
      images: ["assets/img/colorshooting1.png", "assets/img/colorshooting2.png", "assets/img/colorshooting3.png"],
      summary: "Hyper-casual 2D color shooter with endless levels.",
      description: "A simple, relaxing hyper-casual game with endless levels.",
      tech: ["Unity 2D", "C#", "Android", "Hyper-casual"],
      links: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.SOARGAMES.ColorShooter2D", icon: "bi-google-play" }],
    },
    {
      id: "crazy-gang",
      title: "Crazy Gang",
      category: "mobile",
      client: "Soar Games",
      date: "2022-07",
      cover: "assets/img/CrazyGangIcon.png",
      images: ["assets/img/CrazyGang1.png", "assets/img/CrazyGang2.png", "assets/img/CrazyGang3.png"],
      summary: "3D endless runner: help a lost student find the way.",
      description: "An endless runner where a young student who has lost their way tries to reach the destination.",
      tech: ["Unity 3D", "C#", "Android", "Endless Runner"],
      links: [],
    },
    {
      id: "jp-spinner",
      title: "JP Spinner",
      category: "mobile",
      client: "Soar Games",
      date: "2022-06",
      cover: "assets/img/spinner.jpg",
      images: ["assets/img/spinner1.png", "assets/img/spinner2.png", "assets/img/spinner3.png"],
      summary: "Relaxing spinner game with 40+ spinners.",
      description: "A simple, relaxing hyper-casual spinner game with more than 40 spinners to collect and play.",
      tech: ["Unity", "C#", "Android", "Hyper-casual"],
      links: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.SOARGAMES.JP_Spinner", icon: "bi-google-play" }],
    },
    {
      id: "dash-basketball",
      title: "Dash BasketBall",
      category: "mobile",
      client: "Soar Games",
      date: "2022-05",
      cover: "assets/img/BasketBAllIcon.jpg",
      images: ["assets/img/DashBasketBall1.png", "assets/img/DashBasketBall2.png", "assets/img/DashBasketBall3.png"],
      summary: "2D basketball game: throw the ball into the target.",
      description: "A 2D basketball game where the player throws the ball into the target.",
      tech: ["Unity 2D", "C#", "Physics"],
      links: [],
    },
    {
      id: "dress-up-memory",
      title: "Dress Up Memory Game",
      category: "mobile",
      client: "AptechMedia",
      date: "2021-11",
      cover: "assets/img/dressIcon.png",
      images: ["assets/img/dress1.png", "assets/img/dress2.png", "assets/img/dress3.png"],
      summary: "Memorize the outfit, then drag it onto the player.",
      description: "Memorize the outfit, then drag the pieces onto the player.",
      tech: ["Unity 2D", "C#", "Drag & Drop"],
      links: [],
    },
    {
      id: "meta-shiba",
      title: "Meta Shiba: Trailer",
      category: "other",
      client: "AptechMedia",
      date: "2021",
      cover: "assets/img/MetaShiba.png",
      images: ["assets/img/MetaShiba1.png", "assets/img/MetaShiba2.png", "assets/img/MetaShiba3.png"],
      summary: "Cinematic trailer cutscene made in Unity.",
      description: "A trailer cutscene made in Unity for a multiplayer video game.",
      tech: ["Unity", "Timeline", "Cinemachine"],
      links: [],
    },

    /* ---- TEMPLATE: copy this block to add a new project ----
    {
      id: "my-new-game",
      title: "My New Game",
      category: "ai",                       // mobile | multiplayer | xr | ai | other
      client: "Personal Project",
      date: "2026-09",
      featured: true,
      cover: "assets/img/my-new-game.png",
      images: ["assets/img/my-new-game-1.png"],
      video: "https://www.youtube.com/watch?v=XXXXXXXX",   // optional
      summary: "One line shown on the card.",
      description: "Longer description for the project page. What it is, your role, the hard problems you solved.",
      highlights: ["Optional bullet 1", "Optional bullet 2"],  // optional
      tech: ["Unity", "ML-Agents", "Python"],
      links: [
        { label: "GitHub", url: "https://github.com/...", icon: "bi-github" },
        { label: "Play", url: "https://...", icon: "bi-play-circle" },
      ],
    },
    ---------------------------------------------------------- */
  ],

  /* ------------------------------------------------------------------ */
  /* 6. AI / ML LAB: what you're currently learning or building          */
  /*    status: "Learning" | "Building" | "Done"                         */
  /* ------------------------------------------------------------------ */
  lab: [
    {
      title: "Machine Learning inside Unity",
      status: "Building",
      icon: "bi-robot",
      text: "Adding trained ML models and learning agents to Unity games for smarter NPCs, adaptive difficulty and new gameplay mechanics.",
    },
    {
      title: "AI-powered Games",
      status: "Building",
      icon: "bi-controller",
      text: "Building games with AI at the core: generative content, AI-driven characters, and gameplay designed around AI systems.",
    },
    {
      title: "AI, ML & Deep Learning Foundations",
      status: "Learning",
      icon: "bi-diagram-2",
      text: "Studying how models actually work, including supervised and unsupervised learning, neural networks and training pipelines.",
    },
    {
      title: "Data Science",
      status: "Learning",
      icon: "bi-bar-chart-line",
      text: "Analysing and visualising data with Python, with a focus on game analytics and player-behaviour insights.",
    },
  ],

  /* ------------------------------------------------------------------ */
  /* 7. EDUCATION & CERTIFICATIONS                                       */
  /* ------------------------------------------------------------------ */
  education: [
    {
      degree: "BS Computer Science",
      school: "Bacha Khan University",
      location: "Charsadda, Pakistan",
      start: "2017-09",
      end: "2022-09",
    },
  ],

  certifications: [
    { name: "The Ultimate Guide to Video Game Optimisation", issuer: "" },
    { name: "Unity VR/XR Developer: Make Immersive Virtual Reality Games", issuer: "" },
    { name: "Unity Junior Programmer", issuer: "Unity" },
    { name: "Unity VR Development", issuer: "" },
    { name: "Math For Video Games: The Fastest Way To Get Smarter At Math", issuer: "" },
    // { name: "New Certificate", issuer: "Coursera", url: "https://link-to-certificate" },
  ],
};
