import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hpewawcrujmwxskrksum.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwZXdhd2NydWptd3hza3Jrc3VtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyNDg3NzYsImV4cCI6MjA0MjgyNDc3Nn0.XwO6exkmjleaIZTetS7VBtenm-RjOzHao0BDlOzTGT8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
