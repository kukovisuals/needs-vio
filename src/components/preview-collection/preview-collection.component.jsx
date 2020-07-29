import React from 'react';

import CollectionItem from '../collection-item/collection-item.component.jsx';

import './preview-collection.style.scss';

const CollectionPreview = ({ title, items }) => (
	<div className='collection-preview'>
 		<h1 className='title'>{title.toUpperCase()}</h1>
		<div className='preview'>
			{	
				// just give me the first 4 items
				items
				.filter((item,idx) => idx < 4)
				.map(item => (
					<CollectionItem key={item.id} item={item} />
				))
			}
		</div>
	</div>
);

export default CollectionPreview;
