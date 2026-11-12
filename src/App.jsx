import { BrowserRouter, Link, Route, Routes } from 'react-router';
import Header from './components/Header';
import TaskListPage from './pages/TaskListPage';
import TaskEditorPage from './pages/TaskEditorPage';
import { TasksProvider } from './state/TasksProvider';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <TasksProvider>
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<TaskListPage />} />
            <Route path="/tasks/new" element={<TaskEditorPage key="new" />} />
            <Route path="/tasks/:id/edit" element={<TaskEditorPage />} />
            <Route path="*" element={<><h1>Сторінку не знайдено</h1><Link to="/">До списку завдань</Link></>} />
          </Routes>
        </main>
      </TasksProvider>
    </BrowserRouter>
  );
}

export default App;
