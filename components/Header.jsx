import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center bg-transparent mt-5">
      <div className="bg-gray-800 max-w-[1000px] w-full flex justify-between items-center rounded-2xl p-4 shadow-lg">
        <div className="text-white text-xl font-semibold">
          <Link href="/">
            <Image
              src="/assets/logo.avif"
              alt="MZ Media Logo"
              width={100}
              height={40}
            />
          </Link>
        </div>
        <ul className="flex items-center gap-4 text-white">
          <li>
            <Link href="#review">Review</Link>
          </li>
          <li>
            <Link href="#work">Work</Link>
          </li>
          <li>
            <Link href="#caseStudy">Case Study</Link>
          </li>
          <li>
            <Link href="#process">Process</Link>
          </li>
        </ul>
        <button className="bg-sky-700 text-white px-4 py-2 rounded-2xl">
          <Link href="#call">Book A Call</Link>
        </button>
      </div>
    </div>
  );
}
