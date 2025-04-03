const { createRequestHandler } = require("@remix-run/netlify");

// 빌드 경로를 직접 지정
const BUILD_DIR = "../../build";

// 로드 컨텍스트 유지
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
