import React, { useState, useEffect } from "react";
import axios from "axios";
import Tours from "./components/Tours";

const App = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/prasadcode58/personal-datasets/main/asia-data.json"
        );
        setTours(response.data);
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };

    fetchTours();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (tours.length === 0) {
    return (
      <div className="w-screen min-h-screen flex items-center justify-center flex-col bg-[#fff7ee]">
        <h2 className="text-2xl font-bold">No Tours Left</h2>
        <button
          className="mt-[18px] py-[10px] px-[80px] border-none bg-[#D95F43] font-bold rounded-md text-white hover:bg-[#BF9BBF] transition-all duration-200 shadow-[0_3px_8px_rgba(0,0,0,0.25)]"
          onClick={() => window.location.reload()}
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="w-screen min-h-screen bg-[#fff7ee]">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
