export interface Task {
  id: number;
  user_id: number;
  title: string;
  slug: string;
  status: string;
  description: string;
  deadline: string | null;
  created_at: string;
  updated_at: string;
}

export interface TaskResponse {
  statut: number;
  data: Task[];
}
