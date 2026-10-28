"use client";

import { Box } from "@mui/material";
import { useState } from "react";
import { BottomNav, Footer, NavBar, SideNav } from "@/components/layout";
import {
  NAVBAR_HEIGHT,
  BOTTOM_NAV_HEIGHT,
  SIDENAV_COLLAPSED_WIDTH,
  SIDENAV_EXPANDED_WIDTH,
} from "@/constants";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isSideNavExpanded, setIsSideNavExpanded] = useState<boolean>(false);

  return (
    <>
      <NavBar />
      <SideNav
        isExpanded={isSideNavExpanded}
        setIsExpanded={setIsSideNavExpanded}
      />
      <Box
        sx={{
          pt: `${NAVBAR_HEIGHT}px`,
          pb: {
            xs: `${BOTTOM_NAV_HEIGHT}px`,
            sm: `${BOTTOM_NAV_HEIGHT}px`,
            md: 0,
            lg: 0,
          },
          ml: {
            xs: 0,
            sm: 0,
            md: isSideNavExpanded
              ? `${SIDENAV_EXPANDED_WIDTH}px`
              : `${SIDENAV_COLLAPSED_WIDTH}px`,
            lg: isSideNavExpanded
              ? `${SIDENAV_EXPANDED_WIDTH}px`
              : `${SIDENAV_COLLAPSED_WIDTH}px`,
          },
          width: {
            xs: "100%",
            sm: "100%",
            md: isSideNavExpanded
              ? `calc(100% - ${SIDENAV_EXPANDED_WIDTH}px)`
              : `calc(100% - ${SIDENAV_COLLAPSED_WIDTH}px)`,
            lg: isSideNavExpanded
              ? `calc(100% - ${SIDENAV_EXPANDED_WIDTH}px)`
              : `calc(100% - ${SIDENAV_COLLAPSED_WIDTH}px)`,
          },
          transition: "all 0.3s ease-in-out",
        }}
      >
        {children}
        <Footer />
      </Box>
      <BottomNav />

    </>
  );
}
