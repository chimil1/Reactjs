import { Link } from "react-router-dom";
import logo from "../../asset/images/icon/logo.png"
function Menu() {
  return (
    <aside className="menu-sidebar d-none d-lg-block">
      <div className="logo">
        <Link to="/">
          <img src={`${logo}`} alt="Cool Admin" />
        </Link>
      </div>
      <div className="menu-sidebar__content js-scrollbar1">
        <nav className="navbar-sidebar">
          <ul className="list-unstyled navbar__list">
            <li className="active has-sub">
              <Link className="js-arrow" to="/">
                <i className="fas fa-tachometer-alt"></i>Bảng điều khiển
              </Link>
            </li>

            <li className="has-sub">
              <Link className="js-arrow" to="/qlpersonnel">
                <i className="fas fa-group"></i>Quản lý nhân viên
              </Link>
            </li>

            <li className="has-sub">
            <Link className="js-arrow" to="/qllist">
              <i className="far fa-folder-open"></i>Quản lý danh mục
            </Link>
          </li>

            <li className="has-sub">
            <Link className="js-arrow" to="/qlproduct">
              <i className="fas fa-table"></i>Quản lý sản phẩm
            </Link>
          </li>

            <li className="has-sub">
              <Link className="js-arrow" to="/addpersonnel">
                <i className="fas fa-plus-square"></i>Thêm nhân viên
              </Link>
            </li>

            <li className="has-sub">
            <Link className="js-arrow" to="/addlist">
              <i className="fas fa-list"></i>Thêm danh mục
            </Link>
          </li>

            <li className="has-sub">
            <Link className="js-arrow" to="/addproduct">
              <i className="far fa-check-square"></i>Thêm sản phẩm
            </Link>
          </li>

            <li className="has-sub">
              <a className="js-arrow" href="/">
                <i className="fas fa-copy"></i>Pages
              </a>
              <ul className="list-unstyled navbar__sub-list js-sub-list">
                <li>
                  <a href="login.html">Login</a>
                </li>
                <li>
                  <a href="register.html">Register</a>
                </li>
                <li>
                  <a href="forget-pass.html">Forget Password</a>
                </li>
              </ul>
            </li>
            <li className="has-sub">
              <a className="js-arrow" href="#">
                <i className="fas fa-desktop"></i>UI Elements
              </a>
              <ul className="list-unstyled navbar__sub-list js-sub-list">
                <li>
                  <a href="button.html">Button</a>
                </li>
                <li>
                  <a href="badge.html">Badges</a>
                </li>
                <li>
                  <a href="tab.html">Tabs</a>
                </li>
                <li>
                  <a href="card.html">Cards</a>
                </li>
                <li>
                  <a href="alert.html">Alerts</a>
                </li>
                <li>
                  <a href="progress-bar.html">Progress Bars</a>
                </li>
                <li>
                  <a href="modal.html">Modals</a>
                </li>
                <li>
                  <a href="switch.html">Switchs</a>
                </li>
                <li>
                  <a href="grid.html">Grids</a>
                </li>
                <li>
                  <a href="fontawesome.html">Fontawesome Icon</a>
                </li>
                <li>
                  <a href="typo.html">Typography</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
export default Menu;
