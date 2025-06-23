interface Todo {
  id: string;
  content: string;
  checked: boolean;
  isOptimistic?: boolean;
  optimisticUpdateType?: 'create' | 'update';
}

export type {
  Todo
}
