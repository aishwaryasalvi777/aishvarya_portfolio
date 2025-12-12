// --- DATA ---
const projectsData = [
    {
        id: 1,
        title: "Recommendation Engine",
        desc: "Engineered a full-stack ALS-based recommendation engine on 2.7M+ RetailRocket events with optimized sparse matrix processing and real-time predictions.",
        match: "98% Match",
        year: "2024",
        category: "Machine Learning",
        badge: "NEW",
        preview: "Trained on 2.7M+ events. Real-time predictions.",
        gradient: "",
        image: "assets/images/project-1.png",
        tags: ["Python", "FastAPI", "Docker"],
        points: ["Trained on 2.7M+ events", "Real-time predictions via FastAPI", "Deployed with Docker Compose"],
        links: [
            { label: "View Code", url: "https://github.com/aishwaryasalvi777/Ecommerce_product_recommendation" },
            { label: "Full Report", url: "#" }
        ]
    },
    {
        id: 2,
        title: "Real-Time Analytics",
        desc: "Built a streaming pipeline processing 10K+ Kafka events/min with Spark Structured Streaming.",
        match: "96% Match",
        year: "2024",
        category: "Data Engineering",
        badge: "NEW",
        preview: "10K+ events/min. Sub-200ms latency.",
        gradient: "",
        image: "assets/images/project-2.png",
        tags: ["Kafka", "Spark", "PostgreSQL"],
        points: ["10K+ events per minute", "Latency < 200ms", "Logistic Regression for Churn"],
        links: [
            { label: "View Code", url: "http://github.com/aishwaryasalvi777/Real_Time_User_Interaction_Analytics_Pipeline" },
            { label: "Full Report", url: "#" }
        ]
    },
    {
        id: 3,
        title: "Heart Risk AI",
        desc: "Designed and deployed a machine learning pipeline for heart attack risk prediction using MLOps practices.",
        match: "95% Match",
        year: "2023",
        category: "MLOps",
        preview: "7+ experiments with MLflow. Deployed on GCP.",
        gradient: "",
        image: "assets/images/project-3.png",
        tags: ["MLOps", "XGBoost", "GCP"],
        points: ["Managed 7+ experiments with MLflow", "Deployed on GCP", "Random Forest & XGBoost"],
        links: [
            { label: "View Code", url: "https://github.com/aishwaryasalvi777/ML_Heart_Attack_Prediction" },
            { label: "Full Report", url: "#" }
        ]
    }
];

const experienceData = [
    {
        id: 13,
        title: "Data Engineer @ New Era Cap",
        year: "Aug 2025 - Present",
        desc: "Built and productionized forecasting ML workflows and observability for global sales across regions and product silhouettes.",
        match: "New Release",
        badge: "NEW",
        preview: "End-to-end ML pipeline. Production-grade MLOps.",
        gradient: "bg-gradient-to-br from-cyan-40 via-blue-500 to-blue-700",
        image: "https://unsplash.com/photos/PRIlO4BApPI/download?force=true&w=1600",
        tags: ["Azure ML", "Snowflake", "CatBoost"],
        points: [
            "Built an end-to-end ML pipeline in Azure Machine Learning for global sales forecasting across multiple regions and product silhouettes.",
            "Converted a large exploratory notebook into a fully modular, production-grade MLOps process using Azure ML Components and Designer pipelines.",
            "Integrated Snowflake with Azure ML for automated and secure data ingestion.",
            "Developed feature engineering (lags, rolling windows, time-based patterns) and trained CatBoost forecasting models.",
            "Implemented custom environments, versioned components, and reusable pipeline assets in Azure ML.",
            "Created a Streamlit web application to visualize forecasts with interactive charts and model performance insights.",
            "Troubleshot and resolved cloud issues involving Key Vault authentication, environment conflicts, and compute configuration.",
            "Delivered an automated, scalable ML workflow supporting accurate demand forecasting at New Era Cap."
        ]
    },
    {
        id: 14,
        title: "Student Assistant @ University at Buffalo",
        year: "Jan 2025 - May 2025",
        desc: "Supported predictive analytics and data analysis projects as a part-time student assistant.",
        match: "Part-time",
        preview: "Predictive analytics. Data analysis projects.",
        gradient: "",
        image: "assets/images/ub_logo.png",
        tags: ["Predictive Analytics", "Data Analysis"],
        points: [
            "Assisted with predictive analytics and data analysis tasks for faculty research and internal projects.",
            "Prepared datasets, performed exploratory analysis, and helped build reproducible analysis notebooks."
        ]
    },
    {
        id: 4,
        title: "Software Engineer @ Mediaocean",
        year: "Mar 2023 - Jul 2024",
        desc: "Automated large-scale data validation and analytics workflows; focused on CI/CD and test automation.",
        match: "Featured",
        preview: "95% API coverage. Advanced CI/CD pipelines.",
        gradient: "",
        image: "assets/images/mo.png",
        tags: ["Regression", "Jenkins", "Karate"],
        points: [
            "Automated large-scale data validation and analytics workflows by developing Karate API & Selenium frameworks, boosting API regression coverage from 40% to 95% and reducing production defects by 30%.",
            "Orchestrated end-to-end data-driven QA pipelines using CI/CD tools (Jenkins, GitHub Actions) with Docker, and created interactive Power BI dashboards for KPI and test coverage tracking.",
            "Streamlined environment setup from 2 hours to just 10 minutes, improved QA pipeline stability by 50%, and cut Mean Time to Recovery (MTTR) by 40%.",
            "Led both manual and automated testing efforts, collaborating cross-functionally and mentoring junior members to ensure high product quality."
        ]
    },
    {
        id: 5,
        title: "Associate Software Engineer @ Mediaocean",
        year: "Aug 2021 - Mar 2023",
        desc: "Developed validation scripts and analytics reports to ensure data integrity across releases.",
        match: "Classic",
        preview: "95% validation coverage. 97% build success rate.",
        gradient: "",
        image: "assets/images/mo.png",
        tags: ["SQL", "Analytics", "Agile"],
        points: [
            "Developed SQL-based validation scripts and analytics reports to ensure data integrity across software releases, increasing coverage from 60% to 95% and reducing escaped defects by 40%.",
            "Collaborated with product and engineering teams in Agile sprints to analyze requirements, monitor 200+ defect trends, and apply frontend/API inspection tools—cutting bug resolution time by 30% and sustaining a 97% build success rate.",
            "Designed and executed both manual and automated test cases for key features, supporting rolling deployments and continuous integration initiatives."
        ]
    }
];

