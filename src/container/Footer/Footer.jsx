import React from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
// import { client } from '../../client';
import './Footer.scss';

const Footer = () => {

	return (
		<>
			<h2 className="head-text">Chat with me</h2>

			<div className="app__footer-cards">
				<div className="app__footer-card ">
					<img src={images.email} alt="email" />
					<a href="mailto:jmendozacarrasco@gmail.com" className="p-text">
						jmendozacarrasco@gmail.com
					</a>
				</div>
				<div className="app__footer-card">
					<img src={images.mobile} alt="phone" />
					<a href="tel:+591 72821908" className="p-text">
						+591 72821908
					</a>
				</div>
				<div className="app__footer-card">
					<img src={images.linkedin} alt="link" />
					<a href="https://www.linkedin.com/in/josemendozacarrasco/" target="_blank" className="p-text" rel="noreferrer">
						My LinkedIn
					</a>
				</div>
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Footer, 'app__footer'),
	'contact',
	'app__whitebg'
);
