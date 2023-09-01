import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="flex flex-col w-40 relative top-1/3 text-center ">
      <Link to="/" className="bg-dracula-purple mb-1 ml-3 rounded-md">
        Home page
      </Link>
      <Link to="/projects" className="bg-dracula-pink mb-1 ml-3 rounded-md">
        Projects
      </Link>
      <Link to="/aboutMe" className="bg-dracula-orange ml-3 rounded-md">
        About Me
      </Link>
    </div>
  );
}

export default SideBar;