const skillsData = [
    // Programming Languages
    { id: 6, title: "Python", icon: "🐍", tags: ["Language"], gradient: "bg-blue-900", match: "Top 10", level: 95, years: 4, frequency: 95 },
    { id: 7, title: "SQL", icon: "💾", tags: ["Database"], gradient: "bg-orange-900", match: "Essential", level: 90, years: 4, frequency: 90 },
    { id: 50, title: "Java", icon: "☕", tags: ["Language"], gradient: "bg-red-900", match: "Advanced", level: 75, years: 3, frequency: 60 },
    { id: 51, title: "R", icon: "📊", tags: ["Language"], gradient: "bg-indigo-800", match: "Advanced", level: 80, years: 2, frequency: 70 },
    { id: 52, title: "C/C++", icon: "⚙️", tags: ["Language"], gradient: "bg-gray-700", match: "Intermediate", level: 65, years: 2, frequency: 40 },
    
    // Frameworks & Libraries
    { id: 53, title: "Pandas", icon: "🐼", tags: ["Library"], gradient: "bg-green-900", match: "Expert", level: 95, years: 3, frequency: 95 },
    { id: 54, title: "NumPy", icon: "🔢", tags: ["Library"], gradient: "bg-blue-800", match: "Expert", level: 92, years: 3, frequency: 90 },
    { id: 55, title: "Scikit-learn", icon: "🤖", tags: ["ML"], gradient: "bg-orange-800", match: "Expert", level: 90, years: 3, frequency: 85 },
    { id: 56, title: "TensorFlow", icon: "🧠", tags: ["ML"], gradient: "bg-amber-900", match: "Advanced", level: 80, years: 2, frequency: 70 },
    { id: 57, title: "Streamlit", icon: "💻", tags: ["Frontend"], gradient: "bg-red-800", match: "Advanced", level: 85, years: 1, frequency: 75 },
    { id: 58, title: "FastAPI", icon: "⚡", tags: ["Backend"], gradient: "bg-green-800", match: "Advanced", level: 85, years: 2, frequency: 80 },
    { id: 8, title: "Apache Spark", icon: "⚡", tags: ["Big Data"], gradient: "bg-yellow-700", match: "Trending", level: 85, years: 2, frequency: 75 },
    
    // Databases
    { id: 59, title: "PostgreSQL", icon: "🐘", tags: ["Database"], gradient: "bg-blue-700", match: "Expert", level: 90, years: 3, frequency: 85 },
    { id: 60, title: "Oracle DB", icon: "🗄️", tags: ["Database"], gradient: "bg-red-700", match: "Advanced", level: 75, years: 2, frequency: 60 },
    { id: 61, title: "SQLite", icon: "💾", tags: ["Database"], gradient: "bg-gray-800", match: "Advanced", level: 80, years: 2, frequency: 65 },
    { id: 62, title: "Snowflake", icon: "❄️", tags: ["Data Warehouse"], gradient: "bg-cyan-800", match: "Expert", level: 88, years: 1, frequency: 80 },
    
    // DevOps & Tools
    { id: 63, title: "Docker", icon: "🐳", tags: ["DevOps"], gradient: "bg-cyan-900", match: "Expert", level: 90, years: 3, frequency: 85 },
    { id: 64, title: "Kubernetes", icon: "☸️", tags: ["DevOps"], gradient: "bg-blue-600", match: "Advanced", level: 78, years: 1, frequency: 60 },
    { id: 65, title: "Jenkins", icon: "🔧", tags: ["CI/CD"], gradient: "bg-red-800", match: "Advanced", level: 82, years: 2, frequency: 80 },
    { id: 66, title: "GitHub Actions", icon: "🚀", tags: ["CI/CD"], gradient: "bg-gray-900", match: "Advanced", level: 85, years: 2, frequency: 75 },
    { id: 67, title: "Git/GitHub", icon: "🐙", tags: ["Version Control"], gradient: "bg-gray-700", match: "Expert", level: 95, years: 4, frequency: 100 },
    
    // Cloud Platforms
    { id: 11, title: "AWS/GCP/Azure", icon: "☁️", tags: ["Cloud"], gradient: "bg-slate-700", match: "Popular", level: 80, years: 2, frequency: 75 },
    
    // Testing & QA
    { id: 68, title: "Selenium", icon: "🧪", tags: ["Testing"], gradient: "bg-green-700", match: "Advanced", level: 82, years: 2, frequency: 75 },
    { id: 69, title: "Karate API", icon: "🥋", tags: ["Testing"], gradient: "bg-orange-700", match: "Intermediate", level: 70, years: 1, frequency: 65 },
    
    // Analytics & Visualization
    { id: 70, title: "Power BI", icon: "📈", tags: ["BI"], gradient: "bg-yellow-800", match: "Advanced", level: 85, years: 2, frequency: 80 },
    { id: 71, title: "Tableau", icon: "📊", tags: ["BI"], gradient: "bg-orange-900", match: "Advanced", level: 80, years: 1, frequency: 70 },
    { id: 72, title: "Matplotlib/Seaborn", icon: "📉", tags: ["Visualization"], gradient: "bg-purple-900", match: "Expert", level: 92, years: 3, frequency: 90 },
    
    // IDEs & Editors
    { id: 73, title: "VS Code", icon: "💻", tags: ["IDE"], gradient: "bg-blue-800", match: "Expert" },
    { id: 74, title: "PyCharm", icon: "🎯", tags: ["IDE"], gradient: "bg-green-900", match: "Advanced" },
    
    // Others
    { id: 9, title: "Kafka", icon: "📨", tags: ["Streaming"], gradient: "bg-purple-900", match: "Hot" },
    { id: 75, title: "A/B Testing", icon: "🧪", tags: ["Analytics"], gradient: "bg-indigo-900", match: "Advanced" },
    { id: 12, title: "React", icon: "⚛️", tags: ["Frontend"], gradient: "bg-indigo-900", match: "Intermediate" },
];

