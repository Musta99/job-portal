import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex justify-center gap-6 my-8 flex-wrap">
        <Card
          cardTitle={"For Developers"}
          cardDescription={"Browse out React jobs and start your career today!"}
          buttonText={"Browse Jobs"}
          cardColor={"bg-gray-200"}
        />
        <Card />
      </div>
    </>
  );
}

export default App;
