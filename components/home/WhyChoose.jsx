import React from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

export default function WhyChoose() {
  return (
    <Container>
      <div className="my-20 text-center">
        <p data-aos="fade-up" data-aos-duration="1000" className="uppercase">
          why choose us
        </p>
        <h3
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-5xl font-bold mt-5"
        >
          <span className="text-gray-500">Know what</span> <br /> we do
          differently
        </h3>

        <div className="flex justify-center my-10 text-start gap-10">
          <div className="bg-gray-900 py-10 px-20 rounded-3xl ">
            <div
              data-aos="fade-up"
              className="text-white text-xl font-semibold"
            >
              <Image
                src="/assets/logo.avif"
                alt="MZ Media Logo"
                width={250}
                height={80}
              />
            </div>
            <ul className="my-7">
              <li
                data-aos="fade-up"
                data-aos-duration="2000"
                className="flex items-center gap-4"
              >
                <FaCheck /> In house team of 40+ Experts
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="3000"
                className="flex items-center gap-4 mt-5"
              >
                <FaCheck /> Results oriented
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="4000"
                className="flex items-center gap-4 mt-5"
              >
                <FaCheck />
                Experience with 500+ Clients
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="5000"
                className="flex items-center gap-4 mt-5"
              >
                <FaCheck />
                Proven DFY Content Funnel
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="6000"
                className="flex items-center gap-4 mt-5"
              >
                <FaCheck />
                Personalised CRM
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="7000"
                className="flex items-center gap-4 mt-5"
              >
                <FaCheck />
                24/7 Support, Anytime You Need Us
              </li>
            </ul>
            <div className="bg-gray-800 rounded-2xl p-7">
              <p data-aos="fade-up" data-aos-duration="2000">
                Bonuses you get with us:
              </p>
              <ul>
                <li
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className="flex items-center gap-4 mt-5"
                >
                  <span className="text-blue-500">
                    <FaCheckCircle />
                  </span>
                  Free Go High Level Subscription
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="4000"
                  className="flex items-center gap-4 mt-5"
                >
                  <span className="text-blue-500">
                    <FaCheckCircle />
                  </span>
                  Free 1-on- 1 Consultancy
                </li>
              </ul>
            </div>
          </div>
          <div className="border border-gray-500 p-10 rounded-2xl">
            <h3
              data-aos="fade-up"
              data-aos-duration="2000"
              className="text-xl font-bold"
            >
              Other Agencies
            </h3>
            <ul className="mt-10 w-[300px] text-gray-400">
              <li
                data-aos="fade-up"
                data-aos-duration="3000"
                className="flex items-center gap-4"
              >
                <RxCross2 />
                Unreliable Freelancers with slow turnarounds
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="4000"
                className="flex items-center gap-4 mt-5"
              >
                <RxCross2 />
                Edits that fail to convert or perform.
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="5000"
                className="flex items-center gap-4 mt-5"
              >
                <RxCross2 />
                Weak thumbnails and titles with no CTR strategy.
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="6000"
                className="flex items-center gap-4 mt-5"
              >
                <RxCross2 />
                Lack of proper distribution systems
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="7000"
                className="flex items-center gap-4 mt-5"
              >
                <RxCross2 />
                No expertise in funnels or lead capture systems.
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="8000"
                className="flex items-center gap-4 mt-5"
              >
                <RxCross2 />
                Limited revisions with no client-focused approach.
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="9000"
                className="flex items-center gap-4 mt-5"
              >
                <RxCross2 />
                Guesswork instead of data-driven decisions.
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="10000"
                className="flex items-center gap-4 mt-5"
              >
                <RxCross2 />
                Delayed responses and poor communication.
              </li>
            </ul>
          </div>
        </div>
        <button
          data-aos="fade-up"
          data-aos-duration="5000"
          className="bg-sky-700 text-white px-4 py-2 mt-10 rounded-xl text-2xl "
        >
          <Link href="#call" className="flex items-center gap-4">
            Book A 30-Min Call <BsArrowUpRightCircleFill />
          </Link>
        </button>
      </div>
    </Container>
  );
}