// --- RECOMMENDATIONS DATA ---
const recommendationsData = [
    {
        id: 200,
        reviewer: "Harshal Patil",
        role: "Data Engineer | Data Analyst",
        company: "Troy & Banks",
        year: "2025",
        image: "assets/images/recomm_Harshal.png",
        excerpt: "Exceptional work ethic, keen desire to learn, and genuine willingness to support peers with deep understanding of data science.",
        fullReview: "I have had the pleasure of working closely with Aishvarya Salvi as a classmate, project partner, and teammate in university competitions and academic projects at the University at Buffalo. Aishvarya stands out for her exceptional work ethic, keen desire to learn, and genuine willingness to support her peers. Throughout our collaborations, Aishvarya has consistently demonstrated a deep understanding of data science concepts and remarkable proficiency in SQL, Python, Tableau, and Power BI tools. Whether we were tackling a challenging group project or competing as a team, she always brought thoughtful insights, strong analytical skills, and a positive, can-do attitude. What truly sets Aishvarya apart is her dedication and reliability. She takes initiative, is always eager to contribute, and goes above and beyond to help her teammates succeed. Her commitment to quality and her ability to solve complex problems efficiently have made a significant impact on our collective results. Aishvarya is a supportive and approachable teammate who creates a collaborative and motivating environment.",
        tags: ["Work Ethic", "Data Science", "Collaboration"],
        match: "Featured",
        gradientStart: "#722F37",
        gradientEnd: "#141414",
        rating: 5,
        linkedinUrl: "https://linkedin.com/in/harshal-patil"
    },
    {
        id: 201,
        reviewer: "Anirudh Mhaske",
        role: "Cloud Engineer | AI/ML Specialist",
        company: "University at Buffalo",
        year: "2025",
        image: "assets/images/recomm_Anirudh.png",
        excerpt: "Explained complex ML concepts in such a clear and approachable way that made the entire pipeline easy to grasp.",
        fullReview: "I had the chance to learn from Aishvarya when she walked me through her Heart Attack Risk Prediction project. She explained complex ML concepts in such a clear and approachable way that it made the entire pipeline, from data prep to deployment, easy to grasp. Her strong technical skills and willingness to share knowledge truly inspired me, and I'm confident she'll bring the same clarity and dedication to any project she undertakes. She has a remarkable ability to mentor and lift up those around her.",
        tags: ["Knowledge Sharing", "ML Expertise", "Mentorship"],
        match: "Top Review",
        gradientStart: "#2d1b3d",
        gradientEnd: "#141414",
        rating: 5,
        linkedinUrl: "https://linkedin.com/in/anirudh-mhaske"
    },
    {
        id: 202,
        reviewer: "Sneha Parsekar",
        role: "Sr. QA Manager",
        company: "Mediaocean",
        year: "2024",
        image: "assets/images/recomm_Sneha.png",
        excerpt: "Highly organized, efficient, and brought positive energy with a can-do attitude to every task.",
        fullReview: "As a manager, I found Aishvarya to be highly organized and efficient. As a team member, Aishvarya always brought a positive energy and a can-do attitude. She was quick to lend a helping hand and support her colleagues whenever needed. Her reliability and proactive approach made her a valued member of our team. She consistently demonstrated professionalism and dedication in everything she undertook.",
        tags: ["Organization", "Team Leadership", "Reliability"],
        match: "Featured",
        gradientStart: "#1a2332",
        gradientEnd: "#141414",
        rating: 5,
        linkedinUrl: "https://linkedin.com/in/sneha-parsekar"
    },
    {
        id: 203,
        reviewer: "Vishal Sonar",
        role: "Senior Software Developer",
        company: "Mediaocean",
        year: "2024",
        image: "assets/images/recomm_Vishal.png",
        excerpt: "Strong technical skills, problem-solving mindset, unique blend of technical expertise with leadership qualities and mentoring abilities.",
        fullReview: "I had the pleasure of working with Aishvarya at Mediaocean, where we were part of the same team. From day one, she stood out for her strong technical skills, problem-solving mindset, and ability to quickly adapt to challenges. Aishvarya not only delivered high-quality work consistently but also brought great energy and collaboration to the team. She has a unique blend of technical expertise and leadership qualities of always willing to guide others, share knowledge, and take initiative to improve processes. She successfully led projects, supported the team through challenges, and even trained new interns, ensuring they felt comfortable and confident in their roles. Her teamwork, leadership, and mentoring abilities made a real difference in our team's success. What stood out to me was her eye for detail and her ability to think beyond just finding bugs. She understood the product deeply and always considered the end-user experience, making her feedback incredibly valuable for the team. Reliable, approachable, and proactive.",
        tags: ["Technical Leadership", "Mentorship", "Problem Solving"],
        match: "Top Review",
        gradientStart: "#3d2a1f",
        gradientEnd: "#141414",
        rating: 5,
        linkedinUrl: "https://linkedin.com/in/vishal-sonar"
    },
    {
        id: 204,
        reviewer: "Prasanna Wadekar",
        role: "Lead Engineer | Microservices Developer",
        company: "Mediaocean",
        year: "2024",
        image: "assets/images/recomm_Prasanna.png",
        excerpt: "Detail-oriented testing, automated most of product improving team efficiency, exceptional client communication, strong leadership.",
        fullReview: "I had the opportunity to work closely with Aishvarya at Mediaocean, where she played a key role in ensuring the quality and reliability of our products. As a developer, I truly appreciated how detail-oriented and thorough she was in her testing, which made my job so much easier. She didn't just stop at identifying issues—she always provided clear insights, reproducible cases, and even suggestions for improvement. Over time Aishvarya developed a strong interest in automation and went on to automate most of the product, covering both front-end and back-end processes. This not only saved the team a significant amount of time but also improved the consistency and efficiency of our testing cycles. She also represented our team exceptionally well, presenting the product to clients during releases and showcasing both her technical expertise and communication skills. Aishvarya was a great collaborator, bridging the gap between development and testing seamlessly. She understood the product deeply, kept the end-user experience in mind, and worked closely with us to make sure every release was smooth and successful. She took initiative in mentoring new interns and guiding the team whenever needed, showing strong leadership alongside her technical strengths. Beyond her professional contributions, Aishvarya was approachable, supportive, and a positive influence in the workplace.",
        tags: ["QA Excellence", "Automation", "Team Leadership"],
        match: "Featured",
        gradientStart: "#1a3d3d",
        gradientEnd: "#141414",
        rating: 5,
        linkedinUrl: "https://linkedin.com/in/prasanna-wadekar"
    },
    {
        id: 205,
        reviewer: "Arjun Gurung",
        role: "Software Developer",
        company: "Mediaocean",
        year: "2024",
        image: "assets/images/recomm_Arjun.png",
        excerpt: "Outstanding work ethic and exceptional attention to detail. Identifies complex edge cases that traditional testing might miss.",
        fullReview: "I highly recommend Aishvarya for her outstanding work ethic and exceptional attention to detail. Collaborating with her during development, her comprehensive and insightful QA testing has been invaluable to the team. Aishvarya consistently identifies complex edge cases and performance bottlenecks that traditional testing might miss, directly leading to more robust and reliable backend systems. Her meticulous approach to testing and deep understanding of system architecture made her an invaluable partner in development. Any team would be lucky to have her.",
        tags: ["Testing Excellence", "Attention to Detail", "Performance"],
        match: "Top Review",
        gradientStart: "#3d1f2d",
        gradientEnd: "#141414",
        rating: 5,
        linkedinUrl: "https://linkedin.com/in/arjun-gurung"
    }
];

