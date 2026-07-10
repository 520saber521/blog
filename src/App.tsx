import { useEffect, useState, type CSSProperties } from "react";
import {
  ArrowDown,
  BookOpen,
  ExternalLink,
  Github,
  Mail,
  Moon,
  Rss,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  bookmarks,
  focusAreas,
  navLinks,
  nowItems,
  posts,
  projects,
  subscribeLinks,
  timeline,
  toolbox,
  videoSource,
} from "@/data/site";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedPost, setSelectedPost] = useState(posts[0]);
  const [isReaderOpen, setIsReaderOpen] = useState(false);
  const [siteMode, setSiteMode] = useState<"cinematic" | "reading">("cinematic");
  const [modePulse, setModePulse] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? window.scrollY / maxScroll : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: [0.25, 0.45, 0.65], rootMargin: "-18% 0px -45% 0px" },
    );

    document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));
    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) sectionObserver.observe(section);
    });

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const openPost = (post: (typeof posts)[number]) => {
    setSelectedPost(post);
    setIsReaderOpen(true);
  };

  const toggleSiteMode = () => {
    setSiteMode(siteMode === "cinematic" ? "reading" : "cinematic");
    setModePulse(true);
    window.setTimeout(() => setModePulse(false), 700);
  };

  return (
    <main
      className={`min-h-screen overflow-x-hidden bg-background text-foreground ${siteMode} ${modePulse ? "mode-pulse" : ""}`}
      style={{ "--scroll-progress": scrollProgress } as CSSProperties}
    >
      <div className="scroll-progress" aria-hidden="true" />
      <section id="home" className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#002b42] via-[#0a1a2f] to-[#001220]" />
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        >
          <source src={videoSource} type="video/mp4" />
        </video>

        <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#001b29]/35 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl flex-row items-center justify-between gap-4 px-6 py-4 sm:px-8">
            <a
              href="#home"
              className="font-display shrink-0 text-3xl font-normal tracking-tight text-foreground"
              style={{ fontFamily: "'Instrument Serif', serif" }}
              aria-label="Saber home"
            >
              saber.log
            </a>

            <div className="hidden min-w-0 items-center gap-5 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={activeSection === link.id ? "nav-link nav-link-active" : "nav-link"}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                className="liquid-glass inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-all duration-300 hover:scale-[1.03]"
                onClick={toggleSiteMode}
                aria-label="Toggle site mode"
                title="Toggle site mode"
              >
                {siteMode === "cinematic" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </button>
              <a
                href="#contact"
                className="liquid-glass rounded-full px-5 py-2.5 text-sm text-foreground transition-all duration-300 hover:scale-[1.03]"
              >
                Say Hello
              </a>
            </div>
          </div>
        </nav>

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-28 pt-28 text-center sm:pb-36">
          <p className="animate-fade-rise mb-6 meta-text">
            Personal blog / product notes / quiet experiments
          </p>
          <h1
            className="animate-fade-rise max-w-7xl text-5xl font-normal leading-[0.98] tracking-normal text-foreground sm:text-7xl md:text-8xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Code, <em className="not-italic text-muted-foreground">thoughts</em>, and quiet{" "}
            <em className="not-italic text-muted-foreground">experiments.</em>
          </h1>

          <p className="animate-fade-rise-delay mt-8 max-w-2xl body-copy">
            I write about engineering, AI, product design, and the slow work of becoming better at building things.
          </p>

          <div className="animate-fade-rise-delay-2 mt-12 flex flex-col items-center gap-4 sm:flex-row">
            <Button
              variant="glass"
              size="hero"
              type="button"
              className="cursor-pointer"
              onClick={() => document.querySelector("#writing")?.scrollIntoView({ behavior: "smooth" })}
            >
              Read Latest
            </Button>
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Scroll to explore <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section-shell border-t border-white/10 scroll-mt-20">
        <div className="reveal mx-auto grid max-w-7xl gap-16 px-6 py-section sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-28">
          <div>
            <p className="section-kicker">About</p>
            <h2 className="display-heading mt-4 max-w-xl text-4xl sm:text-6xl">
              A maker standing between code, taste, and long attention.
            </h2>
          </div>

          <div className="space-y-12 text-muted-foreground">
            <p className="body-copy max-w-2xl">
              I care about turning complex ideas into interfaces that feel clear, useful, and slightly alive. This site collects my projects, essays, experiments, and the notes that happen along the way.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {focusAreas.map((item, index) => (
                <div key={item} className="quiet-card interactive-card reveal px-5 py-4 text-sm text-foreground" style={{ transitionDelay: `${index * 80}ms` }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="now" className="section-shell scroll-mt-20">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-section sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-28">
          <div className="reveal lg:sticky lg:top-28 lg:self-start">
            <p className="section-kicker">Now</p>
            <h2 className="display-heading mt-4 max-w-xl text-4xl sm:text-6xl">
              What has my attention right now.
            </h2>
            <p className="mt-6 max-w-md section-copy">
              This section borrows the page-turn feeling: the left side stays calm while the cards pass by like short chapters.
            </p>
          </div>

          <div className="space-y-10 lg:space-y-16">
            {nowItems.map((item, index) => (
              <article key={item.title} className="now-card interactive-card reveal" style={{ transitionDelay: `${index * 120}ms` }}>
                <p className="meta-text">{item.eyebrow}</p>
                <h3 className="display-heading mt-8 text-3xl sm:text-5xl">{item.title}</h3>
                <p className="mt-6 max-w-xl section-copy sm:text-base">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section-shell scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 py-section sm:px-8">
          <div className="reveal mb-20 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">Selected Work</p>
              <h2 className="display-heading mt-4 text-4xl sm:text-6xl">Works in progress, made public.</h2>
            </div>
            <p className="max-w-md section-copy">
              Project cards open up as you arrive, giving the section a light deck-of-cards rhythm without interrupting reading.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.title} className="project-card interactive-card stack-card reveal group" style={{ "--stack-index": index, transitionDelay: `${index * 110}ms` } as CSSProperties}>
                <div className="flex items-start justify-between gap-4">
                  <p className="meta-text">{project.type}</p>
                  <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                </div>
                <h3 className="display-heading mt-12 text-3xl">{project.title}</h3>
                <p className="mt-4 min-h-24 section-copy">{project.description}</p>
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 meta-text">
                  <span>{project.meta}</span>
                  <span>{project.status}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="writing" className="section-shell scroll-mt-20">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-section sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-28">
          <div className="reveal lg:sticky lg:top-28 lg:self-start">
            <p className="section-kicker">Writing</p>
            <h2 className="display-heading mt-4 text-4xl sm:text-6xl">Notes before they become certain.</h2>
            <p className="mt-6 max-w-sm section-copy">
              Click a note to open a static reader. Later, this can map cleanly to Markdown or MDX without changing the visual system.
            </p>
            <button
              type="button"
              className="liquid-glass mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm text-foreground transition-all duration-300 hover:scale-[1.03]"
              onClick={() => setIsReaderOpen(true)}
            >
              <BookOpen className="h-4 w-4" /> Open Reader
            </button>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {posts.map((post, index) => (
              <button
                key={post.slug}
                type="button"
                className="writing-row reveal group grid w-full gap-6 py-10 text-left transition-colors hover:bg-white/[0.025] sm:grid-cols-[1fr_auto]"
                style={{ transitionDelay: `${index * 90}ms` }}
                onClick={() => openPost(post)}
              >
                <div>
                  <p className="meta-text">
                    {post.tag} / {post.date} / {post.readTime}
                  </p>
                  <h3 className="mt-3 text-xl text-foreground transition-colors group-hover:text-white sm:text-2xl">{post.title}</h3>
                  <p className="mt-3 max-w-2xl section-copy">{post.excerpt}</p>
                </div>
                <ArrowDown className="h-5 w-5 -rotate-90 text-muted-foreground transition-colors group-hover:text-foreground" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="timeline" className="section-shell scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 py-section sm:px-8">
          <div className="reveal mb-20 max-w-3xl">
            <p className="section-kicker">Timeline</p>
            <h2 className="display-heading mt-4 text-4xl sm:text-6xl">A compact record of the path so far.</h2>
          </div>
          <div className="timeline-list">
            {timeline.map((item, index) => (
              <article key={item.year} className="timeline-item reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                <span className="timeline-year">{item.year}</span>
                <div>
                  <h3 className="text-2xl text-foreground">{item.title}</h3>
                  <p className="mt-3 max-w-2xl section-copy">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="toolbox" className="section-shell scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 py-section sm:px-8">
          <div className="reveal mb-20 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">Toolbox</p>
              <h2 className="display-heading mt-4 text-4xl sm:text-6xl">The tools and practices I reach for.</h2>
            </div>
            <p className="max-w-md section-copy">
              A static toolbox makes the site feel practical, not only atmospheric.
            </p>
          </div>
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {toolbox.map((group, index) => (
              <article key={group.group} className="tool-card interactive-card reveal" style={{ transitionDelay: `${index * 80}ms` }}>
                <h3 className="text-lg text-foreground">{group.group}</h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tool-pill">{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="links" className="section-shell scroll-mt-20">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-section sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">
          <div className="reveal">
            <p className="section-kicker">Bookmarks</p>
            <h2 className="display-heading mt-4 text-4xl sm:text-6xl">A small index of what shapes the work.</h2>
          </div>
          <div className="grid gap-8">
            {bookmarks.map((bookmark, index) => (
              <a key={bookmark.title} href={bookmark.href} className="bookmark-row interactive-card reveal group" style={{ transitionDelay: `${index * 90}ms` }}>
                <div>
                  <h3 className="text-2xl text-foreground">{bookmark.title}</h3>
                  <p className="mt-2 section-copy">{bookmark.description}</p>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell border-t border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 py-contact sm:px-8">
          <div className="closing-essay reveal">
            <p>
              Before the page ends, I like leaving a little room for the quieter part of the work: the unfinished notes, the small experiments, and the conversations that turn a loose idea into something with shape.
            </p>
          </div>

          <div className="contact-layout reveal">
            <div className="contact-heading-block">
              <p className="section-kicker">Contact</p>
              <h2 className="display-heading mt-6 text-5xl sm:text-7xl lg:text-8xl">Let the next note begin here.</h2>
            </div>

            <div className="contact-action-block">
              <p className="body-copy">
                Follow the writing, browse the code, or send a small hello. I keep this corner simple so the page can close with space instead of noise.
              </p>

              <div className="contact-links">
                {subscribeLinks.map((link) => (
                  <a key={link.label} href={link.href} className="contact-link magnetic-link group">
                    <span className="contact-link-icon" aria-hidden="true">
                      {link.label === "RSS" && <Rss className="h-4 w-4" />}
                      {link.label === "GitHub" && <Github className="h-4 w-4" />}
                      {link.label === "Email" && <Mail className="h-4 w-4" />}
                    </span>
                    <span>{link.label}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {isReaderOpen && (
        <div className="reader-overlay" role="dialog" aria-modal="true" aria-label="Article reader">
          <button className="reader-backdrop" type="button" aria-label="Close reader" onClick={() => setIsReaderOpen(false)} />
          <article className="reader-panel">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="section-kicker">{selectedPost.tag} / {selectedPost.date}</p>
                <h2 className="display-heading mt-4 text-4xl sm:text-6xl">{selectedPost.title}</h2>
                <p className="mt-4 meta-text">{selectedPost.readTime}</p>
              </div>
              <button type="button" className="reader-close" onClick={() => setIsReaderOpen(false)} aria-label="Close reader">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="reader-body">
              {selectedPost.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4" /> Static reader preview. Ready for Markdown later.
            </div>
          </article>
        </div>
      )}
    </main>
  );
}

export default App;

