import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, removeFromCart, addToCart } from "../features/cartSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
// import cart1 from "../img/shopping-cart/cart-1.jpg";

const Cart = () => {
  const dispatch = useDispatch();
  const {cart} = useSelector((state) => state.cart);
  // const products = Array.isArray(cart?.products) ? cart.products : [];
  const products = Array.isArray(cart?.products)
    ? cart.products.filter((item) => item.productId !== null)
    : [];

  // console.log("fetch cart", products);
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  // useEffect(() => {
  //   if (cart?.products) {
  //     const invalidItems = cart.products.filter((item) => !item.productId);

  //     if (invalidItems.length > 0) {
  //       toast.info("Removed unavailable products from your cart");
  //     }
  //   }
  // }, [cart]);

  return (
    <div>
      <section className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h4>Shopping Cart</h4>
                {/* <div className="breadcrumb__links">
                  <Link to="/">Home</Link>
                  <span>Shop</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Shopping Cart Section Begin --> */}
      <section className="shopping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="shopping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <tr key={item._id}>
                      <td className="product__cart__item">
                        <div className="product__cart__item__pic">
                          <img
                            src={item.productId.image}
                            alt={item.productId.name}
                          />
                        </div>
                        <div className="product__cart__item__text">
                          <h6>{item.productId.name}</h6>
                          <h5>₹{item.productId.price}</h5>
                        </div>
                      </td>
                      <td className="quantity__item">
                        <div className="quantity">
                          <div className="pro-qty-2">
                            <input type="text" value={item.quantity} readOnly />
                          </div>
                        </div>
                      </td>
                      <td className="cart__price">
                        ₹{item.productId.price * item.quantity}
                      </td>
                      <td
                        className="cart__close"
                        onClick={() =>
                          dispatch(removeFromCart(item.productId._id))
                            .then(() => dispatch(fetchCart()))
                            .then(() => {
                              toast.success(
                                "Item removed from cart successfully"
                              );
                            })
                        }
                        style={{ cursor: "pointer" }}
                      >
                        <i className="fa fa-close"></i>
                      </td>
                    </tr> */}
                    {products.length > 0 ? (
                      products.map((item) => (
                        <tr key={item._id}>
                          <td className="product__cart__item">
                            <div className="product__cart__item__pic">
                              <img
                                src={item.productId.image}
                                alt={item.productId.name}
                                height="150"
                                width="150"
                              />
                            </div>
                            <div className="product__cart__item__text">
                              <h6>{item.productId.name}</h6>
                              <h5>
                                ₹
                                {(
                                  item.productId.price *
                                  (1 - item.productId.discountPercent / 100)
                                ).toFixed(2)}
                              </h5>
                            </div>
                          </td>
                          <td className="quantity__item">
                            <div className="quantity">
                              <div
                                className="input-group"
                                style={{ width: "120px" }}
                              >
                                <button
                                  className="btn btn-outline-secondary"
                                  type="button"
                                  disabled={item.quantity <= 1}
                                >
                                  −
                                </button>

                                <input
                                  type="text"
                                  className="form-control text-center"
                                  value={item.quantity}
                                  readOnly
                                />

                                <button
                                  className="btn btn-outline-secondary"
                                  type="button"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className="cart__price">
                            ₹{item.productId.price * item.quantity}
                          </td>
                          <td
                            className="cart__close"
                            onClick={() =>
                              dispatch(removeFromCart(item.productId._id))
                                .then(() => dispatch(fetchCart()))
                                .then(() => {
                                  toast.success(
                                    "Item removed from cart successfully"
                                  );
                                })
                            }
                            style={{ cursor: "pointer" }}
                          >
                            <i className="fa fa-close"></i>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4">Your cart is empty</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="continue__btn">
                    <Link to="/category/all">Continue Shopping</Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="continue__btn update__btn">
                    {/* <Link to="#">
                      <i className="fa fa-spinner"></i> Update cart
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              {/* <div className="cart__discount">
                <h6>Discount codes</h6>
                <form action="#">
                  <input type="text" placeholder="Coupon code" />
                  <button type="submit">Apply</button>
                </form>
              </div> */}
              <div className="cart__total">
                <h6>Cart total</h6>
                <ul>
                  <li>
                    Subtotal <span>$ 169.50</span>
                  </li>
                  <li>
                    Total <span>$ 169.50</span>
                  </li>
                </ul>
                <Link to="#" className="primary-btn">
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Shopping Cart Section End --> */}
    </div>
  );
};

export default Cart;
