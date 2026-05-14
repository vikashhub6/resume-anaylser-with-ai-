import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";
import "./navbar.scss";

const Navbar = () => {
  const { user, handleLogout } = useAuth();
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    await handleLogout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h2>Resume Analyzer</h2>
        </div>

        <div className="navbar-actions">
          {user && (
            <>
              <span className="user-greeting">
                Hi, <strong>{user.username}</strong>
              </span>
              <button onClick={handleLogoutClick} className="logout-btn">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
