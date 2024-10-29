"use client"
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Typed from 'typed.js';
import React, { useRef, useEffect } from 'react';

export default function Home() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Coding', 'Web Development', 'JavaScript', 'Software Design', 'Programming', 'Frontend', 'Backend', 'Full Stack'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for community
            <br className="hidden lg:block" />
            components using <span className="font-semibold underline decoration-primary"><span ref={el} /></span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to
            <br className="hidden lg:block" />
            bootstrap your new apps, projects or landing sites!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Our Pricing Plans</h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Choose a plan that suits your needs.</p>
        </div>
        <div className="flex flex-wrap justify-center">
          {/* <!-- Basic Plan --> */}
          <div className="w-full max-w-sm p-6 m-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Basic</h3>
            <p className="mt-4 text-gray-500 dark:text-gray-300">$10/month</p>
            <ul className="mt-6 space-y-4">
              <li className="text-gray-600 dark:text-gray-400">10 GB Storage</li>
              <li className="text-gray-600 dark:text-gray-400">Basic Support</li>
              <li className="text-gray-600 dark:text-gray-400">Single User</li>
              <li className="text-gray-600 dark:text-gray-400">Community Access</li>
              <li className="text-gray-600 dark:text-gray-400">Weekly Updates</li>
            </ul>
            <button className="w-full px-4 py-2 mt-6 text-white bg-primary rounded-lg hover:bg-primary/70 focus:outline-none focus:bg-primary/70">Choose Plan</button>
          </div>
          {/* <!-- Standard Plan with Bestseller Badge --> */}
          <div className="w-full max-w-sm p-6 m-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 border-4 border-primary">
            <div className="relative">
              <span className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-2 py-1 rounded-bl-lg">Bestseller</span>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Standard</h3>
            </div>
            <p className="mt-4 text-gray-500 dark:text-gray-300">$20/month</p>
            <ul className="mt-6 space-y-4">
              <li className="text-gray-600 dark:text-gray-400">50 GB Storage</li>
              <li className="text-gray-600 dark:text-gray-400">Priority Support</li>
              <li className="text-gray-600 dark:text-gray-400">Up to 5 Users</li>
              <li className="text-gray-600 dark:text-gray-400">Community Access</li>
              <li className="text-gray-600 dark:text-gray-400">Daily Updates</li>
            </ul>
            <button className="w-full px-4 py-2 mt-6 text-white bg-primary rounded-lg hover:bg-primary/70 focus:outline-none focus:bg-primary/70">Choose Plan</button>
          </div>
          {/* <!-- Premium Plan --> */}
          <div className="w-full max-w-sm p-6 m-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-200 hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Premium</h3>
            <p className="mt-4 text-gray-500 dark:text-gray-300">$30/month</p>
            <ul className="mt-6 space-y-4">
              <li className="text-gray-600 dark:text-gray-400">200 GB Storage</li>
              <li className="text-gray-600 dark:text-gray-400">24/7 Support</li>
              <li className="text-gray-600 dark:text-gray-400">Unlimited Users</li>
              <li className="text-gray-600 dark:text-gray-400">Community Access</li>
              <li className="text-gray-600 dark:text-gray-400">Real-time Updates</li>
            </ul>
            <button className="w-full px-4 py-2 mt-6 text-white bg-primary rounded-lg hover:bg-primary/70 focus:outline-none focus:bg-primary/70">Choose Plan</button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Top Blogs</h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Explore our most popular articles.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* <!-- Blog 1 --> */}
          <div className="w-full max-w-md p-6 m-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
            <img className="w-full h-48 rounded-t-lg" src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Blog 1" />
            <div className="mt-4">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Blog Title 1</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog content goes here.</p>
              <button className="mt-4 px-4 py-2 text-white bg-primary rounded-lg hover:bg-primary/70 focus:outline-none focus:bg-primary/70">Read More</button>
            </div>
          </div>
          {/* <!-- Blog 2 --> */}
          <div className="w-full max-w-md p-6 m-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
            <img className="w-full h-48 rounded-t-lg" src="https://images.pexels.com/photos/1240527/pexels-photo-1240527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Blog 2" />
            <div className="mt-4">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Blog Title 2</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog content goes here.</p>
              <button className="mt-4 px-4 py-2 text-white bg-primary rounded-lg hover:bg-primary/70 focus:outline-none focus:bg-primary/70">Read More</button>
            </div>
          </div>
          {/* <!-- Blog 3 --> */}
          <div className="w-full max-w-md p-6 m-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
            <img className="w-full h-48 rounded-t-lg" src="https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Blog 3" />
            <div className="mt-4">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Blog Title 3</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">A brief description of the blog content goes here.</p>
              <button className="mt-4 px-4 py-2 text-white bg-primary rounded-lg hover:bg-primary/70 focus:outline-none focus:bg-primary/70">Read More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Hear from our satisfied customers.</p>
        </div>
        <div className="flex flex-wrap justify-center">
          {/* <!-- Testimonial 1 --> */}
          <div className="w-full max-w-md p-6 m-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
            <p className="text-gray-600 dark:text-gray-400">"This service has been a game-changer for our business. Highly recommend!"</p>
            <div className="mt-4 flex items-center">
              <img className="w-12 h-12 rounded-full" src="client1.jpg" alt="Client 1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">John Doe</h3>
                <p className="text-gray-500 dark:text-gray-300">CEO, Company A</p>
              </div>
            </div>
          </div>
          {/* <!-- Testimonial 2 --> */}
          <div className="w-full max-w-md p-6 m-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
            <p className="text-gray-600 dark:text-gray-400">"Exceptional quality and fantastic customer support."</p>
            <div className="mt-4 flex items-center">
              <img className="w-12 h-12 rounded-full" src="client2.jpg" alt="Client 2" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Jane Smith</h3>
                <p className="text-gray-500 dark:text-gray-300">CTO, Company B</p>
              </div>
            </div>
          </div>
          {/* <!-- Testimonial 3 --> */}
          <div className="w-full max-w-md p-6 m-4 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
            <p className="text-gray-600 dark:text-gray-400">"A reliable partner for our ongoing projects."</p>
            <div className="mt-4 flex items-center">
              <img className="w-12 h-12 rounded-full" src="client3.jpg" alt="Client 3" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Emily Johnson</h3>
                <p className="text-gray-500 dark:text-gray-300">Manager, Company C</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
