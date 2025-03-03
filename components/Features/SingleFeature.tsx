import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (

      <article className="border border-[#E8E8EA] dark:border-gray-700 rounded-xl overflow-hidden p-4">
               
      <Image
              src="/images/hero/Hero.png"
              alt="post"
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
