import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	faCookie,
	faGift,
	faMusic,
	faSmile,
	faTrophy,
	faUsers,
	faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player';

import './App.scss';
class Home extends Component {
	render() {
		return (
			<div>
				<div
					className='app-card'
					style={{
						width: '100% !important',
						width: '100%',
						justifyContent: 'center',
						alignItems: 'center',
						diplay: 'flex',
						flexDirection: 'row',
					}}>
					<div>
						<ReactPlayer
							url='https://www.youtube.com/watch?v=aeDAx2UFn60&t=1835s&ab_channel=Aarohan'
							playing={true}
							muted={true}
							controls={true}
						/>
					</div>

					<div className='banner_bg' style={{ flex: 1 }}></div>
					<div style={{ flex: 1, textAlign: '-webkit-right' }}>
						<ul
							className='cloud'
							role='navigation'
							aria-label='Webdev word cloud'>
							<li>
								<a href='#' data-weight='4'>
									social
								</a>
							</li>
							<li>
								<a href='#' data-weight='1'>
									cultural
								</a>
							</li>
							<li>
								<a href='#' data-weight='5'>
									family
								</a>
							</li>
							<li>
								<a href='#' data-weight='8'>
									friends
								</a>
							</li>
							<li>
								<a href='#' data-weight='6'>
									groups
								</a>
							</li>
							<li>
								<a href='#' data-weight='4'>
									togetherness
								</a>
							</li>
							<li>
								<a href='#' data-weight='5'>
									help
								</a>
							</li>
							<li>
								<a href='#' data-weight='6'>
									humanity
								</a>
							</li>
							<li>
								<a href='#' data-weight='2'>
									society
								</a>
							</li>
							<li>
								<a href='#' data-weight='9'>
									unity
								</a>
							</li>
							<li>
								<a href='#' data-weight='3'>
									solidarity
								</a>
							</li>
							<li>
								<a href='#' data-weight='7'>
									diversity
								</a>
							</li>
							<li>
								<a href='#' data-weight='8'>
									interaction
								</a>
							</li>
							<li>
								<a href='#' data-weight='1'>
									cultural
								</a>
							</li>
							<li>
								<a href='#' data-weight='3'>
									communication
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div
					className='app-card  content-wrapper-header banner_dp_bg'
					style={{ marginLeft: '8px' }}></div>
				{/* <div
					className='app-card  content-wrapper-header'
					style={{ marginLeft: '8px' }}>
					<div className='content-wrapper-context'>
						<h3 className='img-content' style={{ fontSize: '2rem' }}>
							Get ready for bucket of extravaganza! Again
						</h3>
						<div className='content-text'>
							Durga puja 2021. Lots of surprises and enjoyment
							<br /> Keep watching.
						</div>
						<a
							className='content-button'
							href='https://forms.gle/AUdSB3QhUZvoyKN27'
							target='_blank'
							style={{ textDecoration: 'none', marginLeft: '100px' }}>
							Subscribe
						</a>
					</div>
					<div className='content-wrapper-img' />
				</div> */}
				<div className='content-section'>
					<div className='content-section-title'>Top Awards</div>
					<ul>
						<li className='adobe-product'>
							<div className='products'>
								<FontAwesomeIcon icon={faTrophy} className='gold' />
								Kali Puja
							</div>
							<div className='desc'>Best Kali puja in eastern Bangalore</div>
							<span className='status'>
								<span className='status-circle green'></span>
								2020
							</span>
							<div className='by'>
								<a
									href='https://www.facebook.com/bongiosamajbengaluru/'
									target='_blank'>
									{' '}
									<img src={require('./assets/img/partners/bsb.png')} />
								</a>
							</div>

							<div className='button-wrapper'>
								<a
									className='content-button status-button open'
									href='/gallery/kp2020'>
									View
								</a>
							</div>
						</li>
						<li className='adobe-product'>
							<div className='products'>
								<FontAwesomeIcon icon={faTrophy} className='gold' />
								Cultural
							</div>
							<div className='desc'>Best cultural program online</div>
							<span className='status'>
								<span className='status-circle green'></span>
								2020
							</span>
							<div className='by'>
								<a
									href='https://www.facebook.com/bongiosamajbengaluru/'
									target='_blank'>
									{' '}
									<img src={require('./assets/img/partners/bsb.png')} />
								</a>
							</div>

							<div className='button-wrapper'>
								<a
									className='content-button status-button open'
									href='/gallery/kp2020'>
									View
								</a>
							</div>
						</li>
						<li className='adobe-product'>
							<div className='products'>
								<FontAwesomeIcon icon={faTrophy} className='gold' />
								Cultural
							</div>
							<div className='desc'>Best cultural program</div>

							<span className='status'>
								<span className='status-circle green'></span>
								2020
							</span>
							<div className='by'>
								<a
									href='https://www.facebook.com/bongiosamajbengaluru/'
									target='_blank'>
									{' '}
									<img src={require('./assets/img/partners/ex.png')} />
								</a>
							</div>
							<div className='button-wrapper'>
								<a
									className='content-button status-button open'
									href='/gallery/kp2020'>
									View
								</a>
							</div>
						</li>
						<li className='adobe-product'>
							<div className='products'>
								<FontAwesomeIcon icon={faTrophy} className='silver' />
								Cultural
							</div>
							<div className='desc'>2nd runners up - Cultural program</div>

							<span className='status'>
								<span className='status-circle green'></span>
								2020
							</span>
							<div className='by'>
								<a
									href='https://www.facebook.com/bongiosamajbengaluru/'
									target='_blank'>
									{' '}
									<img src={require('./assets/img/partners/mb.png')} />
								</a>
							</div>
							<div className='button-wrapper'>
								<a
									className='content-button status-button open'
									href='/gallery/kp2020'>
									View
								</a>
							</div>
						</li>
						<li className='adobe-product'>
							<div className='products'>
								<FontAwesomeIcon icon={faTrophy} className='silver' />
								Durga Puja
							</div>
							<div className='desc'>
								{' '}
								2nd runners up in best Idol Durga pujo
							</div>
							<span className='status'>
								<span className='status-circle green'></span>
								2019
							</span>
							<div className='by'>
								<a
									href='https://www.facebook.com/bongiosamajbengaluru/'
									target='_blank'>
									{' '}
									<img src={require('./assets/img/partners/bsb.png')} />
								</a>
							</div>
							<div className='button-wrapper'>
								<button className='content-button status-button open'>
									View
								</button>
							</div>
						</li>

						<li className='adobe-product'>
							<div className='products'>
								<FontAwesomeIcon icon={faTrophy} className='gold' />
								Kali Puja
							</div>
							<div className='desc'> Best Kali puja in eastern Bangalore</div>
							<span className='status'>
								<span className='status-circle green'></span>
								2019
							</span>
							<div className='by'>
								<a
									href='https://www.facebook.com/bongiosamajbengaluru/'
									target='_blank'>
									{' '}
									<img src={require('./assets/img/partners/bsb.png')} />
								</a>
							</div>
							<div className='button-wrapper'>
								<button className='content-button status-button open'>
									View
								</button>
							</div>
						</li>
						<li className='adobe-product'>
							<div className='products'>
								<FontAwesomeIcon icon={faTrophy} className='gold' />
								Durga Puja
							</div>
							<div className='desc'>
								Best crowd management in small pujo segment
							</div>
							<span className='status'>
								<span className='status-circle green'></span>
								2019
							</span>
							<div className='by'>
								<a
									href='https://www.facebook.com/bongiosamajbengaluru/'
									target='_blank'>
									{' '}
									<img src={require('./assets/img/partners/ex.png')} />
								</a>
							</div>
							<div className='button-wrapper'>
								<button className='content-button status-button open'>
									View
								</button>
							</div>
						</li>
					</ul>
				</div>
				<div className='content-section'>
					<div className='content-section-title'>Archives</div>
					<div className='apps-card'>
						<div className='app-card'>
							<span>
								<svg
									viewBox='0 0 512 512'
									style={{ border: '1px solid #a059a9' }}>
									<FontAwesomeIcon icon={faUsers} />
								</svg>
								250+ Families
							</span>
							<div className='app-card__subtext'>
								In Aarohan Family. A group of passionate and like minded folks
								who makes everything possible.
							</div>
							<div className='app-card-buttons'>
								<div className='menu'></div>
							</div>
						</div>
						<div className='app-card'>
							<span>
								<svg
									viewBox='0 0 52 52'
									style={{ border: '1px solid #c1316d' }}>
									<FontAwesomeIcon icon={faSmile} />
								</svg>
								500+ Families
							</span>
							<div className='app-card__subtext'>
								Covered in #BringASmile campaign where the sole idea was to
								bring smile to someone in need
							</div>
							<div className='app-card-buttons'>
								<div className='menu'></div>
							</div>
						</div>
						<div className='app-card'>
							<span>
								<svg
									viewBox='0 0 52 52'
									style={{ border: '1px solid #C75DEB' }}>
									<FontAwesomeIcon icon={faMusic} />
								</svg>
								5000+ Reach
							</span>
							<div className='app-card__subtext'>
								On online cultural event. A cultural block buster which also
								brought some prestigious awards had a received tremendous love.{' '}
							</div>
							<div className='app-card-buttons'>
								<div className='menu'></div>
							</div>
						</div>
						<div className='app-card'>
							<span>
								<svg
									viewBox='0 0 52 52'
									style={{ border: '1px solid #C75DEB' }}>
									<FontAwesomeIcon icon={faGift} />
								</svg>
								25K gifted
							</span>
							<div className='app-card__subtext'>
								To Ramkrishna Mission for Amphan support. When people are in
								need, we are there #WeAreFamily
							</div>
							<div className='app-card-buttons'>
								<div className='menu'></div>
							</div>
						</div>
						<div className='app-card'>
							<span>
								<svg
									viewBox='0 0 52 52'
									style={{ border: '1px solid #C75DEB' }}>
									<FontAwesomeIcon icon={faCookie} />
								</svg>
								300+ Deliveries
							</span>
							<div className='app-card__subtext'>
								Delivered prasadam to individual household. When fellow
								aarohanian carried the blessing of goddess to the doorstep
							</div>
							<div className='app-card-buttons'>
								<div className='menu'></div>
							</div>
						</div>
						<div className='app-card'>
							<span>
								<svg
									viewBox='0 0 52 52'
									style={{ border: '1px solid #C75DEB' }}>
									<FontAwesomeIcon icon={faUtensils} />
								</svg>
								100+ Families
							</span>
							<div className='app-card__subtext'>
								Joined during annual picnic. Its a family and we live like a
								family.
							</div>
							<div className='app-card-buttons'>
								<div className='menu'></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
