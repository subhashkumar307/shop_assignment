import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Sidebar extends Component {
	render() {
		let anchor = '#'
		let imagealt = 'image'
		let publicUrl = process.env.PUBLIC_URL + '/'
		return (
			<div className="col-lg-4 go-top">
				<aside className="sidebar-area blog-sidebar ltn__right-sidebar">

					{/* Search Widget */}
					<div className="widget ltn__search-widget">
						<h4 className="ltn__widget-title ltn__widget-title-border-2">Search Objects</h4>
						<form action="#">
							<input type="text" name="search" placeholder="Search your keyword..." />
							<button type="submit"><i className="fas fa-search" /></button>
						</form>
					</div>

					{/* Popular Post Widget */}
					<div className="widget ltn__popular-post-widget">
						<h4 className="ltn__widget-title ltn__widget-title-border-2">Recent Posts</h4>
						
						<ul>
							<li>
								<div className="popular-post-widget-item clearfix">
									<div className="popular-post-widget-img">
										<Link to="/blog-details">
											<img src={publicUrl + "assets/img/team/c1.jpg"} alt="#" style={{ width: 200 + 'px', height: 100 + 'px' }} /></Link>
									</div>
									<div className="popular-post-widget-brief">
										<h6><Link to="/blog-details">
											How Can The Steel Industry Give A Much-Needed Boost To The Indian Economy In the Future?
										</Link></h6>

										{/* <div className="ltn__blog-meta">
											<ul>
												<li className="ltn__blog-date">
													<Link to="#"><i className="far fa-calendar-alt" />June 22, 2020</Link>
												</li>
											</ul>
										</div> */}
									</div>
								</div>
							</li>
							<li>
								<div className="popular-post-widget-item clearfix">
									<div className="popular-post-widget-img">
										<Link to="/blog-details"><img src={publicUrl + "assets/img/team/c2.jpg"} alt="#" style={{ width: 200 + 'px', height: 100 + 'px' }}  /></Link>
									</div>
									<div className="popular-post-widget-brief">
										<h6 ><Link to="/blog-details" >
										How can PEB help you to save on construction costs and time? 
										</Link></h6>
										{/* <div className="ltn__blog-meta">
											<ul>
												<li className="ltn__blog-date">
													<Link to="#"><i className="far fa-calendar-alt" />June 22, 2020</Link>
												</li>
											</ul>
										</div> */}
									</div>
								</div>
							</li>
							<li>
								<div className="popular-post-widget-item clearfix">
									<div className="popular-post-widget-img">
										<Link to="/blog-details"><img src={publicUrl + "assets/img/team/c3.jpg"} alt="#" style={{ width: 200 + 'px', height: 100 + 'px' }}/></Link>
									</div>
									<div className="popular-post-widget-brief">
										<h6><Link to="/blog-details">
										Pre-painted Structural Solutions (Apollo Navrang) 
										</Link></h6>
										{/* <div className="ltn__blog-meta">
											<ul>
												<li className="ltn__blog-date">
													<Link to="#"><i className="far fa-calendar-alt" />June 22, 2020</Link>
												</li>
											</ul>
										</div> */}
									</div>
								</div>
							</li>
							<li>
								<div className="popular-post-widget-item clearfix">
									<div className="popular-post-widget-img">
										<Link to="/blog-details"><img src={publicUrl + "assets/img/team/c4.jpg"} alt="#" style={{ width: 200 + 'px', height: 100 + 'px' }}/></Link>
									</div>
									<div className="popular-post-widget-brief">
										<h6><Link to="/blog-details">
										What Is The Difference Between PEB And Conventional Structures? 
											</Link></h6>
										{/* <div className="ltn__blog-meta">
											<ul>
												<li className="ltn__blog-date">
													<Link to="#"><i className="far fa-calendar-alt" />June 22, 2020</Link>
												</li>
											</ul>
										</div> */}
									</div>
								</div>
							</li>

							<li>
								<div className="popular-post-widget-item clearfix">
									<div className="popular-post-widget-img">
										<Link to="/blog-details"><img src={publicUrl + "assets/img/team/c5.jpg"} alt="#" style={{ width: 200 + 'px', height: 100 + 'px' }}/></Link>
									</div>
									<div className="popular-post-widget-brief">
										<h6><Link to="/blog-details">
										5 Things you need to know about Galvanized Steel Tubes 
											</Link></h6>
										{/* <div className="ltn__blog-meta">
											<ul>
												<li className="ltn__blog-date">
													<Link to="#"><i className="far fa-calendar-alt" />June 22, 2020</Link>
												</li>
											</ul>
										</div> */}
									</div>
								</div>
							</li>
						</ul>
					</div>

					<div >
						<h4 className="ltn__widget-title ltn__widget-title-border-2">Tags</h4>
					<ul className="policy">
						<li>APL Apollo</li>
						<li>Environment Friendly</li>
						<li>Steel</li>
						<li>Steel Industry</li>
						<li>Steel Pipes</li>
						<li>Steel Tubes</li>
						<li>Structural Steel Tubes</li>
						<li>Structural Steel Tubes in PEB</li>
					</ul>
					</div>

					{/* Banner Widget */}
					<div className="widget ltn__banner-widget d-none go-top">
						<Link to="/shop"><img src={publicUrl + "assets/img/banner/2.jpg"} alt="#" /></Link>
					</div>
				</aside>
			</div>
		)
	}
}

export default Sidebar;
