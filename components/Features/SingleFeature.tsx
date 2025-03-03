import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    // <div className="w-full">
    //   <div className="wow fadeInUp" data-wow-delay=".15s">
    //     <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
    //       {icon}
    //     </div>
    //     <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
    //       {title}
    //     </h3>
    //     <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
    //       {paragraph}
    //     </p>
    //   </div>
    // </div>
      <article className="border border-[#E8E8EA] dark:border-gray-700 rounded-xl overflow-hidden p-4">
            <Image
              src="/images/posts/post1.png"
              alt="Beach view"
              width={380}
              height={220}
              className="w-full h-[220px] rounded-md object-cover"
            />
            <div className="pt-5">
              <div className="inline-block px-2.5 py-1.5 bg-[#4B6BFB0D] text-[#4b6bfb] text-xs font-medium rounded-md mb-3">
                Technology
              </div>
              <h3 className="text-lg font-bold mb-3">
                The Impact of Technology on the Workplace: How Technology is Changing
              </h3>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/placeholder/avatar.png"
                  alt="Tracy Wilson"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div className="flex gap-2 text-xs text-[#97989f] dark:text-gray-400">
                  <span>Tracy Wilson</span>
                  <span>•</span>
                  <span>August 20, 2022</span>
                </div>
              </div>
            </div>
          </article>
  );
};

export default SingleFeature;
