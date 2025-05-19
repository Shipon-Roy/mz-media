import React from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <Container>
        <div className="my-20 text-center">
          <div>
            <h1
              data-aos="fade-up"
              className="text-gray-500 text-5xl font-bold  "
            >
              Bring Real Business <br /> Results Using{" "}
              <span className="text-white">Your Personal Brand</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="text-gray-400   my-5"
            >
              We help entrepreneurs and businesses with Done-For-You organic
              <br />
              content systems that generate leads on autopilot.
            </p>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="flex items-center justify-center gap-4"
            >
              <div className="flex items-center">
                <Image
                  src="/assets/client1.webp"
                  className="rounded-full"
                  width={50}
                  height={50}
                  alt="Client image"
                />
                <Image
                  src="/assets/client2.jpg"
                  className="rounded-full -ml-4"
                  width={50}
                  height={50}
                  alt="Client image"
                />
                <Image
                  src="/assets/client3.avif"
                  className="rounded-full -ml-4"
                  width={50}
                  height={50}
                  alt="Client image"
                />
                <Image
                  src="/assets/client4.avif"
                  className="rounded-full -ml-4"
                  width={50}
                  height={50}
                  alt="Client image"
                />
                <Image
                  src="/assets/client5.avif"
                  className="rounded-full -ml-4"
                  width={50}
                  height={50}
                  alt="Client image"
                />
              </div>
              <p className="text-start">
                Loved by 500+ Businesses worldwide. <br />
                <span className="text-gray-500">Our Clients Speak for Us</span>
              </p>
            </div>
            <button
              data-aos="fade-up"
              data-aos-duration="4000"
              className="bg-sky-700 text-white px-4 py-2 mt-10 rounded-xl "
            >
              <Link href="#call">Book A Call</Link>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
