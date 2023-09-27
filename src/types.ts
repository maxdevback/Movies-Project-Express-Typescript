export interface IConfigFromEnv {
  PORT: number;
  STAGE: "dev" | "prod";
  API_KEY: string;
  GITHUB_CLIENT: string;
  GITHUB_SECRET: string;
  MONGODB_LINK: string;
}

declare global {
  namespace Express {
    interface User {
      id: string;
    }
  }
}
