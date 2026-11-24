export function ContourBackground() {
  return (
    <>
      {/* Top Vignette Gradient Bleed */}
      <div className="top-gradient-bleed" aria-hidden="true" />

      {/* Continuous Organic Flowing Contour Squiggles */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <svg
          className="absolute -top-6 -left-16 h-auto w-[480px] opacity-85 lg:w-[720px]"
          fill="none"
          viewBox="0 0 700 700"
        >
          <path
            d="M-80,240 C60,110 -20,440 210,380 C390,320 180,680 430,730 C580,760 620,540 510,480 C360,400 120,560 60,780"
            stroke="#9e1b1b"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.2"
          />
          <path
            d="M-40,490 C120,540 220,700 80,820 C-60,940 180,980 320,890"
            stroke="#9e1b1b"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
        </svg>

        <svg
          className="absolute top-24 -right-12 h-auto w-[380px] opacity-75 lg:w-[620px]"
          fill="none"
          viewBox="0 0 600 900"
        >
          <path
            d="M620,120 C420,180 500,430 360,510 C220,590 440,780 290,920 C210,1000 480,1100 380,1260"
            stroke="#2d3037"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path
            d="M580,290 C450,340 470,550 350,640 C230,730 400,850 330,980"
            stroke="#2d3037"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
        </svg>

        <svg
          className="absolute top-[36%] -left-20 h-auto w-[420px] opacity-60 lg:w-[680px]"
          fill="none"
          viewBox="0 0 600 800"
        >
          <path
            d="M-60,160 C180,120 110,420 330,370 C510,320 280,680 460,740"
            stroke="#9e1b1b"
            strokeLinecap="round"
            strokeWidth="1.6"
          />
          <path
            d="M-30,380 C140,430 260,260 410,480 C520,640 310,790 540,860"
            stroke="#2d3037"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
        </svg>

        <svg
          className="absolute bottom-20 -right-16 h-auto w-[450px] opacity-70 lg:w-[700px]"
          fill="none"
          viewBox="0 0 700 700"
        >
          <path
            d="M720,240 C520,160 380,380 260,290 C140,200 80,480 340,560 C580,630 420,820 620,890"
            stroke="#2d3037"
            strokeLinecap="round"
            strokeWidth="1.7"
          />
          <path
            d="M590,460 C420,530 240,450 160,620 C80,780 320,840 280,980"
            stroke="#9e1b1b"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </>
  );
}
