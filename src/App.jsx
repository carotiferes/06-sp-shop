import { useState } from 'react';

import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import Product from './components/Product.jsx';
import CartContextProvider from './store/shopping-cart-context.jsx';

function App() {

  return (
		<CartContextProvider>
			{/* wrap elements that will access the context. For react>=19: .Provider is not needed */}
			<Header />
			<Shop>
				{DUMMY_PRODUCTS.map((product) => (
					<li key={product.id}>
						<Product {...product} />
					</li>
				))}
			</Shop>
		</CartContextProvider>
	);
}

export default App;
