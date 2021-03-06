import Footer from "./Footer";
import Profile from "./profile";
import MenuItem from "./MenuItem";

interface SideBarProps {
 activeMenu: "overview" | "transactions" | "settings";
}

export default function SideBar(props: SideBarProps) {
 const { activeMenu } = props;
 return (
  <section className="sidebar">
   <div className="content pt-50 pb-30 ps-30">
    <Profile />
    <div className="menus">
     <MenuItem title="Overview" icon="ic-menu-overview" href="member" active={activeMenu === "overview"} />
     <MenuItem title="Transactions" icon="ic-menu-transactions" href="member/transactions" active={activeMenu === "transactions"} />
     <MenuItem title="Messages" icon="ic-menu-messages" href="member" />
     <MenuItem title="Card" icon="ic-menu-card" href="member" />
     <MenuItem title="Redwards" icon="ic-menu-redwards" href="member" />
     <MenuItem title="Settings" icon="ic-menu-settings" href="member/edit-profile" active={activeMenu === "settings"} />
     <MenuItem title="Log Out" icon="ic-menu-logout" href="member" />
    </div>
    <Footer />
   </div>
  </section>
 );
}
