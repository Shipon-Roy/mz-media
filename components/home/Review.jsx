"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Container from "../Container";
import Image from "next/image";

// 👉 Custom Arrows (you can use icons here if you want)
function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute bg-gray-600 w-15 h-15 p-1 rounded-full right-[-25px] top-1/2 -translate-y-1/2 z-10 text-white text-4xl flex justify-center items-center cursor-pointer"
      onClick={onClick}
    >
      ❯
    </div>
  );
}

function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute bg-gray-600 w-15 h-15 p-1 rounded-full flex justify-center items-center left-[-25px] top-1/2 -translate-y-1/2 z-10 text-white text-4xl cursor-pointer"
      onClick={onClick}
    >
      ❮
    </div>
  );
}

export default function Review() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <Container>
      <div id="review" className="my-20 text-center">
        <p data-aos="fade-up" className="uppercase">
          Client testimonials
        </p>
        <h3
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-5xl font-bold mt-5"
        >
          <span className="text-gray-500">Hear what they’re</span> <br /> Saying
          about us
        </h3>
      </div>

      <div className="slider-container relative max-w-3xl mx-auto">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="flex flex-col items-center">
            <div className="w-[350px] aspect-[9/16] mx-auto">
              <iframe
                src="https://www.youtube.com/embed/OegYk6Aeo2k"
                title="First Short"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-3xl shadow"
              ></iframe>
            </div>
            <p className="my-10 text-3xl text-gray-200 px-6 text-center">
              "Honestly, they are the best in the game, and I highly recommend"
            </p>
            <div className="flex items-center gap-5 justify-center">
              <Image
                src="/assets/client1.webp"
                alt="profile"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h3>Nick Barner</h3>
                <p className="text-gray-400">Content Creator</p>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="flex flex-col items-center">
            <div className="w-[350px] aspect-[9/16] mx-auto">
              <iframe
                src="https://www.youtube.com/embed/jAQEiVAO8z8"
                title="Second Short"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-3xl shadow"
              ></iframe>
            </div>
            <p className="my-10 text-3xl text-gray-200 px-6 text-center">
              "I have nothing but great things to say. They definitely helped me
              kickstart everything that I've done on YouTube"
            </p>
            <div className="flex items-center gap-5 justify-center">
              <Image
                src="/assets/client1.webp"
                alt="profile"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h3>Spencer Pawliw</h3>
                <p className="text-gray-400">Skool Games Winner</p>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="flex flex-col items-center">
            <div className="w-[350px] aspect-[9/16] mx-auto">
              <iframe
                src="https://www.youtube.com/embed/AJXRvHi8_zs"
                title="Third Short"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-3xl shadow"
              ></iframe>
            </div>
            <p className="my-10 text-3xl text-gray-200 px-6 text-center">
              "MZ Media is the most reliable editing partner you could ask for
              your content creation ventures"
            </p>
            <div className="flex items-center gap-5 justify-center">
              <Image
                src="/assets/client1.webp"
                alt="profile"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h3>Josh Faulkner</h3>
                <p className="text-gray-400">Entrepreneur</p>
              </div>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="flex flex-col items-center">
            <div className="w-[350px] aspect-[9/16] mx-auto">
              <iframe
                src="https://www.youtube.com/embed/9FiaVLvzAJI"
                title="Fourth Short"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-3xl shadow"
              ></iframe>
            </div>
            <p className="my-10 text-3xl text-gray-200 px-6 text-center">
              "Very quick turnaround and high quality videos. I like how
              revisions get done very fast once I provide feedback"
            </p>
            <div className="flex items-center gap-5 justify-center">
              <Image
                src="/assets/client1.webp"
                alt="profile"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h3>Tech With Lucy</h3>
                <p className="text-gray-400">Educator</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </Container>
  );
}
