// This project is licensed under the MIT License - see the LICENSE file for details

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// define product props
export interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: {
    url: string;
    alt: string;
  };
}

// styled Components
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  height: 100%;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  h3 {
    margin: 0.5rem 0;
    font-size: 1.2rem;
  }

  .description {
    color: #666;
    margin: 0.5rem 0;
    height: 3rem; /* Limit description height */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Show 2 lines only */
    -webkit-box-orient: vertical;
  }

  .prices {
    margin-top: auto;
  }

  .price {
    font-weight: bold;
    color: #000;
  }

  .discounted-price {
    font-weight: bold;
    color: #e63946;
  }

  .original-price {
    color: #333;
    text-decoration: line-through;
    font-size: 0.9rem;
  }

  .view-button {
    background-color: #007bff;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
    margin-top: 1rem;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  description,
  price,
  discountedPrice,
  image,
}) => (
  <Card>
    <div>
      <img src={image.url} alt={image.alt || title} />
      <h3>{title}</h3>
      <p className="description">{description}</p>
    </div>

    <div className="prices">
      {price !== discountedPrice ? (
        <>
          <p className="original-price">Original: ${price.toFixed(2)}</p>
          <p className="discounted-price">Now: ${discountedPrice.toFixed(2)}</p>
        </>
      ) : (
        <p className="price">Price: ${price.toFixed(2)}</p>
      )}
    </div>

    <Link to={`/product/${id}`} className="view-button">
      View Product
    </Link>
  </Card>
);

export default ProductCard;
