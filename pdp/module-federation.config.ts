export const mfConfig = {
  name: "pdp",
  exposes: {},
  filename: "remoteEntry.js",
  library: { type: "var", name: "pdp" },
  remotes: {
    home: "home@http://localhost:8080/remoteEntry.js", // Point to remoteEntry.js
  },
  shared: ["react", "react-dom"],
};
