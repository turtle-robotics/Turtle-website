/**
 * About Page Component
 *
 * Comprehensive information about TURTLE Robotics including:
 * - Mission and vision statements
 * - Impact statistics with animated counters
 * - Current leadership team (Executive and Officer roles other than project leads)
 * - Past execs, treasurers, and faculty advisors
 * - Sponsor acknowledgments
 */
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import StatisticsCard from "../components/StatisticsCard";
import SponsorTicker from "../components/SponsorTicker";

const About = () => {
  const heroRef = useRef(null);

  /**
   * Hero section entrance animations
   * Animates title and subtitle on page load
   */
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Animate title words
    gsap.fromTo(
      hero.querySelectorAll("h1 span"),
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out" },
    );

    // Animate subtitle
    gsap.fromTo(
      hero.querySelector(".hero-subtitle"),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.8, ease: "power3.out" },
    );
  }, []);

  const statistics = [
    {
      count: 21,
      label: "Advanced Research Projects",
      description: "Cutting-edge robotics initiatives",
    },
    {
      count: 2,
      label: "Competition Teams",
      description: "Robotics competition teams",
    },
    {
      count: 250,
      label: "Student Researchers",
      description: "250+ active researchers",
    },
    {
      count: 200,
      label: "Hatchling Members",
      description: "Development members",
    },
  ];

  const currentLeadership = [
    // Executive roles
    {
      role: "President",
      name: "Sam Woravka",
      period: "Spring 2026",
      description:
        "Leading Turtle Robotics into its next chapter of innovation and growth",
    },
    {
      role: "External Vice President",
      name: "Yousuf Shafiu",
      period: "Fall 2025 - Spring 2026",
      description: "Overseeing external relations and partnerships",
    },
    {
      role: "Internal Vice President",
      name: "Ian Wilhite",
      period: "Fall 2025 - Spring 2026",
      description: "Managing internal operations and team coordination",
    },
    {
      role: "Project Vice President",
      name: "Emily Tredemeyer",
      period: "Spring 2026",
      description: "Leading project development and technical initiatives",
    },
    {
      role: "Development Vice President",
      name: "Kalen Jaroszewski",
      period: "Fall 2025 - Spring 2026",
      description: "Driving innovation and research advancement",
    },

    // External Branch — officers then committee members
    {
      role: "Corporate Relations Officer",
      name: "TBA",
      period: "Fall 2025 - Spring 2026",
      description: "Building and maintaining corporate partnerships",
    },
    {
      role: "Public Relations Officer",
      name: "Isaac Cabello",
      period: "Fall 2025 - Spring 2026",
      description: "Managing club communications and public presence",
    },
    {
      role: "Webmaster",
      name: "Saksham Mohan",
      period: "Fall 2025 - Spring 2026",
      description: "Maintaining and developing the organization's web presence",
    },
    {
      role: "Sponsorship Committee",
      name: "Jacob Fuerst",
      period: "Fall 2025 - Spring 2026",
      description: "Sponsorship strategy and outreach",
    },
    {
      role: "Sponsorship Committee",
      name: "Julia Sopala",
      period: "Fall 2025 - Spring 2026",
      description: "Sponsorship strategy and outreach",
    },
    {
      role: "Sponsorship Committee",
      name: "Preston Nguyen",
      period: "Fall 2025 - Spring 2026",
      description: "Sponsorship strategy and outreach",
    },
    {
      role: "Sponsorship Committee",
      name: "Om Bhatt",
      period: "Fall 2025 - Spring 2026",
      description: "Sponsorship strategy and outreach",
    },
    {
      role: "Sponsorship Committee",
      name: "William Donaldson",
      period: "Fall 2025 - Spring 2026",
      description: "Sponsorship strategy and outreach",
    },
    {
      role: "Public Relations Committee",
      name: "Alexis Bunta",
      period: "Fall 2025 - Spring 2026",
      description: "Content and media support",
    },
    {
      role: "Public Relations Committee",
      name: "Noah Sherman",
      period: "Fall 2025 - Spring 2026",
      description: "Content and media support",
    },
    {
      role: "Public Relations Committee",
      name: "Som Datta",
      period: "Fall 2025 - Spring 2026",
      description: "Content and media support",
    },
    {
      role: "Public Relations Committee",
      name: "Saksham Mohan",
      period: "Fall 2025 - Spring 2026",
      description: "Content and media support",
    },
    {
      role: "Public Relations Committee",
      name: "Wenrui Xu",
      period: "Fall 2025 - Spring 2026",
      description: "Content and media support",
    },
    {
      role: "Public Relations Committee",
      name: "Matthew Elizalde",
      period: "Fall 2025 - Spring 2026",
      description: "Content and media support",
    },
    {
      role: "Public Relations Committee",
      name: "Renee Zhu",
      period: "Fall 2025 - Spring 2026",
      description: "Content and media support",
    },
    {
      role: "Web Development Committee",
      name: "Jackson Marshall",
      period: "Fall 2025 - Spring 2026",
      description: "Full-stack development and site maintenance",
    },
    {
      role: "Web Development Committee",
      name: "Zhengye Chen",
      period: "Fall 2025 - Spring 2026",
      description: "Full-stack development and site maintenance",
    },
    {
      role: "Web Development Committee",
      name: "Yann Deshpande",
      period: "Fall 2025 - Spring 2026",
      description: "Full-stack development and site maintenance",
    },
    {
      role: "Web Development Committee",
      name: "Dhruv Bhambhani",
      period: "Fall 2025 - Spring 2026",
      description: "Full-stack development and site maintenance",
    },

    // Internal Branch — officers then committees
    {
      role: "Documentation Officer",
      name: "Ryo Kato",
      period: "Fall 2025 - Spring 2026",
      description:
        "Applications, membership, knowledge base, and other documentation",
    },
    {
      role: "Finance Officer",
      name: "Eddy Silva",
      period: "Fall 2025 - Spring 2026",
      description: "Financial planning and reimbursements",
    },
    {
      role: "Treasurer",
      name: "Raquel Garcia",
      period: "Fall 2025 - Spring 2026",
      description: "Managing financial operations and budgeting",
    },
    {
      role: "Lab Quality Officer",
      name: "Haider Mahdi",
      period: "Fall 2025 - Spring 2026",
      description: "Safety and quality standards in the lab",
    },
    {
      role: "Lab Quality Committee",
      name: "Caleb Santiago",
      period: "Fall 2025 - Spring 2026",
      description: "Lab quality and safety support",
    },
    {
      role: "Lab Quality Committee",
      name: "Dalys Guajardo",
      period: "Fall 2025 - Spring 2026",
      description: "Lab quality and safety support",
    },
    {
      role: "Lab Quality Committee",
      name: "Mya Tinsay",
      period: "Fall 2025 - Spring 2026",
      description: "Lab quality and safety support",
    },
    {
      role: "Lab Quality Committee",
      name: "Thomas Lopez",
      period: "Fall 2025 - Spring 2026",
      description: "Lab quality and safety support",
    },
    {
      role: "Lab Quality Committee",
      name: "Victor Cardona",
      period: "Fall 2025 - Spring 2026",
      description: "Lab quality and safety support",
    },

    // Projects Branch — officers then committees
    {
      role: "Design Review Co-chair",
      name: "TBD",
      period: "Spring 2026",
      description: "Organizes, schedules, and moderates design reviews",
    },
    {
      role: "Design Review Co-chair",
      name: "TBD",
      period: "Spring 2026",
      description: "Organizes, schedules, and moderates design reviews",
    },
    {
      role: "Design Review Officer",
      name: "Aidan Briggs",
      period: "Fall 2025 - Spring 2026",
      description: "Project design reviews and guidance",
    },
    {
      role: "Design Review Officer",
      name: "Evan Chan",
      period: "Fall 2025 - Spring 2026",
      description: "Project design reviews and guidance",
    },
    {
      role: "Design Review Officer",
      name: "Jonathon Foltyn",
      period: "Fall 2025 - Spring 2026",
      description: "Project design reviews and guidance",
    },
    {
      role: "Design Review Officer",
      name: "Micah Guttman",
      period: "Fall 2025 - Spring 2026",
      description: "Project design reviews and guidance",
    },
    {
      role: "Design Review Officer",
      name: "Will McGarity",
      period: "Fall 2025 - Spring 2026",
      description: "Project design reviews and guidance",
    },

    // Development Branch — officers then directors
    {
      role: "Workshop Officer",
      name: "Vedant Soni",
      period: "Fall 2025 - Spring 2026",
      description: "Workshops and technical training",
    },
    {
      role: "Hatchling Director",
      name: "Alejandro Avila",
      period: "Fall 2025 - Spring 2026",
      description: "Hatchling leadership and mentorship",
    },
    {
      role: "Hatchling Director",
      name: "Ethan Real",
      period: "Fall 2025 - Spring 2026",
      description: "Hatchling leadership and mentorship",
    },
    {
      role: "Hatchling Director",
      name: "Gael Mamenta",
      period: "Fall 2025 - Spring 2026",
      description: "Hatchling leadership and mentorship",
    },
    {
      role: "Hatchling Director",
      name: "Thomas Lopez",
      period: "Fall 2025 - Spring 2026",
      description: "Hatchling leadership and mentorship",
    },
    {
      role: "Hatchling Director",
      name: "Karthik Jayakumar",
      period: "Fall 2025 - Spring 2026",
      description: "Hatchling leadership and mentorship",
    },
    {
      role: "Hatchling Director",
      name: "Mohid Ismail",
      period: "Fall 2025 - Spring 2026",
      description: "Hatchling leadership and mentorship",
    },
    {
      role: "Hatchling Director",
      name: "Nathan Mersino",
      period: "Fall 2025 - Spring 2026",
      description: "Hatchling leadership and mentorship",
    },
    {
      role: "Hatchling Director",
      name: "William Shan",
      period: "Fall 2025 - Spring 2026",
      description: "Hatchling leadership and mentorship",
    },
    {
      role: "Hatchling Director",
      name: "McKenzie McCain",
      period: "Fall 2025 - Spring 2026",
      description: "Hatchling leadership and mentorship",
    },
  ];

  const historicalLeadership = {
    president: [
      "Fall 2013",
      "Fall 2013 - Spring 2015: Kenny Chour",
      "Fall 2015 - Spring 2016: Mark Wager",
      "Fall 2016 - Spring 2017: Sam Terrill",
      "Fall 2017: Josh Vancura*",
      "Spring 2018: Ahmad Jawad",
      "Fall 2018 - Spring 2020: Krishna Vamsi*",
      "Fall 2020 - Spring 2023: Bret Topham",
      "Fall 2023 - Spring 2025: Zachary Bucknor-Smartt*",
      "Fall 2025: Ian Lansdowne",
    ],
    "Internal VP": [
      "Fall 2013",
      "Fall 2013 - Spring 2015: Ivan Cortes",
      "Fall 2015 - Spring 2016: Jim McCabe",
      "Fall 2016 - Spring 2017: Abigail Dowd*",
      "Fall 2017: Ahmad Jawad",
      "Spring 2018: Olawale Salaudeen",
      "Fall 2018: Joanna Steele",
      "Spring 2019 - Spring 2020: Chris Geisheker",
      "Fall 2020 - Spring 2022: Jordan Nunn*",
      "Fall 2022 - Spring 2023: Rishi Jangale*",
      "Fall 2023 - Spring 2024: Brendan Wyatt",
      "Fall 2024 - Spring 2025: Ian Lansdowne",
      "Fall 2025: Ian Wilhite*",
    ],
    "External VP": [
      "Fall 2013",
      "Fall 2013 - Spring 2015: Deepak Dhankani",
      "Fall 2015 - Spring 2016: Nathan Glaser",
      "Fall 2016 - Spring 2017: Josh VanCura*",
      "Fall 2017: Olawale Salaudeen",
      "Spring 2018: Connor Landrum",
      "Fall 2018 - Spring 2019: Praneeth Nagula*",
      "Fall 2019: Adam Armendariz*",
      "Spring 2020 - Spring 2022: Colin Sander*",
      "Fall 2022 - Spring 2023: Amrit Nanda",
      "Fall 2023 - Spring 2025: Ian Farrar*",
    ],
    "Project VP": [
      "Fall 2022: Brendan Wyatt",
      "Fall 2022 - Spring 2023: Brendan Wyatt",
      "Fall 2023 - Spring 2024: Reagan Hoffmann",
      "Fall 2024 - Spring 2025: Willem Bannick*",
      "Fall 2025: Samantha Woravka",
    ],
    "Development VP": ["Fall 2025: Kalen Jaroszewski*"],
    treasurer: [
      "Spring 2013 - Spring 2015: Deepak Dhankani",
      "Fall 2015: Ivan Cortez",
      "Spring 2016 - Spring 2017: Spencer Capps*",
      "Fall 2017 - Spring 2018: Kurtis Davis*",
      "Fall 2018 - Spring 2020: Nicholas Arackal*",
      "Fall 2020 - Spring 2021: Osmani Perez*",
      "Fall 2021 - Spring 2024: Thomas Dawson*",
      "Fall 2024: Raquel Garcia*",
    ],
    "Faculty Advisor": [
      "Fall 2013 - Fall 2014: Aaron Ames",
      "Spring 2015 - Fall 2020: Pilwon Hur",
      "Spring 2021 - Present: Sivakumar Rathinam",
    ],
  };

  const [openSection, setOpenSection] = useState({
    executive: false,
    external: false,
    internal: false,
    projects: false,
    development: false,
    presidentHistory: false,
    internalVPHistory: false,
    externalVPHistory: false,
    projectVPHistory: false,
    developmentVPHistory: false,
    treasurerHistory: false,
    facultyAdvisorHistory: false,
  });

  const toggleSection = (section) => {
    setOpenSection((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const renderLeadership = (roles) =>
    currentLeadership
      .filter((l) => roles.includes(l.role))
      .map((leader, index) => (
        <div
          key={index}
          className="glass-card p-6 rounded-2xl transition-shadow duration-300"
        >
          <h3 className="text-lg font-light text-accent mb-2">{leader.role}</h3>
          <h4 className="text-base font-light text-text mb-2">{leader.name}</h4>
          <p className="text-xs font-normal text-secondary-2 mb-3">
            {leader.period}
          </p>
          <p className="text-xs font-normal text-secondary-2 leading-relaxed">
            {leader.description}
          </p>
        </div>
      ));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4"
      >
        <div className="absolute inset-0 bg-primary-2 opacity-40"></div>
        <div className="relative text-center max-w-6xl mx-auto z-10">
          <div className="glass-card p-16 rounded-3xl">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-secondary-3 mb-8">
              <span className="block">ABOUT</span>
              <span className="block text-primary-1">TURTLE</span>
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl font-normal tracking-wide text-secondary-2 mb-12 max-w-3xl mx-auto">
              Turtle Robotics is a student-led research lab at Texas A&M
              University, pioneering innovative robotics solutions and
              developing the next generation of robotics leaders.
            </p>
          </div>
        </div>
        {/* Project Ticker - positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <SponsorTicker />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-20 text-secondary-3">
            OUR <span className="text-primary-1">IMPACT</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <StatisticsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-20 text-secondary-3">
            OUR <span className="text-primary-1">TEAM</span>
          </h2>

          {/* Executive Roles Accordion */}
          <div className="mb-12">
            <button
              onClick={() => toggleSection("executive")}
              className="w-full text-left font-light text-xl text-text mb-4"
            >
              Executive Roles {openSection.executive ? "▲" : "▼"}
            </button>
            {openSection.executive && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {renderLeadership([
                  "President",
                  "External Vice President",
                  "Internal Vice President",
                  "Project Vice President",
                  "Development Vice President",
                ])}
              </div>
            )}
          </div>

          {/* External Branch Accordion */}
          <div className="mb-12">
            <button
              onClick={() => toggleSection("external")}
              className="w-full text-left font-light text-xl text-text mb-4"
            >
              External Branch {openSection.external ? "▲" : "▼"}
            </button>
            {openSection.external && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {renderLeadership([
                  "Corporate Relations Officer",
                  "Public Relations Officer",
                  "Webmaster",
                  "Sponsorship Committee",
                  "Public Relations Committee",
                  "Web Development Committee",
                ])}
              </div>
            )}
          </div>

          {/* Internal Branch Accordion */}
          <div className="mb-12">
            <button
              onClick={() => toggleSection("internal")}
              className="w-full text-left font-light text-xl text-text mb-4"
            >
              Internal Branch {openSection.internal ? "▲" : "▼"}
            </button>
            {openSection.internal && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {renderLeadership([
                  "Documentation Officer",
                  "Finance Officer",
                  "Treasurer",
                  "Lab Quality Officer",
                  "Lab Quality Committee",
                ])}
              </div>
            )}
          </div>

          {/* Projects Branch Accordion */}
          <div className="mb-12">
            <button
              onClick={() => toggleSection("projects")}
              className="w-full text-left font-light text-xl text-text mb-4"
            >
              Projects Branch {openSection.projects ? "▲" : "▼"}
            </button>
            {openSection.projects && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {renderLeadership([
                  "Design Review Co-chair",
                  "Design Review Officer",
                ])}
              </div>
            )}
          </div>

          {/* Development Branch Accordion */}
          <div className="mb-12">
            <button
              onClick={() => toggleSection("development")}
              className="w-full text-left font-light text-xl text-text mb-4"
            >
              Development Branch {openSection.development ? "▲" : "▼"}
            </button>
            {openSection.development && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {renderLeadership(["Workshop Officer", "Hatchling Director"])}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Historical Leadership Accordion */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-20 text-secondary-3">
            HISTORICAL <span className="text-primary-1">LEADERSHIP</span>
          </h2>
          {Object.entries(historicalLeadership).map(([key, officers]) => (
            <div key={key} className="mb-12">
              <button
                onClick={() => toggleSection(key + "History")}
                className="w-full text-left font-light text-xl text-text mb-4"
              >
                {`Past ${key.charAt(0).toUpperCase() + key.slice(1)}`}{" "}
                {openSection[key + "History"] ? "▲" : "▼"}
              </button>
              {openSection[key + "History"] && (
                <ul className="list-disc ml-6">
                  {officers.map((officer, i) => (
                    <li key={i} className="mb-2">
                      {officer}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <p>* Completed the Hatchling program</p>
      </section>
    </div>
  );
};

export default About;
