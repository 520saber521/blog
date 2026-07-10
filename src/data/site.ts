export const videoSource = "/videos/hero.mp4";

export const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Now", href: "#now", id: "now" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Writing", href: "#writing", id: "writing" },
  { label: "Timeline", href: "#timeline", id: "timeline" },
  { label: "Tools", href: "#toolbox", id: "toolbox" },
  { label: "Links", href: "#links", id: "links" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const focusAreas = [
  "Frontend Engineering",
  "AI Products",
  "Design Systems",
  "Long-form Notes",
];

export const nowItems = [
  {
    eyebrow: "01 / Building",
    title: "A quieter personal publishing system",
    description:
      "Turning this site into a calm home for essays, project notes, and small experiments that deserve a little more attention.",
  },
  {
    eyebrow: "02 / Studying",
    title: "AI as a thinking partner, not a shortcut",
    description:
      "Exploring workflows where models help with research, code, and design while still leaving room for taste and judgment.",
  },
  {
    eyebrow: "03 / Collecting",
    title: "Interfaces that feel cinematic but usable",
    description:
      "Saving references about motion, typography, glass surfaces, and long-form reading experiences on the web.",
  },
];

export const projects = [
  {
    title: "Saber Blog",
    type: "Personal Publishing System",
    description:
      "A cinematic single-page home for essays, project logs, and slow technical thinking.",
    meta: "React / Vite / Tailwind",
    status: "Live draft",
  },
  {
    title: "AI Workflow Lab",
    type: "Experiment Collection",
    description:
      "Small prototypes exploring how AI can help with coding, research, writing, and interface design.",
    meta: "LLM / Automation / UX",
    status: "Exploring",
  },
  {
    title: "Interface Notes",
    type: "Design Archive",
    description:
      "A growing visual notebook about typography, interaction details, product taste, and web craft.",
    meta: "UI / Motion / Systems",
    status: "Ongoing",
  },
];

export const posts = [
  {
    slug: "building-with-ai",
    title: "How I think about building with AI",
    date: "Jul 2026",
    tag: "Essay",
    readTime: "6 min read",
    excerpt:
      "A short reflection on using models as collaborators without letting them flatten taste, judgment, or attention.",
    body: [
      "AI is most useful to me when it behaves like a fast workshop partner: it can draft, inspect, compare, and suggest, but the direction still needs a human point of view.",
      "The work is not to ask the model for a finished answer. The work is to create a loop where it makes more options visible, then I choose with more care than speed.",
      "A good AI workflow protects taste. It should help me ship faster without making the result feel generic, accidental, or detached from the problem I meant to solve.",
    ],
  },
  {
    slug: "quiet-interfaces",
    title: "Making interfaces feel quiet, fast, and personal",
    date: "Jun 2026",
    tag: "Design",
    readTime: "5 min read",
    excerpt:
      "Notes on restraint, typography, density, and motion in tools meant to be used repeatedly instead of admired once.",
    body: [
      "Quiet interfaces are not empty interfaces. They are interfaces where each decision lowers the user\'s cognitive cost.",
      "Motion should describe state, not decorate it. Typography should create rhythm, not compete for applause. Color should establish hierarchy before it establishes mood.",
      "The best interface details often disappear after the first visit, but they keep making the product feel easier every time someone comes back.",
    ],
  },
  {
    slug: "frontend-rewrite-notes",
    title: "Notes from rewriting a small frontend from scratch",
    date: "May 2026",
    tag: "Engineering",
    readTime: "7 min read",
    excerpt:
      "What I learned from rebuilding structure, styling, and content flow while trying not to over-engineer the result.",
    body: [
      "A rewrite is only useful when it removes more uncertainty than it creates. The hard part is knowing what to keep boring.",
      "I try to isolate data first, then structure, then styling. That order keeps the page from turning into a pile of beautiful but fragile fragments.",
      "Small frontends still deserve product thinking. Naming, empty states, content hierarchy, and motion all shape whether the result feels considered.",
    ],
  },
];

export const timeline = [
  {
    year: "2026",
    title: "Building saber.log",
    description:
      "Shaping a personal site for writing, experiments, frontend craft, and AI-assisted workflows.",
  },
  {
    year: "2025",
    title: "Exploring AI workflows",
    description:
      "Testing how models can support code review, product thinking, writing, research, and design iteration.",
  },
  {
    year: "2024",
    title: "Frontend taste and systems",
    description:
      "Focusing on React, TypeScript, visual systems, interaction details, and maintainable UI architecture.",
  },
  {
    year: "2023",
    title: "Long-form technical notes",
    description:
      "Starting to collect ideas in a more durable form instead of letting useful lessons vanish after each project.",
  },
];

export const toolbox = [
  {
    group: "Frontend",
    items: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
  },
  {
    group: "Design",
    items: ["Typography", "Motion", "Design Systems", "Responsive Layouts"],
  },
  {
    group: "AI Workflow",
    items: ["Prompting", "Code Review", "Research Loops", "Content Drafting"],
  },
  {
    group: "Publishing",
    items: ["Markdown", "RSS", "Static Sites", "Writing Systems"],
  },
];

export const bookmarks = [
  {
    title: "Frontend references",
    description: "Patterns, UI details, and implementation notes worth returning to.",
    href: "#writing",
  },
  {
    title: "Design inspiration",
    description: "Interfaces, portfolios, and typography systems with a point of view.",
    href: "#work",
  },
  {
    title: "AI tools and essays",
    description: "Practical thinking about AI as a collaborator in creative and technical work.",
    href: "#now",
  },
];

export const subscribeLinks = [
  { label: "RSS", href: "#contact" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "Email", href: "mailto:hello@example.com" },
];
