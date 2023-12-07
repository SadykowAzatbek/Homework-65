import './App.css';
import {NavLink, Route, Routes} from 'react-router-dom';
import Admin from './components/Admin/Admin';
import Pages from './components/Pages/Pages';

function App() {
  return (
    <>
      <header className="d-flex justify-content-between bg-light p-3 rounded-3 mt-3">
        <h1>Static pages</h1>
        <nav>
          <ul className="navbar-nav ms-auto flex-row gap-2 flex-nowrap">
            <li className="nav-item">
              <NavLink to="/pages/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pages/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pages/contacts">Contacts</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pages/courses">Courses</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pages/admin">Admin</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<h2>Выберите один из пунктов навигации</h2>} />
          <Route path="/pages/:pageName" element={<Pages />} />
          <Route path="/pages/admin" element={<Admin />} />
        </Routes>
      </main>
    </>
  )
}

export default App;
