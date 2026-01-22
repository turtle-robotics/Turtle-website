// ARCHIVED: Supabase client code - kept for potential future use
// import { createClient } from '@supabase/supabase-js';
// 
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// 
// // Create a dummy client if env variables are missing (for local dev without Supabase)
// let supabase;
// 
// if (!supabaseUrl || !supabaseAnonKey) {
//   console.warn('⚠️ Supabase environment variables are missing. Form submissions will not work.');
//   
//   // Create a mock client that won't crash the app
//   supabase = {
//     from: () => ({
//       insert: async () => {
//         console.error('Supabase is not configured. Please add environment variables.');
//         return { 
//           error: new Error('Supabase is not configured') 
//         };
//       }
//     })
//   };
// } else {
//   supabase = createClient(supabaseUrl, supabaseAnonKey);
// }
// 
// export { supabase };

// Temporary placeholder export while Supabase is archived
// This mock provides enough interface to prevent the AdminDashboard from crashing
export const supabase = {
  from: () => ({
    insert: async () => {
      console.warn('Supabase is currently archived and not available.');
      return { error: new Error('Supabase is archived') };
    },
    select: () => ({
      order: () => Promise.resolve({ data: [], error: null }),
      eq: () => ({
        single: () => Promise.resolve({ data: null, error: null })
      })
    }),
    delete: () => ({
      eq: () => Promise.resolve({ data: null, error: null })
    })
  }),
  auth: {
    getUser: async () => ({ data: { user: null }, error: null }),
    signInWithPassword: async () => ({ 
      data: { user: null }, 
      error: new Error('Supabase authentication is archived') 
    }),
    signOut: async () => ({ error: null })
  }
};