import React from "react";
import DashboardNavBar1 from "@/app/components/nav-bar";
import { AppName } from "@/app/components/app-name";
import AppLogo from "@/app/components/app-logo";

function NavBarSection() {
  return (
    <div>
      <DashboardNavBar1
        leftSection={
          <div className="flex items-center gap-2">
            <AppLogo />
            <AppName />
          </div>
        }
      />
    </div>
  );
}
export default NavBarSection;
