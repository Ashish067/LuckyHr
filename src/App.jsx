import { useState } from "react";
import "./App.css";
import WhyChooseUs from "./components/WhyChooseUs";
import OurServicesSection from "./components/OurServicesSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <WhyChooseUs />
        <OurServicesSection />
      </div>
    </>
  );
}

export default App;
