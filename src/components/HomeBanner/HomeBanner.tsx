"use client";

import React from "react";

type Props = {};

const HomeBanner = (props: Props) => {
  return (
    <section className="home_banner_area">
      <div
        className="text-white"
        style={{
          backgroundImage: "url('/images/home-banner.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="backdrop-blur-xs flex flex-col items-center justify-center min-h-[80dvh] bg-black/50">
          <div className="banner_content text-center">
            <h1>London Builders Town Team Ltd</h1>
            <h3 className="mb-4">
              Serving London with quality handywork and rennovations for 20+ years
            </h3>
            <a className="main_btn" href="#">
              get a quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
