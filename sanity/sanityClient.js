import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "up0cb081",  
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-03-06",
  token: import.meta.env.VITE_SANITY_TOKEN
});
