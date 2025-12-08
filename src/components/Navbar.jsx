import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import logo from "../img/logo.png";
// import search from "../img/icon/search.png";
// import heart from "../img/icon/heart.png";
import carticon from "../img/icon/cart.png";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { ShowProfile } from "../features/userSlice";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const currentPath = location.pathname;
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(ShowProfile());
    }
  }, [dispatch]);

  const { user } = useSelector((state) => state.userDetail);
const { cart } = useSelector((state) => state.cart);

const cartItems = Array.isArray(cart?.products)
  ? cart.products.filter((item) => item.productId !== null)
  : [];

const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      {/* <div id="preloder">
        <div className="loader"></div>
      </div> */}
      <div className="offcanvas-menu-overlay"></div>
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7">
                <div className="header__top__left">
                  <p>Free shipping, 30-day return or refund guarantee.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-5">
                <div className="header__top__right">
                  <div className="header__top__links">
                    {user ? (
                      <>
                        <Link>{user?.name}</Link>
                        <Link to="/Logout">LogOut</Link>
                      </>
                    ) : (
                      <Link to="/signIn">Sign In</Link>
                    )}
                    <Link to="/">FAQs</Link>
                  </div>
                  {/* <div className="header__top__hover">
                    <span>
                      Usd <FontAwesomeIcon icon={faCaretDown} />
                    </span>
                    <ul>
                      <li>USD</li>
                      <li>EUR</li>
                      <li>USD</li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="header__logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className={currentPath === "/" ? "active" : ""}>
                    <Link to="/">Home</Link>
                  </li>
                  {/* <li
                    className={
                      currentPath === "/product" ||
                      currentPath.startsWith("/product/")
                        ? "active"
                        : ""
                    }
                  >
                    <Link to="/product">Shop</Link>
                  </li> */}
                  <li
                    className={
                      currentPath.startsWith("/category/") ? "active" : ""
                    }
                  >
                    <Link to="/category/all">Category</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="/category/Men">Men</Link>
                      </li>
                      <li>
                        <Link to="/category/Women">Women</Link>
                      </li>
                      <li>
                        <Link to="/category/Kids">Kids</Link>
                      </li>
                    </ul>
                  </li>
                  <li className={currentPath === "/blogs" ? "active" : ""}>
                    <Link to="/blogs">Blog</Link>
                  </li>
                  <li className={currentPath === "/contact" ? "active" : ""}>
                    <Link to="/contact">Contacts</Link>
                  </li>
                  <li className={currentPath === "/about" ? "active" : ""}>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="header__nav__option">
                {/* <a href="#" className="search-switch">
                  <img src={search} alt="" />
                </a>
                <a href="#">
                  <img src={heart} alt="" />
                </a> */}
                <Link to="/shopping-cart" title="cart">
                  <img src={carticon} alt="" />
                  <span>{totalItems}</span>
                </Link>
                {/* <div className="price">$0.00</div> */}
              </div>
            </div>
          </div>
          <div className="canvas__open">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
