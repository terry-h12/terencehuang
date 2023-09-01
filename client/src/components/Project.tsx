import { IProject } from "../interfaces/project";
import { LinkedIcon } from "./Icons";

interface ChildProps {
  projectDetails: IProject;
}

const Project = (props: ChildProps) => {
  const { projectDetails } = props;
  return (
    <div className="flex flex-col mb-5 text-xl ml-40%">
      <div className="mb-2">
        {projectDetails.name} | {projectDetails.type}
      </div>
      <div className="flex space-x-10 > * w-max border border-white p-3 rounded-lg">
        <LinkedIcon iconType="gitHub" link={projectDetails.gitHubRepo}/>
        <LinkedIcon iconType="backend" link={projectDetails.backendRepo}/>
        <LinkedIcon iconType="website" link={projectDetails.website}/>
        <LinkedIcon iconType="devpost" link={projectDetails.devpost}/>
      </div>
    </div>
  );
}

export default Project;