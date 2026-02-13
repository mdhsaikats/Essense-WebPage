import React from "react";

const Shopbycategory = () => {
  const categories = [
    {
      name: "Man",
      image: "/category/man.webp",
    },
    {
      name: "Women",
      image: "/category/women.webp",
    },
    {
      name: "Attar",
      image: "/category/atar.webp",
    },
    {
      name: "Solid",
      image: "/category/solid.webp",
    },
  ];
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-12">
            Shop By Category
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer"
              >
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-pink-600 transition duration-300">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Shopbycategory;
