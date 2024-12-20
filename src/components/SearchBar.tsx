// This project is licensed under the MIT License - see the LICENSE file for details

import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";

interface SearchBarProps {
  products: {
    id: string;
    title: string;
  }[];
  onProductSelect: (id: string) => void;
}

const SearchContainer = styled.div`
  position: relative;
  max-width: 50vw;
  margin: 2rem auto;
  z-index: 1;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  z-index: 1;
`;

const SuggestionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #ddd;
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
    { id: string; title: string }[]
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
      <SearchInput
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search products..."
      />
      {filteredProducts.length > 0 && (
        <SuggestionsList>
          {filteredProducts.map((product) => (
            <li key={product.id} onClick={() => onProductSelect(product.id)}>
              {product.title}
            </li>
          ))}
        </SuggestionsList>
      )}
    </SearchContainer>
  );
};

export default SearchBar;
