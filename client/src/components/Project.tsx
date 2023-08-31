import { IProject } from "../interfaces/project";
import { LinkedIcon } from "./Icons";

interface ChildProps {
  projectDetails: IProject;
}

const Project = (props: ChildProps) => {
  const { projectDetails } = props;
  return (
    <div className="flex flex-col mb-10 text-xl ml-40%">
      {projectDetails.name}
      <div className="space-x-8 > *">
        <LinkedIcon iconType="gitHub" link={projectDetails.gitHubRepo}/>
        <LinkedIcon iconType="backend" link={projectDetails.backendRepo}/>
        <LinkedIcon iconType="website" link={projectDetails.website}/>
        <LinkedIcon iconType="devpost" link={projectDetails.devpost}/>
      </div>
    </div>
  );
}

export default Project;