import React from "react";
import Reviews from "./Reviews";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "Reviews"
  })
  return (
    <main className="flex flex-col h-screen justify-center items-center space-y-10 bg-blue-200">
      <div className="flex flex-col pt-10">
        <h1>Our Reviews</h1>
        <div className="h-1 bg-blue-500"></div>
      </div>
      <section>
        <Reviews />
      </section>
    </main>
  );
};

export default App;
