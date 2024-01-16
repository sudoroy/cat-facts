// Home.js

import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const [facts, setFacts] = useState();
  const [backgroundImage, setBackgroundImage] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://catfact.ninja/fact");
      const data = res.data;
      setFacts(data.fact);

      // Set background image URL dynamically (replace with your own image API)
      const imageUrl = `https://source.unsplash.com/1600x900/?${encodeURIComponent(
        data.fact
      )}`;

      setBackgroundImage(imageUrl);
    } catch (error) {
      alert("Error getting facts!");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getNewFact = async () => {
    fetchData();
  };

  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="facts-display">{facts}</div>
      <button onClick={getNewFact}>Show Another Fact</button>
    </div>
  );
};

export default Home;
