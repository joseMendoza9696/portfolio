import React from 'react';
import { BsLinkedin } from 'react-icons/bs';

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
