"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container";
import Youtube from "./work/Youtube";
import Shorts from "./work/Shorts";
import Podcasts from "./work/Podcasts";
import Ads from "./work/Ads";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Work() {
  const [activeTab, setActiveTab] = useState("youtube"); // default tab

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "youtube":
        return <Youtube />;
      case "shorts":
        return <Shorts />;
      case "podcasts":
        return <Podcasts />;
      case "ads":
        return <Ads />;
      default:
        return <p>Please select a project type.</p>;
    }
  };

  return (
    <div id="work" className="text-center my-20 text-gray-200">
      <p data-aos="fade-up" className="uppercase">
        our work
      </p>
      <h1
        data-aos="fade-up"
        data-aos-duration="2000"
        className="text-5xl font-bold"
      >
        <span className="text-gray-500">Some of our</span> <br /> featured
        projects
      </h1>

      <div className="mt-14">
        <Container>
          <ul className="flex justify-center gap-6 cursor-pointer">
            <li
              className={`px-4 py-2 rounded ${
                activeTab === "youtube" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => setActiveTab("youtube")}
            >
              Youtube Videos
            </li>
            <li
              className={`px-4 py-2 rounded ${
                activeTab === "shorts" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => setActiveTab("shorts")}
            >
              Shorts
            </li>
            <li
              className={`px-4 py-2 rounded ${
                activeTab === "podcasts" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => setActiveTab("podcasts")}
            >
              Podcasts Edits
            </li>
            <li
              className={`px-4 py-2 rounded ${
                activeTab === "ads" ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => setActiveTab("ads")}
            >
              Ad Creatives & VSL
            </li>
          </ul>
        </Container>
        <div className="mt-8">{renderContent()}</div>
      </div>
    </div>
  );
}
