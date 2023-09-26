
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import Copyright from './copyright';
import SubscribeForm from '../section-components/SubscribeForm';

class Footer_v1 extends Component {

	componentDidMount() {

		const $ = window.$;

		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/main.js";

		document.body.appendChild(minscript);

		$('.go-top').find('a').on('click', function () {

			$(".quarter-overlay").fadeIn(1);

			$(window).scrollTop(0);

			setTimeout(function () {
				$(".quarter-overlay").fadeOut(300);
			}, 800);

		});

		$(document).on('click', '.theme-btn-1 ', function () {
			$('div').removeClass('modal-backdrop');
			$('div').removeClass('show');
			$('div').removeClass('fade');
			$('body').attr("style", "");
		});
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = "Footer logo"

		return (
			<footer className="ltn__footer-area section-bg-2 ">
				<div className="footer-top-area plr--5">
					<div className="container-fluid">
						<div className="row">

							<div className="col-lg-3">
								<div className="footer-widget footer-about-widget">
									{/* <div className="footer-logo">
										<div className="site-logo">
											<img src={publicUrl + "assets/img/logo-2.png"} alt="Logo" />
										</div>
									</div> */}
									<div className="footer-address">
										<p className="shop-heading">MONOGRAM</p>
										<ul className="shop-heading">
											<li>
												<div className="footer-address-info">

													<p>305 King St. W.<br></br>
														Suite 502<br></br>
														Kitchener, ON<br></br>
														Canada

													</p>

												</div>
											</li>

										</ul>
									</div>

								</div>
							</div>
							<div className="col-lg-2 col-md-4">
								<div className="footer-widget footer-menu-widget clearfix">
									<div className="footer-menu go-top">
										<p className="shop-heading">QUICK LINKS</p>
										<ul className="shop-heading">
											<li><Link to="/#">Home</Link></li>
											<li><Link to="/#">How it Works</Link></li>
											<li><Link to="/#">Shop</Link></li>
											<li><Link to="/#">Download</Link></li>

										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-4">
								<div className="footer-widget footer-menu-widget clearfix">
									<div className="footer-menu go-top">
										<p className="shop-heading">HELP</p>
										<ul className="shop-heading">
											<li><a href="#">FAQs</a></li>
											<li><a href="#">Support Center</a></li>
											<li><Link to="/#">Shipping and Sales</Link></li>
										</ul>
									</div>
								</div>

							</div>

							<div className="col-lg-2 col-md-4">
								<div className="footer-widget footer-menu-widget clearfix">
									<div className="footer-menu go-top">
										<p className="shop-heading">INFORMATION</p>
										<ul className="shop-heading">
											<li><Link to="/#">About Us</Link></li>
											<li><Link to="/#">Work with us</Link></li>
											<li><a href="/#">Privacy Policy</a></li>
											<li><a href="/#">Terms of Use</a></li>
											<li><a href="/#">Terms of Sale</a></li>
											<li><a href="#">Press Kit</a></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-4 mx-md-auto">
								<div className="footer-widget footer-menu-widget clearfix">

									<div className="footer-menu text-center">
										<p className="shop-heading">SUBSCRIBE TO MONOGRAM</p>
										<ul>
											<p className="shop-heading">Master productivity with Creative Console and get all the latest Monogram news.</p>

										</ul>
										<div className="input-form-container">
											<input
												type="email"
												className="input-field"
												placeholder="Email addres"
											/>

											<button className="search-button">
												Submit
											</button>
										</div>
										<div className="ltn__social-media-2 t mt-2">
											<ul className="justify-content-lg-start">
												<li><a href="https://www.instagram.com/aplapollo.official/" title="Instagram"><i className="fab fa-instagram" /></a></li>
												<li><a href="https://twitter.com/aplapollo_tubes" title="Twitter"><i className="fab fa-twitter" /></a></li>
												<li><a href="https://www.facebook.com/aplapollo.official" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
												<li><a href="https://www.youtube.com/c/APLAPOLLO-official" title="Youtube"><i className="fa-brands fa-youtube" /></a></li>
											</ul>
											<p class="d-none d-sm-block">© Monogram 2023</p>
										</div>
										
									</div>

								</div>
							</div>

						</div>
					</div>
				</div>
				{/* <Copyright /> */}
			</footer>
		)
	}
}


export default Footer_v1