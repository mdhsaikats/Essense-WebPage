import React from "react";

const Review = () => {
  const reviews = [
    {
      id: 1,
      name: "Alina Rahman",
      title: "Floral Dream",
      comment:
        "This perfume feels like walking through a blooming garden. So soft and elegant.",
      image: "/customer/customer1.avif",
    },
    {
      id: 2,
      name: "Tisha Ahmed",
      title: "Luxury Lover",
      comment:
        "The scent lasts all day and feels incredibly premium. I’m obsessed!",
      image: "/customer/customer2.jpg",
    },
    {
      id: 3,
      name: "Nusrat Jahan",
      title: "Evening Glam",
      comment:
        "Perfect for special nights. The fragrance is bold yet feminine.",
      image: "/customer/customer3.webp",
    },
  ];

  return (
    <>
      <section className="pt-6 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold">Loved by Our Community</h1>
            <div className="w-6 h-6 flex flex-row items-center justify-center mx-auto gap-4 mt-4">
              <img src="/icons/star.png" alt="star" />
              <img src="/icons/star.png" alt="star" />
              <img src="/icons/star.png" alt="star" />
              <img src="/icons/star.png" alt="star" />
              <img src="/icons/star.png" alt="star" />
            </div>
            <p className="text-xl mt-2 text-gray-500">
              Based on 20000<span className="text-pink-500">+</span> reviews
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 p-6"
                >
                  {/* Review Text */}
                  <p className="text-gray-600 italic text-lg leading-relaxed">
                    “{review.comment}”
                  </p>

                  {/* Reviewer Info */}
                  <div className="flex items-center gap-4 mt-6">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />

                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {review.name}
                      </h4>
                      <p className="text-sm text-gray-500">{review.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
