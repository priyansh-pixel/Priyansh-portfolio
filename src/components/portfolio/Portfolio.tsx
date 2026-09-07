import { useState } from "react";
import {
  ArrowUpRight,
  Award,
  BarChart3,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Reveal } from "@/components/portfolio/Reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const GITHUB_URL = "https://github.com/priyansh-pixel";
const LINKEDIN_URL = "https://www.linkedin.com/in/priyanshsrivastava12/";
const EMAIL_URL = "mailto:srivastavapriyansh2499@gmail.com";
const RESUME_URL = "/Priyansh_Srivastava_Resume.pdf";

/* ---------------------------------- data --------------------------------- */

const EXPERIENCE = [
  {
    role: "Consultant",
    company: "Zoicx Technologies",
    period: "Feb 2025 – Nov 2025",
    points: [
      "Designed structured SIT/UAT protocols, reducing post-deployment defects by 50% and per-sprint LOE by 33%.",
      "Mapped functional workflows and analyzed business processes, improving operational efficiency by 30%.",
    ],
  },
  {
    role: "Associate Consultant",
    company: "HighRadius Technologies",
    period: "Jan 2024 – Jan 2025",
    points: [
      "Delivered Order-to-Cash (O2C) automation within the Deduction Management module for Fortune 500 clients, leveraging SAP ERP customer data for HighRadius implementations.",
      "Aligned global stakeholders to translate complex requirements into software solutions, increasing post-rollout user adoption by 35%.",
      "Automated reason-code routing within the deduction module, reducing dispute resolution time by 22% and improving cash flow efficiency.",
    ],
  },
  {
    role: "Techno-Functional Consultant",
    company: "HighRadius Technologies",
    period: "Dec 2022 – Dec 2023",
    points: [
      "Maintained RAG status and PMO governance reporting while standardizing requirement documentation, reducing revision requests by 40%.",
      "Led cloud-based FinTech O2C product deployments, reducing client processing time by 15% and improving client satisfaction.",
    ],
  },
];

type CaseSection = { heading: string; body: string };

type Project = {
  id: string;
  title: string;
  kicker: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  caseStudy: CaseSection[];
  note?: string;
};

