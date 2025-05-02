import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-[750px] justify-center text-center mt-15">
        <h1 className="text-7xl font-extrabold tracking-tight text-center font-[Fredoka]">
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
        <Button className="bg-[#ffffff] text-[#151531] text-lg font-bold px-8 py-8 rounded-lg border border-[#151531] mt-10 transition-all hover:scale-115" variant="secondary">
          Get Started
        </Button>
        <Button className="bg-[#151531] text-white text-lg font-bold px-8 py-8 rounded-lg border border-[#151531] mt-10 transition-all hover:scale-115" variant="default">
          Get a Demo
        </Button>
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
      <div className="bg-white max-w-[900px] py-16 px-4 sm:px-8 md:px-16 text-[#0d0c22]">
        <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Already have a tool in place?
        </h2>
        <p className="text-lg">
          Set up June in 2 mins. Don't believe us? Here is a{" "}
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-[#7f6bff] font-semibold">2 minute video</a>{" "}
          showing it. Connect Segment, Amplitude, Mixpanel, or implement one of our SDKs.
        </p>
      </div>

      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Is June your first product analytics tool?
        </h2>
        <p className="text-lg mb-4">
          Set up June with our easy to add snippet. It takes{" "}
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-[#7f6bff] font-semibold">less than 30 minutes</a>{" "}
          and we give your engineer everything they need to get started quickly and{" "}
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-[#7f6bff] font-semibold">securely</a>.
        </p>
        <p className="text-lg">
          We can provide both a SOC 2 report and can help you make sure you are GDPR compliant.
        </p>
      </div>
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
      <div className="max-w-7xl mx-auto px-4">
        <Carousel className="mt-10">
          <CarouselContent>
            <CarouselItem>
              <img src="/company/c1.png" />
            </CarouselItem>
            <CarouselItem>
              <img src="/company/c2.png" />
            </CarouselItem>
            <CarouselItem>
              <img src="/company/c3.png" />
            </CarouselItem>
            <CarouselItem>
              <img src="/company/c4.png" />
            </CarouselItem>
            <CarouselItem>
              <img src="/company/c5.png" />
            </CarouselItem>
            <CarouselItem>
              <img src="/company/c6.png" />
            </CarouselItem>
            <CarouselItem>
              <img src="/company/c7.png" />
            </CarouselItem>
            <CarouselItem>
              <img src="/company/c8.png" />
            </CarouselItem>
            <CarouselItem>
              <img src="/company/c9.png" />
            </CarouselItem>
            <CarouselItem>
              <img src="/company/c10.png" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
