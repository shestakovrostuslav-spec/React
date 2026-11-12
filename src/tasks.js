export const categories = ['Навчання', 'Дім', 'Особисте', 'Інше'];

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