// ======================================================
// RENDER FUNCTIONS (PROJECTS, EXPERIENCE, SKILLS, REVIEWS)
// ======================================================

// ====== MAIN ENTRY: Render All Categories into Rows ======
function renderRows() {
    const container = document.getElementById("rows-container");
    container.innerHTML = "";

    container.appendChild(renderProjectsRow());
    container.appendChild(renderExperienceRow());
    container.appendChild(renderSkillsHeatmap());
    container.appendChild(renderRecommendationsRow());
}



// ======================================================
// PROJECTS — ROW + TILE
// ======================================================

function renderProjectsRow() {
    const section = document.createElement("div");
    section.classList.add("animate-row");

    section.innerHTML = `
        <h2 class="text-white text-xl md:text-2xl font-bold mb-3 mt-10">Projects</h2>
        <div class="flex gap-4 overflow-x-auto hide-scrollbar pb-4">
            ${projectsData.map(project => renderProjectTile(project)).join("")}
        </div>
    `;

    return section;
}

function renderProjectTile(project) {
    return `
    <div class="relative tile-hover w-[350px] rounded-md overflow-hidden cursor-pointer group border border-white/10"
         role="button" tabindex="0"
         onclick="hideHoverCard(); openModal('project', ${project.id});"
         onmouseenter="showHoverCard(event, ${project.id}, 'project')" 
         onmouseleave="hideHoverCard()"
         onkeydown="if(event.key==='Enter' || event.key===' '){ event.preventDefault(); openModal('project', ${project.id}); }">

    <img src="${project.image}" class="w-full h-40 object-cover" alt="${project.title} preview" />

        <div class="absolute inset-0 tile-overlay opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
            <button class="bg-white text-black px-4 py-2 rounded font-bold text-sm shadow hover:bg-white/90"
                    onclick="openModal('project', ${project.id}); event.stopPropagation();">
                <i data-lucide="play" class="w-4 h-4"></i> Play
            </button>
        </div>

    <div class="p-3">
            <p class="text-xs text-green-400 font-bold">${project.match}</p>
            <p class="text-white font-semibold truncate">${project.title}</p>
            <p class="text-gray-400 text-xs">${project.year}</p>
        </div>
    </div>
    `;
}



// ======================================================
// EXPERIENCE — ROW + TILE
// ======================================================

function renderExperienceRow() {
    const section = document.createElement("div");
    section.classList.add("animate-row");

    section.innerHTML = `
        <h2 class="text-white text-xl md:text-2xl font-bold mb-3 mt-10">Experience</h2>
        <div class="flex gap-4 overflow-x-auto hide-scrollbar pb-4">
            ${experienceData.map(exp => renderExperienceTile(exp)).join("")}
        </div>
    `;

    return section;
}

