import SideBar from "../components/SideBar";
import ThemePicker from "../components/ThemePicker";

const HomePage = () => {
  return (
    <div className="w-screen h-screen bg-dracula-white text-2xl font-global text-dracula-black dark:bg-dracula-black dark:text-dracula-white">
      This is the home page
      <SideBar />
      <ThemePicker />
      <div className="m-auto w-96">
        Hello, Welcome to Tez's website
      </div>
    </div>
  );
}

export default HomePage;
