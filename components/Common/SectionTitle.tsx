const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "2rem",
}: {
  title: string;
  paragraph?: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        data-aos="fade-left"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className=" text-2xl font-bold !leading-tight text-custom dark:text-white sm:text-2xl ">
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
