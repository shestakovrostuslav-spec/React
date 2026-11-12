import { useContext, useState } from 'react';
import TaskItem from '../components/TaskItem';
import { TasksContext } from '../tasksContext';
import { categories, fetchExampleTasks } from '../tasks';

export default function TaskListPage() {
  const { tasks, toggleTask, removeTask, addExamples } = useContext(TasksContext);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('all');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const completedCount = tasks.filter((task) => task.completed).length;
  const query = search.trim().toLowerCase();
  const visibleTasks = tasks.filter((task) => {
    const matchesName = task.title.toLowerCase().includes(query);
    const matchesCategory = !category || task.category === category;
    const matchesStatus = status === 'all' || task.completed === (status === 'completed');
    return matchesName && matchesCategory && matchesStatus;
  });

  async function importExamples() {
    setLoading(true);
    setMessage('');
    try {
      const examples = await fetchExampleTasks();
      addExamples(examples);
      setMessage('Приклади завантажено.');
    } catch {
      setMessage('Не вдалося завантажити приклади. Спробуйте ще раз.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h1>Мої завдання</h1>
      <p>Виконано {completedCount} з {tasks.length}</p>

      <section className="filters" aria-label="Пошук і фільтри">
        <label>
          Пошук
          <input type="search" placeholder="Введіть назву завдання" value={search} onChange={(event) => setSearch(event.target.value)} />
        </label>
        <label>
          Категорія
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="">Усі категорії</option>
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>
          Статус
          <select value={status} onChange={(event) => setStatus(event.target.value)}>
            <option value="all">Усі завдання</option>
            <option value="active">Активні</option>
            <option value="completed">Виконані</option>
          </select>
        </label>
      </section>

      {visibleTasks.length > 0 ? (
        <ul className="task-list">
          {visibleTasks.map((task) => <TaskItem key={task.id} task={task} onToggle={toggleTask} onRemove={removeTask} />)}
        </ul>
      ) : (
        <p>{tasks.length ? 'За цими фільтрами завдань немає.' : 'Список порожній. Додайте перше завдання.'}</p>
      )}

      <div className="actions">
        <button type="button" onClick={importExamples} disabled={loading}>
          {loading ? 'Завантаження…' : 'Завантажити приклади з API'}
        </button>
        <span role="status">{message}</span>
      </div>
    </>
  );
}
