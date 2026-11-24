import { useEffect } from 'react';
import { ArrowRight, ArrowUpRight, MessageSquare, X } from 'lucide-react';
import { type ProjectDetail } from '../data/projects';

interface ProjectDetailModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
  onOpenFullPage: (slug: string) => void;
  onDiscussCampaign: () => void;
}

export function ProjectDetailModal({
  project,
  onClose,
  onOpenFullPage,
  onDiscussCampaign,
}: ProjectDetailModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1c1b1a]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Dialog Window */}
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="flex min-h-full items-center justify-center p-3 sm:p-6 md:p-8"
          onClick={onClose}
        >
          <div
            className="relative my-8 w-full max-w-4xl transform rounded-[32px] border border-[#e8dfd5] bg-[#fbf8f5] p-6 shadow-2xl transition-all sm:rounded-[38px] sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-[#e8dfd5] pb-5">
              <div>
                <span className="mb-1 block text-[10px] font-semibold tracking-widest text-[#9e1b1b] uppercase">
                  {project.category}
                </span>
                <h3
                  id="modal-project-title"
                  className="font-editorial text-2xl font-semibold text-[#1c1b1a] sm:text-3xl"
                >
                  {project.title}
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close modal"
                onClick={onClose}
                className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#e8dfd5] bg-[#f4ede4]/60 text-[#6b665f] transition-colors hover:bg-[#9e1b1b] hover:text-white"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Body */}
            <div className="mt-6 space-y-6">
              <p className="font-editorial text-lg italic text-[#9e1b1b]">
                {project.tagline}
              </p>

              <p className="text-sm leading-relaxed text-[#6b665f]">
                {project.overview}
              </p>

              <div className="rounded-2xl border border-[#9e1b1b]/30 bg-[#9e1b1b]/5 p-5">
                <span className="mb-1 block text-[11px] font-semibold tracking-wider text-[#9e1b1b] uppercase">
                  Core Strategic Insight:
                </span>
                <p className="font-editorial text-sm leading-relaxed italic text-[#1c1b1a]/90">
                  {project.strategy}
                </p>
              </div>

              {project.images.length > 0 && (
                <div className="space-y-4">
                  <span className="block text-[11px] font-semibold tracking-wider text-[#9e1b1b] uppercase">
                    Case Study Visual Evidence &amp; Slides:
                  </span>
                  <div
                    className={`grid grid-cols-1 gap-4 ${
                      project.images.length > 1 ? 'sm:grid-cols-2' : ''
                    }`}
                  >
                    {project.images.map((img) => (
                      <div
                        key={img.src}
                        className="group overflow-hidden rounded-2xl border border-[#e8dfd5] bg-[#f4ede4]/50"
                      >
                        <div className="flex aspect-[16/10] items-center justify-center overflow-hidden bg-black/5 p-2">
                          <img
                            src={img.src}
                            alt={img.alt}
                            referrerPolicy="no-referrer"
                            className="h-full w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <p className="border-t border-[#e8dfd5]/70 p-3 text-[11px] leading-snug text-[#6b665f]">
                          {img.caption}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="rounded-2xl border border-[#e8dfd5] bg-[#f4ede4]/70 p-5">
                <span className="mb-2 block text-[11px] font-semibold tracking-wider text-[#9e1b1b] uppercase">
                  Key Deliverables &amp; Strategic Output:
                </span>
                <ul className="space-y-1.5 text-xs text-[#1c1b1a]/90 sm:text-sm">
                  {project.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#9e1b1b]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#e8dfd5] pt-5">
              <div className="text-xs text-[#6b665f]">
                <span>Manasvi Sachan Portfolio Archive</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="cursor-pointer rounded-full border border-[#e8dfd5] px-5 py-2 text-xs font-medium tracking-wider text-[#6b665f] uppercase transition-colors hover:border-[#9e1b1b] hover:text-[#9e1b1b]"
                >
                  Close View
                </button>

                {project.presentation && (
                  <a
                    href={project.presentation.canvaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#9e1b1b]/40 px-5 py-2 text-xs font-semibold tracking-wider text-[#9e1b1b] uppercase transition-colors hover:bg-[#9e1b1b]/5"
                  >
                    <span>Open Canva</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => onOpenFullPage(project.slug)}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-[#1c1b1a]/25 px-5 py-2 text-xs font-semibold tracking-wider text-[#1c1b1a] uppercase transition-colors hover:border-[#9e1b1b] hover:text-[#9e1b1b]"
                >
                  <span>Full Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onDiscussCampaign();
                  }}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-[#9e1b1b] px-5 py-2 text-xs font-semibold tracking-wider text-white uppercase shadow-xs transition-all hover:bg-[#7f1414]"
                >
                  <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Discuss Campaign</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
