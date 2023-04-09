import SidebarMobile from './SidebarMobile';
import SidebarDesktop from './SidebarDesktop';
import SidebarTop from './SidebarTop';

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <div className="h-full">
      <SidebarMobile />
      <SidebarDesktop />
      <SidebarTop />
      <main className="lg:pl-20 xl:pl-72 h-full">
        {children}
      </main>
    </div>
  )
}

export default Sidebar;
