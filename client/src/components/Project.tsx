import { IProject } from "../interfaces/project";
// import { LinkedIcon } from "./Icons";

interface ChildProps {
  projectDetails: IProject;
}

const Project = (props: ChildProps) => {
  const { projectDetails } = props;
  return (
    <div className="m-auto w-96">
      <p>Website: {projectDetails.website}</p>
      {/* <LinkedIcon /> */}
      <p>GitHub: {projectDetails.gitHubRepo}</p>
      <p>Backend: {projectDetails.backendRepo}</p>
      <p>Devpost: {projectDetails.devpost}</p>
      {/* <p>Frontend: {projectDetails.website}</p> */}
      
    </div>
  );
}

export default Project;