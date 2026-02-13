import React from "react";
import { Link } from "react-router-dom";

const Handle = () => {
  const Images = [
    { src: "/instagram/insta1.avif", alt: "Perfume 1" },
    { src: "/instagram/insta2.webp", alt: "Perfume 2" },
    { src: "/instagram/insta3.avif", alt: "Perfume 3" },
    { src: "/instagram/insta4.jpg", alt: "Perfume 4" },
  ];

  return (
    <>
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <Link to="https://www.instagram.com/mdhsaikats/">
              <h1 className="text-3xl font-bold text-gray-900 mt-2">
                <span className="text-pink-500">@</span>EssenseLifestyle
              </h1>
            </Link>
            <p className="text-sm tracking-widest text-gray-500">
              Follow our journey on instagram
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
              {Images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square overflow-hidden rounded-2xl"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Handle;
