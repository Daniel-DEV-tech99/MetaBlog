import SectionTitle from "../Common/SectionTitle";
import { Button } from "../Common/elements/CustomButton";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Posts = () => {
  return (
    <>
      <section  className=" pt-12 lg:pt-12 wow fadeInLeft"
              data-aos="fade-right">
        <div className="container">
          <SectionTitle
            title="Last Post"
            
          />

          <div className="grid grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
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
    </>
  );
};

export default Posts;
