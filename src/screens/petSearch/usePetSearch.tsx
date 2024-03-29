import {useState, useEffect} from 'react';

const usePetSearch = (route: any) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    if (route.params && route.params.selectedCategory) {
      handleCategorySearch(route.params.selectedCategory);
    }
  }, [route.params]);

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
