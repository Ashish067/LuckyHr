import { useState } from "react";
import "./App.css";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <WhyChooseUs />
      </div>
    </>
  );
}

export default App;
