const AboutUs = () => {
  return (
    <div className="container my-16 flex flex-col gap-12 px-4 lg:flex-row lg:gap-16 lg:px-28">
      <div className="lg:max-w-xl">
        <p>
          At MentorsHub, we believe in the power of mentorship to transform
          careers and elevate individuals in the tech industry. Our journey
          began with a simple yet powerful idea: to create a platform that
          connects aspiring tech professionals with experienced mentors who can
          guide and inspire them.
          <br /> <br />
          MentorsHub was born out of a shared passion for fostering growth and
          knowledge exchange within the tech community. Today, MentorsHub stands
          as a testament to the power of mentorship in the tech industry. Weve
          facilitated thousands of mentorship connections, witnessed career
          transformations, and seen the impact of knowledge exchange.
          <br /> <br />
          Join us as we shape the future of tech, one mentorship connection at a
          time.
        </p>
      </div>

      <div className="lg:max-w-xl">
        <p className="mb-8">What sets us apart:</p>
        <ul className="ml-4 list-disc text-base text-slate-600">
          <li>
            Personalized Mentorship: At MentorsHub, we understand that every
            tech journey is unique. Thats why we prioritize personalized
            mentorship that caters to the specific needs and goals of each
            mentee.
          </li>
          <li className="my-4">
            Diverse Mentor Community: Our platform boasts a diverse and
            accomplished mentor community, spanning various tech domains. This
            diversity ensures that mentees can find mentors who align with their
            interests and aspirations.
          </li>
          <li>
            Real-world Experience: We go beyond theoretical knowledge. Our
            mentors provide practical insights, share real-life project
            exposure, and offer guidance based on their extensive industry
            experience.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
