import SectionTitle from "../Common/SectionTitle";
import { Button } from "../Common/elements/CustomButton";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
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
      </div>
    </section>
  );
};

export default Blog;
