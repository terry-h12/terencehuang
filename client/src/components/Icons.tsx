import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export {DarkModeIcon, LightModeIcon, EmailIcon, LinkedInIcon, GitHubIcon};

const iconMap: Record<string, any> = {
  linkedIn: LinkedInIcon,
  gitHub: GitHubIcon,
  email: EmailIcon,
}

interface LinkedIconProps {
  iconType: string,
  link: string,
}

export const LinkedIcon = ({ iconType, link }: LinkedIconProps) => {
  const IconCompnent = iconMap[iconType];
  if (!IconCompnent) return null;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <IconCompnent />
    </a>
  );
}