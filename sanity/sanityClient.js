import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "up0cb081",  
  dataset: "production",
  useCdn: true, 
  apiVersion: "2023-01-01",
});
