export interface IConfigFromEnv {
  PORT: number;
  STAGE: "dev" | "prod";
  API_KEY: string;
}
