import React from "react";

import Hero from "../components/Hero";
import Header from "../components/Header";
import HowItWorks from "../components/HowItWorks";
import FeaturedIn from "../components/FeaturedIn";
import Meals from "../components/Meals";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedIn />
        <HowItWorks />
        <Meals />
        <Testimonials />
        <Pricing />
      </main>
    </>
  );
}

export default Home;
