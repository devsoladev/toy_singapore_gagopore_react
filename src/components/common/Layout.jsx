import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
	return (
		<div className='layout'>
			<Header className='header' />
			<main className='main'>{children}</main>
			<Footer className='footer' />
		</div>
	);
}

export default Layout;
