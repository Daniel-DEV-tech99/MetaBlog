import { Link } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import Facebook from '@/public/images/icons/logo-facebook'
import Twitter from '@/public/images/icons/logo-twitter'
import Instagram from '@/public/images/icons/logo-instagram'
import Youtube from '@/public/images/icons/logo-youtube'
import Posts from '@/components/Features'
export default function page() {
  return (
    <>
        <section className="pt-12">
        <div className="container">
          <div className="max-w-full p-12 mx-auto text-center  rounded-lg bg-[#f6f6f7] dark:bg-gray-800">
          <div className='flex md:flex-row lg:flex-row flex-col items-center justify-center lg:items-start md:items-start gap-x-3 my-4 '> 
          <Image
              src="/images/placeholder/avatar.png"
              alt="Jonathan Doe"
              width={60}
              height={60}
              className="rounded-full  "
            />
            <div>
            <h1 className="text-2xl font-bold ">Jonathan Doe</h1>
            <p className="text-[#696a75] dark:text-gray-400 mb-6">Collaborator & Editor</p>
           </div>
            </div>
            <p className="text-[#696a75] dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel. Jonathan holds a
              degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding
              of the impact technology has on our lives.
            </p>
            <div className="flex justify-center gap-4">
            <div className='rounded-md bg-[#696A75] p-2'>  
           
                <Facebook  />
             
              </div>
<div className='rounded-md bg-[#696A75] p-2'>                 <Twitter  />
              </div>
<div className='rounded-md bg-[#696A75] p-2'>                 <Instagram  />
              </div>
<div className='rounded-md bg-[#696A75] p-2'>                 <Youtube  />
              </div>
            </div>
          </div>
        </div>
    </section>
  
      <Posts />
      </>
  )
}
