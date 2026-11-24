import { Instagram, Linkedin } from 'lucide-react';
import { PROFILE } from '../data/profile';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-4xl scroll-mt-24 px-6 py-24 text-center"
    >
      <span className="text-[11px] font-semibold tracking-[0.3em] text-[#9e1b1b] uppercase">
        Collaboration
      </span>
      <h2 className="font-editorial mt-2 mb-4 text-4xl text-[#1c1b1a] sm:text-5xl">
        Let&apos;s build something unforgettable.
      </h2>
      <p className="mx-auto mb-6 max-w-md text-sm text-[#6b665f] sm:text-base">
        Open for brand strategy roles, creative campaign consulting, and
        marketing collaborations.
      </p>

      <div className="flex flex-col items-center gap-2">
        <a
          href={`mailto:${PROFILE.contact.primaryEmail}`}
          className="font-script inline-block pb-1 text-5xl tracking-wide text-[#9e1b1b] transition-colors hover:text-[#7f1414] sm:text-7xl"
        >
          {PROFILE.contact.primaryEmail}
        </a>
        <a
          href={`mailto:${PROFILE.contact.academicEmail}`}
          className="text-xs font-medium text-[#6b665f] transition-colors hover:text-[#9e1b1b] sm:text-sm"
        >
          {PROFILE.contact.academicEmail}
        </a>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs tracking-[0.2em] text-[#6b665f] uppercase sm:gap-8">
        <a
          href={PROFILE.contact.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[40px] items-center gap-1.5 font-medium transition-colors hover:text-[#9e1b1b]"
        >
          <Linkedin className="h-4 w-4" aria-hidden="true" />
          <span>LinkedIn</span>
        </a>

        <a
          href={PROFILE.contact.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[40px] items-center gap-1.5 font-medium transition-colors hover:text-[#9e1b1b]"
        >
          <Instagram className="h-4 w-4" aria-hidden="true" />
          <span>Instagram</span>
        </a>
      </div>
    </section>
  );
}
