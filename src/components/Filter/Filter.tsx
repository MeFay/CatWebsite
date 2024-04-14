import React from "react";
import { StyledCheckbox, StyledLabel, StyledFilter } from "./styled";

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
    <StyledFilter>
      {categories.map((category) => (
        <StyledLabel key={category}>
          <StyledCheckbox
            checked={selectedCategories[category] || false}
            onChange={() => handleCheckboxChange(category)}
          />
          {category}
        </StyledLabel>
      ))}
    </StyledFilter>
  );
};

export default CategoryFilter;
