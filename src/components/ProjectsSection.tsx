import { ArrowUp, ArrowUpRight, Eye, ZoomIn } from 'lucide-react';
import { getProjectBySlug } from '../data/projects';
import { EditorialImage } from './EditorialImage';

interface ProjectsSectionProps {
  highlightedSlug: string | null;
  onQuickViewModal: (slug: string) => void;
  onOpenDetailPage: (slug: string) => void;
  onScrollBackToBrands: () => void;
  onScrollBackToProjects: () => void;
}

export function ProjectsSection({
  highlightedSlug,
  onQuickViewModal,
  onOpenDetailPage,
  onScrollBackToBrands,
  onScrollBackToProjects,
}: ProjectsSectionProps) {
  const spotify = getProjectBySlug('spotify')!;
  const rasa = getProjectBySlug('rasa-feni')!;
  const rozana = getProjectBySlug('rozana')!;
  const we2 = getProjectBySlug('we2')!;

  const renderScrollBackBar = (label: string) => (
    <div className="flex flex-wrap items-center justify-end gap-2.5 pt-4">
      <button
        type="button"
        onClick={onScrollBackToBrands}
        className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-[#e8dfd5] px-3.5 py-1.5 text-[11px] font-medium tracking-wider text-[#6b665f] uppercase transition-all hover:border-[#9e1b1b]/50 hover:bg-[#9e1b1b]/5 hover:text-[#9e1b1b]"
        aria-label={`Scroll back to Brands & Strategy Work from ${label}`}
      >
        <ArrowUp className="h-3 w-3" aria-hidden="true" />
        <span>Back to Brands</span>
      </button>
      <button
        type="button"
        onClick={onScrollBackToProjects}
        className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-[#e8dfd5] px-3.5 py-1.5 text-[11px] font-medium tracking-wider text-[#6b665f] uppercase transition-all hover:border-[#9e1b1b]/50 hover:bg-[#9e1b1b]/5 hover:text-[#9e1b1b]"
      >
        <ArrowUp className="h-3 w-3" aria-hidden="true" />
        <span>Back to Projects</span>
      </button>
    </div>
  );

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-28"
    >
      <div className="mb-16 flex flex-col justify-between gap-4 border-b border-[#e8dfd5] pb-6 sm:flex-row sm:items-end">
        <div>
          <span className="text-[11px] font-semibold tracking-[0.3em] text-[#9e1b1b] uppercase">
            Featured Work &amp; Case Studies
          </span>
          <h2 className="font-editorial mt-2 text-3xl text-[#1c1b1a] sm:text-4xl lg:text-5xl">
            Selected Strategic Projects
          </h2>
          <p className="font-editorial mt-1 text-lg italic text-[#6b665f]">
            “Different briefs. Different industries. One curious marketing brain.”
          </p>
        </div>
        <span className="text-xs tracking-widest text-[#6b665f] uppercase">
          04 Case Studies · Click Any Card for Full View
        </span>
      </div>

      <div className="space-y-28">
        {/* Case Study 1: Spotify Renaissance Remix & Eye Tracking */}
        <article
          id="project-spotify"
          className={`scroll-mt-24 space-y-8 p-2 transition-all ${
            highlightedSlug === 'spotify' ? 'project-arrival-highlight' : ''
          }`}
        >
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-3 text-[11px] font-semibold tracking-wider text-[#9e1b1b] uppercase">
                {spotify.category}
              </p>
              <h3 className="font-editorial text-3xl leading-tight text-[#1c1b1a] sm:text-4xl lg:text-5xl">
                {spotify.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6b665f] sm:text-base">
                Ad concepts built around the insight that classical art carries
                instant cultural recognition reimagined with modern Spotify UX
                to create schema-violation driven engagement. Tested across
                classical figures, lyrics, and receipt-style summaries.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => onOpenDetailPage('spotify')}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#9e1b1b] px-4 py-2.5 text-xs font-semibold tracking-wider text-white uppercase shadow-xs transition-all hover:bg-[#7f1414]"
              >
                <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                <span>View Full Case Study</span>
              </button>
              <span className="text-xs font-medium tracking-wider text-[#6b665f] uppercase">
                · Tobii Pro Glasses Lab Tested
              </span>
            </div>
          </div>

          {/* 3-Column Top Row: Creative Ad Concepts */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {spotify.images.slice(0, 3).map((img) => (
              <button
                key={img.src}
                type="button"
                onClick={() => onQuickViewModal('spotify')}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-[28px] border border-[#e8dfd5] bg-[#fbf8f5] text-left shadow-md transition-all duration-300 hover:border-[#9e1b1b]/50 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/5">
                  <EditorialImage
                    src={img.src}
                    alt={img.alt}
                    fallbackTitle={img.title ?? 'Spotify Concept'}
                    className="h-full w-full"
                    imgClassName="transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-[#1c1b1a]/20 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="flex items-center gap-1.5 rounded-full bg-[#fbf8f5]/90 px-3.5 py-1.5 text-xs font-semibold text-[#9e1b1b] shadow-md backdrop-blur-md">
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      Quick View
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between border-t border-[#e8dfd5]/60 bg-[#fbf8f5]/95 p-4">
                  <div>
                    <span className="block text-[10px] font-semibold tracking-wider text-[#9e1b1b] uppercase">
                      {img.kicker}
                    </span>
                    <h4 className="font-editorial mt-0.5 text-base font-semibold text-[#1c1b1a]">
                      {img.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-[#6b665f]">
                      {img.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Bottom Row: Receipt Summary + Tobii Heatmaps + Key Research Insights */}
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
            {/* Spotify Thermal Receipt */}
            <button
              type="button"
              onClick={() => onQuickViewModal('spotify')}
              className="group flex cursor-pointer flex-col justify-between overflow-hidden rounded-[28px] border border-[#e8dfd5] bg-[#fbf8f5] p-4 text-left shadow-md transition-all duration-300 hover:border-[#9e1b1b]/50 hover:shadow-xl lg:col-span-3"
            >
              <div className="relative flex items-center justify-center overflow-hidden rounded-2xl bg-[#072412]/5 p-2">
                <img
                  src={spotify.images[3].src}
                  alt={spotify.images[3].alt}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="max-h-[310px] w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="pt-3">
                <span className="block text-[10px] font-semibold tracking-wider text-[#9e1b1b] uppercase">
                  {spotify.images[3].kicker}
                </span>
                <h5 className="font-editorial text-sm font-semibold text-[#1c1b1a]">
                  {spotify.images[3].title}
                </h5>
                <p className="mt-0.5 text-[11px] leading-relaxed text-[#6b665f]">
                  {spotify.images[3].description}
                </p>
              </div>
            </button>

            {/* Tobii Eye Tracking Heatmap Evidence */}
            <button
              type="button"
              onClick={() => onQuickViewModal('spotify')}
              className="group flex cursor-pointer flex-col justify-between overflow-hidden rounded-[28px] border border-[#e8dfd5] bg-[#fbf8f5] p-4 text-left shadow-md transition-all duration-300 hover:border-[#9e1b1b]/50 hover:shadow-xl lg:col-span-5"
            >
              <div className="relative flex items-center justify-center overflow-hidden rounded-2xl bg-black/5">
                <img
                  src={spotify.images[4].src}
                  alt={spotify.images[4].alt}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="h-auto w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between pt-3">
                <div>
                  <span className="block text-[10px] font-semibold tracking-wider text-[#9e1b1b] uppercase">
                    Empirical Validation
                  </span>
                  <h5 className="font-editorial text-sm font-semibold text-[#1c1b1a]">
                    Tobii Pro Eye Tracking Heatmap Analysis
                  </h5>
                </div>
                <span className="text-[10px] font-medium tracking-wider text-[#6b665f] uppercase">
                  N = Lab Cohort
                </span>
              </div>
            </button>

            {/* Research Insights Bullet Card */}
            <div className="flex flex-col justify-between rounded-[28px] border border-[#e8dfd5] bg-[#f4ede4]/80 p-6 lg:col-span-4">
              <div>
                <span className="mb-3 block text-[11px] font-semibold tracking-wider text-[#9e1b1b] uppercase">
                  Key Biometric Insights:
                </span>
                <ul className="space-y-3 text-xs text-[#1c1b1a]/90 sm:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#9e1b1b]">•</span>
                    <span>
                      <strong>Strongest fixation:</strong> Headline{' '}
                      <em>“Timeless Classics. Now Streaming.”</em> captured the
                      fastest gaze lock across all respondents.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#9e1b1b]">•</span>
                    <span>
                      <strong>Schema violation:</strong> Modern AirPods on Mona
                      Lisa and Girl with Pearl Earring caused deliberate repeat
                      gaze fixation and extended dwell time.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#9e1b1b]">•</span>
                    <span>
                      <strong>Brand saliency:</strong> Spotify green circular
                      insignia achieved rapid time-to-first-fixation without
                      cannibalizing visual narrative.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#9e1b1b]">•</span>
                    <span>
                      <strong>Receipt engagement:</strong> Heatmaps confirmed
                      eye sweeps down specific song titles and total minutes
                      listened.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-[#e8dfd5]/80 pt-4 text-xs text-[#6b665f]">
                <span>Methodology: Tobii Screen-based Eye Tracker</span>
                <button
                  type="button"
                  onClick={() => onOpenDetailPage('spotify')}
                  className="flex cursor-pointer items-center gap-1 font-semibold text-[#9e1b1b] hover:underline"
                >
                  Inspect Data <span>→</span>
                </button>
              </div>
            </div>
          </div>

          {renderScrollBackBar('Spotify')}
        </article>

        {/* Case Study 2: Rasa Feni */}
        <article
          id="project-rasa-feni"
          className={`scroll-mt-24 space-y-8 p-2 transition-all ${
            highlightedSlug === 'rasa-feni' ? 'project-arrival-highlight' : ''
          }`}
        >
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-6">
              <p className="text-[11px] font-semibold tracking-wider text-[#9e1b1b] uppercase">
                {rasa.category}
              </p>
              <h3 className="font-editorial text-3xl leading-tight text-[#1c1b1a] sm:text-4xl">
                {rasa.title}
              </h3>
              <p className="font-editorial text-lg italic text-[#9e1b1b]">
                {rasa.tagline}
              </p>
              <p className="text-sm leading-relaxed text-[#6b665f] sm:text-base">
                Conceptualised and designed a full-spectrum brand identity for a
                premium Goa Feni liquor label. The project reimagined
                traditional artisanal spirits as an aspirational luxury category
                through comprehensive visual storytelling across beachside,
                speakeasy, and fine-dining contexts:
              </p>

              <div className="grid grid-cols-2 gap-3 pt-1 text-xs text-[#1c1b1a]/90">
                <div className="rounded-2xl border border-[#e8dfd5] bg-[#f4ede4]/70 p-3.5">
                  <strong className="mb-0.5 block text-[#9e1b1b]">
                    Logo &amp; Typography
                  </strong>
                  Crafted heritage insignia evoking Goan Portuguese colonial
                  architecture and modern luxury.
                </div>
                <div className="rounded-2xl border border-[#e8dfd5] bg-[#f4ede4]/70 p-3.5">
                  <strong className="mb-0.5 block text-[#9e1b1b]">
                    Custom Packaging
                  </strong>
                  Embossed glass bottle design with artisanal cork seal and
                  minimal gold leaf foiling.
                </div>
                <div className="col-span-2 rounded-2xl border border-[#e8dfd5] bg-[#f4ede4]/70 p-3.5">
                  <strong className="mb-0.5 block text-[#9e1b1b]">
                    Multi-Context Lifestyle Campaign
                  </strong>
                  Visual campaign spanning golden hour beaches, artisanal craft
                  cocktail bars, smoky lounges, and chic modern rooftop lounges.
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenDetailPage('rasa-feni')}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#9e1b1b] px-5 py-2.5 text-xs font-semibold tracking-wider text-white uppercase shadow-xs transition-all hover:bg-[#7f1414]"
                >
                  <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>View Brand Identity Deck</span>
                </button>
              </div>
            </div>

            {/* Primary Hero Shot */}
            <div className="lg:col-span-6">
              <button
                type="button"
                onClick={() => onQuickViewModal('rasa-feni')}
                className="group relative block w-full cursor-pointer overflow-hidden rounded-[32px] border border-[#e8dfd5] bg-[#fbf8f5] text-left shadow-xl transition-all duration-300 hover:border-[#9e1b1b]/50 hover:shadow-2xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                  <EditorialImage
                    src={rasa.images[0].src}
                    alt={rasa.images[0].alt}
                    fallbackTitle="Rasa Feni Hero"
                    className="h-full w-full"
                    imgClassName="transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-[#1c1b1a]/20 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="flex items-center gap-1.5 rounded-full bg-[#fbf8f5]/90 px-4 py-2 text-xs font-semibold text-[#9e1b1b] shadow-md backdrop-blur-md">
                      <ZoomIn className="h-3.5 w-3.5" aria-hidden="true" />
                      View Presentation Slides
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-[#e8dfd5]/70 bg-[#fbf8f5]/95 p-4">
                  <div>
                    <span className="block text-[10px] font-semibold tracking-wider text-[#9e1b1b] uppercase">
                      {rasa.images[0].kicker}
                    </span>
                    <p className="text-xs font-medium text-[#1c1b1a]/80">
                      {rasa.images[0].title}
                    </p>
                  </div>
                  <span className="text-[10px] font-medium tracking-wider text-[#6b665f] uppercase">
                    Heritage
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Curated 4-Card Luxury Spirits Photography Showcase */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {rasa.images.slice(1).map((shot) => (
              <button
                key={shot.src}
                type="button"
                onClick={() => onQuickViewModal('rasa-feni')}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-[24px] border border-[#e8dfd5] bg-[#fbf8f5] text-left shadow-md transition-all duration-300 hover:border-[#9e1b1b]/50 hover:shadow-xl"
              >
                <div className="aspect-[3/4] w-full overflow-hidden bg-black/5">
                  <EditorialImage
                    src={shot.src}
                    alt={shot.alt}
                    fallbackTitle={shot.title ?? 'Rasa Feni Shot'}
                    className="h-full w-full"
                    imgClassName="transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="border-t border-[#e8dfd5]/60 bg-[#fbf8f5]/95 p-3.5">
                  <span className="block text-[10px] font-semibold tracking-wider text-[#9e1b1b] uppercase">
                    {shot.kicker}
                  </span>
                  <p className="truncate text-xs font-medium text-[#1c1b1a]/80">
                    {shot.title}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {renderScrollBackBar('Rasa Feni')}
        </article>

        {/* Case Study 3: Rozana Ki Baarat */}
        <article
          id="project-rozana"
          className={`grid scroll-mt-24 grid-cols-1 items-center gap-8 p-2 transition-all lg:grid-cols-12 lg:gap-12 ${
            highlightedSlug === 'rozana' ? 'project-arrival-highlight' : ''
          }`}
        >
          <div className="space-y-4 lg:col-span-6">
            <p className="text-[11px] font-semibold tracking-wider text-[#9e1b1b] uppercase">
              {rozana.category}
            </p>
            <h3 className="font-editorial text-3xl leading-tight text-[#1c1b1a] sm:text-4xl">
              {rozana.title}
            </h3>
            <p className="text-sm leading-relaxed text-[#6b665f] sm:text-base">
              A high-energy, shaadi-style street activation conceived for
              Rozana&apos;s Tier 3 and 4 store launches to drive viral footfall
              through FOMO, hyperlocal community energy, and cultural resonance.
            </p>

            <div className="space-y-2.5 rounded-[24px] border border-[#e8dfd5] bg-[#f4ede4]/70 p-5">
              <span className="block text-[11px] font-semibold tracking-wider text-[#9e1b1b] uppercase">
                Creative Mechanics:
              </span>
              <p className="text-xs leading-relaxed text-[#1c1b1a] sm:text-sm">
                Rozana marries <em>“Saste Daam”</em> in an authentic celebratory
                shaadi procession through the town!
              </p>
              <div className="grid grid-cols-2 gap-2 pt-1 text-xs text-[#6b665f]">
                <div>
                  <strong className="text-[#1c1b1a]">Rozana</strong> = Dulha
                  (Groom)
                </div>
                <div>
                  <strong className="text-[#1c1b1a]">Saste Daam</strong> =
                  Dulhan (Bride)
                </div>
                <div>
                  <strong className="text-[#1c1b1a]">Customers</strong> =
                  Baraatis
                </div>
                <div>
                  <strong className="text-[#1c1b1a]">Store</strong> = Shaadi ka
                  Mandap
                </div>
              </div>
              <p className="pt-1 text-xs text-[#6b665f]">
                Featured <strong>“The Wall of Fame Auto”</strong> adorned with
                local customer portraits, wedding-invite style promotional
                flyers, naach-gaana, and free wedding sweets.
              </p>
            </div>

            <div className="rounded-2xl border border-[#9e1b1b]/30 bg-[#9e1b1b]/5 p-3.5 text-xs leading-relaxed italic text-[#9e1b1b]">
              <strong>Note:</strong> Proposed internally during internship at
              Rozana. A near-identical shaadi-themed concept was later executed
              at scale by quick-commerce unicorn Zepto.
            </div>

            <div>
              <button
                type="button"
                onClick={() => onOpenDetailPage('rozana')}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#9e1b1b] px-5 py-2.5 text-xs font-semibold tracking-wider text-white uppercase shadow-xs transition-all hover:bg-[#7f1414]"
              >
                <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                <span>View Activation Deck &amp; Results</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <button
              type="button"
              onClick={() => onQuickViewModal('rozana')}
              className="group relative block w-full cursor-pointer overflow-hidden rounded-[32px] border border-[#e8dfd5] bg-[#fbf8f5] text-left shadow-xl transition-all duration-300 hover:border-[#9e1b1b]/50 hover:shadow-2xl"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-black/5 sm:aspect-[16/10]">
                <EditorialImage
                  src={rozana.images[0].src}
                  alt={rozana.images[0].alt}
                  fallbackTitle="Rozana Ki Baarat Slide"
                  className="h-full w-full"
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[#1c1b1a]/20 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="flex items-center gap-1.5 rounded-full bg-[#fbf8f5]/90 px-4 py-2 text-xs font-semibold text-[#9e1b1b] shadow-md backdrop-blur-md">
                    <ZoomIn className="h-3.5 w-3.5" aria-hidden="true" />
                    View Presentation Slide
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#e8dfd5]/70 bg-[#fbf8f5]/95 p-4">
                <div>
                  <span className="block text-[10px] font-semibold tracking-wider text-[#9e1b1b] uppercase">
                    {rozana.images[0].kicker}
                  </span>
                  <p className="text-xs font-medium text-[#1c1b1a]/80">
                    {rozana.images[0].title}
                  </p>
                </div>
                <span className="text-[10px] font-semibold tracking-wider text-[#9e1b1b] uppercase">
                  Tier 3/4 Activation
                </span>
              </div>
            </button>
          </div>

          <div className="lg:col-span-12">
            {renderScrollBackBar('Rozana Ki Baarat')}
          </div>
        </article>

        {/* Case Study 4: WE2 Dating App */}
        <article
          id="project-we2"
          className={`scroll-mt-24 space-y-8 p-2 transition-all ${
            highlightedSlug === 'we2' ? 'project-arrival-highlight' : ''
          }`}
        >
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-3 text-[11px] font-semibold tracking-wider text-[#9e1b1b] uppercase">
                {we2.category}
              </p>
              <h3 className="font-editorial text-3xl leading-tight text-[#1c1b1a] sm:text-4xl lg:text-5xl">
                {we2.title}
              </h3>
              <p className="font-editorial mt-2 text-lg italic text-[#9e1b1b]">
                {we2.tagline}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#6b665f] sm:text-base">
                Built on the core psychological insight that Gen Z is deeply
                fatigued by hyper-polished beauty filters and generic dating
                personas. WE2 reframes vulnerability as the ultimate dating
                superpower.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => onOpenDetailPage('we2')}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#9e1b1b] px-4 py-2.5 text-xs font-semibold tracking-wider text-white uppercase shadow-xs transition-all hover:bg-[#7f1414]"
              >
                <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                <span>View Complete Case Study</span>
              </button>
              <span className="text-[11px] font-medium tracking-wider text-[#6b665f] uppercase">
                Gen Z Psychology · Anti-Filter Hook
              </span>
            </div>
          </div>

          {/* Top Banner & Tagline Lockup Grid */}
          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-12">
            {/* Primary Manifesto Hero Banner */}
            <button
              type="button"
              onClick={() => onQuickViewModal('we2')}
              className="group flex cursor-pointer flex-col justify-between overflow-hidden rounded-[28px] border border-[#e8dfd5] bg-[#fbf8f5] p-3 text-left shadow-md transition-all duration-300 hover:border-[#9e1b1b]/50 hover:shadow-xl md:col-span-7"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black/5">
                <EditorialImage
                  src={we2.images[0].src}
                  alt={we2.images[0].alt}
                  fallbackTitle="WE2 Manifesto"
                  className="h-full w-full"
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[#1c1b1a]/20 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="flex items-center gap-1.5 rounded-full bg-[#fbf8f5]/90 px-3.5 py-1.5 text-xs font-semibold text-[#9e1b1b] shadow-md backdrop-blur-md">
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    Quick View
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3.5">
                <div>
                  <span className="block text-[10px] font-semibold tracking-wider text-[#9e1b1b] uppercase">
                    {we2.images[0].kicker}
                  </span>
                  <p className="text-xs font-medium text-[#1c1b1a]/80">
                    {we2.images[0].title}
                  </p>
                </div>
                <span className="text-[10px] font-medium tracking-wider text-[#6b665f] uppercase">
                  Hero
                </span>
              </div>
            </button>

            {/* Download & Tagline Hook Banner */}
            <button
              type="button"
              onClick={() => onQuickViewModal('we2')}
              className="group flex cursor-pointer flex-col justify-between overflow-hidden rounded-[28px] border border-[#e8dfd5] bg-[#fbf8f5] p-3 text-left shadow-md transition-all duration-300 hover:border-[#9e1b1b]/50 hover:shadow-xl md:col-span-5"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black/5">
                <EditorialImage
                  src={we2.images[1].src}
                  alt={we2.images[1].alt}
                  fallbackTitle="WE2 App CTA"
                  className="h-full w-full"
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[#1c1b1a]/20 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="flex items-center gap-1.5 rounded-full bg-[#fbf8f5]/90 px-3.5 py-1.5 text-xs font-semibold text-[#9e1b1b] shadow-md backdrop-blur-md">
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    Quick View
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3.5">
                <div>
                  <span className="block text-[10px] font-semibold tracking-wider text-[#9e1b1b] uppercase">
                    {we2.images[1].kicker}
                  </span>
                  <p className="text-xs font-medium text-[#1c1b1a]/80">
                    {we2.images[1].title}
                  </p>
                </div>
                <span className="text-[10px] font-semibold tracking-wider text-[#9e1b1b] uppercase">
                  CTA Hook
                </span>
              </div>
            </button>
          </div>

          {/* Bottom Multi-Card Campaign Concepts */}
          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-12">
            {we2.images.slice(2).map((concept) => (
              <button
                key={concept.src}
                type="button"
                onClick={() => onQuickViewModal('we2')}
                className="group flex cursor-pointer flex-col justify-between overflow-hidden rounded-[28px] border border-[#e8dfd5] bg-[#fbf8f5] p-3 text-left shadow-md transition-all duration-300 hover:border-[#9e1b1b]/50 hover:shadow-xl md:col-span-6"
              >
                <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-2xl bg-black/5 p-2">
                  <img
                    src={concept.src}
                    alt={concept.alt}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-[#1c1b1a]/20 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="flex items-center gap-1.5 rounded-full bg-[#fbf8f5]/90 px-3.5 py-1.5 text-xs font-semibold text-[#9e1b1b] shadow-md backdrop-blur-md">
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      Quick View
                    </span>
                  </div>
                </div>
                <div className="p-3.5">
                  <span className="block text-[10px] font-semibold tracking-wider text-[#9e1b1b] uppercase">
                    {concept.kicker}
                  </span>
                  <h4 className="font-editorial mt-0.5 text-base font-semibold text-[#1c1b1a]">
                    {concept.title}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-[#6b665f]">
                    {concept.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Key Psychology Takeaway Quote */}
          <div className="flex flex-col justify-between gap-4 rounded-[24px] border border-[#e8dfd5] bg-[#f4ede4]/80 p-6 sm:flex-row sm:items-center">
            <p className="font-editorial max-w-3xl text-sm leading-relaxed italic text-[#1c1b1a] sm:text-base">
              “Most dating apps tell you to be less. WE2 says be more — more
              weird, more real, more you. If they can&apos;t spell
              ‘sapiosexual,’ they&apos;re not your type.”
            </p>
            <button
              type="button"
              onClick={() => onOpenDetailPage('we2')}
              className="cursor-pointer rounded-full border border-[#9e1b1b]/20 bg-[#9e1b1b]/10 px-4 py-2 text-center text-[11px] font-semibold tracking-wider text-[#9e1b1b] uppercase whitespace-nowrap transition-all hover:bg-[#9e1b1b] hover:text-white"
            >
              View Deck (PPT)
            </button>
          </div>

          {renderScrollBackBar('WE2')}
        </article>
      </div>
    </section>
  );
}
