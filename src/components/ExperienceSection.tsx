import { PROFILE } from '../data/profile';

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-4xl scroll-mt-24 px-6 py-20 md:py-28"
    >
      <div className="mb-12">
        <span className="text-[11px] font-semibold tracking-[0.3em] text-[#9e1b1b] uppercase">
          Career History
        </span>
        <h2 className="font-editorial mt-1 text-3xl tracking-wide text-[#1c1b1a] sm:text-4xl">
          “A little work experience never hurt anybody.”
        </h2>
      </div>

      <div className="space-y-12">
        {PROFILE.experience.map((item) => (
          <div
            key={item.id}
            className="rounded-[32px] border border-[#e8dfd5] bg-[#fbf8f5]/85 p-8 shadow-xs"
          >
            <div className="mb-5 flex flex-col justify-between gap-2 border-b border-[#e8dfd5]/70 pb-4 sm:flex-row sm:items-baseline">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-editorial text-2xl text-[#1c1b1a]">
                    {item.company}
                  </h3>
                  <span className="text-xs tracking-widest text-[#6b665f] uppercase">
                    | {item.location}
                  </span>
                </div>
                <p className="font-editorial mt-0.5 text-base italic text-[#9e1b1b]">
                  {item.role}
                </p>
              </div>
              <span className="text-xs font-semibold tracking-widest text-[#1c1b1a] uppercase tabular-nums">
                {item.period}
              </span>
            </div>

            <p className="mb-4 text-sm leading-relaxed text-[#6b665f]">
              {item.summary}
            </p>

            <ul className="space-y-2 text-xs leading-relaxed text-[#1c1b1a]/85 sm:text-sm">
              {item.highlights.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-bold text-[#9e1b1b]">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
