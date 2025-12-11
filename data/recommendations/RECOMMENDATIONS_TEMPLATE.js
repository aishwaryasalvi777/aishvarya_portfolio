// RECOMMENDATIONS JSON TEMPLATE
// Copy and paste your LinkedIn recommendations here
// Instructions: Replace all "REPLACE_WITH_..." values with your actual data

const recommendationsData = [
    {
        id: 200,
        reviewer: "REPLACE_WITH_REVIEWER_NAME",
        role: "REPLACE_WITH_JOB_TITLE",
        company: "REPLACE_WITH_COMPANY_NAME",
        year: "2024",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=recommendation1",
        excerpt: "REPLACE_WITH_1_2_SENTENCE_PREVIEW",
        fullReview: "REPLACE_WITH_FULL_RECOMMENDATION_TEXT",
        tags: ["TAG_1", "TAG_2", "TAG_3"],
        match: "Featured",
        gradient: "bg-gradient-to-br from-purple-600 via-pink-500 to-red-500",
        rating: 5,
        linkedinUrl: "https://linkedin.com/in/REPLACE_WITH_LINKEDIN_PROFILE"
    },
    {
        id: 201,
        reviewer: "REPLACE_WITH_REVIEWER_NAME",
        role: "REPLACE_WITH_JOB_TITLE",
        company: "REPLACE_WITH_COMPANY_NAME",
        year: "2024",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=recommendation2",
        excerpt: "REPLACE_WITH_1_2_SENTENCE_PREVIEW",
        fullReview: "REPLACE_WITH_FULL_RECOMMENDATION_TEXT",
        tags: ["TAG_1", "TAG_2", "TAG_3"],
        match: "Top Review",
        gradient: "bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500",
        rating: 5,
        linkedinUrl: "https://linkedin.com/in/REPLACE_WITH_LINKEDIN_PROFILE"
    },
    {
        id: 202,
        reviewer: "REPLACE_WITH_REVIEWER_NAME",
        role: "REPLACE_WITH_JOB_TITLE",
        company: "REPLACE_WITH_COMPANY_NAME",
        year: "2023",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=recommendation3",
        excerpt: "REPLACE_WITH_1_2_SENTENCE_PREVIEW",
        fullReview: "REPLACE_WITH_FULL_RECOMMENDATION_TEXT",
        tags: ["TAG_1", "TAG_2", "TAG_3"],
        match: "Featured",
        gradient: "bg-gradient-to-br from-green-600 via-emerald-500 to-teal-500",
        rating: 5,
        linkedinUrl: "https://linkedin.com/in/REPLACE_WITH_LINKEDIN_PROFILE"
    }
    // Add more recommendations by copying the above structure and incrementing the ID
];


/* ===== OPTIONAL: MORE GRADIENT COLOR OPTIONS ===== */

/*
// Tech/Engineering
"bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500"

// Leadership/Management
"bg-gradient-to-br from-purple-600 via-pink-500 to-red-500"

// Analytics/Data
"bg-gradient-to-br from-green-600 via-emerald-500 to-teal-500"

// Innovation/Startup
"bg-gradient-to-br from-orange-600 via-yellow-500 to-amber-500"

// Research/Academic
"bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500"

// Infrastructure/DevOps
"bg-gradient-to-br from-gray-600 via-slate-500 to-zinc-500"

// Machine Learning
"bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500"

// Product Management
"bg-gradient-to-br from-rose-600 via-fuchsia-500 to-purple-500"

// Security/Privacy
"bg-gradient-to-br from-slate-600 via-stone-500 to-gray-500"

// Cloud/DevOps
"bg-gradient-to-br from-sky-600 via-blue-500 to-cyan-500"
*/


/* ===== FIELD REFERENCE ===== */

/*
id: Unique identifier (200, 201, 202, etc.) - Must be unique!
reviewer: Person's full name
role: Their current job title (e.g., "Senior Data Engineer")
company: Company they work/worked for
year: Year you worked together (e.g., "2024")
image: Avatar URL - Use DiceBear API (change seed value for different avatars)
excerpt: 1-2 sentence preview (shows on tile)
fullReview: Complete recommendation text (shows in modal)
tags: 2-3 keywords (skills, qualities, or domains)
match: Badge label ("Featured", "Top Review", "Verified", "Rising Star")
gradient: Tailwind CSS gradient (bg-gradient-to-br from-X via-Y to-Z)
rating: Star rating 1-5 (displays as ⭐)
linkedinUrl: Direct link to reviewer's LinkedIn profile
*/


/* ===== HOW TO USE ===== */

/*
1. Replace "REPLACE_WITH_..." with your actual data
2. For avatars: Change seed value (recommendation1, recommendation2, etc.)
3. For tags: Use 2-3 relevant skills or qualities
4. For gradient: Pick from options above or create your own
5. For linkedinUrl: Get from reviewer's LinkedIn profile URL
6. Save file and refresh portfolio
7. Test by clicking on a recommendation tile - should open modal
*/


/* ===== EXAMPLE (Ready to Use) ===== */

/*
{
    id: 200,
    reviewer: "Sarah Johnson",
    role: "Director of Data Science",
    company: "Google Cloud",
    year: "2024",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah-johnson-123",
    excerpt: "Aishvarya delivered exceptional machine learning solutions that improved model accuracy by 42%.",
    fullReview: "Aishvarya is an exceptional data scientist who consistently delivers high-impact ML solutions. Their work on our recommendation system improved accuracy by 42% and directly increased user engagement by 28%. They demonstrated outstanding technical depth, communication skills, and leadership—mentoring junior team members and presenting findings to C-level executives with clarity and confidence.",
    tags: ["Machine Learning", "Technical Leadership", "Impact"],
    match: "Featured",
    gradient: "bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500",
    rating: 5,
    linkedinUrl: "https://linkedin.com/in/sarah-johnson-cloud"
}
*/
