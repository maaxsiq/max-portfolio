import React from "react";

const FreelanceSec = () => {
  const experiences = [
    {
      title: "Technical Lead",
      company: "Future Secure AI",
      description:
        "Development Lead at FutureSecureAI, a platform for building large-language-model–powered digital workers. Experienced in designing and orchestrating intelligent automation workflows using technologies such as n8n, Flowise, Supabase, TypeScript, ReactJS, Next.js, Node.js, and NestJS. Skilled in cloud infrastructure and DevOps practices with AWS, DataDog, and ArgoCD, ensuring scalable, reliable, and high-performance solutions.",
    },
    {
      title: "Technical Lead",
      company: "Yogha",
      description:
        "Experienced in technical team management, repository governance, and agile process coordination as a Scrum Master, utilizing tools such as Jira, Miro, Git, and AWS. Serves as a front-end development lead with strong expertise in ReactJS, React Native, and TypeScript, ensuring high-quality delivery and architectural consistency. Also acts as a product partner, contributing to strategic decision-making, feature planning, and continuous improvement of the platform.",
    },
    {
      title: "Software developer Senior",
      company: "Allied Irish Bank",
      description:
        "Web (ReactJS) and mobile (React Native) developer for banking applications, responsible for implementing user management flows (AWS Cognito), account management features (Cognito + PostgreSQL), transaction processing and integration with Stripe, and UI design using SASS and LESS.",
    },
    {
      title: "Software developer Senior",
      company: "Whirlpool",
      description:
        "Full-stack software developer experienced in building dashboards, control panels, and AI-powered chatbots using React, TypeScript, Next.js, NestJS, and Node.js. Skilled in designing user interfaces with Figma, proposing accessibility improvements, and developing databases with PostgreSQL, MongoDB, and DynamoDB. Also proficient in creating APIs leveraging Azure services.",
    },
    {
      title: "Software developer Senior",
      company: "Lanlink",
      description:
        "Development and maintenance of web applications using ReactJS, Node.js, TypeScript, Next.js, and NestJS, with a strong focus on clean architecture and scalable front-end and back-end solutions. Responsible for implementing unit tests with Jest, managing deployments and application reliability on Azure Cloud, and contributing to the creation and evolution of the company’s design system to ensure visual consistency and high-quality user experience across all products.",
    },
    {
      title: "Software developer Senior",
      company: "Birdi",
      description:
        "Development and maintenance of Birdi’s mobile application (California, USA) using React Native and TypeScript. Responsibilities included collaborating with new team members, implementing fixes and improvements across both iOS and Android environments, conducting hybrid and unit testing, reviewing pull requests, and ensuring adherence to clean code and industry best practices. Also contributed to the migration from Redux to React Hooks, improving performance and maintainability.",
    },
    {
      title: "Software developer Senior",
      company: "Ivory",
      description:
        "Maintenance of systems and applications built on microservices architecture, leveraging AWS cloud services and performing data queries in PostgreSQL and MySQL databases. Provided solutions across Java, PHP, JavaScript, Node.js, ReactJS, and TypeScript codebases. Additionally, responsible for converting legacy systems into modern, scalable technologies such as Node.js, ReactJS, TypeScript, NestJS, and Next.js, improving performance, maintainability, and long-term stability.",
    },
    {
      title: "Software developer Senior",
      company: "Nova Futura",
      description:
        "Development of web and mobile applications focused on people and investment management, with attention to user experience, best practices, information security, and scalability. Utilized ReactJS, TypeScript, and React Native to deliver efficient, maintainable, and high-quality solutions.",
    },
    {
      title: "Technical Lead",
      company: "Sales Sense",
      description:
        "Technical team management, repository governance, and agile process facilitation as Scrum Master, using tools such as Jira, Miro, Git, and AWS. Front-end development lead with expertise in ReactJS, React Native, and TypeScript, contributing to architectural decisions and ensuring high development standards. Also acts as a product partner, supporting strategic decision-making and driving continuous improvements to the platform.",
    },
    {
      title: "Software developer Mid",
      company: "Tazzi",
      description:
        "Development of web and mobile applications for fleet management (Uber-like platform), using React Native for the mobile app and ReactJS with TypeScript for the admin panel. Responsibilities included maintaining core technologies and managing databases with MongoDB and PostgreSQL to ensure reliability, performance, and scalability.",
    },
    {
      title: "Software developer Mid",
      company: "Power 2 Go",
      description:
        "Management of the development team and creation of technical proposals, leading agile architecture ceremonies and ensuring alignment across the engineering process. Provided front-end development support using ReactJS, React Native, and TypeScript, conducted functional testing, and maintained direct communication with the client to guarantee clarity, quality, and timely delivery.",
    },
    {
      title: "Software developer Jr",
      company: "B2ML",
      description:
        "Development of local software for Petrobras subdivisions using Java, focused on electronic fuel pump control. Additionally responsible for building web applications in JavaScript for user administration, payment and supply management, and financial control of fuel operations, including the generation of electronic invoices.",
    },
  ];

  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Freelances / Consulting</h2>
            <p className="text-xl text-primary">( 04 )</p>
          </div>

          <div className="space-y-7 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative"
              >
                <div className="">
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

export default FreelanceSec;
