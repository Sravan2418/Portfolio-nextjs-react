"use client";
import React from "react";
import { SiPython, SiR, SiMysql, SiPostgresql, SiMongodb, SiKibana,SiFlask,SiGooglecloud,SiRedis, SiMicrosoftazure,SiTableau, SiApachehadoop,SiApacheairflow,SiPowerbi, SiNeo4J, SiGraphql, SiKubernetes,SiVisualstudiocode,SiElasticsearch, SiJira, SiOracle,SiCplusplus, SiCsharp, SiApachecassandra,SiApachekafka,SiHtml5, SiCss3 } from "react-icons/si";
import { FaCloud, FaDatabase, FaCode, FaAws } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { IoIosCloudDownload } from "react-icons/io";

// Define sections with icons and skill names
const skillsData = [
  {
    category: "Programming",
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "R", icon: <SiR /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "C#", icon: <SiCsharp /> },
      { name: "SQL", icon: <SiMysql /> },
      { name: "Unix", icon: <FaCode /> },
      { name: "Golang", icon: <FaGolang /> }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Redis", icon: <SiRedis /> },
      { name: "Cassandra", icon: <SiApachecassandra /> },
      { name: "Oracle", icon: <SiOracle /> },
      { name: "SQL Server", icon: <FaDatabase /> },
      { name: "Neo4J", icon: <SiNeo4J /> }
    ]
  },
  {
    category: "Visualization",
    skills: [
      { name: "Tableau", icon: <SiTableau /> },
      { name: "Power BI", icon: <SiPowerbi /> },
      { name: "Looker", icon: <FaDatabase /> },
      { name: "Elasticsearch", icon: <SiElasticsearch /> },
      { name: "Kibana", icon: <SiKibana /> }
    ]
  },
  {
    category: "Cloud",
    skills: [
      { name: "AWS", icon: <FaAws /> },
      { name: "Azure", icon: <SiMicrosoftazure /> },
      { name: "GCP", icon: <SiGooglecloud /> },
      { name: "Kubernetes", icon: <SiKubernetes /> }
    ]
  },
  {
    category: "Big Data",
    skills: [
      { name: "Hadoop", icon: <SiApachehadoop /> },
      { name: "Kafka", icon: <SiApachekafka /> },
      { name: "GraphQL", icon: <SiGraphql /> },
      { name: "Airflow", icon: <SiApacheairflow /> }
    ]
  },
  {
    category: "Other Tools & Testing",
    skills: [
      { name: "JIRA", icon: <SiJira /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "RestAPI", icon: <IoIosCloudDownload /> },
      { name: "CI/CD", icon: <FaCloud /> },
      { name: "A/B Testing", icon: <FaCode /> },
      { name: "Visual Studio Code", icon: <SiVisualstudiocode /> }
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-12">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-8"> {/* Add flex-wrap and center alignment */}
        {skillsData.map((category, index) => (
          <div key={index} className="flex flex-col items-center bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl text-purple-500 mb-4">{category.category}</h3>
            <div className="grid grid-cols-2 gap-4"> {/* Use grid for skills */}
              {category.skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-xl text-white">{skill.icon}</span>
                  <span className="text-white">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
