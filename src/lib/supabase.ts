import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  (typeof process !== "undefined" && process.env?.["VITE_SUPABASE_URL"]) ||
  import.meta.env?.["VITE_SUPABASE_URL"] ||
  "https://eskworfjlnwshqtvwpes.supabase.co";

const supabaseAnonKey =
  (typeof process !== "undefined" && process.env?.["VITE_SUPABASE_ANON_KEY"]) ||
  import.meta.env?.["VITE_SUPABASE_ANON_KEY"] ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVza3dvcmZqbG53c2hxdHZ3cGVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY5ODM4ODIsImV4cCI6MjEwMjU1OTg4Mn0.ni-sICiiyTJ0t7VzrTM2-s6S3cqv_TH6p3MmDqdXxuw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: typeof window !== "undefined",
    autoRefreshToken: typeof window !== "undefined",
  },
});

