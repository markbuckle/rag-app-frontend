"use client";

import { Configuration, DefaultApi } from "@/api-client";

// function to get the API url
export function getApiUrl() {
    // For the link below you can also use "http://localhost:8000" or "http://0.0.0.0:8000" or ""http://localhost:3000" or "https://bpve3nbtfqav4lskuxeeperrzq0qdgki.lambda-url.us-east-1.on.aws/" or "https://api.rag.pixegami.io"
  // return process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.rag.pixegami.io';
  return process.env.NEXT_PUBLIC_API_BASE_URL || 'https://4yam45loxbdpayxzy35w27dw2e0stein.lambda-url.us-east-1.on.aws';
}

export default function createApiClient() {
  const apiConfig = new Configuration({
    basePath: getApiUrl(),
  });
  const api = new DefaultApi(apiConfig);
  return api;
}