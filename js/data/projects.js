// GitHub username to fetch repos from
const GITHUB_USERNAME = 'aishwaryasalvi777';

/**
 * Fetch public repositories from GitHub
 */
async function fetchGitHubRepos() {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
    if (!response.ok) throw new Error('GitHub API failed');
    const repos = await response.json();
    return repos.filter(repo => !repo.fork && !repo.private);
  } catch (error) {
    console.error('Failed to fetch GitHub repos:', error);
    return [];
  }
}

/**
 * Transform GitHub repo to project format
 */
function transformRepo(repo, index) {
  // Extract tags from language and topics
  const tags = [];
  if (repo.language) tags.push(repo.language);
  if (repo.topics && repo.topics.length > 0) {
    tags.push(...repo.topics.slice(0, 2));
  }
  
  // Determine category
  let category = 'Software';
  const desc = (repo.description || '').toLowerCase();
  const topics = (repo.topics || []).map(t => t.toLowerCase());
  
  if (topics.includes('machine-learning') || desc.includes('ml')) category = 'Machine Learning';
  else if (topics.includes('data-engineering') || desc.includes('pipeline')) category = 'Data Engineering';
  else if (topics.includes('mlops')) category = 'MLOps';
  else if (topics.includes('frontend') || repo.language === 'JavaScript') category = 'Frontend';
  else if (topics.includes('backend') || topics.includes('api')) category = 'Backend';
  
  // Build preview
  const stars = repo.stargazers_count > 0 ? `⭐ ${repo.stargazers_count}` : '';
  const forks = repo.forks_count > 0 ? `🔀 ${repo.forks_count}` : '';
  const preview = [stars, forks].filter(Boolean).join(' • ') || 'GitHub Repository';
  
  // Build points
  const points = [];
  if (repo.description) points.push(repo.description);
  if (repo.language) points.push(`Built with ${repo.language}`);
  if (repo.stargazers_count > 0) points.push(`${repo.stargazers_count} stars`);
  
  // Build links
  const links = [{ label: 'View Code', url: repo.html_url }];
  if (repo.homepage) links.push({ label: 'Live Demo', url: repo.homepage });
  
  // Check if recent (within 6 months)
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  const badge = new Date(repo.updated_at) > sixMonthsAgo ? 'NEW' : undefined;
  
  return {
    id: index + 1,
    title: repo.name.replace(/_/g, ' ').replace(/-/g, ' '),
    desc: repo.description || 'GitHub repository',
    match: `${Math.min(95, 70 + Math.floor((repo.stargazers_count * 10 + repo.forks_count * 5) / 10))}% Match`,
    year: new Date(repo.updated_at).getFullYear().toString(),
    category,
    badge,
    preview,
    gradient: '',
    image: '', // No image for now
    tags: tags.slice(0, 3),
    points: points.slice(0, 3),
    links
  };
}

/**
 * Load projects from GitHub
 */
export async function loadProjectsFromGitHub() {
  const repos = await fetchGitHubRepos();
  return repos
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .slice(0, 20)
    .map(transformRepo);
}

// Static fallback projects (kept for reference)
export const projectsData = [
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
