import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="flex flex-col w-32">
      <Link to="/" className="bg-dracula-purple">
        Home page
      </Link>
      <Link to="/projects" className="bg-dracula-pink">
        Projects
      </Link>
      <Link to="/aboutMe" className="bg-dracula-orange">
        About Me
      </Link>
    </div>
  );
}

export default SideBar;
