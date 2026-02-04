import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a dummy client if env variables are missing (for local dev without Supabase)
let supabase;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "⚠️ Supabase environment variables are missing. Form submissions will not work.",
  );

  // Create a mock client that won't crash the app
  supabase = {
    from: () => ({
      insert: async () => {
        console.error(
          "Supabase is not configured. Please add environment variables.",
        );
        return {
          error: new Error("Supabase is not configured"),
        };
      },
    }),
  };
} else {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase };
