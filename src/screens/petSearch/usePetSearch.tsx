import {useState} from 'react';

const usePetSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySearch = (category: string) => {
    setSearchTerm(category);
    setSelectedCategory(category);
  };

  return {
    searchTerm,
    selectedCategory,
    handleCategorySearch,
    setSearchTerm,
  };
};

export default usePetSearch;
