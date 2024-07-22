import SideBar from '../components/SideBar';
import ThemePicker from '../components/ThemePicker';
import Title from '../components/Title';

const HomePage = () => {
  return (
    <div className="w-screen h-screen bg-dracula-white text-2xl font-global text-dracula-black dark:bg-dracula-black dark:text-dracula-white">
      <SideBar />
      <ThemePicker />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-3/4">
        <Title text={"Hello, Welcome to Terence's website"} delay={200} />
      </div>
    </div>
  );
};

export default HomePage;
