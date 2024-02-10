import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blueLightCp: "#0053ff",
        darkBlueCp: '#001B59',
        lightBlueCp: '#99A7C5',
        gray: '#808080',
        whiteSmoke: '#FBFBFB',
        lightGray: '#F4F4F4'
      },
      fontSize: {
        '18px': '1.125rem',
        '40px': '2.5rem',
      },
      spacing: {
        '38px': '2.375rem',
        '1440px': '90rem',
        '64px': '4rem',
        '80px': '5rem',
        '40px': '2.5rem',
        '10px': '0.625rem',
      },
      lineHeight: {
        '27px': '1.6875rem',
        '52px': '3.25rem',
      },
      gap: {
        '29px': '1.8125rem',
        '20px': '1.25rem',
        '85px': '5.3125rem', 
      },
       borderColor: {
        hsla: 'hsla(0,0%,100%,.16)',
        lightGray: '#F4F4F4'
      },
      backgroundColor: {
        'blue-500': '#0053ff',
        whiteSmoke: '#FBFBFB',
        lightGray: '#F4F4F4'
      },
      whiteSpace: {
        nowrap: "nowrap",
      },
      maxWidth: {
        '732px': '45.75rem',
      },
      letterSpacing: {
        'custom': '1.02px',
      },
    },
  },
  plugins: [],
};

export default config;