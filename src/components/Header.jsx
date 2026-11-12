import { Link, NavLink } from 'react-router';

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link className="brand" to="/"><span aria-hidden="true">✓</span> ToDo Manager</Link>
        <nav aria-label="Основна навігація">
          <NavLink to="/" end>Завдання</NavLink>
          <NavLink to="/tasks/new">Нове завдання</NavLink>
        </nav>
      </div>
    </header>
  );
}
export default Header;
