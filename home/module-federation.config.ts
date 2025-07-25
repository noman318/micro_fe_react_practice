export const mfConfig = {
  name: "home",
  filename: "remoteEntry.js", // Force traditional Webpack output
  library: { type: "var", name: "home" }, // Legacy global variable
  exposes: {
    "./Header": "./src/components/Header.tsx",
    "./Footer": "./src/components/Footer.tsx",
    "./tailwind.css": "./src/index.css", // Path to your Tailwind CSS file
    "./products": "./src/products.ts",
  },
  remotes: {
    home: "home@http://localhost:8080/remoteEntry.js", // Point to remoteEntry.js
    pdp: "pdp@http://localhost:3000/remoteEntry.js", // Point to remoteEntry.js
    cart: "cart@http://localhost:3002/remoteEntry.js", // Point to remoteEntry.js
  },
  shared: ["react", "react-dom"],
};
