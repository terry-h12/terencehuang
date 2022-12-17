import ThemePicker from "../components/ThemePicker";

function HomePage() {
  return (
    <div className="w-screen h-screen bg-dracula-white text-2xl font-global text-dracula-black dark:bg-dracula-black dark:text-dracula-white">
      This is the home page
      <ThemePicker />
    </div>
  );
}

export default HomePage;
