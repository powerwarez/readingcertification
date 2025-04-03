const { createRequestHandler } = require("@remix-run/netlify");
const BUILD_DIR = "../../build";

// 명확하게 process.env를 사용하지 않음
function getLoadContext(event, context) {
  return { event, context };
}

const remixHandler = createRequestHandler({
  build: require(BUILD_DIR),
  mode: "production",
  getLoadContext
});

exports.handler = async function(event, context) {
  return remixHandler(event, context);
};
