import SideBar from '../components/SideBar'
import ThemePicker from '../components/ThemePicker'

function InfoPage() {
  return (
    <div className="w-screen h-screen bg-dracula-white text-2xl font-global text-dracula-black dark:bg-dracula-black dark:text-dracula-white">
      Info Page
      <SideBar />
      <ThemePicker />
    </div>
  )
}

export default InfoPage