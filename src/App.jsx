import { useState } from "react";
import "./App.css";
import WhyChooseUs from "./components/WhyChooseUs";
import OurServicesSection from "./components/OurServicesSection";
import DiscoverJobsSection from "./components/DiscoverJobs/DiscoverJobsSection";
import DropYOurCV from "./components/DropYourCV";

function App() {
  return (
    <>
      <div>
        <OurServicesSection />
        <WhyChooseUs />
        <DiscoverJobsSection />
        <DropYOurCV />
      </div>
    </>
  );
}

export default App;
