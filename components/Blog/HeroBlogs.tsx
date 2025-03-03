import Image from 'next/image'
import React from 'react'

export default function HeroBlogs() {
  return (
     <section className="container ">
        <div className="relative rounded-xl overflow-hidden">
         
                     <Image
                          src="/images/hero/Hero.png"
                          alt="Office environment with technology"
                          width={1200}
                          height={500}
                          className="w-full h-[525px] object-cover border rounded-lg"
                        />

          <div className="absolute bottom-0 md:w-[65%] lg:w-[70%] left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
            <div className="inline-block px-2.5 py-1 bg-[#4b6bfb] text-white text-xs font-medium rounded-md mb-4">
              Technology
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              The Impact of Technology on the Workplace: How Technology is Changing
            </h2>
            <div className="flex items-center gap-3">
              <Image
                src="/images/placeholder/avatar.png"
                alt="Tracy Wilson"
                width={36}
                height={36}
                className="rounded-full"
              />
              <div className="flex gap-2 text-sm text-gray-200">
                <span>Tracy Wilson</span>
                <span>•</span>
                <span>August 20, 2022</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
