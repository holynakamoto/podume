import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../lib/api'
import type { Resume } from '../types'

export function useResumes() {
  const queryClient = useQueryClient()
  
  const { data: resumes, isLoading } = useQuery({
    queryKey: ['resumes'],
    queryFn: () => api.resumes.list()
  })
  
  const createResume = useMutation({
    mutationFn: (resume: Omit<Resume, 'id' | 'createdAt' | 'updatedAt'>) => 
      api.resumes.create(resume),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['resumes'] })
    }
  })
  
  return {
    resumes,
    isLoading,
    createResume: createResume.mutate
  }
} 