import React from "react";
import Banner from "./Banner";
import Weeklypick from "./Weeklypick";
import Shopbycategory from "./Shopbycategory";
import Bestseller from "./Bestseller";
import Review from "./Review";
import Handle from "./Handle";

const Landing = () => {
  return (
    <>
      <Banner />
      <Weeklypick />
      <Shopbycategory />
      <Bestseller />
      <Review />
      <Handle />
    </>
  );
};

export default Landing;
