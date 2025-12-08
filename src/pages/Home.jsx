import { React, useEffect } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import hero1 from "../img/hero/hero-1.jpg";
import banner2 from "../img/banner/banner-2.jpg";
import banner3 from "../img/banner/banner-3.jpg";
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

//for animation
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const { items } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    const fetchProducts = async () => {
      await dispatch(fetchCategoryProducts("all"));
    };
    fetchProducts();
  }, [dispatch]);

  const top8Products = items.products?.slice(0, 8) || [];

  return (
    <>
      <section className="hero">
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
                <div className="col-xl-5 col-lg-7 col-md-8" data-aos="fade-up">
                  <h5 className="text-danger">Summer Collection</h5>
                  <h2 data-aos="fade-right">Fall - Winter Collections 2030</h2>
                  <p data-aos="fade-up" data-aos-delay="200">
                    A specialist label creating luxury essentials. Ethically
                    crafted with an unwavering commitment to exceptional
                    quality.
                  </p>
                  <Link
                    to="/category/all"
                    className="primary-btn"
                    data-aos="zoom-in"
                  >
                    Shop now <FontAwesomeIcon icon={faArrowRight} />
                  </Link>

                  <div className="hero__social" data-aos="fade-up">
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
      </section>

      <section className="banner spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 offset-lg-2 mb-5" data-aos="zoom-in">
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

            <div
              className="col-lg-9 offset-lg-2"
              data-aos="fade-up"
              data-aos-delay="150"
            >
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
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-right">
              <ul className="filter__controls">
                <h2>Our Best Products</h2>
              </ul>
            </div>
          </div>

          <div className="row product__filter" data-aos="fade-up">
            {!top8Products || top8Products.length === 0 ? (
              <div>Loading Products...</div>
            ) : (
              <Products products={top8Products} />
            )}
          </div>
        </div>
      </section>

      <section className="instagram spad mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="instagram__pic">
                {[ig1, ig2, ig3, ig4, ig5, ig6].map((img, i) => (
                  <div
                    key={i}
                    className="instagram__pic__item set-bg"
                    data-aos="zoom-in"
                    data-aos-delay={i * 100}
                    style={{
                      backgroundImage: `url(${img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-left" data-aos-delay="200">
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
