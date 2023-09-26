import React, { Component } from 'react';
import Footer from './global-components/footer';
import Navbar from './global-components/navbar';

class shop extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL + '/'
        let imagealt = 'image'

        return <><>

            <Navbar />
            <div className="head-wrap-shop">
                <div className="ltn__slider-area ltn__slider-3  section-bg-2">
                    <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
                        {/* ltn__slide-item */}
                        <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60 image_effect"
                            data-bs-bg={publicUrl + "assets/img/others/shop_cta_xl_896f6b8270.webp"}>
                            <div className="ltn__slide-item-inner text-center">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 align-self-center">
                                            <div className="slide-item-info">
                                                <div className="slide-item-info-inner ltn__slide-animation">

                                                    <h1 className="slide-title animated ">A CONSOLE FOR <br></br>EVERY WORKFLOW</h1>
                                                    <p class="lead">Discover the perfect console for yours.</p>
                                                    <div className="slide-brief animated">
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

                <section>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-lg-6 mb-3">
                                <div className="">
                                    <img src={publicUrl + "assets/img/others/shop1.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <a className="text-dark1 text-decoration-none" href="/shop/products/mini-console/" target='_black'>
                                            <div className="d-flex pt-2">
                                                <div className="w-100">
                                                    <h3 className="h5  flex-grow-1" itemprop="name">Mini Console</h3>
                                                </div>
                                                <div className="product-module--cardOffer--e8927">
                                                    <dl itemscope="" itemprop="offers" itemtype="http://schema.org/Offer" className="product-module--cardPrice--8ba09">
                                                        {/* <dt clasNamclassNames="sr-only">Regular price</dt> */}
                                                        <dd itemprop="price">$249</dd>
                                                        <meta itemprop="priceCurrency" content="USD" />
                                                    </dl>

                                                    {/* <button type="primary" className="product-module--cardBtn--a29ad rounded-pill px-3 btn btn-primary">Shop Now</button> */}
                                                </div>

                                            </div>
                                            <p className="product-module--cardDescription--e89ea">Ideal for everyday shortcuts. Adaptable to any workflow.</p>
                                        </a>

                                    </div>
                                    <p class="product-module--cardBadges--64829">
                                        <span class="badge badge-danger text-uppercase ml-1 px-3 py-2">Pre-order</span>
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6 mb-3">
                                <div className="">
                                    <img src={publicUrl + "assets/img/others/shop2.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <a className="text-dark1 text-decoration-none" href="/shop/products/audio-console/" target='_black'>
                                            <div className="d-flex pt-2">
                                                <div className="w-100">
                                                    <h3 className="h5  flex-grow-1" itemprop="name">AUDIO CONSOLE</h3>
                                                </div>
                                                <div className="product-module--cardOffer--e8927">
                                                    <dl itemscope="" itemprop="offers" itemtype="http://schema.org/Offer" className="product-module--cardPrice--8ba09">
                                                        {/* <dt clasNamclassNames="sr-only">Regular price</dt> */}
                                                        <dd itemprop="price">$499</dd>
                                                        <meta itemprop="priceCurrency" content="USD" />
                                                    </dl>

                                                    {/* <button type="primary" className="product-module--cardBtn--a29ad rounded-pill px-3 btn btn-primary">Shop Now</button> */}
                                                </div>

                                            </div>
                                            <p className="product-module--cardDescription--e89ea">Ideal for everyday shortcuts. Adaptable to any workflow.</p>
                                        </a>
                                    </div>
                                </div>
                                <p class="product-module--cardBadges--64829">
                                    <span class="badge badge-danger text-uppercase ml-1 px-3 py-2">Pre-order</span>
                                </p>
                            </div>

                            <div className="col-lg-6 mb-3">
                                <div className="">
                                    <img src={publicUrl + "assets/img/others/shop3.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <a className="text-dark1 text-decoration-none" href="/shop/products/photo-console/" target='_black'>
                                            <div className="d-flex pt-2">
                                                <div className="w-100">
                                                    <h3 className="h5  flex-grow-1" itemprop="name">PHOTO CONSOLE</h3>
                                                </div>
                                                <div className="product-module--cardOffer--e8927">
                                                    <dl itemscope="" itemprop="offers" itemtype="http://schema.org/Offer" className="product-module--cardPrice--8ba09">
                                                        {/* <dt clasNamclassNames="sr-only">Regular price</dt> */}
                                                        <dd itemprop="price">$599</dd>
                                                        <meta itemprop="priceCurrency" content="USD" />
                                                    </dl>

                                                    {/* <button type="primary" className="product-module--cardBtn--a29ad rounded-pill px-3 btn btn-primary">Shop Now</button> */}
                                                </div>

                                            </div>
                                            <p className="product-module--cardDescription--e89ea">Ideal for everyday shortcuts. Adaptable to any workflow.</p>
                                        </a>
                                    </div>
                                </div>
                                <p class="product-module--cardBadges--64829">
                                    <span class="badge badge-danger text-uppercase ml-1 px-3 py-2">Pre-order</span>
                                </p>
                            </div>

                            <div className="col-lg-6 mb-3">
                                <div className="">
                                    <img src={publicUrl + "assets/img/others/shop4.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <a className="text-dark1 text-decoration-none" href="/shop/products/video-console/" target='_black'>
                                            <div className="d-flex pt-2">
                                                <div className="w-100">
                                                    <h3 className="h5  flex-grow-1" itemprop="name">VIDEO CONSOLE</h3>
                                                </div>
                                                <div className="product-module--cardOffer--e8927">
                                                    <dl itemscope="" itemprop="offers" itemtype="http://schema.org/Offer" className="product-module--cardPrice--8ba09">
                                                        {/* <dt clasNamclassNames="sr-only">Regular price</dt> */}
                                                        <dd itemprop="price">$899</dd>
                                                        <meta itemprop="priceCurrency" content="USD" />
                                                    </dl>

                                                    {/* <button type="primary" className="product-module--cardBtn--a29ad rounded-pill px-3 btn btn-primary">Shop Now</button> */}
                                                </div>

                                            </div>
                                            <p className="product-module--cardDescription--e89ea">Ideal for everyday shortcuts. Adaptable to any workflow.</p>
                                        </a>
                                    </div>
                                </div>
                                <p class="product-module--cardBadges--64829">
                                    <span class="badge badge-danger text-uppercase ml-1 px-3 py-2">Pre-order</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="ltn__slider-area ltn__slider-3  section-bg-2">
                        <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">

                            <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal--- ltn__slide-item-3 bg-image bg-overlay-theme-black-60 image_effect"
                                data-bs-bg={publicUrl + "assets/img/others/shop-banner-module.webp"}>
                                <div className="ltn__slide-item-inner text-center">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12 align-self-center">
                                                <div className="slide-item-info">
                                                    <div className="slide-item-info-inner ltn__slide-animation">

                                                        <div className="container d-flex align-items-top justify-content-start position-relative" style={{ zIndex: 1 }}>
                                                            <div className="w-100 my-5">
                                                                <h1 className="wrap-head-shop">Create Your Own&nbsp;Console</h1>
                                                                <p className="lead1">Add-on to make it perfect.</p>
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

                <section>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-lg-4 mb-3">
                                <div className="">
                                    <img src={publicUrl + "assets/img/others/shop5.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <a className="text-dark1 text-decoration-none" href="/shop/products/mini-console/" target='_black'>
                                            <div className="d-flex pt-2">
                                                <div className="w-100">
                                                    <h3 className="h5  flex-grow-1 animated-shop" itemprop="name">MONOGRAM CARRYING CASE</h3>
                                                </div>
                                                <div className="product-module--cardOffer--e8927">
                                                    <dl itemscope="" itemprop="offers" itemtype="http://schema.org/Offer" className="product-module--cardPrice--8ba09">
                                                        {/* <dt clasNamclassNames="sr-only">Regular price</dt> */}
                                                        <dd itemprop="price">$59</dd>
                                                        <meta itemprop="priceCurrency" content="USD" />
                                                    </dl>

                                                    {/* <button type="primary" className="product-module--cardBtn--a29ad rounded-pill px-3 btn btn-primary">Shop Now</button> */}
                                                </div>

                                            </div>
                                        </a>

                                    </div>
                                    {/* <p class="product-module--cardBadges--64829">
                                    <span class="badge badge-danger text-uppercase ml-1 px-3 py-2">Pre-order</span>
                                </p> */}
                                </div>
                            </div>

                            <div className="col-lg-4 mb-3">
                                <div className="">
                                    <img src={publicUrl + "assets/img/others/shop6.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <a className="text-dark1 text-decoration-none" href="/shop/products/audio-console/" target='_black'>
                                            <div className="d-flex pt-2">
                                                <div className="w-100">
                                                    <h3 className="h5  flex-grow-1 animated-shop" itemprop="name">MONOGRAM <br></br>COREE</h3>
                                                </div>
                                                <div className="product-module--cardOffer--e8927">
                                                    <dl itemscope="" itemprop="offers" itemtype="http://schema.org/Offer" className="product-module--cardPrice--8ba09">
                                                        {/* <dt clasNamclassNames="sr-only">Regular price</dt> */}
                                                        <dd itemprop="price">$159</dd>
                                                        <meta itemprop="priceCurrency" content="USD" />
                                                    </dl>

                                                    {/* <button type="primary" className="product-module--cardBtn--a29ad rounded-pill px-3 btn btn-primary">Shop Now</button> */}
                                                </div>

                                            </div>

                                        </a>
                                    </div>
                                </div>
                                {/* <p class="product-module--cardBadges--64829">
                                <span class="badge badge-danger text-uppercase ml-1 px-3 py-2">Pre-order</span>
                            </p> */}
                            </div>

                            <div className="col-lg-4 mb-3">
                                <div className="">
                                    <img src={publicUrl + "assets/img/others/shop7.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <a className="text-dark1 text-decoration-none" href="/shop/products/photo-console/" target='_black'>
                                            <div className="d-flex pt-2">
                                                <div className="w-100">
                                                    <h3 className="h5  flex-grow-1 animated-shop" itemprop="name">SLIDER MODULE</h3>
                                                </div>
                                                <div className="product-module--cardOffer--e8927">
                                                    <dl itemscope="" itemprop="offers" itemtype="http://schema.org/Offer" className="product-module--cardPrice--8ba09">
                                                        {/* <dt clasNamclassNames="sr-only">Regular price</dt> */}
                                                        <dd itemprop="price">$1599</dd>
                                                        <meta itemprop="priceCurrency" content="USD" />
                                                    </dl>

                                                    {/* <button type="primary" className="product-module--cardBtn--a29ad rounded-pill px-3 btn btn-primary">Shop Now</button> */}
                                                </div>

                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/* <p class="product-module--cardBadges--64829">
                                <span class="badge badge-danger text-uppercase ml-1 px-3 py-2">Pre-order</span>
                            </p> */}
                            </div>

                            <div className="col-lg-4 mb-3">
                                <div className="">
                                    <img src={publicUrl + "assets/img/others/shop8.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <a className="text-dark1 text-decoration-none" href="/shop/products/video-console/" target='_black'>
                                            <div className="d-flex pt-2">
                                                <div className="w-100">
                                                    <h3 className="h5  flex-grow-1 animated-shop" itemprop="name">ESSENTIAL KEYS MODULE</h3>
                                                </div>
                                                <div className="product-module--cardOffer--e8927">
                                                    <dl itemscope="" itemprop="offers" itemtype="http://schema.org/Offer" className="product-module--cardPrice--8ba09">
                                                        <dd itemprop="price">$129</dd>
                                                        <meta itemprop="priceCurrency" content="USD" />
                                                    </dl>

                                                    {/* <button type="primary" className="product-module--cardBtn--a29ad rounded-pill px-3 btn btn-primary">Shop Now</button> */}
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/* <p class="product-module--cardBadges--64829">
                                <span class="badge badge-danger text-uppercase ml-1 px-3 py-2">Pre-order</span>
                            </p> */}
                            </div>

                            <div className="col-lg-4 mb-3">
                                <div className="">
                                    <img src={publicUrl + "assets/img/others/shop9.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <a className="text-dark1 text-decoration-none" href="/shop/products/video-console/" target='_black'>
                                            <div className="d-flex pt-2">
                                                <div className="w-100">
                                                    <h3 className="h5  flex-grow-1 animated-shop" itemprop="name">ORBITER MODULE</h3>
                                                </div>
                                                <div className="product-module--cardOffer--e8927">
                                                    <dl itemscope="" itemprop="offers" itemtype="http://schema.org/Offer" className="product-module--cardPrice--8ba09">
                                                        <dd itemprop="price">$159</dd>
                                                        <meta itemprop="priceCurrency" content="USD" />
                                                    </dl>

                                                    {/* <button type="primary" className="product-module--cardBtn--a29ad rounded-pill px-3 btn btn-primary">Shop Now</button> */}
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/* <p class="product-module--cardBadges--64829">
                                <span class="badge badge-danger text-uppercase ml-1 px-3 py-2">Pre-order</span>
                            </p> */}
                            </div>

                            <div className="col-lg-4 mb-3">
                                <div className="">
                                    <img src={publicUrl + "assets/img/others/shop10.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <a className="text-dark1 text-decoration-none" href="/shop/products/video-console/" target='_black'>
                                            <div className="d-flex pt-2">
                                                <div className="w-100">
                                                    <h3 className="h5  flex-grow-1 animated-shop" itemprop="name">DIAL MODULE</h3>
                                                </div>
                                                <div className="product-module--cardOffer--e8927">
                                                    <dl itemscope="" itemprop="offers" itemtype="http://schema.org/Offer" className="product-module--cardPrice--8ba09">
                                                        <dd itemprop="price">$129</dd>
                                                        <meta itemprop="priceCurrency" content="USD" />
                                                    </dl>

                                                    {/* <button type="primary" className="product-module--cardBtn--a29ad rounded-pill px-3 btn btn-primary">Shop Now</button> */}
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/* <p class="product-module--cardBadges--64829">
                                <span class="badge badge-danger text-uppercase ml-1 px-3 py-2">Pre-order</span>
                            </p> */}
                            </div>

                            <div className="col-lg-4 mb-3">
                                <div className="">
                                    <img src={publicUrl + "assets/img/others/shop11.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <a className="text-dark1 text-decoration-none" href="/shop/products/video-console/" target='_black'>
                                            <div className="d-flex pt-2">
                                                <div className="w-100">
                                                    <h3 className="h5  flex-grow-1 animated-shop" itemprop="name">CONSOLE PACK: AUDIO</h3>
                                                </div>
                                                <div className="product-module--cardOffer--e8927">
                                                    <dl itemscope="" itemprop="offers" itemtype="http://schema.org/Offer" className="product-module--cardPrice--8ba09">
                                                        <dd itemprop="price">$29</dd>
                                                        <meta itemprop="priceCurrency" content="USD" />
                                                    </dl>

                                                    {/* <button type="primary" className="product-module--cardBtn--a29ad rounded-pill px-3 btn btn-primary">Shop Now</button> */}
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/* <p class="product-module--cardBadges--64829">
                                <span class="badge badge-danger text-uppercase ml-1 px-3 py-2">Pre-order</span>
                            </p> */}
                            </div>

                            <div className="col-lg-4 mb-3">
                                <div className="">
                                    <img src={publicUrl + "assets/img/others/shop12.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <a className="text-dark1 text-decoration-none" href="/shop/products/video-console/" target='_black'>
                                            <div className="d-flex pt-2">
                                                <div className="w-100">
                                                    <h3 className="h5  flex-grow-1 animated-shop" itemprop="name">CONSOLE PACK: PHOTO</h3>
                                                </div>
                                                <div className="product-module--cardOffer--e8927">
                                                    <dl itemscope="" itemprop="offers" itemtype="http://schema.org/Offer" className="product-module--cardPrice--8ba09">
                                                        <dd itemprop="price">$39</dd>
                                                        <meta itemprop="priceCurrency" content="USD" />
                                                    </dl>

                                                    {/* <button type="primary" className="product-module--cardBtn--a29ad rounded-pill px-3 btn btn-primary">Shop Now</button> */}
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/* <p class="product-module--cardBadges--64829">
                                <span class="badge badge-danger text-uppercase ml-1 px-3 py-2">Pre-order</span>
                            </p> */}
                            </div>

                            <div className="col-lg-4 mb-3">
                                <div className="">
                                    <img src={publicUrl + "assets/img/others/shop13.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <a className="text-dark1 text-decoration-none" href="/shop/products/video-console/" target='_black'>
                                            <div className="d-flex pt-2">
                                                <div className="w-100">
                                                    <h3 className="h5  flex-grow-1 animated-shop" itemprop="name">CONSOLE PACK: VIDEO</h3>
                                                </div>
                                                <div className="product-module--cardOffer--e8927">
                                                    <dl itemscope="" itemprop="offers" itemtype="http://schema.org/Offer" className="product-module--cardPrice--8ba09">
                                                        <dd itemprop="price">$69</dd>
                                                        <meta itemprop="priceCurrency" content="USD" />
                                                    </dl>

                                                    {/* <button type="primary" className="product-module--cardBtn--a29ad rounded-pill px-3 btn btn-primary">Shop Now</button> */}
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/* <p class="product-module--cardBadges--64829">
                                <span class="badge badge-danger text-uppercase ml-1 px-3 py-2">Pre-order</span>
                            </p> */}
                            </div>

                            <div className="col-lg-4 mb-3">
                                <div className="">
                                    <img src={publicUrl + "assets/img/others/shop14.jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <a className="text-dark1 text-decoration-none" href="/shop/products/video-console/" target='_black'>
                                            <div className="d-flex pt-2">
                                                <div className="w-100">
                                                    <h3 className="h5  flex-grow-1 animated-shop" itemprop="name">MONOGRAM <br></br>CARE</h3>
                                                </div>
                                                <div className="product-module--cardOffer--e8927">
                                                    <dl itemscope="" itemprop="offers" itemtype="http://schema.org/Offer" className="product-module--cardPrice--8ba09">
                                                        <dd itemprop="price">$19-$129</dd>
                                                        <meta itemprop="priceCurrency" content="USD" />
                                                    </dl>

                                                    {/* <button type="primary" className="product-module--cardBtn--a29ad rounded-pill px-3 btn btn-primary">Shop Now</button> */}
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/* <p class="product-module--cardBadges--64829">
                                <span class="badge badge-danger text-uppercase ml-1 px-3 py-2">Pre-order</span>
                            </p> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
            <Footer />
        </>
    }
}

export default shop;