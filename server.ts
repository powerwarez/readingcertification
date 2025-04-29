// 개발 모드에서는 이 파일은 사용되지 않습니다.
// 이 파일은 프로덕션 빌드에서만 사용됩니다.
import * as build from "@remix-run/dev/server-build";
import { createRequestHandler } from "@netlify/remix-adapter";

const handler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
});

export default handler; 