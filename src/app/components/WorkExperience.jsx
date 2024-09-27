"use client";
import React from "react";
import { FaBriefcase } from "react-icons/fa"; // Import the briefcase icon

const experiences = [
  {
    title: "Application Development Analyst",
    company: "Accenture, Hyderabad, India",
    duration: "Sep 2019 – Dec 2021",
    description: [
      "Developed ETL pipelines using Azure Synapse Analytics, Azure Data Factory, and Databricks for AT&T, enhancing KPI tracking and boosting processing efficiency by 30%.",
      "Integrated Azure Synapse, Data Factory, and Databricks to improve ETL processes, increasing data integrity and supporting in-depth analysis of Customer Satisfaction and Risk Management metrics.",
      "Leveraged Azure Databricks, Spark, and Kubernetes for data transformations and microservices deployment, enhancing reporting precision by 30% and improving data processing performance.",
      "Optimized CI/CD pipelines on Azure with DevOps and GitHub Actions, achieving 40% faster deployments and enhancing project execution success rates.",
      "Developed and optimized ETL pipelines using Azure Synapse Analytics and Azure Data Factory, enhancing data processing efficiency by 30% through consolidation of diverse payment sources.",
      "Created and maintained complex Power BI reports using DAX for advanced calculations, providing real-time insights to stakeholders and vendors, boosting strategic decision-making in payment processing by 40%.",
      "Conducted comprehensive data research and analysis, managing large payment datasets with SQL to extract actionable insights, improving decision-making processes by 25%.",
      "Implemented data modeling standards and best practices in Azure SQL Database and data warehousing, ensuring consistency and accuracy across platforms, leading to a 25% improvement in data reliability.",
      "Wrote and optimized SQL queries to manage data flows, reduce report generation times by 35%, and enhance data governance, accuracy, and usability.",
      "Collaborated with IT managers and ut1ilized workflow management tools to develop tailored data environments, reduce error resolution time by 35%, and support cross-functional teams in payment operations.",
      "Achieved a 15% reduction in customer churn by developing and deploying machine learning models using PyTorch, TensorFlow, and scikit-learn, enhancing risk management strategies and customer retention for AT&T.",
      "Streamlined operational efficiency by 20% through the development and optimization of ETL pipelines using Azure Data Factory and Azure Synapse Analytics, automating workflows and data integration for AT&T.",
      "Designed and implemented a server-identification chatbot using Python and Unix, automating the retrieval of transaction details from multiple servers based on transaction IDs, saving 4 hours per day and improving operational efficiency for AT&T.",
      "Integrated machine learning models with ETL pipelines on Azure Machine Learning and Azure SQL, increasing model prediction accuracy by 15%, supporting AT&T’s strategic retention initiatives.",
      "Deployed scalable CI/CD pipelines using MLFlow, Azure DevOps, and Kubernetes, optimizing model deployment, monitoring, and scalability for production models.",

    ],
    techStack: "Python, PyTorch, TensorFlow, scikit-learn, Azure Data Factory, Azure Synapse Analytics, Azure Machine Learning, Azure SQL, MLFlow, Azure DevOps, Kubernetes, Unix, ETL Pipelines, CI/CD, Feature Engineering, Azure Data Factory, Databricks, Power BI, DAX, SQL, Kubernetes, GitHub Actions,  Workflow Management Tools",
  },
  {
    title: "Research Assistant",
    company: "Syracuse University, Syracuse",
    duration: "Jan 2023 – May 2023",
    description: [
      "Designed and implemented a scalable data warehouse using AWS S3, AWS Glue, Amazon Redshift, and Python, improving data processing efficiency by 45% and query performance by 35%.",
      "Automated ETL workflows with AWS Lambda and SQL, reducing manual intervention by 55%.",
      "Developed interactive dashboards with Amazon QuickSight and Python to visualize key metrics, enhancing reporting efficiency by 40%.",
    ],
    techStack: "AWS S3, AWS Glue, Amazon Redshift, SQL, Python, AWS Lambda, Amazon QuickSight, APIs",
  },
  {
    title: "Data Scientist",
    company: "Syracuse University, Syracuse",
    duration: "Jun 2024 – Present",
    description: [
      "Developed and deployed a Q&A chatbot using Python, Streamlit, and Amazon Titan for embeddings, which improved answer relevance by 40% and reduced response times by 35%.",
      "Leveraged Amazon Bedrock for LLMs and RAG systems to enhance the chatbot’s performance, significantly boosting user satisfaction by 35%.",
      "Documented Python environments to streamline setup processes, increasing efficiency by 40% and reducing deployment time by 30%.",
    ],
    techStack: "Python, NLP, Streamlit, Amazon Titan, Amazon Bedrock, AWS, LLM, RAG",
  },
];

const WorkExperience = () => {
  return (
    <section id="work-experience" className="text-white py-8">
      <h2 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mt-4 mb-8 md:mb-12">
        Work Experience
      </h2>

      <div className="relative">
        {/* Vertical Timeline */}
        <div className="absolute left-4 top-0 h-full border-l-2 border-gray-700"></div>

        {/* Dynamic Cards with Briefcase Icon */}
        <div className="space-y-16">
          {experiences.map((experience, index) => (
            <div key={index} className="relative pl-16">
              {/* Icon at each timeline point */}
              <div className="absolute -left-4 top-0 flex items-center justify-center w-10 h-10 bg-pink-500 rounded-full">
                <FaBriefcase className="text-white" />
              </div>

              {/* Experience Card */}
              <div className="p-6 bg-[#1e1e1e] rounded-lg hover:shadow-xl hover:shadow-pink-500 transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-white mb-1">{experience.title}</h3>
                <p className="text-lg text-gray-400 mb-1">{experience.company}</p>
                <p className="text-md text-gray-500 mb-2">{experience.duration}</p>
                <ul className="list-disc ml-6 mb-4 text-gray-300 space-y-2">
                  {experience.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500">
                  <strong>Tech Stack:</strong> {experience.techStack}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;




