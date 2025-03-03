"use client";
import Image from "next/image";
import Link from "next/link";
import { Input } from "../Common/elements/CustomeInput";
import { Button } from "../Common/elements/CustomButton";

const Footer = () => {
  return (
    <>
    <footer className=" pt-16 pb-8 border-t mt-[5rem] bg-[#F6F6F7] dark:bg-[#141624] border-[#dcdddf] dark:border-gray-700">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_0.75fr_0.75fr_1.5fr] gap-8">
            {/* About */}
            <div className="">
              <h3 className="text-lg font-bold mb-4">About</h3>
              <p className="text-sm text-[#696a75] dark:text-gray-400 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                tristique. Duis cursus, mi quis viverra ornare.
              </p>
              <div className="text-sm text-[#696a75] dark:text-gray-400">
                <p>Email: info@example.net</p>
                <p>Phone: (800) 123 456 789</p>
              </div>
            </div>

            {/* Quick Link */}
            <div className="flex  items-start md:ml-12 flex-col">
              <h3 className="text-lg font-bold mb-4">Quick Link</h3>
              <ul className="space-y-2 text-sm text-[#696a75] dark:text-gray-400">
                <li>
                  <Link href="/" className="hover:text-[#4b6bfb] dark:hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#4b6bfb] dark:hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-[#4b6bfb] dark:hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/archived" className="hover:text-[#4b6bfb] dark:hover:text-white">
                    Archived
                  </Link>
                </li>
                <li>
                  <Link href="/author" className="hover:text-[#4b6bfb] dark:hover:text-white">
                    Author
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#4b6bfb] dark:hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Category */}
            <div className="flex items-start flex-col">
              <h3 className="text-lg font-bold mb-4">Category</h3>
              <ul className="space-y-2 text-sm text-[#696a75] dark:text-gray-400">
                <li>
                  <Link href="/lifestyle" className="hover:text-[#4b6bfb] dark:hover:text-white">
                    Lifestyle
                  </Link>
                </li>
                <li>
                  <Link href="/technology" className="hover:text-[#4b6bfb] dark:hover:text-white">
                    Technology
                  </Link>
                </li>
                <li>
                  <Link href="/travel" className="hover:text-[#4b6bfb] dark:hover:text-white">
                    Travel
                  </Link>
                </li>
                <li>
                  <Link href="/business" className="hover:text-[#4b6bfb] dark:hover:text-white">
                    Business
                  </Link>
                </li>
                <li>
                  <Link href="/economy" className="hover:text-[#4b6bfb] dark:hover:text-white">
                    Economy
                  </Link>
                </li>
                <li>
                  <Link href="/sports" className="hover:text-[#4b6bfb] dark:hover:text-white">
                    Sports
                  </Link>
                </li>
              </ul>
            </div>

            {/* Weekly Newsletter */}
            <div className="flex justify-center md:justify-end lg:justify-end ">
              <div className="border rounded-xl w-[20rem] bg-white dark:bg-[#242535] lg:p-8 md:p-1 p-4">
                <div className="flex justify-center items-center flex-col">
              <h3 className="text-lg font-bold mb-4">Weekly Newsletter</h3>
              <p className="text-sm text-[#696a75] dark:text-gray-400 mb-4">Get blog articles and offers via email</p>
              <div className="space-y-3 md:w-full lg:w-full">
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="border border-[#e8e8ea] dark:border-gray-600 bg-white dark:bg-gray-700 text-sm"
                />
                <Button className="w-full bg-[#4b6bfb] hover:bg-[#4b6bfb]/90 text-white">Subscribe</Button>
              </div>
                  </div>
              </div>
              </div>
          </div>

          {/* Copyright */}
          <div className="md:mt-16 lg:mt-16 mt-3 py-8 border-t border-[#DCDDDF] dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <Image
                src="/images/logo/footerLogo.svg"
                alt="MetaBlog Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <span className=" text-[#141624] text-lg dark:text-white" style={{fontFamily:'Plus Jakarta Sans'}}>
  Meta
  <span className="font-extrabold text-xl dark:text-white text-[#141624]" style={{fontFamily:'Plus Jakarta Sans'}}>Blog</span>
</span>
                <p className="text-sm md:text-[1rem] lg:text-[1rem] text-[#141624] dark:text-gray-400" style={{fontFamily:'Plus Jakarta Sans'}}>©  All Rights Reserved.</p>
              </div>
            </div>
            <div className="flex gap-6 sm:mb-5 text-sm md:text-[1rem] lg:text-[1rem] text-[#696a75] dark:text-gray-400">
              <Link href="/terms" className="  dark:text-gray-400 text-[#3B3C4A] hover:text-[#4b6bfb] dark:hover:text-white" style={{fontFamily:'Plus Jakarta Sans'}}>
                Terms of Use
              </Link>
              <Link href="/privacy" className="  dark:text-gray-400 text-[#3B3C4A] hover:text-[#4b6bfb] dark:hover:text-white" style={{fontFamily:'Plus Jakarta Sans'}}>
                Privacy Policy
              </Link>
              <Link href="/cookie" className=" dark:text-gray-400 text-[#3B3C4A] hover:text-[#4b6bfb] dark:hover:text-white" style={{fontFamily:'Plus Jakarta Sans'}}>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;
