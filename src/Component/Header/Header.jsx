import { useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/PatientRegister", label: "PatientRegister" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <div>
      {/* <!-- Header & Navigation Bar --> */}
      <header>
        <div className="logo">Accurate World Laboratory</div>
        <nav>
          <ul>
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={close}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="btn-register">
              <Link to="/Register">Register</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
