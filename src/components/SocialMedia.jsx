import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
	<div className="app__social">
		<div onClick={
			console.log('clicked')
		} >
			<BsLinkedin />
		</div>
		{/* <div>
			<FaFacebookF />
		</div>
		<div>
			<BsInstagram />
		</div> */}
	</div>
);

export default SocialMedia;
