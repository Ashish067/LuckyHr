import React from "react";
import JobSeekerTestimonial from "../../components/JobSeekerTestimonial/JobSeekerTestimonial";
import DropYourCV from "../../components/DropYourCV";
import DiscoverJobsSection from "../../components/DiscoverJobs/DiscoverJobsSection";
import WhyChooseUs from "../../components/WhyChooseUs";
import OurServicesSection from "../../components/OurServicesSection";
import Layout from "../../components/Layout";

const Home = () => {
  return (
    <>
      <OurServicesSection />
      <WhyChooseUs />
      <DiscoverJobsSection />
      <DropYourCV />
      <JobSeekerTestimonial />
    </>
  );
};

export default Home;
