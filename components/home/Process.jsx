"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container";
import Image from "next/image";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function Process() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate offset based on scroll (adjust multiplier as needed)
  const offset = Math.min(scrollY * 0.1, 30); // max offset to limit movement

  const getTransform = (xDir, yDir) => {
    return {
      transform: `translate(${xDir * offset}px, ${yDir * offset}px)`,
      transition: "transform 0.2s ease-out",
    };
  };

  return (
    <Container>
      {/* Heading Section */}
      <div id="process" className="text-center my-20 text-gray-200">
        <p
          data-aos="fade-up"
          className="uppercase text-sm tracking-widest text-gray-400"
        >
          our process
        </p>
        <h3
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-5xl font-bold mt-5 leading-tight"
        >
          <span className="text-gray-500">Our strategy to get</span> <br />
          you leads with content
        </h3>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 text-gray-200">
        {/* Text Side */}
        <div className="max-w-md">
          <p
            data-aos="fade-up"
            className="text-sm uppercase bg-blue-600 py-1 px-4 w-[100px] rounded-md font-semibold"
          >
            Ideation
          </p>
          <h3
            data-aos="fade-up"
            data-aos-duration="2000"
            className="text-2xl font-bold mt-2 mb-4"
          >
            Idea Analysis
          </h3>
          <p
            data-aos="fade-up"
            data-aos-duration="3000"
            className="text-gray-400"
          >
            Generate views and sales with our expert team, who have worked with
            the biggest creators.
          </p>
        </div>

        {/* Image Side */}
        <div className="relative w-full md:w-1/2 h-[300px]">
          {/* Center Glow */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <Image
              src="/assets/proscess/bgGlow.avif"
              alt="background glow"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>

          {/* Positioned Tags */}
          <div className="absolute inset-0 z-10">
            <div
              className="absolute top-20 left-32 rotate-12"
              style={getTransform(-1, -1)}
            >
              <Image
                data-aos="fade-down-right"
                data-aos-duration="3000"
                src="/assets/proscess/tag1.avif"
                alt="tag1"
                width={120}
                height={80}
                className="rounded shadow-lg"
              />
            </div>
            <div
              className="absolute top-20 right-10 -rotate-45"
              style={getTransform(1, -1)}
            >
              <Image
                data-aos="fade-down-left"
                data-aos-duration="3000"
                src="/assets/proscess/tag2.avif"
                alt="tag2"
                width={120}
                height={80}
                className="rounded shadow-lg"
              />
            </div>
            <div
              className="absolute bottom-8 left-26 -rotate-12"
              style={getTransform(-1, 1)}
            >
              <Image
                data-aos="fade-up-right"
                data-aos-duration="3000"
                src="/assets/proscess/tag3.avif"
                alt="tag3"
                width={120}
                height={80}
                className="rounded shadow-lg"
              />
            </div>
            <div
              className="absolute bottom-8 right-20 rotate-45"
              style={getTransform(1, 1)}
            >
              <Image
                data-aos="fade-up-left"
                data-aos-duration="3000"
                src="/assets/proscess/tag4.avif"
                alt="tag4"
                width={120}
                height={80}
                className="rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 my-32 text-gray-200">
        {/* Image Side */}
        <div className="relative w-full md:w-1/2 h-[300px]">
          {/* Center Glow */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <Image
              src="/assets/proscess/bgGlow.avif"
              alt="background glow"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>

          {/* Positioned Tags */}
          <div className="absolute inset-0 z-10">
            <div className="absolute top-4 left-8" style={getTransform(-1, -1)}>
              <Image
                data-aos="fade-right"
                src="/assets/proscess/inputbox.png"
                alt="tag1"
                width={220}
                height={80}
                className="rounded shadow-lg"
              />
            </div>
            <div className="absolute top-4 right-8" style={getTransform(1, -1)}>
              <Image
                data-aos="fade-left"
                src="/assets/proscess/linkbar.avif"
                alt="tag2"
                width={320}
                height={100}
                className="rounded shadow-lg"
              />
            </div>
            <div
              className="absolute -bottom-8 left-25"
              style={getTransform(-1, 1)}
            >
              <Image
                data-aos="fade-up"
                data-aos-duration="5000"
                src="/assets/proscess/card1.avif"
                alt="tag3"
                width={320}
                height={20}
                className="rounded shadow-lg"
              />
            </div>
          </div>
        </div>
        {/* Text Side */}
        <div className="max-w-md">
          <p
            data-aos="fade-up"
            className="text-sm uppercase bg-blue-600 py-1 px-4 w-[100px] rounded-md font-semibold"
          >
            Ideation
          </p>
          <h3
            data-aos="fade-up"
            data-aos-duration="2000"
            className="text-2xl font-bold mt-2 mb-4"
          >
            Idea Analysis
          </h3>
          <p
            data-aos="fade-up"
            data-aos-duration="3000"
            className="text-gray-400"
          >
            Generate views and sales with our expert team, who have worked with
            the biggest creators.
          </p>
        </div>
      </div>
      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 my-32 text-gray-200">
        {/* Text Side */}
        <div className="max-w-md">
          <p
            data-aos="fade-up"
            className="text-sm uppercase bg-blue-600 py-1 px-4 w-[100px] rounded-md font-semibold"
          >
            Ideation
          </p>
          <h3
            data-aos="fade-up"
            data-aos-duration="2000"
            className="text-2xl font-bold mt-2 mb-4"
          >
            Idea Analysis
          </h3>
          <p
            data-aos="fade-up"
            data-aos-duration="3000"
            className="text-gray-400"
          >
            Generate views and sales with our expert team, who have worked with
            the biggest creators.
          </p>
        </div>

        {/* Image Side */}
        <div className="relative w-full md:w-1/2 h-[300px]">
          {/* Center Glow */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <Image
              src="/assets/proscess/bgGlow.avif"
              alt="background glow"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>

          {/* Positioned Tags */}
          <div className="absolute inset-0 z-10">
            <div
              className="absolute -top-8 left-28"
              style={getTransform(-1, -1)}
            >
              <Image
                src="/assets/proscess/tag5.avif"
                alt="tag1"
                width={50}
                height={80}
                className="rounded shadow-lg"
              />
            </div>
            <div
              className="absolute top-8 right-40 -rotate-45"
              style={getTransform(1, -1)}
            >
              <Image
                data-aos="fade-down"
                data-aos-duration="3000"
                src="/assets/proscess/pricon.avif"
                alt="tag2"
                width={160}
                height={100}
                className="rounded shadow-lg"
              />
            </div>
            <div
              className="absolute bottom-36 right-20 rotate-45"
              style={getTransform(1, 1)}
            >
              <Image
                data-aos="fade-left"
                data-aos-duration="3000"
                src="/assets/proscess/aeicon.avif"
                alt="tag4"
                width={120}
                height={80}
                className="rounded shadow-lg"
              />
            </div>
            <div
              className="absolute -bottom-14 -right-8 "
              style={getTransform(-1, 1)}
            >
              <Image
                src="/assets/proscess/videoeditingcanvas.avif"
                alt="tag3"
                width={450}
                height={220}
                className="rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 my-32 text-gray-200">
        {/* Image Side */}
        <div className="relative w-full md:w-1/2 h-[300px]">
          {/* Center Glow */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <Image
              src="/assets/proscess/bgGlow.avif"
              alt="background glow"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>

          {/* Positioned Tags */}
          <div className="absolute inset-0 z-10">
            <div
              className="absolute top-4 left-16"
              style={getTransform(-1, -1)}
            >
              <Image
                data-aos="fade-up"
                src="/assets/proscess/Thumbnailicon.avif"
                alt="tag1"
                width={220}
                height={80}
                className="rounded shadow-lg"
              />
            </div>
            <div
              className="absolute bottom-0 right-2 -rotate-12"
              style={getTransform(1, -1)}
            >
              <Image
                data-aos="fade-left"
                src="/assets/proscess/Imangadzhi.avif"
                alt="tag2"
                width={320}
                height={100}
                className="rounded shadow-lg"
              />
            </div>
            <div
              className="absolute -bottom-8 -left-8 rotate-12"
              style={getTransform(-1, 1)}
            >
              <Image
                data-aos="fade-right"
                src="/assets/proscess/Aliabdaal2.avif"
                alt="tag3"
                width={320}
                height={20}
                className="rounded shadow-lg"
              />
            </div>
          </div>
        </div>
        {/* Text Side */}
        <div className="max-w-md">
          <p
            data-aos="fade-up"
            className="text-sm uppercase bg-blue-600 py-1 px-4 w-[100px] rounded-md font-semibold"
          >
            Ideation
          </p>
          <h3
            data-aos="fade-up"
            data-aos-duration="2000"
            className="text-2xl font-bold mt-2 mb-4"
          >
            Idea Analysis
          </h3>
          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            className="text-gray-400"
          >
            Generate views and sales with our expert team, who have worked with
            the biggest creators.
          </p>
        </div>
      </div>
      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 my-32 text-gray-200">
        {/* Text Side */}
        <div className="max-w-md">
          <p
            data-aos="fade-up"
            className="text-sm uppercase bg-blue-600 py-1 px-4 w-[100px] rounded-md font-semibold"
          >
            Ideation
          </p>
          <h3
            data-aos="fade-up"
            data-aos-duration="2000"
            className="text-2xl font-bold mt-2 mb-4"
          >
            Idea Analysis
          </h3>
          <p
            data-aos="fade-up"
            data-aos-duration="3000"
            className="text-gray-400"
          >
            Generate views and sales with our expert team, who have worked with
            the biggest creators.
          </p>
        </div>

        {/* Image Side */}
        <div className="relative w-full md:w-1/2 h-[300px]">
          {/* Center Glow */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <Image
              src="/assets/proscess/bgGlow.avif"
              alt="background glow"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>

          {/* Positioned Tags */}
          <div className="absolute inset-0 z-10">
            <div
              className="absolute top-6 left-36"
              style={getTransform(-1, -1)}
            >
              <Image
                data-aos="fade-up"
                src="/assets/proscess/tiktokicon.avif"
                alt="tag1"
                width={100}
                height={80}
                className="rounded shadow-lg"
              />
            </div>
            <div
              className="absolute -bottom-16 left-10 -rotate-45"
              style={getTransform(1, -1)}
            >
              <Image
                data-aos="fade-right"
                src="/assets/proscess/Group.avif"
                alt="tag2"
                width={160}
                height={100}
                className="rounded shadow-lg"
              />
            </div>
            <div
              className="absolute -top-20 right-4 rotate-45"
              style={getTransform(1, 1)}
            >
              <Image
                data-aos="fade-left"
                src="/assets/proscess/youtubeicon.avif"
                alt="tag4"
                width={150}
                height={80}
                className="rounded shadow-lg"
              />
            </div>
            <div
              className="absolute -bottom-14 -right-8 "
              style={getTransform(-1, 1)}
            >
              <Image
                src="/assets/proscess/viewicon.avif"
                alt="tag3"
                width={400}
                height={220}
                className="rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          data-aos="fade-up"
          data-aos-duration="4000"
          className="bg-sky-700 text-white px-4 py-2 mt-10 mb-20 rounded-xl text-xl"
        >
          <Link href="#call" className="flex items-center gap-4">
            Book A 30-Min Call <BsArrowUpRightCircleFill />
          </Link>
        </button>
      </div>
    </Container>
  );
}
