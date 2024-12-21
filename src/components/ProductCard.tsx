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
  background: ${(props) => props.theme.colors.secondary};
  padding: 1rem;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius};
  text-align: center;
  height: 100%;
  transition: transform 0.2s;
  box-shadow: ${(props) => props.theme.shadows.card};

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    margin-bottom: 1rem;
    border: 1px solid;
    border-radius: ${(props) => props.theme.borderRadius};
  }

  h2 {
    margin: 0.5rem 0;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.text};
  }

  .description {
    margin: 0.5rem 0;
    height: 3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .prices {
    margin-top: auto;
  }

  .price {
    font-weight: bold;
    color: ${(props) => props.theme.colors.text};
  }

  .discounted-price {
    font-weight: bold;
    color: #990000;
    font-size: large;
    border: 2px solid #990000;
    padding: 5px;
  }

  .original-price {
    color: ${(props) => props.theme.colors.text};
    text-decoration: line-through;
    font-size: 0.9rem;
  }

  .view-button {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
    padding: 0.5rem 1rem;

    text-decoration: none;
    font-size: 1rem;
    margin-top: 1rem;

    &:hover {
      background-color: ${(props) => props.theme.colors.hover};
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
      <h2>{title}</h2>
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
