export interface SkillType {
  id: number;
  name: string;
  image: string;
  created_at: Date;
  updated_at: Date;
}

export interface SkillFormType {
  name: string;
  image: File | null;
}
