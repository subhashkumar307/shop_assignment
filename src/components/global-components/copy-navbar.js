import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';


class Navbar extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
            <>
            {/* <div class="sidebar-contact">
                <div class="toggle"></div>
                <h2>Enquire Now</h2>
                <form>
                    <div class="scroll">
                        <div class="input-item">
                            <select name="profession">
                                <option>Select Service Type</option>
                                <option>Property Management</option>
                                <option>Mortgage Service</option>
                                <option>Consulting Service</option>
                                <option>Home Buying</option>
                                <option>Home Selling</option>
                                <option>Escrow Services</option>
                            </select>
                        </div>
                        <div class="input-item">
                            <input type="text" name="email" placeholder="Enter Your Email-ID" />
                        </div>
                        <div class="input-item">
                            <input type="text" name="name" placeholder="Enter Your Name" />
                        </div>
                        <div class="input-item">
                            <input type="text" name="number" placeholder="Phone No" />
                        </div>
                        <div class="input-item">
                            <input type="text" name="city" placeholder="City" />
                        </div>
                        <div class="input-item">
                            <input type="text" name="message" placeholder="Please Write Your Query Here..." />
                        </div>
                        <button class="btn theme-btn-1 scolleq text-uppercase" type="submit">Submit</button>
                    </div>
                </form>
            </div> */}
                <div>
                    <header className="ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent gradient-color-4---">

                        <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="site-logo-wrap">
                                            <div className="site-logo go-top">
                                                <Link to="/"><img src={publicUrl + "assets/img/logo-2.png"} alt="Logo" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col header-menu-column menu-color-white">
                                        <div className="header-menu d-none d-xl-block go-top">
                                            <nav>
                                                <div className="ltn__main-menu">
                                                    <ul>
                                                        {/* <li><a href="/about">About Us</a></li> */}
                                                        {/* <li><Link to="/about-us">About Us</Link></li> */}
                                                        <li className="menu-icon"><a href="#">About Us</a>
                                                            <ul>
                                                                <li><Link to="/about-us">Company Overview</Link></li>
                                                                <li><Link to="/management">Management</Link></li>
                                                                <li><Link to="/manufacturing-units">Manufacturing Units</Link></li>

                                                                <li><Link to="/awards-and-recognition">Awards & Recognition</Link></li>
                                                                <li><Link to="/innovation">Innovation</Link></li>
                                                                <li><Link to="/csr">CSR</Link></li>
                                                            </ul>
                                                        </li>


                                                        {/* <ul>
        <li><Link to="/manufacturing_units">Manufacturing_Units</Link></li>
    </ul> */}
                                                        {/* <li><a href="#">ESG</a></li> */}
                                                        <li><Link to="/esgs">ESG</Link></li>

                                                        {/* <li><a href="#">Products</a></li> */}
                                                        <li className="menu-icon"><a href="#">Products</a>
                                                            <ul className="mega-menu">
                                                                <li>
                                                                    <a href="#">APOLLO STRUCTURAL</a>
                                                                    <ul>
                                                                        <li><Link to="/structural-steel-tubes-apollo-fabritech">Apollo Fabritech</Link></li>
                                                                        <li><Link to="/apollo-build">Apollo Build</Link></li>
                                                                        <li><Link to="/apollo-dft">Apollo DFT</Link></li>
                                                                        <li><Link to="/apollo-column">Apollo Column</Link></li>

                                                                    </ul>
                                                                </li>
                                                                <li><Link to="#">APOLLO EXCLUSIVE</Link>
                                                                    <ul>
                                                                        <li><Link to="/apollo-octagon">Apollo Octagon</Link></li>
                                                                        <li><Link to="/apollo-elliptical">Apollo Elliptical</Link></li>
                                                                        <li><Link to="/apollo-oval">Apollo Oval</Link></li>
                                                                        <li><Link to="/apollo-d-section">Apollo D Section</Link></li>
                                                                        <li><Link to="/apollo-small-sections">Apollo Small Section</Link></li>
                                                                        <li><Link to="/apollo-narrow">Apollo Narrow</Link></li>
                                                                        <li><Link to="/apollo-taper">Apollo Taper</Link></li>
                                                                        <li><Link to="/apollo-fence">Apollo Fence</Link></li>
                                                                        <li><Link to="/rooftuf">Apollo Rooftuf</Link></li>
                                                                        <li><Link to="/apollo-mechanical">Apollo Mechanical</Link></li>
                                                                        <li><Link to="/apollo-reflector">Apollo Reflector</Link></li>
                                                                        <li><Link to="/apollo-chequered">Apollo Chequered</Link></li>
                                                                        <li><Link to="/structural-steel-tubes-apollo-color">Apollo-Color</Link></li>
                                                                        <li><Link to="/steel-coil-and-sheets-apollo-navrang">Apollo-Navrang</Link></li>
                                                                    </ul>
                                                                </li>

                                                                <li><Link to="#">APOLLO GALV</Link>
                                                                    <ul>
                                                                        <li><Link to="/structural-steel-tubes-apollo-bheem">Apollo Bheem</Link></li>
                                                                        <li><Link to="/apollo-green">Apollo Green</Link></li>
                                                                        <li><Link to="/apollo-z-plus">Apollo Z+</Link></li>
                                                                        {/* <li><Link to="/shop-grid">Shop Grid</Link></li>
    <li><Link to="/product-details">Shop details </Link></li>
    <li><Link to="/cart">Cart</Link></li> */}
                                                                    </ul>
                                                                </li>
                                                                <li><Link to="#">APOLLO STANDARD</Link>
                                                                    <ul>
                                                                        <li><Link to="/apollo-standard-product">Apollo Standard</Link></li>
                                                                        <li><Link to="/apollo-agri">Apollo Agri</Link></li>
                                                                        <li><Link to="/apollo-fireready">Apollo Fireready</Link></li>
                                                                        {/* <li><Link to="/shop-grid">Shop Grid</Link></li>
    <li><Link to="/product-details">Shop details </Link></li>
    <li><Link to="/cart">Cart</Link></li> */}
                                                                    </ul>
                                                                </li>
                                                                <li><a href="#">APOLLO TRICOAT</a>

                                                                    <ul>
                                                                        <li><Link to="/apollo-elegant">Apollo Elegant</Link></li>
                                                                        <li><Link to="/apollo-signature">Apollo Signature</Link></li>
                                                                        <li><Link to="/apollo-plank">Apollo Plank</Link></li>
                                                                        <li><Link to="/apollo-chaukhat">Apollo Chaukhat</Link></li>
                                                                        <li><Link to="/apollo-handrail">Apollo Handrail</Link></li>
                                                                        <li><Link to="/apollo-alpha">Apollo Alpha</Link></li>
                                                                        <li><Link to="/apollo-scaff">Apollo Scaff</Link></li>
                                                                        <li><Link to="/apollo-tricoat-product">Apollo Tricoat</Link></li>
                                                                        <li><Link to="/apollo-hybrid"> Apollo Hybrid</Link></li>
                                                                    </ul>
                                                                </li>
                                                                <li><a href="#">APOLLO Z</a>
                                                                    <ul>
                                                                        <li><Link to="/apollo-coast-guard">Apollo Coast Guard</Link></li>

                                                                    </ul>
                                                                </li>
                                                                <li><a href="#">APOLLO CONCEPT</a>

                                                                    <ul>
                                                                        <li><Link to="/structural-steel-tubes-ready-made-chaukhat">Apollo Ready Chaukhat</Link></li>
                                                                        <li><Link to="/apollo-fencing-solutions">Apollo Fencing Solutions</Link></li>
                                                                        <li><Link to="/wondoor">Apollo Wondoor</Link></li>
                                                                    </ul>
                                                                </li>
                                                                <li><a href="#">INNOVATION @ APOLLO</a>
                                                                    <ul>
                                                                        <li><Link to="/apollo-checkered">Apollo Chequered</Link></li>

                                                                    </ul>
                                                                </li>


                                                            </ul>
                                                        </li>

                                                        <li className="menu-icon"><a href="#">Partners</a>
                                                            <ul>
                                                                <li><Link to="/distributors">Distributors</Link></li>
                                                                <li><Link to="/fabricators">Fabricators</Link></li>
                                                                <li><Link to="/engineers">Architects & Engineers</Link></li>
                                                                {/* <li><Link to="/manufacturing">Manufacturing</Link></li>
    <li><Link to="/awards-and-recognition">Awards-And-Recognition</Link></li>
    <li><Link to="/downloads">Downloads</Link></li> */}
                                                            </ul>
                                                        </li>

                                                        <li><Link to="/newBrandEquity">Brand Equity</Link></li>
                                                        {/* <li><a href="/newBrandEquity">Brand Equity</a></li> */}
                                                        {/* <li><Link to="/brandequity">Brand Equity</Link></li> */}
                                                        {/* <li><a href="#">Investors</a></li> */}
                                                        <li className="menu-icon"><a href="#">Investors</a>
                                                            <ul>
                                                                {/* <li><Link to="/distributors">Distributors</Link></li>
    <li><Link to="/fabricators">Fabricators</Link></li>
    <li><Link to="/engineers">Architects & Engineers</Link></li>
    <li><Link to="/manufacturing">Manufacturing</Link></li> */}
                                                                <li><Link to="/announcements">Announcements</Link></li>
                                                                <li><Link to="/financial">Financials</Link></li>
                                                                <li><Link to="/presentations">Presentations</Link></li>
                                                                <li><Link to="/general-information">General-Information</Link></li>
                                                                <li><Link to="/esgs">ESG</Link></li>
                                                                <li><Link to="/downloads">Downloads</Link></li>
                                                            </ul>
                                                        </li>



                                                        <li><Link to="/contact">Contact</Link></li>


                                                    </ul>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="col--- ltn__header-options ltn__header-options-2 ">
                                        {/* Mobile Menu Button */}
                                        <div className="mobile-menu-toggle d-xl-none">
                                            <a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
                                                <svg viewBox="0 0 800 600">
                                                    <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top" />
                                                    <path d="M300,320 L540,320" id="middle" />
                                                    <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) " />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
                        <div className="ltn__utilize-menu-inner ltn__scrollbar">
                            <div className="ltn__utilize-menu-head">
                                <div className="site-logo">
                                    <Link to="/"><img src={publicUrl + "assets/img/logo-2.png"} alt="Logo" /></Link>
                                </div>
                                <button className="ltn__utilize-close">×</button>
                            </div>

                            <div className="ltn__utilize-menu">
                                <ul>
                                    {/* <li><Link to="/about-us">About Us</Link></li> */}
                                    <li className="menu-icon"><a href="#">About Us</a>
                                        <ul>
                                            <li><Link to="/about-us">Company Overview</Link></li>
                                            <li><Link to="/management">Management</Link></li>
                                            <li><Link to="/manufacturing-units">Manufacturing Units</Link></li>

                                            <li><Link to="/awards-and-recognition">Awards & Recognition</Link></li>
                                            <li><Link to="/innovation">Innovation</Link></li>
                                            <li><Link to="/csr">CSR</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/esgs">ESG</Link></li>
                                    <li className="menu-icon"><a href="#">Products</a>
                                        <ul>
                                            <li className="menu-icon">
                                                <a href="#" className='list-group-item list-group-item-action'>APOLLO STRUCTURAL</a>

                                                <ul>
                                                    <li><Link to="/structural-steel-tubes-apollo-fabritech">Apollo Fabritech</Link></li>
                                                    <li><Link to="/apollo-build">Apollo Build</Link></li>
                                                    <li><Link to="/apollo-dft">Apollo DFT</Link></li>
                                                    <li><Link to="/apollo-column">Apollo Column</Link></li>

                                                </ul>
                                            </li>
                                            <li className="menu-icon"><a href="#" className='list-group-item list-group-item-action'>APOLLO EXCLUSIVE</a>
                                                <ul>
                                                    <li><Link to="/apollo-octagon">Apollo Octagon</Link></li>
                                                    <li><Link to="/apollo-elliptical">Apollo Elliptical</Link></li>
                                                    <li><Link to="/apollo-oval">Apollo Oval</Link></li>
                                                    <li><Link to="/apollo-d-section">Apollo D Section</Link></li>
                                                    <li><Link to="/apollo-small-sections">Apollo Small Section</Link></li>
                                                    <li><Link to="/apollo-narrow">Apollo Narrow</Link></li>
                                                    <li><Link to="/apollo-taper">Apollo Taper</Link></li>
                                                    <li><Link to="/apollo-fence">Apollo Fence</Link></li>
                                                    <li><Link to="/rooftuf">Apollo Rooftuf</Link></li>
                                                    <li><Link to="/apollo-mechanical">Apollo Mechanical</Link></li>
                                                    <li><Link to="/apollo-reflector">Apollo Reflector</Link></li>
                                                    <li><Link to="/apollo-chequered">Apollo Chequered</Link></li>
                                                    <li><Link to="/structural-steel-tubes-apollo-color">Apollo-Color</Link></li>
                                                    <li><Link to="/steel-coil-and-sheets-apollo-navrang">Apollo-Navrang</Link></li>
                                                </ul>
                                            </li>

                                            <li className="menu-icon"><a href="#" className='list-group-item list-group-item-action'>APOLLO GALV</a>
                                                <ul>
                                                    <li><Link to="/structural-steel-tubes-apollo-bheem">Apollo Bheem</Link></li>
                                                    <li><Link to="/apollo-green">Apollo Green</Link></li>
                                                    <li><Link to="/apollo-z-plus">Apollo Z+</Link></li>
                                                    {/* <li><Link to="/shop">Shop</Link></li>
    <li><Link to="/shop-left-sidebar">Shop Left sidebar</Link></li>
    <li><Link to="/shop-right-sidebar">Shop right sidebar</Link></li>
    <li><Link to="/shop-grid">Shop Grid</Link></li>
    <li><Link to="/product-details">Shop details </Link></li>
    <li><Link to="/cart">Cart</Link></li> */}
                                                </ul>
                                            </li>
                                            <li className="menu-icon"><a href="#" className='list-group-item list-group-item-action'>APOLLO STANDARD</a>
                                                <ul>
                                                    <li><Link to="/apollo-standard-product">Apollo Standard</Link></li>
                                                    <li><Link to="/apollo-agri">Apollo Agri</Link></li>
                                                    <li><Link to="/apollo-fireready">Apollo Fireready</Link></li>
                                                    {/* <li><Link to="/shop">Shop</Link></li>
    <li><Link to="/shop-left-sidebar">Shop Left sidebar</Link></li>
    <li><Link to="/shop-right-sidebar">Shop right sidebar</Link></li>
    <li><Link to="/shop-grid">Shop Grid</Link></li>
    <li><Link to="/product-details">Shop details </Link></li>
    <li><Link to="/cart">Cart</Link></li> */}
                                                </ul>
                                            </li>
                                            <li className="menu-icon"><a href="#" className='list-group-item list-group-item-action'>APOLLO TRICOAT</a>

                                                <ul>
                                                    <li><Link to="/apollo-elegant">Apollo Elegant</Link></li>
                                                    <li><Link to="/apollo-signature">Apollo Signature</Link></li>
                                                    <li><Link to="/apollo-plank">Apollo Plank</Link></li>
                                                    <li><Link to="/apollo-chaukhat">Apollo Chaukhat</Link></li>
                                                    <li><Link to="/apollo-handrail">Apollo Handrail</Link></li>
                                                    <li><Link to="/apollo-alpha">Apollo Alpha</Link></li>
                                                    <li><Link to="/apollo-scaff">Apollo Scaff</Link></li>
                                                    <li><Link to="/apollo-tricoat-product">Apollo Tricoat</Link></li>
                                                    <li><Link to="/apollo-hybrid"> Apollo Hybrid</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-icon"><a href="#" className='list-group-item list-group-item-action'>APOLLO Z</a>
                                                <ul>
                                                    <li><Link to="/apollo-coast-guard">Apollo Coast Guard</Link></li>

                                                </ul>
                                            </li>
                                            <li className="menu-icon"><a href="#" className='list-group-item list-group-item-action'>APOLLO CONCEPT</a>

                                                <ul>
                                                    <li><Link to="/structural-steel-tubes-ready-made-chaukhat">Apollo Ready Chaukhat</Link></li>
                                                    <li><Link to="/apollo-fencing-solutions">Apollo Fencing Solutions</Link></li>
                                                    <li><Link to="/wondoor">Apollo Wondoor</Link></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">INNOVATION @ APOLLO</a>
                                                <ul>
                                                    <li><Link to="/apollo-checkered">Apollo Chequered</Link></li>

                                                </ul>
                                            </li>


                                        </ul>
                                    </li>

                                    <li className="menu-icon"><a href="#">Partners</a>
                                        <ul>
                                            <li><Link to="/distributors">Distributors</Link></li>
                                            <li><Link to="/fabricators">Fabricators</Link></li>
                                            <li><Link to="/engineers">Architects & Engineers</Link></li>
                                            {/* <li><Link to="/manufacturing">Manufacturing</Link></li>
    <li><Link to="/awards-and-recognition">Awards-And-Recognition</Link></li>
    <li><Link to="/downloads">Downloads</Link></li> */}
                                        </ul>
                                    </li>
                                    {/* <li><Link to="/distributors">Parteners</Link></li> */}
                                    {/* <li><Link to="/fabricators">Parteners</Link></li> */}
                                    {/* <li><Link to="/engineers">Parteners</Link></li> */}
                                    <li><Link to="/newBrandEquity">Brand Equity</Link></li>
                                    {/* <li><a href="/newBrandEquity">Brand Equity</a></li> */}
                                    {/* <li><Link to="/brandequity">Brand Equity</Link></li> */}
                                    {/* <li><a href="#">Investors</a></li> */}
                                    <li className="menu-icon"><a href="#">Investors</a>
                                        <ul>
                                            {/* <li><Link to="/distributors">Distributors</Link></li>
    <li><Link to="/fabricators">Fabricators</Link></li>
    <li><Link to="/engineers">Architects & Engineers</Link></li>
    <li><Link to="/manufacturing">Manufacturing</Link></li>
    <li><Link to="/awards-and-recognition">Awards-And-Recognition</Link></li> */}
                                            <li><Link to="/announcements">Announcements</Link></li>
                                            <li><Link to="/financial">Financials</Link></li>
                                            <li><Link to="/presentations">Presentations</Link></li>
                                            <li><Link to="/general-information">General-Information</Link></li>
                                            <li><Link to="/esgs">ESG</Link></li>
                                            <li><Link to="/downloads">Downloads</Link></li>
                                        </ul>
                                    </li>



                                    <li><Link to="/contact">Contact</Link></li>
                                    {/* <li className="menu-icon"><a href="#">Pages</a>
        <ul className="mega-menu">
            <li><a href="#">Inner Pages</a>
                <ul>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/portfolio-v2">Portfolio - 02</Link></li>
                    <li><Link to="/portfolio-details">Portfolio Details</Link></li>
                    <li><Link to="/team">Team</Link></li>
                    <li><Link to="/team-details">Team Details</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                </ul>
            </li>
            <li><a href="#">Inner Pages</a>
                <ul>
                    <li><Link to="/history">History</Link></li>
                    <li><Link to="/add-listing">Add Listing</Link></li>
                    <li><Link to="/location">Google Map Locations</Link></li>
                    <li><Link to="/404">404</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/coming-soon">Coming Soon</Link></li>
                </ul>
            </li>
            <li><Link to="#">Shop Pages</Link>
                <ul>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/shop-left-sidebar">Shop Left sidebar</Link></li>
                    <li><Link to="/shop-right-sidebar">Shop right sidebar</Link></li>
                    <li><Link to="/shop-grid">Shop Grid</Link></li>
                    <li><Link to="/product-details">Shop details </Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </li>
            <li><Link to="/shop"><img src={publicUrl + "assets/img/banner/menu-banner-1.jpg"} alt="#" /></Link>
            </li>
        </ul>
    </li> */}
                                </ul>
                            </div>

                            <div className="ltn__social-media-2">
                                <ul>
                                    <li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
                                    <li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
                                    <li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
                                    <li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div></>
        )
    }
}


export default Navbar