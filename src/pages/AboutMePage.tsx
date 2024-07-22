import SideBar from '../components/SideBar';
import ThemePicker from '../components/ThemePicker';
import { LinkedIcon } from '../components/Icons';

const AboutMePage = () => {
  return (
    <div className="w-screen h-screen bg-dracula-white text-2xl font-global text-dracula-black dark:bg-dracula-black dark:text-dracula-white">
      <SideBar />
      <ThemePicker />
      <div className="w-96 absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
        My name is Terence Huang, a computer science student at UNSW.
        <br />
        When I'm not on the computer, I'm probably eating or playing oztag
        <div className="flex">
          {/* put the icon sizee and links as constants */}
          {/* might want to display email */}
          <LinkedIcon iconType="email" link="mailto:terencehuang12@outlook.com" icon_size={100} />
          <LinkedIcon iconType="linkedIn" link="https://www.linkedin.com/in/terence-huang-8742981b8/" icon_size={100} />
          <LinkedIcon iconType="gitHub" link="https://github.com/terry-h12" icon_size={100} />
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
