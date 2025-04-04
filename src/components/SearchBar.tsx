// This project is licensed under the MIT License - see the LICENSE file for details

import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";

interface SearchBarProps {
  products: {
    _id: string;
    title: string;
  }[];
  onProductSelect: (_id: string) => void;
}

const SearchContainer = styled.div`
  position: relative;
  max-width: 50vw;
  margin: 2rem auto;
  z-index: 1;

  @media (max-width: 768px) {
    margin: 1rem 0 1rem 1rem;
  }
`;

const SearchLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: ${(props) => props.theme.borderRadius};
  z-index: 1;
`;

const SuggestionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #ddd;
  border-radius: ${(props) => props.theme.borderRadius};
  max-height: 200px;
  overflow-y: auto;
  list-style-type: none;
  padding: 0;
  margin: 0;
  z-index: 10;

  li {
    padding: 0.8rem;
    cursor: pointer;

    &:hover {
      background: #f1f1f1;
    }
  }
`;

const SearchBar: React.FC<SearchBarProps> = ({ products, onProductSelect }) => {
  const [query, setQuery] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<
    { _id: string; title: string }[]
  >([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setQuery(input);

    if (input.trim().length > 0) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <SearchContainer>
      <SearchLabel htmlFor="search-input">Search Products</SearchLabel>
      <SearchInput
        id="search-input"
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search products..."
      />
      {filteredProducts.length > 0 && (
        <SuggestionsList>
          {filteredProducts.map((product) => (
            <li key={product._id} onClick={() => onProductSelect(product._id)}>
              {product.title}
            </li>
          ))}
        </SuggestionsList>
      )}
    </SearchContainer>
  );
};

export default SearchBar;
