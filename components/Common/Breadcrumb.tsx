import Link from "next/link";

const Breadcrumb = ({
  pageName,
  description,
}: {
  pageName: string;
  description: string;
}) => {
  return (
    <>
      <section className="py-12   ">
        <div className="container text-center">
          <h1 className="text-3xl font-bold mb-3">{pageName}</h1>
          <div className="flex items-center justify-center gap-2 text-[#696a75] dark:text-gray-400">
            <Link href="/" className="hover:text-[#181a2a] dark:hover:text-white">
              Home
            </Link>
            <span>|</span>
            <span>Link One</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
