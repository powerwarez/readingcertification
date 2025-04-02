/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "netlify",
  server: "./netlify/functions/server.js",
  ignoredRouteFiles: ["**/.*"],
  publicPath: "/build/",
  serverBuildPath: "netlify/functions/server.js",
  assetsBuildDirectory: "public/build",
};
