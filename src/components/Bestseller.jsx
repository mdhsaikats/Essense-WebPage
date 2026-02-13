import React from "react";

const Bestseller = () => {
  const products = [
    {
      id: 1,
      name: "Boss",
      description: "Elegant. Timeless. Bold.",
      price: "৳5,000",
      image: "/products/boss.jpg",
    },
    {
      id: 2,
      name: "Blu",
      description: "Fresh. Vibrant. Invigorating.",
      price: "৳4,200",
      image: "/products/blu.jpg",
    },
    {
      id: 3,
      name: "Chanel",
      description: "Classic. Luxurious. Iconic.",
      price: "৳6,800",
      image: "/products/chanel.jpg",
    },
    {
      id: 4,
      name: "Prince",
      description: "Royal. Majestic. Refined.",
      price: "৳7,500",
      image: "/products/prince.webp",
    },
  ];

  return (
    <>
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="mb-12">
            <p className="text-sm tracking-widest text-gray-500 uppercase">
              Customers Favorites
            </p>
            <h1 className="text-4xl font-bold text-gray-900 mt-2">
              <span className="text-pink-500">Best</span> Selling Products
            </h1>
          </div>

          {/* Product Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
              >
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {product.description}
                  </p>
                  <p className="mt-3 font-semibold text-gray-900">
                    {product.price}
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

export default Bestseller;
