import { useContext, useState } from 'react';
import { Link } from 'react-router';
import TaskItem from '../components/TaskItem';
import { TasksContext } from '../state/tasksContext';
import { categories, fetchExampleTasks } from '../tasks';

export default function TaskListPage() {
  const { tasks, toggleTask, removeTask, addExamples } = useContext(TasksContext);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('all');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const completedCount = tasks.filter((task) => task.completed).length;
  const query = search.trim().toLowerCase();
  const visibleTasks = tasks.filter((task) => {
    const matchesStatus = status === 'all' || task.completed === (status === 'completed');
    return matchesStatus && (!category || task.category === category) && task.title.toLowerCase().includes(query);
  });

  async function importExamples() {
    setLoading(true);
    setMessage('');
    setError('');
    try {
      const examples = await fetchExampleTasks();
      addExamples(examples);
      setMessage('Приклади завантажено.');
    } catch {
      setError('Не вдалося завантажити приклади. Спробуйте ще раз.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="page-heading">
        <div>
          <h1>Мої завдання</h1>
          <p className="muted">Виконано {completedCount} з {tasks.length}</p>
        </div>
        <Link className="button primary" to="/tasks/new">+ Додати завдання</Link>
      </div>

      <section className="filters panel" aria-label="Пошук і фільтри">
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
        <ul className="task-list panel">
          {visibleTasks.map((task) => <TaskItem key={task.id} task={task} onToggle={toggleTask} onRemove={removeTask} />)}
        </ul>
      ) : (
        <p className="empty panel">{tasks.length ? 'За цими фільтрами завдань немає.' : 'Список порожній. Додайте перше завдання.'}</p>
      )}

      <div className="import-row">
        <button type="button" onClick={importExamples} disabled={loading}>
          {loading ? 'Завантаження…' : 'Завантажити приклади з API'}
        </button>
        {message && <span role="status" className="muted">{message}</span>}
        {error && <span role="alert" className="error">{error}</span>}
      </div>
    </>
  );
}
