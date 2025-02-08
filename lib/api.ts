import { supabase } from './supabase'
import type { Resume, Podcast } from '../types'

export const api = {
  resumes: {
    list: async () => {
      const { data, error } = await supabase
        .from('resumes')
        .select('*')
        .order('createdAt', { ascending: false })
      
      if (error) throw error
      return data as Resume[]
    },
    
    get: async (id: string) => {
      const { data, error } = await supabase
        .from('resumes')
        .select('*')
        .eq('id', id)
        .single()
      
      if (error) throw error
      return data as Resume
    },
    
    create: async (resume: Omit<Resume, 'id' | 'createdAt' | 'updatedAt'>) => {
      const { data, error } = await supabase
        .from('resumes')
        .insert(resume)
        .single()
      
      if (error) throw error
      return data as Resume
    }
  },
  
  podcasts: {
    create: async (podcast: Omit<Podcast, 'id' | 'createdAt'>) => {
      const { data, error } = await supabase
        .from('podcasts')
        .insert(podcast)
        .single()
      
      if (error) throw error
      return data as Podcast
    }
  }
} 