import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="flex flex-col w-32">
      <Link to="/" className="bg-dracula-purple">
        AboutMe
      </Link>
      <Link to="/projects" className="bg-dracula-pink">
        Projects
      </Link>
      <Link to="/info" className="bg-dracula-orange">
        Info
      </Link>
    </div>
  );
}

export default SideBar;
