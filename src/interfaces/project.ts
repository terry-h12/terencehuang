export interface IProject {
  name: string;
  website: string | null;
  gitHubRepo: string;
  backendRepo: string | null;
  devpost: string | null;
  type: 'personal' | 'group';
}
