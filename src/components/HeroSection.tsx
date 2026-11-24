import { PROFILE } from '../data/profile';
import { EditorialImage } from './EditorialImage';

interface HeroSectionProps {
  onExploreWork: () => void;
  onNavigateExperience: () => void;
  onNavigateContact: () => void;
}

export function HeroSection({
  onExploreWork,
  onNavigateExperience,
  onNavigateContact,
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-[85vh] max-w-6xl items-center px-6 py-12 lg:py-20"
    >
      <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Left: Portrait Squircle Card with Authentic Photo */}
        <div className="relative order-2 flex justify-center lg:order-1 lg:col-span-5 lg:justify-start">
          <div className="floating-squircle relative aspect-[4/5] w-64 rounded-[42px] border-2 border-[#9e1b1b]/35 bg-[#fbf8f5] p-2.5 shadow-2xl sm:w-72 md:w-80 lg:w-[350px]">
            <div className="relative h-full w-full overflow-hidden rounded-[34px] bg-amber-500/15 shadow-inner">
              <EditorialImage
                src={PROFILE.profileImageUrl}
                alt={PROFILE.profileImageAlt}
                fallbackTitle={PROFILE.fullName}
                priority
                className="h-full w-full"
                imgClassName="object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1c1b1a]/75 via-transparent to-transparent"
              />
              <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between text-white/95">
                <span className="text-[11px] font-semibold tracking-widest uppercase drop-shadow-md">
                  {PROFILE.heroBadgeLeft}
                </span>
                <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-medium tracking-wider uppercase backdrop-blur-md">
                  {PROFILE.heroBadgeRight}
                </span>
              </div>
            </div>

            {/* Floating Tag Badge */}
            <div className="absolute -right-3 -bottom-3 flex items-center gap-1.5 rounded-full border border-[#e8dfd5] bg-[#fbf8f5]/95 px-4 py-2 text-center shadow-md backdrop-blur">
              <span className="font-editorial text-sm font-semibold italic text-[#9e1b1b]">
                BIMTECH
              </span>
              <span className="text-[10px] font-medium tracking-wider text-[#6b665f] uppercase">
                Marketing Lab
              </span>
            </div>
          </div>
        </div>

        {/* Right: Grand Display Typography */}
        <div className="order-1 flex flex-col items-center text-center lg:order-2 lg:col-span-7 lg:items-start lg:text-left">
          <div>
            <div className="flex flex-wrap items-baseline justify-center gap-2.5 lg:justify-start">
              <h1 className="font-script select-none text-7xl leading-[0.88] text-[#9e1b1b] sm:text-8xl lg:text-[104px]">
                {PROFILE.firstName}
              </h1>
              <span className="font-editorial -mt-2 text-3xl font-light tracking-wide text-[#1c1b1a] sm:text-4xl">
                {PROFILE.lastName}
              </span>
            </div>
            <p className="font-caps mt-4 text-base font-medium tracking-[0.24em] text-[#1c1b1a] uppercase sm:mt-5 sm:text-lg md:text-xl">
              {PROFILE.subtitleCaps}
            </p>
          </div>

          <p className="font-editorial mt-5 max-w-xl text-lg leading-relaxed italic text-[#6b665f] sm:text-xl">
            {PROFILE.heroBio}
          </p>

          {/* Primary CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <button
              type="button"
              onClick={onExploreWork}
              className="cursor-pointer rounded-full bg-[#9e1b1b] px-7 py-3 text-xs font-semibold tracking-[0.2em] text-white uppercase shadow-md transition-all hover:bg-[#7f1414] hover:shadow-lg whitespace-nowrap shrink-0"
            >
              Explore Work
            </button>
            <button
              type="button"
              onClick={onNavigateExperience}
              className="cursor-pointer rounded-full border border-[#2d3037]/40 px-7 py-3 text-xs font-medium tracking-[0.2em] text-[#1c1b1a] uppercase transition-all hover:border-[#9e1b1b] hover:text-[#9e1b1b] whitespace-nowrap shrink-0"
            >
              Experience
            </button>
            <button
              type="button"
              onClick={onNavigateContact}
              className="cursor-pointer rounded-full border border-[#9e1b1b]/30 px-7 py-3 text-xs font-medium tracking-[0.2em] text-[#9e1b1b] uppercase transition-all hover:bg-[#9e1b1b]/5 whitespace-nowrap shrink-0"
            >
              Get In Touch
            </button>
          </div>

          {/* Quick Pillars Row */}
          <div className="mt-8 w-full max-w-lg border-t border-[#e8dfd5] pt-8">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs tracking-widest text-[#6b665f] uppercase lg:justify-start">
              {PROFILE.heroPillars.map((pillar, index) => (
                <span key={pillar} className="inline-flex items-center gap-3">
                  <span className="font-medium text-[#1c1b1a]">{pillar}</span>
                  {index < PROFILE.heroPillars.length - 1 && (
                    <span aria-hidden="true" className="text-[#9e1b1b]">
                      •
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
