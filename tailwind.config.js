module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "admin-bg": "#1E1E30",
        "admin-main": "#38394E",
        "admin-secondary": "#27283C",
        "admin-btn": "#C035A2",
        "admin-btnhover": "#CD61ED",
        "admin-btn-shadow": "rgba(39, 174, 96, 0.2)",
        "admin-sidebar": "#C74FEB",
        "admin-input": "#5A5B70",
        "admin-text": "#C7C7C7",

        "admin-gray6": "#F2F2F2",

        "admin-modal-framebg": "#43445A",
        "admin-modal-upload": "#EC5CF8",

        "admin-close-modal": "#C74FEB",
        "admin-purpl-modal-btn": "#C035A2",
        "admin-cancel-btn": "#43445A",
      },
    },
  },
  plugins: [],
};
