import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Check,
  ExternalLink,
  Loader2,
  Maximize2,
  Minimize2,
  Presentation,
} from 'lucide-react';
import { PROJECTS, type ProjectDetail } from '../data/projects';

interface ProjectDetailViewProps {
  project: ProjectDetail;
  onBackToProjects: (anchorId?: string) => void;
  onBackToBrands: () => void;
  onSelectProject: (slug: string) => void;
}

export function ProjectDetailView({
  project,
  onBackToProjects,
  onBackToBrands,
  onSelectProject,
}: ProjectDetailViewProps) {
  const [embedLoaded, setEmbedLoaded] = useState(false);
  const [embedError, setEmbedError] = useState(false);
  const [expandedDeck, setExpandedDeck] = useState(false);

  useEffect(() => {
    setEmbedLoaded(false);
    setEmbedError(false);
    setExpandedDeck(false);
  }, [project.slug]);

  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const prevProject =
    currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject =
    currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

  return (
    <article className="pb-24 pt-10 sm:pt-14">
      <div className="mx-auto max-w-5xl px-6">
        {/* Top Return Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e8dfd5] pb-6">
          <button
            type="button"
            onClick={() => onBackToProjects(project.sectionAnchorId)}
            className="inline-flex min-h-[40px] cursor-pointer items-center gap-2 text-xs font-semibold tracking-[0.18em] text-[#1c1b1a] uppercase whitespace-nowrap shrink-0 transition-colors hover:text-[#9e1b1b]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Back to Projects</span>
          </button>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onBackToBrands}
              className="inline-flex min-h-[40px] cursor-pointer items-center gap-1.5 rounded-full border border-[#e8dfd5] px-4 py-2 text-[11px] font-medium tracking-wider text-[#6b665f] uppercase whitespace-nowrap shrink-0 transition-all hover:border-[#9e1b1b]/50 hover:text-[#9e1b1b]"
            >
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Brands &amp; Strategy</span>
            </button>

            {project.presentation && (
              <a
                href={project.presentation.canvaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full bg-[#9e1b1b] px-5 py-2 text-[11px] font-semibold tracking-wider text-white uppercase whitespace-nowrap shrink-0 transition-colors hover:bg-[#7f1414]"
              >
                <span>Open Canva Deck</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        {/* Hero Header */}
        <header className="mt-10">
          <p className="text-[11px] font-semibold tracking-[0.25em] text-[#9e1b1b] uppercase">
            {project.category} · {project.year}
          </p>
          <h1 className="font-editorial mt-3 text-3xl leading-[1.15] font-semibold text-[#1c1b1a] [text-wrap:balance] sm:text-5xl">
            {project.title}
          </h1>
          <p className="font-editorial mt-3 text-xl italic text-[#9e1b1b]">
            {project.tagline}
          </p>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#6b665f]">
            {project.overview}
          </p>
        </header>

        {/* Core Strategic Insight Callout */}
        <section className="mt-10 rounded-[28px] border border-[#9e1b1b]/25 bg-[#9e1b1b]/5 p-6 sm:p-8">
          <span className="block text-[11px] font-semibold tracking-[0.25em] text-[#9e1b1b] uppercase">
            Core Strategic Insight
          </span>
          <p className="font-editorial mt-2 text-lg leading-relaxed italic text-[#1c1b1a] sm:text-xl">
            {project.strategy}
          </p>
        </section>

        {/* Structured Case Study Sections */}
        <div className="mt-12 space-y-12">
          {/* Objectives & Deliverables */}
          <section className="grid grid-cols-1 gap-8 border-t border-[#e8dfd5] pt-10 md:grid-cols-2">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#9e1b1b] uppercase">
                01. Objectives
              </span>
              <h2 className="font-editorial mt-2 text-2xl font-semibold text-[#1c1b1a]">
                Strategic Goals
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#6b665f]">
                {project.objectives.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="font-editorial text-sm font-semibold text-[#9e1b1b] tabular-nums">
                      0{idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#9e1b1b] uppercase">
                02. Deliverables
              </span>
              <h2 className="font-editorial mt-2 text-2xl font-semibold text-[#1c1b1a]">
                Key Outputs
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#1c1b1a]/85">
                {project.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#9e1b1b]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Creative Approach & Execution */}
          <section className="grid grid-cols-1 gap-8 border-t border-[#e8dfd5] pt-10 md:grid-cols-2">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#9e1b1b] uppercase">
                03. Creative Approach
              </span>
              <h2 className="font-editorial mt-2 text-2xl font-semibold text-[#1c1b1a]">
                Concept &amp; Craft
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#6b665f]">
                {project.creativeApproach.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-bold text-[#9e1b1b]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#9e1b1b] uppercase">
                04. Execution
              </span>
              <h2 className="font-editorial mt-2 text-2xl font-semibold text-[#1c1b1a]">
                Rollout &amp; Validation
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#6b665f]">
                {project.execution.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-bold text-[#9e1b1b]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Embedded Canva Presentation Viewer */}
          {project.presentation && (
            <section className="border-t border-[#e8dfd5] pt-10">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <span className="text-[11px] font-semibold tracking-[0.25em] text-[#9e1b1b] uppercase">
                    05. Presentation Deck
                  </span>
                  <h2 className="font-editorial mt-2 text-2xl font-semibold text-[#1c1b1a] sm:text-3xl">
                    {project.presentation.label}
                  </h2>
                  <p className="mt-1 text-sm text-[#6b665f]">
                    Interactive Canva presentation · Browse inline or open full
                    screen.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setExpandedDeck((prev) => !prev)}
                    className="inline-flex min-h-[40px] cursor-pointer items-center gap-1.5 rounded-full border border-[#e8dfd5] bg-[#fbf8f5] px-4 py-2 text-xs font-semibold text-[#1c1b1a] whitespace-nowrap shrink-0 transition-colors hover:border-[#9e1b1b] hover:text-[#9e1b1b]"
                  >
                    {expandedDeck ? (
                      <>
                        <Minimize2 className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Standard Size</span>
                      </>
                    ) : (
                      <>
                        <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Expand Deck</span>
                      </>
                    )}
                  </button>

                  <a
                    href={project.presentation.canvaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full bg-[#9e1b1b] px-5 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#7f1414]"
                  >
                    <span>Open in Canva</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div
                className={`relative mt-6 overflow-hidden rounded-[28px] border border-[#e8dfd5] bg-[#f4ede4] transition-all duration-300 ${
                  expandedDeck
                    ? 'aspect-[16/11] min-h-[540px]'
                    : 'aspect-[16/9] min-h-[340px]'
                }`}
              >
                {!embedLoaded && !embedError && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#f4ede4] p-6 text-center">
                    <Loader2
                      className="h-6 w-6 animate-spin text-[#9e1b1b]"
                      aria-hidden="true"
                    />
                    <p className="mt-3 text-sm font-medium text-[#1c1b1a]">
                      Loading Canva presentation…
                    </p>
                  </div>
                )}

                {embedError ? (
                  <div className="flex h-full min-h-[340px] flex-col items-center justify-center p-8 text-center">
                    <Presentation
                      className="h-10 w-10 text-[#9e1b1b]"
                      aria-hidden="true"
                    />
                    <h3 className="font-editorial mt-4 text-xl font-semibold text-[#1c1b1a]">
                      View Presentation Directly on Canva
                    </h3>
                    <p className="mt-2 max-w-md text-sm text-[#6b665f]">
                      Click below to launch the complete slide deck directly on
                      Canva.
                    </p>
                    <a
                      href={project.presentation.canvaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#9e1b1b] px-6 py-3 text-xs font-semibold tracking-wider text-white uppercase transition-colors hover:bg-[#7f1414]"
                    >
                      <span>Launch {project.presentation.label}</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                ) : (
                  <iframe
                    src={project.presentation.embedUrl}
                    title={project.presentation.label}
                    loading="lazy"
                    allowFullScreen
                    onLoad={() => setEmbedLoaded(true)}
                    onError={() => setEmbedError(true)}
                    className="h-full w-full border-0"
                  />
                )}
              </div>
            </section>
          )}

          {/* Case Study Visual Gallery */}
          {project.images.length > 0 && (
            <section className="border-t border-[#e8dfd5] pt-10">
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#9e1b1b] uppercase">
                Visual Archive
              </span>
              <h2 className="font-editorial mt-2 text-2xl font-semibold text-[#1c1b1a] sm:text-3xl">
                Campaign Visuals &amp; Evidence
              </h2>

              <div
                className={`mt-6 grid grid-cols-1 gap-6 ${
                  project.images.length > 1 ? 'md:grid-cols-2' : ''
                }`}
              >
                {project.images.map((img) => (
                  <figure
                    key={img.src}
                    className="overflow-hidden rounded-[26px] border border-[#e8dfd5] bg-[#fbf8f5] shadow-sm"
                  >
                    <div className="flex aspect-[16/10] items-center justify-center bg-[#f4ede4]/60 p-3">
                      <img
                        src={img.src}
                        alt={img.alt}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="h-full w-full rounded-xl object-contain"
                      />
                    </div>
                    <figcaption className="border-t border-[#e8dfd5]/70 px-4 py-3 text-xs text-[#6b665f]">
                      {img.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Previous / Next Case Study Pagination */}
        <nav
          aria-label="Adjacent case studies"
          className="mt-16 grid grid-cols-1 gap-5 border-t border-[#e8dfd5] pt-10 sm:grid-cols-2"
        >
          <button
            type="button"
            onClick={() => onSelectProject(prevProject.slug)}
            className="group flex cursor-pointer flex-col items-start rounded-[24px] border border-[#e8dfd5] bg-[#fbf8f5] p-6 text-left transition-all hover:border-[#9e1b1b]/50 hover:shadow-md"
          >
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-[#6b665f] uppercase group-hover:text-[#9e1b1b]">
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Previous Project</span>
            </span>
            <span className="font-editorial mt-2 text-xl font-semibold text-[#1c1b1a]">
              {prevProject.client}
            </span>
            <span className="mt-1 text-xs text-[#6b665f]">
              {prevProject.category}
            </span>
          </button>

          <button
            type="button"
            onClick={() => onSelectProject(nextProject.slug)}
            className="group flex cursor-pointer flex-col items-end rounded-[24px] border border-[#e8dfd5] bg-[#fbf8f5] p-6 text-right transition-all hover:border-[#9e1b1b]/50 hover:shadow-md"
          >
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-[#6b665f] uppercase group-hover:text-[#9e1b1b]">
              <span>Next Project</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <span className="font-editorial mt-2 text-xl font-semibold text-[#1c1b1a]">
              {nextProject.client}
            </span>
            <span className="mt-1 text-xs text-[#6b665f]">
              {nextProject.category}
            </span>
          </button>
        </nav>
      </div>
    </article>
  );
}
