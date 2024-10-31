import ManCategory from "../assets/images/Men_CatSe-Jpeg.jpg";
import WomenCategory from "../assets/images/Women_CatSe-Jpeg.jpg";
import KidCategory from "../assets/images/kid_CatSe-Jpeg.jpg";

const categories = [
  {
    title: "Men",
    imageUrl: ManCategory,
  },

  {
    title: "Women",
    imageUrl: WomenCategory,
  },

  {
    title: "Kid",
    imageUrl: KidCategory,
  },
];

const CategorySection = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
      {categories.map((item, index) => (
        <div
          key={index}
          className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <img
            src={item.imageUrl}
            alt="img"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute top-[150px] left-5">
            <p className="text-xl font-bold">{item.title}</p>
            <p className="text-gray-600 hover:underline">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
