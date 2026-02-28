const normalizeBaseUrl = (url) => (url || "").replace(/\/+$/, "");

const envApiUrl = normalizeBaseUrl(process.env.NEXT_PUBLIC_API_URL);

const getFallbackApiUrl = () => {
  if (typeof window !== "undefined" && window.location?.origin) {
    return `${window.location.origin}/api`;
  }
  return "http://localhost:8000/api";
};

const API_BASE_URL = envApiUrl || getFallbackApiUrl();

export default API_BASE_URL;
