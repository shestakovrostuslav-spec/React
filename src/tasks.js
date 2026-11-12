export const categories = ['Навчання', 'Дім', 'Особисте', 'Інше'];

export const firstTasks = [
  { id: 'sample-1', title: 'Підготувати презентацію', category: 'Навчання', deadline: '', completed: false },
  { id: 'sample-2', title: 'Скласти список покупок', category: 'Дім', deadline: '', completed: false },
  { id: 'sample-3', title: 'Записати плани на тиждень', category: 'Особисте', deadline: '', completed: true },
];

export async function fetchExampleTasks() {
  const response = await fetch('https://dummyjson.com/todos?limit=5', {
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error('Не вдалося отримати завдання');

  const data = await response.json();
  return data.todos.map((item) => ({
    id: `api-${item.id}`,
    title: item.todo,
    category: 'Інше',
    deadline: '',
    completed: item.completed,
  }));
}
