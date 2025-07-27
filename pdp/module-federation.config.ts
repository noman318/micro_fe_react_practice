export const mfConfig = {
  name: "pdp",
  exposes: {},
  remotes: {
    home: "home@http://localhost:8080/remoteEntry.js", // Point to remoteEntry.js
  },
  shared: ["react", "react-dom"],
};
