import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import Tooltip from '@mui/material/Tooltip';

export { DarkModeIcon, LightModeIcon, EmailIcon, LinkedInIcon, GitHubIcon };

const iconMap: Record<string, any> = {
  linkedIn: LinkedInIcon,
  gitHub: GitHubIcon,
  email: EmailIcon,
  website: WebIcon,
  backend: StorageIcon,
  devpost: LogoDevIcon,
};

interface LinkedIconProps {
  iconType: string;
  link: string | null;
  icon_size: number;
}

export const LinkedIcon = ({ iconType, link, icon_size }: LinkedIconProps) => {
  if (!link) return null;
  const IconCompnent = iconMap[iconType];
  if (!IconCompnent) return null;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Tooltip title={iconType}>
        <div className="hover:scale-110">
          <IconCompnent style={{ fontSize: icon_size }} />
        </div>
      </Tooltip>
    </a>
  );
};