function renderExperienceTile(exp) {
    return `
    <div class="relative tile-hover w-[320px] rounded-md overflow-hidden cursor-pointer group border border-white/10"
         role="button" tabindex="0"
         onclick="openModal('experience', ${exp.id})"
         onkeydown="if(event.key==='Enter' || event.key===' '){ event.preventDefault(); openModal('experience', ${exp.id}); }">

        <img src="${exp.image}" class="w-full h-40 object-cover" alt="${exp.title} image" />

        <div class="absolute inset-0 tile-overlay opacity-0 group-hover:opacity-100 
                    transition bg-gradient-to-t from-black/80 to-transparent">
        </div>

        <div class="p-3">
            <p class="text-xs text-gray-400">${exp.year}</p>
            <p class="text-white font-semibold truncate">${exp.title}</p>
            <p class="text-gray-400 text-xs truncate">${exp.desc}</p>
        </div>
    </div>
    `;
}



// ======================================================
// SKILLS HEATMAP (animated bars)
// ======================================================

function renderSkillsHeatmap() {
    const section = document.createElement("div");
    section.classList.add("animate-row");

    section.innerHTML = `
        <h2 class="text-white text-xl md:text-2xl font-bold mb-5 mt-10">Skills</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            ${skillsData.map(skill => renderSkillTile(skill)).join("")}
        </div>
    `;

    return section;
}

function renderSkillTile(skill) {
    return `
    <div class="skill-heatmap-tile" role="button" tabindex="0"
         onclick="openModal('skill', ${skill.id})"
         onkeydown="if(event.key==='Enter' || event.key===' '){ event.preventDefault(); openModal('skill', ${skill.id}); }">

        <div class="skill-heatmap-header">
            <div class="skill-heatmap-icon">${skill.icon}</div>
            <div class="skill-heatmap-title">${skill.title}</div>
        </div>

        <div class="skill-heatmap-bars">

            <!-- Proficiency -->
            <div class="skill-bar">
                <p class="skill-bar-label">Proficiency</p>
                <div class="skill-bar-container">
                    <div class="skill-bar-fill" style="--width: ${skill.level}%"></div>
                </div>
            </div>

            <!-- Years -->
            <div class="skill-bar">
                <p class="skill-bar-label">Years</p>
                <div class="skill-bar-container">
                    <div class="skill-bar-fill" style="--width: ${Math.min(skill.years * 20, 100)}%"></div>
                </div>
            </div>

            <!-- Frequency -->
            <div class="skill-bar">
                <p class="skill-bar-label">Usage</p>
                <div class="skill-bar-container">
                    <div class="skill-bar-fill" style="--width: ${skill.frequency}%"></div>
                </div>
            </div>
        </div>
    </div>
    `;
}



// ======================================================
// RECOMMENDATIONS — ROW + TILE
// ======================================================

function renderRecommendationsRow() {
    const section = document.createElement("div");
    section.classList.add("animate-row", "mt-10");

    section.innerHTML = `
        <h2 class="text-white text-xl md:text-2xl font-bold mb-5">Recommendations</h2>

        <div class="recommendations-scroll-wrapper">
            <div class="recommendations-scroll-container">
                <div class="recommendations-row">
                    ${recommendationsData.map(rec => renderRecommendationTile(rec)).join("")}
                </div>
            </div>
        </div>
    `;

    return section;
}

function renderRecommendationTile(rec) {
    return `
    <div class="recommendation-tile"
         style="--gradient-start:${rec.gradientStart}; --gradient-end:${rec.gradientEnd}"
         onmouseenter="showHoverCard(event, ${rec.id}, 'recommendation')"
         onmouseleave="hideHoverCard()"
         onclick="openRecommendationModal(${rec.id})">

        <div class="recommendation-header">
            <div class="recommendation-avatar" style="background-image:url('${rec.image}')"></div>
            <div class="recommendation-reviewer-info">
                <p class="recommendation-reviewer-name">${rec.reviewer}</p>
                <p class="recommendation-reviewer-role">${rec.role}</p>
                <p class="recommendation-company">${rec.company} • ${rec.year}</p>
            </div>
        </div>

        <p class="recommendation-excerpt line-clamp-4">${rec.excerpt}</p>

        <div class="recommendation-footer">
            <div class="recommendation-rating">
                ${"★".repeat(rec.rating).split("").map(star =>
                    `<span class="recommendation-rating-star">★</span>`
                ).join("")}
            </div>

            <span class="recommendation-match">${rec.match}</span>
        </div>

        <!-- Expand on hover -->
        <div class="expand-info p-4 text-gray-300 text-xs">
            <p class="text-sm font-semibold mb-2">Tags:</p>
            <p>${rec.tags.join(", ")}</p>
        </div>
    </div>
    `;
}

// ======================================================
//  MODALS → OPEN / CLOSE / BUILD CONTENT
// ======================================================

// Global modal references
const mainModal = document.getElementById("modal-content");
const modalBackdrop = document.getElementById("modal-backdrop");


// -------------------------------------------
// OPEN MODAL BY CATEGORY + ID
// -------------------------------------------
function openModal(type, id) {
    console.log('[openModal] called with', { type, id });
    let item = null;

    if (type === "project") item = projectsData.find(x => x.id === id);
    if (type === "experience") item = experienceData.find(x => x.id === id);
    if (type === "skill") item = skillsData.find(x => x.id === id);

    if (!item) {
        console.warn('[openModal] No item found for', { type, id });
        return;
    }

    // Create modal HTML
    mainModal.innerHTML = buildMainModalHTML(item);

    // Show modal
    modalBackdrop.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    console.log('[openModal] modal shown');

    // Refresh Lucide Icons
    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }
}

// Expose functions globally for inline handlers
window.openModal = openModal;
window.closeModal = closeModal;
window.hideHoverCard = hideHoverCard;


// -------------------------------------------
// CLOSE MODAL
// -------------------------------------------
function closeModal() {
    modalBackdrop.classList.add("hidden");
    document.body.style.overflow = "auto";
}

