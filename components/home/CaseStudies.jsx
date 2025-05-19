"use client";
import React, { useEffect } from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CaseStudies() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Container>
      <div id="caseStudy" className="my-20 text-center text-gray-200">
        <p data-aos="fade-up" className="uppercase">
          case studies
        </p>
        <h3
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-5xl font-bold mt-5"
        >
          <span className="text-gray-500">Some solid</span> <br /> Case studies
        </h3>
      </div>
      <div className="bg-gradient-to-tl from-gray-900 via-gray-950 to-gray-800 mb-20 p-10 rounded-2xl text-gray-200">
        <p data-aos="fade-up" className="uppercase font-bold">
          01 Case study
        </p>
        <h3
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-2xl font-bold mt-5"
        >
          <span className="text-gray-500">“With just 5,000 subscribers,</span>{" "}
          Spencer now generates <br /> $350K per month"
        </h3>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex justify-between items-center px-10 my-10"
        >
          <div className="flex items-center gap-4">
            <div>
              <Image
                src="/assets/client5.avif"
                className="rounded-full -ml-4"
                width={100}
                height={100}
                alt="Client image"
              />
            </div>
            <p className="text-start">
              John <br />
              <span className="text-gray-500">Founder</span>
            </p>
          </div>
          <button className="bg-sky-700 text-white px-4 py-2 mt-10 rounded-xl text-xl font-bold">
            <Link href="#call">Book A Call</Link>
          </button>
        </div>
        <div className="flex justify-between  mt-20">
          <div>
            <div className="flex justify-between items-end gap-6">
              <div>
                <h1 data-aos="fade-up" className="text-2xl font-bold">
                  250%
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="text-gray-500"
                >
                  Revenue Growth
                </p>
                <div className="bg-sky-500 h-[250px] w-[100px] rounded-3xl mt-7"></div>
              </div>
              <div>
                <h1 data-aos="fade-up" className="text-2xl font-bold">
                  200%
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="text-gray-500"
                >
                  Saved on Ads
                </p>
                <div className="bg-purple-500 h-[150px] w-[100px] rounded-3xl mt-7"></div>
              </div>
            </div>
          </div>
          <div>
            <iframe
              className="rounded-3xl"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/3v0rqnWxewk?si=CXwBt4QtM7-a12eg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-tl from-gray-900 via-gray-950 to-gray-800 mb-20 p-10 rounded-2xl my-20 text-gray-200">
        <p data-aos="fade-up" className="uppercase font-bold">
          02 Case study
        </p>
        <h3
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-2xl font-bold mt-5"
        >
          <span className="text-gray-500">
            “Fast, reliable, and top-notch quality.
          </span>
          MZ Media is our <br /> go-to video editing partner!"
        </h3>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex justify-between items-center px-10 my-10"
        >
          <div className="flex items-center gap-4">
            <div>
              <Image
                src="/assets/client5.avif"
                className="rounded-full -ml-4"
                width={100}
                height={100}
                alt="Client image"
              />
            </div>
            <p className="text-start">
              Andrew Clerk <br />
              <span className="text-gray-500">Product Manager</span>
            </p>
          </div>
          <button className="bg-sky-700 text-white px-4 py-2 mt-10 rounded-xl text-xl font-bold">
            <Link href="#call">Book A Call</Link>
          </button>
        </div>
        <div className="flex justify-between  mt-20">
          <div>
            <div className="flex justify-between items-end gap-6">
              <div>
                <h1 data-aos="fade-up" className="text-2xl font-bold">
                  60%
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="text-gray-500"
                >
                  Project with assumtions
                </p>
                <div className="bg-sky-500 h-[250px] w-[130px] rounded-3xl mt-7"></div>
              </div>
              <div>
                <h1 data-aos="fade-up" className="text-2xl font-bold">
                  40%
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="text-gray-500"
                >
                  Revenue Growth
                </p>
                <div className="bg-purple-500 h-[150px] w-[120px] rounded-3xl mt-7"></div>
              </div>
            </div>
          </div>
          <div>
            <iframe
              className="rounded-3xl"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/3v0rqnWxewk?si=CXwBt4QtM7-a12eg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-tl from-gray-900 via-gray-950 to-gray-800 mb-20 p-10 rounded-2xl my-20 text-gray-200">
        <p data-aos="fade-up" className="uppercase font-bold">
          03 Case study
        </p>
        <h3
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-2xl font-bold mt-5"
        >
          <span className="text-gray-500">
            “Fast, reliable, and top-notch quality.
          </span>
          <br />
          MZ Media is our go-to video editing partner!"
        </h3>
        <div className="flex justify-between items-center px-10 my-10">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex items-center gap-4"
          >
            <div>
              <Image
                src="/assets/client5.avif"
                className="rounded-full -ml-4"
                width={100}
                height={100}
                alt="Client image"
              />
            </div>
            <p className="text-start">
              Andrew Clerk <br />
              <span className="text-gray-500">Product Manager</span>
            </p>
          </div>
          <button className="bg-sky-700 text-white px-4 py-2 mt-10 rounded-xl text-xl font-bold">
            <Link href="#call">Book A Call</Link>
          </button>
        </div>
        <div className="flex justify-between  mt-20">
          <div>
            <div className="flex justify-between items-end gap-6">
              <div>
                <h1 data-aos="fade-up" className="text-2xl font-bold">
                  60%
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="text-gray-500"
                >
                  Revenue Growth
                </p>
                <div className="bg-sky-500 h-[250px] w-[130px] rounded-3xl mt-7"></div>
              </div>
              <div>
                <h1 data-aos="fade-up" className="text-2xl font-bold">
                  40%
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="text-gray-500"
                >
                  Saved on Ads
                </p>
                <div className="bg-purple-500 h-[150px] w-[120px] rounded-3xl mt-7"></div>
              </div>
            </div>
          </div>
          <div>
            <iframe
              className="rounded-3xl"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/3v0rqnWxewk?si=CXwBt4QtM7-a12eg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </Container>
  );
}
