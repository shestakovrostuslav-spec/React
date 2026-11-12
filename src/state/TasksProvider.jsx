import { useEffect, useState } from 'react';
import { firstTasks } from '../tasks';
import { TasksContext } from './tasksContext';

const storageKey = 'todo-manager-tasks';

function readTasks() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    return Array.isArray(saved) ? saved : firstTasks;
  } catch {
    return firstTasks;
  }
}

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState(readTasks);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(tasks));
    } catch (error) {
      console.warn('Не вдалося зберегти завдання в браузері', error);
    }
  }, [tasks]);

  function addTask(fields) {
    const task = { ...fields, id: crypto.randomUUID(), completed: false };
    setTasks((current) => [task, ...current]);
  }

  function editTask(id, fields) {
    setTasks((current) => current.map((task) => task.id === id ? { ...task, ...fields } : task));
  }

  function toggleTask(id) {
    setTasks((current) => current.map((task) => task.id === id ? { ...task, completed: !task.completed } : task));
  }

  function removeTask(id) {
    setTasks((current) => current.filter((task) => task.id !== id));
  }

  function addExamples(examples) {
    setTasks((current) => [
      ...current,
      ...examples.filter((example) => !current.some((task) => task.id === example.id)),
    ]);
  }

  return (
    <TasksContext.Provider value={{ tasks, addTask, editTask, toggleTask, removeTask, addExamples }}>
      {children}
    </TasksContext.Provider>
  );
}
