import React from "react";

interface PageTitleProps {
  title: string;
  titleDescription?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, titleDescription }) => {
  return (
    <section className="my-20 px-6 text-center md:mb-24 md:px-10 lg:mb-28 xl:mb-32 xl:mt-24 xl:px-16 2xl:mx-auto 2xl:max-w-screen-xl ">
      <h1 className="mb-4 lg:mb-6">{title}</h1>
      <p className="mx-auto max-w-[320px] md:max-w-[500px] lg:max-w-[700px]">
        {titleDescription}
      </p>
    </section>
  );
};

export default PageTitle;
