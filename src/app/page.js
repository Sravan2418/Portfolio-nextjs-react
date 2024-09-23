import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Education from "./components/education";
import WorkExperience from "./components/WorkExperience";
import SkillsSection from "./components/Skillssection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <div className="mt-16"> {/* Adjusted margin-top */}
          <AboutSection />
        </div>
        <div className="mt-20"> {/* Adjusted margin-top */}
          <SkillsSection />
        </div>
        <div className="mt-20"> {/* Adjusted margin-top */}
          <Education />
        </div>
        <div className="mt-20"> {/* Adjusted margin-top */}
          <WorkExperience />
        </div>
        <div className="mt-20"> {/* Adjusted margin-top */}
          <ProjectsSection />
        </div>
        <div className="mt-20"> {/* Adjusted margin-top */}
          <EmailSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}

