import './App.css';
import {NavLink, Route, Routes} from 'react-router-dom';
import Admin from './components/Admin/Admin';

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
              <NavLink to="/" >Admin</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/pages/:pageName" element={} />
        </Routes>
      </main>
    </>
  )
}

export default App;
