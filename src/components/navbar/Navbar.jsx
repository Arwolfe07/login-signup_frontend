import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import decode from "jwt-decode";
import { setCurrentUser } from "../../actions/currentUser";
import './Navbar.css'

const Navbar = () => {
  const dispatch = useDispatch();
  var user = useSelector((state) => state.currentUserReducer);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    dispatch(setCurrentUser(null));
    navigate("/auth");
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [user?.token, dispatch]);




  return (
    <nav className='main-nav'>
      <div className='navbar'>
        <Link to='https://aditya-v2uh.onrender.com/' className='nav-item nav-logo'>
          Aditya Rana
        </Link>
        {user === null ? (
            <Link to="/auth" className="nav-item nav-links">
              Log in
            </Link>
          ) : (
            <>
              <button className="nav-item nav-links" onClick={handleLogout}>
                Log out
              </button>
            </>
          )}
      </div>
    </nav>
  )
}

export default Navbar;