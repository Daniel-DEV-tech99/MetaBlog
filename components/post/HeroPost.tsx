import Image from 'next/image'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../Common/elements/CustomAvatar'

export default function HeroPost() {
    return (
      <>
      <section className="container mt-12">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-[#4b6bfb] text-white text-sm font-medium rounded-lg mb-6">
            Technology
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            The Impact of Technology on the Workplace: How Technology is Changing
          </h1>
          <div className="flex items-center gap-4 mb-12">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Tracey Wilson" />
              <AvatarFallback>TW</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-lg">Tracey Wilson</div>
              <div className="text-[#696a75] dark:text-gray-400">August 20, 2022</div>
            </div>
          </div>
        </div>
      </section>
              <section className="container mt-4">
        <div className="max-w-5xl mx-auto">
          <Image
            src="/images/hero/hero.png"
            alt="Featured post image"
            width={1200}
            height={600}
            className="w-full h-[500px] object-cover rounded-xl"
          />
        </div>
      </section>
</>
            )
}