// Close modal when clicking on backdrop
modalBackdrop.addEventListener('click', function(e) {
    if (e.target === modalBackdrop) {
        closeModal();
    }
});


// ===========================================
//  BUILD HTML FOR PROJECT / EXPERIENCE / SKILL
// ===========================================

function buildMainModalHTML(item) {
    const tagsHTML = item.tags
        ? item.tags.map(t => `<span class="bg-gray-700 px-2 py-1 text-xs rounded">${t}</span>`).join("")
        : "";

    const pointsHTML = item.points
        ? item.points.map(p => `<li class="text-gray-300 leading-relaxed">${p}</li>`).join("")
        : "";

    const linksHTML = item.links
        ? item.links
              .map(
                  (l, index) => `
        <a href="${l.url}" 
           target="_blank"
           class="px-4 py-2 rounded font-semibold flex items-center gap-2
                  ${index === 0 ? "bg-white text-black" : "bg-gray-700 text-white"}">
            <i data-lucide="${index === 0 ? "play" : "file-text"}"></i>
            ${l.label}
        </a>`
              )
              .join("")
        : "";

    const background = item.image
        ? `background-image:url('${item.image}')`
        : item.gradient || "bg-gray-800";

    return `
    <!-- CLOSE BUTTON -->
    <button class="absolute top-4 right-4 p-2 rounded-full bg-[#222] hover:bg-[#333]"
            onclick="closeModal()">
        <i data-lucide="x" class="text-white w-6 h-6"></i>
    </button>

    <!-- HERO IMAGE -->
    <div class="h-[250px] w-full bg-cover bg-center relative" style="${background}">
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
        <div class="absolute bottom-4 left-6">
            <h2 class="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
                ${item.title}
            </h2>
        </div>
    </div>

    <!-- CONTENT -->
    <div class="p-6 md:p-10 text-gray-300 leading-relaxed space-y-6">

        <!-- MATCH + YEAR + CATEGORY -->
        <div class="flex flex-wrap gap-3 text-xs md:text-sm">
            ${item.match ? `<span class="bg-green-600 px-3 py-1 font-bold rounded text-white">${item.match}</span>` : ""}
            ${item.year ? `<span class="bg-blue-600 px-3 py-1 rounded text-white">${item.year}</span>` : ""}
            ${item.category ? `<span class="bg-purple-700 px-3 py-1 rounded text-white">${item.category}</span>` : ""}
        </div>

        <!-- DESCRIPTION -->
        ${item.desc ? `<p class="text-base md:text-lg">${item.desc}</p>` : ""}

        <!-- LINKS -->
        ${linksHTML ? `<div class="flex flex-wrap gap-3 pt-2">${linksHTML}</div>` : ""}

        <!-- TAGS -->
        ${tagsHTML ? `<div class="flex flex-wrap gap-2 pt-3">${tagsHTML}</div>` : ""}

        <!-- BULLET POINTS -->
        ${
            pointsHTML
                ? `
            <div>
                <h3 class="text-xl font-bold mb-3 text-white">Highlights</h3>
                <ul class="list-disc list-inside space-y-2">
                    ${pointsHTML}
                </ul>
            </div>
        `
                : ""
        }
    </div>
    `;
}



// ======================================================
// RECOMMENDATION FULL REVIEW MODAL
// ======================================================

let recommendationModal = null;

function openRecommendationModal(id) {
    const rec = recommendationsData.find(r => r.id === id);
    if (!rec) return;

    if (!recommendationModal) {
        recommendationModal = createRecommendationModal();
    }

    const modalContent = recommendationModal.querySelector(".recommendation-modal-content");
    modalContent.innerHTML = buildRecommendationModalHTML(rec);

    recommendationModal.classList.add("visible");
    document.body.style.overflow = "hidden";

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }
}


// -------------------------------------------
// BUILD HTML FOR A RECOMMENDATION FULL REVIEW
// -------------------------------------------

function buildRecommendationModalHTML(rec) {
    const stars = Array(rec.rating).fill("★").join("");

    return `
        <div class="recommendation-modal-header">
            <div class="recommendation-modal-avatar"
                 style="background-image:url('${rec.image}')"></div>

            <div class="recommendation-modal-info">
                <p class="recommendation-modal-name">${rec.reviewer}</p>
                <p class="recommendation-modal-role">${rec.role}</p>
                <p class="recommendation-modal-company">${rec.company}</p>
                <p class="recommendation-modal-year">Year: ${rec.year}</p>
                <p class="recommendation-modal-rating">${stars}</p>
            </div>
        </div>

        <p class="recommendation-modal-text">"${rec.fullReview}"</p>

        <div class="recommendation-modal-actions">
            <a href="${rec.linkedinUrl}" target="_blank"
               class="recommendation-linkedin-btn">
                <i data-lucide="linkedin"></i> View on LinkedIn
            </a>

            <button class="recommendation-close-btn" onclick="closeRecommendationModal()">
                Close
            </button>
        </div>
    `;
}


// -------------------------------------------
// CREATE MODAL ELEMENT FOR RECOMMENDATION
// -------------------------------------------

function createRecommendationModal() {
    const modal = document.createElement("div");
    modal.id = "recommendation-modal";
    modal.className = "recommendation-modal";

    modal.innerHTML = `
        <div class="recommendation-modal-content"></div>
    `;

    modal.addEventListener("click", e => {
        if (e.target === modal) closeRecommendationModal();
    });

    document.body.appendChild(modal);
    return modal;
}


// -------------------------------------------
// CLOSE RECOMMENDATION MODAL
// -------------------------------------------

function closeRecommendationModal() {
    if (recommendationModal) {
        recommendationModal.classList.remove("visible");
    }
    document.body.style.overflow = "auto";
}

// ======================================================
//  NETFLIX-STYLE FLOATING HOVER CARDS
// ======================================================

