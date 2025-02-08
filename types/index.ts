export interface Resume {
  id: string;
  userId: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  email: string;
  fullName: string;
  avatarUrl?: string;
}

export interface Podcast {
  id: string;
  resumeId: string;
  audioUrl: string;
  duration: number;
  createdAt: string;
} 