import { useState } from 'react';
import { Link } from 'react-router';
import { categories } from '../tasks';

export default function TaskForm({ task, onSave }) {
  const [title, setTitle] = useState(task?.title ?? '');
  const [category, setCategory] = useState(task?.category ?? categories[0]);
  const [deadline, setDeadline] = useState(task?.deadline ?? '');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const cleanTitle = title.trim();
    if (!cleanTitle) {
      setError('Введіть назву завдання.');
      return;
    }
    onSave({ title: cleanTitle, category, deadline });
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label>
        Назва завдання
        <input value={title} onChange={(event) => {
          setTitle(event.target.value);
          setError('');
        }}
          placeholder="Наприклад, прочитати розділ" maxLength={150} required
          aria-invalid={Boolean(error)} aria-describedby={error ? 'title-error' : undefined} />
      </label>
      {error && <p className="error" id="title-error" role="alert">{error}</p>}
      <label>
        Категорія
        <select value={category} onChange={(event) => setCategory(event.target.value)}>
          {categories.map((item) => <option key={item}>{item}</option>)}
        </select>
      </label>
      <label>
        Дедлайн (необов’язково)
        <input type="date" value={deadline} onChange={(event) => setDeadline(event.target.value)} />
      </label>
      <div className="actions">
        <button type="submit">{task ? 'Зберегти зміни' : 'Додати завдання'}</button>
        <Link to="/">Скасувати</Link>
      </div>
    </form>
  );
}
