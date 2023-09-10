import { IProject } from '../interfaces/project';
import { LinkedIcon } from './Icons';

interface ChildProps {
  projectDetails: IProject;
}

const Project = (props: ChildProps) => {
  const { projectDetails } = props;
  return (
    <div className="flex flex-col mb-5 text-xl">
      <div className="mb-2">
        {projectDetails.name}{' '}
        {projectDetails.type === 'group' ? (
          <span className="inline-flex items-center rounded-md bg-dracula-green px-2 py-1 text-xs font-medium ring-1 ring-inset ring-green-600/20 text-dracula-black dark:text-dracula-white bg-opacity-90">
            Group
          </span>
        ) : (
          <span className="inline-flex items-center rounded-md bg-dracula-cyan px-2 py-1 text-xs font-medium ring-1 ring-inset ring-blue-700/10 text-dracula-black dark:text-dracula-white bg-opacity-90">
            Personal
          </span>
        )}
      </div>
      <div className="flex space-x-10 > * w-max border dark:border-white p-3 rounded-lg border-black">
        <LinkedIcon iconType="gitHub" link={projectDetails.gitHubRepo} icon_size={40} />
        <LinkedIcon iconType="backend" link={projectDetails.backendRepo} icon_size={40} />
        <LinkedIcon iconType="website" link={projectDetails.website} icon_size={40} />
        <LinkedIcon iconType="devpost" link={projectDetails.devpost} icon_size={40} />
      </div>
    </div>
  );
};

export default Project;
