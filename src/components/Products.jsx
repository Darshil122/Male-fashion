import React from 'react'
import { Link } from 'react-router-dom'

const Products = ({ products }) => {
  return (
    <div className="row">
      {products?.map((item) => (
        <div
          key={item._id}
          className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mb-4"
        >
          <div className="product__item">
            <Link to={`/product/${item._id}`}>
              <div
                className="product__item__pic"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "250px",
                }}
              ></div>
            </Link>
            <div className="product__item__text">
              <h6>{item.name}</h6>
              <span className="product__category">
                Category: {item.category}
              </span>
              <Link to={`/product/${item._id}`} className="add-cart">
                + Add To Cart
              </Link>
              <h5>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: item.currency || "USD",
                }).format(item.price)}
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products
