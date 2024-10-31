import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import noItemfoundImg from "../assets/images/no_item_found.png";

const FilterData = () => {
  const filterData = useSelector((state) => state.product.filteredData);
  return (
    <>
      {filterData.length > 0 ? (
        <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
          <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filterData.map((items) => (
              <ProductCard key={items.id} product={items} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center animate-bounce mt-20 mb-10">
          <img
            src={noItemfoundImg}
            alt="empty-cart"
            className="h-96 w-96 object-contain"
          />
        </div>
      )}
    </>
  );
};

export default FilterData;