const PROJECTS: Project[] = [
  {
    id: "hospital",
    title: "Hospital Operations Decision-Support Application",
    kicker: "Flagship project",
    description:
      "Developed a hospital operations decision-support application using demand forecasting, capacity planning, patient-flow analysis, and what-if scenarios to support resource allocation and waiting-time management.",
    tags: [
      "Operations Management",
      "Demand Forecasting",
      "Capacity Planning",
      "What-if Analysis",
      "Decision Support",
    ],
    liveUrl: "https://hospital-optimization.netlify.app/",
    repoUrl: "https://github.com/priyansh-pixel/hospital-operations-dashboard",
    caseStudy: [
      {
        heading: "Problem",
        body: "Hospital operations teams need to plan staffing and capacity against uncertain demand, yet planning decisions are often made without a transparent, testable view of how demand, capacity and patient flow interact.",
      },
      {
        heading: "Approach",
        body: "Framed the planning problem around demand forecasting, capacity planning and patient-flow analysis, then designed scenario controls so that assumptions could be varied and compared side by side.",
      },
      {
        heading: "Solution",
        body: "Built an academic decision-support prototype that combines forecasting, capacity planning, what-if scenario analysis and priority management in a single interface, making each assumption visible to the user.",
      },
      {
        heading: "Outcome / Value",
        body: "The prototype demonstrates transparent forecasting, capacity planning, scenario analysis and priority management as a decision-support method. It was built on synthetic academic data, so no real-world patient wait-time reductions are claimed.",
      },
    ],
    note: "Academic prototype built on synthetic data — illustrative of method, not of real-world clinical outcomes.",
  },
  {
    id: "powerbi",
    title: "E-commerce Power BI Dashboard",
    kicker: "Analytics",
    description:
      "Designed a Power BI dashboard for an e-commerce business to track sales, conversions, and revenue, supporting data-driven executive decision-making.",
    tags: ["Power BI", "Sales Analytics", "Conversion Analysis", "Revenue Analytics"],
    caseStudy: [
      {
        heading: "Objective",
        body: "Give decision-makers a single, reliable view of commercial performance instead of fragmented reports, so that sales, conversion and revenue questions could be answered in one place.",
      },
      {
        heading: "Analysis",
        body: "Structured the underlying sales data, defined consistent measures, and worked through how conversion and revenue should be segmented so that trends could be compared over time.",
      },
      {
        heading: "Dashboard KPIs",
        body: "Sales performance, conversion analysis and revenue analytics views, arranged so an executive reader moves from headline numbers to segment-level detail.",
      },
      {
        heading: "Business Value",
        body: "Supports data-driven executive decision-making by making commercial performance visible and comparable. No specific business results are claimed for this dashboard.",
      },
    ],
  },
  {
    id: "o2c",
    title: "O2C Deduction Management Process Transformation",
    kicker: "Anonymized consulting case study",
    description: "An anonymized case study based on professional experience in O2C Deduction Management.",
    tags: [
      "O2C",
      "Deduction Management",
      "Process Optimization",
      "Root Cause Analysis",
      "Stakeholder Management",
    ],
    caseStudy: [
      {
        heading: "Problem",
        body: "Manual deduction classification and routing created delays in dispute resolution.",
      },
      {
        heading: "Approach",
        body: "Analyzed deduction workflows and reason-code routing, collaborated with stakeholders, and identified process inefficiencies.",
      },
      {
        heading: "Solution",
        body: "Supported automated reason-code routing within the deduction management workflow.",
      },
      {
        heading: "Impact",
        body: "Reduced dispute-resolution time by 22% and improved cash-flow efficiency.",
      },
    ],
    note: "Confidentiality: no client names, proprietary screenshots, data, or internal documentation are disclosed.",
  },
];

const SKILLS = [
  {
    title: "Business & Functional",
    icon: Workflow,
    items: [
      "Business Analysis",
      "Requirements Gathering",
      "Business Process Mapping",
      "Stakeholder Management",
      "Solution Design",
      "SIT/UAT",
      "Change Support",
    ],
  },
  {
    title: "Enterprise & Consulting",
    icon: BriefcaseBusiness,
    items: [
      "SAP ERP Exposure",
      "Order-to-Cash",
      "Deduction Management",
      "Technology Consulting",
      "Business Transformation",
      "PMO Governance",
    ],
  },
  {
    title: "Analytics & Operations",
    icon: BarChart3,
    items: [
      "Power BI",
      "SQL",
      "Operational Analytics",
      "Demand Forecasting",
      "Capacity Planning",
      "Root Cause Analysis",
    ],
  },
];

const METRICS = [
  { value: "50%", label: "fewer post-deployment defects" },
  { value: "33%", label: "lower per-sprint LOE" },
  { value: "30%", label: "operational efficiency improvement" },
  { value: "35%", label: "higher post-rollout adoption" },
  { value: "22%", label: "faster dispute resolution" },
  { value: "40%", label: "fewer revision requests" },
  { value: "15%", label: "lower client processing time" },
];

const EDUCATION = [
  {
    title: "PGCM",
    org: "Great Lakes Institute of Management, Gurgaon",
    meta: "Pursuing · 2027",
  },
  {
    title: "B.Tech (Computer Science & Engineering)",
    org: "Kalinga Institute of Industrial Technology, Bhubaneswar",
    meta: "8.82/10 · 2022",
  },
];

const CERTIFICATIONS = [
  { title: "Lean Six Sigma", org: "GoLeanSixSigma", meta: "2026" },
  { title: "AI & ChatGPT", org: "Be10x", meta: "2025" },
  { title: "SQL for Data Management", org: "Udemy", meta: "2023" },
];

