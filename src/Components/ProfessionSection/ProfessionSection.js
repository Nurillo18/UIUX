import React from 'react';
import Logo from '../../Assets/Images/header__logo.svg';
import CircleImg from '../../Assets/Images/hero__basic-img.svg';
import site from '../../Assets/Images/single-site.png';
import siteSecond from "../../Assets/Images/secound-img-bobs-last.webp"
import menu from "../../Assets/Images/menu-icons.png"
import './proffesional.scss';

function ProfessionSection() {
	return (
		<section className='professional-section'>
			<div className='container'>
				<div className='professional'>
					<div className='professional__top-content'>
						<h2 className='professional__title'>Professional Home Pages</h2>
						<p className='professional__text'>
							Attractive and stylish home layouts bring your portfolio website
							to the next level.
						</p>
					</div>
					<div className='professional__basic-wrapper'>
						<div className='professional__wrapper PR'>
							<div className='subcontainer'>
								<div className='PR__subheader'>
									<img
										className='PR__subheader-lgo-link'
										src={Logo}
										alt='Subheader__log'
									/>
									<ul className='PR__list'>
										<li className='PR__item'>
											<a href='#link' className='PR__links'>
												Home
											</a>
										</li>
										<li className='PR__item'>
											<a href='#link' className='PR__links'>
												About me
											</a>
										</li>
										<li className='PR__item'>
											<a href='#link' className='PR__links'>
												Pages
											</a>
										</li>
										<li className='PR__item'>
											<a href='#link' className='PR__links'>
												Contact us
											</a>
										</li>
									</ul>
									<img className='hamburger-img-small' src={menu} alt="Hamburger" width="12" height="12" />
								</div>
							</div>
							<div className='PR__subgreating'>
								<div className='subcontainer'>
									<div className='PR__subtitle-wrap'>
										<h3 className='PR__subtitle'>HI, I'm David Bowie!</h3>
										<div className='PR__subtext-wrap'>
											<p className='PR__subtext'>
												{' '}
												a <span className='color-brown'>UX Designer</span>
												<br />
												with <span className='border'>10</span>years experience
												working at{' '}
												<a className='PR__link' href='#link'>
													Designers
												</a>
											</p>
										</div>
										<div className='PR__subImgs-wrapper'>
											<img
												className='PR__sub-circle-img'
												src={CircleImg}
												alt='CIOrcle img'
											/>
										</div>
									</div>
								</div>
							</div>
							<div className='PR__subtitle-innerin-prof-wrap'>
								<h4 className='PR__subtitle-innerin-prof'>work</h4>
							</div>
							<div className='PR__advertising-part adver'>
								<div className='subcontainer'>
									<div className='adver-list'>
										<div className='adver__content'>
											<h3 className='adver__title'>
												Re-Design For The App Made Easy
											</h3>
											<div className='adver__buttons'>
												<a className='adver__btn' href='#link'>
													User Massage
												</a>
												<a className='adver__btn' href='#link'>
													UX Designer
												</a>
											</div>
											<p className='adver__text'>
												We completely anolozy your requirement with deep
												research and numnerous for dinalizing the aoucome dame
												for you.
											</p>
											<a className='adver__brown-btn' href='#link'>
												Need Case Study
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='PR__advertising-part adver'>
								<div className='subcontainer'>
									<div className='adver-list ed-secound'>
										<div className='adver__content'>
											<h3 className='adver__title'>
												SaaSup Website For Unique Start-Up Brand
											</h3>
											<div className='adver__buttons'>
												<a className='adver__btn' href='#link'>
													User Massage
												</a>
												<a className='adver__btn' href='#link'>
													UX Designer
												</a>
											</div>
											<p className='adver__text'>
												Conver over oll anolozy your requirement with deep
												research and numnerous for dinalizing the aoucome tht
												business
											</p>
											<a className='adver__brown-btn' href='#link'>
												Need Case Study
											</a>
										</div>
									</div>
								</div>
							</div>
                            <h2 className='PR__last-in-title'>Home UX Designer</h2>
						</div>
						<div className='professional__wrapper PR'>
							<div className='subcontainer'>
								<div className='PR__subheader'>
									<img
										className='PR__subheader-lgo-link'
										src={Logo}
										alt='Subheader__log'
									/>
									<ul className='PR__list'>
										<li className='PR__item'>
											<a href='#link' className='PR__links'>
												Home
											</a>
										</li>
										<li className='PR__item'>
											<a href='#link' className='PR__links'>
												About me
											</a>
										</li>
										<li className='PR__item'>
											<a href='#link' className='PR__links'>
												Pages
											</a>
										</li>
										<li className='PR__item'>
											<a href='#link' className='PR__links'>
												Contact us
											</a>
										</li>
									</ul>
									<img className='hamburger-img-small' src={menu} alt="Hamburger" width="12" height="12" />
								</div>
							</div>
							<div className='PR__subgreating bob-greetting'>
								<div className='subcontainer'>
									<div className='PR__subtitle-wrap wrap-secound'>
										<div className='PR__subtitle-wrap-contnet'>
											<h3 className='PR__subtitle bob-title'>
												I'm Bob Dylan <br /> <span className='ui'>UI</span>{' '}
												designer
											</h3>
											<div className='PR__subtext-wrap bob-card-text'>
												<p className='PR__subtext bob-wrap-text '>
													<a href='#link'>yesimbobdylan@gmail.com</a>
												</p>
											</div>
											<a className='contact-me' href='#link'>
												Contact me
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='PR__subtitle-innerin-prof-wrap wrap-bobs-tech'>
								<h4 className='PR__subtitle-innerin-prof bob-sub-title'>
									Surrently @ Desigrerz Team, priviosly @{' '}
									<span className='grey-color'>Fraxos Tech</span>.I'm am here to
									help you move your business forward with{' '}
									<i className='itelic-word'>desgin, technology & creativity</i>{' '}
								</h4>
							</div>
							<div className='subcontainer'>
								<div className='bobs-last-wrapper bobs'>
									<div className='bobs__own-card'>
										<div className='bobs__img-wrapper'>
											<img
												className='bobs__single-img'
												src={site}
												alt='Single site'
												width='220'
											/>
										</div>
										<h3 className='bobs__single-title'>
											Saas website for unique start-up brands
										</h3>
										<a className='contact-me' href='#link'>
											Read Cass Study
										</a>
									</div>
									<div className='bobs__own-card sec-wrap-bob'>
										<div className='bobs__img-wrapper full-card-color '>
											<img
												className='bobs__single-img bobs_secound-img'
												src={siteSecond}
												alt='Single site'
												width='220'
											/>
										</div>
										<h3 className='bobs__single-title'>
											Re-design admin dashboard to your brand
										</h3>
										<a className='contact-me' href='#link'>
											Read Cass Study
										</a>
									</div>
								</div>
							</div>
                            <h2 className='PR__last-in-title'>Home UI Designer</h2>

						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProfessionSection;
