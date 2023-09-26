import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

class CopyRight extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return (
			<>
				<div className="footer-bottom-area">
					<div className="container-fluid">
						<div className="contact-info-wrap">
							<ul className="contact-info">
								<li><a href="mailto:info@aplapollo.com"><i className="fa-solid fa-envelope"></i><span>info@aplapollo.com</span></a></li>
								<li><a href="tel:18001023737"><i className="fa-solid fa-phone"></i><span>1800 102 3737</span></a></li>
								<li><a href="mailto:global@aplapollo.com"><i className="fa-solid fa-envelope"></i><span>global@aplapollo.com</span></a></li>
							</ul>
						</div>
						<div className="copyright-area">
							<p>© {currentYear} APL Apollo | All rights reserved</p>
						</div>
					</div>
				</div>
			</>
		)
	}
}


export default CopyRight