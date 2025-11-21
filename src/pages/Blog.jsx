import React from "react";
import breadcrumb from "../img/breadcrumb-bg.jpg";
import blog1 from "../img/blog/blog-1.jpg";
import blog2 from "../img/blog/blog-2.jpg";
import blog3 from "../img/blog/blog-3.jpg";
import blog4 from "../img/blog/blog-4.jpg";
import blog5 from "../img/blog/blog-5.jpg";
import blog6 from "../img/blog/blog-6.jpg";
import blog7 from "../img/blog/blog-7.jpg";
import blog8 from "../img/blog/blog-8.jpg";
import blog9 from "../img/blog/blog-9.jpg";
import calendar from "../img/icon/calendar.png";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <section
        className="breadcrumb-blog set-bg"
        data-setbg="img/breadcrumb-bg.jpg"
        style={{
          backgroundImage: `url(${breadcrumb})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Our Blog</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="blog spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" style={{
                          backgroundImage: `url(${blog1})`,
                          backgroundSize: "cover"
                        }}></div>
                        <div className="blog__item__text">
                            <span><img src={calendar} alt=""/> 16 February 2020</span>
                            <h5>What Curling Irons Are The Best Ones</h5>
                            <Link to="/">Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" style={{
                          backgroundImage: `url(${blog2})`,
                          backgroundSize: "cover"
                        }}></div>
                        <div className="blog__item__text">
                            <span><img src={calendar} alt=""/> 21 February 2020</span>
                            <h5>Eternity Bands Do Last Forever</h5>
                            <Link to="/">Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" style={{
                          backgroundImage: `url(${blog3})`,
                          backgroundSize: "cover"
                        }}></div>
                        <div className="blog__item__text">
                            <span><img src={calendar} alt=""/> 28 February 2020</span>
                            <h5>The Health Benefits Of Sunglasses</h5>
                            <Link to="/">Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" style={{
                          backgroundImage: `url(${blog4})`,
                          backgroundSize: "cover"
                        }}></div>
                        <div className="blog__item__text">
                            <span><img src={calendar} alt=""/> 16 February 2020</span>
                            <h5>Aiming For Higher The Mastopexy</h5>
                            <Link to="/">Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" style={{
                          backgroundImage: `url(${blog5})`,
                          backgroundSize: "cover"
                        }}></div>
                        <div className="blog__item__text">
                            <span><img src={calendar} alt=""/> 21 February 2020</span>
                            <h5>Wedding Rings A Gift For A Lifetime</h5>
                            <Link to="/">Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" style={{
                          backgroundImage: `url(${blog6})`,
                          backgroundSize: "cover"
                        }}></div>
                        <div className="blog__item__text">
                            <span><img src={calendar} alt=""/> 28 February 2020</span>
                            <h5>The Different Methods Of Hair Removal</h5>
                            <Link to="/">Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" style={{
                          backgroundImage: `url(${blog7})`,
                          backgroundSize: "cover"
                        }}></div>
                        <div className="blog__item__text">
                            <span><img src={calendar} alt=""/> 16 February 2020</span>
                            <h5>Hoop Earrings A Style From History</h5>
                            <Link to="/">Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" style={{
                          backgroundImage: `url(${blog8})`,
                          backgroundSize: "cover"
                        }}></div>
                        <div className="blog__item__text">
                            <span><img src={calendar} alt=""/> 21 February 2020</span>
                            <h5>Lasik Eye Surgery Are You Ready</h5>
                            <Link to="/">Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" style={{
                          backgroundImage: `url(${blog9})`,
                          backgroundSize: "cover"
                        }}></div>
                        <div className="blog__item__text">
                            <span><img src={calendar} alt=""/> 28 February 2020</span>
                            <h5>Lasik Eye Surgery Are You Ready</h5>
                            <Link to="/">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default Blog;
