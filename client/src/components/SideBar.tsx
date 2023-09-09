import { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  /*
    - Have useState which keeps track of current page the user is on
    - Once page is changed, first check the useState and change that button's     opacity
    - Change the useState to new page and opacity
  */
  // const [currentPage, setCurrentPage] = useState<string>("Home");


  return (
    <div className="flex flex-col w-40 absolute top-1/2 left-3 text-center -translate-y-1/2">
      <Link to="/" className="bg-dracula-purple mb-1 rounded-md">
        Home page
      </Link>
      <Link to="/projects" className="bg-dracula-pink mb-1 rounded-md bg-opacity-50">
        Projects
      </Link>
      <Link to="/aboutMe" className="bg-dracula-orange rounded-md bg-opacity-50">
        About Me
      </Link>
    </div>
  );
}

export default SideBar;
