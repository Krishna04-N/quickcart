import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import ProductCard from './components/ProductCard';

const allProducts = [
  { title: 'Smart Watch', price: 2999, image: 'https://via.placeholder.com/300x200?text=Smart+Watch' },
  { title: 'Bluetooth Earbuds', price: 1999, image: 'https://via.placeholder.com/300x200?text=Earbuds' },
  { title: 'Running Shoes', price: 1499, image: 'https://via.placeholder.com/300x200?text=Shoes' },
  { title: 'Backpack', price: 899, image: 'https://via.placeholder.com/300x200?text=Backpack' },
  { title: 'Sunglasses', price: 499, image: 'https://via.placeholder.com/300x200?text=Sunglasses' }
];

function App() {
  const [products, setProducts] = useState(allProducts);

  const handleSearch = (query) => {
    const filtered = allProducts.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(filtered);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Carousel />
      <div className="container mt-4">
        <h3 className="mb-4 text-center fw-bold">Featured Products</h3>
        <div className="row">
          {products.length > 0 ? (
            products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))
          ) : (
            <p className="text-center">No products found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