let hoverCardTimer = null;
let hoverCardEl = null;

// Create a single hover card DIV if it doesn’t exist
function ensureHoverCardExists() {
    if (!hoverCardEl) {
        hoverCardEl = document.createElement("div");
        hoverCardEl.id = "hover-card";
        hoverCardEl.className = "hover-card";
        hoverCardEl.style.display = "none";

        hoverCardEl.onmouseenter = () => {
            clearTimeout(hoverCardTimer);
        };
        hoverCardEl.onmouseleave = hideHoverCard;

        document.body.appendChild(hoverCardEl);
    }
}


// ======================================================
// SHOW FLOATING HOVER CARD (Projects / Experience / Skills)
// ======================================================
function showHoverCard(event, id, type) {
    ensureHoverCardExists();
    clearTimeout(hoverCardTimer);

    let item = null;

    if (type === "project") item = projectsData.find(x => x.id === id);
    if (type === "experience") item = experienceData.find(x => x.id === id);
    if (type === "skill") item = skillsData.find(x => x.id === id);

    if (!item) return;

    hoverCardEl.innerHTML = buildHoverCardHTML(item);

    // Position card based on tile position
    const tile = event.currentTarget;
    positionHoverCard(tile);

    hoverCardEl.style.display = "block";

    requestAnimationFrame(() => hoverCardEl.classList.add("visible"));

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }
}


// ======================================================
// SHOW HOVER CARD FOR RECOMMENDATIONS
// ======================================================
function showRecommendationHoverCard(event, id) {
    ensureHoverCardExists();
    clearTimeout(hoverCardTimer);

    const rec = recommendationsData.find(r => r.id === id);
    if (!rec) return;

    hoverCardEl.innerHTML = buildRecommendationHoverHTML(rec);

    const tile = event.currentTarget;
    positionHoverCard(tile);

    hoverCardEl.style.display = "block";

    requestAnimationFrame(() => hoverCardEl.classList.add("visible"));

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }
}


// ======================================================
// POSITION THE HOVER CARD NEAR THE TILE
// ======================================================
function positionHoverCard(tile) {
    const rect = tile.getBoundingClientRect();
    const cardWidth = 360;
    const margin = 16;

    let left = rect.left;
    let top = rect.top - 20;

    // Adjust horizontal overflow
    if (left + cardWidth + margin > window.innerWidth) {
        left = window.innerWidth - cardWidth - margin;
    }
    if (left < margin) left = margin;

    // Keep below navbar
    if (top < 80) top = rect.bottom + 10;

    hoverCardEl.style.left = `${left}px`;
    hoverCardEl.style.top = `${top}px`;
}


// ======================================================
// HIDE HOVER CARD WITH DELAY (Netflix-like fade-out)
// ======================================================
function hideHoverCard() {
    clearTimeout(hoverCardTimer);
    hoverCardTimer = setTimeout(() => {
        if (!hoverCardEl) return;

        hoverCardEl.classList.remove("visible");

        setTimeout(() => {
            if (hoverCardEl) hoverCardEl.style.display = "none";
        }, 180);
    }, 180);
}



// ======================================================
//  BUILD HOVER CARD HTML FOR PROJECT/EXPERIENCE/SKILL
// ======================================================
function buildHoverCardHTML(item) {
    const tags = item.tags ? item.tags.join(" • ") : "";

    return `
    <div class="hover-card-image"
         style="background-image:url('${item.image || ""}')"></div>

    <div class="hover-card-content">

        <div class="hover-card-title">${item.title}</div>

        <div class="hover-card-meta">
            ${item.match ? `<span class="match">${item.match}</span>` : ""}
            ${item.year ? `<span>${item.year}</span>` : ""}
            <span>HD</span>
        </div>

        <div class="hover-card-description">
            ${item.preview || item.desc || ""}
        </div>

        <div class="hover-card-actions">
            <button class="hover-card-btn play" onclick="openModalById(${item.id})">
                Play
            </button>

            <button class="hover-card-btn add">
                <i data-lucide="plus"></i>
            </button>

            <button class="hover-card-btn like">
                <i data-lucide="thumbs-up"></i>
            </button>
        </div>

        <div class="hover-card-tags">
            ${tags ? tags.split(" • ").map(t =>
                `<span class="hover-card-tag">${t}</span>`
            ).join("") : ""}
        </div>
    </div>
    `;
}



// ======================================================
//  BUILD RECOMMENDATION HOVER CARD
// ======================================================
function buildRecommendationHoverHTML(rec) {
    return `
        <div class="hover-card-image" style="background-image:url('${rec.image}')"></div>

        <div class="hover-card-content">
            <div class="hover-card-title">${rec.reviewer}</div>

            <div class="hover-card-meta">
                <span>${rec.role}</span>
                <span>•</span>
                <span>${rec.company}</span>
                <span class="match">${rec.match}</span>
            </div>

            <div class="hover-card-description">${rec.excerpt}</div>

            <div class="hover-card-actions">
                <button class="hover-card-btn play" onclick="openRecommendationModal(${rec.id})">
                    View
                </button>

                <a href="${rec.linkedinUrl}" target="_blank" class="hover-card-btn like">
                    <i data-lucide="linkedin"></i>
                </a>
            </div>

            <div class="hover-card-tags">
                ${rec.tags.map(tag => `<span class="hover-card-tag">${tag}</span>`).join("")}
            </div>
        </div>
    `;
}

// ======================================================
// 🔍 SEARCH SYSTEM (Projects, Experience, Education, Skills)
// ======================================================

const searchInput = document.getElementById("search-input");
const searchModal = document.getElementById("search-results");
const searchContent = document.getElementById("search-results-content");

