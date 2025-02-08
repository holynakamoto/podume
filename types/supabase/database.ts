export type Database = {
  public: {
    Tables: {
      resumes: {
        Row: {
          id: string;
          title: string;
          created_at: string;
          file_type: string;
          file_url: string;
          user_id: string;
        };
        Insert: Omit<Resume, 'id' | 'created_at'>;
        Update: Partial<Omit<Resume, 'id' | 'created_at'>>;
      };
      users: {
        Row: {
          id: string;
          email: string;
          full_name: string;
        };
        Insert: Omit<User, 'id'>;
        Update: Partial<Omit<User, 'id'>>;
      };
      podcasts: {
        Row: {
          id: string;
          resume_id: string;
          title: string;
          audio_url: string;
          created_at: string;
          user_id: string;
        };
        Insert: Omit<Podcast, 'id' | 'created_at'>;
        Update: Partial<Omit<Podcast, 'id' | 'created_at'>>;
      };
    };
  };
}; 