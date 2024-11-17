import React from 'react'
import { Link } from 'react-router-dom'

const BestSeller = () => {
  return (
    <section id="products" className="products">
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 text-content text-center">
            <h2>BEST SELLER</h2>
            <p> Our Best Selling Products.</p>
          </div>
          <div className="col-12">
            <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="jwellery-tab" data-bs-toggle="tab" data-bs-target="#jwellery"
                  type="button" role="tab" aria-controls="jwellery" aria-selected="true">Bracelets</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="ring-tab" data-bs-toggle="tab" data-bs-target="#ring" type="button"
                  role="tab" aria-controls="ring" aria-selected="false">Rings</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="earings-tab" data-bs-toggle="tab" data-bs-target="#earings" type="button"
                  role="tab" aria-controls="earings" aria-selected="false">Earrings</button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="jwellery" role="tabpanel" aria-labelledby="jwellery-tab">
                <div className="row">
                  <div className="col-md-3 col-sm-6 mb-3">
                    <div className="item-product">
                      <Link to="/Products" className="product-thumb-link">
                        <img src="image/product-img/b-1.jpg" alt="product1" className="img-fluid"/>
                      </Link>
                    </div>
                    <div className="product-info">
                      <div className="d-flex justify-content-between py-3">
                        <span className="cat-parent">Women</span>
                        <Link to="/WishList" className="wishlist">
                          <i className="fa fa-heart"></i>
                        </Link>
                      </div>
                      <h4 className="product-title">
                        <Link to="/Products">Titanium Bracelet in ged palladiumfinish metal</Link>
                      </h4>
                      <div className="product-price">
                        <ins><span className="money text-white">₹ 70,000.00</span></ins>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="rating">
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="basket">
                          <Link to="/Cart"><i className="fas fa-shopping-basket"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-3">
                    <div className="item-product">
                      <Link to="/Products" className="product-thumb-link">
                        <img src="image/product-img/b-2.jpg" alt="product1" className="img-fluid"/>
                      </Link>
                    </div>
                    <div className="product-info">
                      <div className="d-flex justify-content-between py-3">
                        <span className="cat-parent">Women</span>
                        <Link to="/WishList" className="wishlist">
                          <i className="fa fa-heart"></i>
                        </Link>
                      </div>
                      <h4 className="product-title">
                        <Link to="/products">White Gold Bracelet in ged palladiumfinish metal</Link>
                      </h4>
                      <div className="product-price">
                        <ins><span className="money text-white">₹50,000.00</span></ins>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="rating">
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="basket">
                          <Link to="/Cart"><i className="fas fa-shopping-basket"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-3">
                    <div className="item-product">
                      <Link to="/Products" className="product-thumb-link">
                        <img src="image/product-img/b-3.jpg" alt="product1" className="img-fluid"/>
                      </Link>
                    </div>
                    <div className="product-info">
                      <div className="d-flex justify-content-between py-3">
                        <span className="cat-parent">Women</span>
                        <Link to="/WishList" className="wishlist">
                          <i className="fa fa-heart"></i>
                        </Link>
                      </div>
                      <h4 className="product-title">
                        <Link to="/Products">Silver Bracelet in ged palladiumfinish metal</Link>
                      </h4>
                      <div className="product-price">
                        <ins><span className="money text-white">₹ 20,000.00</span></ins>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="rating">
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="basket">
                          <Link to="/Cart"><i className="fas fa-shopping-basket"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-3">
                    <div className="item-product">
                      <Link to="/Products" className="product-thumb-link">
                        <img src="image/product-img/b-4.jpg" alt="product1" className="img-fluid"/>
                      </Link>
                    </div>
                    <div className="product-info">
                      <div className="d-flex justify-content-between py-3">
                        <span className="cat-parent">Women</span>
                        <Link to="/WishList" className="wishlist">
                          <i className="fa fa-heart"></i>
                        </Link>
                      </div>
                      <h4 className="product-title">
                        <Link to="/Products">Diamond Bracelet in ged palladiumfinish metal</Link>
                      </h4>
                      <div className="product-price">
                        <ins><span className="money text-white">₹100,000.00</span></ins>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="rating">
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="basket">
                        <Link to="/Cart"><i className="fas fa-shopping-basket"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="ring" role="tabpanel" aria-labelledby="ring-tab">
                <div className="row">
                  <div className="col-md-3 col-sm-6 mb-3">
                    <div className="item-product">
                      <Link to="/Products" className="product-thumb-link">
                        <img src="image/product-img/r-1.jpg" alt="product1" className="img-fluid"/>
                      </Link>
                    </div>
                    <div className="product-info">
                      <div className="d-flex justify-content-between py-3">
                        <span className="cat-parent">Women</span>
                        <Link to="/WishList" className="wishlist">
                          <i className="fa fa-heart"></i>
                        </Link>
                      </div>
                      <h4 className="product-title">
                        <Link to="/Products">Titanium ring in ged palladiumfinish metal</Link>
                      </h4>
                      <div className="product-price">
                        <ins><span className="money text-white">₹20,00.00</span></ins>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="rating">
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="basket">
                        <Link to="/Cart"><i className="fas fa-shopping-basket"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-3">
                    <div className="item-product">
                      <Link to="/Products" className="product-thumb-link">
                        <img src="image/product-img/r-2.jpg" alt="product1" className="img-fluid"/>
                      </Link>
                    </div>
                    <div className="product-info">
                      <div className="d-flex justify-content-between py-3">
                        <span className="cat-parent">Women</span>
                        <Link to="/WishList" className="wishlist">
                          <i className="fa fa-heart"></i>
                        </Link>
                      </div>
                      <h4 className="product-title">
                        <Link to="/Products">Blue Stone ring in ged palladiumfinish metal</Link>
                      </h4>
                      <div className="product-price">
                        <ins><span className="money text-white">₹10,000.00</span></ins>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="rating">
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="basket">
                        <Link to="/Cart"><i className="fas fa-shopping-basket"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-3">
                    <div className="item-product">
                      <Link to="/Products" className="product-thumb-link">
                        <img src="image/product-img/r-3.jpg" alt="product1" className="img-fluid"/>
                      </Link>
                    </div>
                    <div className="product-info">
                      <div className="d-flex justify-content-between py-3">
                        <span className="cat-parent">Women</span>
                        <Link to="/WishList" className="wishlist">
                          <i className="fa fa-heart"></i>
                        </Link>
                      </div>
                      <h4 className="product-title">
                        <Link to="/Products">White Stone ring in ged palladiumfinish metal</Link>
                      </h4>
                      <div className="product-price">
                        <ins><span className="money text-white">₹8,000.00</span></ins>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="rating">
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="basket">
                        <Link to="/Cart"><i className="fas fa-shopping-basket"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-3">
                    <div className="item-product">
                      <Link to="/Products" className="product-thumb-link">
                        <img src="image/product-img/r-4.jpg" alt="product1" className="img-fluid"/>
                      </Link>
                    </div>
                    <div className="product-info">
                      <div className="d-flex justify-content-between py-3">
                        <span className="cat-parent">Women</span>
                        <Link to="/WishList" className="wishlist">
                          <i className="fa fa-heart"></i>
                        </Link>
                      </div>
                      <h4 className="product-title">
                        <Link to="/Products">Diamond ring in ged palladiumfinish metal</Link>
                      </h4>
                      <div className="product-price">
                        <ins><span className="money text-white">₹75,000.00</span></ins>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="rating">
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="basket">
                        <Link to="/Cart"><i className="fas fa-shopping-basket"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="earings" role="tabpanel" aria-labelledby="earings-tab">
                <div className="row">
                  <div className="col-md-3 col-sm-6 mb-3">
                    <div className="item-product">
                      <Link to="/Products" className="product-thumb-link">
                        <img src="image/product-img/e-1.jpg" alt="product1" className="img-fluid"/>
                      </Link>
                    </div>
                    <div className="product-info">
                      <div className="d-flex justify-content-between py-3">
                        <span className="cat-parent">Women</span>
                        <Link to="/WishList" className="wishlist">
                          <i className="fa fa-heart"></i>
                        </Link>
                      </div>
                      <h4 className="product-title">
                        <Link to="/Products">Earings in ged palladiumfinish metal</Link>
                      </h4>
                      <div className="product-price">
                        <ins><span className="money text-white">₹3,000.00</span></ins>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="rating">
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="basket">
                        <Link to="/Cart"><i className="fas fa-shopping-basket"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-3">
                    <div className="item-product">
                      <Link to="/Products" className="product-thumb-link">
                        <img src="image/product-img/e-2.jpg" alt="product1" className="img-fluid"/>
                      </Link>
                    </div>
                    <div className="product-info">
                      <div className="d-flex justify-content-between py-3">
                        <span className="cat-parent">Women</span>
                        <Link to="/WishList" className="wishlist">
                          <i className="fa fa-heart"></i>
                        </Link>
                      </div>
                      <h4 className="product-title">
                        <Link to="/Products">Titanium earrings in ged palladiumfinish metal</Link>
                      </h4>
                      <div className="product-price">
                        <ins><span className="money text-white">₹10,000.00</span></ins>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="rating">
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="basket">
                        <Link to="/Cart"><i className="fas fa-shopping-basket"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-3">
                    <div className="item-product">
                      <Link to="/Products" className="product-thumb-link">
                        <img src="image/product-img/e-3.jpg" alt="product1" className="img-fluid"/>
                      </Link>
                    </div>
                    <div className="product-info">
                      <div className="d-flex justify-content-between py-3">
                        <span className="cat-parent">Women</span>
                        <Link to="/WishList" className="wishlist">
                          <i className="fa fa-heart"></i>
                        </Link>
                      </div>
                      <h4 className="product-title">
                        <Link to="/Products">White Gold earrings in ged palladiumfinish metal</Link>
                      </h4>
                      <div className="product-price">
                        <ins><span className="money text-white">₹15,000.00</span></ins>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="rating">
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="basket">
                        <Link to="/Cart"><i className="fas fa-shopping-basket"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-3">
                    <div className="item-product">
                      <Link to="/Products" className="product-thumb-link">
                        <img src="image/product-img/e-4.jpg" alt="product1" className="img-fluid"/>
                      </Link>
                    </div>
                    <div className="product-info">
                      <div className="d-flex justify-content-between py-3">
                        <span className="cat-parent">Women</span>
                        <Link to="/WishList" className="wishlist">
                          <i className="fa fa-heart"></i>
                        </Link>
                      </div>
                      <h4 className="product-title">
                        <Link to="/Products">Silver earrings in ged palladiumfinish metal</Link>
                      </h4>
                      <div className="product-price">
                        <ins><span className="money text-white">₹5,000.00</span></ins>
                      </div>
                      <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="rating">
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="basket">
                        <Link to="/Cart"><i className="fas fa-shopping-basket"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default BestSeller
