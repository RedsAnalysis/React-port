// src/projectData.jsx

export const projects = [
  {
    id: "arambhumi-reddy-journey",
    cardVideoSrc: "/videos/feature-1.mp4",
    cardTitle: <>Aram<b>bhumi</b> Reddy</>,
    cardDescription: "My personal journey and drive for excellence in Artificial Intelligence and Tech.",
    cardTextColor: 'text-blue-50', // Light text for video background
    pageTitle: "My Journey in Tech",
    pageHeroImage: "/img/about.jpg",
    pageIntro: `
      <p class="text-lg md:text-xl leading-relaxed">Fueled by a passion for AI excellence and innovation, my foundation includes a Bachelor's in Computer Science and a Master's in Data Science. With over a year of dedicated experience in the US tech market, my work is defined by an unwavering commitment to the highest standards and meticulous attention to detail.</p>
    `,
    pageSections: [
      {
        image: "/img/my-profile-pic.jpg",
        alt: "Arambhumi Reddy",
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
      {
        image: "/img/office.png",
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
    cardImageSrc: "/img/rag1.JPG",
    cardTitle: <>Advanced <b>RAG</b> System</>,
    cardDescription: "",
    cardTextColor: 'text-black',
    pageTitle: "Optimized Retrieval-Augmented Generation",
    pageHeroImage: "/img/rag.JPG", // A general hero for the RAG project page
    pageIntro: `
      <p class="text-lg md:text-xl leading-relaxed">Engaged as an Jr. AI consultant for a prominent financial institution, I was part of a team that led the strategic design and development of a sophisticated Retrieval-Augmented Generation (RAG) system. The initiative was critical for enhancing the precision and contextual relevance of Large Language Model outputs used in internal banking operations. By grounding LLM responses in verified, proprietary knowledge, the system significantly mitigated informational inaccuracies and demonstrably improved the reliability of AI-assisted financial tasks.</p>
    `,
    pageSections: [
      {
        image: "/img/ivor_rag_1.JPG",
        alt: "High-level RAG System Architecture",
        text: `
          <h3>System Architecture Overview</h3>
          <p>The system is built upon an advanced multi-agent architecture, orchestrated by a central <strong>System Control Plane</strong>. At the heart of this plane is the <strong>Supervisor Agent</strong>, which intelligently processes incoming user questions. This agent leverages a sophisticated <strong>Memory</strong> component, retaining human feedback, historic questions, answers, and interaction steps to enhance contextual understanding and personalization over time.</p>
          <p>The Supervisor Agent delegates specialized tasks to a suite of sub-agents: the <strong>Structured Data Agent</strong> queries traditional databases (SQL, Snowflake) for transactional data and status histories; the <strong>Analytics Agent</strong> utilizes tools for performance analysis, transaction attribution, and funds exposure; and the <strong>Un-Structured Data Agent</strong>. My primary involvement focused on this Un-Structured Data Agent, which functions as a sophisticated RAG (Retrieval Augmented Generation) system, processing queries against diverse textual data like meeting notes, emails, and documents to find relevant 'Matching Chunks'. The Supervisor Agent then synthesizes outputs from all active sub-agents, performs a crucial 'Reflection' step for accuracy and coherence, and delivers a comprehensive answer to the user.</p>`
      },
      {
        image: "/img/ivor_rag_2.JPG",
        alt: "Dual-Path Intelligent Query Processing",
        text: `
          <h3>Dual-Path Intelligent Query Processing</h3>
          <p>Our system initiates with a crucial <strong>Planning</strong> phase to determine the nature of a user's query. Based on this assessment, the query is routed down one of two distinct processing paths: a <strong>General Q/A Flow</strong> or a <strong>Specific Transaction Flow</strong>. Each path is managed by a dedicated supervisor (<code>general_supervisor</code> or <code>specific_supervisor</code>) responsible for orchestrating the subsequent steps.</p>
          <p>Both flows incorporate user confirmation steps (<code>toolcall_usr_confirm</code>) before dispatching tasks to specialized <strong>agents</strong> (e.g., for structured data, or a combination of structured, unstructured, and analytics for transactional tasks). Following agent processing and a user review (<code>toolcall_usr_review</code>), the system generates a <code>personalized_answer</code>. This answer undergoes a critical <code>reflection_check</code> for accuracy and completeness before the flow segment concludes. Finally, regardless of the initial path, all interactions culminate in a <code>conversation_summarization</code> before the process formally ends, ensuring clarity and a comprehensive record.</p>`
      },
      {
        image: "/img/ivor_rag_3.JPG",
        alt: "Modular Agent Design & Iterative Processing",
        text: `
          <h3>Modular Agent Design & Iterative Processing</h3>
          <p>Our system's architecture embodies the principle: "<strong>Start simple and refactor often.</strong>" This is evident in its modular design, where distinct operational flows manage different aspects of query processing. At a foundational level (Diagram 1), individual <strong>agents</strong> operate in a loop, deciding to continue tasks—potentially involving tool calls with user interruption points—or conclude their process. More specialized agents (Diagram 2) follow a common pattern of utilizing <strong>tools</strong>, <strong>retrieving</strong> information, <strong>rewriting</strong> or refining that information, and then <strong>generating</strong> an output before ending their specific sub-task.</p>
          <p>Overseeing these operations, a higher-level <strong>supervisor</strong> (Diagram 3) manages the workflow, checking for necessary data like <code>missing_transactional_data</code>, performing crucial <code>reflection_check</code>s on processed information, and interacting with underlying <code>agents</code>. This supervisor also handles user confirmations (<code>Toolcall usr_confirm</code>) and reviews (<code>Toolresult usr_review</code>) at appropriate junctures. The entire interaction typically begins (Diagram 4) with an <code>analyse_query</code> step, which intelligently routes the user's request to either a <code>general_flow</code> or a <code>specific_transaction_flow</code>, culminating in a <code>conversation_summary</code> to ensure clarity and a complete record of the interaction.</p>
        `
      },
      {
        image: "/img/promptengin.png",
        alt: "Advanced Agent Prompt Engineering Cycle", // Changed alt text to be more specific
        text: `
              <h3>Advanced Agent Prompt Engineering</h3>
              <p>A meticulously structured prompt guides our Banking Supervisor Agent, enabling it to effectively orchestrate sub-agents and deliver precise, personalized banking support. Key components of this prompt include:</p>

              <p><strong>1. Role (Persona):</strong> Defined as an AI orchestrator (Banking Supervisor Agent) managing user queries by coordinating specialized sub-agents for accurate, personalized responses.</p>

              <p><strong>2. Task (Instruction/Goal):</strong> Analyzes queries, plans the optimal approach (General Q/A or Specific Transaction), dispatches tasks to sub-agents, synthesizes their outputs, performs reflection checks, and delivers the final verified answer.</p>

              <p><strong>3. Input (Context/Data):</strong> Receives user queries, accesses historical interaction <code>Memory</code> for context, and ingests structured outputs ("Query Results," "Matching Chunks") from sub-agents (Transactional, RAG, Analytics).</p>

              <p><strong>4. Output (Format/Style Specification):</strong> Delivers personalized, accurate, and compliant answers, often synthesized from multiple sources. Manages user confirmations (<code>toolcall_user_confirm</code>) and reviews (<code>toolcall_user_review</code>).</p>

              <p><strong>5. Constraints (Limitations/Negative Prompts):</strong> Must strictly adhere to sub-agent tool call schemas, avoid direct task execution, and operate within banking security, data privacy, and verification protocols.</p>

              <p><strong>6. Capabilities & Reminders (Advanced/Meta-Instructions):</strong> Leverages <code>Memory</code> for personalization, orchestrates sub-agents by query type, performs critical reflection checks, and prioritizes clarity and accuracy, thinking step-by-step per system flows.</p>

              <p>This structured prompt engineering ensures the Supervisor Agent effectively utilizes sub-systems, leading to highly relevant responses and significantly reduced errors.</p>
            `

      }
    
    ]
  },
  {
    id: "notifyvisitors-growth-journey",
    cardImageSrc: "/img/notiy.avif",
    cardTitle: <>Notify<b>Visitors</b></>,
    cardDescription: "My foundational journey in data science, contributing to 40%+ growth and user engagement.",
    cardTextColor: 'text-black', // Assuming notiy.avif is light
    pageTitle: "NotifyVisitors: My Data Science Genesis & Growth Impact",
    pageHeroImage: "/img/notifyvisitorlogo.png",
    pageIntro: `
      <p class="text-lg md:text-xl leading-relaxed">NotifyVisitors marked the true beginning of my professional journey in data.In the summer of 2021, I landed an internship opportunity through an unexpected connection—one of my clothing brand's customers was impressed by the work I had done, and it turned out his son was a big fan of the line I ran during college (more on that in the Passion Projects section of this portfolio). That internship at NotifyVisitors became a turning point, sharpening my analytical thinking and technical capabilities. It was here that I first learned to harness the power of data to improve user engagement and support meaningful business decisions.</p>
    `,
    pageSections: [
      {
        image: "/img/notifuanalytics.png",
        alt: "NotifyVisitors User Engagement Dashboard Example",
        text: `
          <h3>Early Contributions & User Engagement Focus</h3>
          <p>My initial role centered around building dashboards to visualize user behavior—tracking metrics like app installs, clicks, event activity, and purchase patterns. I worked closely with the customer engagement team to surface actionable insights through Power BI dashboards, enabling smarter segmentation and campaign targeting.</p>
          <p>This data-driven approach played a key role in improving internal decision-making and optimizing user journeys, directly supporting a significant uplift in user engagement and campaign effectiveness during my internship period.</p>
      `
      },
      {
        image: "/img/dashboard_preview.png",
        alt: "Machine Learning Model Development Workflow",
        text: `
          <h3>Key Achievements & Learnings</h3>
          <p>My time at NotifyVisitors was a period of intense learning and foundational professional growth. It deepened my interest in data and showed me the power of visual storytelling in driving user engagement and business outcomes.</p>
          <ul>
            <li>Designed and delivered Power BI dashboards to help visualize user journeys and campaign performance.</li>
            <li>Supported data-driven decision-making for the customer engagement team by analyzing behavioral and event data.</li>
            <li>Learned to work with real-world datasets and gained hands-on experience with event tracking, segmentation, and funnel analysis.</li>
            <li>Built a strong foundation in communicating data insights to non-technical stakeholders.</li>
            <li>Grew comfortable working with CSV data, data mapping, and platform-specific SDK event structures.</li>
          </ul>
          <p>This experience sparked my long-term commitment to solving problems with data and laid the groundwork for my future in analytics and AI.</p>
        `
      }
    ]
  },
  {
    id: "FSU",
    cardImageSrc: "/img/fsulogo.svg", // Image for card
    cardStaticBgClass: "bg-teal-300", // Fallback or border styling
    cardTitle: <>Data <b>Analyst</b></>,
    cardDescription: "",
    pageTitle: "Technical Support & Data Initiatives at FSU",
    pageHeroImage: "/img/FSU_Lockup_GAR_H_rgb.svg",
    pageIntro: `
      <p class="text-lg md:text-xl leading-relaxed">During my tenure at Florida State University, my primary role involved providing comprehensive technical support for the Canvas Learning Management System. This experience allowed me to directly contribute to the university's academic operations. Concurrently, I undertook a significant data analysis project, developing an Inmate Analysis Dashboard for a State of Florida initiative, demonstrating my capabilities in data science and analytics.</p>
    `,
    pageSections: [
      {
        image: "/img/fsu_canvas.png",
        alt: "Canvas LMS Support Interface",
        text: `
          <h3>Canvas LMS Technical Support at Florida State University</h3>
          <p>While pursuing my master's in Data Science at Florida State University, I held a vital part-time role providing dedicated technical support for the Canvas Learning Management System (LMS). My core responsibilities centered on assisting university professors and faculty with troubleshooting complex user issues, which was crucial for facilitating smoother course delivery and enhancing the overall educational experience.</p>
          <p>I actively managed the Canvas support ticket queue, addressing a wide array of inquiries and implementing timely, effective solutions to minimize disruption to academic activities. A key part of my role also involved developing and disseminating clear instructional materials and effectively communicating Canvas updates and maintenance schedules to faculty, thereby fostering a better understanding and adoption of the platform’s features.</p>
          `
      },
      {
        image: "/img/fsu_po_powerbi.png",
        alt: "Power BI Inmate Dashboard Mockup",
        text: `
          <h3>Impact and Applied Data Science Skills</h3>
          <p>My work providing technical support for Canvas LMS directly contributed to ensuring consistent course delivery and an improved user experience for both faculty and students at FSU. By efficiently resolving complex support tickets and delivering clear instructional materials, I played a part in minimizing academic disruptions and encouraging the effective use of the platform’s diverse features.</p>
          <p>Building upon this foundation and seeking to apply my data science acumen, I embraced an opportunity to work on a significant data analysis project with the Florida Department of Corrections (FDC), under the guidance of Michael Burke. For this initiative, I leveraged data from <code>INMATE_ACTIVE_ROOT.txt</code> and related offense datasets to develop a comprehensive, interactive Power BI dashboard. This involved extensive data processing and analysis using <strong>Python (with Pandas for data manipulation and Matplotlib for initial visualizations within Jupyter Notebooks)</strong>, alongside insights derived from <strong>SQL queries</strong>. The project focused on trend, demographic, and offense-specific analyses, culminating in a dashboard that offered the FDC a powerful tool for dynamic data exploration and informed decision-making regarding inmate populations and facility statistics.</p>
          <h4>Skills Utilized:</h4>
          <ul>
            <li>Canvas LMS Support & User Training</li>
            <li>Technical Troubleshooting & Ticket Resolution</li>
            <li>Microsoft Power BI (Interactive Dashboard Development, Data Visualization)</li>
            <li>Python for Data Science (Pandas for data cleaning, processing, and merging; Matplotlib for visualization; Jupyter Notebooks for analysis)</li>
            <li>SQL (Data Extraction, Aggregation, and Querying)</li>
            <li>Data Analysis (Trend, Demographic, and Statistical Analysis)</li>
            <li>Stakeholder Communication & Work Sample Documentation/Presentation</li>
            <li>Data Management (Handling and transforming large CSV/text datasets)</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "Kiyo-Drip",
    cardImageSrc: "/img/kiyodrip.png",
    cardTitle: <>Kiyo-Drip <b>Clothing</b> Brand</>,
    cardDescription: "",
    cardTextColor: "text-black", // Assuming kiyodrip.png is light
    
    pageTitle: "Kiyo-Drip: Building an Anime Streetwear Brand",
    
    topSliderTitle: "<h3>Signature Kiyo-Drip Designs</h3>",
    topSliderImages: [
      { "src": "/img/mock1.png", "alt": "Kiyo-Drip Uchiha Clan Inspired Hoodie" },
      { "src": "/img/mock2.png", "alt": "Kiyo-Drip Itachi Inspired Hoodie with Background" },
      { "src": "/img/mock3.png", "alt": "Kiyo-Drip Haikyuu Fly High Hoodie" },
      { "src": "/img/mock4.png", "alt": "Kiyo-Drip Sasuke Chidori T-shirt" },
      { "src": "/img/mock5.png", "alt": "Kiyo-Drip Metsu Kanji Hoodie" }
    ],
    topSliderCaption: "<p class=\"text-center mt-2 text-sm text-gray-400\">A showcase of some of the original anime-inspired streetwear designs that defined the Kiyo-Drip brand, from iconic clan symbols to dynamic character art.</p>",

    pageIntro: `
      <p class="text-lg md:text-xl leading-relaxed">During my college years in India, amidst the COVID-19 pandemic, I founded Kiyo-Drip (<a href="https://kiyodrip.in/" target="_blank" rel="noopener noreferrer" class="underline hover:text-yellow-300">kiyodrip.in</a>), an anime-inspired streetwear clothing brand. This passion project grew from initial design mockups to a fully operational e-commerce business with a significant market presence, culminating in a successful sale before my move to the United States.</p>
    `,
    pageSections: [
      {
        image: "/img/checkout_ss.jpg",
        alt: "Kiyo-Drip Shopify Order Confirmation Showing Upfront Payment",
        text: `
          <h3>Concept, Design, and Initial Launch</h3>
          <p>The journey of Kiyo-Drip began with a passion for anime and streetwear. I started by creating unique clothing designs and mockups using <strong>GIMP</strong>, focusing on templates that resonated with anime aesthetics. Initially, I leveraged <strong>print-on-demand (POD) services</strong> to bring these designs to life and launched the brand on a custom <strong>Shopify</strong> website. This model was crucial in the early stages as it allowed for a lean startup approach; by securing customer payments upfront through Shopify before initiating production with POD suppliers (as illustrated by typical order fulfillments), we significantly minimized initial capital investment and inventory risk, enabling us to test product-market fit effectively.</p>
        `
      },
      {
        image: "/img/col_fac.png", // Assuming this path exists
        alt: "Kiyo-Drip Local Manufacturing and Printing",
        text: `
          <h3>Transition to Local Manufacturing & Enhanced Quality</h3>
          <p>As the brand gained traction, I strategically transitioned from print-on-demand to local production to enhance quality and improve profit margins. I established a partnership with a local vendor in Bangalore, India, to source high-quality clothing materials in bulk. For printing, I utilized <strong>Screen Printing</strong> for simpler, high-volume designs due to its cost-effectiveness, and <strong>Direct-to-Garment (DTG) Printing</strong> for more intricate and detailed designs in specific product lines, ensuring premium print quality despite its higher cost. This shift to local manufacturing directly contributed to a <strong>23% boost in profit margins</strong> through strategic sourcing and cost efficiencies.</p>
        `
      },
      {
        image: "/img/kiyodripsocial.png", // Assuming this path exists
        alt: "Kiyo-Drip Marketing and Social Media Presence",
        text: `
          <h3>Marketing, Growth, and Strategic Operations</h3>
          <p>To drive customer acquisition, I managed targeted <strong>Google and Facebook advertising campaigns</strong> and cultivated a strong social media presence for the Kiyo-Drip brand. A key factor in our rapid growth was the strategic use of <strong>machine learning algorithms and AI-driven analytics for market analysis</strong>. This data-centric approach allowed us to pinpoint emerging trends and identify optimal product launch timings, leading to a <strong>45% increase in market share</strong> and an expansion of our user base from 1,500 to over 10,000 in just four months.</p>
          <p>The entire Kiyo-Drip venture transformed into a thriving brand, a testament to effective communication, multitasking, creative problem-solving, and strategic business decisions. Ultimately, I sold Kiyo-Drip for a good margin before relocating to the United States.</p>
          <h4>Skills & Achievements:</h4>
          <ul>
            <li>Entrepreneurship & Brand Building (Founder of Kiyo-Drip)</li>
            <li>E-commerce Management (Shopify)</li>
            <li>Graphic Design (GIMP, Clothing Mockups)</li>
            <li>Supply Chain Management (Print-on-Demand to Local Sourcing & Manufacturing)</li>
            <li>Printing Techniques (Screen Printing, Direct-to-Garment)</li>
            <li>Digital Marketing (Google Ads, Facebook Ads, Social Media Marketing)</li>
            <li>Market Analysis (AI-driven analytics, Trend Identification) - Led to 45% market share increase & 10k+ user base</li>
            <li>Profit Optimization - Boosted profit by 23% via local manufacturing</li>
            <li>Business Development & Strategic Decision Making</li>
            <li>Problem-Solving, Communication & Multitasking</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "Open Source Contributions",
    cardImageSrc: "/img/Open_Source_Image.webp",
    cardTitle: <>Open <b>Source</b> Contributions</>,
    cardDescription: "",
    cardTextColor: 'text-blue-50', // Assuming image is dark
    pageTitle: "Open Source Contributions",
    pageHeroImage: "/img/comfyui_icon.avif",
    pageIntro: `
      <p class="text-lg md:text-xl leading-relaxed">ComfyUI is a powerful and modular stable diffusion GUI and backend. My contributions have focused on improving its accessibility, especially for users with cutting-edge hardware, and exploring its capabilities for advanced image generation workflows.</p>
    `,
    pageSections: [
      {
        image: "/img/comfydock.png",
        alt: "ComfyUI Docker Logo and Concept",
        text: `
          <h3>Cutting-Edge ComfyUI Dockerization</h3>
          <p>One of my key ongoing projects is engineering and maintaining a specialized Docker container for ComfyUI, available on <a href="https://github.com/RedsAnalysis/ComfyUI" target="_blank" rel="noopener noreferrer">GitHub</a>. This container incorporates updated dependencies, critically including support for newer CUDA versions (e.g., <strong>CUDA 12.8+</strong>) and relevant <strong>PyTorch development builds</strong>.</p>
          <p>The motivation was to address compatibility challenges faced by users with the latest GPUs. My Dockerized solution ensures <strong>seamless execution</strong> on new hardware, allowing users to leverage full GPU power without complex manual setups. This facilitates easier access to cutting-edge generative AI for a wider audience.</p>
        `
      },
      {
        image: "/img/subpack.png", // Assuming path exists
        alt: "Example Pull Request to ComfyUI or related project",
        text: `
            <h3>Pull Request Contributions & Community Engagement</h3>
            <p>Beyond Dockerization, I actively contribute to the ComfyUI ecosystem and related open-source projects. My contributions focus on enhancing functionality, improving user experience, and ensuring broader compatibility. This often involves deep dives into Python, PyTorch, and CUDA dependency management to keep these powerful tools accessible and performant for everyone.</p>

            <h4>Key Contribution: Custom TTS Engine Support for Open WebUI</h4>
            <p>A significant contribution was the design and implementation of a user-configurable <strong>"Custom TTS" engine feature within Open WebUI</strong>. Previously, users were limited to a fixed set of integrated Text-to-Speech engines. Recognizing the community's need for greater flexibility, I developed a solution that allows users to connect virtually any external TTS service that exposes compatible API endpoints (particularly those adhering to OpenAI TTS API conventions or similar structures).</p>
            <p><strong>This feature empowers users to:</strong></p>
            <ul>
              <li>Integrate niche language providers.</li>
              <li>Utilize self-hosted TTS models (e.g., XTTSv2 via custom API servers) for enhanced privacy and control.</li>
              <li>Connect to other commercial or open-source TTS APIs, expanding their choice significantly.</li>
            </ul>
            <p>From a user perspective, this involves selecting "Custom TTS" in the audio settings and providing the Base URL and API Key (if required) for their chosen external service. Open WebUI then dynamically fetches available voices and models from the custom endpoint and routes synthesis requests accordingly. I also addressed subsequent bugs, such as ensuring correct rendering of voice and model dropdowns when switching between TTS engines, and kept the feature updated with the main Open WebUI repository. My fork with these enhancements is available on <a href="https://github.com/open-webui/open-webui/discussions/12937" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
            <p>This initiative was well-received by the community, providing a much-needed solution for users requiring specialized or self-managed TTS capabilities, as evidenced by positive user feedback and engagement.</p>

            <h4>General Open Source Philosophy & Other Contributions:</h4>
            <p>Engaging with the open-source community, providing solutions like the Custom TTS feature, submitting pull requests for bug fixes (e.g., improving custom node compatibility in ComfyUI setups), or streamlining setup processes are important aspects of my work. These efforts aim to make cutting-edge generative AI tools more robust, user-friendly, and adaptable for a wider audience.</p>
            
            <h4>Key Aspects of My Open Source Work:</h4>
            <ul>
              <li>Proactive problem-solving for hardware compatibility and feature enhancement.</li>
              <li>Expertise in Python, Docker, CUDA, and PyTorch dependency management.</li>
              <li>Full-stack feature development (frontend UI integration to backend API interaction, as seen with Custom TTS).</li>
              <li>Active contribution to the open-source generative AI community.</li>
              <li>Commitment to maintaining and improving shared tools.</li>
            </ul>
          `
      }
    ]
  },
  {
    id: "Personal Projects",
    cardImageSrc: "/img/github.webp",
    cardTitle: <>Personal <b>Projects</b></>,
    cardDescription: "",
    cardTextColor: 'text-blue-50', // Assuming image is dark
    pageTitle: "Personal Projects and Development",
    pageIntro: `
      <p class="text-lg md:text-xl leading-relaxed">This portfolio website represents a significant personal project and a dive into new technologies. While my core expertise lies in Python for AI/ML, I recognized the importance of modern web development skills to effectively showcase my work.</p>
    `,
    pageSections: [
      {
        image: "/img/webhome.png",
        alt: "React and JavaScript Logos",
        text: `
          <h3>Portfolio Website Development (This Site!)</h3>
          <p>This portfolio itself represents my first significant dive into <strong>JavaScript and React</strong> for front-end development. My goal was to rapidly learn and apply modern web technologies, including component-based architecture with React, ES6+ features, styling with Tailwind CSS, and leveraging tools like Vite for the build process.</p>
          <p>I focused on creating an intuitive user experience with a professional aesthetic to effectively showcase my technical journey and projects. The development process reinforced the value of self-directed learning and hands-on application. The source code is available on <a href="https://github.com/RedsAnalysis/React-port" target="_blank" rel="noopener noreferrer" class="underline hover:text-yellow-300">GitHub</a>.</p>
        `
      },
      {
        image: "/img/ai_bg_rm.png",
        alt: "AI Background Remover & Inpaint Editor Interface",
        text: `
          <h3>AI Background Remover & Inpaint Editor</h3>
          <p>I developed a powerful Python application, the <a href="https://github.com/RedsAnalysis/AI-Background-Remover-Inpaint-Editor" target="_blank" rel="noopener noreferrer" class="underline hover:text-yellow-300">AI-Background-Remover-Inpaint-Editor</a>, which combines AI-powered background removal (leveraging models via <code>rembg</code>) with manual inpainting tools. It features a user-friendly web interface built with <strong>Gradio</strong>, providing an accessible solution for quick and professional image editing.</p>
          <p>Key features include support for multiple image formats, a choice of AI models for background removal, and real-time processing. This project showcases my ability to integrate AI models into practical applications and build intuitive user interfaces for complex tasks. It's designed for photographers, designers, or anyone needing robust image editing capabilities.</p>
        `
      },
      {
        image: "/img/llmsandbox.png",
        alt: "Local LLM Inference Sandbox Concept",
        text: `
          <h3>Current Exploration: Local LLM Inference Sandbox</h3>
          <p>I am currently developing a fully functional local Large Language Model (LLM) inference environment. This sandbox utilizes <strong>vLLM</strong> for efficient model serving and integrates with <strong>OpenWebUI</strong> as the user interface. A key aspect of this ongoing project is the incorporation of <strong>Langfuse</strong> for comprehensive tracing and observability.</p>
          <p>The goal is to create a ready-to-go platform for rapidly prototyping and evaluating AI agents and other LLM-powered applications in a controlled, local setting, allowing for detailed analysis of model behavior and performance.</p>
        `
      },
      {
        image: "/img/hf.svg", 
        alt: "Example of Tailwind CSS code used in the portfolio",
        text: `
          <h3>Key Takeaways & Growth from Personal Projects</h3>
          <ul>
            <li>Demonstrated ability to rapidly learn and apply new programming languages and frameworks (JavaScript, React, Python with Gradio).</li>
            <li>Gained practical experience in front-end development, AI model integration, and building interactive web applications.</li>
            <li>Reinforced the value of self-directed learning, open-source tools, and leveraging modern development practices.</li>
            <li>Successfully created platforms to share my technical journey and build useful tools.</li>
          </ul>
          <p>These personal projects have significantly broadened my technical skillset, proving that new technological domains can be effectively mastered with a proactive learning approach and hands-on development.</p>
        `
      }
    ]
  }
];