const { createRequestHandler } = require("@remix-run/netlify");
const build = require("@remix-run/dev/server-build");

// 여기가 중요 - process.env 대신 명시적 모드 사용
exports.handler = createRequestHandler({
  build,
  mode: "production"
});
