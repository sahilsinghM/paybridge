export default [
  {
    ignores: ["node_modules"]
  },
  {
    extends: ["next/core-web-vitals"],
    settings: {
      next: {
        rootDir: ["./"]
      }
    }
  }
];
