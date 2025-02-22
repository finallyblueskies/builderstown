import React from "react";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  return (
    <section className="about-area area-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="about-img">
              <Image
                width={1400}
                height={1568}
                src="/images/tools.svg"
                alt="image of tools"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <h4>
                Your Local London <br />
                Building & Maintenance <br />
                Experts Since 2003
              </h4>
              <p>
                From fixing a leaky tap to renovating your entire home, we take
                pride in delivering quality workmanship for London homeowners.
                Our experienced team handles everything from basic repairs and
                maintenance to complete room renovations, always with attention
                to detail and a friendly, professional approach.
              </p>
              <a className="main_btn" href="#">
                learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
