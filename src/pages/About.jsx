import { useState } from "react";
import StatisticsCard from "../components/StatisticsCard";
import Hero from "../components/Hero";
import PageSection from "../components/PageSection";

const About = () => {
  const statistics = [
    { count: 21, label: "Advanced Research Projects" },
    { count: 2, label: "Competition Teams" },
    { count: 250, label: "Student Researchers" },
    { count: 110, label: "Hatchling Members" },
  ];

  const leadershipCategories = {
    executive: {
      title: "Executive Roles",
      leaders: [
        { role: "President", name: "Kalen Jaroszewski" },
        { role: "Internal VP", name: "Ryo Kato" },
        { role: "External VP", name: "Renee Zhu" },
        { role: "Project VP", name: "Emily Tredemeyer" },
        { role: "Development VP", name: "Julia Sopala" },
      ],
    },

    internal: {
      title: "Internal Branch",
      leaders: [
        { role: "Internal VP", name: "Ryo Kato" },
        { role: "Operations Officer", name: "Justin Simms" },
        { role: "Lab Quality Chair", name: "Rishabh Sadekar" },
        { role: "Lab Quality Chair", name: "Haider Mahdi" },
        { role: "Finance Officer", name: "Eddy Silva" },
        { role: "Finance Officer", name: "Thomas Tran" },
        { role: "Finance Officer", name: "Edmond Lam" },
      ],
    },

    external: {
      title: "External Branch",
      leaders: [
        { role: "External VP", name: "Renee Zhu" },
        { role: "Corporate Relations Chair", name: "Will Donaldson" },
        { role: "PR Chair", name: "Allison Martinez" },
        { role: "Webmaster", name: "Micah Guttman" },
      ],
    },

    projects: {
      title: "Projects Branch",
      leaders: [
        { role: "Project VP", name: "Emily Tredemeyer" },
        { role: "Design Review Chair", name: "Will McGarity" },
        { role: "Design Review Chair", name: "Chris Ambroziak" },

        { role: "Project Lead — ACHE", name: "Jacob Fuerst" },
        { role: "Project Lead — AMPS", name: "Rishabh Sadekar" },
        { role: "Project Lead — ANKL", name: "Vincent Hoefler" },
        { role: "Project Lead — BLNC", name: "Jonathon Foltyn" },
        { role: "Project Lead — CMBT", name: "Kian Dunkin" },
        { role: "Project Lead — CNTR", name: "Jack Bluethmann" },
        { role: "Project Lead — DIRT", name: "Anagha Dharmavaram" },
        { role: "Project Lead — DRON", name: "Chris Ambroziak" },
        { role: "Project Lead — FASH", name: "Aarathi Devakumar" },
        { role: "Project Lead — GERM", name: "Jordan Durst" },
        { role: "Project Lead — MAZE", name: "David Boosi" },
        { role: "Project Lead — OLSN", name: "Will McGarity" },
        { role: "Project Lead — ORIO", name: "Dalys Guajardo" },
        { role: "Project Lead — POBS", name: "Isaac Cabello" },
        { role: "Project Lead — PRNT", name: "Andrew McBride" },
        { role: "Project Lead — SHDR", name: "Renee Zhu" },
        { role: "Project Lead — SNOUT", name: "Anirudh Submaranian" },
        { role: "Project Lead — SWRM", name: "Bennett Moorman" },
        { role: "Project Lead — VIRT", name: "Justin Simms" },
      ],
    },

    development: {
      title: "Development Branch",
      leaders: [
        { role: "Development VP", name: "Julia Sopala" },
        { role: "Hatchling Chair", name: "Isaac Cabello" },
        { role: "Mechanical Incubator Chair", name: "Drew Wheaton" },
        { role: "Software Incubator Chair", name: "Kaleb Harris" },
        { role: "Workshop Director", name: "Som Datta" },
        { role: "Product Manager", name: "McKenzie McCain" },

        { role: "Hatchling Director", name: "William Shan" },
        { role: "Hatchling Director", name: "Lorenzo Hidalgo" },
        { role: "Hatchling Director", name: "Andrew Sun" },
        { role: "Hatchling Director", name: "Mohid Ismail" },
        { role: "Hatchling Director", name: "Kayla Sam" },
        { role: "Hatchling Director", name: "John Neal" },
        { role: "Hatchling Director", name: "Thomas Lopez" },
        { role: "Hatchling Director", name: "Karthik Jayakumar" },
        { role: "Hatchling Director", name: "Ethan Real" },
        { role: "Hatchling Director", name: "Nathan Mersino" },
        { role: "Hatchling Director", name: "Khanhathan Vo" },
        { role: "Hatchling Director", name: "Grace Wang" },
        { role: "Hatchling Director", name: "Santiago Yordi" },
      ],
    },
  };

  const renderLeadership = (leaders) =>
    leaders.map((leader) => (
      <div
        key={`${leader.role}-${leader.name}`}
        className="glass-card p-6 rounded-2xl transition-all duration-300"
      >
        <h3 className="text-lg font-light text-yellow-400 mb-2">
          {leader.role}
        </h3>

        <h4 className="text-base font-light text-gray-200">{leader.name}</h4>
      </div>
    ));

  return (
    <div className="min-h-screen">
      <Hero
        heading="ABOUT TURTLE"
        backgroundImage="/assets/GeneralPhotos/OfficerPhoto.webp"
        backgroundAltText="Officer Group Photo"
        subheading="TURTLE is a student-led research lab at Texas A&M University, pioneering innovative robotics solutions and developing the next generation of robotics leaders."
      />

      <PageSection heading="OUR IMPACT" colorVariant="B">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat) => (
            <StatisticsCard key={stat.label} {...stat} />
          ))}
        </div>
      </PageSection>

      <PageSection heading="OUR TEAM" colorVariant="A">
        {Object.entries(leadershipCategories).map(([categoryKey, category]) => (
          <div key={categoryKey} className="mb-12">
            <h2 class="w-full text-left font-light text-xl text-gray-200 mb-4">
              {category.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {renderLeadership(category.leaders)}
            </div>
          </div>
        ))}
      </PageSection>
    </div>
  );
};

export default About;
