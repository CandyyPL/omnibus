import { supabase } from '@/supa/client'

export const getData = async (table, select) => {
  const { data } = await supabase.from(table).select(select)
  return data
}

export const postData = async (table, data) => {
  await supabase.from(table).insert(data)
}
