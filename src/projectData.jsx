// src/projectData.jsx
export const projects = [
  {
    id: "arambhumi-reddy-journey",
    cardVideoSrc: "/videos/feature-1.mp4",
    cardTitle: <>Aram<b>bhumi</b> Reddy</>,
    cardDescription: "My personal journey and drive for excellence in Data Science and Tech.",
    isComingSoon: false,
    pageTitle: "Arambhumi Reddy - A Journey in Tech",
    pageHeroImage: "/img/about.jpg",
    pageContent: `
      <h2>My Background</h2>
      <p>I am highly driven by a passion for excellence in everything I do, with a Master's in Data Science and over 5 years of experience in the tech industry. I take great pride in my work, ensuring that every project I undertake is completed to the highest standard.</p>
      <h2>Attention to Detail</h2>
      <p>My attention to detail is unwavering, as I carefully analyze every aspect of a project to ensure it meets both technical requirements and my personal commitment to quality. This meticulous approach enables me to deliver results that not only meet expectations but exceed them.</p>
      <h3>Core Philosophies:</h3>
      <ul>
        <li>Commitment to Quality</li>
        <li>Continuous Learning</li>
        <li>Problem Solving</li>
      </ul>
      <p>This section of my portfolio is dedicated to showcasing the projects and experiences that have shaped my career.</p>
    `
  },
  {
    id: "python-ai-adaptation",
    cardVideoSrc: "/videos/feature-2.mp4",
    cardTitle: <>Py<b>th</b>on & AI</>,
    cardDescription: "Harnessing AI to rapidly master new programming languages and technologies.",
    isComingSoon: true,
    pageTitle: "Python & AI: Rapid Language Adaptation",
    pageHeroImage: "/videos/feature-2.mp4",
    pageContent: `
      <p>I started coding in Python long before the rise of LLMs, developing a strong foundation in programming. Today, I harness the power of AI to quickly adapt to any language.</p>
      <p>For example, despite this being my first time using JavaScript and React, I was able to master the core concepts and deliver a high-quality, industry-level website in just 10 hours. My ability to rapidly learn and apply new technologies has been greatly enhanced by AI tools, allowing me to stay ahead in the fast-evolving tech landscape.</p>
      <h3>Key Aspects:</h3>
      <ul>
        <li>Strong Python foundation pre-LLMs.</li>
        <li>AI-assisted rapid learning (e.g., JS/React in 10 hours).</li>
        <li>Adaptability in a fast-evolving tech landscape.</li>
      </ul>
    `
  },
  {
    id: "tech-stack-overview",
    cardVideoSrc: "/videos/feature-3.mp4",
    cardTitle: <>Te<b>ch</b> Stack</>,
    cardDescription: "Overview of my core technical skills and expertise.",
    isComingSoon: true,
    pageTitle: "My Core Tech Stack",
    pageHeroImage: "/img/tech-stack-hero.jpg",
    pageContent: `
      <p>My technical expertise is built on a foundation of robust and scalable technologies. Here's a breakdown of some of the key tools and platforms I work with:</p>
      <ul>
        <li><strong>Python:</strong> Core language for data science, machine learning, and backend development.</li>
        <li><strong>Hugging Face:</strong> Extensive experience with transformers, tokenizers, and deploying pre-trained models.</li>
        <li><strong>Docker:</strong> Containerization for consistent development and deployment environments.</li>
        <li><strong>AWS:</strong> Cloud services for scalable infrastructure, including S3, EC2, Lambda, SageMaker.</li>
        <li><strong>Infrastructure as Code (IaC) Tools:</strong>
          <ul>
            <li>Pulumi</li>
            <li>Terraform</li>
          </ul>
        </li>
        <li><strong>Monitoring & Observability:</strong>
          <ul>
            <li>Prometheus</li>
            <li>Grafana</li>
          </ul>
        </li>
      </ul>
      <p>This stack enables me to build, deploy, and maintain complex AI-driven applications efficiently.</p>
    `
  },
  {
    id: "ai-integration-specialist",
    cardVideoSrc: "/videos/feature-4.mp4",
    cardTitle: <>Int<b>egr</b>ation</>,
    cardDescription: "Specializing in integrating AI into existing technologies and frameworks.",
    isComingSoon: true,
    pageTitle: "AI Integration Specialist",
    pageHeroImage: "/videos/feature-4.mp4",
    pageContent: `
      <p>I specialize in integrating AI into existing technologies and frameworks, enhancing applications without disrupting their core functionality.</p>
      <p>By leveraging tools like Hugging Face, Docker, and AWS, I seamlessly incorporate AI to improve performance and scalability, ensuring that businesses can adopt cutting-edge AI capabilities smoothly.</p>
      <h3>Areas of Focus:</h3>
      <ul>
        <li>Seamless AI model deployment.</li>
        <li>Performance optimization with AI.</li>
        <li>Scalable AI solutions on cloud platforms.</li>
      </ul>
    `
  },
  // --- NEW 5th PROJECT (small placeholder) ---
  {
    id: "small-utility-tool",
    // cardVideoSrc: "/videos/your-video-for-small-project.mp4", // Add if you have a video
    cardStaticBgClass: "bg-blue-300", // Example different background
    cardTitle: <>Utility <b>Scri</b>pt</>,
    cardDescription: "A small but handy utility script for automating a common task.",
    isComingSoon: true,
    pageTitle: "Handy Utility Script",
    pageHeroImage: "/img/utility-script-hero.jpg", // Create a relevant image
    pageContent: `
      <p>This project involved creating a small Python script to automate [describe the task, e.g., file organization, data cleaning, API interaction].</p>
      <p>While not a large-scale application, it demonstrates problem-solving and efficiency in everyday development tasks.</p>
      <h4>Features:</h4>
      <ul>
        <li>[Feature 1]</li>
        <li>[Feature 2]</li>
      </ul>
    `
  },
  // --- END OF NEW PROJECT ---
  {
    id: "more-projects-placeholder",
    cardStaticBgClass: "bg-violet-300",
    cardTitle: <>M<b>o</b>re co<b>m</b>ing s<b>o</b>on.</>,
    cardDescription: "Stay tuned for more exciting projects and developments.",
    isComingSoon: true,
    pageTitle: "Future Projects",
    pageHeroImage: "/img/placeholder-hero.jpg",
    pageContent: `
      <p>This space is reserved for upcoming projects that are currently in development or planning stages. I'm constantly exploring new ideas and technologies.</p>
      <p>Check back soon for updates!</p>
    `
  },
  {
    id: "visual-showcase",
    cardVideoSrc: "/videos/feature-5.mp4",
    cardTitle: <>Visual <b>AI</b> Effects</>,
    cardDescription: "Exploring generative AI and visual effects in web applications.",
    isComingSoon: true,
    pageTitle: "Visual AI & Generative Effects",
    pageHeroImage: "/videos/feature-5.mp4",
    pageContent: `
      <p>This project delves into the application of AI for generating and manipulating visual content within web interfaces.</p>
      <p>Exploring techniques for: </p>
      <ul>
        <li>Real-time video processing.</li>
        <li>Generative art with AI models.</li>
        <li>Interactive visual experiences.</li>
      </ul>
    `
  }
];