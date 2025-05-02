import React from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="w-full min-h-[400px] relative bg-gradient-to-b from-white via-[#e0f7ff] to-[#a0dcff] text-center py-10 mt-50">
      <div className="relative z-10">
        <div className="flex justify-center w-full gap-6 mb-8">
          <Button className="text-lg font-bold px-8 py-8 rounded-lg border border-[#151531] shadow-lg" variant="default">
            Get Started Now
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-lg text-gray-800 font-medium max-w-7xl mx-auto px-4 mt-50">
          <a href="#" className="hover:text-[#151531] transition-colors">Blog</a>
          <a href="#" className="hover:text-[#151531] transition-colors">Docs</a>
          <a href="#" className="hover:text-[#151531] transition-colors">Attio integration</a>
          <a href="#" className="hover:text-[#151531] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[#151531] transition-colors">Security</a>
          <a href="#" className="hover:text-[#151531] transition-colors">HubSpot integration</a>
          <a href="#" className="hover:text-[#151531] transition-colors">Benchmarks</a>
          <a href="#" className="hover:text-[#151531] transition-colors">Salesforce integration</a>
          <a href="#" className="hover:text-[#151531] transition-colors">Terms</a>
        </div>
      </div>

      <img
        src={"heavy-cloud.svg"}
        alt="Cloud background"
        className="absolute bottom-[0px] w-full object-cover h-[500px] opacity-80"
      />
    </div>
  );
};

export default Footer;
