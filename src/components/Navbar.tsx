import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE } from '../data/profile';

interface NavbarProps {
  isDetailView: boolean;
  onNavigateHome: () => void;
  onNavigateSection: (sectionId: string) => void;
}

const NAV_LINKS = [
  { label: 'About', sectionId: 'about' },
  { label: 'Interests', sectionId: 'curiosities' },
  { label: 'Brands', sectionId: 'brands' },
  { label: 'Projects', sectionId: 'projects' },
  { label: 'Experience', sectionId: 'experience' },
  { label: 'Contact', sectionId: 'contact' },
];

export function Navbar({
  isDetailView,
  onNavigateHome,
  onNavigateSection,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = (sectionId: string) => {
    setMobileOpen(false);
    onNavigateSection(sectionId);
  };

  const handleBrandClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setMobileOpen(false);
    if (isDetailView) {
      onNavigateHome();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-[#e8dfd5]/70 bg-[#fbf8f5]/90 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-6">
        <a
          href="/"
          onClick={handleBrandClick}
          className="group flex shrink-0 items-center gap-2 whitespace-nowrap"
        >
          <span className="font-script inline-block pt-1 text-4xl leading-none text-[#9e1b1b] transition-transform group-hover:scale-105 lg:text-5xl">
            {PROFILE.firstName}
          </span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 text-[11px] font-medium tracking-[0.22em] text-[#6b665f] uppercase md:flex"
        >
          {NAV_LINKS.map((item) => (
            <button
              key={item.sectionId}
              type="button"
              onClick={() => handleLinkClick(item.sectionId)}
              className="cursor-pointer whitespace-nowrap shrink-0 transition-colors hover:text-[#9e1b1b]"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => handleLinkClick('contact')}
            className="hidden cursor-pointer rounded-full border border-[#9e1b1b]/50 px-5 py-2 text-[11px] font-medium tracking-[0.2em] text-[#9e1b1b] uppercase whitespace-nowrap shrink-0 shadow-sm transition-all hover:bg-[#9e1b1b] hover:text-white sm:inline-flex"
          >
            Get in Touch
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#e8dfd5] bg-[#fbf8f5] text-[#1c1b1a] transition-colors hover:border-[#9e1b1b] hover:text-[#9e1b1b] md:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="border-b border-[#e8dfd5] bg-[#fbf8f5] px-6 pb-6 pt-2 shadow-xl md:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {NAV_LINKS.map((item) => (
              <button
                key={item.sectionId}
                type="button"
                onClick={() => handleLinkClick(item.sectionId)}
                className="flex min-h-[44px] cursor-pointer items-center border-b border-[#e8dfd5]/70 text-left text-xs font-semibold tracking-[0.2em] text-[#1c1b1a] uppercase transition-colors hover:text-[#9e1b1b]"
              >
                {item.label}
              </button>
            ))}

            <div className="mt-4 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => handleLinkClick('contact')}
                className="inline-flex min-h-[44px] w-full cursor-pointer items-center justify-center rounded-full bg-[#9e1b1b] px-5 py-2.5 text-xs font-semibold tracking-[0.2em] text-white uppercase transition-colors hover:bg-[#7f1414]"
              >
                Get in Touch
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
