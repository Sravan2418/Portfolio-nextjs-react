"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

// Define the project data including tech stacks
const projectsData = [
  {
    id: 1,
    title: "DataWarehouse and BI Reporting for Publisher Company",
    description: "Project 1 description",
    image: "/images/projects/1.webp",
    tag: ["All", "Data Engineering", "Analytics"],
    gitUrl:
      "https://github.com/Sravan2418/Data-Warehouse-and-BI-Reporting-for-Publisher-Company",
    previewUrl:
      "https://drive.google.com/drive/folders/1NMcYtp9P5y-VJtNbupx_ai0lT7w49mFv?usp=sharing",
    techStack: ["SQL","DBT","Snowflake","Azure Blob Storage","Minio S3","Power BI",],
  },
  {
    id: 2,
    title: "Real Time Lacrosse Game Analytics",
    description: "Project 2 description",
    image: "/images/projects/2.webp",
    tag: ["All", "Data Engineering", "Analytics"],
    gitUrl: "https://github.com/Sravan2418/Real-Time-Lacrosse-Game-Analytics",
    previewUrl: "#",
    techStack: ["Python", "MySQL", "MongoDB", "Spark", "Minio", "Docker"],
  },
  {
    id: 3,
    title: "Car Sales Insights Using PowerBI",
    description: "Project 3 description",
    image: "/images/projects/3.webp",
    tag: ["All", "Analytics"],
    gitUrl: "https://github.com/Sravan2418/Car-Sales-Insights-Using-PowerBI",
    previewUrl:
      "https://app.powerbi.com/reportEmbed?reportId=e5e61871-92c0-43bd-9aa7-7095d11b2a89&autoAuth=true&ctid=4278a402-1a9e-4eb9-8414-ffb55a5fcf1e",
    techStack: ["Power BI","Azure Data Lake Storage Gen2","Power Query","Excel"],
  },
  {
    id: 4,
    title: "Electric Vehicle Data Analysis Project Using Tableau",
    description: "Project 4 description",
    image: "/images/projects/4.webp",
    tag: ["All", "Analytics"],
    gitUrl:
      "https://github.com/Sravan2418/Electric-Vehicle--Data-Analysis-Project-using-Tableau",
    previewUrl:
      "https://public.tableau.com/app/profile/sravan.kumar.mangalagiri8100/viz/TableauEVDataAnalysis/Dashboard2",
    techStack: ["Tableau", "Snowflake", "GCP", "Excel"],
  },
  {
    id: 5,
    title: "Machine Learning for Drug Discovery in Dopamine Receptors",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.webp",
    tag: ["All", "Machine Learning"],
    gitUrl:
      "https://github.com/Sravan2418/Machine-Learning-for-Drug-Discovery-In-Dopamine-Receptors",
    previewUrl: "https://github.com/Sravan2418/Machine-Learning-for-Drug-Discovery-In-Dopamine-Receptors",
    techStack: ["Python", "Seaborn", "ML", "EDA"],
  },
  {
    id: 6,
    title: "NLP-Powered Chatbot for Breast Cancer Education from Reddit Data",
    description: "Project 6 description",
    image: "/images/projects/6.webp",
    tag: ["All", "Machine Learning"],
    gitUrl:
      "https://github.com/Sravan2418/A-Chatbot-for-Breast-Cancer-Insights",
    previewUrl: "https://github.com/Sravan2418/A-Chatbot-for-Breast-Cancer-Insights",
    techStack: ["Python", "NumPy", "Seaborn", "NLP", "ML"]
  },
  {
    id: 7,
    title: "Student Enrollment Data Pipeline and Analytics Solution",
    description: "Project 7 description",
    image: "/images/projects/7.webp",
    tag: ["All", "Data Engineering","Analytics"],
    gitUrl:
      "https://github.com/Sravan2418/Student-Enrollment-Data-Pipeline-and-Analytics-Solution-/blob/main/Exam.ipynb",
    previewUrl: "https://github.com/Sravan2418/Student-Enrollment-Data-Pipeline-and-Analytics-Solution-/tree/main",
    techStack: ["PySpark", "Apache Cassandra", "Elasticsearch", "Neo4j", "Kibana" , "SQL"]
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Filter projects based on the selected tag
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      {/* Project Tag Buttons */}
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={() => setTag("All")}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={() => setTag("Data Engineering")}
          name="Data Engineering"
          isSelected={tag === "Data Engineering"}
        />
        <ProjectTag
          onClick={() => setTag("Analytics")}
          name="Analytics"
          isSelected={tag === "Analytics"}
        />
        <ProjectTag
          onClick={() => setTag("Machine Learning")}
          name="Machine Learning"
          isSelected={tag === "Machine Learning"}
        />
      </div>

      {/* Projects Grid */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              techStack={project.techStack} // Passing tech stack as prop
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
