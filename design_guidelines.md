# YALW Design Guidelines

## Design Approach

**Selected Approach:** Reference-Based with professional networking and thought leadership inspiration

**Primary References:**
- LinkedIn (professional community building, credibility)
- Stripe (modern minimalism, trust-building)
- TED (thought leadership, inspiring content presentation)
- African design influences (vibrant accents, geometric patterns)

**Key Design Principles:**
1. **Professional Excellence:** Establish credibility through clean, sophisticated design
2. **Cultural Pride:** Subtle African geometric patterns and vibrant accent touches
3. **Global Ambition:** International-quality standards with bilingual excellence
4. **Action-Oriented:** Clear pathways to membership, events, and engagement

## Core Design Elements

### Typography

**Font Families:**
- Headlines: Inter (Bold, 700-800 weight) - modern, professional, excellent multilingual support
- Body Text: Inter (Regular 400, Medium 500) - optimal readability
- Accents: Inter (SemiBold 600) for CTAs and emphasis

**Type Scale:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl
- Section Headlines: text-3xl md:text-4xl lg:text-5xl
- Subsection Titles: text-2xl md:text-3xl
- Body Large: text-lg md:text-xl
- Body Standard: text-base
- Captions: text-sm

### Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Component padding: p-6, p-8
- Section spacing: py-16, py-20, py-24, py-32
- Grid gaps: gap-6, gap-8, gap-12
- Margin utilities: m-4, m-6, m-8

**Container Strategy:**
- Full-width sections: w-full with inner max-w-7xl mx-auto px-6
- Content sections: max-w-6xl mx-auto
- Text-focused content: max-w-4xl mx-auto
- Forms: max-w-2xl mx-auto

**Grid Patterns:**
- Mission cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Featured programs: grid-cols-1 lg:grid-cols-2
- Event listings: grid-cols-1 md:grid-cols-2
- Team/success stories: grid-cols-1 md:grid-cols-2 lg:grid-cols-4

## Component Library

### Navigation
- Sticky header with language toggle (FR/EN)
- Logo left, navigation center/right
- Mobile: hamburger menu with smooth slide-in drawer
- CTA button: "Rejoindre / Join" prominently displayed

### Hero Section
- Full-width impactful hero with large background image
- Centered content with max-w-4xl
- Compelling headline + subheadline + dual CTAs
- Height: min-h-screen with content vertically centered
- Gradient overlay on hero image for text readability
- Buttons with backdrop-blur-md bg-white/10 treatment

### Mission Cards (6 Cards - Former, Connecter, Innover, Réfléchir, Agir, Inspirer)
- Icon at top (use Heroicons - academic cap, users, light bulb, chat bubbles, rocket launch, sparkles)
- Bold title (text-xl)
- Descriptive paragraph (text-base)
- Rounded corners (rounded-xl)
- Hover: subtle lift effect (transition-transform hover:scale-105)
- Background: subtle card treatment with borders

### Program Showcase
- Alternating left-right layout for major programs
- Image + content pairings
- Each program: headline, description, key benefits list
- Staggered visual rhythm

### Events Section
- Calendar-style card grid
- Event card: date badge, title, location, CTA
- Filter by upcoming/past
- Registration quick-link on each card

### Registration Form
- Multi-step if needed, but keep visible on single page
- Input groups: Personal info, Education, Professional status, Motivation
- Fields: Name, Email, University/School, LinkedIn profile, Areas of interest (checkboxes), Short motivation statement
- Submit button: prominent, full-width on mobile
- Success state with confirmation message

### Contact Section
- Two-column layout: Form + Info block
- Info block includes: Email, office hours, social media links, location (Paris HQ)
- Contact form: Name, Email, Subject, Message
- Map integration placeholder or office image

### Footer
- Multi-column layout: About YALW, Quick Links, Programs, Social Media
- Newsletter signup: inline form with email input
- Copyright and legal links
- Social icons: LinkedIn, Twitter, Instagram, Facebook

### Success Stories / Testimonials
- Profile card grid with photos
- Member quote, name, title, achievement highlight
- Rotating featured member spotlight

## Images

**Required Images with Placement:**

1. **Hero Section:** Large, inspiring image of young African professionals in modern setting - networking event, conference, or collaborative workspace. High-quality, diverse group engaged in meaningful discussion. Image should convey ambition, professionalism, global mindset.

2. **About/Mission Section:** Supporting image showing leadership training, workshop setting, or mentor-mentee interaction. Professional photography style.

3. **Programs Showcase (3-4 images):** 
   - Conference/networking event
   - Workshop/training session
   - Entrepreneurship pitch event
   - Community gathering

4. **Success Stories:** Individual member headshots (4-6 professional portraits)

5. **Events Section:** Event photography from past YALW gatherings

6. **Contact Section:** Office space or team photo showing YALW headquarters

**Image Treatment:**
- All images: rounded-lg or rounded-xl corners
- Aspect ratios: Hero (16:9 or 21:9), Cards (4:3), Portraits (1:1 or 3:4)
- Overlay gradients where text overlays images
- Consistent professional photography style throughout

## Page Structure (Landing Page)

1. **Navigation** - Sticky header with language toggle
2. **Hero** - Full-screen impact with dual CTAs (80-100vh)
3. **Vision Statement** - Centered text block (py-20)
4. **6 Missions Grid** - Icon cards in 3-column grid (py-24)
5. **Programs Showcase** - Alternating image-text sections (py-32)
6. **Impact Statistics** - 3-4 column stats display (py-20)
7. **Events Highlight** - Upcoming events grid (py-24)
8. **Success Stories** - Member testimonials carousel (py-32)
9. **Membership CTA** - Compelling registration prompt (py-20)
10. **Registration Form** - Embedded form with validation (py-24)
11. **Contact Section** - Form + info two-column (py-20)
12. **Footer** - Comprehensive links and newsletter (py-16)

## Accessibility & Responsiveness

- Mobile-first approach
- Touch-friendly tap targets (min 44x44px)
- Form labels and ARIA attributes
- Keyboard navigation support
- High contrast text ratios
- Bilingual content properly marked with lang attributes

## Animation Guidelines

**Minimal, purposeful animations only:**
- Page load: gentle fade-in for hero content
- Scroll: subtle parallax on hero image
- Cards: hover lift effect (transform)
- Navigation: smooth toggle transitions
- NO distracting scroll animations or excessive movement