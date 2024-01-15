import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        backgroundStars: "url('/assets/background-stars.svg')",
      },
      fontFamily: {
        antonio: ["var(--font-antonio)"],
        spartan: ["var(--font-spartan)"],
      },
    },
    colors: {
      dots: {
        mercury: "hsl(196, 83%, 93%)",
        venus: "hsl(39, 88%, 73%)",
        earth: "hsl(238, 99%, 66%)",
        mars: "hsl(12, 100%, 64%)",
        jupiter: "hsl(27, 75%, 70%)",
        saturn: "hsl(40, 96%, 70%)",
        uranus: "hsl(168, 82%, 67%)",
        neptune: "hsl(222, 95%, 63%)",
      },

      FFFFF: "hsl(0, 0%, 100%)",
      "070724": "hsl(240, 67%, 8%)",
      "38384F": "hsl(240, 17%, 26%)",
      "838391": "hsl(240, 6%, 54%)",
      "419EBB": "hsl(194, 48%, 50%)",
      EDA249: "hsl(33, 82%, 61%)",
      "6F2ED6": "hsl(263, 67%, 51%)",
      D14C32: "hsl(10, 63%, 51%)",
      D83A34: "hsl(2, 68%, 53%)",
      100: "hsl(2, 68%, 53%)",
      CD5120: "hsl(17, 73%, 46%)",
      "1EC2A4": "hsl(169, 73%, 44%)",
      "2D68F0": "hsl(222, 87%, 56%)",
      D8D8D8: "hsla(0, 0%, 85%, .2)",
    },
    fontSize: {
      H1Desktop: [
        "5rem",
        {
          fontWeight: "400",
          lineHeight: "6.4375rem",
        },
      ],
      H1Tablet: [
        "3rem",
        {
          fontWeight: "400",
        },
      ],
      H1Mobile: [
        "2.5rem",
        {
          fontWeight: "400",
        },
      ],
      H2Desktop: [
        "2.5rem",
        {
          fontWeight: "400",
          lineHeight: "3.25rem",
          letterSpacing: "-1.5px",
        },
      ],
      H2Tablet: [
        "1.5rem",
        {
          fontWeight: "400",
          letterSpacing: "-0.9px",
        },
      ],
      H2Mobile: [
        "1.25rem",
        {
          fontWeight: "400",
          letterSpacing: "-0.75px",
        },
      ],
      H3Desktop: [
        ".75rem",
        {
          fontWeight: "700",
          lineHeight: "1.5625rem",
          letterSpacing: "2.571px",
        },
      ],
      H3Tablet: [
        ".5625rem",
        {
          fontWeight: "700",
          letterSpacing: "1.929px",
        },
      ],
      H3Mobile: [
        ".5625rem",
        {
          fontWeight: "700",
          letterSpacing: "1.929px",
        },
      ],
      H4Desktop: [
        ".6875rem",
        {
          fontWeight: "700",
          lineHeight: "1.5625rem",
          letterSpacing: "1px",
        },
      ],
      H4Tablet: [
        ".5rem",
        {
          fontWeight: "700",
          lineHeight: "1rem",
          letterSpacing: ".727px",
        },
      ],
      H4Mobile: [
        ".9375rem",
        {
          fontWeight: "700",
          lineHeight: "1.5625rem",
          letterSpacing: "1.364px",
        },
      ],
      BodyDesktop: [
        ".875rem",
        {
          fontWeight: "400",
          lineHeight: "1.5625rem",
        },
      ],
      BodyTablet: [
        ".6875rem",
        {
          fontWeight: "400",
          lineHeight: "1.375rem",
        },
      ],
      NavTitle: [
        "1.75rem",
        {
          fontWeight: "400",
          letterSpacing: "-1.05px",
        },
      ],
    },
  },
  plugins: [],
};
export default config;
