import Project from "../components/Project";
import SideBar from "../components/SideBar";
import ThemePicker from "../components/ThemePicker";
import { brain_games, database_management, philanthropy_platform, project_portfolio, timetable_app } from "../constants/projects";

const ProjectPage = () => {
  return (
    <div className="w-screen h-screen bg-dracula-white text-2xl font-global text-dracula-black dark:bg-dracula-black dark:text-dracula-white">
      <SideBar />
      <ThemePicker />
      <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3"> 
        <Project projectDetails={philanthropy_platform} />
        <Project projectDetails={timetable_app} />
        <Project projectDetails={project_portfolio} />
        <Project projectDetails={brain_games} />
        <Project projectDetails={database_management} />
      </div>
    </div>
  );
}

export default ProjectPage;
