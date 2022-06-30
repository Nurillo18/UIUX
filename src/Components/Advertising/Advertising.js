import React from 'react';
import BasicImg from '../../Assets/Images/hero__basic-img.svg';
import './advertising.scss';

function Advertising() {
	return (
		<>
			<div className='container'>
				<div className='advert'>
					<div className='advert__img-wrapper'>
						<img
							className='advert__img'
							src={BasicImg}
							alt='Advertising img'
							width='266'
							height='256'
						/>
					</div>
				</div>
			</div>
			<div className='footer__texts-wrapper'>
				<p className='footer__text'>Get in Touch</p>
				<p className='footer__text'>Available for Work</p>
				<p className='footer__text'>Get in Touch</p>
				<p className='footer__text'>Available for Work</p>
				<p className='footer__text'>Get in Touch</p>
			</div>
			<div className='footer-basic-part'>
				<div className='container'>
					<div className='footer-last'>
						<div className='footer-list-inner'>
							<ul className='F-list'>
								<li className='F-item'>
									<a className='F-link' href='#link'>
										UX Designer
									</a>
								</li>
								<li className='F-item'>
									<a className='F-link' href='#link'>
										UI Designer
									</a>
								</li>
								<li className='F-item'>
									<a className='F-link' href='#link'>
										Protected
									</a>
								</li>
							</ul>
							<ul className='F-list'>
								<li className='F-item'>
									<a className='F-link' href='#link'>
										Style Guide
									</a>
								</li>
								<li className='F-item'>
									<a className='F-link' href='#link'>
										Licenses
									</a>
								</li>
								<li className='F-item'>
									<a className='F-link' href='#link'>
										Changelog
									</a>
								</li>
							</ul>
						</div>
						<p className='footer-text'>
							Interested in working together? Drop me a line{' '}
							<span className='writer-footer'>Write Now</span>
						</p>
					</div>
				</div>
				<span className='line'></span>
				<div className='container'>
					<div className='footer-links'>
						<a className='links-footer' href='#link'>
							Copyright © UIUXer | Designed by
						</a>
						<a className='links-footer' href='#link'>
							VictorFlow
						</a>
						<a className='links-footer' href='#link'>
							Templates - Powered by
						</a>
						<a className='links-footer' href='#link'>
							Webflow
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Advertising;
