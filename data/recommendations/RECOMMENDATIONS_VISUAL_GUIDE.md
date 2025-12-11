# Recommendations Section - Visual Reference & Architecture

## 1. Component Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                   RECOMMENDATIONS SECTION                       │
├─────────────────────────────────────────────────────────────────┤
│  Section Title: "Recommendations for Aishvarya"                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  │  TILE 1          │  │  TILE 2          │  │  TILE 3          │
│  ├──────────────────┤  ├──────────────────┤  ├──────────────────┤
│  │ [Avatar]  Name   │  │ [Avatar]  Name   │  │ [Avatar]  Name   │
│  │        Role      │  │        Role      │  │        Role      │
│  │      Company     │  │      Company     │  │      Company     │
│  │                  │  │                  │  │                  │
│  │  "Excerpt of     │  │  "Excerpt of     │  │  "Excerpt of     │
│  │   recommendation │  │   recommendation │  │   recommendation │
│  │   text..."       │  │   text..."       │  │   text..."       │
│  │                  │  │                  │  │                  │
│  │ ⭐⭐⭐⭐⭐  Featured │  │ ⭐⭐⭐⭐⭐  Top Rev... │  │ ⭐⭐⭐⭐⭐  Featured │
│  │                  │  │                  │  │                  │
│  │ [CLICK FOR MORE] │  │ [CLICK FOR MORE] │  │ [CLICK FOR MORE] │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
                              ↓ (CLICK TILE)
┌─────────────────────────────────────────────────────────────────┐
│                    FULL REVIEW MODAL                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  [Avatar]  Reviewer Name                                   │ │
│  │            Job Title                                       │ │
│  │            Company Name                                    │ │
│  │            Collaborated: 2024                              │ │
│  │            ⭐⭐⭐⭐⭐                                        │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                   │
│  "Full recommendation text displayed here. This can be multiple  │
│   paragraphs explaining the person's strengths, achievements,   │
│   and impact. Recruiters read this carefully to assess fit."     │
│                                                                   │
│  ┌─────────────────────┐          ┌──────────┐                  │
│  │ 🔗 View on LinkedIn │          │  Close   │                  │
│  └─────────────────────┘          └──────────┘                  │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. Tile Anatomy

```
┌─────────────────────────────────────────────┐
│  Gradient Overlay (6% opacity)              │
│  ┌───────────────────────────────────────┐  │
│  │                                       │  │
│  │  ┌─────┐  Sarah Johnson              │  │
│  │  │ 👤  │  Senior Data Engineer       │  │
│  │  └─────┘  Google Cloud               │  │
│  │                                       │  │
│  │  "Aishvarya delivered exceptional   │  │
│  │   ML solutions that increased        │  │
│  │   accuracy by 42%."                  │  │
│  │                                       │  │
│  │  ⭐⭐⭐⭐⭐  Featured                  │  │
│  │                                       │  │
│  └───────────────────────────────────────┘  │
│                                              │
│  HOVER EFFECT:                               │
│  • Scale up 2%                               │
│  • Lift 4px (-translateY)                    │
│  • Add shadow (0 8px 24px)                   │
│  • Border color shifts                       │
│  • 300ms smooth easing                       │
│                                              │
└─────────────────────────────────────────────┘

DIMENSIONS:
• Desktop (lg): w-[300px] (3 per row)
• Tablet (md): w-[350px] (2 per row)
• Mobile: full width (1 per row)
• Min Height: 300px
```

---

## 3. Modal Anatomy

```
┌──────────────────────────────────────────────────────────┐
│                  RECOMMENDATION MODAL                    │
├──────────────────────────────────────────────────────────┤
│                                                            │
│  HEADER SECTION:                                         │
│  ┌────────────────────────────────────────────────────┐  │
│  │ ┌─────┐  Sarah Johnson                             │  │
│  │ │ 👤  │  Senior Data Engineer                       │  │
│  │ │ 80px│  Google Cloud                              │  │
│  │ └─────┘  Collaborated: 2024                        │  │
│  │          ⭐⭐⭐⭐⭐                                   │  │
│  └────────────────────────────────────────────────────┘  │
│  Border-bottom: 1px rgba(255,255,255,0.1)              │
│                                                            │
│  REVIEW TEXT SECTION:                                    │
│  ┌────────────────────────────────────────────────────┐  │
│  │ "Full recommendation text goes here. This section  │  │
│  │  can contain multiple sentences and paragraphs.    │  │
│  │  Line height is generous (1.8) for readability.   │  │
│  │  Color is #e0e0e0 for comfortable reading on       │  │
│  │  dark background."                                  │  │
│  └────────────────────────────────────────────────────┘  │
│  Margin-bottom: 24px                                    │
│                                                            │
│  ACTION BUTTONS SECTION:                                 │
│  ┌───────────────────────────────┐  ┌────────────┐      │
│  │ 🔗 View on LinkedIn (Primary) │  │ Close      │      │
│  │    (Blue, hover darkens)       │  │ (Gray)     │      │
│  └───────────────────────────────┘  └────────────┘      │
│                                                            │
└──────────────────────────────────────────────────────────┘

ANIMATION:
• Entrance: slideUp (0ms → 40px translateY, 0.3s)
• Background: Blur 2px (backdrop-filter)
• Click outside: Close (closes modal)
```

