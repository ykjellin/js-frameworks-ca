// This project is licensed under the MIT License - see the LICENSE file for details

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProductCard, { ProductCardProps } from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 4rem 1.5rem;
  padding: 2rem;
`;

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://v2.api.noroff.dev/online-shop");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const { data }: { data: ProductCardProps[] } = await response.json();
        setProducts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // error/loading msg
  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <SearchBar
        products={products.map(({ id, title }) => ({ id, title }))}
        onProductSelect={(id) => navigate(`/product/${id}`)}
      />

      <ProductContainer>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductContainer>
    </>
  );
};

export default HomePage;
