"use client";
import CaseStudies from "@/components/home/CaseStudies";
import Counter from "@/components/home/Counter";
import Feedback from "@/components/home/Feedback";
import Hero from "@/components/home/Hero";
import Player from "@/components/home/Player";
import Process from "@/components/home/Process";
import Questions from "@/components/home/Questions";
import Review from "@/components/home/Review";
import Services from "@/components/home/Services";
import WhyChoose from "@/components/home/WhyChoose";
import Work from "@/components/home/Work";
import WorkWithUs from "@/components/home/WorkWithUs";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   AOS.init({ duration: 1000 });
  // }, []);
  return (
    <>
      <Hero />
      <Player />
      <Counter />
      <Review />
      <Work />
      <CaseStudies />
      <WhyChoose />
      <Process />
      <Services />
      <Feedback />
      <WorkWithUs />
      <Questions />
    </>
  );
}
