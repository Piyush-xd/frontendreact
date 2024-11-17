import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  const products = [
    { id: 1, name: "Titanium Bracelet", price: 70000, description: "Elegant titanium bracelet with palladium finish.", image: "path-to-image.jpg" },
    // Add more products as needed
  ];

  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) return <h2>Product not found!</h2>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>Price: ₹{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
