const { createRequestHandler } = require("@remix-run/netlify");

// Netlify Functions 빌드 경로
const BUILD_DIR = ".netlify/functions-internal/server";

// 로드 컨텍스트 설정
function getLoadContext(event, context) {
  return { event, context };
}

// 리믹스 핸들러 생성
const remixHandler = createRequestHandler({
  build: require(BUILD_DIR),
  mode: "production",
  getLoadContext
});

// 핸들러 내보내기
exports.handler = async function(event, context) {
  return remixHandler(event, context);
};
