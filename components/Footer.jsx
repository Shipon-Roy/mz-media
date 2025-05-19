import React from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-gray-900 py-20">
      <Container>
        <div className="flex justify-between items-center  ">
          <Image src="/assets/logo.avif" width={200} height={100} alt="logo" />
          <div className="flex items-center gap-5 text-gray-400">
            <Link href="/">Terms & Conditions</Link>
            <Link href="/">Refund Policy</Link>
            <Link href="/">Privacy Policy</Link>
          </div>
        </div>
        <hr className="text-gray-700" />
        <div className="flex justify-between items-center my-10">
          <p className="text-gray-400">
            © 2025 mzmedia | all rights reseved by Shipon
          </p>
          <div className="flex items-center gap-5 text-2xl text-gray-200">
            <FaLinkedin />
            <FaTwitter />
            <FaFacebook />
          </div>
        </div>
      </Container>
    </div>
  );
}
