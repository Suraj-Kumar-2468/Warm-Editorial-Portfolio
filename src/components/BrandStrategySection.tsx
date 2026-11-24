import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react';
import { BRAND_STRATEGY_CARDS, type BrandCardItem } from '../data/projects';

interface BrandStrategySectionProps {
  onScrollToProject: (anchorId: string, slug: string) => void;
  onOpenProjectDetail: (slug: string) => void;
}

export function BrandStrategySection({
  onScrollToProject,
  onOpenProjectDetail,
}: BrandStrategySectionProps) {
  const renderCard = (brand: BrandCardItem, index: number) => {
    const isLastOdd = index === BRAND_STRATEGY_CARDS.length - 1;

    if (brand.actionType === 'canva' && brand.canvaUrl) {
      return (
        <div
          key={brand.slug}
          className={`group relative flex min-h-[195px] flex-col items-center justify-between rounded-[22px] border border-[#e8dfd5] bg-[#fbf8f5]/90 p-4 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9e1b1b]/60 hover:shadow-lg ${
            isLastOdd ? 'col-span-2 sm:col-span-1' : ''
          }`}
        >
          <a
            href={brand.canvaUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={`Open ${brand.name} Presentation on Canva`}
            className="flex w-full flex-1 flex-col items-center justify-between"
          >
            <div className="relative flex h-16 w-full items-center justify-center rounded-xl bg-[#f4ede4]/60 p-1.5 transition-colors group-hover:bg-[#9e1b1b]/5">
              <img
                src={brand.logoUrl}
                alt={brand.logoAlt}
                referrerPolicy="no-referrer"
                loading="lazy"
                className={`${brand.logoHeightClass} w-auto rounded-md object-contain transition-transform duration-300 group-hover:scale-105`}
              />
              <ArrowUpRight
                className="absolute top-1.5 right-1.5 h-3.5 w-3.5 text-[#6b665f] opacity-0 transition-opacity group-hover:text-[#9e1b1b] group-hover:opacity-100"
                aria-hidden="true"
              />
            </div>

            <div className="mt-2.5 w-full border-t border-[#e8dfd5]/60 pt-2">
              <span className="font-editorial block truncate text-sm font-bold text-[#1c1b1a] transition-colors group-hover:text-[#9e1b1b]">
                {brand.name} ↗
              </span>
              <span className="mt-0.5 block text-[9px] font-medium tracking-widest text-[#9e1b1b] uppercase">
                {brand.subtitle}
              </span>
            </div>
          </a>

          <button
            type="button"
            onClick={() => onOpenProjectDetail(brand.slug)}
            className="mt-2 inline-flex cursor-pointer items-center gap-1 text-[10px] font-medium text-[#6b665f] transition-colors hover:text-[#9e1b1b]"
          >
            <FileText className="h-3 w-3" aria-hidden="true" />
            <span>Case Study</span>
          </button>
        </div>
      );
    }

    return (
      <button
        key={brand.slug}
        type="button"
        onClick={() =>
          brand.scrollTargetId &&
          onScrollToProject(brand.scrollTargetId, brand.slug)
        }
        title={`Jump to ${brand.name} Case Study`}
        className={`group relative flex min-h-[195px] cursor-pointer flex-col items-center justify-between rounded-[22px] border border-[#e8dfd5] bg-[#fbf8f5]/90 p-4 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9e1b1b]/60 hover:shadow-lg ${
          isLastOdd ? 'col-span-2 sm:col-span-1' : ''
        }`}
      >
        <div className="relative flex h-16 w-full items-center justify-center rounded-xl bg-[#f4ede4]/60 p-1.5 transition-colors group-hover:bg-[#9e1b1b]/5">
          <img
            src={brand.logoUrl}
            alt={brand.logoAlt}
            referrerPolicy="no-referrer"
            loading="lazy"
            className={`${brand.logoHeightClass} w-auto rounded-md object-contain transition-transform duration-300 group-hover:scale-105`}
          />
          <ArrowDown
            className="absolute top-1.5 right-1.5 h-3.5 w-3.5 text-[#6b665f] opacity-0 transition-opacity group-hover:text-[#9e1b1b] group-hover:opacity-100"
            aria-hidden="true"
          />
        </div>

        <div className="mt-2.5 w-full border-t border-[#e8dfd5]/60 pt-2">
          <span className="font-editorial block truncate text-sm font-bold text-[#1c1b1a] transition-colors group-hover:text-[#9e1b1b]">
            {brand.name} ↓
          </span>
          <span className="mt-0.5 block text-[9px] font-medium tracking-widest text-[#9e1b1b] uppercase">
            {brand.subtitle}
          </span>
        </div>

        <span className="mt-2 text-[10px] font-medium text-[#6b665f]">
          Scroll to section
        </span>
      </button>
    );
  };

  return (
    <section
      id="brands"
      className="mx-auto max-w-6xl scroll-mt-24 border-t border-[#e8dfd5] px-6 py-16 md:py-24"
    >
      <div className="mb-12 text-center">
        <span className="text-[11px] font-semibold tracking-[0.3em] text-[#9e1b1b] uppercase">
          Strategic Footprint
        </span>
        <h2 className="font-editorial mt-2 text-3xl text-[#1c1b1a] sm:text-4xl">
          Brands &amp; Strategy Work
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-[#6b665f] sm:text-base">
          Client campaign strategy plans and research projects worked on at
          Reelax, Rozana, and BIMTECH. Click Woodsmen, Malabar, Youthnic, or
          Godrej to open client presentation decks in Canva, or click Rozana,
          Spotify, and Rasa Feni to jump to their case studies below.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
        {BRAND_STRATEGY_CARDS.map((brand, idx) => renderCard(brand, idx))}
      </div>
    </section>
  );
}
