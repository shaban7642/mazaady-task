import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

interface Config {
  env: string;
  isBrowser: boolean;
  isServer: boolean;
  defaultTimeZone: string;
  apiUrl: string;
  apiKey: string;
}

const config: { [name: string]: any } = {
  all: {
    env: process.env.REACT_APP_ENV || "local",
    isBrowser: typeof window !== "undefined",
    isServer: typeof window === "undefined",
    defaultTimeZone: "Africa/Egypt",
  },
};

const parsedConfigs: Config = {
  ...config.all,
  apiUrl: `${publicRuntimeConfig.API_URL}/api/v1`,
  apiKey: publicRuntimeConfig.API_KEY,
};

export default parsedConfigs;
