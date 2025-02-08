export const APP_CONFIG = {
  supabase: {
    storageUrl: 'https://dozmmbxoihsbndwgbsuy.supabase.co/storage/v1/object/public',
    buckets: {
      resumes: 'resumes',
      podcasts: 'podcasts',
    },
  },
  maxFileSize: 10 * 1024 * 1024, // 10MB
  allowedFileTypes: ['pdf', 'doc', 'docx', 'txt'],
  defaultTheme: 'light',
} as const; 