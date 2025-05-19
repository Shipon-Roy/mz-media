"use client";
import React from "react";
import Container from "../Container";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function WorkWithUs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Container>
      <div id="call" className="my-20 text-center">
        <p data-aos="fade-up" className="uppercase">
          work with us
        </p>
        <h3
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-5xl font-bold mt-5"
        >
          <span className="text-gray-500">Let’s level up</span> <br /> Your
          Business!
        </h3>
      </div>
      <form
        data-aos="fade-up"
        data-aos-duration="4000"
        className="bg-gray-800 p-10 rounded-2xl mx-auto"
      >
        <h1 className="text-3xl">Free Strategy Call</h1>
        <div className="mt-10">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mt-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mt-5">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone (include country code)
          </label>
          <input
            type="number"
            id="phone"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className=" mt-5 mx-auto">
          <label
            htmlFor="social"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Where did you find us?
          </label>
          <select
            id="social"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Email</option>
            <option>Linkedin</option>
            <option>Youtube</option>
            <option>Facebook</option>
          </select>
        </div>
        <div className=" mt-5 mx-auto">
          <label
            htmlFor="business"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            How much are you making per month right now with your business?
          </label>
          <select
            id="business"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
        </div>
        <div className=" mt-5 mx-auto">
          <label
            htmlFor="social-media"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            What’s stopping you from consistently getting leads through social
            media? (Select all that apply)
          </label>
          <select
            id="social-media"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
        </div>
        <div className=" mt-5 mx-auto">
          <label
            htmlFor="services"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Our services typically range from $1k to $6k/month, with most
            clients around $3k. What monthly budget are you comfortable with?
          </label>
          <select
            id="services"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
        </div>
        <div className="text-end mt-5">
          <button className="bg-white text-black  py-1 px-5 rounded">
            Continue
          </button>
        </div>
      </form>
    </Container>
  );
}