---

## 4. Responsive Design

```
MOBILE (< 768px):
┌─────────────────────────────┐
│ TILE 1                      │
│ Full Width                  │
└─────────────────────────────┘
┌─────────────────────────────┐
│ TILE 2                      │
│ Full Width                  │
└─────────────────────────────┘
┌─────────────────────────────┐
│ TILE 3                      │
│ Full Width                  │
└─────────────────────────────┘

TABLET (768px - 1024px):
┌──────────────────────┐ ┌──────────────────────┐
│ TILE 1               │ │ TILE 2               │
│ 2 per row            │ │ 2 per row            │
└──────────────────────┘ └──────────────────────┘
┌──────────────────────┐
│ TILE 3               │
│ 2 per row            │
└──────────────────────┘

DESKTOP (> 1024px):
┌────────────────┐ ┌────────────────┐ ┌────────────────┐
│ TILE 1         │ │ TILE 2         │ │ TILE 3         │
│ 3 per row      │ │ 3 per row      │ │ 3 per row      │
└────────────────┘ └────────────────┘ └────────────────┘

Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4
```

---

## 5. Color Scheme

```
TILE BACKGROUNDS:
• Default: #1f1f1f (dark gray)
• Hover: #262626 (lighter gray)
• Gradient Overlay: var(--gradient-bg) @ 6% opacity

BORDERS:
• Default: rgba(255,255,255,0.1) (subtle white)
• Hover: rgba(255,255,255,0.2) (more visible)
• Modal Header Border: rgba(255,255,255,0.1)

TEXT COLORS:
• Reviewer Name: #ffffff (white)
• Role/Company: #b3b3b3 (light gray)
• Excerpt: #e0e0e0 (off-white)
• Match Badge: #ffd700 (gold)

BUTTONS:
• LinkedIn: #0a66c2 (LinkedIn blue)
• LinkedIn Hover: #095399 (darker blue)
• Close: #b3b3b3 (gray text)
• Close Hover: #ffffff (white text)

STAR RATING:
• Color: #ffd700 (gold/yellow)
```

---

## 6. Animation Timings

```
TILE HOVER:
• Duration: 0.3s
• Easing: ease (cubic-bezier)
• Transform: scale(1.02) translateY(-4px)
• Shadow: 0 8px 24px rgba(0,0,0,0.4)

MODAL ENTRANCE:
• Duration: 0.3s
• Easing: cubic-bezier(0.16, 1, 0.3, 1)
• Transform: translateY(40px → 0px)
• Opacity: 0 → 1

FADE OUT:
• Opposite of entrance
• 0.3s smooth transition

BACKDROP:
• Blur: 2px (backdrop-filter)
• Opacity: 0 → 1
```

---

## 7. Data Structure Example

```json
{
  "id": 200,
  "reviewer": "Sarah Johnson",
  "role": "Senior Data Engineer",
  "company": "Google Cloud",
  "year": "2024",
  "image": "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah-johnson",
  "excerpt": "Aishvarya delivered exceptional ML solutions...",
  "fullReview": "Aishvarya is an exceptional data scientist...",
  "tags": ["Machine Learning", "Leadership", "Impact"],
  "match": "Featured",
  "gradient": "bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500",
  "rating": 5,
  "linkedinUrl": "https://linkedin.com/in/sarah-johnson"
}
```

---

## 8. JavaScript Function Flow

```
USER CLICKS TILE
         ↓
openRecommendationModal(id)
         ↓
Find recommendation in recommendationsData
         ↓
Create/Get modal element
         ↓
Build HTML (header + avatar + info + stars)
         ↓
Build modal text (fullReview)
         ↓
Build action buttons (LinkedIn + Close)
         ↓
Add to DOM
         ↓
Add 'visible' class (opacity: 1)
         ↓
Initialize Lucide icons
         ↓
Lock body scroll (overflow: hidden)
         ↓
MODAL VISIBLE ✓

USER CLICKS CLOSE or OUTSIDE MODAL
         ↓
closeRecommendationModal()
         ↓
Remove 'visible' class (opacity: 0)
         ↓
Unlock body scroll (overflow: auto)
         ↓
MODAL HIDDEN ✓
```

