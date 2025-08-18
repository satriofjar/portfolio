export interface ProjectType {
  id: number;
  title: string;
  description: string;
  url: string;
  stack: string[];
  image: string;
  created_at: Date;
  updated_at: Date;
}

export interface ProjectFormType {
  title: string;
  description: string;
  url: string;
  stack: string[];
  image: File | null;
}
