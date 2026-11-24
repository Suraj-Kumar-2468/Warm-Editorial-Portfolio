import { useCallback, useEffect, useState } from 'react';
import { ContourBackground } from './components/ContourBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutAndCuriositiesSection } from './components/AboutAndCuriositiesSection';
import { BrandStrategySection } from './components/BrandStrategySection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ProjectDetailView } from './components/ProjectDetailView';
import { PROFILE } from './data/profile';
import { getProjectBySlug } from './data/projects';

function parseSlugFromPath(pathname: string): string | null {
  const match = pathname.match(/^\/work\/([^/]+)\/?$/);
  return match ? decodeURIComponent(match[1]) : null;
}

export default function App() {
  const [activeSlug, setActiveSlug] = useState<string | null>(() =>
    parseSlugFromPath(window.location.pathname)
  );
  const [modalSlug, setModalSlug] = useState<string | null>(null);
  const [highlightedSlug, setHighlightedSlug] = useState<string | null>(null);

  const activeProject = activeSlug ? getProjectBySlug(activeSlug) : undefined;
  const modalProject = modalSlug ? getProjectBySlug(modalSlug) ?? null : null;

  useEffect(() => {
    const handlePopState = () => {
      setActiveSlug(parseSlugFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (activeProject) {
      document.title = `${activeProject.title} | ${PROFILE.fullName}`;
      if (metaDesc) {
        metaDesc.setAttribute('content', activeProject.overview);
      }
    } else {
      document.title = `${PROFILE.fullName} — ${PROFILE.subtitleCaps}`;
      if (metaDesc) {
        metaDesc.setAttribute('content', PROFILE.heroBio);
      }
    }
  }, [activeProject]);

  const smoothScrollToElement = useCallback((elementId: string) => {
    const target = document.getElementById(elementId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const navigateHome = useCallback(
    (scrollToId?: string, highlightSlug?: string) => {
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', '/');
      }
      setActiveSlug(null);

      if (scrollToId) {
        window.requestAnimationFrame(() => {
          window.setTimeout(() => {
            smoothScrollToElement(scrollToId);
            if (highlightSlug) {
              setHighlightedSlug(highlightSlug);
              window.setTimeout(() => setHighlightedSlug(null), 1600);
            }
          }, 60);
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [smoothScrollToElement]
  );

  const navigateToSection = useCallback(
    (sectionId: string) => {
      if (activeSlug) {
        navigateHome(sectionId);
      } else {
        smoothScrollToElement(sectionId);
      }
    },
    [activeSlug, navigateHome, smoothScrollToElement]
  );

  const openProjectDetailPage = useCallback((slug: string) => {
    setModalSlug(null);
    const targetPath = `/work/${encodeURIComponent(slug)}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    setActiveSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleScrollToProject = useCallback(
    (anchorId: string, slug: string) => {
      smoothScrollToElement(anchorId);
      setHighlightedSlug(slug);
      window.setTimeout(() => {
        setHighlightedSlug((prev) => (prev === slug ? null : prev));
      }, 1600);
    },
    [smoothScrollToElement]
  );

  return (
    <div className="relative min-h-screen bg-[#fbf8f5] font-sans text-[#1c1b1a] antialiased selection:bg-[#9e1b1b] selection:text-white">
      <ContourBackground />

      <Navbar
        isDetailView={Boolean(activeProject)}
        onNavigateHome={() => navigateHome()}
        onNavigateSection={navigateToSection}
      />

      <main className="pt-24 lg:pt-28">
        {activeProject ? (
          <ProjectDetailView
            project={activeProject}
            onBackToProjects={(anchorId) =>
              navigateHome(anchorId ?? 'projects', activeProject.slug)
            }
            onBackToBrands={() => navigateHome('brands')}
            onSelectProject={openProjectDetailPage}
          />
        ) : (
          <>
            <HeroSection
              onExploreWork={() => navigateToSection('projects')}
              onNavigateExperience={() => navigateToSection('experience')}
              onNavigateContact={() => navigateToSection('contact')}
            />

            <AboutAndCuriositiesSection />

            <BrandStrategySection
              onScrollToProject={handleScrollToProject}
              onOpenProjectDetail={openProjectDetailPage}
            />

            <ProjectsSection
              highlightedSlug={highlightedSlug}
              onQuickViewModal={(slug) => setModalSlug(slug)}
              onOpenDetailPage={openProjectDetailPage}
              onScrollBackToBrands={() => smoothScrollToElement('brands')}
              onScrollBackToProjects={() => smoothScrollToElement('projects')}
            />

            <ExperienceSection />

            <ContactSection />
          </>
        )}
      </main>

      <footer className="border-t border-[#e8dfd5]/70 px-6 py-8 text-center text-xs tracking-widest text-[#6b665f]/80 uppercase">
        <p>
          © 2026 {PROFILE.fullName} — {PROFILE.subtitleCaps} · BIMTECH
        </p>
      </footer>

      <ProjectDetailModal
        project={modalProject}
        onClose={() => setModalSlug(null)}
        onOpenFullPage={openProjectDetailPage}
        onDiscussCampaign={() => navigateToSection('contact')}
      />
    </div>
  );
}
