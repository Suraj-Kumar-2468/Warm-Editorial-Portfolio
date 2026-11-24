export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
  kicker?: string;
  title?: string;
  description?: string;
}

export interface ProjectPresentation {
  label: string;
  canvaUrl: string;
  embedUrl: string;
}

export interface BrandCardItem {
  slug: string;
  name: string;
  subtitle: string;
  logoUrl: string;
  logoAlt: string;
  logoHeightClass: string;
  actionType: 'canva' | 'scroll';
  canvaUrl?: string;
  scrollTargetId?: string;
}

export interface ProjectDetail {
  slug: string;
  aliases?: string[];
  client: string;
  category: string;
  year: string;
  title: string;
  tagline: string;
  overview: string;
  objectives: string[];
  strategy: string;
  creativeApproach: string[];
  execution: string[];
  deliverables: string[];
  images: ProjectImage[];
  presentation?: ProjectPresentation;
  externalLinks: { label: string; url: string }[];
  sectionAnchorId?: string;
}

export const BRAND_STRATEGY_CARDS: BrandCardItem[] = [
  {
    slug: 'woodsmen',
    name: 'Woodsmen',
    subtitle: 'Reelax Agency',
    logoUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBfk_-O1WUjUg52G8RTgtphe5cp7S4IrXBXlApulrK568JUCof7rJ36sWaBRIUGbqcQau957I4Ba-TPOBamM6hDYu8yhYbP88QcfozUchq8BpdC29B87Fi72-kjz1SeTyjoUkn9uuXxoLkE3lazUylEfhX0gG4wbAYCYgRQhuSylExmCufmcedecaLbd0V96DfzdC-3tEFUtIjYgjLVS8O7s-A7ihjiyrXlQzMwSzW68kgWgjvN2gxV',
    logoAlt: 'Woodsmen Mountain Whiskey Logo',
    logoHeightClass: 'h-14',
    actionType: 'canva',
    canvaUrl: 'https://canva.link/j6qrmp5ge1lbmbt',
  },
  {
    slug: 'malabar',
    name: 'Malabar',
    subtitle: 'Reelax Agency',
    logoUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAShqePfBKQ7YMvFYNwJHwd6wuPbzpu5vuQPGgGBLWDe3yd1SNO_nZVQ5dW57LfdrPW15zJWU80rRNp8VymnTTu9n2ndeQtyCzy6PWBQs2iPjxDF9Q-ddwfh0jy32iyhw9vuel2jzqjMtdnWdAr4S65GIAdn9XMAGhBv36T79-r-pfofbtaYrntbIMW8qomZAuhbb8k7LauAP6DVIAxPgxRwR6qsesxEYq93t9KTDR3Y9xoLgMvYuNX',
    logoAlt: 'Malabar Gold & Diamonds Logo',
    logoHeightClass: 'h-14',
    actionType: 'canva',
    canvaUrl: 'https://canva.link/072kgnqxlv81wxr',
  },
  {
    slug: 'youthnic',
    name: 'Youthnic',
    subtitle: 'Reelax Agency',
    logoUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCvDfX1nrNljcczP-TwF9TKMLY0LgEOIAPZIKWNrrOizU0iqD9TQrlQdTDz2o6n3HjRPaU7Ss6TEFwWL7k3UiItTqtWqP_gwhds_1Y2Sn9wzhP4q-Tcu84wjZW_1HapZ_mEX0ajuHk0462SpeTtAQa7x0vIfrVpdJ9eui84v2IR8pkVMrsvNwjDqJvwoxN18eXIWYQedcaoMOYRo3fUuo0oDUbEBrmraW7tGliz4ZivAiJpc9-t0bN2',
    logoAlt: 'Youthnic Logo',
    logoHeightClass: 'h-10',
    actionType: 'canva',
    canvaUrl: 'https://canva.link/71ni5zajeecxfz0',
  },
  {
    slug: 'godrej',
    name: 'Godrej',
    subtitle: 'Reelax Agency',
    logoUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDsMmX_7hTED6EtqZaR7TrtwmU4KRgLSo2mk5ItP2k89UaloAKBidLdzkL7TXg10Izr6T-juTZW46qVPy4SLoN45coM8rrHfpLVlZWFYO_6Tf-L6aKDhDR-5dx9WqI34rTH0wG4TOJ_D0iSpNiaXcFsIEkDtbCNh5MCFe426iMYo5_Ymk70TLG9oIj7vJ3hbHgcqreIEsVCQEigz-crq8Lr-_AkYceZ9VbiZNMchjryfb_zcgI2Ux68',
    logoAlt: 'Godrej Properties / Industries Logo',
    logoHeightClass: 'h-10',
    actionType: 'canva',
    canvaUrl: 'https://canva.link/2zejcvd9etxtf1u',
  },
  {
    slug: 'rozana',
    name: 'Rozana',
    subtitle: 'View Case Study',
    logoUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAugrwR6nnZjmgG2OLtxdvUlw8u2MVMTUQ9Sv3YWgPW_OafcvwZi1fSYeLjMshLMmQraTEVeyMpZwBjQuA6j40H_l_rpZ3pd3ABrQPE7BWzpMoJCDd3QtIxg28eJjTp74ZAV3cMgXDfc_DaJBx4oBxLph0u9s7ainMih4QmUHWT6pPvYqC9cO_2uM4TZL1FOkODSzl49kAtrzpEK22Du3P17Dpk3W7Ty-XohgAbM5CZrGkJb2MNVgUJ',
    logoAlt: 'Rozana Logo',
    logoHeightClass: 'h-14',
    actionType: 'scroll',
    scrollTargetId: 'project-rozana',
  },
  {
    slug: 'spotify',
    name: 'Spotify',
    subtitle: 'View Case Study',
    logoUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuACt5ArNbY0YEe5JQDzOLEXa0Uqb7t5-z36JDkypA2_LlwvXxbDpZiJkdqmwKxvQxDZpShXyt__7X51Oi5uTdDL5cs44np-f9qRWvFv5JKnf-HyhiPjm-JCkBfZKDqQ-Nc5dUFxcNoKjR3qqdgd9KfA6A0_L0k0tSVyEfeOWi3pfdi4S_NBZTxAMXOOTRnQhCu1T0RxyvyxPkZmGt82zRdO3AxRxBtjBFBRQlOANVJPVJ7HyFpd7JG1',
    logoAlt: 'Spotify Logo',
    logoHeightClass: 'h-10',
    actionType: 'scroll',
    scrollTargetId: 'project-spotify',
  },
  {
    slug: 'rasa-feni',
    name: 'Rasa Feni',
    subtitle: 'View Case Study',
    logoUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDeS6LfNx4uxJzAaqV4ie-nNm6LC3ljeORKa_jl_9UwXdjWm7aROw7CwtYj7eyrBiRid83aX3vFRLPSfn5aicV9ceW23wpCBOboa31kxt7b8xrJt2P7RuwjbTAFNH6NhNlXYW2natcXRUJLvT4AE2Vl09bF75iHXvVhnVTRZ7MSJesRwNCuO7ZZ5pSyI9EOtBlb2rtgsznj23GSZH0KnzfdFQM1nX0MBw5MpsOVy08NO-ewealPo7QQ',
    logoAlt: 'Rasa Feni Luxury Spirits Logo',
    logoHeightClass: 'h-12',
    actionType: 'scroll',
    scrollTargetId: 'project-rasa-feni',
  },
];

