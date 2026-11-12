import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import Header from './components/Header';
import TaskListPage from './pages/TaskListPage';
import TaskEditorPage from './pages/TaskEditorPage';
import { TasksContext } from './tasksContext';
import './App.css';

const storageKey = 'todo-manager-tasks';

function readTasks() {
  try {
    const tasks = JSON.parse(localStorage.getItem(storageKey));
    return Array.isArray(tasks) ? tasks : [];
  } catch {
    return [];
  }
}

function App() {
  const [tasks, setTasks] = useState(readTasks);

  // Список зберігається після кожної зміни.
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(tasks));
    } catch (error) {
      console.warn('Не вдалося зберегти завдання', error);
    }
  }, [tasks]);

  function addTask(fields) {
    const task = { ...fields, id: crypto.randomUUID(), completed: false };
    setTasks((current) => [task, ...current]);
  }

  function editTask(id, fields) {
    setTasks((current) => current.map((task) => {
      return task.id === id ? { ...task, ...fields } : task;
    }));
  }

  function toggleTask(id) {
    setTasks((current) => current.map((task) => {
      return task.id === id ? { ...task, completed: !task.completed } : task;
    }));
  }

  function removeTask(id) {
    setTasks((current) => current.filter((task) => task.id !== id));
  }

  function addExamples(examples) {
    setTasks((current) => {
      const newTasks = examples.filter((example) => !current.some((task) => task.id === example.id));
      return [...current, ...newTasks];
    });
  }

  return (
    <BrowserRouter>
      <TasksContext.Provider value={{ tasks, addTask, editTask, toggleTask, removeTask, addExamples }}>
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<TaskListPage />} />
            <Route path="/tasks/new" element={<TaskEditorPage />} />
            <Route path="/tasks/:id/edit" element={<TaskEditorPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </TasksContext.Provider>
    </BrowserRouter>
  );
}

export default App;
