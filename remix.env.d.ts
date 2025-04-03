/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node/globals" />

declare module "*.css" {
  const content: string;
  export default content;
} 