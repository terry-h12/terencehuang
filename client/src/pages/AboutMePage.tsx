import SideBar from "../components/SideBar";
import ThemePicker from "../components/ThemePicker";

function AboutMePage() {
  return (
    <div className="w-screen h-screen bg-dracula-white text-2xl font-global text-dracula-black dark:bg-dracula-black dark:text-dracula-white">
      This is the home page
      <SideBar />
      <ThemePicker />
    </div>
  );
}

export default AboutMePage;
