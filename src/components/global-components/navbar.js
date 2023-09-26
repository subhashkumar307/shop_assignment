import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import EnquireForm from '../enquireForm';

class NavbarV2 extends Component {

	render() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		let CustomClass = this.props.CustomClass ? this.props.CustomClass : ''
		let imgattr = 'logo'
		let anchor = '#'
		return (
			<>

				<div>
					{/* <EnquireForm /> */}
					<header className={"ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent gradient-color-4---" + CustomClass}>

						<div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black plr--5">
							<div className="container-fluid">
								<div className="row">
									<div className="col">
										<div className="site-logo-wrap">
											<div className="site-logo go-top">
												<Link to="/">
													<img src={publicUrl + "assets/img/shop-logo.png"} alt="Logo" />
												</Link>
											</div>

										</div>
									</div>
									<div className="col header-menu-column menu-color-white">
										<div className="header-menu d-none d-xl-block go-top">
											<div className="nav-wrap">
												
												<nav>
													<div className="ltn__main-menu">

														<ul>
															<li><Link to="/#">HOW IT WORKS</Link>

															</li>
															<li className="menu-icon"><a href="#">WORKFLOWS</a>
																<ul>
																	<li><Link to="/#">Audio Console</Link></li>
																	<li><Link to="/#">Photo Console</Link></li>
																	<li><Link to="/#">Video Console</Link></li>

																	<li><Link to="/#">Mini Console</Link></li>
																</ul>
															</li>
															<li><Link to="/#">DOWNLOAD</Link></li>
															<li><Link to="/#">BLOG</Link></li>
															<li><Link to="/#">SUPPORT</Link></li>
															<li><Link to="/#">SHOP</Link></li>

															<li className="menu-icon"><a href="#">USD</a>
																<ul>
																	<li><Link to="/#">USD<span class="float-right">($)</span></Link></li>
																	<li><Link to="/#">CAD<span class="float-right">($)</span></Link></li>
																	<li><Link to="/#">EUR<span class="float-right">(€)</span></Link></li>
																	<li><Link to="/#">AUD<span class="float-right">($)</span></Link></li>
																	<li><Link to="/#">GPB<span class="float-right">(£)</span></Link></li>
																	<li><Link to="/#">KRW<span class="float-right">(₩)</span></Link></li>
																	<li><Link to="/#">JPY<span class="float-right">(¥)</span></Link></li>
																</ul>
															</li>

														</ul>
													</div>
												</nav>
											</div>
										</div>
									</div>
									<div className="col--- ltn__header-options ltn__header-options-2 p-0">
										{/* Mobile Menu Button */}
										<div className="mobile-menu-toggle ms-auto d-xl-none">
											<a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
												<i className="fa-solid fa-bars"></i>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* ltn__header-middle-area end */}
					</header>
					<div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
						<div className="ltn__utilize-menu-inner ltn__scrollbar">
							<div className="ltn__utilize-menu-head">
								<div className="site-logo">
									<Link to="/"><img src={publicUrl + "assets/img/logo-2.png"} alt="Logo" /></Link>
								</div>
								<button className="ltn__utilize-close">×</button>
							</div>

							<div className="mob-menu-wrap">
								<div className="ltn__utilize-menu">
									<ul>
										<li><Link to="/#">HOW IT WORKS</Link>

										</li>
										<li className="menu-icon"><a href="#">WORKFLOWS</a>
											<ul>
												<li><Link to="/#">Audio Console</Link></li>
												<li><Link to="/#">Photo Console</Link></li>
												<li><Link to="/#">Video Console</Link></li>

												<li><Link to="/#">Mini Console</Link></li>
											</ul>
										</li>
										<li><Link to="/#">DOWNLOAD</Link></li>
										<li><Link to="/#">BLOG</Link></li>
										<li><Link to="/#">SUPPORT</Link></li>
										<li><Link to="/#">SHOP</Link></li>

										<li className="menu-icon"><a href="#">USD</a>
											<ul>
												<li><Link to="/#">USD<span class="float-right">($)</span></Link></li>
												<li><Link to="/#">CAD<span class="float-right">($)</span></Link></li>
												<li><Link to="/#">EUR<span class="float-right">(€)</span></Link></li>
												<li><Link to="/#">AUD<span class="float-right">($)</span></Link></li>
												<li><Link to="/#">GPB<span class="float-right">(£)</span></Link></li>
												<li><Link to="/#">KRW<span class="float-right">(₩)</span></Link></li>
												<li><Link to="/#">JPY<span class="float-right">(¥)</span></Link></li>
											</ul>
										</li>

									</ul>
								</div>
							</div>


							<div className="ltn__social-media-2">
								<ul>
									<li><a href="https://www.facebook.com/aplapollo.official" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
									<li><a href="https://twitter.com/aplapollo_tubes" title="Twitter"><i className="fab fa-twitter" /></a></li>
									<li><a href="https://www.linkedin.com/company/aplapollo-official/" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
									<li><a href="https://www.instagram.com/aplapollo.official/" title="Instagram"><i className="fab fa-instagram" /></a></li>
									<li><a href="https://www.youtube.com/c/APLAPOLLO-official" title="Youtube"><i className="fa-brands fa-youtube" /></a></li>
								</ul>
							</div>
						</div>
					</div>

				</div></>
		)
	}
}


export default NavbarV2