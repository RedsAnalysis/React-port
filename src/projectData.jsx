// src/projectData.jsx
export const projects = [
  {
    id: "arambhumi-reddy-journey",
    cardVideoSrc: "/videos/feature-1.mp4", // Your existing video
    cardTitle: <>Aram<b>bhumi</b> Reddy</>,
    cardDescription: "My personal journey and drive for excellence in Artificial Intelligence and Tech.",
    isComingSoon: false,
    pageTitle: "My Journey in Tech",
    pageHeroImage: "/img/about.jpg", // Your existing image
    pageContent: `
      <div style="display: flex; flex-wrap: wrap; align-items: flex-start; margin-bottom: 2rem; gap: 2rem;">
        <div style="flex: 1; min-width: 280px;">
          <h2>Arambhumi Reddy</h2>
          <blockquote style="font-style: italic; color: #F0F2FA; border-left: 3px solid #edff66; padding-left: 1rem; margin-left: 0; margin-bottom: 1.5rem;">
            "Driven by a passion for excellence and innovation in the world of AI."
          </blockquote>
          <p>With a Master's in Data Science and over 5 years of experience in the tech industry, my work is characterized by a commitment to the highest standards and meticulous attention to detail.</p>
        </div>
        <div style="flex-shrink: 0;">
          <img src="/img/my-profile-pic.jpg" alt="Arambhumi Reddy" style="width: 180px; height: 180px; object-fit: cover; border-radius: 50%; border: 3px solid #edff66; display: block;">
        </div>
      </div>

      <h2>My Approach</h2>
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
  {
    // PROJECT 1: RAG
    id: "advanced-rag-system",
    cardVideoSrc: "/videos/rag-system-showcase.mp4", // REPLACE with your RAG video
    cardTitle: <>Advanced <b>RAG</b> System</>,
    cardDescription: "Architecting and optimizing a high-performance RAG system for factual grounding and relevance.",
    isComingSoon: false, // Assuming you want to show this now
    pageTitle: "Optimized Retrieval-Augmented Generation",
    pageHeroImage: "/img/rag-hero.jpg", // REPLACE with your RAG hero image
    pageContent: `
      <h2>Project Overview: Enterprise RAG Implementation</h2>
      <p>At IvorSource, I led the architecture and development of a sophisticated Retrieval-Augmented Generation (RAG) system designed to enhance the factual accuracy and relevance of Large Language Model responses within the enterprise. The primary goal was to ground LLM outputs in verified internal knowledge, significantly reducing hallucinations and improving the reliability of AI-assisted tasks.</p>
      
      <div style="display: flex; flex-wrap: wrap; gap: 2rem; margin-bottom: 2rem;">
        <div style="flex: 1; min-width: 300px;">
          <img src="/img/rag-architecture-diagram.png" alt="RAG System Architecture" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
          <p style="text-align: center; font-size: 0.9em; color: #ccc;"><em>High-level architecture of the RAG system.</em></p>
        </div>
        <div style="flex: 1; min-width: 300px;">
          <h3>Key Contributions & Technical Details:</h3>
          <ul>
            <li><strong>System Architecture:</strong> Designed the end-to-end RAG pipeline, selecting Qdrant as the vector database for its performance and scalability.</li>
            <li><strong>Embedding Model Fine-Tuning:</strong> Curated a domain-specific dataset and fine-tuned the BGE-large-en-v1.5 embedding model to optimize semantic understanding of internal jargon and improve context retrieval.</li>
            <li><strong>Multi-Stage Retrieval:</strong> Implemented a two-stage retrieval process, using the fine-tuned BGE model for initial broad retrieval, followed by a BAAI/bge-reranker-large cross-encoder for precision reranking of candidate passages.</li>
            <li><strong>Prompt Engineering:</strong> Developed and iterated on sophisticated prompts to guide the downstream LLM in effectively utilizing retrieved context and adhering to factual information.</li>
          </ul>
        </div>
      </div>

      <h3>Impact & Results:</h3>
      <p>This multi-faceted approach, combining optimized embedding, advanced reranking, and strategic prompt engineering, led to a <strong>37% improvement in query response relevance</strong>. More importantly, it drastically reduced the occurrence of hallucinated or irrelevant answers, making the LLM a significantly more reliable and trusted tool for internal teams.</p>
      
      <h4>Technologies Leveraged:</h4>
      <ul>
        <li>Python, SQL, VectorDBs (Qdrant)</li>
        <li>Machine Learning, Deep Learning (PyTorch)</li>
        <li>NLP, Transformers, RAG, Prompt Engineering, Fine-Tuning (SFT)</li>
        <li>BGE-large-en-v1.5, BAAI/bge-reranker-large</li>
      </ul>
      <p>This project underscored the importance of a holistic approach to RAG, where each component, from data ingestion to final prompt design, plays a critical role in overall system performance.</p>
    `
  },
  {
    // PROJECT 2: MLOps - vLLM, Prometheus, Grafana, Docker, Kokoro TTS
    id: "llm-serving-and-monitoring",
    cardVideoSrc: "/videos/mlops-showcase.mp4", // REPLACE with your MLOps video
    cardTitle: <>LLM <b>MLOps</b> & TTS</>,
    cardDescription: "Containerized LLM deployment, real-time monitoring, and custom TTS integration.",
    isComingSoon: false, // Assuming you want to show this now
    pageTitle: "LLM Serving, Monitoring, and Custom TTS",
    pageHeroImage: "/img/mlops-dashboard-hero.jpg", // REPLACE with your MLOps hero image
    pageContent: `
      <h2>Project Overview: Scalable LLM Infrastructure & Customization</h2>
      <p>A core part of my work at IvorSource involved establishing robust and efficient infrastructure for serving open-source Large Language Models and enabling seamless developer experimentation. This included migrating serving engines, implementing comprehensive monitoring, and integrating custom solutions like Text-to-Speech (TTS).</p>

      <h3>Automated, Containerized LLM Deployment:</h3>
      <p>I engineered automated, containerized Docker deployment processes for various open-source LLMs. A key achievement was leading the migration from Text Generation Inference (TGI) to <strong>vLLM</strong>. This transition was pivotal in <strong>significantly boosting throughput and minimizing latency</strong> for our inference servers. The deployment configurations were optimized for streamlined cloud portability and easy adoption across internal development teams.</p>

      <div style="display: flex; flex-wrap: wrap; gap: 2rem; margin-bottom: 2rem; align-items: center;">
        <div style="flex: 1; min-width: 250px;">
          <img src="/img/vllm-tgi-comparison.png" alt="vLLM vs TGI Performance" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
          <p style="text-align: center; font-size: 0.9em; color: #ccc;"><em>Conceptual performance gains from TGI to vLLM.</em></p>
        </div>
        <div style="flex: 1; min-width: 250px;">
          <h3>Real-Time Performance Monitoring:</h3>
          <p>To ensure operational excellence, I established real-time performance monitoring for LLM inference servers (vLLM/TGI) and their underlying Virtual Machines. This was achieved using a stack of <strong>Prometheus, Grafana, and relevant exporters (Node Exporter, NVIDIA DCGM Exporter)</strong>. These dashboards provided crucial visibility into resource utilization, request latency, and throughput, facilitating rapid bottleneck identification and proactive resource management.</p>
          <img src="/img/grafana-dashboard-llm.png" alt="Grafana Dashboard for LLM Monitoring" style="width: 100%; margin-top:1rem; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
          <p style="text-align: center; font-size: 0.9em; color: #ccc;"><em>Example Grafana dashboard for LLM metrics.</em></p>
        </div>
      </div>
      
      <h3>Custom TTS Integration (Kokoro_TTS_Api):</h3>
      <p>Recognizing the need for more personalized and controllable voice outputs for local AI workflows, I developed and integrated a custom Text-to-Speech (TTS) engine, <a href="https://github.com/RedsAnalysis/Kokoro_TTS_Api" target="_blank" rel="noopener noreferrer">Kokoro_TTS_Api</a>. This project involved building a containerized TTS service that could be easily integrated into platforms like OpenWebUI, offering greater flexibility than off-the-shelf solutions.</p>

      <h4>Technologies Leveraged:</h4>
      <ul>
        <li>Docker, Docker Compose, Linux (VMs)</li>
        <li>vLLM, Text Generation Inference (TGI)</li>
        <li>Prometheus, Grafana, Node Exporter, NVIDIA DCGM Exporter</li>
        <li>Python, Bash</li>
        <li>Custom TTS development (e.g., based on Coqui TTS or similar, for Kokoro_TTS_Api)</li>
      </ul>
    `
  },
  {
    // PROJECT 3: Open Source Contribution - ComfyUI
    id: "comfyui-contribution-docker",
    cardVideoSrc: "/videos/comfyui-docker-feature.mp4", // REPLACE with your ComfyUI/Docker video
    cardTitle: <>ComfyUI <b>OSS</b></>,
    cardDescription: "Open-source contributions to ComfyUI, including advanced Dockerization for new GPUs.",
    isComingSoon: false, // Assuming you want to show this now
    pageTitle: "ComfyUI: Open Source Contributions & Dockerization",
    pageHeroImage: "/img/comfyui-hero.jpg", // REPLACE with your ComfyUI hero image
    pageContent: `
      <h2>Project Overview: Enhancing ComfyUI Accessibility & Performance</h2>
      <p>ComfyUI is a powerful and modular stable diffusion GUI and backend. My contributions have focused on improving its accessibility, especially for users with cutting-edge hardware, and exploring its capabilities for advanced image generation workflows.</p>

      <h3>Cutting-Edge ComfyUI Dockerization for Modern GPUs:</h3>
      <p>One of my key ongoing projects is engineering and maintaining a specialized Docker container for ComfyUI. This container incorporates updated dependencies, critically including support for newer CUDA versions (e.g., <strong>CUDA 12.8+</strong>) and relevant <strong>PyTorch development builds</strong>.</p>
      <p>The motivation behind this was to address compatibility challenges faced by users with the latest generation of consumer GPUs. Standard ComfyUI setups often lag in support for the newest CUDA toolkits, hindering experimentation. My Dockerized solution ensures <strong>seamless execution and experimentation</strong> on this new hardware, allowing users to leverage the full power of their GPUs without complex manual setup.</p>
      <p>You can find this work on my GitHub: <a href="[YOUR_COMFYUI_DOCKER_GITHUB_LINK_HERE]" target="_blank" rel="noopener noreferrer">ComfyUI Docker Repository</a>.</p> {/* REPLACE LINK */}
      
      <div style="text-align: center; margin: 2rem 0;">
        <img src="/img/comfyui-docker-logo.png" alt="ComfyUI Docker" style="max-width: 300px; margin: auto; border-radius: 8px;">
        <p style="font-size: 0.9em; color: #ccc;"><em>Ensuring ComfyUI runs smoothly on the latest hardware.</em></p>
      </div>

      <h3>Pull Request Contributions:</h3>
      <p>I also contribute directly to the ComfyUI ecosystem. For example, I submitted a pull request to <a href="[LINK_TO_YOUR_COMFYUI_PR_IF_DIFFERENT_FROM_DOCKER]" target="_blank" rel="noopener noreferrer">ComfyUI (or a related project like OpenWebUI if it was for TTS there)</a> that [briefly describe your PR, e.g., introduced custom TTS engine support]. This initiative received community feedback and aimed to [state the goal of the PR].</p>
      
      <h4>Key Aspects:</h4>
      <ul>
        <li>Proactive problem-solving for hardware compatibility.</li>
        <li>Expertise in Docker, CUDA, and PyTorch dependency management.</li>
        <li>Contribution to the open-source generative AI community.</li>
        <li>Facilitating access to cutting-edge AI tools for a wider audience.</li>
      </ul>
    `
  },
  {
    // PROJECT 4: PowerBI Visualization - Inmate Dashboard
    id: "powerbi-inmate-dashboard",
    // cardVideoSrc: "/videos/powerbi-dashboard.mp4", // REPLACE with your PowerBI video
    cardStaticBgClass: "bg-teal-300", // Example static background if no video
    cardTitle: <>PowerBI <b>Data</b>Viz</>,
    cardDescription: "Developed an Inmate Analysis Dashboard for the State of Florida using Power BI and DAX.",
    isComingSoon: false, // Assuming you want to show this now
    pageTitle: "State of Florida: Inmate Analysis Dashboard (Power BI)",
    pageHeroImage: "/img/powerbi-dashboard-hero.jpg", // REPLACE with your dashboard hero image
    pageContent: `
      <h2>Project Overview: Data-Driven Insights for Public Sector Decision Making</h2>
      <p>During my tenure as a Data Analyst at Florida State University, I had the opportunity to work on impactful data visualization projects. One notable project involved developing an Inmate Analysis Dashboard for a State of Florida initiative, aimed at providing clearer insights into inmate population trends, demographics, and other key metrics.</p>
      
      <div style="text-align: center; margin: 2rem 0;">
        <img src="/img/powerbi-inmate-dashboard-mockup.png" alt="Power BI Inmate Dashboard Mockup" style="width: 80%; max-width: 700px; margin: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
        <p style="font-size: 0.9em; color: #ccc;"><em>Mockup/representation of the Inmate Analysis Dashboard. (Replace with actual if possible and permitted)</em></p>
      </div>

      <h3>Dashboard Design & Technical Implementation:</h3>
      <p>My role was to transform raw data into actionable intelligence using <strong>Microsoft Power BI</strong>. This involved:</p>
      <ul>
        <li><strong>Data Modeling:</strong> Structuring and relating diverse datasets pertaining to inmate information.</li>
        <li><strong>DAX Measures & Calculations:</strong> Writing complex <strong>Data Analysis Expressions (DAX)</strong> to create custom calculations, key performance indicators (KPIs), and dynamic metrics for the dashboard.</li>
        <li><strong>Interactive Visualizations:</strong> Designing and implementing a suite of professional, interactive charts, graphs, and tables to present the data in an intuitive and easily digestible manner.</li>
        <li><strong>Trend Analysis:</strong> Configuring the dashboard to allow users to explore trends over time, filter by various demographic factors, and drill down into specific details.</li>
      </ul>

      <h3>Impact:</h3>
      <p>The resulting dashboard provided stakeholders within the State of Florida with a much clearer and more nuanced understanding of inmate population dynamics. This facilitated data-informed discussions and potentially supported strategic planning related to resource allocation, program effectiveness, and policy considerations. The ability to quickly visualize trends and filter data significantly improved upon previous manual reporting methods.</p>

      <h4>Skills Utilized:</h4>
      <ul>
        <li>Microsoft Power BI (Advanced)</li>
        <li>DAX (Data Analysis Expressions)</li>
        <li>Data Modeling & Visualization</li>
        <li>Stakeholder Communication & Requirements Gathering</li>
        <li>Data Analysis & Interpretation</li>
      </ul>
    `
  },
  {
    // PROJECT 5: NotifyVisitors - Shaping Journey
    id: "notifyvisitors-growth-journey",
    cardVideoSrc: "/videos/notifyvisitors-feature.mp4", // REPLACE with relevant video/image
    cardTitle: <>Notify<b>Visitors</b></>,
    cardDescription: "My foundational journey in data science, contributing to 40%+ growth and user engagement.",
    isComingSoon: false, // Assuming you want to show this now
    pageTitle: "NotifyVisitors: My Data Science Genesis & Growth Impact",
    pageHeroImage: "/img/notifyvisitors-hero.jpg", // REPLACE with a relevant hero image
    pageContent: `
      <h2>My Formative Experience at NotifyVisitors</h2>
      <p>NotifyVisitors was where my professional journey in data truly began and took shape, transitioning from a Junior Data Analyst to a Data Scientist. This period, from April 2019 to July 2022, was instrumental in developing my analytical mindset, technical skills, and understanding of how data drives business success, even amidst the challenges of the COVID-19 pandemic.</p>
      
      <h3>Early Contributions & Learning the Ropes:</h3>
      <p>As a startup, NotifyVisitors offered a dynamic environment. My initial role involved close collaboration with the team at Oracle as part of a startup initiative. This provided invaluable exposure to enterprise-level projects and resources, accelerating my learning curve. I was immersed in understanding user behavior, analyzing data from app installs, clicks, reviews, ratings, and purchase history to uncover insights that could fuel growth.</p>
      <p style="font-style: italic; color: #ccc; margin-bottom: 1.5rem;">"Even though I was early in my career, the opportunity to contribute to impactful projects and learn from seasoned professionals was immense. I quickly realized the power of data to tell a story and guide strategy."</p>

      <div style="display: flex; flex-wrap: wrap; gap: 2rem; margin-bottom: 2rem; align-items: flex-start;">
        <div style="flex: 1; min-width: 300px;">
          <img src="/img/notifyvisitors-dashboard-example.png" alt="NotifyVisitors Dashboard Example" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
          <p style="text-align: center; font-size: 0.9em; color: #ccc;"><em>Conceptual example of user engagement dashboard. (REPLACE with actual screenshots if available & permitted)</em></p>
        </div>
        <div style="flex: 1; min-width: 300px;">
          <h3>Transition to Data Scientist & Focusing on User Engagement:</h3>
          <p>My promotion to Data Scientist in March 2020 marked a shift towards more focused work on user engagement. Leveraging behavioral insights, I applied Machine Learning algorithms like <strong>Random Forest and XGBoost</strong> to identify anomalies and predict user actions. Hyperparameter tuning using <strong>Grid Search</strong> and feature extraction with <strong>PCA</strong> were key techniques I employed.</p>
          <p>This data-driven approach to understanding and influencing user behavior directly contributed to a <strong>boost in user engagement by over 45% within an 8-month period.</strong></p>
        </div>
      </div>

      <h3>Driving Growth Through Data-Driven Insights:</h3>
      <p>The insights generated from these analyses weren't just academic; they were translated into actionable strategies. By identifying patterns and opportunities, I contributed to initiatives that resulted in over <strong>40% overall growth for NotifyVisitors.</strong> This involved presenting findings to stakeholders, collaborating with marketing and product teams, and continuously iterating on our models and strategies.</p>
      
      <div style="background-color: #2a2a30; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
        <h4 style="color: #edff66; margin-top:0;">Key Achievements & Learnings:</h4>
        <ul>
          <li>Promoted from Junior Data Analyst to Data Scientist.</li>
          <li>Directly contributed to boosting user engagement by over 45%.</li>
          <li>Played a role in company initiatives leading to over 40% growth.</li>
          <li>Mastered ML algorithms (Random Forest, XGBoost) and techniques (Grid Search, PCA).</li>
          <li>Gained deep experience in analyzing user behavioral data (installs, clicks, reviews, purchase history).</li>
          <li>Developed skills in presenting complex data insights to diverse audiences.</li>
          <li>Learned the importance of iterative development and data-driven decision-making in a fast-paced startup environment.</li>
        </ul>
      </div>

      <div style="border: 1px solid #444; padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
        <h4 style="margin-top:0;">Customer/Team Testimonials (Examples - REPLACE with real ones if you have them):</h4>
        <blockquote style="font-style: italic; color: #ddd; border-left: 2px solid #888; padding-left: 1rem; margin-left: 0; margin-bottom: 1rem;">
          "Arambhumi's analytical work on user churn was pivotal in helping us redesign our onboarding flow, leading to a noticeable increase in retention." - Former Manager at NotifyVisitors
        </blockquote>
        <blockquote style="font-style: italic; color: #ddd; border-left: 2px solid #888; padding-left: 1rem; margin-left: 0;">
          "The engagement dashboards Arambhumi built gave us unprecedented visibility into how users were interacting with new features." - Product Team Lead
        </blockquote>
      </div>
      
      <p>My time at NotifyVisitors was a period of intense learning and significant professional growth. It solidified my passion for leveraging data to solve complex problems and drive tangible business outcomes, shaping me into the data scientist and AI practitioner I am today.</p>
    `
  },
  {
    // PROJECT 6: JavaScript/HTML Portfolio Website (This very website!)
    id: "portfolio-website-dev",
    // cardVideoSrc: "/videos/portfolio-dev-process.mp4", // Optional: a screen recording of you building it
    cardStaticBgClass: "bg-green-300", // Example static background
    cardTitle: <>Portfolio <b>Site</b> Dev</>,
    cardDescription: "My first foray into JavaScript & React for building this interactive portfolio.",
    isComingSoon: false, // Show this project
    pageTitle: "Portfolio Development: Embracing JavaScript & React",
    pageHeroImage: "/img/portfolio-code-hero.jpg", // REPLACE with a hero image (e.g., code snippet)
    pageContent: `
      <h2>Project Overview: Building My Digital Showcase</h2>
      <p>This very portfolio website represents a significant personal project and a dive into new technologies for me. While my core expertise lies in Python for AI/ML and backend systems, I recognized the importance of modern web development skills to effectively showcase my work and passion for technology.</p>

      <h3>Learning Journey: JavaScript, React, and Modern Web Tooling</h3>
      <p>This project was my first substantial endeavor using <strong>JavaScript and React</strong>. My approach was one of rapid, hands-on learning, leveraging online resources, documentation, and AI-assisted coding (like GitHub Copilot or ChatGPT for guidance) to quickly grasp core concepts:</p>
      <ul>
        <li><strong>React Components:</strong> Understanding component-based architecture, props, state, and JSX.</li>
        <li><strong>JavaScript Fundamentals:</strong> Reinforcing ES6+ features, asynchronous operations, and DOM manipulation (though largely abstracted by React).</li>
        <li><strong>Styling:</strong> Utilizing CSS (and potentially frameworks like Tailwind CSS, if you used one) for responsive design.</li>
        <li><strong>Build Tools & Deployment:</strong> Working with Node.js, npm/yarn, and deploying a static site (e.g., via Netlify, Vercel, or GitHub Pages).</li>
      </ul>
      <p>Despite it being a new stack for me, I was committed to building a high-quality, professional-looking website. I focused on creating an intuitive user experience, clean code (as much as a beginner can strive for!), and a visually appealing presentation of my projects.</p>
      
      <div style="text-align: center; margin: 2rem 0;">
        <img src="/img/react-js-logos.png" alt="React and JavaScript Logos" style="max-width: 200px; margin: auto;">
        <p style="font-size: 0.9em; color: #ccc;"><em>Stepping into the world of JavaScript and React.</em></p>
      </div>

      <h3>Key Takeaways & Growth:</h3>
      <ul>
        <li>Demonstrated ability to rapidly learn and apply new programming languages and frameworks.</li>
        <li>Gained practical experience in front-end development principles.</li>
        <li>Reinforced the value of self-directed learning and leveraging available tools to overcome challenges.</li>
        <li>Successfully created a personal platform to share my technical journey and achievements.</li>
      </ul>
      <p>This project not only resulted in my online portfolio but also broadened my technical skillset, proving that with a solid foundation and a proactive learning approach, new technological domains can be effectively mastered.</p>
      <p>The source code for this portfolio is available on my GitHub: <a href="[YOUR_PORTFOLIO_GITHUB_LINK]" target="_blank" rel="noopener noreferrer">Portfolio Repository</a>.</p> {/* REPLACE LINK */}
    `
  }
];