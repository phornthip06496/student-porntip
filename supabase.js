mport { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = 'https://ilmlfpqeiuobzasyrggo.supabase.co'
const supabaseKey = 'sb_publishable_DKYj8CuqGpzaI-dX7nz5KQ_rAl1FNap'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)