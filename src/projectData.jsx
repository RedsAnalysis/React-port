// src/projectData.jsx

// Helper function to create placeholder image URLs (useful for development)
// const placeholderImg = (width = 1920, height = 1080, text = "Placeholder 16:9") => `https://via.placeholder.com/${width}x${height}.png?text=${encodeURIComponent(text)}`;
// For actual deployment, you'll replace these with your real image paths.
// For now, I'll use generic paths like "/img/project-assets/image-name.jpg"
// and assume you have a placeholder or will create these images.

export const projects = [
  {
    id: "arambhumi-reddy-journey",
    cardVideoSrc: "/videos/feature-1.mp4",
    cardTitle: <>Aram<b>bhumi</b> Reddy</>,
    cardDescription: "My personal journey and drive for excellence in Artificial Intelligence and Tech.",
    isComingSoon: false,
    pageTitle: "My Journey in Tech",
    pageHeroImage: "/img/about.jpg", // This can be a banner image at the top
    pageIntro: `
      <p class="text-lg md:text-xl leading-relaxed">Driven by a passion for excellence and innovation in the world of AI. With a Master's in Data Science and over 5 years of experience in the tech industry, my work is characterized by a commitment to the highest standards and meticulous attention to detail.</p>
    `,
    pageSections: [
      {
        image: "/img/my-profile-pic.jpg", // Using your existing profile pic as an example
        alt: "Arambhumi Reddy",
        // Adjusted styling for the profile image in the section
        imageCustomStyle: "max-w-xs md:max-w-sm h-auto rounded-full mx-auto shadow-lg border-4 border-yellow-300",
        text: `
          <h3>My Approach</h3>
          <p>I believe in a meticulous approach, carefully analyzing every aspect of a project to ensure it meets both technical requirements and my personal commitment to quality. This enables me to deliver results that not only meet expectations but often exceed them.</p>
          <h3>Core Philosophies:</h3>
          <ul>
            <li>Commitment to Quality</li>
            <li>Continuous Learning & Adaptation</li>
            <li>Strategic Problem Solving</li>
            <li>Effective Collaboration</li>
          </ul>
          <p>This portfolio showcases the projects and experiences that have shaped my journey in technology, particularly within the dynamic field of Artificial Intelligence.</p>
        `
      },
      // Add more sections if needed for this page, up to 8
      {
        image: "/img/project-assets/journey-collab.jpg", // Replace with actual image
        alt: "Collaborative Tech Environment",
        text: `
          <h3>The Power of Collaboration</h3>
          <p>Throughout my career, I've learned that the most groundbreaking solutions often emerge from diverse perspectives and collaborative efforts. Working alongside talented individuals, sharing knowledge, and challenging ideas are integral to my process.</p>
          <p>Whether it's brainstorming new AI models or refining user experiences, teamwork amplifies creativity and accelerates progress. I value environments where open communication and mutual respect foster innovation.</p>
        `
      }
    ]
  },
  {
    id: "advanced-rag-system",
    cardImageSrc: "/img/rag1.jpg",
    cardTitle: <>Advanced <b>RAG</b> System</>,
    cardDescription: "Architecting and optimizing a high-performance RAG system for factual grounding and relevance.",
    isComingSoon: false,
    pageTitle: "Optimized Retrieval-Augmented Generation",
    pageHeroImage: "/img/rag.JPG",
    pageIntro: `
      <p class="text-lg md:text-xl leading-relaxed">At IvorSource, I led the architecture and development of a sophisticated Retrieval-Augmented Generation (RAG) system designed to enhance the factual accuracy and relevance of Large Language Model responses within the enterprise. The primary goal was to ground LLM outputs in verified internal knowledge, significantly reducing hallucinations and improving the reliability of AI-assisted tasks.</p>
    `,
    pageSections: [
      {
        image: "/img/project-assets/rag-architecture-overview.jpg", // Replace with actual 1920x1080 image
        alt: "High-level RAG System Architecture",
        text: `
          <h3>System Architecture Overview</h3>
          <p>The foundation of this project was a robust system architecture. We designed an end-to-end RAG pipeline, strategically selecting Qdrant as our vector database. Its performance, scalability, and advanced filtering capabilities were paramount for handling diverse enterprise datasets and ensuring efficient retrieval tailored to specific user queries or contexts.</p>
          <p>Data ingestion was a critical phase. We developed a flexible pipeline to process various document formats, implementing sophisticated chunking strategies. This involved experimenting with fixed-size, recursive, and semantic chunking to optimize the balance between contextual completeness of chunks and retrieval precision. The goal was to create vector embeddings that accurately represented the core meaning of each document segment.</p>
        `
      },
      {
        image: "/img/project-assets/embedding-model-finetuning.jpg", // Replace with actual 1920x1080 image
        alt: "Embedding Model Fine-tuning Process",
        text: `
          <h3>Embedding Model Fine-Tuning</h3>
          <p>To achieve superior semantic understanding of our domain-specific content, off-the-shelf embedding models were insufficient. We curated a comprehensive dataset from internal documentation, technical specifications, and historical support tickets. This dataset was then used to fine-tune the BGE-large-en-v1.5 embedding model.</p>
          <p>The fine-tuning process was iterative, involving rigorous evaluation against domain-specific benchmarks. We focused on improving the model's ability to discern subtle contextual nuances and industry-specific jargon. This resulted in a significant uplift in the relevance of retrieved documents, directly impacting the quality of the LLM's generated responses.</p>
        `
      },
      {
        image: "/img/project-assets/multi-stage-retrieval.jpg", // Replace
        alt: "Multi-stage Retrieval with Reranker",
        text: `
          <h3>Multi-Stage Retrieval & Reranking</h3>
          <p>Precision in retrieval was further enhanced by a multi-stage approach. The fine-tuned BGE model performed an initial, broad retrieval from Qdrant, efficiently identifying a set of potentially relevant candidate passages. These candidates were then passed to a more computationally intensive BAAI/bge-reranker-large cross-encoder.</p>
          <p>The reranker meticulously evaluated each candidate against the original query, providing a refined relevance score. This step was crucial for filtering out less relevant passages and surfacing the most pertinent information for the LLM, effectively balancing speed and accuracy in the retrieval pipeline.</p>
        `
      },
      {
        image: "/img/project-assets/prompt-engineering-iteration.jpg", // Replace
        alt: "Iterative Prompt Engineering Cycle",
        text: `
          <h3>Strategic Prompt Engineering</h3>
          <p>The final layer of optimization involved sophisticated prompt engineering. We developed and meticulously iterated on prompt templates designed to guide the downstream LLM. These prompts instructed the model on how to synthesize information from the retrieved contexts, maintain factual consistency, and adhere to specific output formats or tones.</p>
          <p>Techniques such as few-shot learning, chain-of-thought prompting, and dynamic context injection based on reranker scores were employed. Continuous A/B testing of prompt variations ensured that the LLM could leverage the retrieved information effectively, leading to a <strong>37% improvement in query response relevance</strong> and a drastic reduction in hallucinations.</p>
          <h4>Technologies Leveraged:</h4>
          <ul>
            <li>Python, SQL, VectorDBs (Qdrant)</li>
            <li>Machine Learning, Deep Learning (PyTorch)</li>
            <li>NLP, Transformers, RAG, Prompt Engineering, Fine-Tuning (SFT)</li>
            <li>BGE-large-en-v1.5, BAAI/bge-reranker-large</li>
          </ul>
        `
      }
      // Add 4 more sections to reach 8 if desired
    ]
  },
  {
    id: "notifyvisitors-growth-journey",
    cardImageSrc: "/img/notifyvisitorlogo.png",
    cardTitle: <>Notify<b>Visitors</b></>,
    cardDescription: "My foundational journey in data science, contributing to 40%+ growth and user engagement.",
    isComingSoon: false,
    pageTitle: "NotifyVisitors: My Data Science Genesis & Growth Impact",
    pageHeroImage: "/img/notifyvisitorlogo.png",
    pageIntro: `
      <p class="text-lg md:text-xl leading-relaxed">NotifyVisitors was where my professional journey in data truly began, transitioning from Junior Data Analyst to Data Scientist. This period was instrumental in developing my analytical mindset and technical skills, particularly in leveraging data to drive business success and user engagement.</p>
    `,
    pageSections: [
      {
        image: "/img/notifyvisitors-dashboard-example.png", // Existing image
        alt: "NotifyVisitors User Engagement Dashboard Example",
        text: `
          <h3>Early Contributions & User Engagement Focus</h3>
          <p>My initial role involved analyzing user behavior—app installs, clicks, reviews, and purchase history—to uncover insights. Upon promotion to Data Scientist, I focused heavily on user engagement. I applied Machine Learning algorithms like <strong>Random Forest and XGBoost</strong> to identify anomalies and predict user actions, using <strong>Grid Search</strong> for hyperparameter tuning and <strong>PCA</strong> for feature extraction.</p>
          <p>This data-driven approach to understanding and influencing user behavior directly contributed to boosting user engagement by over <strong>45% within an 8-month period</strong>. These insights were translated into actionable strategies, contributing to over <strong>40% overall company growth.</strong></p>
        `
      },
      {
        image: "/img/project-assets/ml-model-workflow.jpg", // Replace with a conceptual ML workflow diagram
        alt: "Machine Learning Model Development Workflow",
        text: `
          <h3>Key Achievements & Learnings</h3>
          <p>My time at NotifyVisitors was a period of intense learning and significant professional growth. It solidified my passion for leveraging data to solve complex problems.</p>
          <ul>
            <li>Contributed to boosting user engagement by over 45%.</li>
            <li>Played a role in company initiatives leading to over 40% growth.</li>
            <li>Mastered ML algorithms (Random Forest, XGBoost) and techniques (Grid Search, PCA).</li>
            <li>Gained deep experience in analyzing user behavioral data.</li>
            <li>Developed skills in presenting complex data insights.</li>
          </ul>
          <p>This experience shaped me into the data scientist and AI practitioner I am today.</p>
        `
      }
      // Add more sections if desired
    ]
  },
  {
    id: "FSU",
    cardStaticBgClass: "bg-teal-300",
    cardTitle: <>Data <b>Analyst</b></>,
    cardImageSrc: "/img/fsulogo.svg",
    cardDescription: "",
    isComingSoon: false,
    pageTitle: "State of Florida: Inmate Analysis Dashboard (Power BI)",
    pageHeroImage: "/img/powerbi-dashboard-hero.jpg",
    pageIntro: `
      <p class="text-lg md:text-xl leading-relaxed">During my tenure as a Data Analyst at Florida State University, I developed an Inmate Analysis Dashboard for a State of Florida initiative. This project aimed to provide clearer insights into inmate population trends, demographics, and other key metrics to support data-driven decision-making.</p>
    `,
    pageSections: [
      {
        image: "/img/powerbi-inmate-dashboard-mockup.png", // Existing image
        alt: "Power BI Inmate Dashboard Mockup",
        text: `
          <h3>Dashboard Design & Technical Implementation</h3>
          <p>My role was to transform raw data into actionable intelligence using <strong>Microsoft Power BI</strong>. This involved meticulous data modeling to structure and relate diverse datasets pertaining to inmate information. I authored complex <strong>Data Analysis Expressions (DAX)</strong> to create custom calculations, key performance indicators (KPIs), and dynamic metrics that were central to the dashboard's utility.</p>
          <p>I designed a suite of professional, interactive visualizations—charts, graphs, and tables—to present the data intuitively. The dashboard enabled users to explore trends over time, filter by various demographic factors, and drill down into specific details, offering a significant improvement over previous manual reporting methods.</p>
        `
      },
      {
        image: "/img/project-assets/powerbi-dax-example.jpg", // Replace with a conceptual DAX code snippet or data model diagram
        alt: "Example of DAX measures or Data Model in Power BI",
        text: `
          <h3>Impact and Skills Utilized</h3>
          <p>The resulting dashboard provided stakeholders with a nuanced understanding of inmate population dynamics, facilitating data-informed discussions and supporting strategic planning related to resource allocation and program effectiveness. The ability to quickly visualize trends and filter data was a key outcome.</p>
          <h4>Skills Utilized:</h4>
          <ul>
            <li>Microsoft Power BI (Advanced)</li>
            <li>DAX (Data Analysis Expressions)</li>
            <li>Data Modeling & Visualization</li>
            <li>Stakeholder Communication & Requirements Gathering</li>
            <li>Data Analysis & Interpretation</li>
          </ul>
        `
      }
      // Add more sections if desired
    ]
  },
  {
    id: "Kiyo-Drip",
    cardImageSrc: "/img/kiyodrip.png",
    cardTitle: <>Kiyo-Drip <b>Clothing</b> Brand</>,
    cardDescription: "",
    cardTextColor: 'text-black',
    isComingSoon: false,
    pageTitle: "LLM Serving, Monitoring, and Custom TTS",
    pageHeroImage: "/img/mlops-dashboard-hero.jpg",
    pageIntro: `
      <p class="text-lg md:text-xl leading-relaxed">A core part of my work at IvorSource involved establishing robust and efficient infrastructure for serving open-source Large Language Models and enabling seamless developer experimentation. This included migrating serving engines, implementing comprehensive monitoring, and integrating custom solutions like Text-to-Speech (TTS).</p>
    `,
    pageSections: [
      {
        image: "/img/project-assets/vllm-deployment.jpg", // Replace
        alt: "vLLM Containerized Deployment",
        text: `
          <h3>Automated, Containerized LLM Deployment (vLLM)</h3>
          <p>I engineered automated, containerized Docker deployment processes for various open-source LLMs. A key achievement was leading the migration from Text Generation Inference (TGI) to <strong>vLLM</strong>. This transition was pivotal in <strong>significantly boosting throughput and minimizing latency</strong> for our inference servers.</p>
          <p>The deployment configurations were optimized for streamlined cloud portability and easy adoption across internal development teams, enabling rapid iteration and experimentation with different models and serving configurations. We ensured that the containerization process was well-documented and easily replicable.</p>
        `
      },
      {
        image: "/img/grafana-dashboard-llm.png", // Existing image, check aspect ratio
        alt: "Grafana Dashboard for LLM Monitoring",
        text: `
          <h3>Real-Time Performance Monitoring</h3>
          <p>To ensure operational excellence, I established real-time performance monitoring for LLM inference servers (vLLM/TGI) and their underlying Virtual Machines. This was achieved using a stack of <strong>Prometheus, Grafana, and relevant exporters (Node Exporter, NVIDIA DCGM Exporter)</strong>.</p>
          <p>These dashboards provided crucial visibility into resource utilization (CPU, GPU, memory, network), request latency, throughput, and error rates. This proactive monitoring facilitated rapid bottleneck identification, efficient resource management, and ensured high availability of our LLM services.</p>
        `
      },
      {
        image: "/img/project-assets/kokoro-tts-integration.jpg", // Replace
        alt: "Kokoro TTS API Integration with OpenWebUI",
        text: `
          <h3>Custom TTS Integration (Kokoro_TTS_Api)</h3>
          <p>Recognizing the need for more personalized and controllable voice outputs for local AI workflows, I developed and integrated a custom Text-to-Speech (TTS) engine, <a href="https://github.com/RedsAnalysis/Kokoro_TTS_Api" target="_blank" rel="noopener noreferrer">Kokoro_TTS_Api</a>. This project involved building a containerized TTS service that could be easily integrated into platforms like OpenWebUI.</p>
          <p>This custom solution offered greater flexibility in voice selection, prosody control, and speed compared to off-the-shelf solutions, enhancing the user experience for voice-interactive AI applications developed internally. It was built using Python and leveraged open-source TTS models.</p>
          <h4>Technologies Leveraged:</h4>
          <ul>
            <li>Docker, Docker Compose, Linux (VMs)</li>
            <li>vLLM, Text Generation Inference (TGI)</li>
            <li>Prometheus, Grafana, Node Exporter, NVIDIA DCGM Exporter</li>
            <li>Python, Bash</li>
            <li>Custom TTS development (e.g., based on Coqui TTS or similar, for Kokoro_TTS_Api)</li>
          </ul>
        `
      }
      // Add more sections if desired
    ]
  },
  {
    id: "Open Source Contributions",
    cardVideoSrc: "/videos/comfyui-docker-feature.mp4",
    cardTitle: <>Open <b>Source</b>Contributions</>,
    cardDescription: "Open-source contributions to ComfyUI, including advanced Dockerization for new GPUs.",
    isComingSoon: false,
    pageTitle: "ComfyUI: Open Source Contributions & Dockerization",
    pageHeroImage: "/img/comfyui-hero.jpg",
    pageIntro: `
      <p class="text-lg md:text-xl leading-relaxed">ComfyUI is a powerful and modular stable diffusion GUI and backend. My contributions have focused on improving its accessibility, especially for users with cutting-edge hardware, and exploring its capabilities for advanced image generation workflows.</p>
    `,
    pageSections: [
      {
        image: "/img/comfyui-docker-logo.png", // Existing image
        alt: "ComfyUI Docker Logo and Concept",
        text: `
          <h3>Cutting-Edge ComfyUI Dockerization</h3>
          <p>One of my key ongoing projects is engineering and maintaining a specialized Docker container for ComfyUI, available on <a href="https://github.com/RedsAnalysis/ComfyUI-Docker" target="_blank" rel="noopener noreferrer">GitHub</a>. This container incorporates updated dependencies, critically including support for newer CUDA versions (e.g., <strong>CUDA 12.8+</strong>) and relevant <strong>PyTorch development builds</strong>.</p>
          <p>The motivation was to address compatibility challenges faced by users with the latest GPUs. My Dockerized solution ensures <strong>seamless execution</strong> on new hardware, allowing users to leverage full GPU power without complex manual setups. This facilitates easier access to cutting-edge generative AI for a wider audience.</p>
        `
      },
      {
        image: "/img/project-assets/comfyui-pr-example.jpg", // Replace with screenshot or concept of a PR
        alt: "Example Pull Request to ComfyUI or related project",
        text: `
          <h3>Pull Request Contributions & Community Engagement</h3>
          <p>Beyond Dockerization, I actively contribute to the ComfyUI ecosystem. For instance, I've submitted pull requests aimed at enhancing functionality or fixing issues, such as improving custom node compatibility or streamlining setup processes within the community version or related tools like OpenWebUI when integrating ComfyUI features.</p>
          <p>Engaging with the open-source community, providing solutions, and sharing knowledge are important aspects of my work. These contributions often involve deep dives into Python, PyTorch, and CUDA dependency management, ensuring that the tools remain accessible and performant for everyone.</p>
          <h4>Key Aspects:</h4>
          <ul>
            <li>Proactive problem-solving for hardware compatibility.</li>
            <li>Expertise in Docker, CUDA, and PyTorch dependency management.</li>
            <li>Contribution to the open-source generative AI community.</li>
          </ul>
        `
      }
      // Add more sections if desired
    ]
  },
  {
    id: "Personal Projects",
    cardStaticBgClass: "bg-green-300",
    cardTitle: <>Personal <b>Projects</b></>,
    cardDescription: "My first foray into JavaScript & React for building this interactive portfolio.",
    isComingSoon: false,
    pageTitle: "Portfolio Development: Embracing JavaScript & React",
    pageHeroImage: "/img/portfolio-code-hero.jpg",
    pageIntro: `
      <p class="text-lg md:text-xl leading-relaxed">This portfolio website represents a significant personal project and a dive into new technologies. While my core expertise lies in Python for AI/ML, I recognized the importance of modern web development skills to effectively showcase my work.</p>
    `,
    pageSections: [
      {
        image: "/img/react-js-logos.png", // Existing image
        alt: "React and JavaScript Logos",
        text: `
          <h3>Learning Journey: JavaScript, React, and Modern Web Tooling</h3>
          <p>This project was my first substantial endeavor using <strong>JavaScript and React</strong>. My approach was one of rapid, hands-on learning, leveraging online resources, documentation, and AI-assisted coding to grasp core concepts like React Components, JSX, ES6+ features, and styling with Tailwind CSS.</p>
          <p>I focused on creating an intuitive user experience, striving for clean code, and a visually appealing presentation of my projects. The source code is available on <a href="https://github.com/RedsAnalysis/React-port" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
        `
      },
      {
        image: "/img/project-assets/portfolio-tailwind-code.jpg", // Replace with a screenshot of some Tailwind code from the portfolio
        alt: "Example of Tailwind CSS code used in the portfolio",
        text: `
          <h3>Key Takeaways & Growth</h3>
          <ul>
            <li>Demonstrated ability to rapidly learn and apply new programming languages and frameworks.</li>
            <li>Gained practical experience in front-end development principles and responsive design.</li>
            <li>Reinforced the value of self-directed learning and leveraging modern development tools.</li>
            <li>Successfully created a personal platform to share my technical journey.</li>
          </ul>
          <p>This project broadened my technical skillset, proving that new technological domains can be effectively mastered with a proactive learning approach.</p>
        `
      }
      // Add more sections if desired
    ]
  }
];