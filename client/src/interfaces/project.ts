export interface IProject {
  website: string;
  gitHubRepo: string;
  backendRepo: string | null;
  devpost: string | null;
  // frontendRepo: string | null;
  
  // singleRepo: string | null;
  type: "personal" | "group";
}