"use client";

import { Box, IconButton } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";
import CommonMenu from "./CommonMenu";
import { useState } from "react";


export default function BellIcon({count = 0}:{count?: number}) {
  
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }
  return (
    <>
    <Box
      sx={{
        position: 'relative',
        display: 'inline-block',
      }}
      >
        <IconButton onClick={(e)=>handleClick(e)}>
          <NotificationsNoneIcon
          sx={{
            fontSize: 25
          }}
          />
        </IconButton>
        <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          backgroundColor: 'error.main',
          color: 'error.contrastText',
          borderRadius: '50%',
          minWidth: 18,
          height: 18,
          p:'2px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 12,
        }}
        >
          {count}
        </Box>
      </Box>
      <Box>
      <CommonMenu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={() => setAnchorEl(null)}
        width="400px"
        menuName = "notifications"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        items={[
          {
            label: 'Notification 1',
            onClick: () => {
              console.log('Notification 1 clicked');
            },
            description: 'This is the first notification',
            icon: <CircleNotificationsOutlinedIcon />,
          },
          {
            label: 'Notification 2',
            onClick: () => {
              console.log('Notification 2 clicked');
          },
            description: 'This is the second notification',
            icon: <CircleNotificationsOutlinedIcon />,
          },
        ]}
      />
      </Box>
    </>
  )
}
