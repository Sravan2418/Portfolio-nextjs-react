import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {
  SiMysql,
  SiDbt,
  SiSnowflake,
  SiAzuredevops,
  SiMinio,
  SiPowerbi,
  SiTableau,
  SiPython,
  SiDocker,
  SiMongodb,
  SiApachespark,
  SiNumpy,
  SiApachecassandra,
  SiElasticsearch,
  SiNeo4J,
  SiKibana,
} from "react-icons/si";
import { FaFileExcel } from "react-icons/fa";
import { DiSpark } from "react-icons/di";
import { TbSql } from "react-icons/tb";

// Tech stack icons mapping
const techIcons = {
  SQL: <SiMysql />,
  DBT: <SiDbt />,
  Snowflake: <SiSnowflake />,
  "Azure Blob Storage": <SiAzuredevops />,
  "Minio S3": <SiMinio />,
  "Power BI": <SiPowerbi />,
  Tableau: <SiTableau />,
  Python: <SiPython />,
  Docker: <SiDocker />,
  MySQL: <SiMysql />,
  MongoDB: <SiMongodb />,
  Spark: <SiApachespark />,
  NumPy: <SiNumpy />,
  Excel: <FaFileExcel />,
  PySpark: <DiSpark />,
  "Apache Cassandra": <SiApachecassandra />,
  Elasticsearch: <SiElasticsearch />,
  Neo4j:<SiNeo4J />,
  Kibana:<SiKibana />,
};

const ProjectCard = ({ imgUrl, title, gitUrl, previewUrl, techStack }) => {
  return (
    <div className="relative w-full md:w-[400px] group">
      {/* Glowing effect behind the entire card */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>

      <div className="relative z-10">
        <div className="h-[300px] md:h-[300px] rounded-t-xl relative group">
          <div
            className="h-full rounded-t-xl relative group"
            style={{
              background: `url(${imgUrl}) no-repeat center center`,
              backgroundSize: 'contain', // Changed to 'contain' to fit the entire image
              backgroundPosition: 'center', // Center the image
            }}
          >
            <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
              <Link
                href={gitUrl}
                className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              >
                <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
              </Link>
              <Link
                href={previewUrl}
                className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              >
                <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
              </Link>
            </div>
          </div>
        </div>

        {/* Card Text */}
        <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>

          {/* Tech Stack Icons */}
          <div className="flex space-x-2 mt-2">
            {techStack?.map((tech, index) => (
              // Only display the icon if it exists in the techIcons object
              techIcons[tech] && (
                <div key={index} className="h-6 w-6 text-white">
                  {techIcons[tech]}
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