const AWARDS = [
  "1st Position, Marketify, GLIM-G, 2026",
  "Spot Award, HighRadius Technologies, 2023 & 2024",
  "Member, Sports Committee, GLIM-G, 2026–27",
  "UMIXO Event Organizer, HighRadius Technologies, 2023",
  "Cultural Committee Head, KIIT, 2020",
  "District-level football team captain, Rewari, 2017",
];

/* -------------------------------- helpers -------------------------------- */

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p>}
    </Reveal>
  );
}

function Tag({ children }: { children: string }) {
  return (
    <Badge
      variant="secondary"
      className="rounded-full border border-border bg-secondary/70 px-3 py-1 text-xs font-medium text-secondary-foreground"
    >
      {children}
    </Badge>
  );
}

function DashboardPreview() {
  const bars = [42, 68, 55, 84, 61, 92, 74];
  return (
    <div
      aria-hidden="true"
      className="rounded-xl border border-border bg-secondary/40 p-4 shadow-soft"
    >
      <div className="flex items-center justify-between">
        <div className="h-2 w-24 rounded-full bg-accent/70" />
        <div className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
          <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
          <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {["Sales", "Conv.", "Revenue"].map((k) => (
          <div key={k} className="rounded-lg border border-border bg-card px-2 py-2">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{k}</p>
            <div className="mt-1 h-1.5 w-3/4 rounded-full bg-accent/60" />
          </div>
        ))}
      </div>
      <div className="mt-4 flex h-24 items-end gap-2">
        {bars.map((h, i) => (
          <div
            key={i}
            style={{ height: `${h}%` }}
            className="flex-1 rounded-t-md bg-gradient-to-t from-accent/30 to-accent"
          />
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------- page --------------------------------- */

export function Portfolio() {
  const [openProject, setOpenProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground" id="top">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="hero-surface relative overflow-hidden border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
            <Reveal className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-card px-3 py-1.5 text-xs font-medium text-accent shadow-soft">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Open to Business Transformation / Consulting Opportunities
              </span>

              <h1 className="mt-7 text-4xl font-semibold leading-[1.08] sm:text-6xl">
                Priyansh Srivastava
              </h1>
              <p className="mt-4 text-lg font-medium text-ink-soft sm:text-xl">
                Business Transformation <span className="text-accent">|</span> Business Analysis{" "}
                <span className="text-accent">|</span> Technology Consulting
              </p>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Results-driven consultant with nearly 3 years of experience supporting enterprise
                transformation initiatives across business process analysis, stakeholder management,
                solution design, O2C transformation, testing, and process improvement. Currently
                pursuing PGCM at Great Lakes Institute of Management, Gurgaon.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="lg">
                  <a href="#projects">
                    View Projects <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="subtle" size="lg">
                  <a href={GITHUB_URL} target="_blank" rel="noreferrer noopener">
                    <Github aria-hidden="true" /> GitHub
                  </a>
                </Button>
                <Button asChild variant="subtle" size="lg">
                  <a href={LINKEDIN_URL} target="_blank" rel="noreferrer noopener">
                    <Linkedin aria-hidden="true" /> LinkedIn
                  </a>
                </Button>
                <Button asChild variant="subtle" size="lg">
                  <a
                    href={RESUME_URL}
                    download="Priyansh_Srivastava_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Download aria-hidden="true" /> Resume
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Metrics strip */}
        <section aria-label="Impact metrics" className="border-b border-border bg-card">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-5 py-12 sm:grid-cols-3 lg:grid-cols-4">
            {METRICS.map((m, i) => (
              <Reveal key={m.value + m.label} delay={i * 50}>
                <p className="font-display text-3xl font-semibold text-accent">{m.value}</p>
                <p className="mt-1 text-sm leading-snug text-muted-foreground">{m.label}</p>
              </Reveal>
            ))}
            <Reveal delay={350} className="col-span-2 self-center sm:col-span-3 lg:col-span-1">
              <p className="text-xs leading-relaxed text-muted-foreground">
                Outcomes measured within specific prior roles and projects — not universal or
                guaranteed results.
              </p>
            </Reveal>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:py-24">
          <SectionHeading eyebrow="About" title="Bridging technology and business outcomes" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-soft">
                <p className="text-base leading-relaxed text-muted-foreground">
                  I work at the point where technology decisions meet business outcomes. Across
                  enterprise consulting engagements I have analysed business processes, gathered and
                  structured requirements, collaborated with global stakeholders, and supported the
                  implementation and testing of solutions through to rollout.
                </p>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  My focus is measurable business impact: mapping how work actually flows, finding
                  where it breaks, and shaping solutions that teams adopt. That combination of
                  process analysis, stakeholder collaboration and delivery discipline is what I
                  bring to business transformation work.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full rounded-2xl border border-border bg-secondary/40 p-8 shadow-soft">
                <h3 className="flex items-center gap-2 text-base font-semibold">
                  <GraduationCap className="size-5 text-accent" aria-hidden="true" /> Education
                </h3>
                <ul className="mt-5 space-y-5 text-sm">
                  <li>
                    <p className="font-semibold">PGCM (Pursuing)</p>
                    <p className="text-muted-foreground">
                      Great Lakes Institute of Management, Gurgaon
                    </p>
                  </li>
                  <li>
                    <p className="font-semibold">B.Tech, Computer Science & Engineering</p>
                    <p className="text-muted-foreground">
                      Kalinga Institute of Industrial Technology (KIIT)
                    </p>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="scroll-mt-24 border-y border-border bg-card py-20 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading
              eyebrow="Experience"
              title="Consulting delivery across transformation programs"
            />
            <ol className="mt-14 space-y-8 border-l border-border pl-6 sm:pl-10">
              {EXPERIENCE.map((job, i) => (
                <Reveal as="li" key={job.role + job.period} delay={i * 80} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[31px] top-6 h-3 w-3 rounded-full border-2 border-accent bg-background sm:-left-[47px]"
                  />
                  <article className="rounded-2xl border border-border bg-background p-6 shadow-soft transition-shadow hover:shadow-lift sm:p-8">
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:justify-between">
                      <div className="min-w-0">
                        <h3 className="text-xl font-semibold">{job.role}</h3>
                        <p className="mt-1 text-sm font-medium text-accent">{job.company}</p>
                      </div>
                      <p className="shrink-0 text-xs font-medium text-muted-foreground sm:text-sm">
                        {job.period}
                      </p>
                    </div>
                    <ul className="mt-5 space-y-3">
                      {job.points.map((p) => (
                        <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:py-24">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
            intro="Decision-support tooling, executive analytics, and an anonymized process transformation case study."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <Reveal as="article" key={p.id} delay={i * 90} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    {p.kicker}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h3>
                  {p.id === "powerbi" && (
                    <div className="mt-5">
                      <DashboardPreview />
                    </div>
                  )}
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  {p.note && (
                    <p className="mt-4 flex gap-2 rounded-lg border border-border bg-secondary/50 p-3 text-xs leading-relaxed text-muted-foreground">
                      <ShieldCheck className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                      <span>{p.note}</span>
                    </p>
                  )}
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li key={t}>
                        <Tag>{t}</Tag>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {p.liveUrl && (
                      <Button asChild size="sm" variant="accent">
                        <a href={p.liveUrl} target="_blank" rel="noreferrer noopener">
                          <ExternalLink aria-hidden="true" /> Live Demo
                        </a>
                      </Button>
                    )}
                    {p.repoUrl && (
                      <Button asChild size="sm" variant="subtle">
                        <a href={p.repoUrl} target="_blank" rel="noreferrer noopener">
                          <Github aria-hidden="true" /> GitHub
                        </a>
                      </Button>
                    )}
                    <Button size="sm" variant="subtle" onClick={() => setOpenProject(p)}>
                      <Sparkles aria-hidden="true" /> Case Study
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-24 border-y border-border bg-card py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading eyebrow="Skills" title="Capabilities" />
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {SKILLS.map((group, i) => (
                <Reveal key={group.title} delay={i * 90} className="h-full">
                  <div className="h-full rounded-2xl border border-border bg-background p-7 shadow-soft">
                    <div className="flex items-center gap-3">
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                        <group.icon className="size-5" aria-hidden="true" />
                      </span>
                      <h3 className="min-w-0 text-base font-semibold">{group.title}</h3>
                    </div>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li key={item}>
                          <Tag>{item}</Tag>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Education & certifications */}
        <section id="education" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:py-24">
          <SectionHeading eyebrow="Education" title="Education & certifications" />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                <h3 className="flex items-center gap-2 text-base font-semibold">
                  <GraduationCap className="size-5 text-accent" aria-hidden="true" /> Education
                </h3>
                <ul className="mt-6 space-y-6">
                  {EDUCATION.map((e) => (
                    <li key={e.title}>
                      <p className="font-semibold">{e.title}</p>
                      <p className="text-sm text-muted-foreground">{e.org}</p>
                      <p className="mt-1 text-xs font-medium text-accent">{e.meta}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                <h3 className="flex items-center gap-2 text-base font-semibold">
                  <Award className="size-5 text-accent" aria-hidden="true" /> Certifications
                </h3>
                <ul className="mt-6 space-y-6">
                  {CERTIFICATIONS.map((c) => (
                    <li key={c.title}>
                      <p className="font-semibold">{c.title}</p>
                      <p className="text-sm text-muted-foreground">{c.org}</p>
                      <p className="mt-1 text-xs font-medium text-accent">{c.meta}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150} className="mt-6">
            <div className="rounded-2xl border border-border bg-secondary/40 p-7 shadow-soft">
              <h3 className="text-base font-semibold">Awards & leadership</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {AWARDS.map((a) => (
                  <li key={a} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="hero-surface scroll-mt-24 border-t border-border py-20 sm:py-28"
        >
          <div className="mx-auto max-w-3xl px-5 text-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Let's Connect</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Interested in business transformation, technology consulting, and operations-focused
                opportunities.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Button asChild variant="hero" size="lg">
                  <a href={LINKEDIN_URL} target="_blank" rel="noreferrer noopener">
                    <Linkedin aria-hidden="true" /> LinkedIn
                  </a>
                </Button>
                <Button asChild variant="subtle" size="lg">
                  <a href={GITHUB_URL} target="_blank" rel="noreferrer noopener">
                    <Github aria-hidden="true" /> GitHub
                  </a>
                </Button>
                <Button asChild variant="subtle" size="lg">
                  <a href={EMAIL_URL}>
                    <Mail aria-hidden="true" /> Email
                  </a>
                </Button>
                <Button asChild variant="subtle" size="lg">
                  <a
                    href={RESUME_URL}
                    download="Priyansh_Srivastava_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Download aria-hidden="true" /> Download Resume
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex sm:justify-between">
          <p className="min-w-0">© {new Date().getFullYear()} Priyansh Srivastava</p>
          <p className="shrink-0 text-xs">Business Transformation · Consulting · Analytics</p>
        </div>
      </footer>

      <Dialog open={!!openProject} onOpenChange={(o) => !o && setOpenProject(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-left text-xl leading-snug">
              {openProject?.title}
            </DialogTitle>
            <DialogDescription className="text-left">{openProject?.kicker}</DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            {openProject?.caseStudy.map((s) => (
              <div key={s.heading}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {s.heading}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
            {openProject?.note && (
              <p className="flex gap-2 rounded-lg border border-border bg-secondary/50 p-3 text-xs leading-relaxed text-muted-foreground">
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <span>{openProject.note}</span>
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
