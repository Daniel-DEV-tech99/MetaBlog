import AdsBanner from "@/components/AdsBanner";
import HeroBlogs from "@/components/Blog/HeroBlogs";
import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Button } from "@/components/Common/elements/CustomButton";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page ",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Blog Grid"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <HeroBlogs/>
      <section className="pb-[2rem] pt-[3rem]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

            <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            className="border-[#696a75] text-[#696a75] dark:border-gray-600 dark:text-gray-300 hover:bg-[#f4f4f5] dark:hover:bg-gray-700 hover:text-[#181a2a] dark:hover:text-white"
          >
            View All Post
          </Button>
          </div>
          <AdsBanner/>
        </div>
      </section>
    </>
  );
};

export default Blog;
