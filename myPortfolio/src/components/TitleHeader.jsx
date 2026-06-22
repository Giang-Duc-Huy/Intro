const TitleHeader = ({ title }) => {
  return (
    <div className="flex flex-col items-center mx-auto gap-2 w-full">
      <div className="hero-badge ">
        <h1 className="font-semibold md:text-4xl text-2xl text-center break-words ">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;