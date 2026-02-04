import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import StatisticsCard from "../components/StatisticsCard";
import TextLink from "../components/TextLink";

const About = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    gsap.fromTo(
      hero.querySelectorAll("h1 span"),
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out" },
    );

    gsap.fromTo(
      hero.querySelector(".hero-subtitle"),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.8, ease: "power3.out" },
    );
  }, []);

  const statistics = [
    { count: 21, label: "Advanced Research Projects" },
    { count: 2, label: "Competition Teams" },
    { count: 250, label: "Student Researchers" },
    { count: 110, label: "Hatchling Members" },
  ];

  const currentLeadership = [
    // Executive roles
    { role: "President", name: "Sam Woravka", period: "Spring 2026" },
    { role: "Internal VP", name: "Ian Wilhite", period: "Spring 2026" },
    { role: "External VP", name: "Yousuf Shafiu", period: "Spring 2026" },
    { role: "Project VP", name: "Emily Tredemeyer", period: "Spring 2026" },
    {
      role: "Development VP",
      name: "Kalen Jaroszewski",
      period: "Spring 2026",
    },

    // Internal Branch
    { role: "Internal VP", name: "Ian Wilhite", period: "Spring 2026" },
    { role: "Finance", name: "Raquel Garcia", period: "Spring 2026" },
    { role: "Finance", name: "Eddy Silva", period: "Spring 2026" },
    { role: "Documentation", name: "Ryo Kato", period: "Spring 2026" },
    { role: "Lab Quality Chair", name: "Haider Mahdi", period: "Spring 2026" },

    // External Branch
    { role: "External VP", name: "Yousuf Shafiu", period: "Spring 2026" },
    { role: "Public Relations", name: "Isaac Cabello", period: "Spring 2026" },
    { role: "Webmaster", name: "Saksham Mohan", period: "Spring 2026" },
    {
      role: "Corporate Relations",
      name: "Will Donaldson",
      period: "Spring 2026",
    },
    { role: "Events", name: "Renee Zhu", period: "Spring 2026" },

    // Project Branch
    { role: "Project VP", name: "Emily Tredemeyer", period: "Spring 2026" },
    {
      role: "Design Review Chair",
      name: "Will McGarity",
      period: "Spring 2026",
    },
    { role: "Design Review Chair", name: "Evan Chan", period: "Spring 2026" },

    // Development Branch
    {
      role: "Development VP",
      name: "Kalen Jaroszewski",
      period: "Spring 2026",
    },
    { role: "Workshops", name: "Vedant Soni", period: "Spring 2026" },
    {
      role: "Hatchling Director",
      name: "Alejandro Avila",
      period: "Spring 2026",
    },
    {
      role: "Hatchling Director",
      name: "Ethan Real",
      period: "Spring 2026",
      description: "Hatchling leadership and mentorship",
    },
    {
      role: "Hatchling Director",
      name: "Gael Mamenta",
      period: "Spring 2026",
      description: "Hatchling leadership and mentorship",
    },
    {
      role: "Hatchling Director",
      name: "Karthik Jayakumar",
      period: "Spring 2026",
      description: "Hatchling leadership and mentorship",
    },
    {
      role: "Hatchling Director",
      name: "McKenzie McCain",
      period: "Spring 2026",
      description: "Hatchling leadership and mentorship",
    },
    {
      role: "Hatchling Director",
      name: "Mohid Ismail",
      period: "Spring 2026",
      description: "Hatchling leadership and mentorship",
    },
    {
      role: "Hatchling Director",
      name: "Nathan Mersino",
      period: "Spring 2026",
    },
    { role: "Hatchling Director", name: "Thomas Lopez", period: "Spring 2026" },
    { role: "Hatchling Director", name: "William Shan", period: "Spring 2026" },
    { role: "Hatchling Director", name: "Julia Sopala", period: "Spring 2026" },
    { role: "Hatchling Director", name: "Drew Wheaton", period: "Spring 2026" },
  ];

  const [openSection, setOpenSection] = useState({
    executive: true,
    external: true,
    internal: true,
    projects: true,
    development: true,
  });

  const toggleSection = (section) => {
    setOpenSection((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const renderLeadership = (roles) =>
    currentLeadership
      .filter(
        (l, idx, arr) =>
          roles.includes(l.role) &&
          arr.findIndex((x) => x.role === l.role && x.name === l.name) === idx,
      )
      .map((leader, index) => (
        <div
          key={index}
          className="glass-card p-6 rounded-2xl transition-all duration-300"
        >
          <h3 className="text-lg font-light text-yellow-400 mb-2">
            {leader.role}
          </h3>
          <h4 className="text-base font-light text-gray-200 mb-2">
            {leader.name}
          </h4>
          <p className="text-xs font-light text-gray-400 mb-3">
            {leader.period}
          </p>
        </div>
      ));

  return (
    <div className="min-h-screen">
      {/* Hero Section with Officer Photo Background */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      >
        {/* Officer Photo Background */}
        <img
          src="/assets/GeneralPhotos/OfficerPhoto.webp"
          alt="Officer Group Photo"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-50 z-0"
        />
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/25 dark:bg-black/25 z-0"></div>
        <div className="relative text-center max-w-6xl mx-auto z-10">
          {/* No glass effect */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight text-gray-200 mb-8">
            <span className="block">ABOUT</span>
            <span className="block text-yellow-400">TURTLE</span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl font-light tracking-wide text-white mb-12 max-w-3xl mx-auto">
            TURTLE is a student-led research lab at Texas A&M University,
            pioneering innovative robotics solutions and developing the next
            generation of robotics leaders.
          </p>
          <div className="mb-8">
            <span className="text-lg text-gray-200">Contact us: </span>
            <TextLink to="mailto:turtlerobotics@gmail.com">
              turtlerobotics@gmail.com
            </TextLink>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center mb-20 text-gray-200">
            OUR <span className="text-yellow-400">IMPACT</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <StatisticsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center mb-20 text-gray-200">
            OUR <span className="text-yellow-400">TEAM</span>
          </h2>

          {/* Executive Roles Accordion */}
          <div className="mb-12">
            <button
              onClick={() => toggleSection("executive")}
              className="w-full text-left font-light text-xl text-gray-200 mb-4"
            >
              Executive Roles {openSection.executive ? "▲" : "▼"}
            </button>
            {openSection.executive && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {renderLeadership([
                  "President",
                  "Internal VP",
                  "External VP",
                  "Project VP",
                  "Development VP",
                ])}
              </div>
            )}
          </div>

          {/* Internal Branch Accordion */}
          <div className="mb-12">
            <button
              onClick={() => toggleSection("internal")}
              className="w-full text-left font-light text-xl text-gray-200 mb-4"
            >
              Internal Branch {openSection.internal ? "▲" : "▼"}
            </button>
            {openSection.internal && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {renderLeadership([
                  "Internal VP",
                  "Finance",
                  "Logistics",
                  "Lab Quality Chair",
                  "Documentation",
                ])}
              </div>
            )}
          </div>

          {/* External Branch Accordion */}
          <div className="mb-12">
            <button
              onClick={() => toggleSection("external")}
              className="w-full text-left font-light text-xl text-gray-200 mb-4"
            >
              External Branch {openSection.external ? "▲" : "▼"}
            </button>
            {openSection.external && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {renderLeadership([
                  "External VP",
                  "Public Relations",
                  "Webmaster",
                  "Corporate Relations",
                  "Events",
                ])}
              </div>
            )}
          </div>

          {/* Projects Branch Accordion */}
          <div className="mb-12">
            <button
              onClick={() => toggleSection("projects")}
              className="w-full text-left font-light text-xl text-gray-200 mb-4"
            >
              Projects Branch {openSection.projects ? "▲" : "▼"}
            </button>
            {openSection.projects && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {renderLeadership(["Project VP", "Design Review Chair"])}
              </div>
            )}
          </div>

          {/* Development Branch Accordion */}
          <div className="mb-12">
            <button
              onClick={() => toggleSection("development")}
              className="w-full text-left font-light text-xl text-gray-200 mb-4"
            >
              Development Branch {openSection.development ? "▲" : "▼"}
            </button>
            {openSection.development && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {renderLeadership([
                  "Development VP",
                  "Workshops",
                  "Hatchling Director",
                ])}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
