// This project is licensed under the MIT License - see the LICENSE file for details

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { useCart } from "../context/CartContext";

interface ProductDetails {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: {
    url: string;
    alt: string;
  };
  rating: number;
  tags: string[];
  reviews: {
    id: string;
    username: string;
    rating: number;
    description: string;
  }[];
}

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

const ProductImage = styled.img`
  max-width: 400px;
  height: auto;
  margin-bottom: 2rem;
`;

const ReviewSection = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 2rem;
  text-align: left;
`;

const ReviewCard = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.shadows.card};
`;

const StarRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin: 0.5rem 0;
`;

const AddToCartButton = styled.button`
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.shadows.button};

  &:hover {
    background-color: #0056b3;
  }
`;

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://v2.api.noroff.dev/online-shop/${id}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch product: ${response.statusText}`);
        }
        const { data }: { data: ProductDetails } = await response.json();
        setProduct(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found</p>;

  const discountPercentage =
    product.price !== product.discountedPrice
      ? Math.round(
          ((product.price - product.discountedPrice) / product.price) * 100
        )
      : 0;

  return (
    <ProductContainer>
      <ProductImage
        src={product.image.url}
        alt={product.image.alt || product.title}
      />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>
        {product.price !== product.discountedPrice ? (
          <>
            <span style={{ textDecoration: "line-through" }}>
              ${product.price.toFixed(2)}
            </span>
            <span style={{ color: "red", marginLeft: "1rem" }}>
              ${product.discountedPrice.toFixed(2)}
            </span>
            <span style={{ marginLeft: "1rem", color: "green" }}>
              Save {discountPercentage}%
            </span>
          </>
        ) : (
          <span>${product.price.toFixed(2)}</span>
        )}
      </p>

      <AddToCartButton onClick={() => addToCart(product)}>
        Add to Cart
      </AddToCartButton>

      <h2>Customer Reviews</h2>
      <ReviewSection>
        {product.reviews.length > 0 ? (
          product.reviews.map((review) => (
            <ReviewCard key={review.id}>
              <h4>{review.username}</h4>
              <StarRating>
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    color={index < review.rating ? "#ffc107" : "#e4e5e9"}
                  />
                ))}
              </StarRating>
              <p>{review.description}</p>
            </ReviewCard>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </ReviewSection>
    </ProductContainer>
  );
};

export default ProductPage;
