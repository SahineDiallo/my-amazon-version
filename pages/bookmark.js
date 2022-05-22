import React from "react";
import { useSelector } from "react-redux";
import SingleProduct from "../components/SingleProduct";
import { selectBookmarkItems } from "../app/slices/BookmarkSlice";

const bookmark = () => {
  const bookmarkedItems = useSelector(selectBookmarkItems);
  return (
    <>
      <h4 className="my-4"> Bookmarked Items </h4>
      <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 mb-5">
        {bookmarkedItems.map((product, i) => (
          <SingleProduct product={product} key={i} />
        ))}
      </div>
    </>
  );
};

export default bookmark;
