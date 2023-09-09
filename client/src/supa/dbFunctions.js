import { supabase } from '@/supa/client'

export const getData = async (table, select) => {
  const { data } = await supabase.from(table).select(select)
  return data
}
