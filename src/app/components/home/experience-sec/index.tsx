import React from "react";

const ExperienceSec = () => {
  const experiences = [
    {
      year: "2016",
      title: "Software developer Jr",
      company: "PD Soluções",
      type: "Fulltime",
      description:
        "Experience in embedded software development for various electronic devices, creating robust firmware and ensuring seamless hardware–software integration. Skilled in developing mobile applications for configuring, controlling, and managing a wide range of IoT-enabled systems, delivering intuitive user experiences and reliable real-time communication with embedded components.",
    },
    {
      year: "2017",
      title: "Software developer Mid",
      company: "Siglo Consulting",
      type: "Fulltime",
      description:
        "Software Developer with expertise in React.js, Node.js, React Native, and TypeScript, focused on delivering scalable and well-structured applications. Experienced in designing and consuming REST APIs, working with Firebase and relational databases, and applying Clean Code principles throughout the development lifecycle.",
    },
    {
      year: "2021",
      title: "Software developer Mid",
      company: "Brastemp",
      type: "Fulltime - Remote",
      description:
        "Software Developer with expertise in React.js, React Native, and TypeScript, focused on building efficient, scalable, and user-centered applications. Experienced with tools and technologies such as Figma, Jira, Google Analytics, relational databases, Datadog, Jest, Bitbucket, GitFlow, REST APIs, and Firebase.",
    },
    {
      year: "2022",
      title: "Software developer Senior",
      company: "Gympass",
      type: "Fulltime - Remote",
      description:
        "Software Developer specializing in TypeScript, Node.js, React.js, and React Native, with experience working directly with external stakeholders in English-speaking environments. Strong background in building scalable solutions using GraphQL, REST APIs, and both relational and non-relational databases.",
    },
    {
      year: "2024+",
      title: "Software developer Senior",
      company: "IOB",
      type: "Fulltime - Remote",
      description:
        "Software Developer specializing in TypeScript, Next.js, and React, with a strong focus on front-end architecture and high-quality user interface development. Experienced in building scalable applications using microfrontend architectures, data-ingest pipelines for monitoring, and Strapi for content management.",
    },
  ];

  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Experience</h2>
            <p className="text-xl text-primary">( 02 )</p>
          </div>

          <div className="space-y-7 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative"
              >
                <div className="">
                  <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                  <h4 className="text-lg font-normal">{exp.title}</h4>
                </div>

                <div className=" relative">
                  {index < experiences.length && (
                    <div
                      className={`absolute left-0 top-3 w-px ${
                        index < experiences.length - 1 ? "h-40" : "h-30"
                      } bg-softGray`}
                    ></div>
                  )}

                  <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                    <div
                      className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-primary`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    </div>
                  </div>

                  <div className="pl-4 lg:pl-7">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl text-black font-normal">
                        {exp.company}
                      </span>
                    </div>
                    <p className="text-base font-normal">{exp.type}</p>
                  </div>
                </div>

                <div className="pl-8 sm:pl-0 min-h-50">
                  <p className="leading-relaxed text-base">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
