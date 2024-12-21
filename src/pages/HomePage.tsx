import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProductCard, { ProductCardProps } from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import StatusMessage from "../components/StatusMessage";
import { useFetch } from "../hooks/useFetch";

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 4rem 1.5rem;
  padding: 2rem;
`;

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const {
    data: products = [],
    loading,
    error,
  } = useFetch<ProductCardProps[]>("https://v2.api.noroff.dev/online-shop");

  if (loading)
    return <StatusMessage message="Loading products..." type="loading" />;
  if (error) return <StatusMessage message={`Error: ${error}`} type="error" />;

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