---

## 9. CSS Classes Hierarchy

```
.recommendation-tile (container)
├── .recommendation-header
│   ├── .recommendation-avatar
│   └── .recommendation-reviewer-info
│       ├── .recommendation-reviewer-name
│       ├── .recommendation-reviewer-role
│       └── .recommendation-company
├── .recommendation-excerpt
└── .recommendation-footer
    ├── .recommendation-rating
    │   └── .recommendation-rating-star (×5)
    └── .recommendation-match

.recommendation-modal (fullscreen overlay)
└── .recommendation-modal-content (centered box)
    ├── .recommendation-modal-header
    │   ├── .recommendation-modal-avatar
    │   └── .recommendation-modal-info
    │       ├── .recommendation-modal-name
    │       ├── .recommendation-modal-role
    │       ├── .recommendation-modal-company
    │       ├── .recommendation-modal-year
    │       └── .recommendation-modal-rating
    ├── .recommendation-modal-text
    └── .recommendation-modal-actions
        ├── .recommendation-linkedin-btn
        └── .recommendation-close-btn
```

---

## 10. Interaction States

```
TILE STATES:
┌──────────────────────────────────────────┐
│ DEFAULT                                  │
│ • Background: #1f1f1f                    │
│ • Border: rgba(255,255,255,0.1)         │
│ • Shadow: None                           │
│ • Cursor: pointer                        │
└──────────────────────────────────────────┘
         ↓ (Mouse enters)
┌──────────────────────────────────────────┐
│ HOVER                                    │
│ • Background: #262626                    │
│ • Border: rgba(255,255,255,0.2)         │
│ • Shadow: 0 8px 24px rgba(0,0,0,0.4)   │
│ • Transform: translateY(-4px) scale(1.02)│
│ • Cursor: pointer                        │
└──────────────────────────────────────────┘
         ↓ (Click)
┌──────────────────────────────────────────┐
│ ACTIVE (MODAL OPENS)                    │
│ • Modal appears with slideUp animation   │
│ • Body scroll disabled                   │
│ • Backdrop blur activated                │
│ • Focus on modal                         │
└──────────────────────────────────────────┘

BUTTON STATES:
LinkedIn Button:
  Default: #0a66c2 → Hover: #095399 (darker)
  
Close Button:
  Default: transparent → Hover: rgba(255,255,255,0.05)
```

---

## 11. Z-Index Layer

```
Background: 0
Content: 1
Navbar: 50
Modal Backdrop: 10001
Modal Content: 10001
Hover Card (other sections): 10000
```

---

## 12. Performance Considerations

```
✓ CSS Classes (not inline styles for animations)
✓ Transform & Opacity (GPU accelerated)
✓ Lazy rendering (modals created on demand)
✓ Event delegation (click outside modal)
✓ No heavy animations on load
✓ Lucide icons re-initialized only when needed
✓ Grid layout (efficient responsive design)
✓ Background images via CSS (cached)
```

---

## 13. Accessibility

```
✓ Semantic HTML (buttons, not divs)
✓ Keyboard accessible (close on Escape - can add)
✓ Color contrast (white on dark backgrounds)
✓ Focus states (visible on keyboard nav)
✓ Descriptive button labels
✓ Star ratings with visual indicators
✓ Backdrop blur for focus
✓ Alt text for images (via CSS)
```

---

## 14. Browser Support

```
✓ Chrome/Edge (latest)
✓ Firefox (latest)
✓ Safari (latest)
✓ Mobile browsers

CSS Features Used:
✓ CSS Grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
✓ CSS Flexbox (display: flex)
✓ CSS Transforms (translateY, scale)
✓ CSS Transitions (transition: all 0.3s ease)
✓ CSS Gradients (bg-gradient-to-br)
✓ CSS Backdrop (backdrop-filter: blur)
✓ CSS Variables (--gradient-bg)
✓ CSS Animations (@keyframes slideUp)

All Tailwind CSS classes are standard (no cutting-edge features)
```

---

## 15. Quick Customization Checklist

- [ ] Update section title in renderRecommendations() call
- [ ] Add your actual reviewer data
- [ ] Update gradient colors per person
- [ ] Ensure unique IDs (200, 201, 202, etc.)
- [ ] Test modal opens/closes
- [ ] Test LinkedIn buttons link correctly
- [ ] Test responsive layout on mobile
- [ ] Verify star ratings display (⭐)
- [ ] Check avatar images load
- [ ] Test hover animations
