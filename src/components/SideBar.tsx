import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
  // Provides access to the current location
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState<string>(location.pathname);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  // Each time the pathname changes, the useState is updated
  useEffect(() => {
    handlePageChange(location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex flex-col w-40 absolute top-1/2 right-3 text-center -translate-y-1/2">
      <Link
        to="/"
        className={`bg-dracula-purple mb-1.5 rounded-md hover:scale-105 ${
          currentPage === '/'
            ? ''
            : 'bg-opacity-40 text-dracula-black dark:text-dracula-white text-opacity-40 dark:text-opacity-40'
        }`}
        onClick={() => handlePageChange('/')}
      >
        Home page
      </Link>
      <Link
        to="/projects"
        className={`bg-dracula-pink mb-1.5 rounded-md hover:scale-105 ${
          currentPage === '/projects'
            ? ''
            : 'bg-opacity-40 text-dracula-black dark:text-dracula-white text-opacity-40 dark:text-opacity-40'
        }`}
        onClick={() => handlePageChange('/projects')}
      >
        Projects
      </Link>
      <Link
        to="/aboutMe"
        className={`bg-dracula-orange rounded-md hover:scale-105 ${
          currentPage === '/aboutMe'
            ? ''
            : 'bg-opacity-40 text-dracula-black dark:text-dracula-white text-opacity-40 dark:text-opacity-40'
        }`}
        onClick={() => handlePageChange('/aboutMe')}
      >
        About Me
      </Link>
    </div>
  );
};

export default SideBar;
