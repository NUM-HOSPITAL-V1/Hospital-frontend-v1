import React from "react";
import Menuitems from "./MenuItems";
import { usePathname } from "next/navigation";
import { Box, List, Typography } from "@mui/material";
import NavItem from "./NavItem";
import NavGroup from "./NavGroup/NavGroup";
import { useAuth } from "../../context/authContext";

/**
 * SidebarItems component to display navigation menu based on user role
 */
const SidebarItems = ({ toggleMobileSidebar }) => {
  const pathname = usePathname();
  const pathDirect = pathname;
  const { user } = useAuth();

  // Get menu items filtered by user role
  const menuData = Menuitems(user) || [];

  console.log("User data in SidebarItems:", user);



  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className="sidebarNav" component="div">
        {menuData.map((item) =>
          item.navlabel ? (
            <NavGroup item={item} key={item.subheader} />
          ) : (
            <NavItem
              item={item}
              key={item.id}
              pathDirect={pathDirect}
              onClick={toggleMobileSidebar}
            />
          )
        )}
      </List>
    </Box>
  );
};

export default SidebarItems;