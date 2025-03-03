import React from "react";

export default function AdsBanner({ marginTop = "5rem", marginBottom = "0" }) {
  return (
    <section
          className={`container mx-auto`}
          data-aos="fade-up"
      style={{ marginTop: marginTop, marginBottom: marginBottom }}
    >
      <div className="bg-[#E8E8EA] dark:bg-gray-800 rounded-lg p-4 max-w-[320px] sm:max-w-[400px] lg:max-w-[750px] mx-auto text-center">
        <p className="text-[#97989f] dark:text-gray-400 text-sm mb-1">Advertisement</p>
        <p className="text-[#696a75] dark:text-gray-300">You can place ads</p>
        <p className="text-[#696a75] dark:text-gray-300">750x100</p>
      </div>
    </section>
  );
}