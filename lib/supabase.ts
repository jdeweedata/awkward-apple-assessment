import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

// Use anon key for client-side operations with RLS policies
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Submission {
  id?: string
  name: string
  email: string
  challenge: string
  submission_url: string
  description: string
  time_spent: string
  submitted_at?: string
}
