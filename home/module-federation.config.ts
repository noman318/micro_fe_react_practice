export const mfConfig = {
  name: "home",
  filename: "remoteEntry.js", // Force traditional Webpack output
  library: { type: "var", name: "home" }, // Legacy global variable
  exposes: {
    "./Header": "./src/components/Header.tsx",
    "./Footer": "./src/components/Footer.tsx",
    "./tailwind.css": "./src/index.css", // Path to your Tailwind CSS file
  },
  shared: ["react", "react-dom"],
};
