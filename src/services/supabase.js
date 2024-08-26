import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nsaqteixgvnlvfaaqagp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zYXF0ZWl4Z3ZubHZmYWFxYWdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQxNDE0MjIsImV4cCI6MjAzOTcxNzQyMn0.OaG_9b0ELScbrkBQAl5fPr5w3JLFMQzMjGYPARDLHKM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
