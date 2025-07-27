export const mfConfig = {
  name: "pdp",
  exposes: {},
  filename: "remoteEntry.js",
  library: { type: "var", name: "pdp" },
  remotes: {
    home: `promise new Promise((resolve) => {
      const remoteUrl = 'http://localhost:8080/remoteEntry.js'
      const script = document.createElement('script')
      script.src = remoteUrl
      script.onload = () => {
        resolve({
          get: (request) => window.home.get(request),
          init: (arg) => window.home.init(arg)
        })
      }
      document.head.appendChild(script)
    })`,
  },
  shared: {
    react: { singleton: true, eager: true },
    "react-dom": { singleton: true, eager: true },
  },
};
