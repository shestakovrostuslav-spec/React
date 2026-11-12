import { useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import TaskForm from '../components/TaskForm';
import { TasksContext } from '../tasksContext';

export default function TaskEditorPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, addTask, editTask } = useContext(TasksContext);
  const task = tasks.find((item) => item.id === id);

  if (id && !task) {
    return (
      <section>
        <h1>Завдання не знайдено</h1>
        <Link to="/">До списку завдань</Link>
      </section>
    );
  }

  function saveTask(fields) {
    if (task) editTask(task.id, fields);
    else addTask(fields);
    navigate('/');
  }

  return (
    <section>
      <h1>{task ? 'Редагувати завдання' : 'Нове завдання'}</h1>
      <TaskForm key={id ?? 'new'} task={task} onSave={saveTask} />
    </section>
  );
}
