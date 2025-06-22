interface Todo {
  id: string;
  content: string;
  userId: string;
  checked: boolean;
  isOptimistic?: boolean;
  optimisticUpdateType?: 'create' | 'update';
}

export type {
  Todo
}
