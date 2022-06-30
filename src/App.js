import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Pages from './Pages/Pages/Pages';
import Contact from './Pages/Contact/Contact';

import './Assets/main.scss';
import HeroSection from './Components/HeroSection/HeroSection';
import ProfessionSection from './Components/ProfessionSection/ProfessionSection';
import Ready from './Components/Ready/Ready';
import Advertising from './Components/Advertising/Advertising';

function App() {
	return (
		<>
			{/* Site Header Start */}
			<header className='site-header'>
				<Header />
			</header>
			{/* Site Header End */}
			{/* Site main Start */}
			<main className='site-main'>
				{/* Hero section Start */}
				<HeroSection />
				{/* Hero section End */}
				{/* Professional section Start */}
				<ProfessionSection />
				{/* Professional section End */}
				{/* To start UXUI Start */}
				<Ready />
				{/* To start UXUI End */}
			</main>
			{/* Site main End */}
			<footer className='site-footer'>
				{/* Advertising Footer Start */}
				<Advertising />
				{/* Advertising Footer End */}
			</footer>
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/pages' element={<Pages />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</>
	);
}

export default App;
