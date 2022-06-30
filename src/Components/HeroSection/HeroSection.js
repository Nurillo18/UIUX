import React from 'react';
import heroImg from "../../Assets/Images/hero__basic-img.svg"
import './hero.scss';

function HeroSection() {
	return (
		<section className='hero-section'>
			<div className='container'>
				<div className='hero'>
					<div className='hero__content'>
						<h1 className='hero__title'>
							Tell your creativity to the world with <span>UIUXer</span>
						</h1>
						<div className='hero_text-wrapper'>
							<p className='hero__text'>
								UIUXer is a creative, minimal, and cleanly designed personal and
								portfolio Webflow template.
							</p>
						</div>
						<div className='hero__btn-links'>
							<a data-aos="fade-right" className='hero__templete' href='#link'>
								Buy Template
							</a>
							<a className='hero__templete' href='#link'>
								Explore Page
							</a>
						</div>
						<img
							className='hero__basic-img'
							src={heroImg}
							alt='Hero circle texts'
							width='241'
							height='243'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
