import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ghtsmeuihrxwujhhlxjo.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdodHNtZXVpaHJ4d3VqaGhseGpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM5NTcwODIsImV4cCI6MTk4OTUzMzA4Mn0.yDSXgr_HOhW3-47Y6hfi4OVuRCmixSqSLMALg1ZHwTY'

export const supabase = createClient(supabaseUrl, supabaseKey)
