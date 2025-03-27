import { useState } from "react";
import "./App.css";
import WhyChooseUs from "./components/WhyChooseUs";
import OurServicesSection from "./components/OurServicesSection";
import DiscoverJobsSection from "./components/DiscoverJobs/DiscoverJobsSection";
import DropYOurCV from "./components/DropYourCV";
import JobSeekerTestimonial from "./components/JobSeekerTestimonial/JobSeekerTestimonial";

function App() {
  return (
    <>
      <div>
        <OurServicesSection />
        <WhyChooseUs />
        <DiscoverJobsSection />
        <DropYOurCV />
        <JobSeekerTestimonial />
      </div>
    </>
  );
}

export default App;
