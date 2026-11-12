import { Link } from 'react-router';

export default function TaskItem({ task, onToggle, onRemove }) {
  return (
    <li className={`task-item${task.completed ? ' completed' : ''}`}>
      <label className="task-check">
        <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
        <span>{task.title}</span>
      </label>
      <div className="task-details">
        <span className="category">{task.category}</span>
        {task.deadline && <time dateTime={task.deadline}>До {task.deadline.split('-').reverse().join('.')}</time>}
      </div>
      <div className="actions task-actions">
        <Link className="button" to={`/tasks/${task.id}/edit`} aria-label={`Редагувати: ${task.title}`}>Редагувати</Link>
        <button className="danger" type="button" onClick={() => onRemove(task.id)} aria-label={`Видалити: ${task.title}`}>Видалити</button>
      </div>
    </li>
  );
}
