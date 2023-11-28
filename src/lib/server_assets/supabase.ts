import { createClient } from "@supabase/supabase-js";
import { Database } from "../supabase_types.ts";

const supabase = createClient<Database>(process.env.SUPABASE_PROJECT_URL as string, process.env.SUPABASE_PUBLIC_ANON as string);

export default supabase;
