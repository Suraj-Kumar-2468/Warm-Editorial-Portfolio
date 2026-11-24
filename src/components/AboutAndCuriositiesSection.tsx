import { PROFILE } from '../data/profile';

export function AboutAndCuriositiesSection() {
  return (
    <>
      {/* Authentic About / Philosophy Section */}
      <section
        id="about"
        className="relative mx-auto max-w-4xl scroll-mt-24 px-6 py-20 md:py-28"
      >
        <div className="flex flex-col items-center text-center">
          <span className="text-[11px] font-semibold tracking-[0.3em] text-[#9e1b1b] uppercase">
            {PROFILE.about.kicker}
          </span>
          <h2 className="font-editorial mt-3 max-w-2xl text-3xl leading-tight italic text-[#1c1b1a] [text-wrap:balance] sm:text-4xl md:text-5xl">
            {PROFILE.about.heading}
          </h2>

          <div className="mt-8 max-w-2xl space-y-4 text-center text-base leading-relaxed font-normal text-[#6b665f] sm:text-lg">
            {PROFILE.about.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
            <p className="font-editorial text-lg italic text-[#1c1b1a] sm:text-xl">
              {PROFILE.about.closingQuote}
            </p>
          </div>

          <div className="mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-medium text-[#1c1b1a]/85">
            {PROFILE.about.skills.map((skill, idx) => (
              <span key={skill} className="inline-flex items-center gap-3">
                <span>{skill}</span>
                {idx < PROFILE.about.skills.length - 1 && (
                  <span aria-hidden="true" className="text-[#9e1b1b]">
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Core Interests (Curiosities) Section */}
      <section
        id="curiosities"
        className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16 md:py-24"
      >
        <div className="mb-14 text-center">
          <span className="text-[11px] font-semibold tracking-[0.3em] text-[#9e1b1b] uppercase">
            Focus &amp; Curiosity
          </span>
          <h2 className="font-editorial mt-2 text-3xl text-[#1c1b1a] sm:text-4xl md:text-5xl">
            Things I like doing
          </h2>
          <p className="font-editorial mt-2 text-lg italic text-[#6b665f]">
            (and would happily talk about all day)
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROFILE.curiosities.map((item) => (
            <div
              key={item.number}
              className={`rounded-[28px] border border-[#e8dfd5] bg-[#fbf8f5]/80 p-7 transition-all duration-200 hover:border-[#9e1b1b]/40 hover:shadow-md ${
                item.wide ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <span className="font-editorial mb-3 block text-3xl font-semibold italic text-[#9e1b1b]">
                {item.number}
              </span>
              <h3 className="font-editorial mb-2 text-xl text-[#1c1b1a]">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#6b665f]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
