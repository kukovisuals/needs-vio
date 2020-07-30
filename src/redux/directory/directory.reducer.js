const INITIAL_STATE = {
	sections: [
		{
	    title: 'vio',
	    imageUrl: 'http://needscollective.com/e-commerce/img/landing.jpg',
	    size: 'x-large',
	    contentSize: 'large',
	    id: 1,
	    linkUrl: 'shop/hats'
	  },
		{
	    title: 'hats',
	    imageUrl: 'http://needscollective.com/e-commerce/img/hats.png',
	    id: 2,
	    linkUrl: 'shop/hats'
	  },
	  {
	    title: 'jackets',
	    imageUrl: 'http://needscollective.com/e-commerce/img/hoodies.png',
	    id: 3,
	    linkUrl: 'shop/jackets'
	  },
	  {
	    title: 'pants',
	    imageUrl: 'http://needscollective.com/e-commerce/img/pants.png',
	    id: 4,
	    linkUrl: 'shop/sneakers'
	  },
	  {
	    title: 'womens',
	    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
	    size: 'large',
	    id: 5,
	    linkUrl: 'shop/womens'
	  },
	  {
	    title: 'mens',
	    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
	    size: 'large',
	    id: 6,
	    linkUrl: 'shop/mens'
	  }
	]
};

const directoryReducer = ( state = INITIAL_STATE, action) => {
	switch(action.type) {
		default:
		return state;
	}
};

export default directoryReducer;


