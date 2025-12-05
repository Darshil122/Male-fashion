import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategoryProducts,
  productDetails,
  productReview,
  submitProductReview,
} from "../features/productSlice";
import { addToCart } from "../features/cartSlice";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetailsSkeleton from "../components/skeleton/ProductDetailsSkeleton";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log("productId", id);

  const navigate = useNavigate();
  const [comment, setComment] = useState("");

  // Redux state
  const product = useSelector((state) => state.product.singleProduct);
  // const review = useSelector((state) => state.product.review);
  const { status } = useSelector((state) => state.cart);

  useEffect(() => {
    if (id) {
      dispatch(productDetails(id));
      dispatch(productReview({ productId: id }));
    }
    dispatch(fetchCategoryProducts("all"));
  }, [id, dispatch]);

  // Add to cart handler
  const handleAddToCart = () => {
    if (!product?._id) {
      toast.error("Product data is not available.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please log in first.");
      navigate("/signin");
      return;
    }

    dispatch(addToCart({ productId: product._id, quantity: 1 }))
      .unwrap()
      .then(() => {
        toast.success("Product added to cart successfully");
      })
      .catch((err) => {
        // console.log(err);
        if (err === "NOT_LOGGED_IN" || err === "SESSION_EXPIRED") {
          toast.error("Please log in first.");
          navigate("/signin");
          return;
        }

        toast.error("Failed to add product to cart.");
      });
  };

  // Submit review handler
  const handleSubmitReview = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
                          toast.error("Please log in first.");

      navigate("/signin");
      return;
    }

    if (!comment.trim()) {
      toast.error("Please enter your review");
      return;
    }

    dispatch(submitProductReview({ productId: id, comment }))
      .unwrap()
      .then(() => {
        toast.success("Review submitted successfully");
        setComment("");

        dispatch(productReview({ productId: id }));
        dispatch(productDetails(id));
      })
      .catch((error) => {
        if (error === "SESSION_EXPIRED") {
                    toast.error("Please log in first.");
        }
        toast.error("Failed to submit review.");
      });
  };

  const isOutOfStock = product?.stock === 0;

  // Render skeleton while loading
  if (!product._id) {
    // console.log("Produt id", product._id);
    return <ProductDetailsSkeleton />;
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="breadcrumb-option">
        <div className="container">
          <h3>Product Details</h3>
        </div>
      </section>

      {/* Product Details */}
      <section>
        <div className="container py-5">
          <div className="row align-items-start justify-content-center">
            {/* Product Image */}
            <div className="col-lg-6 mb-4">
              <img
                src={product?.image || "/placeholder.jpg"}
                alt={product?.name || "Product image"}
                className="img-fluid rounded shadow-sm w-100"
                style={{ objectFit: "cover", maxHeight: "500px" }}
              />
            </div>

            {/* Product Info */}
            <div className="col-lg-6">
              <span className="text-uppercase mb-2">{product?.category}</span>
              <h2 className="mb-2">{product?.name}</h2>

              {/* Price */}
              <div className="product-price-wrapper">
                {product?.discountPercent > 0 ? (
                  <>
                    <div className="final-price">
                      ₹
                      {Math.round(
                        product.price * (1 - product.discountPercent / 100)
                      )}
                    </div>
                    <div className="original-price">₹{product.price}</div>
                    <div className="discount-percent">
                      {product.discountPercent}% off
                    </div>
                  </>
                ) : (
                  <div className="final-price">₹{product?.price}</div>
                )}
              </div>

              {/* Description */}
              <h6 className="fw-bold mt-2">Product Description</h6>
              <p>{product?.description}</p>

              {/* Details */}
              <ul className="list-unstyled mt-3">
                <li>
                  <strong>Stock:</strong>{" "}
                  {product?.stock > 0
                    ? `${product.stock} available`
                    : "Out of Stock"}
                </li>
                <li>
                  <strong>Brand:</strong> {product?.brand || "-"}
                </li>
                <li>
                  <strong>Color:</strong> {product?.color || "-"}
                </li>
                <li>
                  <strong>Size:</strong> {product?.size || "-"}
                </li>
                <li>
                  <strong>Currency:</strong> {product?.currency || "-"}
                </li>
              </ul>

              {/* Add to Cart Button */}
              <div className="mt-4">
                <button
                  className="btn btn-primary"
                  disabled={isOutOfStock || status === "loading"}
                  onClick={handleAddToCart}
                >
                  {isOutOfStock
                    ? "Out of Stock"
                    : status === "loading"
                    ? "Adding..."
                    : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5">
            <h4 className="mb-4">Reviews</h4>
            {product?.reviews && product.reviews.length > 0 ? (
              product.reviews.map((rev, index) => (
                <div key={index} className="mb-3">
                  <strong>{rev.user}</strong>
                  <p>{rev.comment}</p>
                  <small>{new Date(rev.createdAt).toLocaleDateString()}</small>
                  <hr />
                </div>
              ))
            ) : (
              <p>No reviews available for this product.</p>
            )}
          </div>
        </div>
      </div>

      {/* Submit Review */}
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 mt-4">
            <h4>Submit Your Review</h4>
            <form
              onSubmit={handleSubmitReview}
              className="bg-white p-4 rounded shadow-sm"
            >
              <div className="mb-3">
                <label htmlFor="review" className="form-label fw-semibold mt-3">
                  Your Review
                </label>
                <textarea
                  className="form-control mt-2"
                  id="review"
                  rows="3"
                  placeholder="Write your review here..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-secondary">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
