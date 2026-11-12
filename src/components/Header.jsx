import { NavLink } from 'react-router';

function Header() {
  return (
    <header className="container">
      <strong>ToDo Manager</strong>
      <nav aria-label="Основна навігація">
        <NavLink to="/" end>Список завдань</NavLink>
        <NavLink to="/tasks/new">Додати завдання</NavLink>
      </nav>
    </header>
  );
}
export default Header;
