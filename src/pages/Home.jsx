import { React, useEffect } from "react";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import hero1 from "../img/hero/hero-1.jpg";
import banner2 from "../img/banner/banner-2.jpg";
import banner3 from "../img/banner/banner-3.jpg";
import productSale from "../img/product-sale.png";
import ig1 from "../img/instagram/instagram-1.jpg";
import ig2 from "../img/instagram/instagram-2.jpg";
import ig3 from "../img/instagram/instagram-3.jpg";
import ig4 from "../img/instagram/instagram-4.jpg";
import ig5 from "../img/instagram/instagram-5.jpg";
import ig6 from "../img/instagram/instagram-6.jpg";
import { Link } from "react-router-dom";
import Products from "../components/Products";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategoryProducts } from "../features/productSlice";
// import ProductsSkeleton from "../components/skeleton/ProductsSkeleton";

const Home = () => {
  const { items } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      await dispatch(fetchCategoryProducts("all"));
    };
    fetchProducts();
  }, [dispatch]);
  const top8Products = items.products?.slice(0, 8) || [];
  return (
    <>
      <section className="hero">
        <div className="">
          <div
            className="hero__items"
            style={{
              backgroundImage: `url(${hero1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-7 col-md-8">
                  <div className="">
                    <h5 className="text-danger">Summer Collection</h5>
                    <h2>Fall - Winter Collections 2030</h2>
                    <p>
                      A specialist label creating luxury essentials. Ethically
                      crafted with an unwavering commitment to exceptional
                      quality.
                    </p>
                    <Link to="/category/all" className="primary-btn">
                      Shop now <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                    <div className="hero__social">
                      <Link to="/">
                        <i className="fa fa-facebook"></i>
                      </Link>
                      <Link to="/">
                        <i className="fa fa-twitter"></i>
                      </Link>
                      <Link to="/">
                        <i className="fa fa-pinterest"></i>
                      </Link>
                      <Link to="/">
                        <i className="fa fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="banner spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 offset-lg-2 mb-5">
              <div className="banner__item">
                <div className="banner__item__pic">
                  <img src={banner2} alt="" className="img-fluid w-90" />
                </div>
                <div className="banner__item__text mx-5">
                  <h2>Accessories</h2>
                  <Link to="/category/all">Shop now</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-9 offset-lg-2">
              <div className="row align-items-center banner__item">
                <div className="col-md-6">
                  <div className="banner__item__pic">
                    <img
                      src={banner3}
                      alt="Accessories"
                      className="img-fluid w-90"
                    />
                  </div>
                </div>
                <div
                  className="banner__item__text"
                  style={{ marginLeft: "70%" }}
                >
                  <h2>Shoes Spring 2030</h2>
                  <Link to="/category/all">Shop now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="filter__controls">
                <h2 className="">Our Best Products</h2>
              </ul>
            </div>
          </div>
          <div className="row product__filter">
            {/* Product components */}
            {!top8Products || top8Products.length === 0 ? (
              <div>Loading Products...</div>
            ) : (
              <Products products={top8Products} />
            )}
          </div>
        </div>
      </section>

      <section className="categories spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="categories__text">
                <h2>
                  Clothings Hot <br /> <span>Shoe Collection</span> <br />{" "}
                  Accessories
                </h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="categories__hot__deal">
                <img src={productSale} alt="" />
                <div className="hot__deal__sticker">
                  <span>Sale Of</span>
                  <h5>$29.99</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1">
              <div className="categories__deal__countdown">
                <span>Deal Of The Week</span>
                <h2>Multi-pocket Chest Bag Black</h2>
                <div
                  className="categories__deal__countdown__timer"
                  id="countdown"
                >
                  <div className="cd-item">
                    <span>3</span>
                    <p>Days</p>
                  </div>
                  <div className="cd-item">
                    <span>1</span>
                    <p>Hours</p>
                  </div>
                  <div className="cd-item">
                    <span>50</span>
                    <p>Minutes</p>
                  </div>
                  <div className="cd-item">
                    <span>18</span>
                    <p>Seconds</p>
                  </div>
                </div>
                <Link to="/category/all" className="primary-btn">
                  Shop now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="instagram spad mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="instagram__pic">
                <div
                  className="instagram__pic__item set-bg"
                  style={{
                    backgroundImage: `url(${ig1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div
                  className="instagram__pic__item set-bg"
                  style={{
                    backgroundImage: `url(${ig2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div
                  className="instagram__pic__item set-bg"
                  style={{
                    backgroundImage: `url(${ig3})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div
                  className="instagram__pic__item set-bg"
                  style={{
                    backgroundImage: `url(${ig4})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div
                  className="instagram__pic__item set-bg"
                  style={{
                    backgroundImage: `url(${ig5})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div
                  className="instagram__pic__item set-bg"
                  style={{
                    backgroundImage: `url(${ig6})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="instagram__text">
                <h2>Instagram</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <h3>#Male_Fashion</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
