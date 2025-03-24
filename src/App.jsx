import { useState } from "react";
import "./App.css";
import WhyChooseUs from "./components/WhyChooseUs";
import OurServicesSection from "./components/OurServicesSection";
import DiscoverJobsSection from "./components/DiscoverJobs/DiscoverJobsSection";

function App() {
  return (
    <>
      <div>
        <OurServicesSection />
        <WhyChooseUs />
        <DiscoverJobsSection />
      </div>
    </>
  );
}

export default App;
