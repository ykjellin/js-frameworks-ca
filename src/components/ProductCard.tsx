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

const Card = styled.div`
  background: white;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  h3 {
    margin: 1rem 0 0.5rem;
  }

  p {
    color: #666;
  }

  .price {
    font-weight: bold;
    color: #e63946;
  }

  .discount {
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
    <img src={image.url} alt={image.alt || title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <p className="discount">Original: ${price.toFixed(2)}</p>
    <p className="price">Now: ${discountedPrice.toFixed(2)}</p>
    <Link to={`/product/${id}`} className="view-button">
      View Product
    </Link>
  </Card>
);

export default ProductCard;
