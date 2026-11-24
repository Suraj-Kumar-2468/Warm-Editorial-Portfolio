export interface CuriosityItem {
  number: string;
  title: string;
  description: string;
  wide?: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
}

export const PROFILE = {
  firstName: 'Manasvi',
  lastName: 'Sachan',
  fullName: 'Manasvi Sachan',
  subtitleCaps: 'Marketing & Brand Strategy Portfolio',
  heroBio:
    'PGDM Marketing graduate from BIMTECH with a curiosity for what makes people notice, connect with, and remember brands. Exploring the intersection of consumer behaviour, creativity, and strategy.',
  profileImageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDX4gnQslGDvqN0S1vk3aQbHmYZOszNjTT1BwH9KRjV3sLwCaoZDHlossoeNRDG6PUt-RWz42z08P9xq3UPmTr2s4U3FM_a23455F6eg6ittFZo8EOLBaQyp3IDJYd1GihYKwh28HibBIH4TRTlyzSx89pcPoefea8ni0fILITtvHb5I7e3ifVEkpvJcTgrd6AU-cp8AFINbT-6O9O-9AR5F3x6drw7QKISu3cuItSCJ4yidHm6vjGd',
  profileImageAlt:
    'Manasvi Sachan in sunglasses smiling in warm golden light',
  heroBadgeLeft: "BIMTECH PGDM '26",
  heroBadgeRight: 'Marketing Strategist',
  heroPillars: [
    'Consumer Behaviour',
    'Brand Concepts',
    'Campaign Strategy',
    'Visual Identity',
  ],
  about: {
    kicker: 'About The Strategist',
    heading: "“So, who's the girl behind all these ideas?”",
    paragraphs: [
      "I'm a PGDM Marketing graduate from BIMTECH with a curiosity for what makes people notice, connect with and remember brands.",
      "I enjoy exploring the intersection of consumer behaviour, creativity and strategy — whether that's understanding why an advertisement works, developing a brand concept from scratch, or turning an insight into a campaign idea.",
    ],
    closingQuote:
      "I've explored marketing through agency experience, academic projects, independent content creation, and a lot of observing brands in the wild. Basically, marketing is not just what I studied. It's what I naturally find myself thinking about.",
    skills: [
      'Eye Tracking Research',
      'Creative Direction',
      'Brand Positioning',
      'Guerrilla Activations',
      'Consumer Insights',
    ],
  },
  curiosities: [
    {
      number: '01',
      title: 'Understanding people',
      description:
        'Consumer behaviour, audience insights, and the little subconscious cues that influence decisions and engagement.',
    },
    {
      number: '02',
      title: 'Building brand stories',
      description:
        'Positioning, brand communication frameworks, and creating ideas and narratives people can emotionally connect with.',
    },
    {
      number: '03',
      title: 'Thinking in campaigns',
      description:
        'Turning briefs and observations into creative concepts, multi-channel activations, and strategic marketing plans.',
    },
    {
      number: '04',
      title: 'Making ideas happen',
      description:
        'Working collaboratively with cross-functional teams, communicating with clients, and bringing high-level campaign plans closer to execution.',
    },
    {
      number: '05',
      title: 'Decoding the internet',
      description:
        'Analysing advertisements, dissecting cultural shifts, bold brand moves, and modern marketing trends through independent content and visual breakdowns.',
      wide: true,
    },
  ] as CuriosityItem[],
  education: {
    degree: 'PGDM Marketing (2024 - 2026) · BIMTECH',
    details:
      'Specialisation in Consumer Behaviour, Creative Brand Strategy, Quantitative Eye-Tracking Research.',
  },
  competencies:
    'Eye Tracking (Tobii Pro), Campaign Storyboarding, Influencer Strategy, Brand Architecture, Market & Trend Decoding.',
  experience: [
    {
      id: 'reelax',
      company: 'REELAX',
      location: 'Noida',
      role: 'Business Development Executive',
      period: '2026',
      summary:
        'Influencer marketing agency coordinating end-to-end client communication, campaign strategy planning, and creator execution.',
      highlights: [
        'Coordinated influencer marketing campaigns from client briefings to final execution.',
        'Developed campaign concepts, strategic recommendations, and high-impact client presentations.',
        'Identified and curated vetted creator profiles tailored to nuanced campaign criteria.',
        'Managed seamless client communication, production timelines, and cross-functional team coordination.',
        'Supported business development pitches with creative concepts and data-backed campaign hooks.',
      ],
    },
    {
      id: 'rozana',
      company: 'ROZANA',
      location: 'Remote / On-ground',
      role: 'Marketing & Strategy Intern',
      period: 'May – July 2025',
      summary:
        'E-commerce platform focused on revolutionising grocery and apparel retail for Tier 3 and Tier 4 India.',
      highlights: [
        'Supported campaign planning and customer engagement initiatives specifically for the apparel category.',
        'Conducted extensive market and competitor research to uncover nuanced rural consumer insights and category gaps.',
        'Contributed localized marketing concepts and grassroots store launch activations (including Rozana Ki Baarat).',
        'Analysed product, size, and colour performance data to identify regional purchasing patterns.',
        'Supported product cataloguing, digital storefront listings, and inventory velocity reporting.',
      ],
    },
  ] as ExperienceItem[],
  contact: {
    primaryEmail: 'hello@manasvi.design',
    academicEmail: 'manasvi.sachan@bimtech.ac.in',
    linkedinUrl: 'https://www.linkedin.com/in/manasvisachan/',
    instagramUrl: 'https://www.instagram.com/the_marketing_gurl/',
  },
};
