import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://deqcrxpsimjzppbsnzkd.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export const getData = async (table, select) => {
  const { data } = await supabase.from(table).select(select)
  return data
}
