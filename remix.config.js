/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: [".*"],
  serverBuildTarget: "netlify",
  server: "./server.js",
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildPath: ".netlify/functions-internal/server.js"
};
