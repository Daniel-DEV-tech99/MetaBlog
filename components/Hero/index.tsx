import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
   <section className="container mt-4 relative" data-aos="zoom-in">
        <div className="relative rounded-xl overflow-visible">
          <Image
            src="/images/hero/Hero.png"
            alt="Office environment with technology"
            width={1200}
            height={500}
            className="w-full h-[525px] object-cover border rounded-lg"
          />

          <div className="absolute bottom-[-3.3rem] left-8 right-8 md:left-12 md:right-auto md:max-w-md bg-white dark:bg-gray-800 p-6 rounded-xl shadow-custom">
            <div className="inline-block px-2.5 py-1 bg-[#4b6bfb] text-white text-xs font-medium rounded-md mb-4">
              Technology
            </div>
            <h1 className="text-xl md:text-2xl font-bold mb-4">
              The Impact of Technology on the Workplace: How Technology is Changing
            </h1>
            <div className="flex items-center gap-3">
              <Image
                src="/images/placeholder/avatar.png"
                alt="Jason Francisco"
                width={36}
                height={36}
                className="rounded-full"
              />
             <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-2 text-sm text-[#97989f] dark:text-gray-400">
  <span>Jason Francisco</span>
  <span className="hidden sm:inline">•</span>  {/* Hidden on mobile, visible on larger screens */}
  <span>August 20, 2022</span>
</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
