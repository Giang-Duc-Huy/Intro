const TitleHeader = ({ title}) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge">
        <h1 className="font-semibold md:text-4xl text-3xl text-center">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;