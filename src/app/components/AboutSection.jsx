"use client";
import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
      <div className="flex flex-col md:flex-row items-center py-4 px-4 xl:gap-8 sm:py-4 xl:px-8 w-full"> 
        {/* Reduced vertical padding (py-4), and gap (gap-8) */}
        
        {/* Image Section */}
        <div className="flex justify-center md:w-1/2">
          <Image
            src="/images/about-image-1.jpg"
            alt="About Me Image"
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="mt-0 md:mt-0 text-left flex flex-col h-full md:w-1/2 space-y-4"> 
          {/* Removed mt-4 to align the text better with the image, added space-y-4 for better line spacing */}
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-4">About Me</h2>
          <p className="text-base leading-relaxed lg:text-lg lg:leading-relaxed w-full">
            I am a Data Engineering and Analytics Expert with a passion for transforming complex data into actionable insights. With a strong foundation in Data Warehousing, Machine Learning, and Generative AI, I specialize in designing scalable data solutions that empower businesses to make smarter decisions and optimize operations.
          </p>
          <p className="text-base leading-relaxed lg:text-lg lg:leading-relaxed w-full">
            I have extensive experience in building and optimizing ETL pipelines, conducting A/B testing, and delivering high-impact reporting and analysis. My technical toolkit includes Python, SQL, Spark, and NoSQL databases such as MongoDB, Cassandra, Redis, Elasticsearch, and Kafka. I&apos;m also proficient in SSIS integrations and cloud migrations, ensuring smooth data flow and transition across environments.
          </p>
          <p className="text-base leading-relaxed lg:text-lg lg:leading-relaxed w-full">
            I leverage cloud platforms such as AWS, Azure, and GCP to create efficient, real-time data architectures.
          </p>
          
          {/* List Section */}
          <ul className="list-disc pl-6 mt-2">
            <li>
              <strong>Data Warehousing</strong>: Designing robust data architectures and implementing high-performance storage solutions.
            </li>
            <li>
              <strong>Data Engineering</strong>: Developing seamless ETL workflows and automating processes across platforms.
            </li>
            <li>
              <strong>Machine Learning & AI</strong>: Implementing ML models and leveraging Generative AI for business impact.
            </li>
            <li>
              <strong>Cloud Expertise</strong>: AWS (Redshift, Glue), Azure (Synapse, Data Factory), and GCP for advanced cloud data pipelines.
            </li>
            <li>
              <strong>Data Visualization</strong>: Expertise in Tableau, Power BI, and Looker for creating actionable business dashboards.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
