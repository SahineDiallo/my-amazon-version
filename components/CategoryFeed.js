import React from "react";

const CategoryFeed = ({ categories }) => {
  return (
    <>
      {categories?.map((category) => (
        <div key={category} className="cursor-pointer">
          {category}
        </div>
      ))}
    </>
  );
};

export default CategoryFeed;
