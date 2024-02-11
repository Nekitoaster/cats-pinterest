import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="header">
      <ul className="header__navigation">
        <li
          onClick={() => {
            navigate("/");
          }}
          className={
            pathname === "/"
              ? " " + "navigation__item navigation__item_active"
              : "navigation__item"
          }
        >
          Все котики
        </li>
        <li
          onClick={() => {
            navigate("/favourite");
          }}
          className={
            pathname === "/favourite"
              ? " " + "navigation__item navigation__item_active"
              : "navigation__item"
          }
        >
          Любимые котики
        </li>
      </ul>
    </div>
  );
}

export default Header;
