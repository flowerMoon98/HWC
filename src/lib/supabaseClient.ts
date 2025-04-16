import { createClient } from '@supabase/supabase-js';

// Read Supabase credentials from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Check if the environment variables are set
if (!supabaseUrl) {
  throw new Error("Missing environment variable: NEXT_PUBLIC_SUPABASE_URL");
}
if (!supabaseAnonKey) {
  throw new Error("Missing environment variable: NEXT_PUBLIC_SUPABASE_ANON_KEY");
}

// Create and export the Supabase client instance
// We can use this instance to interact with our Supabase backend
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Note: For server-side operations (like in Server Actions or API routes)
// where row-level security might depend on user authentication, you might need
// different clients (e.g., a service role client or user-specific clients).
// For simple public form submissions with basic RLS, the anon key client is often sufficient.
