"use client";
import React from "react";
import Container from "../Container";
import Accordion from "../accordion/Accordion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Questions() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const leftAccordionData = [
    {
      title: "Tell me about your agency?",
      content:
        "While we can't make you a cup of coffee (yet), Quadra is here to fuel your web development journey with powerful features and an intuitive platform.",
    },
    {
      title: "Tell me about your content plan?",
      content:
        "While we can't make you a cup of coffee (yet), Quadra is here to fuel your web development journey with powerful features and an intuitive platform.",
    },
    {
      title: "What services will you provide?",
      content:
        "While we can't make you a cup of coffee (yet), Quadra is here to fuel your web development journey with powerful features and an intuitive platform.",
    },
  ];

  const rightAccordionData = [
    {
      title: "What if I don’t get the results?",
      content:
        "While we can't make you a cup of coffee (yet), Quadra is here to fuel your web development journey with powerful features and an intuitive platform.",
    },
    {
      title: "Why wouldn’t I hire a freelancer?",
      content:
        "While we can't make you a cup of coffee (yet), Quadra is here to fuel your web development journey with powerful features and an intuitive platform.",
    },
    {
      title: "Tell me about your workflow?",
      content:
        "While we can't make you a cup of coffee (yet), Quadra is here to fuel your web development journey with powerful features and an intuitive platform.",
    },
  ];

  return (
    <Container>
      <div className="my-20 text-center">
        <p data-aos="fade-up" className="uppercase">
          Any queries you have
        </p>
        <h3
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-5xl font-bold mt-5"
        >
          <span className="text-gray-500">Questions you may </span> Ask
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
        {/* Left Accordion */}
        <div data-aos="fade-right" className="w-full lg:w-1/2">
          <Accordion data={leftAccordionData} />
        </div>

        {/* Right Accordion */}
        <div data-aos="fade-left" className="w-full lg:w-1/2">
          <Accordion data={rightAccordionData} />
        </div>
      </div>
    </Container>
  );
}
