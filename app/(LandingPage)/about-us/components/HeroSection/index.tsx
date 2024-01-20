const HeroSection = () => {
  return (
    <div className="container mx-auto my-16 px-4 text-center lg:my-24 lg:max-w-[960px] lg:px-28">
      <h1 className="text-sm font-semibold text-indigo-600 lg:text-base">
        About Us
      </h1>
      <p className="pb-4 pt-3 text-4xl font-semibold leading-[44px] text-gray-900 lg:pb-6 lg:text-5xl lg:leading-[60px]">
        Our mission is clear: to empower the next generation of tech
        professionals
      </p>
      <p className="text-lg text-slate-600 lg:text-xl">
        We are committed to providing a platform that offers personalized
        mentorship experiences, real-world insights, and skill development
        opportunities. By doing so, we aim to bridge the gap between ambition
        and achievement, helping individuals realize their full potential in the
        dynamic world of technology.
      </p>
    </div>
  );
};

export default HeroSection;
