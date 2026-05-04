import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tesaeldvkacpirepbxme.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlc2FlbGR2a2FjcGlyZXBieG1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc3Nzg2NjgsImV4cCI6MjA5MzM1NDY2OH0.jj1TL6oyCRPyIA0IoYOvuCTiCHvxPfBvkzFjRiLU6YI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);