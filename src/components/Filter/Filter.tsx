import React from "react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategories: Record<string, boolean>;
  setSelectedCategories: React.Dispatch<
    React.SetStateAction<Record<string, boolean>>
  >;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategories,
  setSelectedCategories,
}) => {
  const handleCheckboxChange = (category: string) => {
    setSelectedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div>
      {categories.map((category) => (
        <label key={category}>
          <input
            type="checkbox"
            checked={selectedCategories[category] || false}
            onChange={() => handleCheckboxChange(category)}
          />
          {category}
        </label>
      ))}
    </div>
  );
};

export default CategoryFilter;
