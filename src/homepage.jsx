import React from 'react';
import './homepage.style.scss';

const HomePage = () => (
	<div className='homepage'> 
		<div className='directory_menu'> 
			
			<div className='menu_item'> 
				<div className='content'> 
					<h1 className='title'>HATS</h1>
					<span className='subtitle'> SHOP NOW </span>
				</div>
			</div>

			<div className='menu_item'> 
				<div className='content'> 
					<h1 className='title'>JACKERS</h1>
					<span className='subtitle'> SHOP NOW </span>
				</div>
			</div>

			<div className='menu_item'> 
				<div className='content'> 
					<h1 className='title'>SNEAKERS</h1>
					<span className='subtitle'> SHOP NOW </span>
				</div>
			</div>

			<div className='menu_item'> 
				<div className='content'> 
					<h1 className='title'>WOMAN</h1>
					<span className='subtitle'> SHOP NOW </span>
				</div>
			</div>

			<div className='menu_item'> 
				<div className='content'> 
					<h1 className='title'>MAN</h1>
					<span className='subtitle'> SHOP NOW </span>
				</div>
			</div>

		</div>
	</div>
);

export default HomePage;