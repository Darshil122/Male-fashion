import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryProducts } from "../features/productSlice";
import Products from "../components/Products";
import ProductsSkeleton from "../components/skeleton/ProductsSkeleton";

const Product = () => {
  const {category} = useParams();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.product);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      await dispatch(fetchCategoryProducts(category || "all"));
    };
    fetchProducts();
  }, [dispatch, category]);
  const allProducts = items.products || items.data ||[];
  const PER_PAGE = 8;
  const totalPages = Math.ceil(allProducts.length / PER_PAGE); 
  return (
    <div>
      <section className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h4>Shop {category}</h4>
                <div className="breadcrumb__links">
                  <Link to="/">Home</Link>
                  <span>Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shop spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="shop__sidebar">
                <div className="shop__sidebar__search">
                  <form action="#">
                    <input type="text" placeholder="Search..." />
                    <button type="submit">
                      <span className="icon_search"></span>
                    </button>
                  </form>
                </div>
                {/* <div className="shop__sidebar__accordion">
                  <div className="accordion" id="accordionExample">
                    <div className="card">
                      <div className="card-heading">
                        <a data-toggle="collapse" data-target="#collapseOne">
                          Categories
                        </a>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        // data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <div className="shop__sidebar__categories">
                            <ul className="nice-scroll">
                              <li>
                                <Link to="/">Men (20)</Link>
                              </li>
                              <li>
                                <Link to="/">Women (20)</Link>
                              </li>
                              <li>
                                <Link to="/">Bags (20)</Link>
                              </li>
                              <li>
                                <Link to="/">Clothing (20)</Link>
                              </li>
                              <li>
                                <Link to="/">Shoes (20)</Link>
                              </li>
                              <li>
                                <Link to="/">Accessories (20)</Link>
                              </li>
                              <li>
                                <Link to="/">Kids (20)</Link>
                              </li>
                              <li>
                                <Link to="/">Kids (20)</Link>
                              </li>
                              <li>
                                <Link to="/">Kids (20)</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-heading">
                        <a data-toggle="collapse" data-target="#collapseTwo">
                          Branding
                        </a>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse show"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <div className="shop__sidebar__brand">
                            <ul>
                              <li>
                                <Link to="/">Louis Vuitton</Link>
                              </li>
                              <li>
                                <Link to="/">Chanel</Link>
                              </li>
                              <li>
                                <Link to="/">Hermes</Link>
                              </li>
                              <li>
                                <Link to="/">Gucci</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-heading">
                        <a data-toggle="collapse" data-target="#collapseThree">
                          Filter Price
                        </a>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse show"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <div className="shop__sidebar__price">
                            <ul>
                              <li>
                                <Link to="/">$0.00 - $50.00</Link>
                              </li>
                              <li>
                                <Link to="/">$50.00 - $100.00</Link>
                              </li>
                              <li>
                                <Link to="/">$100.00 - $150.00</Link>
                              </li>
                              <li>
                                <Link to="/">$150.00 - $200.00</Link>
                              </li>
                              <li>
                                <Link to="/">$200.00 - $250.00</Link>
                              </li>
                              <li>
                                <Link to="/">250.00+</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-heading">
                        <a data-toggle="collapse" data-target="#collapseFour">
                          Size
                        </a>
                      </div>
                      <div
                        id="collapseFour"
                        className="collapse show"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <div className="shop__sidebar__size">
                            <label htmlFor="xs">
                              xs
                              <input type="radio" id="xs" />
                            </label>
                            <label htmlFor="sm">
                              s
                              <input type="radio" id="sm" />
                            </label>
                            <label htmlFor="md">
                              m
                              <input type="radio" id="md" />
                            </label>
                            <label htmlFor="xl">
                              xl
                              <input type="radio" id="xl" />
                            </label>
                            <label htmlFor="2xl">
                              2xl
                              <input type="radio" id="2xl" />
                            </label>
                            <label htmlFor="xxl">
                              xxl
                              <input type="radio" id="xxl" />
                            </label>
                            <label htmlFor="3xl">
                              3xl
                              <input type="radio" id="3xl" />
                            </label>
                            <label htmlFor="4xl">
                              4xl
                              <input type="radio" id="4xl" />/
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-heading">
                        <a data-toggle="collapse" data-target="#collapseFive">
                          Colors
                        </a>
                      </div>
                      <div
                        id="collapseFive"
                        className="collapse show"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <div className="shop__sidebar__color">
                            <label className="c-1" htmlFor="sp-1">
                              <input type="radio" id="sp-1" />
                            </label>
                            <label className="c-2" htmlFor="sp-2">
                              <input type="radio" id="sp-2" />
                            </label>
                            <label className="c-3" htmlFor="sp-3">
                              <input type="radio" id="sp-3" />
                            </label>
                            <label className="c-4" htmlFor="sp-4">
                              <input type="radio" id="sp-4" />
                            </label>
                            <label className="c-5" htmlFor="sp-5">
                              <input type="radio" id="sp-5" />
                            </label>
                            <label className="c-6" htmlFor="sp-6">
                              <input type="radio" id="sp-6" />
                            </label>
                            <label className="c-7" htmlFor="sp-7">
                              <input type="radio" id="sp-7" />
                            </label>
                            <label className="c-8" htmlFor="sp-8">
                              <input type="radio" id="sp-8" />
                            </label>
                            <label className="c-9" htmlFor="sp-9">
                              <input type="radio" id="sp-9" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-heading">
                        <a data-toggle="collapse" data-target="#collapseSix">
                          Tags
                        </a>
                      </div>
                      <div
                        id="collapseSix"
                        className="collapse show"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <div className="shop__sidebar__tags">
                            <Link to="/">Product</Link>
                            <Link to="/">Bags</Link>
                            <Link to="/">Shoes</Link>
                            <Link to="/">Fashio</Link>
                            <Link to="/">Clothing</Link>
                            <Link to="/">Hats</Link>
                            <Link to="/">Accessories</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-12">
              {/* product components */}
              {!allProducts || allProducts.length === 0 ? (
                <ProductsSkeleton />
              ) : (
                <Products
                  products={allProducts}
                  page={page}
                  PER_PAGE={PER_PAGE}
                />
              )}
              <div className="row">
                <div className="col-lg-12">
                  <div className="product__pagination">
                    {Array.from({ length: totalPages }, (_, i) => (
                      <Link
                        className={`m-1 border ${
                          page === i + 1
                            ? "bg-primary text-white border-none"
                            : ""
                        }`}
                        to="#"
                        key={i}
                        onClick={() => setPage(i + 1)}
                      >
                        {i + 1}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