// Education (static for now)
const educationData = [
    {
        id: 101,
        title: "University at Buffalo",
        preview: "Master of Science in Data Science",
        year: "2025",
        image: "assets/images/ub_logo.png",
        tags: ["Machine Learning", "Technical Skills", "Big Data"]
    },
    {
        id: 102,
        title: "Pune University",
        preview: "Bachelor of Engineering in Computer Science",
        year: "2021",
        image: "assets/images/pune_university_logo.png",
        tags: ["Software Engineering", "Technical Skills"]
    }
];


// -------------------------------------------
// HANDLE SEARCH INPUT
// -------------------------------------------
function handleSearch(query) {
    if (!query || query.trim() === "") {
        clearSearch();
        return;
    }

    const q = query.toLowerCase();

    const results = {
        projects: projectsData.filter(item =>
            item.title.toLowerCase().includes(q) ||
            (item.desc && item.desc.toLowerCase().includes(q)) ||
            item.tags.some(t => t.toLowerCase().includes(q))
        ),
        experience: experienceData.filter(item =>
            item.title.toLowerCase().includes(q) ||
            (item.desc && item.desc.toLowerCase().includes(q)) ||
            item.tags.some(t => t.toLowerCase().includes(q))
        ),
        education: educationData.filter(item =>
            item.title.toLowerCase().includes(q) ||
            item.preview.toLowerCase().includes(q) ||
            item.tags.some(t => t.toLowerCase().includes(q))
        ),
        skills: skillsData.filter(item =>
            item.title.toLowerCase().includes(q) ||
            item.tags.some(t => t.toLowerCase().includes(q))
        )
    };

    renderSearchResults(query, results);
}


// -------------------------------------------
// RENDER SEARCH MODAL
// -------------------------------------------
function renderSearchResults(query, results) {
    searchModal.classList.remove("hidden");

    let html = `
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">
            Results for "<span class="text-red-500">${query}</span>"
        </h2>
    `;

    if (results.projects.length) {
        html += buildSearchCategory("Projects", results.projects);
    }
    if (results.experience.length) {
        html += buildSearchCategory("Experience", results.experience);
    }
    if (results.education.length) {
        html += buildSearchCategory("Education", results.education);
    }
    if (results.skills.length) {
        html += buildSearchCategory("Skills", results.skills);
    }

    const noResults =
        !results.projects.length &&
        !results.experience.length &&
        !results.education.length &&
        !results.skills.length;

    if (noResults) {
        html += `
            <div class="text-center py-10">
                <p class="text-gray-400 text-lg">
                    No matching results found.
                </p>
            </div>
        `;
    }

    searchContent.innerHTML = html;

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }
}


// -------------------------------------------
// BUILD SEARCH CATEGORY
// -------------------------------------------
function buildSearchCategory(name, items) {
    return `
        <div class="search-result-category mb-10">
            <h3 class="text-red-500 font-bold text-lg uppercase mb-3">${name}</h3>
            <div class="flex flex-wrap gap-4">
                ${items.map(item => buildSearchTile(item)).join("")}
            </div>
        </div>
    `;
}


// -------------------------------------------
// SEARCH RESULT TILE
// -------------------------------------------
function buildSearchTile(item) {
    return `
        <div class="tile-hover w-[240px] rounded-md bg-[#181818] shadow-md overflow-hidden cursor-pointer"
             onclick="openModalById(${item.id}); clearSearch();">
             
            <div class="relative h-32 bg-cover bg-center"
                 style="background-image:url('${item.image || ""}')"></div>

            <div class="p-3">
                <p class="text-white font-bold text-sm truncate">${item.title}</p>
                <p class="text-gray-400 text-xs">${item.preview || item.desc || ""}</p>

                <div class="flex flex-wrap gap-1 mt-2">
                    ${(item.tags || [])
                        .slice(0, 3)
                        .map(t => `<span class="text-gray-300 text-[10px]">• ${t}</span>`)
                        .join("")}
                </div>
            </div>
        </div>
    `;
}


// -------------------------------------------
// CLEAR SEARCH
// -------------------------------------------
function clearSearch() {
    searchInput.value = "";
    searchModal.classList.add("hidden");
}

// ======================================================
// NAVBAR SCROLL BEHAVIOR
// ======================================================

window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 20) {
        navbar.classList.add("bg-[#141414]");
        navbar.classList.remove("bg-gradient-to-b");
    } else {
        navbar.classList.remove("bg-[#141414]");
        navbar.classList.add("bg-gradient-to-b");
    }
});


// ======================================================
// INITIAL PAGE RENDER
// ======================================================

document.addEventListener("DOMContentLoaded", () => {
    renderRows();              // Build all page rows
    enableTileAccessibility(); // Ensure keyboard activation works
    if (typeof lucide !== "undefined") {
        lucide.createIcons();  // Activate icons
    }
});

function openModalById(id) {
    const combined = [...projectsData, ...experienceData, ...skillsData, ...educationData];
    const item = combined.find(x => x.id === id);

    if (item) openModal("project", id); // fallback type
}

// ======================================================
// ACCESSIBILITY: Enable keyboard activation on tiles
// ======================================================
function enableTileAccessibility() {
    const tiles = document.querySelectorAll('.tile-hover, .skill-heatmap-tile');
    tiles.forEach(tile => {
        // Make focusable if not already
        if (!tile.hasAttribute('tabindex')) tile.setAttribute('tabindex', '0');
        if (!tile.hasAttribute('role')) tile.setAttribute('role', 'button');
    });

    // Event delegation to reliably capture keydown on any tile
    const container = document.getElementById('rows-container');
    if (container) {
        container.addEventListener('keydown', (event) => {
            const key = event.key;
            if (key !== 'Enter' && key !== ' ') return;

            const tile = event.target.closest('.tile-hover, .skill-heatmap-tile');
            if (!tile) return;

            event.preventDefault();
            tile.click();
        }, true);
    }
}
