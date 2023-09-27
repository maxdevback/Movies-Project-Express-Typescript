export interface IConfigFromEnv {
  PORT: number;
  STAGE: "dev" | "prod";
  API_KEY: string;
  GITHUB_CLIENT: string;
  GITHUB_SECRET: string;
  MONGODB_LINK: string;
  COOKIE_SECRET: string;
}

declare global {
  namespace Express {
    interface User {
      id: string;
    }
  }
}
