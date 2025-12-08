import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

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

const blogData = [
  {
    img: blog1,
    date: "16 February 2020",
    title: "What Curling Irons Are The Best Ones",
  },
  {
    img: blog2,
    date: "21 February 2020",
    title: "Eternity Bands Do Last Forever",
  },
  {
    img: blog3,
    date: "28 February 2020",
    title: "The Health Benefits Of Sunglasses",
  },
  {
    img: blog4,
    date: "16 February 2020",
    title: "Aiming For Higher The Mastopexy",
  },
  {
    img: blog5,
    date: "21 February 2020",
    title: "Wedding Rings A Gift For A Lifetime",
  },
  {
    img: blog6,
    date: "28 February 2020",
    title: "The Different Methods Of Hair Removal",
  },
  {
    img: blog7,
    date: "16 February 2020",
    title: "Hoop Earrings A Style From History",
  },
  {
    img: blog8,
    date: "21 February 2020",
    title: "Lasik Eye Surgery Are You Ready",
  },
  {
    img: blog9,
    date: "28 February 2020",
    title: "Lasik Eye Surgery Are You Ready",
  },
];

// Animation settings
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const Blog = () => {
  const ref = useRef(null);

  // Detect when blog grid comes into view
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <>
      {/* Breadcrumb */}
      <section
        className="breadcrumb-blog set-bg"
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

      {/* Blog Section */}
      <section className="blog spad">
        <div className="container">
          <motion.div
            ref={ref}
            className="row"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {blogData.map((item, index) => (
              <motion.div
                key={index}
                className="col-lg-4 col-md-6 col-sm-6"
                variants={cardVariants}
              >
                <div className="blog__item">
                  <div
                    className="blog__item__pic set-bg"
                    style={{
                      backgroundImage: `url(${item.img})`,
                      height: "280px",
                      backgroundSize: "cover",
                    }}
                  ></div>

                  <div className="blog__item__text">
                    <span>
                      <img src={calendar} alt="calendar" /> {item.date}
                    </span>
                    <h5>{item.title}</h5>
                    <Link to="/">Read More</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
