import { Stack } from '@mui/material'
import React from 'react'
import {
    NAVBAR_HEIGHT,
    SIDENAV_COLLAPSED_WIDTH,
    SIDENAV_EXPANDED_WIDTH,
} from '@/constants'

import ViewSidebarOutlinedIcon from "@mui/icons-material/ViewSidebarOutlined";

export default function SideNav({ isExpanded, setIsExpanded }: { isExpanded: boolean; setIsExpanded: (isExpanded: boolean) => void }) {
    return (
        <>
            <Stack
                sx={{
                    position: 'fixed',
                    width: isExpanded
                        ? `${SIDENAV_EXPANDED_WIDTH}px`
                        : `${SIDENAV_COLLAPSED_WIDTH}px`,
                    top: NAVBAR_HEIGHT,
                    left: 0,
                    height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
                    backgroundColor: 'primary.contrastText',
                    borderRight: '1px solid',
                    borderColor: 'divider',
                    boxShadow: 3,
                    zIndex: 1,
                    transition: "all 0.3s ease-in-out",
                    color: 'text.primary',
                    display: {
                        xs: "none",
                        sm: "none",
                        md: "flex",
                        lg: "flex",
                    }
                }}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <ViewSidebarOutlinedIcon/>
            </Stack>
        </>
    )
}
