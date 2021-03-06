import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.style.scss';

const MenuItem = ({contentSize, title, imageUrl, size, history, linkUrl, match }) => (

	<div 
		className={`${size} menu_item` } 
		onClick={() => history.push(`${match.url}${linkUrl}`)} 
	> 
		<div className='background-image'
					style= {{
						backgroundImage: `url(${imageUrl} )`
					}}
			/>
		<div className={`${contentSize} content`}> 
			<h1 className='title'>{title.toUpperCase()}</h1>
			<span className='subtitle'> SHOP NOW </span>
		</div>
	</div>
);

export default withRouter(MenuItem);