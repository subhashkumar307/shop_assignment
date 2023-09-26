import React, { useState } from 'react';
import Footer from './global-components/footer';
import HomeBanner from './Homebanner';
import Navbar from './global-components/navbar';
import { Link } from 'react-router-dom';
import Seo from './global-components/seo';
import Popup from './section-components/Popup';

// p = page, s = section, e = element, a = element name


const HomePage = () => {


    const title = "Structural Steel Tubes & Steel Pipes Manufacturer in India | APL Apollo Steel Tubes";
    const description = "India’s largest structural steel tubes & pipes manufacturing company. Redefining the landscape of construction in India since 1986! We are India’s largest producer of structural steel tubes and steel pipes to cater to all tubular steel building solutions.";
    const metadata = "steel tube, steel tubes, steel pipe, steel pipes, electrical resistance welding pipe, electrical resistance welding pipes, electrical resistance welding tube, electrical resistance welding tubes, erw pipe, erw pipes, erw tube, erw tubes, erw steel pipe, erw steel pipes, erw steel tube, erw steel tubes, structural steel tube, structural steel pipe, pre engineered construction, pre engineered structure, pre engineered structures, pre engineered building, pre engineered buildings, peb, peb construction, steel construction, tubular construction, steel building, steel buildings, steel structure, steel structures, tubular building, tubular buildings, tubular structure, tubular structures, steel building solution, steel building solutions, steel construction solution, tubular building solutions, tubular construction solution, aalishaan, fabricator app, welder near me, lohar near me, home decor, steel decor, steel furniture, hollow steel section, hss, fabricator, square tube, rectangle tube, MS Pipe, Galvanized Pipe, Galvanized tube, G.P Pipe, Galvanized tube, Hollow Section, G.I Pipe, ERW Steel Pipe Manufacturers in India, ERW Steel tube Manufacturers in India, steel pipes manufacturer, MS pipes manufacturers, steel tube esg";

    let publicUrl = process.env.PUBLIC_URL;

    // const divArray = Array.from({ length: 6 }, (_, index) => index + 1);
    const styles = {
        parallaxSection: {
            position: 'relative',
            backgroundImage: `url(${publicUrl}/assets/img/others/world1.jpeg)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
        },
    };


    const [isPopupOpen, setPopupOpen] = useState(false);
    const videoId = 'iwNiHMWtka8';

    const openPopup = () => {
        setPopupOpen(true);
        // setTimeout(function(){  setPopupOpen(true); }, 500);
    };

    const closePopup = () => {
        setPopupOpen(false);
        // setTimeout(function(){ setPopupOpen(false); }, 500);
    };



    return (
        <>
            <Seo title={title} description={description} metadata={metadata} />
            <Navbar />
            <div className="section-wrapper">
                <section className="p-0 banner-section section-p1s1">
                    <HomeBanner />
                </section>

                <section className="section section-p1s2">
                    {isPopupOpen && (
                        <div className="fullscreen-popup">
                            <Popup videoId={videoId} onClose={closePopup} />
                        </div>
                    )}
                    <div className="container">
                        <ul className="p1s2-list-a1">
                            <li>
                                <button onClick={openPopup}>
                                    <img src={`${publicUrl}/assets/img/icons/retro-tv.png`} alt="About Us Image" />
                                    <h4>TV Commercials</h4>
                                </button>
                            </li>
                            <li>
                                <Link to={`${publicUrl}/`}>
                                    {/* <i className="fa-solid fa-magnifying-glass"></i> */}
                                    <img src={`${publicUrl}/assets/img/icons/Steel.png`} alt="About Us Image" />
                                    <h4>Explore Our World</h4>
                                </Link>
                            </li>
                            <li>
                                <Link to={`${publicUrl}/distributors`}>
                                    {/* <i className="fa-solid fa-users"></i> */}
                                    <img src={`${publicUrl}/assets/img/icons/shopping-basket.png`} alt="About Us Image" />
                                    <h4>Distributors</h4>
                                </Link>
                            </li>
                            <li>
                                <Link to={`${publicUrl}/engineers`}>
                                    {/* <i className="fa-solid fa-helmet-safety"></i> */}
                                    <img src={`${publicUrl}/assets/img/icons/Hard.png`} alt="About Us Image" />
                                    <h4>For Engineers</h4>
                                </Link>
                            </li>
                            <li>
                                <Link to={`${publicUrl}/fabricators`}>
                                    {/* <i className="fa-solid fa-hammer"></i> */}
                                    <img src={`${publicUrl}/assets/img/icons/Weldin.png`} alt="About Us Image" />
                                    <h4>For Fabricators</h4>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="section p-0 section-p1s9">
                    <div className="container">
                        <div className="section-content">
                            <div className="bg-wrap">
                                <img className="bg-img" src={`${publicUrl}/assets/img/KUWAIT-AIRPORT.jpg`} alt="About Us Image" />
                            </div>
                            <div className="row align-items-lg-center g-0">
                                <div className="col-lg-5">
                                    <div className="image-wrap p1s9-ea1">
                                        <img src={`${publicUrl}/assets/img/no-1-logo.png`} alt="About Us Image" />
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <ul className="counter-list">
                                        <li>
                                            <h3><span className="counter">55</span>%</h3>
                                            <h4>Market Share</h4>
                                        </li>
                                        <li>
                                            <h3><span className="counter">3.6</span>MT</h3>
                                            <h4>Capacity</h4>
                                        </li>
                                        <li>
                                            <h3><span className="counter">11</span></h3>
                                            <h4>Plants</h4>
                                        </li>
                                        <li>
                                            <h3><span className="counter">800</span>+</h3>
                                            <h4>Distributors</h4>
                                        </li>
                                        <li>
                                            <h3><span className="counter">2,587</span></h3>
                                            <h4>Employees</h4>
                                        </li>
                                        <li>
                                            <h3><span className="counter">16</span></h3>
                                            <h4>Registered Products</h4>
                                        </li>
                                        <li>
                                            <h3><span className="counter">75</span></h3>
                                            <h4>Registered Trademarks</h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section section-p1s3">
                    <div className="container">
                        <div className="p1s3-row-a1">
                            <div className="row g-0 flex-lg-row-reverse">
                                <div className="col-lg-6 p1s3-col-a1">
                                    <div className="image-wrap p1s3-ea1">
                                        <img src={`${publicUrl}/assets/img/others/who1.jpeg`} alt="About Us Image" />
                                    </div>
                                </div>
                                <div className="col-lg-6 p1s3-col-a2">
                                    <div className="content-wrap p1s3-ea1">
                                        <h1 className="title-1">About Apollo</h1>
                                        <p>With a capacity to produce 3.6 Million Tonnes per annum, APL Apollo Tubes Limited is the largest producer of Structural Steel Tubes in India. We have an extended distribution network of warehouses and branch offices in 29 cities across the country catering to domestic as well as 20 countries worldwide.</p>
                                        <Link to={`${publicUrl}/about-us`} className="def-btn btn-1 mt-5">Read More</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="image-wrap p1s3-ea1">
                                        <img src={`${publicUrl}/assets/img/others/who.jpeg`} alt="About Us Image" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="content-wrap p1s3-ea1">
                                        <h2 className="title-1">Who we are ?</h2>
                                        <p>APL Apollo Tubes Limited is India’s largest Structural Steel Tubing Company with an extremely strong local presence, thanks to our philosophy of Make in India, extensive distribution network and world class quality.</p>
                                        <Link to={`${publicUrl}/about-us`} className="def-btn btn-1 mt-5">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="section pt-0 section-p1s5">
                    <div className="container">
                        <div className="row g-3">

                            <div className="col-lg-4 p1s5-item item-a1">
                                <div className="item-main">
                                    <div className="icon-wrap">
                                        <img src={`${publicUrl}/assets/img/others/box01.gif`} alt="About Us Image" />
                                    </div>
                                    <div className="content-wrap">
                                        <p>Largest Manufacturer of Structural Steel Tubes</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 p1s5-item item-a1">
                                <div className="item-main">
                                    <div className="icon-wrap">
                                        <img src={`${publicUrl}/assets/img/others/box02.gif`} alt="About Us Image" />
                                    </div>
                                    <div className="content-wrap">
                                        <p>Innovative & Exclusive Product Range</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 p1s5-item item-a1">
                                <div className="item-main">
                                    <div className="icon-wrap">
                                        <img src={`${publicUrl}/assets/img/others/box03.gif`} alt="About Us Image" />
                                    </div>
                                    <div className="content-wrap">
                                        <p>Premium Brand Portfolio</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 p1s5-item item-a1">
                                <div className="item-main">
                                    <div className="icon-wrap">
                                        <img src={`${publicUrl}/assets/img/others/box04.gif`} alt="About Us Image" />
                                    </div>
                                    <div className="content-wrap">
                                        <p>Cutting-Edge & Futuristic Technology</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 p1s5-item item-a1">
                                <div className="item-main">
                                    <div className="icon-wrap">
                                        <img src={`${publicUrl}/assets/img/others/box05.gif`} alt="About Us Image" />
                                    </div>
                                    <div className="content-wrap">
                                        <p>Largest Sales & Distribution Network</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 p1s5-item item-a1">
                                <div className="item-main">
                                    <div className="icon-wrap">
                                        <img src={`${publicUrl}/assets/img/others/box06.gif`} alt="About Us Image" />
                                    </div>
                                    <div className="content-wrap">
                                        <p>Competitive Cost Advantage</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="section p-0 position-relative section-p1s8" style={styles.parallaxSection}>
                    <div className="bg-wrap d-none">
                        <img className="bg-img" src={`${publicUrl}/assets/img/others/world1.jpeg`} alt="About Us Image" />
                    </div>
                    <a className="overly" style={{ zIndex: "99" }} href="https://aplworld.aplapollo.com/" target="_blank"></a>
                    <div className="container">
                        <div className="section-content">
                            <h2 className="title-2">EXPLORE APOLLO WORLD</h2>
                            <div className="click-box">
                                <h4>Click here to interact </h4>
                                <img src={`${publicUrl}/assets/img/icons/click_icon_01.png`} alt="About Us Image" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section pb-0 section-p1s6">
                    <div className="container">
                        <div className="section-content">
                            <div className="bg-wrap">
                                <img className="bg-img d-none d-md-block" src={`${publicUrl}/assets/img/others/des1.jpeg`} alt="About Us Image" />
                                <img className="bg-img d-block d-md-none" src={`${publicUrl}/assets/img/others/Rectangle1294.png`} alt="About Us Image" />
                                <div className="overly"></div>
                            </div>
                            <div className="row g-0">
                                <div className="col-lg-5">
                                    <div className="content-wrap p1s6-ea1">
                                        <h2 className="title-1">CSR</h2>
                                        <p>Responsibility is the bedrock of our sustainable growth. It encompasses protecting and nurturing the ecosystem, the people, and the policies which form the foundation of our continual progress. We adopt the global best practices to take care of the safety of our team, the well-being of the environment, and fairness in governance</p>
                                        <Link to={`${publicUrl}/csr`} className="def-btn btn-2 mt-5">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="section p-0 section-p1s7">
                    <div className="container">
                        <div className="p1s7-block-a1">
                            <div className="image-wrap p1s7-ea1">
                                <img className="d-none d-md-block" src={`${publicUrl}/assets/img/others/GooglePixel5_2.png`} alt="About Us Image" />
                                <img className="d-block d-md-none" src={`${publicUrl}/assets/img/others/GooglePixel5.png`} alt="About Us Image" />
                            </div>
                            <div className="content-wrap p1s7-ea1">
                                <h2 className="title-1">Aalishaan</h2>
                                <p>Modernise Your Home By Perfect Home Decor solution with “Aalishaan by APL Apollo”.</p>
                                <div className="store-wrap mt-4">
                                    {/* <Link className="store-link" to="https://apps.apple.com/in/app/beautiful-home-with-apl-apollo/id1575548591">
                                        <img src={`${publicUrl}/assets/img/others/appstore.png`} alt="About Us Image" />
                                    </Link> */}
                                    <a className="store-link" href="https://apps.apple.com/in/app/beautiful-home-with-apl-apollo/id1575548591" target="_blank" rel="noreferrer" download>
                                        <img src={publicUrl + "assets/img/others/appstore.png"} alt="Logo" className='store-logo apple-store' />
                                    </a>

                                    {/* <Link className="store-link" to="https://play.google.com/store/apps/details?id=com.mover.aplapollo">
                                        <img src={`${publicUrl}assets/img/others/play.png`} alt="About Us Image" />
                                    </Link> */}
                                    <a className="store-link" href="https://play.google.com/store/apps/details?id=com.mover.aplapollo" target="_blank" rel="noreferrer" download>
                                        <img src={publicUrl + "assets/img/others/play.png"} alt="Logo" className='store-logo google-store' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <Footer />
        </>
    )
}

export default HomePage