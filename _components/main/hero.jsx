import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-[800px] justify-center text-center mt-15">
        <h1 className="text-[70px] leading-[1.1] font-bold text-[#151531]">
          A dashboard for each of your customers
        </h1>
      </div>

      <div className="max-w-[1000px] justify-center text-center mt-10">
        <p className="text-[25px] leading-[1.1] text-[#151531]">
          Product analytics designed for Customer Success and Account
          Management.
        </p>
      </div>
      <div className="flex gap-6">
        <button className="bg-[#ffffff] text-[#151531] text-lg font-bold px-8 py-4 rounded-lg border border-[#151531] mt-10 cursor-pointer transition-all hover:scale-115">
          Get Started
        </button>
        <button className="bg-[#151531] text-white text-lg font-bold px-8 py-4 rounded-lg border border-[#151531] mt-10 cursor-pointer transition-all hover:scale-115">
          Get a Demo
        </button>
      </div>
      <div>
        <img
          src="/s1.png"
          alt=""
          className="w-full h-[500px] object-cover mt-10"
        />
      </div>
      <div>
        <p className="mt-10 text-[30px] font-bold text-[#151531]">
          Trusted by the fastest growing SaaS companies
        </p>
      </div>
      <div className="max-w-[1000px] justify-center text-center mt-30">
        <h2 className="text-[40px] leading-[1.1] text-[#151531]">
          Don't let a $50k churn catch you by surprise
        </h2>
        <p className="text-[25px] leading-[1.1] text-[#151531] mt-5">
          Monitor your customers and find out who needs help
        </p>
      </div>
      <div>
        <img
          src="/s2.png"
          alt=""
          className="w-full h-[500px] object-cover mt-10"
        />
      </div>
      <div className="max-w-[1000px] justify-center text-center mt-30">
        <h2 className="text-[50px] leading-[1.1] text-[#151531]">
          Improve your customer retention in 4 steps
        </h2>
        <p className="text-[25px] text-[#151531] mt-5">
          Don't reinvent the wheel.
        </p>
        <p className="text-[20px] text-[#151531] font-bold">
          Adopt proven retention strategies from the industry.
        </p>
      </div>
      <div>
        <img
          src="/s3.png"
          alt=""
          className="w-full h-[295px] object-cover mt-5"
        />
      </div>
      <div>
        <img
          src="/s4.png"
          alt=""
          className="w-full h-[300px] object-cover mt-5"
        />
      </div>
      <div>
        <img
          src="/s5.png"
          alt=""
          className="w-full h-[300px] object-cover mt-5"
        />
      </div>
      <div>
        <img
          src="/s6.png"
          alt=""
          className="w-full h-[300px] object-cover mt-5"
        />
      </div>
      <div className="max-w-[900px] justify-center text-center mt-20">
        <h1 className="text-[50px] leading-[1.1] font-bold text-[#151531]">
          How to get started
        </h1>
      </div>
      <div>
        <img
          src="/s7.png"
          alt=""
          className="w-full h-[500px] object-cover mt-5"
        />
      </div>
      <div className="inline-block px-8 py-6 bg-[#11112b] rounded-2xl rotate-[-2deg]">
        <code className="p-12 text-lg font-bold font-mono whitespace-nowrap">
          <span className="text-pink-400">analytics</span>
          <span className="text-white">.track(</span>
          <span className="text-sky-400">'Customer Inbox'</span>
          <span className="text-white">)</span>
        </code>
      </div>
      <div className="max-w-[1000px] justify-center text-center mt-40">
        <h3 className="text-[40px] leading-[1.1] font-bold text-[#151531]">
          Loved by fast growing companies
        </h3>
      </div>
      <div className="flex gap-6">
        <button className="bg-[#151531] text-white text-lg font-bold px-8 py-4 rounded-lg border border-[#151531] mt-10 cursor-pointer transition-all hover:scale-115">
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
