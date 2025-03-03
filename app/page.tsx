import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AdsBanner from "@/components/AdsBanner";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Posts from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Blogs Name | Read the Best Blogs & Posts",
  description:
    "Discover insightful blogs, expert posts, and trending articles. Stay updated with the latest news and guides on various topics.",
  keywords: [
    "blogs",
    "articles",
    "news",
    "trending topics",
    "insightful posts",
    "technology",
    "business",
    "startups",
    "SaaS",
  ],
  authors: [{ name: "Daniel Francis", url: "https://yourwebsite.com" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  metadataBase: new URL("https://yourwebsite.com"),
  applicationName: "Meta Blogs App",
  openGraph: {
    type: "website",
    url: "https://yourwebsite.com",
    title: "Meta Blogs Name - Read the Best Blogs & Articles",
    description:
      "Discover top articles, trending topics, and insightful blog posts.",
    siteName: "Meta Blogs",
  
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "Meta Blogs - Latest Blogs & Insights",
    description:
      "Stay updated with the latest articles and trending news on various topics.",
    images: ["https://yourwebsite.com/images/twitter-image.jpg"], // Replace with your actual image
  },
  alternates: {
    canonical: "https://yourwebsite.com",
    languages: {
      "en-US": "https://yourwebsite.com/en",
      "fr-FR": "https://yourwebsite.com/fr",
    },
  },
  robots: "index, follow",
  category: "Blogs & News",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AdsBanner/>
      <Posts />
      <AdsBanner marginTop={'5rem' } />
      {/* <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact /> */}
    </>
  );
}
