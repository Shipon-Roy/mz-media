"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Services() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0, // Start immediately
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false, // Keeps scrolling even on hover
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const settings2 = {
    rtl: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0, // Start immediately
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false, // Keeps scrolling even on hover
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="my-20 text-center text-gray-200">
        <p data-aos="fade-up" className="uppercase">
          Core services
        </p>
        <h3
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-5xl font-bold mt-5"
        >
          <span className="text-gray-500">Types of work</span> <br /> we Do
        </h3>
      </div>
      <div className="mt-10 max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="px-2">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/assets/slider/img1.avif"
                alt="Client image"
                width={600}
                height={400}
                className="object-cover w-full h-[400px]"
              />
              <div className="absolute bottom-0 left-0 w-full h-[130px] text-white p-2 flex justify-between bg-gradient-to-t from-gray-900 to-transparent gap-2">
                <div className="text-left">
                  <h4 className="font-bold text-lg">Jacqueline Asong</h4>
                  <p className="text-sm text-gray-400 mt-5">
                    From 0 to 8k+ subscribers
                  </p>
                </div>
                <div className="">
                  <p className="text-sm bg-gray-500 rounded-2xl px-3 py-2">
                    Generated 5M+ Views
                  </p>
                  <p className="text-sm bg-gray-500 rounded-2xl  py-2 mt-5">
                    10k+ subscribers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Add more slides here */}
          <div className="px-2">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/assets/slider/img2.avif"
                alt="Client image"
                width={600}
                height={400}
                className="object-cover w-full h-[400px]"
              />
              <div className="absolute bottom-0 left-0 w-full h-[130px] text-white p-2 flex justify-between bg-gradient-to-t from-gray-900 to-transparent gap-2">
                <div className="text-left">
                  <h4 className="font-bold text-lg">Jacqueline Asong</h4>
                  <p className="text-sm text-gray-400 mt-5">
                    From 0 to 8k+ subscribers
                  </p>
                </div>
                <div className="">
                  <p className="text-sm bg-gray-500 rounded-2xl px-3 py-2">
                    Generated 5M+ Views
                  </p>
                  <p className="text-sm bg-gray-500 rounded-2xl  py-2 mt-5">
                    10k+ subscribers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/assets/slider/img3.webp"
                alt="Client image"
                width={600}
                height={400}
                className="object-cover w-full h-[400px]"
              />
              <div className="absolute bottom-0 left-0 w-full h-[130px] text-white p-2 flex justify-between bg-gradient-to-t from-gray-900 to-transparent gap-2">
                <div className="text-left">
                  <h4 className="font-bold text-lg">Jacqueline Asong</h4>
                  <p className="text-sm text-gray-400 mt-5">
                    From 0 to 8k+ subscribers
                  </p>
                </div>
                <div className="">
                  <p className="text-sm bg-gray-500 rounded-2xl px-3 py-2">
                    Generated 5M+ Views
                  </p>
                  <p className="text-sm bg-gray-500 rounded-2xl  py-2 mt-5">
                    10k+ subscribers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/assets/slider/img2.avif"
                alt="Client image"
                width={600}
                height={400}
                className="object-cover w-full h-[400px]"
              />
              <div className="absolute bottom-0 left-0 w-full h-[130px] text-white p-2 flex justify-between bg-gradient-to-t from-gray-900 to-transparent gap-2">
                <div className="text-left">
                  <h4 className="font-bold text-lg">Jacqueline Asong</h4>
                  <p className="text-sm text-gray-400 mt-5">
                    From 0 to 8k+ subscribers
                  </p>
                </div>
                <div className="">
                  <p className="text-sm bg-gray-500 rounded-2xl px-3 py-2">
                    Generated 5M+ Views
                  </p>
                  <p className="text-sm bg-gray-500 rounded-2xl  py-2 mt-5">
                    10k+ subscribers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="mt-10 max-w-6xl mx-auto px-4">
        <Slider {...settings2}>
          {/* Slide 1 */}
          <div className="px-2">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/assets/slider/img1.avif"
                alt="Client image"
                width={600}
                height={400}
                className="object-cover w-full h-[400px]"
              />
              <div className="absolute bottom-0 left-0 w-full h-[130px] text-white p-2 flex justify-between bg-gradient-to-t from-gray-900 to-transparent gap-2">
                <div className="text-left">
                  <h4 className="font-bold text-lg">Jacqueline Asong</h4>
                  <p className="text-sm text-gray-400 mt-5">
                    From 0 to 8k+ subscribers
                  </p>
                </div>
                <div className="">
                  <p className="text-sm bg-gray-500 rounded-2xl px-3 py-2">
                    Generated 5M+ Views
                  </p>
                  <p className="text-sm bg-gray-500 rounded-2xl  py-2 mt-5">
                    10k+ subscribers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Add more slides here */}
          <div className="px-2">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/assets/slider/img2.avif"
                alt="Client image"
                width={600}
                height={400}
                className="object-cover w-full h-[400px]"
              />
              <div className="absolute bottom-0 left-0 w-full h-[130px] text-white p-2 flex justify-between bg-gradient-to-t from-gray-900 to-transparent gap-2">
                <div className="text-left">
                  <h4 className="font-bold text-lg">Jacqueline Asong</h4>
                  <p className="text-sm text-gray-400 mt-5">
                    From 0 to 8k+ subscribers
                  </p>
                </div>
                <div className="">
                  <p className="text-sm bg-gray-500 rounded-2xl px-3 py-2">
                    Generated 5M+ Views
                  </p>
                  <p className="text-sm bg-gray-500 rounded-2xl  py-2 mt-5">
                    10k+ subscribers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/assets/slider/img3.webp"
                alt="Client image"
                width={600}
                height={400}
                className="object-cover w-full h-[400px]"
              />
              <div className="absolute bottom-0 left-0 w-full h-[130px] text-white p-2 flex justify-between bg-gradient-to-t from-gray-900 to-transparent gap-2">
                <div className="text-left">
                  <h4 className="font-bold text-lg">Jacqueline Asong</h4>
                  <p className="text-sm text-gray-400 mt-5">
                    From 0 to 8k+ subscribers
                  </p>
                </div>
                <div className="">
                  <p className="text-sm bg-gray-500 rounded-2xl px-3 py-2">
                    Generated 5M+ Views
                  </p>
                  <p className="text-sm bg-gray-500 rounded-2xl  py-2 mt-5">
                    10k+ subscribers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/assets/slider/img2.avif"
                alt="Client image"
                width={600}
                height={400}
                className="object-cover w-full h-[400px]"
              />
              <div className="absolute bottom-0 left-0 w-full h-[130px] text-white p-2 flex justify-between bg-gradient-to-t from-gray-900 to-transparent gap-2">
                <div className="text-left">
                  <h4 className="font-bold text-lg">Jacqueline Asong</h4>
                  <p className="text-sm text-gray-400 mt-5">
                    From 0 to 8k+ subscribers
                  </p>
                </div>
                <div className="">
                  <p className="text-sm bg-gray-500 rounded-2xl px-3 py-2">
                    Generated 5M+ Views
                  </p>
                  <p className="text-sm bg-gray-500 rounded-2xl  py-2 mt-5">
                    10k+ subscribers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}
