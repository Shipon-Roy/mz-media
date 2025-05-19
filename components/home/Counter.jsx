import React from "react";
import Container from "../Container";

export default function Counter() {
  return (
    <div>
      <Container>
        <div className="my-20 ">
          <h3
            data-aos="fade-up"
            data-aos-duration="2000"
            className="text-3xl font-bold font-serif text-gray-400 text-center"
          >
            Tired of boring video content that <br /> don't stand out? It's time
            to <br /> upgrade the game with us!
          </h3>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex justify-between items-center mt-20 gap-10"
          >
            <div className="w-[200px]">
              <h1 className="text-4xl font-bold">200%</h1>
              <p className="text-end">More Engagement</p>
              <p className="text-gray-500 mt-7">Viral Edits</p>
            </div>
            <div>
              <h1 className="text-4xl font-bold">5X</h1>
              <p className="text-end">More Reach</p>
              <p className="text-gray-500 mt-7">Strategic Distribution</p>
            </div>
            <div>
              <h1 className="text-4xl font-bold">50%</h1>
              <p className="text-end">More Leads</p>
              <p className="text-gray-500 mt-7">Automated Systems</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