export const PROJECTS: ProjectDetail[] = [
  {
    slug: 'spotify',
    client: 'Spotify',
    category: 'BIMTECH Marketing Lab · 2026 · Academic Project',
    year: '2026',
    title: 'Spotify: Renaissance Remix & Eye Tracking Research',
    tagline: '“Timeless Classics. Now Streaming.”',
    overview:
      "An empirical investigation testing classical art schema-violation in outdoor and mobile streaming advertisements. By outfitting iconic cultural portraits (Vermeer's Girl with Pearl Earring, Da Vinci's Mona Lisa) with modern Apple AirPods and Spotify UI, the campaign tested whether cognitive incongruity increases fixations and dwell times.",
    objectives: [
      'Test whether classical art paired with modern Spotify UX drives stronger gaze lock through schema violation.',
      'Measure time-to-first-fixation and attention distribution across headlines, faces, AirPods, and brand insignia using Tobii Pro Eye Tracking.',
      'Translate streaming data into shareable physical-metaphor OOH creatives (“Bill for your year” receipt).',
    ],
    strategy:
      'The campaign disrupts viewer heuristics. Because the brain recognizes classical portraits within 100 milliseconds, introducing modern tech accessories triggers cognitive schema violation, quadrupling dwell time on the Spotify brand crest.',
    creativeApproach: [
      'Girl with a Pearl Earring: “Timeless Classics. Now Streaming.” Juxtaposition of 17th-century masterpiece with modern white AirPods.',
      'Mona Lisa with AirPods: Subtle gaze fixation test comparing phone UI versus the iconic enigmatic smile.',
      'Taylor Swift: Every Lyric, Every Era — typographic face map connecting nostalgic lyric memory cues to instant streaming action.',
      '“Bill for your year” Receipt: Physical grocery-bill metaphor turning digital streaming algorithms into tangible shareable collectibles.',
    ],
    execution: [
      'Designed four distinct static & OOH concepts spanning classical iconography, lyric typography, and thermal-receipt listening summaries.',
      'Conducted controlled eye-tracking sessions at BIMTECH Marketing Lab with Tobii Pro screen-based hardware to generate fixation heatmaps.',
      'Validated strongest fixation on headlines, repeated dwell on AirPods schema violations, rapid brand logo saliency, and full vertical eye sweeps on receipt tracklists.',
    ],
    deliverables: [
      'Schema Violation Creative Testing (Vermeer & Mona Lisa)',
      'Tobii Screen-based Biometric Eye Tracking Analysis',
      'Attention Distribution Heatmaps & Time-to-First-Fixation Metrics',
      'OOH Viral Receipt Strategy for Annual Wrapped Campaigns',
    ],
    images: [
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8kuifPFsf_bGm4_4EXYlOcFK_voisfUqin9WC5E_TU5iJUuL6y7DimUeIZRwDiuMt9lnk2RAgnTOTZu6ai9aiMvXF34dV9a2fFmmgkupHqZd1Q-fn51uDEpknKTpD6ZXFAXDlalKbmLPzN-ZUNDQu-Vy4ncp6-z9sXIbvdzaEptJVgoGXz3kDzB6lzO3XUMEiFTI4BsuRlX3U40HEotdn3c2uBqrH37ntnPewMATWgYcfRDfcMtjY',
        alt: "Vermeer's Girl with Pearl Earring wearing AirPods with Spotify banner ad",
        caption: 'Girl with a Pearl Earring — Modern AirPods juxtaposition',
        kicker: 'Concept 01 · Schema Violation',
        title: 'Girl with a Pearl Earring',
        description:
          '“Timeless Classics. Now Streaming.” Juxtaposition of 17th-century masterpiece with modern white AirPods.',
      },
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY8V4DdS8f8n-ueUP9llDJj5AEsQBQFtQNeEDnrHYU_PDKD9YVkboKjd1Rc_qZIs_9quX4fi9sqNsUAYb_Aj_gW9DSTz8ENkucUhPY4JRjNk5st4qiGvor92Wfv5Ivr9DNZ7aN-EIJOO28XLARJc7o8iT3az7vtfqRdjYR46-o4TqFEqjWxWO2G5EvfAKdoI4CG2po10QYx-7vnrINTwlZq_lbhHl52oFoGKHZ7y6xaIfqCzDqRmKx',
        alt: "Leonardo da Vinci's Mona Lisa wearing AirPods holding Spotify smartphone",
        caption: 'Mona Lisa with AirPods — Gaze tracking phone interface',
        kicker: 'Concept 02 · Pop Iconography',
        title: 'Mona Lisa with AirPods',
        description:
          'Subtle gaze fixation test: phone UI vs. iconic enigmatic smile to study attention distribution.',
      },
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCo7InjNIOszLYBgfTB-H36garXI6fgXskKHSpskP06WRJWSldPTeYit4tV0cMuw5e2NRxwvMNQj4XZeejjHJNDCjPgMUaoKWBt70BNKHX2SJhZyjQm0tH1H0QBnkRQc20-WWs9xHO1GCW9hO7dQx_V01nFRSSzQAU1lKA-d-dpxeYcT-fxH-8CybKPBwMF-O7P7QnvXeg5dmSDvuVorNEvSQ2XVHTcVHjVKcNOUyWI90QsBU-0uM9e',
        alt: 'Taylor Swift typographic lyric art portrait for Spotify - Every lyric, every era',
        caption: 'Taylor Swift Lyric Portrait — Fandom & Era typographic map',
        kicker: 'Concept 03 · Fandom & Era',
        title: 'Taylor Swift: Every Lyric, Every Era',
        description:
          'Typographic face map connecting nostalgic lyric memory cues to instant streaming action.',
      },
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmogwVYlV2H1eGFhS-_FzZ8F0DxQkap1W1ORrflWWiQ3nRwEDDYhiR3-5gQQjzV2FHO8-mWJL3RDE5XnXws-ew6dZgNEXyvY-Ik4jy5MEV8PI7BLB4HFmmY3UJOUKLcJn7MS1j5GOZNdGgD4QUSeG7Dj5uLhVgmU0Zt6XJFV9nzmSj5CS3EaY0j8JZM_82y6ws5IhjcyL49XMVwz9j1RhA-4GhYJW_uokanPSYxQ9Zn-mXKIsCwTj6',
        alt: 'Spotify Receipt summarizing year listening data',
        caption: 'Bill For Your Year — Thermal grocery receipt metaphor',
        kicker: 'Concept 04 · OOH & Social',
        title: '“Bill for your year” Receipt',
        description:
          'Physical grocery-bill metaphor turning digital streaming algorithms into tangible shareable collectibles.',
      },
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBN_4sLpipoOjjU3OCHD299P_xvHG-qQUBiGjUCjUevKMHn5Cu5eSe9TxyyWs2hV3zrXE3rKjwPhd3cD4FiqQXz465DLYR_WPH8u09EjJAtyWVx1G7CuiwArk4PhPbXDwe00A3JrIOSdlSmO9XPuTqxW6aBRNIZ1k1LvDgFtcXAGyZB5e7Jpb_S2GvGnJQablY3vvPqPDJrqMLraeX4kgemvQVADE6oZEeM0fx_dcGyLv5kZNJCgXi1',
        alt: 'Tobii Pro Eye Tracking Heatmaps showing fixation on classical art ads and receipt',
        caption:
          'Tobii Pro Heatmap Validation — Gaze density locks on headlines',
        kicker: 'Empirical Validation',
        title: 'Tobii Pro Eye Tracking Heatmap Analysis',
      },
    ],
    externalLinks: [],
    sectionAnchorId: 'project-spotify',
  },
  {
    slug: 'rasa-feni',
    aliases: ['rasa'],
    client: 'Rasa Feni',
    category: 'Brand Identity & Visual Campaign · Academic Project',
    year: '2025',
    title: 'Rasa Feni — Luxury Indian Heritage Spirits',
    tagline: '“Luxury Indian heritage spirits. Bringing Goa to you.”',
    overview:
      "Conceptualised and designed an aspirational brand identity for a premium cashew feni label. Feni, traditionally relegated to rustic beach shacks, was repositioned as a super-premium heritage spirit worthy of the world's best speakeasies and rooftop lounges.",
    objectives: [
      'Reposition traditional artisanal Goan cashew feni into an aspirational luxury spirits category.',
      'Craft a distinctive heritage insignia, typography system, and custom embossed glass packaging.',
      'Demonstrate brand versatility across beachside sunset, metropolitan rooftop, cocktail bar, and speakeasy environments.',
    ],
    strategy:
      'Elevating indigenous craftsmanship into luxury status by pairing traditional Indian motifs with sleek European mixology aesthetics.',
    creativeApproach: [
      'Logo & Typography: Crafted heritage insignia evoking Goan Portuguese colonial architecture and modern luxury.',
      'Custom Packaging: Embossed glass bottle design with artisanal cork seal and minimal gold leaf foiling.',
      'Multi-Context Lifestyle Campaign: Visual storytelling across golden hour beaches, artisanal craft cocktail bars, smoky lounges, and modern rooftops.',
    ],
    execution: [
      'Produced hero studio product photography framed by carved teak mandala architecture and fresh green limes.',
      'Built a four-tier lifestyle visual campaign demonstrating Golden Hour Beachfront, Skyline Rooftop Pour, Aromatic Bar Counter Mist, and Speakeasy Mixology Culture.',
    ],
    deliverables: [
      'Artisanal Portuguese-Goan Heritage Emblem & Typography',
      'Embossed Heavyweight Glass Spirit Bottle Packaging',
      'Four-Tier Lifestyle Visual Campaign (Beach, Rooftop, Speakeasy, Bar)',
      'Goan Origin Cashew Narrative & Cocktail Menu Concept',
    ],
    images: [
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgilM23uUn6smnoamboeZEKNXN8yxeVgtS32-zWocBPXsepBb-gEQT4gXuRN6BDxOyAekKz-COmHdvK5KF5OUab0AhXOU3N-goGC21eDeLwjLW5J-rxbVPiTEZlFiMIQkam8ohxagiU4Vp6almPexXuO-saghjLQxlFXY_lfzhrAYwcpVzIUjoBOuCkmk5ELj7U2TeDG2mp-PWsxrcDsP2t4U3sMJ28UDiHcb1qRqGtCDPP3ofLw6v',
        alt: 'Close-up product shot of Rasa Feni premium liquor bottle with limes on carved wooden table with golden mandala wall',
        caption: 'Hero Mandap Teak Bottle Shot with Fresh Green Limes',
        kicker: 'Hero Brand Insignia',
        title: 'Artisanal Goan Heritage Glass & Carved Mandala Setting',
      },
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsaYoCIy2JzHXQ2ZQPLY1_hHgc0T-VsrJgk86cjqTi_tKGFQ6myJPFjNFupPOchVyKeqdBSs_iU9nJt2j2LSWC5aiaHnpri-r-mwgZ0ZoHMkK5ZHSP1TLqnStDXPHryE5hDMB4iBydFyP0ugo69aYAdYfXEGlGo-61L34tAtwUY41JAn_9AWe6CBspZmDyfm2YNWvwh2aNDwqjS_WtwLs_N_H5i00X6YQaOgy51uiWyxctyX30yPXJ',
        alt: 'Aesthetic lifestyle cocktail shot of Rasa Feni bottle on wooden beach table at sunset with lantern',
        caption: 'Golden Hour Beachfront Setting with Antique Lantern & Cashew',
        kicker: '01 · Golden Hour',
        title: 'Beachfront Sunset & Cashew Fruit',
      },
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCT3sPDEHSCyY5FV4XGsU8e7CwSdPzbmS9_hxVExtn8aQaboBAJ-iwYWUXR_HMqPl_7RqSJcc2zCo8a1Jv-ARmVtfZ8OtWSzm3q_clSkTv6K2yZNPBhW5AdF2cxvDeI27pLoBohXs0-I8anq8mqlHvR8C4ML7kzT3PXnSj__Get8GGeP7hkMiIN_bydymO9si3qsOrvfOJOr4jQOhI4vdQup9AbAaROQ1ZBjrN3YzaL3Hzb17OvUs7l',
        alt: 'Bartender pouring cocktail from shaker into highball glass next to Rasa Feni bottle on rooftop bar',
        caption: 'Metropolitan Rooftop Cocktail Shake & Skyline Pour',
        kicker: '02 · Skyline Pour',
        title: 'Rooftop Lounge & Mixology',
      },
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKmUbkbf73eAvOH4jONqKevjhl3txYKD_-TiJ4_PJg7SKC1DoMRglr7qTA-L_b1PMZ1qQ_S12WY8XO2gFFNr2vPG15zXIcvzBp_d5dQGe-z0ERO_AFcwkl6hSC9mzXDiM_TJ_XUEC1N4iEaxtDVOpGKAFSoWqqfhtfT5zYTphmr8sNFbQeHYgjXNimAI1zA1k5Vn2sRYi9sKEY94QQBR0mdNpKHO9ArgWVlNs7tfSHaVIgRrZthFPD',
        alt: 'Rasa Feni bottle on wooden bar counter surrounded by aromatic mist, crushed ice, and lime wedges',
        caption: 'Aromatic Ice, Mist & Fresh Citrus Bar Presentation',
        kicker: '03 · Aromatic Ambiance',
        title: 'Crushed Ice, Mist & Fresh Limes',
      },
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1eWu40_56JXa_F29od0nmigmMGUeJLja69tdSWFn7rHDGG95Sw6A8ezgSX273cMU6B0mkoZv2R5MHAcTGizlUsvVz2VVplIdlbyrsICNMy_T536SIu0PW-b2y99viLVeyxL_EBWl4O8iEF-sr6hHBTLLwwbh9CZXI7gYZv6bhH2zowY__lFirQ81yE0SyS8qpde0zwbUX0yivO1UMLbRFv8h9coIyKfBnMrXJH5l_4OlHaoEvH-Y7',
        alt: 'Modern speakeasy bar setting with bartender in background shaking cocktail behind Rasa Feni bottle',
        caption: 'Speakeasy Warm Ambient Lighting & Craft Mixology Culture',
        kicker: '04 · Craft Cocktail Culture',
        title: 'Speakeasy Bar & Edison Lights',
      },
    ],
    externalLinks: [],
    sectionAnchorId: 'project-rasa-feni',
  },
  {
    slug: 'rozana',
    client: 'Rozana',
    category: 'Internship Project · Proposed 2025 · BIMTECH',
    year: '2025',
    title: 'Rozana Ki Baarat — Shaadi-Style Guerrilla Activation',
    tagline: '“Shaadi-Style Street Activation for Tier 3 & 4 Bharat”',
    overview:
      "Conceived during an internship at Rozana to drive explosive footfall and hyperlocal engagement for new retail store inaugurations in Tier 3 and 4 markets across Uttar Pradesh. A near-identical shaadi-themed concept was later executed at scale by quick-commerce unicorn Zepto.",
    objectives: [
      'Drive viral launch-day footfall and hyperlocal FOMO for Rozana Tier 3 and Tier 4 retail store inaugurations.',
      'Eliminate corporate retail cynicism through joyful, culturally native community participation.',
      'Build memorable word-of-mouth around Rozana’s everyday low-price value proposition (“Saste Daam”).',
    ],
    strategy:
      'Traditional Indian weddings are zero-friction cultural unifiers in small towns. Framing deep grocery discounts as a community marriage eliminated corporate cynicism and created unstoppable organic word-of-mouth.',
    creativeApproach: [
      'Rozana (Dulha / Groom) marries “Saste Daam” (Dulhan / Bride) in an authentic celebratory town procession.',
      'Customers become Baraatis and the new retail store transforms into the Shaadi ka Mandap.',
      'Designed “The Wall of Fame Auto” decorated like a wedding rath adorned with local customer portraits.',
    ],
    execution: [
      'Distributed wedding-invitation style promotional flyers directly to local households ahead of store opening.',
      'Planned naach-gaana, dholak street procession, and complimentary wedding sweets at the store mandap.',
    ],
    deliverables: [
      'Procession Architecture: Rozana (Dulha) Marries Saste Daam (Dulhan)',
      "Hyperlocal 'Wall of Fame Auto' decorated like wedding rath with customer photos",
      'Wedding-invitation styled promotional discount flyers delivered to homes',
      'Naach-gaana, dholak procession, and complimentary wedding sweets at the store mandap',
    ],
    images: [
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZL7WzStuGCWCIEas2rXlZajOS3-1uug0aMDjrKEjQ7O8eJZMDn_1GePg7GqrJgq-jjDok-CFwHrTVwTluU0JlvFNtYXoH6M_ThChABJzpyGk0Py_YB4qgmMAUkzce4oOPwfZrsqhr9Bd3BO5LHw7Frsgur_0MxagA_Fp_XAQZ7PMpDTjNvY95Ry8RQ_qaYNAPlNRQhkRHZ0tIStkFK8JeF0MzE_TDx8fxIf9KqMRXkXoUC5lpa2n6',
        alt: 'Rozana Ki Baarat presentation slide showing Concept: The Wall of Fame Auto with wedding procession illustration',
        caption:
          "Presentation Slide: Concept 'The Wall of Fame Auto' & Shaadi Procession",
        kicker: 'Campaign Deck & Illustration',
        title: 'Concept: The Wall of Fame Auto · Rozana Ki Baarat',
      },
    ],
    externalLinks: [],
    sectionAnchorId: 'project-rozana',
  },
  {
    slug: 'we2',
    client: 'WE2 Dating App',
    category: 'Consumer Behaviour Assignment · Brand Concept',
    year: '2025',
    title: 'WE2 — Where Your Weird Is Wanted',
    tagline: '“Where your weird is wanted.”',
    overview:
      'Built on qualitative consumer behaviour research uncovering immense Gen Z fatigue towards cosmetic beauty filters, scripted pickup lines, and homogenised dating app personas. WE2 reframes vulnerability as the ultimate dating superpower.',
    objectives: [
      'Differentiate a new Gen Z dating concept from swipe-fatigued, hyper-curated incumbents.',
      'Turn unfiltered quirkiness and psychological compatibility into desirable social currency.',
      'Develop a bold manifesto, OOH copy system, and app-store hook built for organic shareability.',
    ],
    strategy:
      'Turn vulnerability into high social currency. By highlighting uncurated quirks, WE2 reduces dating anxiety and accelerates real psychological compatibility.',
    creativeApproach: [
      'Brand Manifesto: “Dating apps told you to be less, WE2 says... Be extra.”',
      'Authentic Eccentricity: Replacing clichés (“Tall, Dark, Handsome”) with real personality traits (“Pansexual · Poet · Pizza Snob”).',
      'Anti-Filter Portraits: “Pretty isn’t a personality trait” — spotlighting candid wit, flaws, and distinct voices.',
    ],
    execution: [
      'Crafted multi-format campaign assets spanning hero manifesto banners, App Store CTA hooks, and social-first OOH copy.',
      'Mapped audience archetypes (“The Sapiosexual”, “The Niche Hobbyist”) and in-app prompt mechanics that filter out generic profiles.',
    ],
    deliverables: [
      'Anti-Aesthetic Campaign Manifesto & Tagline System',
      'Audience Archetype Mapping (The Sapiosexual, The Niche Hobbyist)',
      'In-App Friction Mechanics designed to filter out generic profiles',
      'Social-first OOH Copy & UGC Launch Strategy',
    ],
    images: [
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCH-BpMQnkhre246CNu58KaTUV8Kdw1ZSiy2zJ2fhbQDJpNyyWKf9DPGJK2hmNJUmI1yk-em66qZZokkjjZO0flpXZYnOOCPBbX0EjMd1PggMkYnh4uM8c86Pp5lb095z6ozowD21I1R6b0RwZCVgjUBNSNl7H6Dt4cjYfWa3W2Xu5nBJDUuyH2ib36-Wi-0Bt5tOht3Sv4AncTvEo7QlLuY4tGfQe2Ax8HN62bJVEWA4IrWiDdA6kh',
        alt: 'WE2 Campaign: Dating Apps Told You to Be Less, WE2 Says... Be Extra',
        caption:
          "Brand Manifesto: 'Dating apps told you to be less, WE2 says... Be extra'",
        kicker: 'Brand Manifesto Banner',
        title: '“Dating Apps Told You to Be Less, WE2 Says... Be Extra”',
      },
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmH7V8XAvjvLuYJi-GHQJJKlGhysP71dDvcT7NevnMr2dGif2NbDRkKmZeDTYpI0QISLe2Z869rDXzaL1xZiaHbOz0YKwsBgao_RbaeolDheNoMw6qxc5iWSA0pGogWS6NibJs7J27XyKS-yr1fgNQh3nFRg5EetBzwCNuztYXXW6NL_SEOvPsVta5BT0K3GoSXUqI7OQ_-1Ik5c2AGCLVzf3Ecpc3tCq1dbff9wonpHngsRNoJHWX',
        alt: 'WE2: Where Your Weird is Wanted - Download the App That Gets You',
        caption: 'Download The App That Gets You · Join The Revolution',
        kicker: 'App Store & CTA Activation',
        title: '“Download the App That Gets You · Join Now”',
      },
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYeZEKMz1ZrWy8AZZTNMpvvBe25ScnUYC9BBMay6IPkC-RZU00ZutdxIor1c1w9XQKHRMI690F63uSytZJ4ZhsvV70PO8hizCQVGAWnPzu1BIvAynCjcfa9suAwGn5AlsQEECL46mx2PPtA22wsB4pMQMXYLP9hy1VT0i7vBIJiC0iKwk76fLw1mAbH1qCh-tKY22NFIgJoz2Or7xK41XmT2V-Bo94DRyG6o13uypB1n-XMm6OKHd3',
        alt: "Tell 'em who you really are: Tall Dark Handsome vs Pansexual Poet Pizza Snob",
        caption:
          "Concept: Tell 'em who you really are (Pansexual · Poet · Pizza Snob)",
        kicker: 'Concept 01 · Authentic Eccentricity',
        title: "“Tell 'em who you really are”",
        description:
          'Replacing generic clichés with real personality traits: “Pansexual · Poet · Pizza Snob”.',
      },
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8JiH4hpX6izLQpE1fGW26CJVaQqtef_GS8D3eA-9cpoONolQLcd7IB6CWPPpIV4aWDBQiyI7BUeQKFlhLhrxRwY7AWimJN-C0RD3AIeiSA1sHJOgnfrgdEnUZFX4e-YcONnmiDkMiop67IXny9Krk0qDvtaYvC2ikfajkBw7zb1QGmlZC4KZV7B7bLbz0dkcKAwMOuo65a4mQoUzLwfZX50_vnS5iekNyngLmukitXlIeWMk_mKZ1',
        alt: "Pretty isn't a personality trait - Real Gen Z persona portraits with candid bio bubbles",
        caption:
          "Concept: Pretty isn't a personality trait — Real candid profiles",
        kicker: 'Concept 02 · Anti-Filter Portraits',
        title: "“Pretty isn't a personality trait”",
        description:
          'Candid user profiles spotlighting wit, flaws, and distinct voices over homogenised beauty filters.',
      },
    ],
    externalLinks: [],
    sectionAnchorId: 'project-we2',
  },
  {
    slug: 'woodsmen',
    aliases: ['woodsman'],
    client: 'Woodsmen Mountain Whiskey',
    category: 'Client Campaign Strategy · Reelax Agency',
    year: '2026',
    title: 'Woodsmen Mountain Whiskey — Creator Strategy Plan',
    tagline: '“Crafted for the untamed spirit of the mountains.”',
    overview:
      'Influencer marketing and narrative strategy developed at Reelax for Woodsmen Mountain Whiskey. Designed to position the brand against legacy whisky giants by targeting young urban adventurers through outdoor storytelling.',
    objectives: [
      'Differentiate Woodsmen Mountain Whiskey from legacy whisky tropes through authentic Himalayan provenance.',
      'Reach young urban explorers via high-trust outdoor, travel, and craft-cocktail creators.',
      'Maintain strict compliance with surrogate lifestyle campaign guidelines while maximizing organic recall.',
    ],
    strategy:
      'Leverage micro-influencers in adventure tourism rather than conventional nightlife stars to highlight the raw outdoor origin story of the blend.',
    creativeApproach: [
      'Anchored storytelling around Himalayan campfire camaraderie, crisp mountain water distillation, and rugged outdoor lifestyle cues.',
      'Designed creator briefs balancing atmospheric visual aesthetics with compliance-safe lifestyle storytelling.',
    ],
    execution: [
      'Curated vetted trekking, lifestyle, and craft mixology creators tailored to Woodsmen’s target audience.',
      'Delivered the complete end-to-end campaign plan deck on Canva covering strategy, creator tiers, and rollout concepts.',
    ],
    deliverables: [
      'Creator Curation Strategy across Trekking, Lifestyle & Craft Cocktails',
      'End-to-End Briefs tailored to Himalayan campfire aesthetics',
      'Brand Storytelling Deck focusing on crisp mountain water distillation',
      'Compliance-adherent surrogate lifestyle campaign guidelines',
    ],
    images: [
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfk_-O1WUjUg52G8RTgtphe5cp7S4IrXBXlApulrK568JUCof7rJ36sWaBRIUGbqcQau957I4Ba-TPOBamM6hDYu8yhYbP88QcfozUchq8BpdC29B87Fi72-kjz1SeTyjoUkn9uuXxoLkE3lazUylEfhX0gG4wbAYCYgRQhuSylExmCufmcedecaLbd0V96DfzdC-3tEFUtIjYgjLVS8O7s-A7ihjiyrXlQzMwSzW68kgWgjvN2gxV',
        alt: 'Woodsmen Mountain Whiskey Brand Identity Lockup',
        caption: 'Woodsmen Mountain Whiskey Brand Identity Lockup',
      },
    ],
    presentation: {
      label: 'Woodsmen Campaign Plan Deck',
      canvaUrl: 'https://canva.link/j6qrmp5ge1lbmbt',
      embedUrl:
        'https://www.canva.com/design/DAHa6_x2RDs/elmNYspb0s3wKbCkMB6AVw/view?embed',
    },
    externalLinks: [
      {
        label: 'Open Woodsmen Presentation on Canva',
        url: 'https://canva.link/j6qrmp5ge1lbmbt',
      },
    ],
  },
  {
    slug: 'malabar',
    client: 'Malabar Gold & Diamonds',
    category: 'Client Campaign Strategy · Reelax Agency',
    year: '2026',
    title: 'Malabar Gold & Diamonds — Modern Wedding Narrative',
    tagline: '“Celebrate the Beauty of Life.”',
    overview:
      'Strategic campaign planning executed at Reelax for Malabar Gold & Diamonds. Framed bridal jewellery not merely as bridal status symbols, but as deeply personal heirlooms and generational bond builders.',
    objectives: [
      'Build high-trust wedding campaign resonance across Tier 1 and Tier 2 Indian markets.',
      'Balance Malabar’s heritage craftsmanship equity with modern lightweight wearable designs.',
      'Drive authentic emotional engagement through relatable bridal and family storytelling.',
    ],
    strategy:
      'Humanising luxury jewelry by anchoring creative hooks on real behind-the-scenes wedding preparations and emotional bridal sisterhood.',
    creativeApproach: [
      'Shifted focus from posed catalogue displays to intimate pre-wedding rituals, heirloom hand-downs, and mother-daughter moments.',
      'Paired fashion creators with family storytellers for cross-generational appeal.',
    ],
    execution: [
      'Developed the full campaign strategy presentation on Canva with creator rosters, narrative hooks, and channel rollout guidelines.',
    ],
    deliverables: [
      'High-trust wedding campaign architecture across Tier 1 and 2 markets',
      'Curated roster of fashion & mother-daughter creators',
      'Cross-channel narrative touchpoints balancing heritage craftsmanship with modern lightweight wearable designs',
    ],
    images: [
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAShqePfBKQ7YMvFYNwJHwd6wuPbzpu5vuQPGgGBLWDe3yd1SNO_nZVQ5dW57LfdrPW15zJWU80rRNp8VymnTTu9n2ndeQtyCzy6PWBQs2iPjxDF9Q-ddwfh0jy32iyhw9vuel2jzqjMtdnWdAr4S65GIAdn9XMAGhBv36T79-r-pfofbtaYrntbIMW8qomZAuhbb8k7LauAP6DVIAxPgxRwR6qsesxEYq93t9KTDR3Y9xoLgMvYuNX',
        alt: 'Malabar Gold & Diamonds Identity Insignia',
        caption: 'Malabar Gold & Diamonds Identity Insignia',
      },
    ],
    presentation: {
      label: 'Malabar Brand Strategy Presentation',
      canvaUrl: 'https://canva.link/072kgnqxlv81wxr',
      embedUrl:
        'https://www.canva.com/design/DAHbuKLKFNo/HmeFbwrXufw3YRmzYXaK_w/view?embed',
    },
    externalLinks: [
      {
        label: 'Open Malabar Presentation on Canva',
        url: 'https://canva.link/072kgnqxlv81wxr',
      },
    ],
  },
  {
    slug: 'youthnic',
    client: 'Youthnic',
    category: 'Client Campaign Strategy · Reelax Agency',
    year: '2026',
    title: 'Youthnic — Gen Z Ethnic Wear Reimagined',
    tagline: '“Traditional Roots. Modern Wardrobe.”',
    overview:
      'Social-first brand strategy and influencer coordination plan developed at Reelax for fast-growing contemporary ethnic fashion label Youthnic.',
    objectives: [
      'Position Youthnic as an effortless everyday ethnic and fusion wardrobe for Gen Z audiences.',
      'Build a repeatable festival and wedding-guest creator calendar maximizing saves and conversions.',
    ],
    strategy:
      'Break the stereotype that ethnic wear is only for rigid festivals. Position Kurtas and fusion sets as effortless university, work, and café staples.',
    creativeApproach: [
      'Blended vibrant pastel palettes, comfort-first movement, and street-style draping cues tailored for Instagram Reels.',
    ],
    execution: [
      'Delivered the Youthnic creator campaign deck on Canva detailing visual style guides, creator curation criteria, and ROI measurement frameworks.',
    ],
    deliverables: [
      'Festival & Wedding Guest creator campaign calendar',
      'Visual style guides balancing comfort, vibrant pastels, and street-style draping',
      'Creator ROI frameworks tracking save rates and purchase conversions',
    ],
    images: [
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvDfX1nrNljcczP-TwF9TKMLY0LgEOIAPZIKWNrrOizU0iqD9TQrlQdTDz2o6n3HjRPaU7Ss6TEFwWL7k3UiItTqtWqP_gwhds_1Y2Sn9wzhP4q-Tcu84wjZW_1HapZ_mEX0ajuHk0462SpeTtAQa7x0vIfrVpdJ9eui84v2IR8pkVMrsvNwjDqJvwoxN18eXIWYQedcaoMOYRo3fUuo0oDUbEBrmraW7tGliz4ZivAiJpc9-t0bN2',
        alt: 'Youthnic Brand Mark & Identity',
        caption: 'Youthnic Brand Mark & Identity',
      },
    ],
    presentation: {
      label: 'Youthnic Campaign Presentation',
      canvaUrl: 'https://canva.link/71ni5zajeecxfz0',
      embedUrl:
        'https://www.canva.com/design/DAHa6_P-fZk/RbncDXymT49XkGWGK5KzjA/view?embed',
    },
    externalLinks: [
      {
        label: 'Open Youthnic Presentation on Canva',
        url: 'https://canva.link/71ni5zajeecxfz0',
      },
    ],
  },
  {
    slug: 'godrej',
    aliases: ['godrej-properties'],
    client: 'Godrej Properties / Industries',
    category: 'Strategic Brand Storytelling · Reelax Agency',
    year: '2026',
    title: 'Godrej — Multi-Stakeholder Brand Narrative',
    tagline: '“Innovation, Heritage, and Sustainable Futures.”',
    overview:
      "Strategic recommendations and creator alignment at Reelax highlighting Godrej's heritage trust, sustainable living spaces, and innovation pipeline across consumer touchpoints.",
    objectives: [
      'Connect industrial and real-estate heritage expertise with relatable daily consumer wellbeing.',
      'Build multi-stakeholder messaging resonating with modern families, homebuyers, and young talent.',
    ],
    strategy:
      'Translating complex corporate sustainability and innovation breakthroughs into relatable, emotionally resonant stories for consumers and young talent.',
    creativeApproach: [
      'Structured narrative arcs pairing legacy trust with modern sustainable living and purposeful creator voices.',
    ],
    execution: [
      'Authored the complete Godrej strategy presentation on Canva detailing brand storytelling pillars and creator recommendations.',
    ],
    deliverables: [
      'Corporate narrative decks connecting industrial expertise with daily consumer wellness',
      'Multi-stakeholder brand messaging architecture',
      'Strategic creator recommendations for sustainable impact campaigns',
    ],
    images: [
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsMmX_7hTED6EtqZaR7TrtwmU4KRgLSo2mk5ItP2k89UaloAKBidLdzkL7TXg10Izr6T-juTZW46qVPy4SLoN45coM8rrHfpLVlZWFYO_6Tf-L6aKDhDR-5dx9WqI34rTH0wG4TOJ_D0iSpNiaXcFsIEkDtbCNh5MCFe426iMYo5_Ymk70TLG9oIj7vJ3hbHgcqreIEsVCQEigz-crq8Lr-_AkYceZ9VbiZNMchjryfb_zcgI2Ux68',
        alt: 'Godrej Brand Mark',
        caption: 'Godrej Brand Mark',
      },
    ],
    presentation: {
      label: 'Godrej Strategy Presentation',
      canvaUrl: 'https://canva.link/2zejcvd9etxtf1u',
      embedUrl:
        'https://www.canva.com/design/DAHbuBbUGb0/d0PNgI0N6BtrV2CjQn2uMw/view?embed',
    },
    externalLinks: [
      {
        label: 'Open Godrej Presentation on Canva',
        url: 'https://canva.link/2zejcvd9etxtf1u',
      },
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  const normalized = slug.toLowerCase();
  return PROJECTS.find(
    (p) =>
      p.slug === normalized ||
      (p.aliases && p.aliases.includes(normalized))
  );
}
