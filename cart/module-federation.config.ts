export const mfConfig = {
  name: "cart",
  filename: "remoteEntry.js", // Force traditional Webpack output
  library: { type: "var", name: "cart" }, // Legacy global variable
  remotes: {
    home: "home@http://localhost:8080/remoteEntry.js", // Point to remoteEntry.js
    pdp: "pdp@http://localhost:3000/remoteEntry.js", // Point to remoteEntry.js
    cart: "cart@http://localhost:3002/remoteEntry.js", // Point to remoteEntry.js
  },
  shared: ["react", "react-dom"],
};
